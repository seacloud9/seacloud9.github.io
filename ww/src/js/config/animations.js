/**
 * Animation timing and easing configuration
 * All values in milliseconds unless otherwise specified
 */
export const ANIMATION_CONFIG = {
  // Triforce Arrival Sequence
  triforce: {
    // Pre-animation
    boatSettleDelay: 1000, // Wait for boat to stop (was 500ms) - SLOWER

    // Rising Crystals (NEW - dramatic buildup)
    crystals: {
      count: 12, // Number of glowing crystals
      spreadRadius: 6.0, // How far they spread around boat (increased for visibility)
      riseSpeed: 3.0, // Upward velocity (increased)
      duration: 3000, // Total crystal animation duration (3s)
      yPosition: 1.0, // Starting height above water (lowered to see them rise from water)
    },

    // 3D Shader Animation (NEW - inspired by original game)
    shader3D: {
      fadeInDuration: 1000, // 3D triforce fade-in
      rotationSpeed: 0.5, // Rotation multiplier (radians/sec)
      glowPulseDuration: 2500, // Glow pulse cycle
      holdDuration: 1500, // Hold at peak before fade
      fadeOutDuration: 800, // Fade-out time
      totalDuration: 5800, // Total 3D animation: 1000+2500+1500+800

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

    // CSS SVG Animation (existing, but slower)
    css2D: {
      pieceDuration: 1400, // Each piece animation (was 600ms) - SLOWER
      pieceStagger: 500, // Delay between pieces (was 200ms) - SLOWER
      glowDuration: 1500, // Glow pulse duration (was 800ms) - SLOWER
      glowDelay: 1600, // When to start glow (was 1000ms) - SLOWER
      totalDuration: 4100, // Total: 1400 + (500*2) + 1500 = 4100ms

      // Easing functions
      easing: {
        pieceBounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        glowPulse: 'ease-in-out',
      },
    },

    // Modal Transition
    modal: {
      pauseBeforeFade: 300, // Pause after triforce fades
      fadeInDuration: 800, // Modal fade/scale (was 400ms) - SLOWER
      scaleEasing: 'cubic-bezier(0.34, 1.56, 0.64, 1)', // Smooth pop-in
      initialDelay: 80, // Delay before starting modal animation
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

// Total timeline: 1000 (settle) + 3000 (crystals) + 5800 (3D triforce) + 4100 (CSS) + 300 (pause) + 800 (modal) = 15,000ms (15 seconds)
// Much more cinematic and memorable than old 2.7s! Now with dramatic crystal buildup!

console.log(
  `✨ Triforce arrival sequence duration: ${ANIMATION_CONFIG.triforce.totalSequenceTime}ms`
)
