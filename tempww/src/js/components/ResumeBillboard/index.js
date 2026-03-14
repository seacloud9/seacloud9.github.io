import { Mesh, PlaneGeometry, MeshBasicMaterial, DoubleSide } from 'three'
import { gsap } from 'gsap'
import { EventBusSingleton } from 'light-event-bus'
import CanvasTextRenderer from '../../utils/CanvasTextRenderer'
import { getSummarizedContent } from '../../data/resumeContent'

/**
 * ResumeBillboard
 * 3D billboard component that displays resume content near islands
 */
export default class ResumeBillboard {
  #object
  #material
  #geometry
  #texture
  #islandId
  #islandData
  #isVisible = false
  #scale = 1
  #revealTimeline = null
  #floatingTimeline = null
  #baseY = 120 // Store original Y position

  constructor(islandId, islandData) {
    this.#islandId = islandId
    this.#islandData = islandData

    this.#init()
  }

  #init() {
    // Get summarized content for this island
    const content = getSummarizedContent(this.#islandId)

    // Create canvas texture with resume content
    this.#texture = CanvasTextRenderer.createResumeTexture(content, 1024, 1024)

    // Create geometry (billboard size in world units)
    this.#geometry = new PlaneGeometry(200, 200)

    // Create material with canvas texture
    this.#material = new MeshBasicMaterial({
      map: this.#texture,
      side: DoubleSide,
      transparent: true,
      opacity: 0
    })

    // Create mesh
    this.#object = new Mesh(this.#geometry, this.#material)

    // Position billboard near island
    const position = this.#islandData.position
    this.#baseY = 120 // Height above water
    this.#object.position.set(
      position.x,
      this.#baseY,
      position.z
    )

    // Scale
    this.#object.scale.set(this.#scale, this.#scale, this.#scale)

    // Name for raycasting
    this.#object.name = `billboard-${this.#islandId}`
    this.#object.userData = {
      type: 'resume-billboard',
      islandId: this.#islandId,
      clickable: true
    }
  }

  /**
   * Show billboard with triforce-style reveal animation
   * Like getting a triforce shard - magical and glowing!
   */
  show() {
    if (this.#isVisible) return

    this.#isVisible = true

    // Kill any existing timelines
    if (this.#revealTimeline) {
      this.#revealTimeline.kill()
    }
    if (this.#floatingTimeline) {
      this.#floatingTimeline.kill()
    }

    // Reset position to base
    this.#object.position.y = this.#baseY

    // Start from completely invisible and small
    this.#object.scale.set(0, 0, 0)
    this.#material.opacity = 0

    // Create a triforce-style reveal timeline
    const tl = gsap.timeline({
      onComplete: () => {
        console.log(`✨ Billboard ${this.#islandId} (${this.#islandData.name}) revealed!`)
        // Start gentle floating motion after reveal
        this.#startFloating()
      }
    })

    // Phase 1: Pop into existence with a bounce (like triforce appearing)
    tl.to(this.#object.scale, {
      x: 1.3,
      y: 1.3,
      z: 1.3,
      duration: 0.4,
      ease: 'back.out(2)'
    }, 0)

    // Phase 2: Fade in with a glow effect
    tl.to(this.#material, {
      opacity: 1,
      duration: 0.4,
      ease: 'power2.out'
    }, 0)

    // Phase 3: Settle to normal size with a gentle bounce
    tl.to(this.#object.scale, {
      x: 1,
      y: 1,
      z: 1,
      duration: 0.6,
      ease: 'elastic.out(1, 0.5)'
    }, 0.3)

    // Store timeline reference
    this.#revealTimeline = tl
  }

  /**
   * Start gentle floating/bobbing animation (like triforce hovering)
   */
  #startFloating() {
    if (this.#floatingTimeline) {
      this.#floatingTimeline.kill()
    }

    this.#floatingTimeline = gsap.to(this.#object.position, {
      y: this.#baseY + 4,
      duration: 2,
      ease: 'sine.inOut',
      yoyo: true,
      repeat: -1
    })
  }

  /**
   * Hide billboard with fade-out animation
   */
  hide() {
    if (!this.#isVisible) return

    this.#isVisible = false

    // Kill floating animation
    if (this.#floatingTimeline) {
      this.#floatingTimeline.kill()
      this.#floatingTimeline = null
    }

    // Kill reveal timeline if still running
    if (this.#revealTimeline) {
      this.#revealTimeline.kill()
      this.#revealTimeline = null
    }

    gsap.killTweensOf(this.#material)
    gsap.to(this.#material, {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.in'
    })

    gsap.killTweensOf(this.#object.scale)
    gsap.to(this.#object.scale, {
      x: 0,
      y: 0,
      z: 0,
      duration: 0.5,
      ease: 'back.in(2)'
    })

    console.log(`Billboard ${this.#islandId} (${this.#islandData.name}) hidden`)
  }

  /**
   * Update billboard rotation to always face camera
   */
  update({ camera, distance }) {
    if (!camera || !this.#isVisible) return

    // Billboard effect - always face camera
    this.#object.lookAt(camera.position)

    // Optional: Scale based on distance for better visibility
    // Closer = slightly larger, but within reasonable bounds
    if (distance !== undefined) {
      const minDistance = 100
      const maxDistance = 600
      const normalizedDistance = Math.max(0, Math.min(1, (distance - minDistance) / (maxDistance - minDistance)))
      const targetScale = 1 + (1 - normalizedDistance) * 0.2 // Scale between 1.0 and 1.2

      this.#scale = targetScale
      this.#object.scale.set(targetScale, targetScale, targetScale)
    }
  }

  /**
   * Handle click on billboard
   * Opens modal on any click to make it easier for users
   */
  handleClick(uv) {
    console.log(`Billboard ${this.#islandId} clicked! Opening modal...`, uv)
    // Open modal on any click to the billboard (simpler UX)
    this.openDetailModal()
  }

  /**
   * Open detail modal with full resume section content
   */
  openDetailModal() {
    console.log(`Opening detail modal for island ${this.#islandId}`)

    EventBusSingleton.publish('BILLBOARD_CLICK', {
      islandId: this.#islandId,
      islandData: this.#islandData
    })
  }

  /**
   * Get Three.js object for scene
   */
  get object() {
    return this.#object
  }

  /**
   * Get visibility state
   */
  get isVisible() {
    return this.#isVisible
  }

  /**
   * Get island ID
   */
  get islandId() {
    return this.#islandId
  }

  /**
   * Dispose resources
   */
  dispose() {
    // Kill any running animations
    if (this.#revealTimeline) {
      this.#revealTimeline.kill()
      this.#revealTimeline = null
    }
    if (this.#floatingTimeline) {
      this.#floatingTimeline.kill()
      this.#floatingTimeline = null
    }

    if (this.#geometry) this.#geometry.dispose()
    if (this.#material) this.#material.dispose()
    if (this.#texture) this.#texture.dispose()
  }
}
