# Implementation Example

This guide shows you exactly how to add i18n to your existing pages.

## Step-by-Step Implementation

### Before (Original HTML)
```html
<nav>
  <div class="logo">BRENDON SMITH</div>
  <ul class="nav-mid">
    <li><a href="#about">About</a></li>
    <li><a href="#exp">Experience</a></li>
    <li><a href="#work">Projects</a></li>
    <li><a href="#oss">Open Source</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>
```

### After (With i18n)
```html
<nav>
  <div class="logo" data-i18n="nav.logo"></div>
  <ul class="nav-mid">
    <li><a href="#about" data-i18n="nav.about"></a></li>
    <li><a href="#exp" data-i18n="nav.experience"></a></li>
    <li><a href="#work" data-i18n="nav.work"></a></li>
    <li><a href="#oss" data-i18n="nav.oss"></a></li>
    <li><a href="#contact" data-i18n="nav.contact"></a></li>
  </ul>
</nav>
```

## Complete Page Conversion Example

Here's a full example for index4.html (Vaporwave edition):

### 1. Add script tag before closing `</body>`

```html
<!-- Just before </body> -->
<script src="/i18n/i18n.js"></script>
<script>
  // Initialize i18n after DOM is loaded
  i18n.init({ lang: 'en' });
</script>
</body>
</html>
```

### 2. Convert Navigation

```html
<!-- BEFORE -->
<nav>
  <div class="logo">BRENDON SMITH</div>
  <ul class="nav-mid">
    <li><a href="#about">About</a></li>
    <li><a href="#exp">Experience</a></li>
    <li><a href="#work">Projects</a></li>
    <li><a href="#oss">Open Source</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>

<!-- AFTER -->
<nav>
  <div class="logo" data-i18n="nav.logo"></div>
  <ul class="nav-mid">
    <li><a href="#about" data-i18n="nav.about"></a></li>
    <li><a href="#exp" data-i18n="nav.experience"></a></li>
    <li><a href="#work" data-i18n="nav.work"></a></li>
    <li><a href="#oss" data-i18n="nav.oss"></a></li>
    <li><a href="#contact" data-i18n="nav.contact"></a></li>
  </ul>
</nav>
```

### 3. Convert Hero Section

```html
<!-- BEFORE -->
<section class="hero">
  <div class="hero-glass rv-el">
    <div class="hero-tag"><span>Creative Engineer — 15+ Years</span></div>
    <h1 class="hero-h">
      <span class="gl">Brendon</span><br>
      <span class="it">Smith</span>
    </h1>
    <p class="hero-sub">Crafting immersive digital experiences...</p>
  </div>
</section>

<!-- AFTER -->
<section class="hero">
  <div class="hero-glass rv-el">
    <div class="hero-tag"><span data-i18n="hero.tagAlt"></span></div>
    <h1 class="hero-h">
      <span class="gl" data-i18n="hero.firstName"></span><br>
      <span class="it" data-i18n="hero.lastName"></span>
    </h1>
    <p class="hero-sub" data-i18n="hero.subtitle"></p>
  </div>
</section>
```

### 4. Convert About Section (with HTML support)

```html
<!-- BEFORE -->
<section id="about" class="section">
  <div class="container">
    <div class="glass">
      <div class="about-grid">
        <div class="inner-glass rv-el">
          <div class="slbl"><span>About</span></div>
          <h2 class="sh">Engineering the <span class="it">future</span> of digital</h2>
          <p class="bt">I'm a <strong>creative engineer</strong>...</p>
          <p class="bt">From building <strong>m{ai}geXR</strong>...</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- AFTER -->
<section id="about" class="section">
  <div class="container">
    <div class="glass">
      <div class="about-grid">
        <div class="inner-glass rv-el">
          <div class="slbl"><span data-i18n="about.label"></span></div>
          <!-- Note: using data-i18n-html for HTML content with <span> tags -->
          <h2 class="sh" data-i18n-html="about.title"></h2>
          <p class="bt" data-i18n-html="about.bio1"></p>
          <p class="bt" data-i18n-html="about.bio2"></p>
        </div>
      </div>
    </div>
  </div>
</section>
```

### 5. Convert Stats

```html
<!-- BEFORE -->
<div class="stats rv-el">
  <div class="st">
    <div class="st-v">10+</div>
    <div class="st-l">Years</div>
  </div>
  <div class="st">
    <div class="st-v">300</div>
    <div class="st-l">Repos</div>
  </div>
</div>

<!-- AFTER -->
<div class="stats rv-el">
  <div class="st">
    <div class="st-v" data-i18n="about.stats.years.value"></div>
    <div class="st-l" data-i18n="about.stats.years.label"></div>
  </div>
  <div class="st">
    <div class="st-v" data-i18n="about.stats.repos.value"></div>
    <div class="st-l" data-i18n="about.stats.repos.label"></div>
  </div>
</div>
```

### 6. Convert Footer

```html
<!-- BEFORE -->
<footer>
  <span>© 2026 Brendon Smith</span>
  <span>Vaporwave Circuit — Infinite Horizon</span>
</footer>

<!-- AFTER -->
<footer>
  <span data-i18n="footer.copyright"></span>
  <span data-i18n="footer.editions.vaporwaveCircuit"></span>
</footer>
```

## Dynamic Content Approach

If you prefer to build content from JavaScript (more flexible for future multi-language support):

```html
<section id="exp" class="section">
  <div class="container">
    <div class="glass">
      <div class="slbl rv-el"><span data-i18n="experience.label"></span></div>
      <h2 class="sh rv-el" data-i18n-html="experience.title"></h2>
      <!-- Empty container - will be populated by JavaScript -->
      <div class="exp-container" id="experienceList"></div>
    </div>
  </div>
</section>

<script>
// Build experience items dynamically
i18n.init({ lang: 'en' }).then(() => {
  const translations = i18n.getTranslations();
  const container = document.getElementById('experienceList');

  translations.experience.items.forEach((item, index) => {
    const expItem = document.createElement('div');
    expItem.className = 'exp-item inner-glass rv-el';

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

    container.appendChild(expItem);
  });
});
</script>
```

## Mixed Approach (Recommended)

For best results, use:
- **Static data attributes** for simple, unchanging text
- **JavaScript generation** for repeated structures (experience items, projects, etc.)

```html
<!-- Static content -->
<div class="slbl"><span data-i18n="experience.label"></span></div>
<h2 class="sh" data-i18n-html="experience.title"></h2>

<!-- Dynamic content -->
<div id="experienceList"></div>

<script>
i18n.init().then(() => {
  // Build dynamic items
  const items = i18n.getTranslations().experience.items;
  const html = items.map(item => `
    <div class="exp-item">
      <span class="exp-d">${item.date}</span>
      <div>
        <div class="exp-r">${item.role}</div>
        <div class="exp-c">${item.company}</div>
        <div class="exp-t">${item.description}</div>
      </div>
    </div>
  `).join('');

  document.getElementById('experienceList').innerHTML = html;
});
</script>
```

## Quick Checklist for Each Page

- [ ] Add i18n.js script before closing `</body>`
- [ ] Add `i18n.init()` call
- [ ] Convert navigation links
- [ ] Convert hero section
- [ ] Convert about section (use `data-i18n-html` for formatted content)
- [ ] Convert stats
- [ ] Convert experience section (consider dynamic approach)
- [ ] Convert projects section
- [ ] Convert open source section
- [ ] Convert contact links
- [ ] Convert footer
- [ ] Test in browser
- [ ] Verify all text loads correctly

## Testing Your Implementation

After implementation, open your browser console and test:

```javascript
// Check if i18n loaded
console.log(i18n.getLanguage()); // Should show 'en'

// Check translations
console.log(i18n.t('hero.firstName')); // Should show 'Brendon'

// Test language switching (if you add more languages later)
i18n.setLanguage('en'); // Should reload translations
```

## Common Patterns

### Pattern 1: Simple Text
```html
<div data-i18n="nav.about"></div>
```

### Pattern 2: HTML Content (with tags)
```html
<h2 data-i18n-html="about.title"></h2>
<!-- JSON: "title": "Engineering the <span class=\"it\">future</span>" -->
```

### Pattern 3: Arrays (use index)
```html
<span data-i18n="experience.items.0.tags.0"></span>
<!-- Gets first tag of first experience item -->
```

### Pattern 4: Dynamic Generation
```javascript
const project = i18n.t('projects.items.0.name');
const html = `<h3>${project}</h3>`;
```
