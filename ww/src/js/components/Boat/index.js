import { Object3D, ShaderMaterial } from 'three'
import { clamp, degToRad, lerp } from 'three/src/math/MathUtils'
import ControllerManager from '../../managers/ControllerManager'
import UIManager from '../../managers/UIManager'
import { gsap } from 'gsap'

import Splashes from './Splashes'
import ParticlesSide from './ParticlesSide'
import Sail from './Sail'
import ParticlesFront from './ParticlesFront'
import ParticlesJump from './ParticlesJump'

// Toon
import vertexToonShader from '@glsl/partials/toon.vert'
import fragmentToonShader from '@glsl/partials/toon.frag'
// Receive shadows
import vertexReceiveShadowShader from '@glsl/shadows/receiveShadow.vert'
import fragmentReceiveShadowShader from '@glsl/shadows/receiveShadow.frag'
import EnvManager from '../../managers/EnvManager'
import {
  CLOSE_TREASURE,
  EVENT_HIT,
  EVENT_SCORE,
  HOOK_PUT_AWAY,
  SHOW_TREASURE,
  START_CAMERA_TREASURE_FOUND,
  TOOGLE_HOOK,
  TRIFORCE_FOUND,
} from '../../utils/constants'
import { EventBusSingleton } from 'light-event-bus'
import Settings from '../../utils/Settings'
import Crane from './Crane'
import ExploreManager from '../../managers/ExploreManager'
import Rupees from '../Entitites/Rupees'
import { LIGHT_RING_TYPE } from '../Entitites/LightRing'
import TriforceShards from '../Entitites/TriforceShards'

export const BOAT_MODE = {
  SAIL: 'sail',
  HOOK: 'hook',
  AUTO_SAIL: 'auto_sail', // NEW: For resume navigation
}

export default class Boat {
  #debug
  #settings = {
    color: '#4c6ed4',
    power: 0.91,
    speedTex: 0.01,
  }
  #scale = 5 // 5
  #initRotaY = degToRad(180)
  #initRotaZ = degToRad(0)
  #initRotaX = degToRad(0)
  #mesh
  #splashMeshes
  #mastBone
  #mastBaseBone
  #sailMesh
  mastDir = 0
  sailState = 0.25
  #particleSideMesh
  #particlesFrontMesh
  #particlesJumpMesh
  #craneMesh
  #boatBodyMesh
  #absTurnForce = 0
  #absTurnForceTarget = 0
  #scene
  #gltf
  rotaZ = 1
  #object
  #mode = BOAT_MODE.SAIL
  #rupees = []
  #triforceShards
  constructor({ debug, scene, gltf }) {
    this.#debug = debug
    this.#scene = scene
    this.#gltf = gltf
    this.#object = new Object3D()

    this.#mesh = this._createMesh()
    this._createMaterials()

    this.#object.add(this.#mesh)
  }

  get object() {
    return this.#object
  }

  get mastBone() {
    return this.#mastBone
  }

  get sailMesh() {
    return this.#sailMesh
  }

  get mode() {
    return this.#mode
  }

  initSubObjects() {
    // fix issue objects no appearing
    this.#sailMesh = this._createSailMesh()
    this.#splashMeshes = this._createSplashMeshes()
    this.#particleSideMesh = this._createParticlesSideMesh()
    this.#particlesFrontMesh = this._createParticlesFrontMesh()
    this.#particlesJumpMesh = this._createParticlesJumpMesh()
    this.#craneMesh = this._createCraneMesh()

    this.#mastBaseBone = this.#mesh.getObjectByName('j_fn_mast')

    // events
    EventBusSingleton.subscribe(EVENT_HIT, this._eventHit)
    EventBusSingleton.subscribe(TOOGLE_HOOK, this._toogleHook)
    EventBusSingleton.subscribe(HOOK_PUT_AWAY, this._toogleHookPutAway)
    EventBusSingleton.subscribe(START_CAMERA_TREASURE_FOUND, this._playTreasureAnimation)
    EventBusSingleton.subscribe(SHOW_TREASURE, this._showTreasure)
    EventBusSingleton.subscribe(CLOSE_TREASURE, this._resetTreasureAnimation)

    const s = 0.25
    this.sailMesh.mesh.scale.set(s, this.sailMesh.mesh.scale.y, this.sailMesh.mesh.scale.z)

    this.initSailZ = this.#sailMesh.mesh.position.z

    // this._toogleHook() // debug
  }

  initTreasures() {
    this.#rupees = this._createRupees()
    this.#triforceShards = this._createTriforceShards()

    this._createDebugFolder()
  }

  /**
   * AUTO-SAIL METHODS FOR RESUME NAVIGATION
   */

  // Auto-sail state
  #autoSailActive = false
  #autoSailTarget = null
  #autoSailTimeline = null
  #autoSailOnComplete = null

  /**
   * Auto-sail to a target position (for resume island navigation)
   * @param {Vector3} targetPosition - The destination position
   * @param {Function} onComplete - Callback when auto-sail completes
   */
  autoSailTo(targetPosition, onComplete) {
    if (!targetPosition) return

    console.log('Auto-sailing to:', targetPosition)

    // Set mode to AUTO_SAIL
    this.#mode = BOAT_MODE.AUTO_SAIL
    this.#autoSailActive = true
    this.#autoSailTarget = targetPosition.clone()
    this.#autoSailOnComplete = onComplete

    // Calculate distance and duration
    const currentPos = this.#object.position
    const distance = currentPos.distanceTo(targetPosition)
    const duration = Math.max(5, distance / 200) // Slower sailing speed (was 800, now 200 for smoother experience)

    // Calculate angle to target
    const dx = targetPosition.x - currentPos.x
    const dz = targetPosition.z - currentPos.z
    const targetAngle = Math.atan2(dx, dz)

    // Kill any existing auto-sail animation
    if (this.#autoSailTimeline) {
      this.#autoSailTimeline.kill()
    }

    // Create GSAP timeline for smooth sailing
    this.#autoSailTimeline = gsap.timeline({
      onUpdate: () => {
        // Update boat direction during animation
        if (ControllerManager.boat) {
          const currentAngle = ControllerManager.boat.angleDir || 0
          ControllerManager.boat.angleDir = targetAngle
          ControllerManager.boat.velocity = 0.8 // Sailing speed
          ControllerManager.boat.velocityP = 0.8
        }
      },
      onComplete: () => {
        this.stopAutoSail()
        if (this.#autoSailOnComplete) {
          this.#autoSailOnComplete()
        }
        EventBusSingleton.publish('AUTO_SAIL_COMPLETE')
      }
    })

    // Animate boat position
    this.#autoSailTimeline.to(this.#object.position, {
      x: targetPosition.x,
      z: targetPosition.z,
      duration: duration,
      ease: 'power2.inOut'
    })

    // Animate ControllerManager boat state
    if (ControllerManager.boat) {
      this.#autoSailTimeline.to(ControllerManager.boat, {
        angleDir: targetAngle,
        duration: duration * 0.3, // Rotate faster than sailing
        ease: 'power2.out'
      }, 0)
    }
  }

  /**
   * Stop auto-sailing
   */
  stopAutoSail() {
    if (this.#autoSailTimeline) {
      this.#autoSailTimeline.kill()
      this.#autoSailTimeline = null
    }

    this.#autoSailActive = false
    this.#autoSailTarget = null
    this.#autoSailOnComplete = null

    // Return to normal SAIL mode
    if (this.#mode === BOAT_MODE.AUTO_SAIL) {
      this.#mode = BOAT_MODE.SAIL
    }

    // Reset velocity
    if (ControllerManager.boat) {
      ControllerManager.boat.velocity = 0
      ControllerManager.boat.velocityP = 0
    }
  }

  /**
   * Check if currently auto-sailing
   */
  isAutoSailing() {
    return this.#autoSailActive
  }

  /**
   * Get auto-sail target position
   */
  getAutoSailTarget() {
    return this.#autoSailTarget
  }

  _toogleHook = () => {
    if (this.boatModeTransitioning) return
    if (this.#mode === BOAT_MODE.SAIL) {
      this.boatModeTransitioning = true
      this.tlHook = new gsap.timeline({
        onComplete: () => {
          this.#mode = BOAT_MODE.HOOK
          this.boatModeTransitioning = false
          this.#splashMeshes.transitioningSpeed(this.#mode)
          this.#particlesFrontMesh.transitioningSpeed(this.#mode)
        },
      })
      this.tlHook.to(this.#mastBaseBone.scale, { x: 0, y: 0, z: 0, duration: 0.75, ease: 'power4.out' }, 0)
      this.tlHook.to(this.#sailMesh.mesh.scale, { x: 0, y: 0, z: 0, duration: 0.75, ease: 'power4.out' }, 0)
      this.tlHook.to(this.#sailMesh.mesh.position, { z: -60, duration: 0.75, ease: 'power4.out' }, 0)

      this.tlHook.add(() => {
        this.#craneMesh.open()
      }, 0.3)

      UIManager.updateBoatMode(BOAT_MODE.HOOK)
      ControllerManager.updateBoatMode(BOAT_MODE.HOOK)
    } else {
      const delay = 0.8
      this.boatModeTransitioning = true
      this.tlHook = new gsap.timeline()
      this.tlHook.add(() => {
        this.#craneMesh.close()
      }, 0)
      this.tlHook.to(this.#mastBaseBone.scale, { x: 1, y: 1, z: 1, duration: 1, ease: 'bounce.out' }, delay)
      const scaleX = -this.mastDir * 1.1
      this.tlHook.to(this.#sailMesh.mesh.scale, { x: scaleX, y: 1, z: 1, duration: 1, ease: 'bounce.out' }, delay)
      this.tlHook.to(this.#sailMesh.mesh.position, { z: this.initSailZ, duration: 1, ease: 'bounce.out' }, delay)
      this.tlHook.add(() => {
        this.#mode = BOAT_MODE.SAIL
        this.boatModeTransitioning = false
        this.#splashMeshes.transitioningSpeed(this.#mode)
        this.#particlesFrontMesh.transitioningSpeed(this.#mode)
      })
      UIManager.updateBoatMode(BOAT_MODE.SAIL)
      this.tlHook.add(() => {
        ControllerManager.updateBoatMode(BOAT_MODE.SAIL)
      }, 1)
    }
  }

  _toogleHookPutAway = (value) => {
    if (value) {
      this.#craneMesh.putAway()
    } else {
      this.#craneMesh.reset(ExploreManager.treasureZone)
    }
  }

  _createMesh() {
    let mesh = this.#gltf.scene

    mesh.scale.set(this.#scale, this.#scale, this.#scale)

    this.#object.rotation.y = this.#initRotaY

    mesh.visible = true

    // mesh.renderOrder = 10000000

    return mesh
  }

  _createMaterials() {
    const boatMesh = this.#mesh.getObjectByName('boat')

    // Safety check: If boat object doesn't exist, search the whole mesh
    if (!boatMesh) {
      console.warn('Boat mesh "boat" not found, searching for children in root mesh')
      console.log('Root mesh structure:', this.#mesh.name, 'children:', this.#mesh.children.map(c => c.name))

      // Try to apply materials directly to mesh children
      if (this.#mesh && this.#mesh.children) {
        this.#mesh.children.forEach((child) => {
          this._applyMaterialToChild(child)
        })
      }
      return
    }

    console.log('Found boat mesh, applying materials to:', boatMesh.children.map(c => c.name))

    // Replace materials by custom Toon materials
    boatMesh.children.forEach((child) => {
      this._applyMaterialToChild(child)
    })
  }

  _applyMaterialToChild(child) {
    if (child.name !== 'boat-sail' && (child.type === 'SkinnedMesh' || child.type === 'Mesh')) {
      // Get texture from original material or from existing shader material
      const textureOg = child.material.map || (child.material.uniforms?.map?.value)
      console.log(`Child: ${child.name}, has texture: ${!!textureOg}, material type: ${child.material.type}`)

      if (child.name === 'boat-body') {
        this.#boatBodyMesh = child
        // add receive shadows
        child.material = new ShaderMaterial({
          vertexShader: vertexReceiveShadowShader,
          fragmentShader: fragmentReceiveShadowShader,
          uniforms: {
            map: { value: textureOg },
            sunDir: { value: EnvManager.sunDir.position },
            ambientColor: { value: EnvManager.ambientLight.color },
            // receive shadows
            uDepthMap: {
              value: null, // EnvManager.sunShadowMap.map.texture,
            },
            uShadowCameraP: {
              value: EnvManager.sunShadowMap.camera.projectionMatrix,
            },
            uShadowCameraV: {
              value: EnvManager.sunShadowMap.camera.matrixWorldInverse,
            },
            coefShadow: {
              value: EnvManager.settings.coefShadow,
            },
            sRGBSpace: { value: 0 },
          },
          defines: {
            USE_BONES: child.type === 'SkinnedMesh',
            USE_SHADOWS: Settings.castShadows,
            // USE_MORPHTARGETS: true,
          },
          name: 'toon',
        })
        console.log('Applied boat-body material to:', child.name)
      } else {
        child.material = new ShaderMaterial({
          vertexShader: vertexToonShader,
          fragmentShader: fragmentToonShader,
          uniforms: {
            map: { value: textureOg },
            sunDir: { value: EnvManager.sunDir.position },
            ambientColor: { value: EnvManager.ambientLight.color },
            coefShadow: { value: EnvManager.settings.coefShadow },
            sRGBSpace: { value: 0 },
          },
          defines: {
            USE_BONES: child.type === 'SkinnedMesh',
          },
          name: 'toon',
        })
        console.log('Applied toon material to:', child.name)
      }

      child.castCustomShadow = true
    }
  }

  _createSailMesh() {
    return new Sail(this.#mesh)
  }

  _createCraneMesh() {
    return new Crane(this.#gltf, this.#mesh, this.#debug)
  }

  _createSplashMeshes() {
    return new Splashes(this.#object)
  }

  _createParticlesSideMesh() {
    return new ParticlesSide(this.#mesh, this.#debug)
  }

  _createParticlesFrontMesh() {
    // todo: check le this, car pas encore init
    return new ParticlesFront(this.#object, this.#debug)
  }

  _createParticlesJumpMesh() {
    return new ParticlesJump(this.#object, this.#debug)
  }

  _createRupees() {
    const rupees = new Rupees(this.#mesh, 'treasure')

    // rupee silver
    const mesh = rupees.add(0, 0)
    mesh.position.z = -0.1
    mesh.rotation.x = 0.35
    mesh.visible = false

    mesh.material = rupees.materials[6]
    this.#mesh.add(mesh)

    // rupee
    const mesh2 = rupees.add(0, 0)
    mesh2.position.z = -0.1
    mesh2.rotation.x = 0.35
    mesh2.visible = false

    mesh2.material = rupees.materials[5]
    this.#mesh.add(mesh2)

    const arr = [mesh, mesh2]

    return arr
  }

  _createTriforceShards() {
    const { shards } = new TriforceShards(this.#mesh)

    for (let i = 0; i < shards.length; i++) {
      const mesh = shards[i]
      mesh.position.z = -0.1
      mesh.rotation.x = 2
      mesh.visible = false
    }

    return shards
  }

  _playTreasureAnimation = () => {
    this.#boatBodyMesh.morphTargetInfluences[0] = 1
  }

  _resetTreasureAnimation = () => {
    // if rupee
    if (ExploreManager.treasureZone.type === LIGHT_RING_TYPE.RUPEE_0) {
      this.#rupees[0].visible = false
    } else if (ExploreManager.treasureZone.type === LIGHT_RING_TYPE.RUPEE_1) {
      this.#rupees[1].visible = false
    } else if (ExploreManager.treasureZone.type === LIGHT_RING_TYPE.TRIFORCE) {
      this.#triforceShards[ExploreManager.treasureZone.triforceNb].visible = false
    }
    this.#mode = BOAT_MODE.HOOK
    this._toogleHook()
    this.#craneMesh.resetSeabox()
  }

  _showTreasure = () => {
    // if rupee
    if (ExploreManager.treasureZone.type === LIGHT_RING_TYPE.RUPEE_0) {
      this.#rupees[0].visible = true
      EventBusSingleton.publish(EVENT_SCORE, 200)
    } else if (ExploreManager.treasureZone.type === LIGHT_RING_TYPE.RUPEE_1) {
      this.#rupees[1].visible = true
      EventBusSingleton.publish(EVENT_SCORE, 100)
    } else if (ExploreManager.treasureZone.type === LIGHT_RING_TYPE.TRIFORCE) {
      this.#triforceShards[ExploreManager.treasureZone.triforceNb].visible = true
      EventBusSingleton.publish(TRIFORCE_FOUND, ExploreManager.treasureZone.triforceNb)
    }
  }

  _eventHit = () => {
    this.tlHit?.kill()
    this.tlHit = new gsap.timeline()
    this.tlHit.fromTo(this, { rotaZ: 1 }, { rotaZ: 10, duration: 1 }, 0)
  }

  /**
   * Update
   */
  update({ time, delta }) {
    this.#object.rotation.y = this.#initRotaY + ControllerManager.boat.angleDir

    this.#mesh.rotation.z =
      this.#initRotaZ + Math.sin(time + this.rotaZ) * (0.1 + ControllerManager.boat.turnForce * 0.5)
    this.#mesh.rotation.x = this.#initRotaX + Math.sin(time) * Math.min(ControllerManager.boat.velocity * 6, 0.2)

    this.#sailMesh?.update({ time, delta })
    this.#splashMeshes?.update({ time, delta })
    this.#craneMesh?.update({ time, delta })

    this.#absTurnForceTarget = Math.abs(ControllerManager.boat.turnForce)

    this.#absTurnForce = lerp(this.#absTurnForce, this.#absTurnForceTarget, 0.1)

    this.#mesh.position.y = ControllerManager.boat.up

    // if (absTurnForce > 0) {

    if (ControllerManager.stopped) {
      this.#particleSideMesh.mesh.visible = false
      this.#particlesFrontMesh.mesh.visible = false
      this.#particlesJumpMesh.mesh.visible = false
      this.canShowP = false
    } else {
      let progessP = ControllerManager.boat.velocityP
      this.#particleSideMesh?.update({
        time,
        delta,
        turnForce: this.#absTurnForce,
        velocity: ControllerManager.boat.velocity * 100,
      })

      this.#particlesFrontMesh?.update({
        time,
        delta,
        velocity: progessP,
      })

      this.#particlesJumpMesh?.update({
        time,
        delta,
        velocity: progessP,
      })

      if (!this.canShowP) {
        this.canShowP = true

        setTimeout(() => {
          if (this.#particleSideMesh && this.#particleSideMesh.mesh) {
            this.#particleSideMesh.mesh.visible = true
          }
          if (this.#particlesFrontMesh && this.#particlesFrontMesh.mesh) {
            this.#particlesFrontMesh.mesh.visible = true
          }
          if (this.#particlesJumpMesh && this.#particlesJumpMesh.mesh) {
            this.#particlesJumpMesh.mesh.visible = true
          }
        }, 500)
      }
    }

    // }

    if (ControllerManager.boat.velocityP > 0.1) {
      let boatAngle = ControllerManager.boat.angleDir % (Math.PI * 2)

      if (boatAngle < 0) {
        boatAngle = Math.PI * 2 + boatAngle
      }
      if (this.mastDir >= 0 && boatAngle < Math.PI) {
        this.turnMast(-1)
      } else if (this.mastDir <= 0 && boatAngle > Math.PI) {
        this.turnMast(1)
      }
    }

    if (ControllerManager.boat.velocityP > 0.5) {
      this.animSail(1.1)
    } else if (ControllerManager.boat.velocityP > 0.1) {
      this.animSail(0.6)
    } else {
      this.animSail(0.25)
    }
    // this.sailMesh.scale.x = ControllerManager.boat.velocityP * -this.mastDir

    // Treasures (only update if they exist - they're not initialized in RESUME mode)
    if (this.#rupees && this.#rupees.length > 0) {
      for (let i = 0; i < this.#rupees.length; i++) {
        const rupee = this.#rupees[i]
        rupee.rotation.y += (delta / 16) * 0.02
      }
    }

    if (this.#triforceShards && this.#triforceShards.length > 0) {
      for (let i = 0; i < this.#triforceShards.length; i++) {
        const shard = this.#triforceShards[i]
        shard.rotation.z += (delta / 16) * 0.02
      }
    }
  }

  resize({ width, height }) {}

  turnMast(dir = 1) {
    const maxDeg = 36
    const tl = new gsap.timeline()
    this.mastDir = dir

    tl.to(this.sailMesh.mastBone.rotation, { y: degToRad(-90 + maxDeg * dir), duration: 2.1 }, 0)
    tl.to(this.sailMesh.mesh.rotation, { z: degToRad(-maxDeg * dir), duration: 2.1 }, 0)
    tl.add(() => {
      if (ControllerManager.boat.velocityP > 0.5) {
        this.animSail(1.1, true)
      } else {
        this.animSail(0.6, true)
      }
    }, 1)

    if (this.#mode === BOAT_MODE.HOOK) {
      this.#craneMesh.turn(dir)
    }
  }

  animSail(force, turn) {
    if (force === this.sailState && !turn) return
    this.sailState = force
    const s = -this.mastDir * force

    if (s > 0 || s < 0) {
      const tl = new gsap.timeline()

      tl.to(this.sailMesh.mesh.scale, { x: s, duration: 1.7, ease: 'bounce.out' }, 0)
    }
  }

  /**
   * Debug
   */
  _createDebugFolder() {
    if (!this.#debug) return

    const settingsChangedHandler = () => {
      // this.#splashMesh2.material.uniforms.power.value = this.#settings.power
    }

    const debug = this.#debug.addFolder({ title: 'Boat', expanded: false })

    debug.addInput(this.#settings, 'power', { step: 0.01 }).on('change', settingsChangedHandler)
    debug.addInput(this.#triforceShards[0], 'rotation')

    const btn = debug.addButton({
      title: 'Copy settings',
      label: 'copy', // optional
    })

    btn.on('click', () => {
      navigator.clipboard.writeText(JSON.stringify(this.#settings))
      console.log('copied to clipboard', this.#settings)
    })

    return debug
  }
}
