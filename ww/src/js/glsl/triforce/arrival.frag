varying vec2 vUv;
varying vec3 vPosition;
varying vec3 vNormal;

uniform float uTime;
uniform float uGlowIntensity;
uniform vec3 uGlowColor;
uniform float uOpacity;

void main() {
  // Base golden color
  vec3 baseColor = vec3(1.0, 0.84, 0.0);

  // Pulsing glow effect
  float pulse = sin(uTime * 2.0) * 0.5 + 0.5;
  vec3 glowColor = uGlowColor * (1.0 + pulse * uGlowIntensity);

  // Edge glow (Fresnel-like effect)
  vec3 viewDir = normalize(cameraPosition - vPosition);
  float edgeFactor = 1.0 - abs(dot(vNormal, viewDir));
  edgeFactor = pow(edgeFactor, 2.5);

  // Combine base color with glow
  vec3 finalColor = baseColor + glowColor * 0.4 + (glowColor * edgeFactor * 0.6);

  gl_FragColor = vec4(finalColor, uOpacity);
}
