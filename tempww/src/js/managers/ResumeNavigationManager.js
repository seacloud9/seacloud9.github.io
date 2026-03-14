import { Vector3 } from 'three'
import { EventBusSingleton } from 'light-event-bus'
import {
  RESUME_ISLANDS_ARRAY,
  getIslandById,
  getIslandPosition,
  BILLBOARD_SHOW_DISTANCE,
  BILLBOARD_HIDE_DISTANCE,
  AUTO_SAIL_STOP_DISTANCE
} from '../data/resumeIslands'
import { getContentBySection } from '../data/resumeContent'

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

  static init() {
    if (this.instance) {
      console.log('ResumeNavigationManager already initialized')
      return this.instance
    }

    console.log('Initializing ResumeNavigationManager...')

    // Setup navigation menu buttons
    this.setupNavigationMenu()

    // Setup modal close handlers
    this.setupModalHandlers()

    // Subscribe to relevant events
    EventBusSingleton.subscribe('AUTO_SAIL_COMPLETE', this.onAutoSailComplete)
    EventBusSingleton.subscribe('BILLBOARD_CLICK', this.onBillboardClick)

    this.instance = this
    console.log('ResumeNavigationManager initialized successfully')
    return this.instance
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
    this.isAutoSailing = false
    this.currentIsland = this.targetIsland

    console.log(`Arrived at ${this.currentIsland.name}`)

    // Publish event for other systems
    EventBusSingleton.publish('ARRIVED_AT_ISLAND', {
      island: this.currentIsland
    })
  }

  /**
   * Update proximity detection and billboard visibility
   * Called every frame from MainView
   */
  static update({ boat, camera }) {
    if (!boat || !boat.object) return

    this.boat = boat
    this.camera = camera

    const boatPosition = boat.object.position

    // Check distance to each island and update billboard visibility
    this.billboards.forEach((billboard, index) => {
      if (!billboard || !billboard.update) return

      const island = RESUME_ISLANDS_ARRAY[index]
      if (!island) return

      const islandPos = new Vector3(
        island.position.x,
        0,
        island.position.z
      )

      const distance = boatPosition.distanceTo(islandPos)

      // Show billboard when approaching
      if (distance < BILLBOARD_SHOW_DISTANCE && !billboard.isVisible) {
        billboard.show()
      }
      // Hide billboard when leaving
      else if (distance >= BILLBOARD_HIDE_DISTANCE && billboard.isVisible) {
        billboard.hide()
      }

      // Update billboard rotation to face camera
      if (camera) {
        billboard.update({ camera, distance })
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

    // Show modal
    console.log('✨ Showing modal...')
    modal.classList.add('visible')
    document.body.style.overflow = 'hidden' // Prevent background scrolling
    console.log('✅ Modal should now be visible!')
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
