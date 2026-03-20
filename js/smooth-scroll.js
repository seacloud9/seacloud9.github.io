/**
 * Simplified Smooth Scrolling & Parallax System
 * Optimized for cross-platform consistency (Windows/macOS)
 *
 * Features:
 * - Lightweight parallax with minimal performance overhead
 * - Scroll reveal animations with IntersectionObserver
 * - Smooth anchor navigation
 * - Cross-platform compatible rendering
 *
 * Usage:
 * <script src="../js/smooth-scroll.js"></script>
 * <script>
 *   SmoothScroll.init({
 *     parallaxIntensity: 0.15,
 *     enableParallax: true
 *   });
 * </script>
 *
 * HTML Attributes:
 * - data-parallax : Apply subtle parallax effect
 * - class="reveal-on-scroll" or "rv-el" : Fade in on scroll
 */

const SmoothScroll = (() => {
  let config = {
    parallaxIntensity: 0.15, // Reduced for consistency
    enableParallax: true,
    revealThreshold: 0.1,
    smoothAnchorLinks: true,
    revealDelay: 50
  };

  let ticking = false;

  /**
   * Initialize the smooth scroll system
   */
  function init(options = {}) {
    config = { ...config, ...options };

    if (config.enableParallax) {
      setupParallax();
    }
    setupScrollReveal();
    if (config.smoothAnchorLinks) {
      setupAnchorLinks();
    }
  }

  /**
   * Setup lightweight parallax - only on scroll, no RAF loop
   */
  function setupParallax() {
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateParallax();
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    // Initial update
    updateParallax();
  }

  /**
   * Update parallax with simple transform (cross-platform safe)
   */
  function updateParallax() {
    const scrollTop = window.pageYOffset;
    const elements = document.querySelectorAll('[data-parallax]');

    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      const elementTop = rect.top + scrollTop;
      const elementHeight = rect.height;
      const viewportHeight = window.innerHeight;

      // Only update if element is near viewport (performance)
      if (rect.bottom > 0 && rect.top < viewportHeight) {
        // Simple parallax: element moves slower than scroll
        // Using viewport-based calculation for consistency
        const scrollProgress = (scrollTop - elementTop + viewportHeight) / (viewportHeight + elementHeight);
        const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
        const offset = (clampedProgress - 0.5) * 100 * config.parallaxIntensity;

        // Use simple transform (better cross-platform consistency)
        el.style.transform = `translate3d(0, ${offset}px, 0)`;
        el.style.willChange = 'transform';
      }
    });
  }

  /**
   * Setup scroll reveal animations
   */
  function setupScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // Stagger animations
          setTimeout(() => {
            entry.target.classList.add('revealed');
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }, index * config.revealDelay);

          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: config.revealThreshold,
      rootMargin: '0px 0px -50px 0px'
    });

    // Observe all reveal elements
    document.querySelectorAll('.reveal-on-scroll, .rv-el').forEach(el => {
      // Set initial state
      if (!el.classList.contains('revealed')) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
      }
      observer.observe(el);
    });
  }

  /**
   * Setup smooth anchor link navigation
   */
  function setupAnchorLinks() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
          smoothScrollTo(target);
        }
      });
    });
  }

  /**
   * Smooth scroll to element
   */
  function smoothScrollTo(element, offset = 80) {
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1200;
    let start = null;

    function animation(currentTime) {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);

      // Easing function (easeInOutCubic)
      const ease = progress < 0.5
        ? 4 * progress * progress * progress
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  }

  /**
   * Manually trigger parallax update (e.g., after window resize)
   */
  function refresh() {
    if (config.enableParallax) {
      updateParallax();
    }
  }

  // Public API
  return {
    init,
    refresh,
    scrollTo: smoothScrollTo
  };
})();

// Handle window resize
window.addEventListener('resize', () => {
  if (SmoothScroll) {
    SmoothScroll.refresh();
  }
}, { passive: true });

// Auto-initialize if enabled
if (window.SMOOTH_SCROLL_AUTO_INIT !== false) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => SmoothScroll.init());
  } else {
    SmoothScroll.init();
  }
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = SmoothScroll;
}
