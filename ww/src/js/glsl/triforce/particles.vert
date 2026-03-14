attribute float particleIndex;
attribute vec3 offset;

uniform float uTime;
uniform float uProgress;
uniform float uRiseSpeed;

varying float vAlpha;

void main() {
  // Staggered fade-in based on particle index
  float delay = particleIndex * 0.02;
  float particleProgress = clamp((uProgress - delay) / 0.3, 0.0, 1.0);

  // Rise upward over time
  vec3 pos = position + offset;
  pos.y += uTime * uRiseSpeed * particleProgress;

  // Fade out as particles rise
  vAlpha = particleProgress * (1.0 - (pos.y / 8.0));

  vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
  gl_PointSize = 8.0 * (1.0 / -mvPosition.z);
  gl_Position = projectionMatrix * mvPosition;
}
