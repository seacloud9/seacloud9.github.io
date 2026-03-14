import { degToRad } from 'three/src/math/MathUtils'
import { t } from '../config/i18n/index.js'
import { ANIMATION_CONFIG } from '../config/animations.js'

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

// Island color scheme
const ISLAND_COLORS = [
  '#00ffd5', // About - Holo cyan
  '#8b5cf6', // Experience - Violet
  '#ff6b35', // Projects - Orange accent
  '#00ffd5', // Skills - Holo cyan
  '#8b5cf6', // Open Source - Violet
  '#ff6b35'  // Contact - Orange accent
]

// Helper to get island by ID with i18n support
export const getIslandById = (id) => {
  const keys = ['about', 'experience', 'projects', 'skills', 'opensource', 'contact']
  const key = keys[id]

  if (!key) return null

  return {
    id,
    name: t(`islands.${key}.name`),
    originalName: t(`islands.${key}.originalName`),
    description: t(`islands.${key}.description`),
    icon: t(`islands.${key}.icon`),
    position: calculateIslandPosition(id),
    color: ISLAND_COLORS[id]
  }
}

// Generate islands array dynamically with i18n
export const RESUME_ISLANDS_ARRAY = [0, 1, 2, 3, 4, 5].map(getIslandById)

// Legacy RESUME_ISLANDS object for backwards compatibility
export const RESUME_ISLANDS = {
  ABOUT: getIslandById(0),
  EXPERIENCE: getIslandById(1),
  PROJECTS: getIslandById(2),
  SKILLS: getIslandById(3),
  OPENSOURCE: getIslandById(4),
  CONTACT: getIslandById(5)
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
// Show only the nearest billboard - hide all others
export const BILLBOARD_SHOW_DISTANCE = 250 // Units to start showing billboard (must be > 220 to see from start)
export const BILLBOARD_HIDE_DISTANCE = 350 // Units to hide billboard

// Export animation config values
export const AUTO_SAIL_SPEED = ANIMATION_CONFIG.navigation.autoSailSpeed
export const AUTO_SAIL_STOP_DISTANCE = ANIMATION_CONFIG.navigation.autoSailStopDistance
