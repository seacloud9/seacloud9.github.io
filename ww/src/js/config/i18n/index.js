import { en } from './locales/en.js'

export const SUPPORTED_LOCALES = ['en']
export const DEFAULT_LOCALE = 'en'

const locales = { en }
let currentLocale = DEFAULT_LOCALE

/**
 * Get translation for key path
 * @param {string} key - Dot-notation key (e.g. 'islands.about.name')
 * @param {object} replacements - Variables to replace like {name}
 */
export function t(key, replacements = {}) {
  const keys = key.split('.')
  let value = locales[currentLocale]

  for (const k of keys) value = value?.[k]

  if (typeof value !== 'string') {
    console.warn(`Translation missing: ${key}`)
    return key
  }

  // Replace {variable} placeholders
  return value.replace(/\{(\w+)\}/g, (match, varName) => replacements[varName] ?? match)
}

export function setLocale(locale) {
  if (!SUPPORTED_LOCALES.includes(locale)) {
    console.warn(`Unsupported locale: ${locale}`)
    locale = DEFAULT_LOCALE
  }
  currentLocale = locale

  document.dispatchEvent(
    new CustomEvent('locale-changed', {
      detail: { locale },
    })
  )
}

export function getLocale() {
  return currentLocale
}

export function detectLocale() {
  const browserLang = navigator.language.split('-')[0]
  return SUPPORTED_LOCALES.includes(browserLang) ? browserLang : DEFAULT_LOCALE
}
