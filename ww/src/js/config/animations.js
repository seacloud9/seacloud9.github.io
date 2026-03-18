/**
 * Animation timing and easing configuration
 * All values in milliseconds unless otherwise specified
 */
export const ANIMATION_CONFIG = {
  // Triforce Arrival Sequence
  triforce: {
    // Pre-animation
    boatSettleDelay: 800, // Wait for boat to stop - snappier

    // Rising Crystals (DISABLED - rendering issues)
    crystals: {
      count: 12,
      spreadRadius: 6.0,
      riseSpeed: 3.0,
      duration: 0, // Set to 0 since disabled
      yPosition: 1.0,
    },

    // 3D Shader Animation - RE-ENABLED (testing with construction-time add)
    shader3D: {
      fadeInDuration: 600,
      rotationSpeed: 0.8,
      glowPulseDuration: 1500,
      holdDuration: 800,
      fadeOutDuration: 500,
      totalDuration: 3400, // Back to normal duration

      // Particle system
      particles: {
        count: 50, // Number of sparkle particles
        spreadRadius: 3.0, // Particle distribution radius
        riseSpeed: 1.5, // Upward velocity
        fadeInDelay: 500, // When particles start appearing
      },

      // Shader uniforms
      uniforms: {
        glowIntensityMin: 1.0, // Minimum glow
        glowIntensityMax: 3.5, // Maximum glow (peak)
        triforceScale: 2.0, // Size of 3D triforce
        yPosition: 6.0, // Height above boat
        goldColor: [1.0, 0.84, 0.0], // RGB gold color
      },
    },

    // CSS SVG Animation - snappier timing
    css2D: {
      pieceDuration: 800, // Each piece animation - faster
      pieceStagger: 250, // Delay between pieces - tighter
      glowDuration: 1000, // Glow pulse duration - quicker
      glowDelay: 900, // When to start glow - earlier
      totalDuration: 2300, // Total: 800 + (250*2) + 1000 = 2300ms

      // Easing functions
      easing: {
        pieceBounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        glowPulse: 'ease-in-out',
      },
    },

    // Modal Transition
    modal: {
      pauseBeforeFade: 200, // Brief pause after triforce fades
      fadeInDuration: 600, // Modal fade/scale - snappier
      scaleEasing: 'cubic-bezier(0.34, 1.56, 0.64, 1)', // Smooth pop-in
      initialDelay: 60, // Minimal delay
    },

    // Cinematic Camera
    camera: {
      duration: 1000, // Camera transition duration (during boat settle)
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', // Smooth ease-in-out
      offset: {
        x: 0, // Side offset from boat (0 = directly behind)
        y: 8, // Height above boat (8 units up)
        z: -18, // Distance behind boat (negative = behind)
      },
      lookAt: {
        x: 0, // Look at boat center
        y: 3, // Look slightly above boat (to see triforce area)
        z: 0,
      },
      fov: 50, // Field of view (optional, can adjust zoom feel)
    },

    // Sequencing (calculated totals)
    get totalSequenceTime() {
      return (
        this.boatSettleDelay +
        this.crystals.duration +
        this.shader3D.totalDuration +
        this.css2D.totalDuration +
        this.modal.pauseBeforeFade +
        this.modal.fadeInDuration
      )
    },
  },

  // Navigation & Islands
  navigation: {
    autoSailSpeed: 1.2,
    autoSailStopDistance: 200,
    cameraTransitionDuration: 1200,
  },
}

// Total timeline: 800 (settle) + 0 (crystals disabled) + 3400 (3D triforce) + 2300 (CSS) + 200 (pause) + 600 (modal) = 7,300ms (~7 seconds)
// Snappier and more engaging - crystals disabled due to rendering issues

console.log(
  `✨ Triforce arrival sequence duration: ${ANIMATION_CONFIG.triforce.totalSequenceTime}ms`
)
