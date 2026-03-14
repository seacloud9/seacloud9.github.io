import { CanvasTexture } from 'three'

/**
 * CanvasTextRenderer
 * Utility for rendering resume content to canvas textures for 3D billboards
 */
class CanvasTextRenderer {
  /**
   * Create a canvas texture with resume content
   * @param {Object} content - Content object from resumeContent.js
   * @param {number} width - Canvas width
   * @param {number} height - Canvas height
   * @returns {CanvasTexture}
   */
  static createResumeTexture(content, width = 1024, height = 1024) {
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext('2d')

    // Background
    ctx.fillStyle = 'rgba(5, 5, 7, 0.95)'
    ctx.fillRect(0, 0, width, height)

    // Border
    ctx.strokeStyle = 'rgba(0, 255, 213, 0.3)'
    ctx.lineWidth = 4
    ctx.strokeRect(10, 10, width - 20, height - 20)

    // Render summarized content based on type
    if (Array.isArray(content)) {
      // Experience or Projects array
      this.renderListSummary(ctx, content, width, height)
    } else if (content.type === 'about') {
      this.renderAboutSummary(ctx, content, width, height)
    } else if (content.intro) {
      // Skills section
      this.renderSkillsSummary(ctx, content, width, height)
    } else if (content.title) {
      // Contact section
      this.renderContactSummary(ctx, content, width, height)
    }

    // "View More" button at bottom
    this.renderViewMoreButton(ctx, width, height)

    const texture = new CanvasTexture(canvas)
    texture.needsUpdate = true
    return texture
  }

  /**
   * Render About section summary
   */
  static renderAboutSummary(ctx, content, width, height) {
    let yPos = 80

    // Title
    ctx.font = 'bold 64px Outfit'
    ctx.fillStyle = '#00ffd5'
    ctx.textAlign = 'left'
    ctx.fillText(content.title, 60, yPos)
    yPos += 20

    // Subtitle
    ctx.font = 'italic 32px Cormorant Garamond'
    ctx.fillStyle = '#f2ede6'
    ctx.fillText(content.subtitle, 60, yPos)
    yPos += 60

    // Tagline
    ctx.font = '24px Outfit'
    ctx.fillStyle = 'rgba(255, 107, 53, 0.9)'
    ctx.fillText(content.tagline, 60, yPos)
    yPos += 50

    // Brief description (first 2 sentences only)
    const shortDesc = content.description.split('.').slice(0, 2).join('.') + '...'
    ctx.font = '22px Cormorant Garamond'
    ctx.fillStyle = 'rgba(242, 237, 230, 0.9)'
    yPos = this.wrapText(ctx, shortDesc, 60, yPos, width - 120, 32)
    yPos += 40

    // Key stats (first 2 most important)
    const topStats = content.stats.slice(0, 2)
    const statWidth = (width - 160) / 2
    const statX = 60

    topStats.forEach((stat, index) => {
      const x = statX + (index * (statWidth + 40))

      ctx.font = 'bold 48px Outfit'
      ctx.fillStyle = '#00ffd5'
      ctx.textAlign = 'center'
      ctx.fillText(stat.value, x + statWidth / 2, yPos + 40)

      ctx.font = '16px Cormorant Garamond'
      ctx.fillStyle = 'rgba(242, 237, 230, 0.7)'
      const lines = stat.label.split('\n')
      lines.forEach((line, i) => {
        ctx.fillText(line, x + statWidth / 2, yPos + 75 + (i * 20))
      })
    })
  }

  /**
   * Render Experience or Projects list summary
   */
  static renderListSummary(ctx, content, width, height) {
    let yPos = 80

    // Determine if this is Experience or Projects
    const isExperience = content[0]?.role !== undefined
    const title = isExperience ? 'Experience' : 'Projects'

    // Title
    ctx.font = 'bold 56px Outfit'
    ctx.fillStyle = '#00ffd5'
    ctx.textAlign = 'left'
    ctx.fillText(title, 60, yPos)
    yPos += 60

    // Show only most recent 2 items
    const recentItems = content.slice(0, 2)

    recentItems.forEach((item, index) => {
      if (index > 0) yPos += 40 // Spacing between items

      // Dates or number
      ctx.font = 'bold 16px Outfit'
      ctx.fillStyle = 'rgba(255, 107, 53, 0.9)'
      ctx.fillText(item.dates || `PROJECT ${item.number}`, 60, yPos)
      yPos += 30

      // Role/Name
      ctx.font = 'bold 28px Outfit'
      ctx.fillStyle = '#f2ede6'
      const mainText = item.role || item.name
      ctx.fillText(mainText.substring(0, 40), 60, yPos)
      yPos += 10

      // Company/Organization
      ctx.font = 'italic 20px Cormorant Garamond'
      ctx.fillStyle = 'rgba(242, 237, 230, 0.7)'
      const subText = item.company || item.organization
      ctx.fillText(subText, 60, yPos)
      yPos += 40

      // Brief description (first sentence only)
      const shortDesc = item.description.split('.')[0] + '...'
      ctx.font = '18px Cormorant Garamond'
      ctx.fillStyle = 'rgba(242, 237, 230, 0.85)'
      yPos = this.wrapText(ctx, shortDesc, 60, yPos, width - 120, 26)
      yPos += 20

      // Tags (first 3 only)
      if (item.tags && item.tags.length > 0) {
        const topTags = item.tags.slice(0, 3)
        let tagX = 60

        ctx.font = '14px Outfit'
        topTags.forEach(tag => {
          const tagWidth = ctx.measureText(tag).width

          // Tag background
          ctx.fillStyle = 'rgba(0, 255, 213, 0.15)'
          ctx.fillRect(tagX, yPos - 18, tagWidth + 24, 26)

          // Tag border
          ctx.strokeStyle = 'rgba(0, 255, 213, 0.4)'
          ctx.lineWidth = 1
          ctx.strokeRect(tagX, yPos - 18, tagWidth + 24, 26)

          // Tag text
          ctx.fillStyle = '#00ffd5'
          ctx.fillText(tag, tagX + 12, yPos)

          tagX += tagWidth + 36
        })
        yPos += 10
      }
    })

    // "+ X more" text
    if (content.length > 2) {
      yPos += 30
      ctx.font = 'italic 18px Cormorant Garamond'
      ctx.fillStyle = 'rgba(242, 237, 230, 0.5)'
      const moreText = `+ ${content.length - 2} more ${title.toLowerCase()}`
      ctx.fillText(moreText, 60, yPos)
    }
  }

  /**
   * Render Skills section summary
   */
  static renderSkillsSummary(ctx, content, width, height) {
    let yPos = 80

    // Title
    ctx.font = 'bold 56px Outfit'
    ctx.fillStyle = '#00ffd5'
    ctx.textAlign = 'left'
    ctx.fillText('Skills', 60, yPos)
    yPos += 40

    // Intro
    ctx.font = 'italic 24px Cormorant Garamond'
    ctx.fillStyle = 'rgba(242, 237, 230, 0.8)'
    ctx.fillText(content.intro, 60, yPos)
    yPos += 60

    // Show first 8 skills only
    const topSkills = content.categories && content.categories[0] && content.categories[0].skills
      ? content.categories[0].skills.slice(0, 8)
      : []

    let skillX = 60
    let skillY = yPos

    ctx.font = '18px Outfit'
    topSkills.forEach((skill, index) => {
      const skillWidth = ctx.measureText(skill).width

      // Check if we need to wrap to next row
      if (skillX + skillWidth + 24 > width - 60) {
        skillX = 60
        skillY += 50
      }

      // Skill background
      ctx.fillStyle = 'rgba(0, 255, 213, 0.12)'
      ctx.fillRect(skillX, skillY - 22, skillWidth + 24, 32)

      // Skill border
      ctx.strokeStyle = 'rgba(0, 255, 213, 0.35)'
      ctx.lineWidth = 1.5
      ctx.strokeRect(skillX, skillY - 22, skillWidth + 24, 32)

      // Skill text
      ctx.fillStyle = '#00ffd5'
      ctx.fillText(skill, skillX + 12, skillY)

      skillX += skillWidth + 36

      // After 4 skills, move to next row
      if ((index + 1) % 4 === 0) {
        skillX = 60
        skillY += 50
      }
    })

    yPos = skillY + 60

    // "+ X more skills" text
    const totalSkills = content.categories && Array.isArray(content.categories)
      ? content.categories.reduce((sum, cat) => sum + (cat.skills ? cat.skills.length : 0), 0)
      : 0
    if (totalSkills > 8) {
      ctx.font = 'italic 18px Cormorant Garamond'
      ctx.fillStyle = 'rgba(242, 237, 230, 0.5)'
      ctx.fillText(`+ ${totalSkills - 8} more skills`, 60, yPos)
    }
  }

  /**
   * Render Contact section summary
   */
  static renderContactSummary(ctx, content, width, height) {
    let yPos = 80

    // Title
    ctx.font = 'bold 56px Outfit'
    ctx.fillStyle = '#00ffd5'
    ctx.textAlign = 'left'
    ctx.fillText('Contact', 60, yPos)
    yPos += 60

    // Intro
    ctx.font = 'italic 24px Cormorant Garamond'
    ctx.fillStyle = 'rgba(242, 237, 230, 0.8)'
    yPos = this.wrapText(ctx, content.intro, 60, yPos, width - 120, 32)
    yPos += 60

    // Show first 3 contact links
    const topLinks = content.links.slice(0, 3)

    topLinks.forEach(link => {
      // Label
      ctx.font = 'bold 20px Outfit'
      ctx.fillStyle = 'rgba(255, 107, 53, 0.9)'
      ctx.fillText(link.label, 60, yPos)
      yPos += 30

      // Value
      ctx.font = '22px Cormorant Garamond'
      ctx.fillStyle = '#00ffd5'
      ctx.fillText(link.value, 60, yPos)
      yPos += 50
    })

    // "+ X more ways to connect"
    if (content.links.length > 3) {
      ctx.font = 'italic 18px Cormorant Garamond'
      ctx.fillStyle = 'rgba(242, 237, 230, 0.5)'
      ctx.fillText(`+ ${content.links.length - 3} more ways to connect`, 60, yPos)
    }
  }

  /**
   * Render "View More" button
   */
  static renderViewMoreButton(ctx, width, height) {
    const buttonY = height - 100
    const buttonWidth = 220
    const buttonHeight = 56
    const buttonX = (width - buttonWidth) / 2

    // Button background
    ctx.fillStyle = 'rgba(0, 255, 213, 0.15)'
    ctx.fillRect(buttonX, buttonY, buttonWidth, buttonHeight)

    // Button border
    ctx.strokeStyle = '#00ffd5'
    ctx.lineWidth = 2
    ctx.strokeRect(buttonX, buttonY, buttonWidth, buttonHeight)

    // Button text
    ctx.font = 'bold 22px Outfit'
    ctx.fillStyle = '#00ffd5'
    ctx.textAlign = 'center'
    ctx.fillText('VIEW MORE', width / 2, buttonY + 36)
  }

  /**
   * Word wrapping utility
   * @returns {number} - New Y position after wrapped text
   */
  static wrapText(ctx, text, x, y, maxWidth, lineHeight) {
    const words = text.split(' ')
    let line = ''
    let currentY = y

    for (let i = 0; i < words.length; i++) {
      const testLine = line + words[i] + ' '
      const metrics = ctx.measureText(testLine)
      const testWidth = metrics.width

      if (testWidth > maxWidth && i > 0) {
        ctx.fillText(line, x, currentY)
        line = words[i] + ' '
        currentY += lineHeight
      } else {
        line = testLine
      }
    }
    ctx.fillText(line, x, currentY)
    return currentY + lineHeight
  }

  /**
   * Get click area for "View More" button
   * Normalized coordinates (0-1) for raycasting
   */
  static getViewMoreButtonArea(width = 1024, height = 1024) {
    const buttonY = height - 100
    const buttonWidth = 220
    const buttonHeight = 56
    const buttonX = (width - buttonWidth) / 2

    return {
      minX: buttonX / width,
      maxX: (buttonX + buttonWidth) / width,
      minY: buttonY / height,
      maxY: (buttonY + buttonHeight) / height
    }
  }
}

export default CanvasTextRenderer
