// Test import of a JavaScript module
import WebGLApp from './WebGLApp'
import LoaderManager from './managers/LoaderManager'
import Settings from './utils/Settings'
import config from './views/config'
import gsap from 'gsap'
import { CustomEase } from './utils/CustomEase'
import { EventBusSingleton } from 'light-event-bus'
import { CHOOSE_SETTINGS, MODE } from './utils/constants'
import query from './utils/query'
import UIManager from './managers/UIManager'
import ResumeNavigationManager from './managers/ResumeNavigationManager'
import EasterEggManager from './managers/EasterEggManager'
// Custom GSAP
gsap.registerPlugin(CustomEase)

CustomEase.create('bounce.out', '0.22, 1.7, 0.36, 1')
CustomEase.create('bounce.in', '0.43, 0.00, 0.79, -0.28')

export const ASSETS = [...config.resources]
;(async () => {
  // HTML
  const canvas = document.querySelector('.scene')
  const settingsBtns = document.querySelectorAll('.settings__button')
  const loading = document.querySelector('[data-loading]')

  let settingsInitiated = false

  // scene
  // Preload assets before initiating the scene
  await LoaderManager.load(ASSETS)
  const tier = await Settings.init()

  settingsInitiated = true

  // Auto-choose quality based on tier (no settings UI)
  let quality = 'low'
  if (tier >= 2) {
    quality = 'high'
  } else if (tier === 1) {
    quality = 'medium'
  }

  Settings.choose(quality)

  // Initialize WebGL app
  const app = new WebGLApp({
    canvas,
    isDevelopment: import.meta.env.MODE === 'development',
    mode: MODE.DEFAULT // Show mode selection first
  })

  // Initialize Resume Navigation Manager
  ResumeNavigationManager.init()

  // Set the scene for 3D triforce effects
  const scene = app.getScene()
  if (scene) {
    ResumeNavigationManager.setScene(scene)
  }

  // Initialize Easter Egg Manager (Konami code)
  EasterEggManager.init()

  // Remove loading screen
  loading.classList.remove('visible')

  // Auto-sail will be triggered when user selects "Explore the Ocean" mode

  // Legacy: Keep this for query param support (game mode easter egg testing)
  const chooseQuality = async (quality) => {
    if (settingsInitiated) {
      Settings.choose(quality)
      new WebGLApp({ canvas, isDevelopment: import.meta.env.MODE === 'development' })

      if (query('game')) {
        UIManager._modeBtnClick({ target: null, forceMode: MODE.GAME })
      } else if (query('explore')) {
        UIManager._modeBtnClick({ target: null, forceMode: MODE.EXPLORE })
      }
    }
  }

  // Choose quality
  EventBusSingleton.subscribe(CHOOSE_SETTINGS, chooseQuality)
})()
