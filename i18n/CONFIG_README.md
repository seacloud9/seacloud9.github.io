# i18n Configuration System

Easy-to-configure internationalization system with **NO absolute paths**.

## Quick Start

### Basic Setup (Using Auto-Detection)

```html
<!-- Load config and i18n -->
<script src="../i18n/config.js"></script>
<script src="../i18n/i18n.js"></script>
<script>
  // Use default configuration
  i18n.init(i18nConfig);
</script>
```

### Custom Configuration

```html
<script src="../i18n/config.js"></script>
<script src="../i18n/i18n.js"></script>
<script>
  // Override specific settings
  i18n.init({
    ...i18nConfig,
    basePath: '../i18n',  // Relative path from current HTML file
    defaultLang: 'en',
    debug: true           // Enable debug logging
  });
</script>
```

## Configuration Options

Edit [`config.js`](config.js) to change default settings:

```javascript
const i18nConfig = {
  // Default language to load
  defaultLang: 'en',

  // List of available languages
  availableLanguages: ['en'],

  // Relative path to i18n directory
  // '../i18n' for files in subdirectories
  // './i18n' for files in root
  basePath: '../i18n',

  // Auto-apply translations when init() is called
  autoApply: true,

  // Watch DOM for changes and re-translate new elements
  watchDOM: true,

  // Show key name if translation not found
  fallbackToKey: true,

  // Log debug information to console
  debug: false
};
```

## Directory Structure

```
/
├── i18n/
│   ├── config.js           ← Configuration file
│   ├── i18n.js             ← Translation engine
│   ├── en.json             ← English translations
│   └── [other-lang].json   ← Other language files
│
├── vaporwave-circuit/
│   └── index.html          ← Uses: basePath: '../i18n'
│
├── ocean-depths/
│   └── index.html          ← Uses: basePath: '../i18n'
│
└── index.html              ← Would use: basePath: './i18n'
```

## Path Configuration Examples

### For files in subdirectories (current setup)
```javascript
basePath: '../i18n'
```

Example: `/vaporwave-circuit/index.html` → `/i18n/en.json`

### For files in root directory
```javascript
basePath: './i18n'
```

Example: `/index.html` → `/i18n/en.json`

### For files nested two levels deep
```javascript
basePath: '../../i18n'
```

Example: `/themes/ocean/index.html` → `/i18n/en.json`

## Auto-Detection (Advanced)

The config includes an auto-detection helper:

```javascript
i18n.init({
  ...i18nConfig,
  basePath: i18nConfig.autoDetectBasePath()
});
```

This automatically calculates the correct relative path based on the current URL.

## Per-Page Configuration

Override settings for specific pages:

```html
<script src="../i18n/config.js"></script>
<script src="../i18n/i18n.js"></script>
<script>
  // Custom config for this page only
  i18n.init({
    basePath: '../i18n',
    defaultLang: 'es',  // Use Spanish on this page
    debug: true         // Enable debugging
  });
</script>
```

## Adding New Languages

1. Create new JSON file: `i18n/es.json`
2. Update config:
   ```javascript
   availableLanguages: ['en', 'es']
   ```
3. Use in HTML:
   ```javascript
   i18n.init({ ...i18nConfig, defaultLang: 'es' });
   ```

## Debug Mode

Enable debug logging to troubleshoot:

```javascript
i18n.init({
  ...i18nConfig,
  debug: true
});
```

Console output:
```
i18n: Initializing with config: {...}
i18n: Loading translations from ../i18n/en.json
i18n: Loaded 10 translation keys
```

## Best Practices

1. **Always use relative paths** - Never use `/i18n/` (absolute)
2. **Keep one config file** - Edit `config.js` for global defaults
3. **Override per-page** - Use `i18n.init({...})` for page-specific settings
4. **Test with debug** - Turn on `debug: true` when adding new pages
5. **Organize by theme** - Each theme directory has its own `index.html`

## Common Issues

### Translations not loading?
- Check `basePath` is correct relative to HTML file
- Enable `debug: true` to see fetch URL
- Verify `en.json` exists at the path

### Wrong path depth?
- Count directories from HTML to root
- Each level needs one `../`
- Example: `themes/ocean/index.html` = `../../i18n`

### New elements not translating?
- Check `watchDOM: true` is enabled
- Verify elements have `data-i18n` attributes
- Try calling `i18n.applyTranslations()` manually

## Migration Guide

### Old setup (absolute paths):
```html
<script src="/i18n/i18n.js"></script>
<script>
  i18n.init({ lang: 'en' });
</script>
```

### New setup (relative paths + config):
```html
<script src="../i18n/config.js"></script>
<script src="../i18n/i18n.js"></script>
<script>
  i18n.init(i18nConfig);
</script>
```

Benefits:
- ✅ Works offline
- ✅ Works in subdirectories
- ✅ Easy to configure
- ✅ No server required
- ✅ Portable across environments
