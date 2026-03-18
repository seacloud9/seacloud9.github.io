/**
 * Lightweight i18n System
 * Simple JSON-based internationalization for static HTML pages
 *
 * Usage:
 * 1. Add data-i18n attributes to HTML elements with dot notation keys
 * 2. Call i18n.init() to load and apply translations
 *
 * Examples:
 * <h1 data-i18n="hero.title"></h1>
 * <button data-i18n="nav.contact"></button>
 * <div data-i18n-html="about.bio1"></div>  // For HTML content
 */

const i18n = (() => {
  let translations = {};
  let currentLang = 'en';
  let config = {
    basePath: '../i18n',
    defaultLang: 'en',
    autoApply: true,
    watchDOM: true,
    fallbackToKey: true,
    debug: false
  };

  /**
   * Get nested value from object using dot notation
   * @param {Object} obj - The object to search
   * @param {string} path - Dot notation path (e.g., "hero.title")
   * @returns {*} The value at the path, or the path itself if not found
   */
  function get(obj, path) {
    return path.split('.').reduce((current, prop) => {
      return current && current[prop] !== undefined ? current[prop] : null;
    }, obj) || path;
  }

  /**
   * Apply translations to all elements with data-i18n attributes
   */
  function applyTranslations() {
    // Handle text content
    document.querySelectorAll('[data-i18n]').forEach(element => {
      const key = element.getAttribute('data-i18n');
      const translation = get(translations, key);
      if (translation) {
        element.textContent = translation;
      }
    });

    // Handle HTML content
    document.querySelectorAll('[data-i18n-html]').forEach(element => {
      const key = element.getAttribute('data-i18n-html');
      const translation = get(translations, key);
      if (translation) {
        element.innerHTML = translation;
      }
    });

    // Handle placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
      const key = element.getAttribute('data-i18n-placeholder');
      const translation = get(translations, key);
      if (translation) {
        element.placeholder = translation;
      }
    });

    // Handle title attributes
    document.querySelectorAll('[data-i18n-title]').forEach(element => {
      const key = element.getAttribute('data-i18n-title');
      const translation = get(translations, key);
      if (translation) {
        element.title = translation;
      }
    });

    // Handle aria-label attributes
    document.querySelectorAll('[data-i18n-aria]').forEach(element => {
      const key = element.getAttribute('data-i18n-aria');
      const translation = get(translations, key);
      if (translation) {
        element.setAttribute('aria-label', translation);
      }
    });
  }

  /**
   * Load translations from JSON file
   * @param {string} lang - Language code (default: 'en')
   * @returns {Promise} Promise that resolves when translations are loaded
   */
  async function load(lang = 'en') {
    currentLang = lang;

    try {
      const url = `${config.basePath}/${lang}.json`;
      if (config.debug) {
        console.log(`i18n: Loading translations from ${url}`);
      }
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to load translations for ${lang}`);
      }
      translations = await response.json();
      if (config.debug) {
        console.log(`i18n: Loaded ${Object.keys(translations).length} translation keys`);
      }
      return translations;
    } catch (error) {
      console.error('i18n: Error loading translations:', error);
      throw error;
    }
  }

  /**
   * Initialize i18n system
   * @param {Object} options - Configuration options
   * @param {string} options.basePath - Relative path to i18n directory
   * @param {string} options.lang - Language code (default: 'en')
   * @param {string} options.defaultLang - Fallback language (default: 'en')
   * @param {boolean} options.autoApply - Automatically apply translations (default: true)
   * @param {boolean} options.watchDOM - Watch for DOM changes (default: true)
   * @param {boolean} options.debug - Enable debug logging (default: false)
   * @returns {Promise} Promise that resolves when initialization is complete
   */
  async function init(options = {}) {
    // Merge user config with defaults
    config = { ...config, ...options };

    const lang = config.lang || config.defaultLang;

    if (config.debug) {
      console.log('i18n: Initializing with config:', config);
    }

    await load(lang);

    if (config.autoApply) {
      // Apply translations immediately
      applyTranslations();

      // Re-apply on DOM changes (for dynamically added content)
      if (config.watchDOM && typeof MutationObserver !== 'undefined') {
        const observer = new MutationObserver((mutations) => {
          let shouldReapply = false;
          mutations.forEach(mutation => {
            mutation.addedNodes.forEach(node => {
              if (node.nodeType === 1) { // Element node
                if (node.hasAttribute && (
                  node.hasAttribute('data-i18n') ||
                  node.hasAttribute('data-i18n-html') ||
                  node.querySelector('[data-i18n]') ||
                  node.querySelector('[data-i18n-html]')
                )) {
                  shouldReapply = true;
                }
              }
            });
          });
          if (shouldReapply) {
            applyTranslations();
          }
        });

        observer.observe(document.body, {
          childList: true,
          subtree: true
        });
      }
    }

    return translations;
  }

  /**
   * Get a translation by key
   * @param {string} key - Dot notation key (e.g., "hero.title")
   * @param {Object} replacements - Optional key-value pairs for placeholder replacement
   * @returns {string} Translated text
   */
  function t(key, replacements = {}) {
    let text = get(translations, key);

    // Replace placeholders like {name} with values
    Object.keys(replacements).forEach(placeholder => {
      text = text.replace(new RegExp(`{${placeholder}}`, 'g'), replacements[placeholder]);
    });

    return text;
  }

  /**
   * Change language
   * @param {string} lang - Language code
   * @returns {Promise} Promise that resolves when language is changed
   */
  async function setLanguage(lang) {
    await load(lang);
    applyTranslations();

    // Dispatch custom event for language change
    window.dispatchEvent(new CustomEvent('i18n:languageChanged', {
      detail: { lang, translations }
    }));
  }

  /**
   * Get current language
   * @returns {string} Current language code
   */
  function getLanguage() {
    return currentLang;
  }

  /**
   * Get all translations
   * @returns {Object} All translations
   */
  function getTranslations() {
    return translations;
  }

  // Public API
  return {
    init,
    load,
    t,
    setLanguage,
    getLanguage,
    getTranslations,
    applyTranslations
  };
})();

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = i18n;
}
