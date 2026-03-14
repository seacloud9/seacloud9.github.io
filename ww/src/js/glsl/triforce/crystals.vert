attribute float crystalIndex;
attribute vec3 offset;
attribute float randomPhase;

uniform float uTime;
uniform float uProgress;
uniform float uRiseSpeed;

varying float vAlpha;
varying float vGlow;
varying vec3 vPosition;

void main() {
  // Staggered appearance based on crystal index
  float delay = crystalIndex * 0.08;
  float crystalProgress = clamp((uProgress - delay) / 0.3, 0.0, 1.0);

  // Rise upward with oscillation
  vec3 pos = position + offset;
  // Use progress (0-1) instead of time for rise height
  float riseHeight = crystalProgress * uRiseSpeed * 3.0;

  // Add floating oscillation
  float oscillation = sin(uTime * 2.0 + randomPhase) * 0.3;
  pos.y += riseHeight + oscillation;

  // Gentle rotation
  float rotationSpeed = 0.5 + randomPhase * 0.5;
  float angle = uTime * rotationSpeed;
  mat3 rotation = mat3(
    cos(angle), 0.0, sin(angle),
    0.0, 1.0, 0.0,
    -sin(angle), 0.0, cos(angle)
  );
  pos = rotation * pos;

  // Fade in and out
  vAlpha = crystalProgress * (1.0 - smoothstep(0.7, 1.0, uProgress));

  // Glow intensity pulses
  vGlow = 0.5 + 0.5 * sin(uTime * 3.0 + randomPhase * 6.28);

  vPosition = pos;

  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mvPosition;
}
