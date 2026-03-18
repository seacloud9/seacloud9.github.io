import {
  Mesh,
  OctahedronGeometry,
  MeshBasicMaterial,
  Vector3,
} from 'three'
import { ANIMATION_CONFIG } from '../../config/animations.js'

export default class CrystalRise {
  #scene
  #crystals = []
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
      yPosition: 5.0, // Higher to ensure visibility above water
    }

    this.#createCrystals()
  }

  #createCrystals() {
    const count = this.#config.count

    // Create crystals following TriforceArrival pattern EXACTLY
    for (let i = 0; i < count; i++) {
      // MASSIVE geometry - impossible to miss
      const geometry = new OctahedronGeometry(5.0, 0)

      // TEST: Use basic material to rule out shader issues
      const material = new MeshBasicMaterial({
        color: 0xFF0000, // BRIGHT RED for testing
        wireframe: false,
        side: 2, // DoubleSide
        depthTest: false, // Render on top of everything
        depthWrite: false,
      })

      const crystal = new Mesh(geometry, material)

      // Position in circle around origin (like Triforce particles)
      const angle = (i / count) * Math.PI * 2
      const radius = 2.0 + Math.random() * this.#config.spreadRadius
      crystal.position.x = Math.cos(angle) * radius
      crystal.position.y = this.#config.yPosition // JUST Y, like TriforceArrival
      crystal.position.z = Math.sin(angle) * radius

      // Start invisible (like TriforceArrival)
      crystal.visible = false

      // Disable frustum culling to ensure visibility
      crystal.frustumCulled = false

      // Set render order EXTREMELY high - render LAST
      crystal.renderOrder = 999999

      // Ensure it's on all layers
      crystal.layers.enableAll()

      // Force matrix updates
      crystal.matrixAutoUpdate = true

      this.#crystals.push(crystal)
    }

    console.log(`💎 Created ${count} crystals (following TriforceArrival pattern)`)
  }

  play(position = null) {
    console.log('💎 Starting crystal rise animation')
    this.#isPlaying = true
    this.#startTime = performance.now()

    // If position provided, move all crystals to that location
    if (position) {
      this.#crystals.forEach((crystal, i) => {
        // Recalculate position in circle around boat
        const angle = (i / this.#crystals.length) * Math.PI * 2
        const radius = 2.0 + Math.random() * this.#config.spreadRadius
        crystal.position.x = position.x + (Math.cos(angle) * radius)
        crystal.position.z = position.z + (Math.sin(angle) * radius)
        crystal.position.y = this.#config.yPosition
      })
      console.log(`💎 Crystals positioned at boat: (${position.x.toFixed(2)}, ${position.y.toFixed(2)}, ${position.z.toFixed(2)})`)
    }

    // Add ALL crystals to scene and make visible (like TriforceArrival does)
    this.#crystals.forEach((crystal, i) => {
      crystal.visible = true

      // Force matrix update before adding
      crystal.updateMatrix()
      crystal.updateMatrixWorld(true)

      this.#scene.add(crystal) // Add EVERY time, like TriforceArrival

      // Log first crystal details for debugging
      if (i === 0) {
        console.log(`💎 First crystal details:`, {
          position: crystal.position,
          visible: crystal.visible,
          renderOrder: crystal.renderOrder,
          material: crystal.material.type,
          color: crystal.material.color,
          scale: crystal.scale,
          parent: crystal.parent ? crystal.parent.type : 'null',
          matrixWorldNeedsUpdate: crystal.matrixWorldNeedsUpdate,
        })
      }
    })

    // Force scene graph update
    this.#scene.updateMatrixWorld(true)

    console.log(`💎 Added ${this.#crystals.length} crystals to scene`)

    // CRITICAL DEBUG: Check after 500ms if they're still in scene
    setTimeout(() => {
      const stillInScene = this.#crystals.filter(c => c.parent !== null).length
      console.log(`💎 DIAGNOSTIC: ${stillInScene}/${this.#crystals.length} crystals still have parent after 500ms`)
      if (stillInScene === 0) {
        console.error(`💎 ERROR: All crystals removed from scene!`)
      }

      // Log all crystal positions
      console.log('💎 All crystal world positions:')
      this.#crystals.forEach((c, i) => {
        c.updateMatrixWorld(true)
        const worldPos = new Vector3()
        c.getWorldPosition(worldPos)
        if (i < 3) { // Log first 3
          console.log(`  Crystal ${i}: local=${c.position.x.toFixed(2)},${c.position.y.toFixed(2)},${c.position.z.toFixed(2)} world=${worldPos.x.toFixed(2)},${worldPos.y.toFixed(2)},${worldPos.z.toFixed(2)}`)
        }
      })
    }, 500)
  }

  stop() {
    console.log('💎 Stopping crystal rise animation')
    this.#isPlaying = false

    // DON'T hide crystals - leave them visible for debugging
    console.log('💎 Crystals remaining visible for inspection')
    // this.#crystals.forEach((crystal) => {
    //   crystal.visible = false
    //   crystal.position.y = this.#config.yPosition
    // })
  }

  update(time, delta) {
    if (!this.#isPlaying) return

    const elapsed = performance.now() - this.#startTime
    const duration = this.#config.duration
    const progress = Math.min(elapsed / duration, 1.0)

    // Log progress every 100 frames
    if (Math.floor(time * 60) % 100 === 0) {
      console.log(`💎 Crystal update: progress=${progress.toFixed(2)}, first crystal Y=${this.#crystals[0]?.position.y.toFixed(2)}`)
    }

    // Update all crystals - just animate position and rotation
    this.#crystals.forEach((crystal, i) => {
      // Stagger the animation
      const stagger = (i / this.#crystals.length) * 0.2
      const crystalProgress = Math.max(0, Math.min(1, (progress - stagger) / 0.8))

      // Animate Y position (rise)
      const baseY = this.#config.yPosition
      crystal.position.y = baseY + (crystalProgress * 5.0) + Math.sin(time * 2.0) * 0.3

      // Gentle rotation
      crystal.rotation.y = time * 0.5
    })

    // Auto-stop when complete (like TriforceArrival)
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
