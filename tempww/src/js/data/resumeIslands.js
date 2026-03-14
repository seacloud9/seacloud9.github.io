import { degToRad } from 'three/src/math/MathUtils'

/**
 * Resume Islands Mapping
 * Maps Wind Waker islands to resume sections
 *
 * Island positions are calculated using the same angle/radius system as the original game:
 * - angle: starting at degToRad(-120), incrementing by degToRad(60) for each island
 * - radius: 1470 * 2.5 (farRadius) for main islands
 *
 * Note: Island indices match the order in the Islands component (island_0, island_1, etc.)
 */

const farRadius = 0.15 // Reduced from 2.5 to keep islands much closer for better camera view
const islandRadius = 1470 * farRadius

// Calculate island positions using the same logic as Islands component
const calculateIslandPosition = (index) => {
  const baseAngle = degToRad(-120)
  const angleIncrement = degToRad(60)
  const angle = baseAngle + (angleIncrement * index)

  return {
    x: Math.cos(angle) * islandRadius,
    z: Math.sin(angle) * islandRadius,
    angle
  }
}

export const RESUME_ISLANDS = {
  ABOUT: {
    id: 0,
    name: 'About',
    originalName: 'Forsaken Fortress',
    description: 'Learn about my background and experience',
    position: calculateIslandPosition(0),
    icon: '👤',
    color: '#00ffd5' // Holo cyan
  },
  EXPERIENCE: {
    id: 1,
    name: 'Experience',
    originalName: 'Windfall Island',
    description: 'My professional journey and roles',
    position: calculateIslandPosition(1),
    icon: '💼',
    color: '#8b5cf6' // Violet
  },
  PROJECTS: {
    id: 2,
    name: 'Projects',
    originalName: 'Tower of the Gods',
    description: 'Featured projects and accomplishments',
    position: calculateIslandPosition(2),
    icon: '🚀',
    color: '#ff6b35' // Orange accent
  },
  SKILLS: {
    id: 3,
    name: 'Skills',
    originalName: 'Dragon Roost Island',
    description: 'Technologies and expertise',
    position: calculateIslandPosition(3),
    icon: '⚡',
    color: '#00ffd5' // Holo cyan
  },
  OPENSOURCE: {
    id: 4,
    name: 'Open Source',
    originalName: 'Forest Haven',
    description: 'My contributions to open source',
    position: calculateIslandPosition(4),
    icon: '🌟',
    color: '#8b5cf6' // Violet
  },
  CONTACT: {
    id: 5,
    name: 'Contact',
    originalName: 'Outset Island',
    description: "Let's connect and collaborate",
    position: calculateIslandPosition(5),
    icon: '📧',
    color: '#ff6b35' // Orange accent
  }
}

// Array version for easy iteration
export const RESUME_ISLANDS_ARRAY = Object.values(RESUME_ISLANDS)

// Helper to get island by ID
export const getIslandById = (id) => {
  return RESUME_ISLANDS_ARRAY.find(island => island.id === id)
}

// Helper to get island position as Vector3-compatible object
export const getIslandPosition = (id) => {
  const island = getIslandById(id)
  return island ? {
    x: island.position.x,
    y: 0, // Islands are at sea level
    z: island.position.z
  } : null
}

// Proximity threshold for showing billboards (in world units)
// Islands are at ~220 units from origin (farRadius 0.15 * 1470)
// Boat starts at origin (0,0,0), so initial distance to islands is ~220 units
// Show billboards when boat gets within reasonable viewing distance
export const BILLBOARD_SHOW_DISTANCE = 300 // Units to start showing billboard (always visible since max distance is ~220)
export const BILLBOARD_HIDE_DISTANCE = 400 // Units to hide billboard

// Auto-sail settings
export const AUTO_SAIL_SPEED = 1.2 // Speed multiplier for auto-sailing
export const AUTO_SAIL_STOP_DISTANCE = 200 // Distance from island to stop auto-sailing
