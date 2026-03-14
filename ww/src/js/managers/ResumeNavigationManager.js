import { Vector3 } from 'three'
import { EventBusSingleton } from 'light-event-bus'
import { gsap } from 'gsap'
import {
  RESUME_ISLANDS_ARRAY,
  getIslandById,
  getIslandPosition,
  BILLBOARD_SHOW_DISTANCE,
  BILLBOARD_HIDE_DISTANCE,
} from '../data/resumeIslands'
import { getContentBySection } from '../data/resumeContent'
import { ANIMATION_CONFIG } from '../config/animations.js'
import { t, setLocale, getLocale, detectLocale } from '../config/i18n/index.js'
import TriforceArrival from '../components/Effects/TriforceArrival.js'
import CrystalRise from '../components/Effects/CrystalRise.js'

/**
 * ResumeNavigationManager
 * Handles navigation between resume islands and billboard visibility
 */
class ResumeNavigationManager {
  static instance = null
  static currentIsland = null
  static targetIsland = null
  static billboards = []
  static boat = null
  static camera = null
  static isAutoSailing = false
  static navButtons = []
  static triforceEffect = null
  static crystalEffect = null
  static scene = null
  static originalCameraPosition = null
  static originalCameraTarget = null
  static isCinematicCameraActive = false

  static init() {
    if (this.instance) {
      console.log('ResumeNavigationManager already initialized')
      return this.instance
    }

    console.log('Initializing ResumeNavigationManager...')

    // Initialize i18n
    const savedLocale = localStorage.getItem('locale') || detectLocale()
    setLocale(savedLocale)

    // Setup navigation menu buttons
    this.setupNavigationMenu()

    // Setup modal close handlers
    this.setupModalHandlers()

    // Setup language selector
    this.setupLanguageSelector()

    // Subscribe to relevant events
    EventBusSingleton.subscribe('AUTO_SAIL_COMPLETE', this.onAutoSailComplete)
    EventBusSingleton.subscribe('BILLBOARD_CLICK', this.onBillboardClick)
    document.addEventListener('locale-changed', this.onLocaleChanged)

    this.instance = this
    console.log('ResumeNavigationManager initialized successfully')
    return this.instance
  }

  /**
   * Set the Three.js scene for 3D effects
   */
  static setScene(scene) {
    this.scene = scene
    this.triforceEffect = new TriforceArrival(scene)
    this.crystalEffect = new CrystalRise(scene)

    // Expose camera for debugging (accessible via window.camera in console)
    if (typeof window !== 'undefined') {
      window.debugCamera = {
        get position() {
          return ResumeNavigationManager.camera?.position
        },
        get rotation() {
          return ResumeNavigationManager.camera?.rotation
        },
        logPosition() {
          const cam = ResumeNavigationManager.camera
          if (!cam) return console.log('Camera not available')
          console.log('Camera Position:', {
            x: cam.position.x.toFixed(2),
            y: cam.position.y.toFixed(2),
            z: cam.position.z.toFixed(2),
          })
          console.log('Camera Rotation:', {
            x: cam.rotation.x.toFixed(2),
            y: cam.rotation.y.toFixed(2),
            z: cam.rotation.z.toFixed(2),
          })
        },
        getBoatRelativePosition() {
          const boat = ResumeNavigationManager.boat
          const cam = ResumeNavigationManager.camera
          if (!boat || !cam) return console.log('Boat or camera not available')

          const offset = {
            x: (cam.position.x - boat.object.position.x).toFixed(2),
            y: (cam.position.y - boat.object.position.y).toFixed(2),
            z: (cam.position.z - boat.object.position.z).toFixed(2),
          }
          console.log('Camera offset from boat:', offset)
          console.log('Copy this to animations.js camera.offset:', offset)
          return offset
        }
      }
      console.log('📷 Camera debugging enabled! Use window.debugCamera.logPosition() or window.debugCamera.getBoatRelativePosition()')
    }
  }

  /**
   * Setup language selector handler
   */
  static setupLanguageSelector() {
    const selector = document.getElementById('language-select')
    if (!selector) return

    selector.value = getLocale()
    selector.addEventListener('change', (e) => {
      setLocale(e.target.value)
      localStorage.setItem('locale', e.target.value)
    })
  }

  /**
   * Handle locale change
   */
  static onLocaleChanged = () => {
    console.log('🌐 Locale changed, updating UI...')
    this.updateNavigationMenu()

    // Re-render modal if open
    if (this.currentIsland) {
      const modal = document.querySelector('[data-detail-modal]')
      if (modal?.classList.contains('visible')) {
        this.openDetailModal(this.currentIsland.id)
      }
    }
  }

  /**
   * Setup modal close handlers
   */
  static setupModalHandlers() {
    const modalCloseButtons = document.querySelectorAll('[data-modal-close]')

    modalCloseButtons.forEach(button => {
      button.addEventListener('click', () => {
        this.closeDetailModal()
      })
    })

    // Close on overlay click
    const modal = document.querySelector('[data-detail-modal]')
    if (modal) {
      modal.addEventListener('click', (e) => {
        // Only close if clicking the modal itself (not the content)
        if (e.target === modal || e.target.classList.contains('detail-modal__overlay')) {
          this.closeDetailModal()
        }
      })
    }

    // Close on ESC key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' || e.keyCode === 27) {
        this.closeDetailModal()
      }
    })
  }

  /**
   * Setup navigation menu event listeners
   */
  static setupNavigationMenu() {
    const navButtons = document.querySelectorAll('[data-nav-island]')
    this.navButtons = Array.from(navButtons)

    console.log(`Found ${this.navButtons.length} navigation buttons`)

    this.navButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        console.log('Navigation button clicked!', button.getAttribute('data-nav-island'))
        const islandId = parseInt(button.getAttribute('data-nav-island'), 10)
        this.navigateToIsland(islandId)
      })
      console.log(`Attached click listener to button: ${button.getAttribute('data-nav-island')}`)
    })
  }

  /**
   * Navigate to a specific island
   * @param {number} islandId - The ID of the island to navigate to
   */
  static navigateToIsland(islandId) {
    const island = getIslandById(islandId)
    if (!island) {
      console.warn(`Island with ID ${islandId} not found`)
      return
    }

    console.log(`Navigating to island: ${island.name} (ID: ${islandId})`)

    // Update active state in nav menu
    this.updateActiveNavButton(islandId)

    // Set target island
    this.targetIsland = island

    // Trigger auto-sail if boat is available
    if (this.boat && this.boat.autoSailTo) {
      const targetPosition = new Vector3(
        island.position.x,
        0,
        island.position.z
      )

      this.isAutoSailing = true
      this.boat.autoSailTo(targetPosition, () => {
        this.onAutoSailComplete()
      })
    }
  }

  /**
   * Update active state of navigation buttons
   */
  static updateActiveNavButton(islandId) {
    this.navButtons.forEach((button) => {
      const buttonIslandId = parseInt(button.getAttribute('data-nav-island'), 10)
      if (buttonIslandId === islandId) {
        button.classList.add('active')
      } else {
        button.classList.remove('active')
      }
    })
  }

  /**
   * Called when auto-sail completes
   */
  static onAutoSailComplete = () => {
    console.log('🛑 AUTO-SAIL COMPLETE!')
    this.isAutoSailing = false
    this.currentIsland = this.targetIsland

    console.log(`✅ Arrived at ${this.currentIsland.name} (ID: ${this.currentIsland.id})`)

    // Publish event for other systems
    EventBusSingleton.publish('ARRIVED_AT_ISLAND', {
      island: this.currentIsland
    })

    // Show triforce animation then open modal
    console.log('🎮 Calling playArrivalAnimation()...')
    this.playArrivalAnimation()
  }

  /**
   * Play triforce-style arrival animation, then show modal
   */
  static playArrivalAnimation() {
    if (!this.currentIsland) return

    const config = ANIMATION_CONFIG.triforce

    console.log(`🎮 Playing arrival animation for ${this.currentIsland.name}`)
    console.log(`⏱️  Total sequence: ${config.totalSequenceTime}ms`)

    // Animate camera to cinematic view during boat settle
    this.animateCameraToCinematicView()

    // Phase 1: Wait for boat to settle, then start crystal rise
    setTimeout(() => {
      console.log(`💎 Starting glowing crystal rise...`)
      this.showCrystalRise()

      // Phase 2: After crystals rise, show 3D triforce
      setTimeout(() => {
        console.log(`✨ Starting 3D shader triforce...`)
        this.show3DTriforceAnimation()

        // Phase 3: After 3D animation, show CSS triforce
        setTimeout(() => {
          console.log(`🔺 Starting CSS triforce overlay...`)
          this.showTriforceAnimation()

          // Phase 4: After CSS animation, show modal
          setTimeout(() => {
            console.log(`📋 Opening modal with content...`)
            this.hideTriforceAnimation()
            this.openDetailModal(this.currentIsland.id)
          }, config.css2D.totalDuration + config.modal.pauseBeforeFade)
        }, config.shader3D.totalDuration)
      }, config.crystals.duration)
    }, config.boatSettleDelay)
  }

  /**
   * Show crystal rise effect
   */
  static showCrystalRise() {
    if (!this.crystalEffect) {
      console.warn('⚠️  Crystal effect not initialized')
      return
    }

    // Position crystals at boat location
    const boatPosition = this.boat?.object?.position
    if (boatPosition) {
      this.crystalEffect.play(boatPosition)
    } else {
      console.warn('⚠️  Boat position not available, playing crystals at origin')
      this.crystalEffect.play()
    }
  }

  /**
   * Animate camera to cinematic view showing boat and triforce area
   */
  static animateCameraToCinematicView() {
    if (!this.camera || !this.boat) {
      console.warn('⚠️  Camera or boat not available for cinematic animation')
      return
    }

    const config = ANIMATION_CONFIG.triforce.camera
    const boatPos = this.boat.object.position

    console.log('📷 Animating camera to cinematic view...')

    // Save original camera state
    if (!this.isCinematicCameraActive) {
      this.originalCameraPosition = this.camera.position.clone()
      this.isCinematicCameraActive = true
    }

    // Calculate target camera position (behind and above boat)
    const targetPosition = new Vector3(
      boatPos.x + config.offset.x,
      boatPos.y + config.offset.y,
      boatPos.z + config.offset.z
    )

    // Calculate look-at target (boat with slight upward offset to see triforce)
    const lookAtTarget = new Vector3(
      boatPos.x + config.lookAt.x,
      boatPos.y + config.lookAt.y,
      boatPos.z + config.lookAt.z
    )

    // Smooth camera transition using GSAP
    gsap.to(this.camera.position, {
      x: targetPosition.x,
      y: targetPosition.y,
      z: targetPosition.z,
      duration: config.duration / 1000, // Convert to seconds
      ease: config.easing,
      onUpdate: () => {
        // Update camera to look at target during animation
        this.camera.lookAt(lookAtTarget)
      },
      onComplete: () => {
        console.log('📷 Camera cinematic view reached!')
        // Final look-at to ensure correct orientation
        this.camera.lookAt(lookAtTarget)
      }
    })

    // Log debug info
    console.log(`📷 Camera moving to: (${targetPosition.x.toFixed(2)}, ${targetPosition.y.toFixed(2)}, ${targetPosition.z.toFixed(2)})`)
    console.log(`📷 Looking at: (${lookAtTarget.x.toFixed(2)}, ${lookAtTarget.y.toFixed(2)}, ${lookAtTarget.z.toFixed(2)})`)
  }

  /**
   * Show 3D shader-based triforce animation
   */
  static show3DTriforceAnimation() {
    if (!this.triforceEffect) {
      console.warn('⚠️  Triforce effect not initialized')
      return
    }
    this.triforceEffect.play()
  }

  /**
   * Show triforce animation overlay
   */
  static showTriforceAnimation() {
    const triforceOverlay = document.querySelector('[data-triforce-animation]')
    const topPiece = document.querySelector('[data-triforce-top]')
    const leftPiece = document.querySelector('[data-triforce-left]')
    const rightPiece = document.querySelector('[data-triforce-right]')

    if (!triforceOverlay || !topPiece || !leftPiece || !rightPiece) {
      console.error('❌ Triforce animation elements not found!')
      return
    }

    const config = ANIMATION_CONFIG.triforce.css2D

    console.log('🔺 Animating triforce pieces...')

    // Show overlay
    triforceOverlay.classList.add('visible')

    // Animate pieces in sequence
    topPiece.classList.add('animate-top')
    leftPiece.classList.add('animate-left')
    rightPiece.classList.add('animate-right')

    // Add glow effect after all pieces appear
    setTimeout(() => {
      console.log('✨ Adding triforce glow effect...')
      topPiece.classList.add('animate-glow')
      leftPiece.classList.add('animate-glow')
      rightPiece.classList.add('animate-glow')
    }, config.glowDelay)
  }

  /**
   * Hide triforce animation overlay
   */
  static hideTriforceAnimation() {
    const triforceOverlay = document.querySelector('[data-triforce-animation]')
    const topPiece = document.querySelector('[data-triforce-top]')
    const leftPiece = document.querySelector('[data-triforce-left]')
    const rightPiece = document.querySelector('[data-triforce-right]')

    if (!triforceOverlay) return

    console.log('🔻 Hiding triforce animation...')

    // Hide overlay
    triforceOverlay.classList.remove('visible')

    // Reset animation classes for next time
    if (topPiece) {
      topPiece.classList.remove('animate-top', 'animate-glow')
      topPiece.style.opacity = '0'
    }
    if (leftPiece) {
      leftPiece.classList.remove('animate-left', 'animate-glow')
      leftPiece.style.opacity = '0'
    }
    if (rightPiece) {
      rightPiece.classList.remove('animate-right', 'animate-glow')
      rightPiece.style.opacity = '0'
    }
  }

  /**
   * Update proximity detection and billboard visibility
   * Called every frame from MainView
   */
  static update({ boat, camera, time, delta }) {
    if (!boat || !boat.object) return

    this.boat = boat
    this.camera = camera

    const boatPosition = boat.object.position

    // Update 3D effects
    if (this.triforceEffect) {
      this.triforceEffect.update(time, delta)
    }
    if (this.crystalEffect) {
      this.crystalEffect.update(time, delta)
    }

    // Calculate distances to all islands
    const distances = this.billboards.map((billboard, index) => {
      if (!billboard) return { index, distance: Infinity }

      const island = RESUME_ISLANDS_ARRAY[index]
      if (!island) return { index, distance: Infinity }

      const islandPos = new Vector3(
        island.position.x,
        0,
        island.position.z
      )

      return {
        index,
        distance: boatPosition.distanceTo(islandPos),
        billboard
      }
    })

    // Find the closest island
    const closest = distances.reduce((min, curr) =>
      curr.distance < min.distance ? curr : min
    )

    // Keep all billboards hidden - we show modal on arrival instead
    this.billboards.forEach((billboard) => {
      if (!billboard || !billboard.update) return

      // Hide all billboards permanently
      if (billboard.isVisible) {
        billboard.hide()
      }
    })

    // Check if we've reached the target island (stop auto-sailing)
    if (this.isAutoSailing && this.targetIsland) {
      const targetPos = new Vector3(
        this.targetIsland.position.x,
        0,
        this.targetIsland.position.z
      )
      const distanceToTarget = boatPosition.distanceTo(targetPos)

      const AUTO_SAIL_STOP_DISTANCE = ANIMATION_CONFIG.navigation.autoSailStopDistance

      if (distanceToTarget < AUTO_SAIL_STOP_DISTANCE) {
        // We're close enough - stop auto-sailing
        if (this.boat && this.boat.stopAutoSail) {
          this.boat.stopAutoSail()
        }
        this.onAutoSailComplete()
      }
    }
  }

  /**
   * Register a billboard
   */
  static registerBillboard(billboard, islandId) {
    this.billboards[islandId] = billboard
  }

  /**
   * Show a specific billboard
   */
  static showBillboard(islandId) {
    const billboard = this.billboards[islandId]
    if (billboard && billboard.show) {
      billboard.show()
    }
  }

  /**
   * Hide a specific billboard
   */
  static hideBillboard(islandId) {
    const billboard = this.billboards[islandId]
    if (billboard && billboard.hide) {
      billboard.hide()
    }
  }

  /**
   * Hide all billboards
   */
  static hideAllBillboards() {
    this.billboards.forEach((billboard) => {
      if (billboard && billboard.hide) {
        billboard.hide()
      }
    })
  }

  /**
   * Handle billboard click (View More button)
   */
  static onBillboardClick = ({ islandId }) => {
    console.log(`📋 Billboard clicked for island ${islandId}`)

    // Open detail modal with full content
    const modal = document.querySelector('[data-detail-modal]')
    if (modal) {
      console.log('✅ Modal element found, opening modal...')
      this.openDetailModal(islandId)
    } else {
      console.error('❌ Modal element not found! Looking for [data-detail-modal]')
    }
  }

  /**
   * Open detail modal with full resume section content
   */
  static openDetailModal(islandId) {
    console.log(`🔍 Opening modal for island ID: ${islandId}`)

    const modal = document.querySelector('[data-detail-modal]')
    const modalBody = document.querySelector('[data-modal-body]')

    console.log('Modal element:', modal)
    console.log('Modal body element:', modalBody)

    if (!modal || !modalBody) {
      console.error('❌ Modal or modal body not found!')
      console.error('Modal:', modal, 'Modal Body:', modalBody)
      return
    }

    // Get content for this island
    const island = getIslandById(islandId)
    console.log('Island data:', island)
    if (!island) {
      console.error(`❌ Island not found for ID: ${islandId}`)
      return
    }

    const content = getContentBySection(islandId)
    console.log('Content:', content)
    if (!content) {
      console.error(`❌ Content not found for island ID: ${islandId}`)
      return
    }

    // Render content to modal
    console.log('📝 Rendering modal content...')
    modalBody.innerHTML = this.renderModalContent(content, island, islandId)

    // Show modal with triforce-style animation
    console.log('✨ Showing modal with triforce animation...')

    const config = ANIMATION_CONFIG.triforce.modal

    // Start with modal hidden and scaled down
    modalBody.style.transform = 'scale(0.8)'
    modalBody.style.opacity = '0'
    modal.classList.add('visible')
    document.body.style.overflow = 'hidden'

    // Smooth fade-in with scale
    setTimeout(() => {
      modalBody.style.transition = `
        transform ${config.fadeInDuration}ms ${config.scaleEasing},
        opacity ${config.fadeInDuration}ms ease-out
      `
      modalBody.style.transform = 'scale(1)'
      modalBody.style.opacity = '1'
    }, config.initialDelay)
  }

  /**
   * Render content for modal based on section type
   */
  static renderModalContent(content, island, islandId) {
    switch (islandId) {
      case 0: // About
        return this.renderAboutContent(content)
      case 1: // Experience
        return this.renderExperienceContent(content)
      case 2: // Projects
        return this.renderProjectsContent(content)
      case 3: // Skills
        return this.renderSkillsContent(content)
      case 4: // Open Source
        return this.renderOpenSourceContent(content)
      case 5: // Contact
        return this.renderContactContent(content)
      default:
        return '<p>Content not found</p>'
    }
  }

  /**
   * Render About section content
   */
  static renderAboutContent(content) {
    return `
      <h1>${content.title}</h1>
      <p style="font-size: 24px; color: #ff6b35; margin-bottom: 32px;">${content.subtitle} — ${content.tagline}</p>
      <p style="margin-bottom: 24px;">${content.description}</p>

      <div class="stats-grid">
        ${content.stats.map(stat => `
          <div class="stat-item">
            <div class="stat-item__value">${stat.value}</div>
            <div class="stat-item__label">${stat.label}</div>
          </div>
        `).join('')}
      </div>
    `
  }

  /**
   * Render Experience section content
   */
  static renderExperienceContent(content) {
    return `
      <h1>Experience</h1>
      ${content.map(job => `
        <div class="experience-item">
          <div class="experience-dates">${job.dates}</div>
          <h3 class="experience-role">${job.role}</h3>
          <p class="experience-company">${job.company}</p>
          <p>${job.description}</p>
          <div class="tags">
            ${job.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
        </div>
      `).join('')}
    `
  }

  /**
   * Render Projects section content
   */
  static renderProjectsContent(content) {
    return `
      <h1>Featured Projects</h1>
      ${content.map(project => `
        <div class="project-item">
          <div class="project-number">PROJECT ${project.number}</div>
          <h3 class="project-name">${project.name}</h3>
          <p class="project-org">${project.organization}</p>
          <p>${project.description}</p>
          <div class="tags">
            ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
        </div>
      `).join('')}
    `
  }

  /**
   * Render Skills section content
   */
  static renderSkillsContent(content) {
    return `
      <h1>Skills</h1>
      <p style="font-size: 20px; margin-bottom: 32px; font-style: italic;">${content.intro}</p>
      ${content.categories.map((category, index) => `
        <div class="tags" style="margin-bottom: 24px;">
          ${category.skills.map(skill => `<span class="tag">${skill}</span>`).join('')}
        </div>
      `).join('')}
    `
  }

  /**
   * Render Open Source section content
   */
  static renderOpenSourceContent(content) {
    return `
      <h1>Open Source</h1>
      ${content.map(project => `
        <div class="project-item">
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px;">
            <span style="font-size: 32px;">${project.icon}</span>
            <div>
              <div class="project-number">${project.badge}</div>
              <h3 class="project-name">${project.name}</h3>
            </div>
          </div>
          <p style="font-style: italic; color: rgba(242, 237, 230, 0.7); margin-bottom: 12px;">${project.tagline}</p>
          <p>${project.description}</p>
          <div class="tags" style="margin: 16px 0;">
            ${project.stats.map(stat => `<span class="tag">${stat}</span>`).join('')}
          </div>
          <div class="tags">
            ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
          <p style="margin-top: 20px;">
            <a href="${project.link}" target="_blank" rel="noopener noreferrer" style="color: #00ffd5; font-weight: 600; text-decoration: none; border-bottom: 2px solid #00ffd5;">
              ${project.linkText} →
            </a>
          </p>
        </div>
      `).join('')}
    `
  }

  /**
   * Render Contact section content
   */
  static renderContactContent(content) {
    return `
      <h1>${content.title}</h1>
      <p style="font-size: 20px; margin-bottom: 32px;">${content.intro}</p>
      ${content.links.map(link => `
        <div style="margin-bottom: 24px;">
          <div style="font-weight: 600; color: #ff6b35; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 1px;">${link.label}</div>
          <a href="${link.href}" target="_blank" rel="noopener noreferrer" style="color: #00ffd5; font-size: 20px; text-decoration: none; border-bottom: 2px solid rgba(0, 255, 213, 0.3);">
            ${link.value}
          </a>
        </div>
      `).join('')}
    `
  }

  /**
   * Close detail modal
   */
  static closeDetailModal() {
    const modal = document.querySelector('[data-detail-modal]')
    if (modal) {
      modal.classList.remove('visible')
      document.body.style.overflow = '' // Restore scrolling
    }

    // Note: Camera stays in cinematic view - user can manually control it after modal closes
    // This feels more natural than snapping back to original position
    // If you want to restore camera, uncomment below:
    // this.restoreCameraControl()
  }

  /**
   * Restore camera to user control (optional - currently not used)
   */
  static restoreCameraControl() {
    if (!this.isCinematicCameraActive || !this.originalCameraPosition) {
      return
    }

    console.log('📷 Restoring camera control...')

    // Smooth transition back to original position
    gsap.to(this.camera.position, {
      x: this.originalCameraPosition.x,
      y: this.originalCameraPosition.y,
      z: this.originalCameraPosition.z,
      duration: 0.8,
      ease: 'power2.inOut',
      onComplete: () => {
        this.isCinematicCameraActive = false
        this.originalCameraPosition = null
        console.log('📷 Camera control restored!')
      }
    })
  }

  /**
   * Get current island
   */
  static getCurrentIsland() {
    return this.currentIsland
  }

  /**
   * Get target island
   */
  static getTargetIsland() {
    return this.targetIsland
  }

  /**
   * Check if currently auto-sailing
   */
  static isCurrentlyAutoSailing() {
    return this.isAutoSailing
  }
}

export default ResumeNavigationManager
