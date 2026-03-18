import {
  Mesh,
  BufferGeometry,
  BufferAttribute,
  ShaderMaterial,
  MeshBasicMaterial,
  BoxGeometry,
  Vector3,
  Points,
  AdditiveBlending,
  DoubleSide,
} from 'three'
import { ANIMATION_CONFIG } from '../../config/animations.js'
import arrivalVertShader from '../../glsl/triforce/arrival.vert'
import arrivalFragShader from '../../glsl/triforce/arrival.frag'
import particleVertShader from '../../glsl/triforce/particles.vert'
import particleFragShader from '../../glsl/triforce/particles.frag'

export default class TriforceArrival {
  #scene
  #triforceMesh
  #particleSystem
  #material
  #particleMaterial
  #startTime
  #config
  #isPlaying = false

  constructor(scene) {
    this.#scene = scene
    this.#config = ANIMATION_CONFIG.triforce.shader3D

    this.#createTriforceMesh()
    this.#createParticles()

    // ADD TO SCENE NOW (like the original working test cube!)
    // Start invisible, will show during play()
    this.#scene.add(this.#triforceMesh)
    this.#scene.add(this.#particleSystem)

    console.log('🔺 Triforce cube added to scene during construction (like original test)')
  }

  #createTriforceMesh() {
    // SIMPLE TEST: Just use a red cube like before (that worked!)
    const geometry = new BoxGeometry(50, 50, 50)

    // SIMPLE red material - ENABLE depth test!
    this.#material = new MeshBasicMaterial({
      color: 0xFF0000, // RED - highly visible!
      depthTest: true, // ENABLE depth test!
      depthWrite: true, // ENABLE depth write!
    })

    this.#triforceMesh = new Mesh(geometry, this.#material)
    this.#triforceMesh.visible = false

    // No scaling needed - already 50 units
    this.#triforceMesh.renderOrder = 9999
    this.#triforceMesh.frustumCulled = false

    console.log('🔺 Created RED TEST CUBE (exactly like before)')
  }

  #createParticles() {
    const count = this.#config.particles.count
    const geometry = new BufferGeometry()

    const positions = new Float32Array(count * 3)
    const offsets = new Float32Array(count * 3)
    const indices = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      // Random position around triforce
      const theta = Math.random() * Math.PI * 2
      const radius = Math.random() * this.#config.particles.spreadRadius

      positions[i * 3] = Math.cos(theta) * radius
      positions[i * 3 + 1] = this.#config.uniforms.yPosition
      positions[i * 3 + 2] = Math.sin(theta) * radius

      // Random offset for variation
      offsets[i * 3] = (Math.random() - 0.5) * 0.5
      offsets[i * 3 + 1] = 0
      offsets[i * 3 + 2] = (Math.random() - 0.5) * 0.5

      indices[i] = i / count // 0.0 to 1.0
    }

    geometry.setAttribute('position', new BufferAttribute(positions, 3))
    geometry.setAttribute('offset', new BufferAttribute(offsets, 3))
    geometry.setAttribute('particleIndex', new BufferAttribute(indices, 1))

    this.#particleMaterial = new ShaderMaterial({
      vertexShader: particleVertShader,
      fragmentShader: particleFragShader,
      uniforms: {
        uTime: { value: 0 },
        uProgress: { value: 0 },
        uRiseSpeed: { value: this.#config.particles.riseSpeed },
      },
      transparent: true,
      blending: AdditiveBlending,
      depthWrite: false,
    })

    this.#particleSystem = new Points(geometry, this.#particleMaterial)
    this.#particleSystem.visible = false

    // Enable all layers
    this.#particleSystem.layers.enableAll()
  }

  play(position = null) {
    console.log('🔺 Starting 3D triforce shader animation')
    this.#isPlaying = true
    this.#startTime = performance.now()

    // Position red cube IN FRONT of camera (POSITIVE Z offset like working test)
    if (position) {
      this.#triforceMesh.position.set(0, 10, 50) // EXACTLY like the working red cube!
      console.log(`🔺 RED CUBE positioned at (0, 10, 50) - IN FRONT of camera`)
    }

    // Start at scale 1 (visible immediately - no animation for now)
    this.#triforceMesh.scale.set(50, 50, 50)

    // Already added to scene in constructor
    // Just make visible now
    this.#triforceMesh.visible = true
    this.#particleSystem.visible = true

    // Force matrix updates
    this.#triforceMesh.updateMatrix()
    this.#triforceMesh.updateMatrixWorld(true)
    this.#particleSystem.updateMatrix()
    this.#particleSystem.updateMatrixWorld(true)

    // Force scene update
    this.#scene.updateMatrixWorld(true)

    console.log(`🔺 RED CUBE ADDED TO SCENE - will scale in!`)
  }

  stop() {
    console.log('🔻 Stopping 3D triforce shader animation')
    this.#isPlaying = false

    // Don't remove from scene - just hide it
    this.#triforceMesh.visible = false
    this.#particleSystem.visible = false

    // Reset opacity
    this.#material.opacity = 1.0
    this.#particleMaterial.uniforms.uProgress.value = 0
  }

  update(time, delta) {
    if (!this.#isPlaying) return

    const elapsed = performance.now() - this.#startTime
    const totalDuration = this.#config.totalDuration
    const progress = Math.min(elapsed / totalDuration, 1.0)

    // DEBUG: Log progress every 100ms
    if (Math.floor(elapsed / 100) !== Math.floor((elapsed - delta) / 100)) {
      console.log(`🔺 Triforce progress: ${(progress * 100).toFixed(1)}% (${elapsed.toFixed(0)}ms / ${totalDuration}ms), opacity: ${this.#material.opacity.toFixed(2)}`)
    }

    // Update particle uniforms
    this.#particleMaterial.uniforms.uTime.value = time

    // Rotate the cube
    this.#triforceMesh.rotation.x = time * 0.5
    this.#triforceMesh.rotation.y = time * 0.5

    // SCALE ANIMATION instead of opacity (opacity doesn't trigger re-render!)
    // Phase 1: Scale in (0-0.2 progress)
    if (progress < 0.2) {
      const scaleProgress = progress / 0.2
      const scale = scaleProgress * 50 // Scale from 0 to 50
      this.#triforceMesh.scale.set(scale, scale, scale)
    }
    // Phase 2: Hold at full size (0.2-0.8 progress)
    else if (progress < 0.8) {
      this.#triforceMesh.scale.set(50, 50, 50)
    }
    // Phase 3: Scale out (0.8-1.0 progress)
    else {
      const scaleProgress = 1.0 - (progress - 0.8) / 0.2
      const scale = scaleProgress * 50 // Scale from 50 to 0
      this.#triforceMesh.scale.set(scale, scale, scale)
    }

    // Auto-stop when complete
    if (progress >= 1.0) {
      console.log(`🔺 Triforce animation complete after ${elapsed.toFixed(0)}ms`)
      this.stop()
    }
  }

  dispose() {
    this.#triforceMesh.geometry.dispose()
    this.#material.dispose()
    this.#particleSystem.geometry.dispose()
    this.#particleMaterial.dispose()
  }
}
