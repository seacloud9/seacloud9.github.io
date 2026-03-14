import { EventBusSingleton } from 'light-event-bus'
import { MODE } from '../utils/constants'
import ModeManager from './ModeManager'
import UIManager from './UIManager'
import ResumeNavigationManager from './ResumeNavigationManager'

/**
 * EasterEggManager
 * Handles Konami code detection to unlock game mode
 */
class EasterEggManager {
  static instance = null
  static konamiCode = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    'ArrowRight',
    'KeyB',
    'KeyA'
  ]
  static currentInput = []
  static isGameModeActive = false
  static boundKeyHandler = null

  static init() {
    if (this.instance) return this.instance

    console.log('EasterEggManager initialized - Try the Konami code!')

    // Bind keydown handler
    this.boundKeyHandler = this.handleKeyPress.bind(this)
    window.addEventListener('keydown', this.boundKeyHandler)

    // Listen for ESC to exit game mode
    window.addEventListener('keydown', (e) => {
      if ((e.key === 'Escape' || e.keyCode === 27) && this.isGameModeActive) {
        this.deactivateGameMode()
      }
    })

    this.instance = this
    return this.instance
  }

  static handleKeyPress(e) {
    // Ignore if typing in input fields
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
      return
    }

    // Add key to input buffer
    this.currentInput.push(e.code)

    // Keep only last 10 keys
    if (this.currentInput.length > this.konamiCode.length) {
      this.currentInput.shift()
    }

    // Check if Konami code matches
    if (this.checkKonamiCode()) {
      this.activateGameMode()
    }
  }

  static checkKonamiCode() {
    if (this.currentInput.length !== this.konamiCode.length) {
      return false
    }

    return this.konamiCode.every((key, index) => key === this.currentInput[index])
  }

  static activateGameMode() {
    if (this.isGameModeActive) return

    console.log('🎮 Konami code activated! Entering game mode...')
    this.isGameModeActive = true

    // Reset input buffer
    this.currentInput = []

    // Hide resume billboards
    ResumeNavigationManager.hideAllBillboards()

    // Hide resume navigation menu
    const resumeNav = document.querySelector('[data-resume-nav]')
    if (resumeNav) {
      resumeNav.classList.add('hidden')
    }

    // Hide social footer
    const socialFooter = document.querySelector('.social-footer')
    if (socialFooter) {
      socialFooter.classList.add('hidden')
    }

    // Show game UI (if it exists)
    const gameUI = document.querySelector('[data-game]')
    if (gameUI) {
      gameUI.classList.add('visible')
    }

    // Switch to game mode
    ModeManager.state = MODE.GAME
    EventBusSingleton.publish('INIT_GAME')

    // Show exit hint
    this.showMessage('🎮 Game Mode Activated! Press ESC to return to resume', 5000)
  }

  static deactivateGameMode() {
    if (!this.isGameModeActive) return

    console.log('Exiting game mode, returning to resume...')
    this.isGameModeActive = false

    // Hide game UI
    const gameUI = document.querySelector('[data-game]')
    if (gameUI) {
      gameUI.classList.remove('visible')
    }

    // Show resume navigation menu
    const resumeNav = document.querySelector('[data-resume-nav]')
    if (resumeNav) {
      resumeNav.classList.remove('hidden')
    }

    // Show social footer
    const socialFooter = document.querySelector('.social-footer')
    if (socialFooter) {
      socialFooter.classList.remove('hidden')
    }

    // Switch back to resume mode
    ModeManager.state = MODE.RESUME

    // Show message
    this.showMessage('Returned to Resume Mode', 3000)
  }

  static showMessage(message, duration = 3000) {
    // Create message element
    const messageEl = document.createElement('div')
    messageEl.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(5, 5, 7, 0.95);
      border: 2px solid #00ffd5;
      border-radius: 12px;
      padding: 24px 40px;
      color: #00ffd5;
      font-family: 'Outfit', sans-serif;
      font-size: 20px;
      font-weight: 600;
      text-align: center;
      z-index: 9999;
      box-shadow: 0 0 30px rgba(0, 255, 213, 0.4);
      animation: fadeInOut 0.5s ease;
    `
    messageEl.textContent = message

    // Add animation
    const style = document.createElement('style')
    style.textContent = `
      @keyframes fadeInOut {
        0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
        100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
      }
    `
    document.head.appendChild(style)

    document.body.appendChild(messageEl)

    // Remove after duration
    setTimeout(() => {
      messageEl.style.animation = 'fadeInOut 0.5s ease reverse'
      setTimeout(() => {
        if (messageEl.parentNode) {
          messageEl.parentNode.removeChild(messageEl)
        }
        if (style.parentNode) {
          style.parentNode.removeChild(style)
        }
      }, 500)
    }, duration)
  }

  static destroy() {
    if (this.boundKeyHandler) {
      window.removeEventListener('keydown', this.boundKeyHandler)
      this.boundKeyHandler = null
    }
    this.instance = null
  }
}

export default EasterEggManager
