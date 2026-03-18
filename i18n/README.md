# i18n System Documentation

Simple, lightweight JSON-based internationalization system for your portfolio pages.

## Quick Start

### 1. Include the i18n script in your HTML

Add this before your closing `</body>` tag:

```html
<script src="/i18n/i18n.js"></script>
<script>
  // Initialize i18n system
  i18n.init({ lang: 'en' });
</script>
```

### 2. Add data attributes to elements

Use `data-i18n` attributes to mark translatable content:

```html
<!-- Simple text -->
<h1 data-i18n="hero.firstName"></h1>

<!-- HTML content (supports formatting) -->
<p data-i18n-html="about.bio1"></p>

<!-- Attributes -->
<button data-i18n-title="contact.email" data-i18n="contact.links.0.label"></button>
```

## Translation Keys

All translation keys are in dot notation. Here are the main sections:

### Navigation
- `nav.logo` - Logo text
- `nav.about` - About link
- `nav.experience` - Experience link
- `nav.work` / `nav.projects` - Projects link
- `nav.oss` - Open Source link
- `nav.contact` - Contact link

### Hero Section
- `hero.tag` - Tag line (e.g., "Creative Engineer — 10+ Years")
- `hero.firstName` - First name
- `hero.lastName` - Last name
- `hero.subtitle` - Main subtitle
- `hero.scrollHint` - Scroll hint text
- `hero.location` - Location text

### About Section
- `about.label` - Section label
- `about.title` - Section title (supports HTML)
- `about.bio1` - First bio paragraph
- `about.bio2` - Second bio paragraph
- `about.stats.years.value` - Years stat value
- `about.stats.years.label` - Years stat label

### Experience Section
- `experience.label` - Section label
- `experience.title` - Section title
- `experience.items[0].date` - First job date range
- `experience.items[0].role` - First job role
- `experience.items[0].company` - First job company
- `experience.items[0].description` - First job description
- `experience.items[0].tags` - Array of technology tags

### Projects Section
- `projects.label` - Section label
- `projects.title` - Section title
- `projects.items[0].name` - First project name
- `projects.items[0].org` - First project organization
- `projects.items[0].description` - First project description
- `projects.items[0].tags` - Array of project tags

### Open Source Section
- `opensource.label` - Section label
- `opensource.title` - Section title
- `opensource.items[0].name` - First OSS project name
- `opensource.items[0].tagline` - First OSS project tagline
- `opensource.items[0].description` - First OSS project description

### Contact Section
- `contact.label` - Section label
- `contact.title` - Section title
- `contact.links[0].label` - First contact link label
- `contact.links[0].url` - First contact link URL

### Footer
- `footer.copyright` - Copyright text
- `footer.editions.vaporwave` - Vaporwave edition subtitle

## Complete Example

Here's how to convert an existing page:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Brendon Smith — Portfolio</title>
</head>
<body>
  <!-- Navigation -->
  <nav>
    <div data-i18n="nav.logo"></div>
    <ul>
      <li><a href="#about" data-i18n="nav.about"></a></li>
      <li><a href="#experience" data-i18n="nav.experience"></a></li>
      <li><a href="#work" data-i18n="nav.work"></a></li>
      <li><a href="#oss" data-i18n="nav.oss"></a></li>
      <li><a href="#contact" data-i18n="nav.contact"></a></li>
    </ul>
  </nav>

  <!-- Hero Section -->
  <section class="hero">
    <div>
      <div class="hero-tag"><span data-i18n="hero.tag"></span></div>
      <h1 class="hero-h">
        <span class="gl" data-i18n="hero.firstName"></span><br>
        <span class="it" data-i18n="hero.lastName"></span>
      </h1>
      <p class="hero-sub" data-i18n="hero.subtitle"></p>
    </div>
  </section>

  <!-- About Section -->
  <section id="about">
    <div class="container">
      <div class="slbl"><span data-i18n="about.label"></span></div>
      <h2 class="sh" data-i18n-html="about.title"></h2>
      <p class="bt" data-i18n-html="about.bio1"></p>
      <p class="bt" data-i18n-html="about.bio2"></p>

      <!-- Stats -->
      <div class="stats">
        <div class="st">
          <div class="st-v" data-i18n="about.stats.years.value"></div>
          <div class="st-l" data-i18n="about.stats.years.label"></div>
        </div>
        <!-- More stats... -->
      </div>
    </div>
  </section>

  <!-- Load i18n system -->
  <script src="/i18n/i18n.js"></script>
  <script>
    // Initialize with English
    i18n.init({ lang: 'en' });

    // Optional: Change language dynamically
    // document.getElementById('langBtn').addEventListener('click', () => {
    //   i18n.setLanguage('es'); // Switch to Spanish
    // });
  </script>
</body>
</html>
```

## Dynamic Content

If you're generating content dynamically (e.g., experience items, project cards), you can use the `t()` function:

```javascript
// Get a translation
const jobTitle = i18n.t('experience.items.0.role');

// Generate HTML with translations
const experienceHTML = `
  <div class="exp-item">
    <span class="exp-d">${i18n.t('experience.items.0.date')}</span>
    <div>
      <div class="exp-r">${i18n.t('experience.items.0.role')}</div>
      <div class="exp-c">${i18n.t('experience.items.0.company')}</div>
      <div class="exp-t">${i18n.t('experience.items.0.description')}</div>
    </div>
  </div>
`;

// Append to DOM
document.querySelector('.experience-container').innerHTML = experienceHTML;

// Manually trigger translation application
i18n.applyTranslations();
```

## Using JavaScript to Build Content from JSON

For a fully dynamic approach, you can build entire sections from the translation data:

```javascript
// Wait for i18n to load
i18n.init({ lang: 'en' }).then(() => {
  const translations = i18n.getTranslations();

  // Build experience section
  const experienceContainer = document.querySelector('.experience-container');
  translations.experience.items.forEach((item, index) => {
    const expItem = document.createElement('div');
    expItem.className = 'exp-item rv-el';
    expItem.innerHTML = `
      <span class="exp-d">${item.date}</span>
      <div>
        <div class="exp-r">${item.role}</div>
        <div class="exp-c">${item.company}</div>
        <div class="exp-t">${item.description}</div>
        <div class="exp-tags">
          ${item.tags.map(tag => `<span>${tag}</span>`).join('')}
        </div>
      </div>
    `;
    experienceContainer.appendChild(expItem);
  });
});
```

## API Reference

### `i18n.init(options)`
Initialize the i18n system.

**Parameters:**
- `options.lang` (string, default: 'en') - Language code
- `options.autoApply` (boolean, default: true) - Automatically apply translations

**Returns:** Promise that resolves with translations object

### `i18n.t(key, replacements)`
Get a translation by key.

**Parameters:**
- `key` (string) - Dot notation key
- `replacements` (object, optional) - Placeholder replacements

**Returns:** Translated string

**Example:**
```javascript
i18n.t('hero.subtitle')
// "Crafting immersive digital experiences..."

i18n.t('welcome', { name: 'Brendon' })
// "Welcome, Brendon!" (if translation has "Welcome, {name}!")
```

### `i18n.setLanguage(lang)`
Change the current language.

**Parameters:**
- `lang` (string) - Language code

**Returns:** Promise that resolves when language is changed

### `i18n.getLanguage()`
Get the current language code.

**Returns:** String (e.g., 'en')

### `i18n.getTranslations()`
Get all translations for the current language.

**Returns:** Object with all translations

### `i18n.applyTranslations()`
Manually trigger translation application to all elements with data-i18n attributes.

## Adding New Languages

To add a new language (e.g., Spanish):

1. Create `/i18n/es.json` with the same structure as `en.json`
2. Translate all values
3. Use `i18n.setLanguage('es')` to switch

## Events

The i18n system dispatches a custom event when the language changes:

```javascript
window.addEventListener('i18n:languageChanged', (event) => {
  console.log('Language changed to:', event.detail.lang);
  console.log('New translations:', event.detail.translations);

  // Update any custom UI elements
});
```

## Best Practices

1. **Use data attributes for static content** - Simple and declarative
2. **Use `t()` function for dynamic content** - More flexible for JavaScript-generated HTML
3. **Keep keys organized** - Use dot notation to group related translations
4. **Provide alternatives** - Some fields have `descriptionAlt` for shorter versions
5. **Test all pages** - Ensure all translations are applied correctly

## Migration Guide

To migrate an existing page:

1. Add the i18n script to your page
2. Replace hardcoded text with `data-i18n` attributes
3. For HTML content with tags, use `data-i18n-html`
4. Initialize i18n at the bottom of your page
5. Test that all text is loading correctly

## Troubleshooting

**Translations not showing:**
- Check browser console for errors
- Verify JSON file is accessible at `/i18n/en.json`
- Ensure `i18n.init()` is called after DOM is loaded

**Missing translations:**
- Check that the key exists in `en.json`
- Verify dot notation is correct
- Use browser DevTools to inspect the element

**Dynamically added content not translated:**
- Call `i18n.applyTranslations()` after adding new content
- Or use the `t()` function to get translations directly
