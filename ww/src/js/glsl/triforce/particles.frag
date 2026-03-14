varying float vAlpha;

void main() {
  // Circular particle shape
  vec2 center = gl_PointCoord - vec2(0.5);
  float dist = length(center);

  if (dist > 0.5) discard;

  float alpha = (1.0 - (dist / 0.5)) * vAlpha;

  gl_FragColor = vec4(1.0, 0.84, 0.0, alpha);
}
