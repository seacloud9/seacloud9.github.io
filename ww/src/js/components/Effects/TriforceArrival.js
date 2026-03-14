import {
  Mesh,
  BufferGeometry,
  BufferAttribute,
  ShaderMaterial,
  Vector3,
  Points,
  AdditiveBlending,
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
  }

  #createTriforceMesh() {
    // Create triforce geometry (three triangles arranged in triforce pattern)
    const geometry = new BufferGeometry()
    const size = 1.0

    // Triforce vertices (3 triangles arranged in iconic pattern)
    // Top triangle
    const topTriangle = [
      0, size, 0, // top point
      -size / 2, 0, 0, // bottom left
      size / 2, 0, 0, // bottom right
    ]

    // Bottom left triangle
    const leftTriangle = [
      -size / 2, 0, 0, // top point
      -size, -size, 0, // bottom left
      0, -size, 0, // bottom right
    ]

    // Bottom right triangle
    const rightTriangle = [
      size / 2, 0, 0, // top point
      0, -size, 0, // bottom left
      size, -size, 0, // bottom right
    ]

    const vertices = new Float32Array([
      ...topTriangle,
      ...leftTriangle,
      ...rightTriangle,
    ])

    const uvs = new Float32Array([
      // Top triangle UVs
      0.5, 1.0, 0.0, 0.0, 1.0, 0.0,
      // Left triangle UVs
      0.5, 1.0, 0.0, 0.0, 1.0, 0.0,
      // Right triangle UVs
      0.5, 1.0, 0.0, 0.0, 1.0, 0.0,
    ])

    const normals = new Float32Array([
      // All triangles face forward
      0, 0, 1, 0, 0, 1, 0, 0, 1,
      0, 0, 1, 0, 0, 1, 0, 0, 1,
      0, 0, 1, 0, 0, 1, 0, 0, 1,
    ])

    geometry.setAttribute('position', new BufferAttribute(vertices, 3))
    geometry.setAttribute('uv', new BufferAttribute(uvs, 2))
    geometry.setAttribute('normal', new BufferAttribute(normals, 3))

    this.#material = new ShaderMaterial({
      vertexShader: arrivalVertShader,
      fragmentShader: arrivalFragShader,
      uniforms: {
        uTime: { value: 0 },
        uProgress: { value: 0 },
        uRotationSpeed: { value: this.#config.rotationSpeed },
        uGlowIntensity: { value: this.#config.uniforms.glowIntensityMax },
        uGlowColor: {
          value: new Vector3(...this.#config.uniforms.goldColor),
        },
        uTriforceScale: {
          value: new Vector3(
            this.#config.uniforms.triforceScale,
            this.#config.uniforms.triforceScale,
            1
          ),
        },
        uOpacity: { value: 1.0 },
      },
      transparent: true,
      depthWrite: false,
    })

    this.#triforceMesh = new Mesh(geometry, this.#material)
    this.#triforceMesh.position.y = this.#config.uniforms.yPosition
    this.#triforceMesh.visible = false
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
  }

  play() {
    console.log('🔺 Starting 3D triforce shader animation')
    this.#isPlaying = true
    this.#startTime = performance.now()

    this.#triforceMesh.visible = true
    this.#particleSystem.visible = true

    this.#scene.add(this.#triforceMesh)
    this.#scene.add(this.#particleSystem)
  }

  stop() {
    console.log('🔻 Stopping 3D triforce shader animation')
    this.#isPlaying = false
    this.#triforceMesh.visible = false
    this.#particleSystem.visible = false

    // Reset
    this.#material.uniforms.uProgress.value = 0
    this.#material.uniforms.uOpacity.value = 1.0
    this.#particleMaterial.uniforms.uProgress.value = 0
  }

  update(time, delta) {
    if (!this.#isPlaying) return

    const elapsed = performance.now() - this.#startTime
    const totalDuration = this.#config.totalDuration
    const progress = Math.min(elapsed / totalDuration, 1.0)

    // Update time uniforms
    this.#material.uniforms.uTime.value = time
    this.#particleMaterial.uniforms.uTime.value = time

    // Phase 1: Fade in (0-0.2 progress)
    if (progress < 0.2) {
      const fadeProgress = progress / 0.2
      this.#material.uniforms.uProgress.value = fadeProgress
      this.#material.uniforms.uOpacity.value = fadeProgress
      this.#particleMaterial.uniforms.uProgress.value = fadeProgress
    }
    // Phase 2: Glow pulse & hold (0.2-0.8 progress)
    else if (progress < 0.8) {
      this.#material.uniforms.uProgress.value = 1.0
      this.#material.uniforms.uOpacity.value = 1.0
      this.#particleMaterial.uniforms.uProgress.value = 1.0

      // Pulsing glow intensity
      const glowProgress = (progress - 0.2) / 0.6
      const glow = Math.sin(glowProgress * Math.PI * 2) * 0.5 + 0.5
      this.#material.uniforms.uGlowIntensity.value =
        this.#config.uniforms.glowIntensityMin +
        (this.#config.uniforms.glowIntensityMax -
          this.#config.uniforms.glowIntensityMin) *
          glow
    }
    // Phase 3: Fade out (0.8-1.0 progress)
    else {
      const fadeProgress = 1.0 - (progress - 0.8) / 0.2
      this.#material.uniforms.uOpacity.value = fadeProgress
      this.#particleMaterial.uniforms.uProgress.value = fadeProgress
    }

    // Auto-stop when complete
    if (progress >= 1.0) {
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
