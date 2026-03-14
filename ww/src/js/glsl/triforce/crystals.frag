varying float vAlpha;
varying float vGlow;
varying vec3 vPosition;

uniform vec3 uGlowColor;

void main() {
  // Crystal base color with golden glow - MUCH BRIGHTER
  vec3 baseColor = vec3(1.0, 0.9, 0.5);

  // Pulsing glow effect - INCREASED INTENSITY
  vec3 glowColor = uGlowColor * (3.0 + vGlow * 2.0);

  // Mix base and glow - MORE GLOW
  vec3 finalColor = mix(baseColor, glowColor, 0.8);

  // Add extra brightness for reflective look - BRIGHTER
  finalColor += vec3(0.8, 0.7, 0.3) * vGlow;

  // INCREASED ALPHA for better visibility
  gl_FragColor = vec4(finalColor, vAlpha);
}
