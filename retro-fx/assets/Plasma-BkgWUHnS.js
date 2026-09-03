import{r as f,j as S}from"./iframe-ClM0jS1U.js";import{c as N,a as W,u as q,r as U,d as G}from"./useDeviceCapabilities-TlijpFiE.js";import{i as I,a as $}from"./useReducedMotion-BC0jmgEw.js";import{u as O}from"./useElementSize-BDiBlEFR.js";import{u as V}from"./useVisibility-CrX1ncah.js";import{u as H}from"./useAnimationFrame-D0dvpe6q.js";const X={vga:{scale:6,speed:.5,distortion:.3,waves:.4,noise:.05,posterize:12,resolutionScale:.22,palette:{a:[.5,.5,.5],b:[.5,.5,.5],c:[1,1,1],d:[.2,.15,.2]}},amiga:{scale:5,speed:.45,distortion:.5,waves:.6,noise:0,posterize:16,resolutionScale:.3,palette:{a:[.5,.5,.5],b:[.5,.5,.5],c:[1,1,1],d:[.5,.1,.3]}},acid:{scale:8,speed:1,distortion:.9,waves:.5,noise:.1,posterize:8,resolutionScale:.35,palette:{a:[.5,.5,.5],b:[.5,.5,.5],c:[1,1,1],d:[.3,.9,.5]}},vapor:{scale:4,speed:.25,distortion:.35,waves:.3,noise:.03,posterize:0,resolutionScale:.5,palette:{a:[.6,.5,.6],b:[.4,.3,.45],c:[1,1,1],d:[0,.2,.5]}},fire:{scale:6,speed:.7,distortion:.6,waves:.7,noise:.15,posterize:0,resolutionScale:.4,palette:{a:[.8,.4,.2],b:[.4,.35,.2],c:[1,1,.6],d:[0,.15,.3]}},ice:{scale:5,speed:.3,distortion:.4,waves:.5,noise:.02,posterize:0,resolutionScale:.5,palette:{a:[.5,.6,.75],b:[.3,.35,.4],c:[1,1,1],d:[.5,.6,.75]}},rainbow:{scale:6,speed:.6,distortion:.4,waves:.5,noise:0,posterize:0,resolutionScale:.42,palette:{a:[.5,.5,.5],b:[.5,.5,.5],c:[1,1,1],d:[0,.33,.67]}}},Q="rainbow";function Y(a,o){const e={...X[a??Q]};return Object.keys(o).forEach(i=>{const t=o[i];t!==void 0&&(e[i]=t)}),e}function P(a,o){const{a:s,b:e,c:i,d:t}=a.palette,l=d=>{const b=s[d]+e[d]*Math.cos(2*Math.PI*(i[d]*o+t[d]));return Math.round(Math.max(0,Math.min(1,b))*255)};return`rgb(${l(0)}, ${l(1)}, ${l(2)})`}const J=`
attribute vec2 aPosition;
void main() {
  gl_Position = vec4(aPosition, 0.0, 1.0);
}
`,K=`
precision highp float;

uniform vec2  uResolution;
uniform float uTime;       // already scaled by speed
uniform float uScale;
uniform float uDistort;
uniform float uWaves;
uniform float uNoise;
uniform float uPosterize;  // colour levels; <= 1 disables
uniform float uReact;      // audio reactivity 0..1

uniform vec3 uA;           // cosine palette coefficients
uniform vec3 uB;
uniform vec3 uC;
uniform vec3 uD;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 34.23);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

vec3 palette(float t) {
  return uA + uB * cos(6.28318530718 * (uC * t + uD));
}

void main() {
  vec2 uv = gl_FragCoord.xy / uResolution;
  vec2 p = (uv - 0.5) * uScale;
  p.x *= uResolution.x / uResolution.y;

  float t = uTime;
  float react = 1.0 + uReact * 0.8;

  // Domain warp for organic movement.
  p += uDistort * react * vec2(sin(p.y * 3.0 + t), cos(p.x * 3.0 + t * 1.2));

  // Layered plasma.
  float v = 0.0;
  v += sin(p.x * 1.5 + t);
  v += sin(p.y * 1.5 + t * 1.1);
  v += sin((p.x + p.y) * 1.1 + t * 0.9);
  float r = length(p) + 0.0001;
  v += sin(r * 3.0 - t * 1.4) * uWaves;
  v += (noise(p * 1.5 + t * 0.2) - 0.5) * 2.0 * uNoise;
  v /= (3.0 + uWaves);

  float tt = v * 0.5 + 0.5 + t * 0.02 + uReact * 0.25;
  vec3 col = palette(tt);
  col *= 0.9 + uReact * 0.4; // brighten on the beat

  if (uPosterize > 1.5) {
    col = floor(col * uPosterize + 0.5) / uPosterize;
  }

  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`,Z=["uResolution","uTime","uScale","uDistort","uWaves","uNoise","uPosterize","uReact","uA","uB","uC","uD"];class ee{constructor(o,s){this.canvas=o,this.onContextLost=s,this.uniforms=new Map,this.settings=null,this.width=1,this.height=1,this.disposed=!1;const e=o.getContext("webgl",{antialias:!1})??o.getContext("experimental-webgl");if(!e)throw new Error("RetroFuture FX Plasma: WebGL unavailable");this.gl=e,this.handleContextLost=i=>{var t;i.preventDefault(),(t=this.onContextLost)==null||t.call(this)},o.addEventListener("webglcontextlost",this.handleContextLost,!1),this.program=N(e,J,K),this.buffer=W(e),this.positionLoc=e.getAttribLocation(this.program,"aPosition");for(const i of Z)this.uniforms.set(i,e.getUniformLocation(this.program,i))}setSettings(o){this.settings=o}resize(o,s){this.width=Math.max(1,Math.floor(o)),this.height=Math.max(1,Math.floor(s)),this.canvas.width=this.width,this.canvas.height=this.height}render(o,s){if(this.disposed||!this.settings)return;const e=this.gl,i=this.settings,t=this.uniforms;e.viewport(0,0,this.width,this.height),e.useProgram(this.program),e.bindBuffer(e.ARRAY_BUFFER,this.buffer),e.enableVertexAttribArray(this.positionLoc),e.vertexAttribPointer(this.positionLoc,2,e.FLOAT,!1,0,0),e.uniform2f(t.get("uResolution"),this.width,this.height),e.uniform1f(t.get("uTime"),o*i.speed),e.uniform1f(t.get("uScale"),i.scale),e.uniform1f(t.get("uDistort"),i.distortion),e.uniform1f(t.get("uWaves"),i.waves),e.uniform1f(t.get("uNoise"),i.noise),e.uniform1f(t.get("uPosterize"),i.posterize),e.uniform1f(t.get("uReact"),s),e.uniform3fv(t.get("uA"),i.palette.a),e.uniform3fv(t.get("uB"),i.palette.b),e.uniform3fv(t.get("uC"),i.palette.c),e.uniform3fv(t.get("uD"),i.palette.d),e.drawArrays(e.TRIANGLES,0,3)}dispose(){var s;if(this.disposed)return;this.disposed=!0;const o=this.gl;this.canvas.removeEventListener("webglcontextlost",this.handleContextLost),o.deleteBuffer(this.buffer),o.deleteProgram(this.program),(s=o.getExtension("WEBGL_lose_context"))==null||s.loseContext()}}function te(a){return{position:"absolute",inset:0,backgroundImage:`conic-gradient(from 0deg at 40% 45%, ${Array.from({length:7},(s,e)=>P(a,e/6)).join(", ")}, ${P(a,0)})`,filter:"blur(24px) saturate(1.1)"}}function oe(a,o){const s=f.useRef(0);return f.useEffect(()=>{if(!o||!a||!I){s.current=0;return}let e=!1,i=0,t,l;const d=window.AudioContext??window.webkitAudioContext;async function b(){if(!(!d||!a))try{t=new d;const p=t.createAnalyser();p.fftSize=256,p.smoothingTimeConstant=.8;let c;if(a==="microphone")l=await navigator.mediaDevices.getUserMedia({audio:!0}),c=t.createMediaStreamSource(l);else{const n=t.createMediaElementSource(a);n.connect(t.destination),c=n}c.connect(p);const v=new Uint8Array(p.frequencyBinCount),x=()=>{if(e)return;p.getByteFrequencyData(v);let n=0;for(let g=0;g<v.length;g++)n+=v[g];const w=n/v.length/255;s.current+=(w-s.current)*.25,i=requestAnimationFrame(x)};if(x(),t.state==="suspended"){const n=()=>t==null?void 0:t.resume();window.addEventListener("pointerdown",n,{once:!0}),window.addEventListener("keydown",n,{once:!0})}}catch{s.current=0}}return b(),()=>{e=!0,cancelAnimationFrame(i),l==null||l.getTracks().forEach(p=>p.stop()),t==null||t.close(),s.current=0}},[a,o]),s}function ce(a){const{preset:o,children:s,quality:e="auto",respectReducedMotion:i=!0,forceFallback:t=!1,audioSource:l,audioReactivity:d=0,className:b,style:p,...c}=a,v=$(),x=q(),n=f.useMemo(()=>Y(o,c),[o,c.scale,c.speed,c.distortion,c.waves,c.noise,c.posterize,c.resolutionScale,c.palette]),w=U(e,x),g=w==="low"?.7:w==="medium"?.85:1,C=w==="low"?30:0,L=f.useMemo(()=>G().supported,[]),[z,R]=f.useState(!1),m=!t&&L&&!z,[y,F]=f.useState(null),[r,E]=f.useState(null),[D,h]=O(),[T,_]=V({rootMargin:"80px"}),k=oe(l,d>0);f.useEffect(()=>{if(!m||!y)return;let u;try{u=new ee(y,()=>R(!0))}catch{R(!0);return}return E(u),()=>{u.dispose(),E(M=>M===u?null:M)}},[m,y]),f.useEffect(()=>{r==null||r.setSettings(n)},[r,n]),f.useEffect(()=>{if(!r||h.width===0||h.height===0)return;const u=Math.max(.05,n.resolutionScale*g);r.resize(h.width*u,h.height*u)},[r,h.width,h.height,n.resolutionScale,g]);const A=i&&v||!_;H(u=>{r==null||r.render(u.time,k.current*d)},{paused:!m||A||!r,fps:C}),f.useEffect(()=>{if(!r||!m||!A)return;const u=requestAnimationFrame(()=>r.render(0,0));return()=>cancelAnimationFrame(u)},[r,m,A,n,h.width,h.height]);const B=u=>{D(u),T(u)},j={position:"relative",overflow:"hidden",display:"block",background:"#000",...p};return S.jsxs("div",{ref:B,className:b,style:j,"data-rffx-plasma":"","data-rffx-mode":m?"shader":"fallback",children:[m?S.jsx("canvas",{ref:F,"aria-hidden":"true",style:{position:"absolute",inset:0,width:"100%",height:"100%",display:"block",imageRendering:"pixelated"}}):S.jsx("div",{"aria-hidden":"true",style:te(n)}),s!=null&&S.jsx("div",{style:{position:"relative",zIndex:1},children:s})]})}export{ce as P};
