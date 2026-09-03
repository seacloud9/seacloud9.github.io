import{r as u,j as g}from"./iframe-ClM0jS1U.js";import{c as I,a as j,u as V,d as z,r as H,p as O}from"./useDeviceCapabilities-TlijpFiE.js";import{h as W}from"./math-DUtpe-EO.js";import{a as $}from"./useReducedMotion-BC0jmgEw.js";import{u as Y}from"./useElementSize-BDiBlEFR.js";import{u as q}from"./useVisibility-CrX1ncah.js";import{u as K}from"./useAnimationFrame-D0dvpe6q.js";const Q={arcade:{curvature:.12,scanlines:.55,scanlineCount:520,mask:.5,chromaticAberration:2.2,brightness:1.15,contrast:1.2,saturation:1.25,tint:"#ffffff",noise:.05,flicker:.06,roll:0,syncJitter:.05,vignette:.35,bloom:.5},consumer:{curvature:.18,scanlines:.4,scanlineCount:480,mask:.3,chromaticAberration:1.6,brightness:1.05,contrast:1.08,saturation:1.1,tint:"#fffaf2",noise:.06,flicker:.08,roll:.05,syncJitter:.08,vignette:.4,bloom:.4},broadcast:{curvature:.14,scanlines:.45,scanlineCount:460,mask:.2,chromaticAberration:3,brightness:1,contrast:1.05,saturation:1.15,tint:"#f7fbff",noise:.14,flicker:.12,roll:.25,syncJitter:.28,vignette:.45,bloom:.35},"green-terminal":{curvature:.2,scanlines:.6,scanlineCount:400,mask:.15,chromaticAberration:.6,brightness:1.1,contrast:1.25,saturation:0,tint:"#39ff6a",noise:.05,flicker:.1,roll:0,syncJitter:.04,vignette:.5,bloom:.7},"amber-terminal":{curvature:.2,scanlines:.6,scanlineCount:400,mask:.15,chromaticAberration:.6,brightness:1.1,contrast:1.25,saturation:0,tint:"#ffb642",noise:.05,flicker:.1,roll:0,syncJitter:.04,vignette:.5,bloom:.7},damaged:{curvature:.22,scanlines:.5,scanlineCount:440,mask:.25,chromaticAberration:4.5,brightness:.95,contrast:1.1,saturation:.9,tint:"#eef2ff",noise:.3,flicker:.35,roll:.7,syncJitter:.6,vignette:.55,bloom:.45}},Z="consumer";function tt(o,r,e){const t={...Q[o??Z],...et(r)},n=rt(e);return{...t,curvature:t.curvature*n,chromaticAberration:t.chromaticAberration*n,noise:t.noise*n,flicker:t.flicker*n,roll:t.roll*n,syncJitter:t.syncJitter*n,scanlines:t.scanlines*(.35+.65*n),bloom:t.bloom*(.4+.6*n)}}function et(o){const r={};for(const e in o)o[e]!==void 0&&(r[e]=o[e]);return r}function rt(o){return o<0?0:o>1?1:o}const ot=`
attribute vec2 aPosition;
varying vec2 vUv;
void main() {
  // aPosition is a fullscreen triangle in clip space (-1..3).
  vUv = aPosition * 0.5 + 0.5;
  gl_Position = vec4(aPosition, 0.0, 1.0);
}
`,it=`
precision highp float;

varying vec2 vUv;

uniform sampler2D uSource;
uniform vec2  uResolution;      // drawing-buffer size in device px
uniform float uTime;            // seconds

// Geometry
uniform float uCurvature;       // barrel distortion amount
uniform float uScanline;        // scanline intensity 0..1
uniform float uScanlineCount;   // number of scanlines
uniform float uMask;            // aperture-grille mask intensity 0..1

// Color / beam
uniform float uAberration;      // chromatic aberration (px at edge)
uniform float uBrightness;
uniform float uContrast;
uniform float uSaturation;
uniform vec3  uTint;            // multiply grade (white = no tint)

// Distortion / life
uniform float uNoise;           // static grain 0..1
uniform float uFlicker;         // brightness flicker 0..1
uniform float uRoll;            // rolling bar strength 0..1
uniform float uSyncJitter;      // horizontal sync wobble 0..1
uniform float uVignette;        // edge darkening 0..1
uniform float uBloom;           // glow amount 0..1

// Cheap hash-based value noise — original, no texture LUT.
float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

// Warp UVs for barrel/curvature. Returns coords that can leave the 0..1 range,
// letting the caller draw the black "tube" border outside the glass.
vec2 curveUv(vec2 uv, float amount) {
  vec2 cc = uv * 2.0 - 1.0;
  float dist = dot(cc, cc);
  cc *= 1.0 + dist * amount;
  return cc * 0.5 + 0.5;
}

vec3 sampleGrade(vec2 uv) {
  vec3 c = texture2D(uSource, uv).rgb;
  // Contrast around mid-grey, then brightness, saturation, tint.
  c = (c - 0.5) * uContrast + 0.5;
  c *= uBrightness;
  float luma = dot(c, vec3(0.299, 0.587, 0.114));
  c = mix(vec3(luma), c, uSaturation);
  c *= uTint;
  return c;
}

void main() {
  vec2 uv = curveUv(vUv, uCurvature);

  // Horizontal sync jitter — a small per-scanline horizontal offset that
  // travels down the screen, plus a slow rolling vertical distortion bar.
  float line = uv.y * uResolution.y;
  float jitter = (hash(vec2(floor(line), floor(uTime * 12.0))) - 0.5);
  uv.x += jitter * uSyncJitter * 0.02;

  float rollPos = fract(uv.y - uTime * 0.15);
  float rollBar = smoothstep(0.0, 0.05, rollPos) *
                  (1.0 - smoothstep(0.06, 0.20, rollPos));
  uv.y += rollBar * uRoll * 0.01;

  // Outside the curved glass → black tube border.
  vec2 edge = step(0.0, uv) * step(uv, vec2(1.0));
  float inBounds = edge.x * edge.y;

  // Chromatic aberration: pull R/B apart radially from the tube centre.
  vec2 dir = uv - 0.5;
  vec2 ca = dir * (uAberration / uResolution.x);
  vec3 color;
  color.r = sampleGrade(uv + ca).r;
  color.g = sampleGrade(uv).g;
  color.b = sampleGrade(uv - ca).b;

  // Bloom: cheap 4-tap halo of the graded source, added back for phosphor glow.
  if (uBloom > 0.0) {
    vec2 px = 2.0 / uResolution;
    vec3 b = sampleGrade(uv + vec2(px.x, 0.0)) +
             sampleGrade(uv - vec2(px.x, 0.0)) +
             sampleGrade(uv + vec2(0.0, px.y)) +
             sampleGrade(uv - vec2(0.0, px.y));
    color += (b * 0.25) * uBloom * 0.6;
  }

  // Scanlines — soft dark bands aligned to the tube's line count.
  float sl = sin(uv.y * uScanlineCount * 3.14159265);
  float scan = mix(1.0, 0.5 + 0.5 * sl * sl, uScanline);
  color *= scan;

  // Aperture-grille shadow mask across RGB sub-pixels.
  float mcol = floor(mod(gl_FragCoord.x, 3.0));
  vec3 maskRGB = vec3(
    mcol == 0.0 ? 1.0 : 0.7,
    mcol == 1.0 ? 1.0 : 0.7,
    mcol == 2.0 ? 1.0 : 0.7
  );
  color *= mix(vec3(1.0), maskRGB, uMask);

  // Animated static grain.
  float grain = hash(gl_FragCoord.xy + uTime * 60.0);
  color += (grain - 0.5) * uNoise;

  // Global flicker (mains-hum style, plus a faster shimmer).
  float flick = 1.0 - uFlicker *
    (0.04 * sin(uTime * 12.0) + 0.03 * hash(vec2(uTime, 0.0)));
  color *= flick;

  // Vignette darkens toward the corners of the tube.
  float vig = 1.0 - uVignette * dot(dir, dir) * 1.4;
  color *= clamp(vig, 0.0, 1.0);

  gl_FragColor = vec4(color * inBounds, 1.0);
}
`,nt=["uResolution","uTime","uCurvature","uScanline","uScanlineCount","uMask","uAberration","uBrightness","uContrast","uSaturation","uTint","uNoise","uFlicker","uRoll","uSyncJitter","uVignette","uBloom"];class st{constructor(r,e,i){this.canvas=r,this.source=e,this.onContextLost=i,this.uniforms=new Map,this.settings=null,this.width=1,this.height=1,this.disposed=!1;const t=r.getContext("webgl",{premultipliedAlpha:!1})??r.getContext("experimental-webgl");if(!t)throw new Error("RetroFuture FX CRT: WebGL unavailable");this.gl=t,this.handleContextLost=h=>{var v;h.preventDefault(),(v=this.onContextLost)==null||v.call(this)},r.addEventListener("webglcontextlost",this.handleContextLost,!1),this.program=I(t,ot,it),this.buffer=j(t),this.positionLoc=t.getAttribLocation(this.program,"aPosition");for(const h of nt)this.uniforms.set(h,t.getUniformLocation(this.program,h));const n=t.createTexture();if(!n)throw new Error("RetroFuture FX CRT: unable to create texture");this.texture=n,t.bindTexture(t.TEXTURE_2D,n),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,1)}setSettings(r){this.settings=r}resize(r,e){this.width=Math.max(1,Math.floor(r)),this.height=Math.max(1,Math.floor(e)),this.canvas.width=this.width,this.canvas.height=this.height}sourceReady(){const r=this.source;return r instanceof HTMLImageElement?r.complete&&r.naturalWidth>0:r instanceof HTMLVideoElement?r.readyState>=2:r.width>0&&r.height>0}uploadTexture(){if(!this.sourceReady())return;const r=this.gl;r.bindTexture(r.TEXTURE_2D,this.texture);try{r.texImage2D(r.TEXTURE_2D,0,r.RGBA,r.RGBA,r.UNSIGNED_BYTE,this.source)}catch{}}render(r){if(this.disposed||!this.settings)return;const e=this.gl;this.uploadTexture(),e.viewport(0,0,this.width,this.height),e.useProgram(this.program),e.bindBuffer(e.ARRAY_BUFFER,this.buffer),e.enableVertexAttribArray(this.positionLoc),e.vertexAttribPointer(this.positionLoc,2,e.FLOAT,!1,0,0),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.texture);const i=this.settings,t=this.uniforms;e.uniform1i(e.getUniformLocation(this.program,"uSource"),0),e.uniform2f(t.get("uResolution"),this.width,this.height),e.uniform1f(t.get("uTime"),r),e.uniform1f(t.get("uCurvature"),i.curvature),e.uniform1f(t.get("uScanline"),i.scanlines),e.uniform1f(t.get("uScanlineCount"),i.scanlineCount),e.uniform1f(t.get("uMask"),i.mask),e.uniform1f(t.get("uAberration"),i.chromaticAberration),e.uniform1f(t.get("uBrightness"),i.brightness),e.uniform1f(t.get("uContrast"),i.contrast),e.uniform1f(t.get("uSaturation"),i.saturation);const[n,h,v]=W(i.tint);e.uniform3f(t.get("uTint"),n,h,v),e.uniform1f(t.get("uNoise"),i.noise),e.uniform1f(t.get("uFlicker"),i.flicker),e.uniform1f(t.get("uRoll"),i.roll),e.uniform1f(t.get("uSyncJitter"),i.syncJitter),e.uniform1f(t.get("uVignette"),i.vignette),e.uniform1f(t.get("uBloom"),i.bloom),e.drawArrays(e.TRIANGLES,0,3)}dispose(){var e;if(this.disposed)return;this.disposed=!0;const r=this.gl;this.canvas.removeEventListener("webglcontextlost",this.handleContextLost),r.deleteTexture(this.texture),r.deleteBuffer(this.buffer),r.deleteProgram(this.program),(e=r.getExtension("WEBGL_lose_context"))==null||e.loseContext()}}function at(o,r){const i=.15+.35*o.scanlines,t=Math.max(2,Math.round(900/o.scanlineCount)+1);return{position:"absolute",inset:0,pointerEvents:"none",backgroundImage:[`repeating-linear-gradient(0deg, rgba(0,0,0,${i}) 0px, rgba(0,0,0,${i}) 1px, transparent 1px, transparent ${t}px)`,`repeating-linear-gradient(90deg, rgba(255,0,0,${.03*o.mask}) 0px, rgba(0,255,0,${.03*o.mask}) 1px, rgba(0,0,255,${.03*o.mask}) 2px, transparent 3px)`].join(","),boxShadow:`inset 0 0 ${40+o.vignette*120}px rgba(0,0,0,${.3+o.vignette*.5})`,mixBlendMode:"multiply",animation:r&&o.flicker>.02?"rffx-crt-flicker 0.12s steps(2) infinite":void 0}}function _(o){return o.tint.toLowerCase()==="#ffffff"?null:{position:"absolute",inset:0,pointerEvents:"none",backgroundColor:o.tint,mixBlendMode:"overlay",opacity:.18}}const lt=`
@keyframes rffx-crt-flicker {
  0% { opacity: 1; }
  100% { opacity: 0.94; }
}`,ut="img,video,canvas";function bt(o){const{children:r,preset:e,intensity:i=1,quality:t="auto",respectReducedMotion:n=!0,forceFallback:h=!1,className:v,style:M,...s}=o,x=$(),k=V(),E=u.useMemo(()=>tt(e,s,i),[e,i,s.curvature,s.scanlines,s.scanlineCount,s.mask,s.chromaticAberration,s.brightness,s.contrast,s.saturation,s.tint,s.noise,s.flicker,s.roll,s.syncJitter,s.vignette,s.bloom]),p=u.useMemo(()=>!n||!x?E:{...E,noise:0,flicker:0,roll:0,syncJitter:0,chromaticAberration:Math.min(E.chromaticAberration,1)},[E,n,x]),C=u.useRef(null),T=u.useRef(null),[l,S]=u.useState(null),[F,d]=Y(),[B,U]=q({rootMargin:"120px"}),P=u.useMemo(()=>z().supported,[]),[b,A]=u.useState(null),[G,L]=u.useState(!1);u.useEffect(()=>{var f;const a=(f=C.current)==null?void 0:f.querySelector(ut);a instanceof HTMLImageElement||a instanceof HTMLVideoElement||a instanceof HTMLCanvasElement?A(a):A(null)},[r]);const m=!h&&P&&b!==null&&!G,w=H(t,k),R=Math.min(k.pixelRatio,O(w));u.useEffect(()=>{if(!m||!T.current||!b)return;let a;try{a=new st(T.current,b,()=>L(!0))}catch{L(!0);return}return S(a),()=>{a.dispose(),S(f=>f===a?null:f)}},[m,b]),u.useEffect(()=>{!l||d.width===0||d.height===0||l.resize(d.width*R,d.height*R)},[l,d.width,d.height,R]),u.useEffect(()=>{l==null||l.setSettings(p)},[l,p]);const y=n&&x?!0:!U;K(a=>{l==null||l.render(a.time)},{paused:!m||y||!l,fps:w==="low"?30:0}),u.useEffect(()=>{if(!l||!m||!y)return;const a=requestAnimationFrame(()=>l.render(0)),f=()=>l.render(0),c=b;return c==null||c.addEventListener("load",f),c==null||c.addEventListener("loadeddata",f),()=>{cancelAnimationFrame(a),c==null||c.removeEventListener("load",f),c==null||c.removeEventListener("loadeddata",f)}},[l,m,y,b,p,d.width,d.height]);const D=a=>{F(a),B(a)},X={position:"relative",display:"block",overflow:"hidden",lineHeight:0,backgroundColor:"#000",...M},J=m?{opacity:0,position:"relative"}:{position:"relative"},N=!m;return g.jsxs("div",{ref:D,className:v,style:X,"data-rffx-crt":"","data-rffx-mode":m?"shader":"fallback",children:[g.jsx("div",{ref:C,style:J,children:r}),m&&g.jsx("canvas",{ref:T,"aria-hidden":"true",style:{position:"absolute",inset:0,width:"100%",height:"100%",pointerEvents:"none"}}),N&&g.jsxs(g.Fragment,{children:[g.jsx("style",{children:lt}),_(p)&&g.jsx("div",{"aria-hidden":"true",style:_(p)}),g.jsx("div",{"aria-hidden":"true",style:at(p,!(n&&x))})]})]})}export{bt as C};
