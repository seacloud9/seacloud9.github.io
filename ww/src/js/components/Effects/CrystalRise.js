import {
  Mesh,
  OctahedronGeometry,
  MeshPhongMaterial,
  Vector3,
  Group,
  AdditiveBlending,
  Color,
} from 'three'
import { ANIMATION_CONFIG } from '../../config/animations.js'

export default class CrystalRise {
  #scene
  #crystalGroup
  #crystals = []
  #material
  #startTime
  #config
  #isPlaying = false

  constructor(scene) {
    this.#scene = scene
    this.#config = ANIMATION_CONFIG.triforce.crystals || {
      count: 12,
      spreadRadius: 4.0,
      riseSpeed: 2.0,
      duration: 3000,
      yPosition: 3.0,
    }

    this.#createCrystals()
  }

  #createCrystals() {
    this.#crystalGroup = new Group()
    const count = this.#config.count

    // Create individual crystals with basic materials (no shaders)
    for (let i = 0; i < count; i++) {
      // Create crystal geometry (octahedron for gem look) - MASSIVE SIZE with detail
      const geometry = new OctahedronGeometry(5.0, 2) // Detail level 2 for proper faces

      // Random position around origin
      const angle = (i / count) * Math.PI * 2
      const radius = 2.0 + Math.random() * this.#config.spreadRadius
      const offsetX = Math.cos(angle) * radius
      const offsetZ = Math.sin(angle) * radius

      // Material with emissive properties (self-illumination) for visibility
      const material = new MeshPhongMaterial({
        color: 0xFFD700, // Solid gold color
        emissive: 0xFFAA00, // Self-illumination (glows gold)
        emissiveIntensity: 0.5, // Glow strength
        shininess: 100, // Shiny metallic look
        transparent: true, // Enable transparency for proper renderOrder
        opacity: 1.0, // Full opacity
        side: 2, // DoubleSide - render both sides
        depthWrite: false, // Disable depth writing for renderOrder to work
        depthTest: true, // Enable depth testing
      })

      const crystal = new Mesh(geometry, material)

      // Make crystals render on top of everything
      crystal.renderOrder = 9999

      // Position crystal
      crystal.position.set(offsetX, this.#config.yPosition, offsetZ)

      // Store initial data
      crystal.userData = {
        index: i,
        startY: this.#config.yPosition,
        offsetX,
        offsetZ,
        randomPhase: Math.random() * Math.PI * 2,
      }

      this.#crystals.push(crystal)
      this.#crystalGroup.add(crystal)
    }

    this.#crystalGroup.visible = false

    console.log(`💎 Created ${count} crystals`)
    console.log(`💎 Crystal group:`, this.#crystalGroup)
    console.log(`💎 First crystal position:`, this.#crystals[0]?.position)
    console.log(`💎 First crystal material:`, this.#crystals[0]?.material)
  }

  play(position = null) {
    console.log('💎 Starting crystal rise animation')
    this.#isPlaying = true
    this.#startTime = performance.now()

    // Position crystals at the specified location (e.g., boat position)
    if (position) {
      this.#crystalGroup.position.copy(position)
      console.log(`💎 Crystals positioned at: (${position.x.toFixed(2)}, ${position.y.toFixed(2)}, ${position.z.toFixed(2)})`)
    }

    this.#crystalGroup.visible = true
    this.#scene.add(this.#crystalGroup)

    // Debug: Log scene hierarchy
    console.log(`💎 Crystal group added to scene. Group has ${this.#crystalGroup.children.length} children`)
    console.log(`💎 Crystal group world position:`, this.#crystalGroup.getWorldPosition(new Vector3()))
    console.log(`💎 Scene children count:`, this.#scene.children.length)
  }

  stop() {
    console.log('💎 Stopping crystal rise animation')
    this.#isPlaying = false
    this.#crystalGroup.visible = false

    // Remove from scene
    if (this.#crystalGroup.parent) {
      this.#scene.remove(this.#crystalGroup)
    }

    // Reset crystal positions and visibility
    this.#crystals.forEach((crystal) => {
      crystal.position.y = crystal.userData.startY
      crystal.visible = false
      crystal.rotation.y = 0
    })
  }

  update(time, delta) {
    if (!this.#isPlaying) return

    const elapsed = performance.now() - this.#startTime
    const duration = this.#config.duration
    const progress = Math.min(elapsed / duration, 1.0)

    // Debug log progress occasionally
    if (Math.floor(progress * 10) !== Math.floor(this.lastLoggedProgress || 0)) {
      const firstCrystal = this.#crystals[0]
      console.log(`💎 Crystal progress: ${(progress * 100).toFixed(0)}% (time: ${time.toFixed(2)}s)`)
      console.log(`   First crystal Y: ${firstCrystal.position.y.toFixed(2)}, Visible: ${firstCrystal.visible}`)
      console.log(`   Visible crystal count: ${this.#crystals.filter(c => c.visible).length}`)
      this.lastLoggedProgress = progress * 10
    }

    // Update each crystal manually
    this.#crystals.forEach((crystal, i) => {
      const userData = crystal.userData
      const count = this.#config.count

      // Staggered appearance
      const delay = userData.index / count * 0.08
      const crystalProgress = Math.max(0, Math.min(1, (progress - delay) / 0.3))

      // Rise height
      const riseHeight = crystalProgress * this.#config.riseSpeed * 3.0

      // Floating oscillation
      const oscillation = Math.sin(time * 2.0 + userData.randomPhase) * 0.3

      // Update position
      crystal.position.y = userData.startY + riseHeight + oscillation

      // Rotation
      const rotationSpeed = 0.5 + userData.randomPhase * 0.5
      crystal.rotation.y = time * rotationSpeed

      // NO OPACITY CHANGES - keep solid for now
      // Just make them visible throughout the animation
      crystal.visible = crystalProgress > 0.1 && progress < 0.9

      // Simple color - just solid gold
      // NO color changes for now
    })

    // Auto-stop when complete
    if (progress >= 1.0) {
      this.stop()
    }
  }

  dispose() {
    this.#crystals.forEach((crystal) => {
      crystal.geometry.dispose()
      crystal.material.dispose()
    })
  }
}
