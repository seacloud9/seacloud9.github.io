// Vendor
import { Scene, Vector2, Raycaster } from 'three'

// Modules
import Debugger from '@/js/managers/Debugger'

// Cameras
import MainCamera from '../cameras/MainCamera'
// import SphereComponent from '../components/ComponentSphere/'
import CameraManager from '../managers/CameraManager'
import OrbitCamera from '../cameras/OrbitCamera'
import settings from './settings'
import Ocean from '../components/Ocean'
import Boat from '../components/Boat'
import Clouds from '../components/Clouds'
import Horizon from '../components/Horizon'
import ControllerManager from '../managers/ControllerManager'
import Link from '../components/Link'
import LoaderManager from '../managers/LoaderManager'
import EnvManager from '../managers/EnvManager'
import GridManager from '../managers/GridManager'
import GameManager from '../managers/GameManager'
import ModeManager from '../managers/ModeManager'
import { MODE } from '../utils/constants'
import ExploreManager from '../managers/ExploreManager'
import ResumeNavigationManager from '../managers/ResumeNavigationManager'
import ResumeBillboard from '../components/ResumeBillboard'
import { RESUME_ISLANDS_ARRAY } from '../data/resumeIslands'
import Islands from '../components/Islands'

export default class MainView {
  #config
  #cameraManager
  #scene
  #renderer
  #components
  #debugFolder
  #gltf
  #meshShadows = []
  #meshReceiveShadows = []
  #mode
  #resumeBillboards = []
  #islands = null
  #raycaster = null
  #pointer = new Vector2()
  constructor({ config, renderer, mode = MODE.DEFAULT }) {
    // Options
    this.#config = config
    this.#renderer = renderer
    this.#mode = mode

    // Setup
    // replace with LoaderManager
    // this._resourceManager = this._createResourceManager()
    this.#scene = this._createScene()
    this.#cameraManager = this._createCameraManager()
    this.#components = null

    this.#debugFolder = this._createDebugFolder()

    // After loading
    this.#gltf = LoaderManager.get('boat').gltf

    EnvManager.init(this.#scene)
    this.#components = this._createComponents()

    GridManager.init(this.#scene)

    // Always initialize resume mode components (islands and billboards)
    // They will be shown/hidden based on mode
    this._initResumeMode()

    // Initialize managers based on mode
    if (this.#mode !== MODE.RESUME) {
      // Default/Game/Explore modes also need game managers
      GameManager.init(this.#scene)
      ExploreManager.init(this.#scene, this.camera)
      // Init Boat treasures (game mode only)
      this.#components.boat.initTreasures()
    }

    EnvManager.setOceanExtend(this.#components.ocean.meshExtend)
    EnvManager.setToonMaterials()
    ModeManager.addCamera(this.#cameraManager)

    // Initialize raycaster for billboard clicks
    this.#raycaster = new Raycaster()
    this._setupBillboardClickHandlers()

    // set up shadowmap on meshes
    this.#scene.traverse((object) => {
      if (object?.castCustomShadow === true) {
        object.mainMaterial = object.material
        object.shadowMaterial =
          object.type === 'SkinnedMesh' ? EnvManager.shadowSkinMaterial : EnvManager.shadowMaterial
        this.#meshShadows.push(object)
      }

      if (object?.receiveCustomShadow === true) {
        this.#meshReceiveShadows.push(object)
      }
    })

      // this.#scene.background = this.#skyTexture.renderTarget.texture
    // TODO: replace with classic background
  }

  destroy() {
    this._destroyComponents()
  }

  /**
   * Getters & Setters
   */
  get scene() {
    return this.#scene
  }

  get camera() {
    return this.#cameraManager?.active?.instance
  }

  get components() {
    return this.#components
  }

  get meshShadows() {
    return this.#meshShadows
  }

  get meshReceiveShadows() {
    return this.#meshReceiveShadows
  }

  /**
   * Private
   */
  _createResourceManager() {
    // const resourceManager = new ResourceManager({
    //   namespace: this.#config.name,
    // })
    // return resourceManager
  }

  _createScene() {
    const scene = new Scene()
    return scene
  }

  _createCameraManager() {
    const cameraManager = new CameraManager({
      scene: this.#scene,
      config: this.#config,
      renderer: this.#renderer,
      cameras: [
        {
          name: 'default',
          camera: MainCamera,
          settings: settings.camera,
        },
        {
          name: 'orbit',
          camera: OrbitCamera,
          settings: settings.camera,
        },
      ],
    })

    cameraManager.activate(settings.camera.default)

    return cameraManager
  }

  /**
   * Components
   */
  _createComponents() {
    const components = {}
    // this.#scene.add(ResourceLoader.get('watercolor/scene').scene)
    components.boat = this._createBoatComponent()
    components.link = this._createLinkComponent()
    components.ocean = this._createOceanComponent()
    components.clouds = this._createCloudsComponent()
    components.horizon = this._createHorizonComponent()

    return components
  }

  _createHorizonComponent() {
    const component = new Horizon({
      config: this.#config,
      debug: this.#debugFolder,
    })

    this.#scene.add(component)

    return component
  }

  _createBoatComponent() {
    const component = new Boat({
      config: this.#config,
      debug: this.#debugFolder,
      scene: this.#scene,
      gltf: this.#gltf,
    })

    this.#scene.add(component.object)

    component.initSubObjects()

    return component
  }

  _createLinkComponent() {
    const component = new Link({
      config: this.#config,
      debug: this.#debugFolder,
      scene: this.#scene,
      gltf: this.#gltf,
    })

    return component
  }

  _createOceanComponent() {
    const component = new Ocean({
      config: this.#config,
      debug: this.#debugFolder,
      scene: this.#scene,
    })

    this.#scene.add(component)

    return component
  }

  _createCloudsComponent() {
    const component = new Clouds({
      config: this.#config,
      debug: this.#debugFolder,
      scene: this.#scene,
    })

    this.#scene.add(component)

    return component
  }

  /**
   * Initialize Resume Mode
   * Creates islands and billboards for resume navigation
   */
  _initResumeMode() {
    console.log('Initializing RESUME mode')

    // Create islands (visual markers in the ocean)
    this.#islands = new Islands(this.#scene)

    // Create resume billboards for each island
    RESUME_ISLANDS_ARRAY.forEach((islandData) => {
      const billboard = new ResumeBillboard(islandData.id, islandData)

      // Add billboard to scene
      this.#scene.add(billboard.object)

      // Store billboard reference
      this.#resumeBillboards.push(billboard)

      // Register billboard with ResumeNavigationManager
      ResumeNavigationManager.registerBillboard(billboard, islandData.id)

      console.log(`Created billboard for ${islandData.name} (ID: ${islandData.id})`)
    })

    console.log(`Initialized ${this.#resumeBillboards.length} resume billboards`)
  }

  /**
   * Setup click/pointer event handlers for billboard interaction
   */
  _setupBillboardClickHandlers() {
    const canvas = this.#renderer.domElement

    // Track pointer position
    const onPointerMove = (event) => {
      const rect = canvas.getBoundingClientRect()
      this.#pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
      this.#pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1
    }

    // Handle clicks
    const onClick = (event) => {
      // Only handle clicks in RESUME mode
      if (this.#mode !== MODE.RESUME && ModeManager.state !== MODE.RESUME) {
        return
      }

      // Update raycaster
      this.#raycaster.setFromCamera(this.#pointer, this.camera)

      // Check intersections with visible billboards
      const visibleBillboards = this.#resumeBillboards
        .filter(b => b && b.isVisible)
        .map(b => b.object)

      const intersects = this.#raycaster.intersectObjects(visibleBillboards, false)

      if (intersects.length > 0) {
        const intersection = intersects[0]
        const uv = intersection.uv

        // Find which billboard was clicked
        const clickedBillboard = this.#resumeBillboards.find(
          b => b && b.object === intersection.object
        )

        if (clickedBillboard) {
          console.log('Billboard clicked!', clickedBillboard.islandId, 'UV:', uv)
          clickedBillboard.handleClick(uv)
        }
      }
    }

    canvas.addEventListener('pointermove', onPointerMove)
    canvas.addEventListener('click', onClick)

    // Store for cleanup
    this._billboardClickHandlers = { onPointerMove, onClick }
  }

  _destroyComponents() {
    if (!this.#components) return
    for (const key in this.#components) {
      if (typeof this.#components[key].destroy === 'function') this.#components[key].destroy()
    }

    // Remove billboard click handlers
    if (this._billboardClickHandlers) {
      const canvas = this.#renderer.domElement
      canvas.removeEventListener('pointermove', this._billboardClickHandlers.onPointerMove)
      canvas.removeEventListener('click', this._billboardClickHandlers.onClick)
    }

    // Dispose resume billboards
    if (this.#resumeBillboards.length > 0) {
      this.#resumeBillboards.forEach(billboard => billboard.dispose())
      this.#resumeBillboards = []
    }
  }

  /**
   * Update
   */
  update({ time, delta }) {
    this._updateComponents({ time, delta })
    this.#cameraManager.update({ time, delta })

    ControllerManager?.update({ time, delta })
    GridManager?.update({ time, delta })

    if (ModeManager.state === MODE.GAME || ModeManager.state === MODE.GAME_STARTED) {
      GameManager?.update({ time, delta })
    } else if (ModeManager.state === MODE.EXPLORE) {
      ExploreManager?.update({ time, delta })
    } else if (this.#mode === MODE.RESUME || ModeManager.state === MODE.RESUME) {
      // Update resume navigation (proximity detection, billboard visibility)
      ResumeNavigationManager.update({
        boat: this.#components.boat,
        camera: this.camera
      })
    }
  }

  _updateComponents({ time, delta }) {
    let component
    for (const key in this.#components) {
      component = this.#components[key]
      if (typeof component.update === 'function') {
        component.update({ time, delta })
      }
    }
  }

  /**
   * Resize
   */
  resize({ width, height }) {
    this.#cameraManager.resize({ width, height })

    // resize components
    let component
    for (const key in this.#components) {
      component = this.#components[key]
      if (typeof component.resize === 'function') {
        component.resize({ width, height })
      }
    }
  }

  /**
   * Debug
   */
  _createDebugFolder() {
    if (!Debugger) return

    const debugFolder = Debugger.addFolder({ title: `Scene ${this.#config.name}`, expanded: true })

    // Debugger.on('save', () => {
    //   Debugger.save(settings, settings.file).then((e) => {
    //     if (e.status === 200) console.log(`Successfully saved file: ${settings.file}`)
    //   })
    // })
    return debugFolder
  }
}
