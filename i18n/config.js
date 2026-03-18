/**
 * i18n Configuration
 * Centralized configuration for the internationalization system
 *
 * Usage:
 * <script src="./i18n/config.js"></script>
 * <script src="./i18n/i18n.js"></script>
 * <script>
 *   i18n.init(i18nConfig);
 * </script>
 */

// Auto-detect base path based on current location
(function() {
  const path = window.location.pathname;
  // Count directory depth (exclude empty strings and index.html)
  const parts = path.split('/').filter(p => p && p !== 'index.html');
  const depth = parts.length;

  let detectedBasePath;
  if (depth === 0) {
    // Root level: /index.html
    detectedBasePath = './i18n';
  } else {
    // Subdirectory: /storm-edition/ or deeper
    detectedBasePath = '../'.repeat(depth) + 'i18n';
  }

  window.i18nConfig = {
    // Default language
    defaultLang: 'en',

    // Available languages
    availableLanguages: ['en'],

    // Relative path to i18n directory (auto-detected)
    // Auto-detection works for:
    //   './i18n'     - root level files (index.html)
    //   '../i18n'    - one level deep (/vaporwave-circuit/index.html)
    //   '../../i18n' - two levels deep (/themes/ocean/index.html)
    basePath: detectedBasePath,

    // Auto-apply translations on load
    autoApply: true,

    // Watch for DOM changes and re-apply translations
    watchDOM: true,

    // Fallback to key name if translation not found
    fallbackToKey: true,

    // Log errors to console (set to true for debugging)
    debug: false
  };
})();
