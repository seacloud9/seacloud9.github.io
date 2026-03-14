varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;

uniform float uTime;
uniform float uProgress;
uniform float uRotationSpeed;
uniform vec3 uTriforceScale;

void main() {
  vUv = uv;
  vNormal = normalize(normalMatrix * normal);
  vPosition = position;

  // Rotation animation around Y-axis
  float angle = uTime * uRotationSpeed;
  mat3 rotation = mat3(
    cos(angle), 0.0, sin(angle),
    0.0, 1.0, 0.0,
    -sin(angle), 0.0, cos(angle)
  );

  vec3 rotatedPos = rotation * position;

  // Scale based on progress (fade in)
  vec3 scaledPos = rotatedPos * uProgress * uTriforceScale;

  gl_Position = projectionMatrix * modelViewMatrix * vec4(scaledPos, 1.0);
}
