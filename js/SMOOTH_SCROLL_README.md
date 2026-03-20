# Smooth Scroll & Parallax System

Simple, cross-platform compatible scrolling system for all portfolio demos.

## Features

- **Lightweight parallax** - Subtle depth effect, optimized for Windows/macOS consistency
- **Scroll reveal** - Elements fade in as you scroll (works with `.rv-el` class)
- **Smooth anchor links** - Navigation links smoothly scroll to sections
- **Auto-initialization** - Works out of the box with minimal configuration

## Usage

### Basic (Auto-Init)
Just include the script - it initializes automatically:
```html
<script src="../js/smooth-scroll.js"></script>
```

### Custom Configuration
```html
<script src="../js/smooth-scroll.js"></script>
<script>
  window.SMOOTH_SCROLL_AUTO_INIT = false;
  document.addEventListener('DOMContentLoaded', () => {
    SmoothScroll.init({
      parallaxIntensity: 0.15,  // 0.1-0.2 recommended
      enableParallax: true,
      revealThreshold: 0.1,
      smoothAnchorLinks: true,
      revealDelay: 50
    });
  });
</script>
```

## HTML Attributes

### Parallax Effect
Add `data-parallax` to any element for subtle movement:
```html
<div class="section" data-parallax>
  <!-- Content moves slightly on scroll -->
</div>
```

### Scroll Reveal
Elements with these classes fade in when scrolled into view:
```html
<div class="rv-el">Fades in on scroll</div>
<div class="reveal-on-scroll">Also fades in</div>
```

## Configuration Options

| Option | Default | Description |
|--------|---------|-------------|
| `parallaxIntensity` | `0.15` | Amount of parallax movement (0.1-0.2 recommended) |
| `enableParallax` | `true` | Enable/disable parallax globally |
| `revealThreshold` | `0.1` | How much element must be visible before revealing (0-1) |
| `smoothAnchorLinks` | `true` | Enable smooth scrolling for `#anchor` links |
| `revealDelay` | `50` | Stagger delay (ms) between revealing multiple elements |

## Cross-Platform Notes

The system uses:
- Simple `translate3d()` transforms (hardware accelerated)
- Viewport-based calculations (consistent across platforms)
- `requestAnimationFrame` throttling (performance)
- Passive scroll listeners (smooth scrolling)

Tested on:
- macOS (Safari, Chrome, Firefox)
- Windows (Chrome, Firefox, Edge)
- iOS Safari
- Android Chrome

## Current Implementation

All 6 portfolio themes use this system:
- **holographic-theme**: 0.15 intensity (medium)
- **vaporwave-circuit**: 0.12 intensity (subtle)
- **storm-edition**: 0.18 intensity (dramatic)
- **terrain-edition**: 0.14 intensity (natural)
- **ocean-depths**: Auto-init (default 0.15)
- **neural-network**: Auto-init (default 0.15)

## Global Updates

To adjust parallax across all demos, edit `/js/smooth-scroll.js`:
```javascript
let config = {
  parallaxIntensity: 0.15, // Change default here
  // ...
};
```

Or override per-theme in each HTML file's `SmoothScroll.init()` call.
