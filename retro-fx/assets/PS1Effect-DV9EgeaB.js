import{r as i,j as v}from"./iframe-ClM0jS1U.js";import{f as k,R as D,V as y,G as P,a as T,b as G,N as g,d as J,g as N,u as V,W as A,h as W,O as z,M as _,P as H,S as O,e as q}from"./GLTFLoader-D_Zo4mbP.js";import{h as R}from"./math-DUtpe-EO.js";import{a as I}from"./useReducedMotion-BC0jmgEw.js";import{u as Q,d as X,r as B,p as K}from"./useDeviceCapabilities-TlijpFiE.js";const Y={ps1:{resolutionScale:.18,vertexPrecision:80,vertexJitter:0,colorDepth:32,dither:.6,fogDistance:12,frameRate:0,background:"#20304a"},saturn:{resolutionScale:.24,vertexPrecision:110,vertexJitter:0,colorDepth:32,dither:.45,fogDistance:16,frameRate:0,background:"#2a2438"},pc1995:{resolutionScale:.16,vertexPrecision:200,vertexJitter:0,colorDepth:16,dither:.85,fogDistance:20,frameRate:15,background:"#101418"},horror:{resolutionScale:.16,vertexPrecision:64,vertexJitter:.015,colorDepth:24,dither:.7,fogDistance:7,frameRate:12,background:"#0a0c0a"},dreamlike:{resolutionScale:.22,vertexPrecision:90,vertexJitter:.006,colorDepth:20,dither:.35,fogDistance:18,frameRate:0,background:"#3a2c52"}},Z="ps1";function $(t,e){const a={...Y[t??Z]};return Object.keys(e).forEach(n=>{const c=e[n];c!==void 0&&(a[n]=c)}),a}const F=new k(new Uint8Array([255,255,255,255]),1,1);F.needsUpdate=!0;const ee=`
precision highp float;

in vec3 position;
in vec3 normal;
in vec2 uv;

uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat3 normalMatrix;

uniform float uSnap;
uniform float uJitter;
uniform float uTime;
uniform float uFogNear;
uniform float uFogFar;

// Affine (PSX-style) texture mapping without the non-standard 'noperspective'
// qualifier: premultiply uv by clip-space w here, divide by interpolated w in
// the fragment. The perspective-correct interpolation then cancels out, leaving
// screen-linear (affine) UVs — exactly the PSX GPU's texture warping.
out vec2 vUv;
out float vW;
out vec3 vLight;
out float vFog;

float hash(vec3 p) {
  return fract(sin(dot(p, vec3(12.9898, 78.233, 37.719))) * 43758.5453);
}

void main() {
  vec3 pos = position;
  // Per-vertex jitter.
  if (uJitter > 0.0) {
    vec3 seed = floor(pos * 32.0) + floor(uTime * 24.0);
    pos += (vec3(hash(seed), hash(seed.yzx), hash(seed.zxy)) - 0.5) * uJitter;
  }

  vec4 mv = modelViewMatrix * vec4(pos, 1.0);
  vec4 clip = projectionMatrix * mv;

  // Vertex snapping: quantize NDC.xy to a coarse grid.
  vec2 ndc = clip.xy / clip.w;
  ndc = floor(ndc * uSnap) / uSnap;
  clip.xy = ndc * clip.w;
  gl_Position = clip;

  vUv = uv * clip.w; // divided by interpolated w in the fragment → affine.
  vW = clip.w;

  vec3 n = normalize(normalMatrix * normal);
  float d = max(dot(n, normalize(vec3(0.4, 0.9, 0.55))), 0.0);
  vLight = vec3(0.32) + d * vec3(0.85);

  vFog = clamp((-mv.z - uFogNear) / max(0.001, uFogFar - uFogNear), 0.0, 1.0);
}
`,te=`
precision highp float;

in vec2 vUv;
in float vW;
in vec3 vLight;
in float vFog;

uniform sampler2D uMap;
uniform int uHasMap;
uniform vec3 uColor;
uniform vec3 uFogColor;

out vec4 fragColor;

void main() {
  vec2 uvA = vUv / vW; // recover affine UV
  vec3 base = uHasMap == 1 ? texture(uMap, uvA).rgb : uColor;
  vec3 c = base * vLight;
  c = mix(c, uFogColor, vFog);
  fragColor = vec4(c, 1.0);
}
`;function C(t){const[e,r,a]=R(t.fogColor),[n,c,l]=R(t.color??"#c8c8c8");return new D({glslVersion:P,vertexShader:ee,fragmentShader:te,uniforms:{uMap:{value:t.map??F},uHasMap:{value:t.map?1:0},uColor:{value:new y(n,c,l)},uSnap:{value:t.snap},uJitter:{value:t.jitter},uTime:{value:0},uFogNear:{value:t.fogNear},uFogFar:{value:t.fogFar},uFogColor:{value:new y(e,r,a)}}})}function M(t,e){const r=t.uniforms;r.uSnap.value=e.snap,r.uJitter.value=e.jitter,r.uFogNear.value=e.fogNear,r.uFogFar.value=e.fogFar;const[a,n,c]=R(e.fogColor);r.uFogColor.value.set(a,n,c),e.map!==void 0&&(r.uMap.value=e.map??F,r.uHasMap.value=e.map?1:0)}const re=1.2;function b(t,e){return{snap:t.vertexPrecision,jitter:t.vertexJitter,fogNear:re,fogFar:t.fogDistance,fogColor:t.background,map:e}}function oe(){const t=document.createElement("canvas");t.width=128,t.height=128;const e=t.getContext("2d");e.fillStyle="#20242e",e.fillRect(0,0,128,128),e.fillStyle="#ff2d95",e.fillRect(10,12,108,34),e.fillStyle="#00ffe1",e.fillRect(10,54,108,8),e.fillStyle="#e7ecf5",e.font="bold 22px monospace",e.fillText("RF-64",20,38),e.fillStyle="#8a93ab",e.font="10px monospace",e.fillText("RETROFUTURE",20,80),e.fillText("CARTRIDGE",20,94);for(let a=0;a<6;a++)e.fillStyle=a%2?"#2a2f3e":"#39405a",e.fillRect(20+a*15,104,12,14);const r=new N(t);return r.minFilter=g,r.magFilter=g,r.generateMipmaps=!1,r}function ae({settings:t,register:e}){const r=i.useMemo(oe,[]),a=i.useMemo(()=>C(b(t,r)),[r]);return i.useEffect(()=>e(a,r),[a,r,e]),v.jsx("mesh",{material:a,children:v.jsx("boxGeometry",{args:[1.15,1.55,.24]})})}function ne({url:t,settings:e,register:r}){const a=G(J,t),n=i.useMemo(()=>a.scene.clone(!0),[a]);return i.useEffect(()=>{const c=[];return n.traverse(l=>{const m=l;if(!m.isMesh)return;const u=m.material,o=(u==null?void 0:u.map)??null;o&&(o.minFilter=g,o.magFilter=g,o.generateMipmaps=!1,o.needsUpdate=!0);const f=C(b(e,o));m.material=f,c.push(r(f,o))}),()=>c.forEach(l=>l())},[n]),v.jsx("primitive",{object:n})}function ie({settings:t,model:e,children:r,autoRotate:a,reduced:n}){const c=i.useRef(null),l=i.useRef(new Set),m=i.useCallback((o,f)=>(M(o,b(t,f)),l.current.add(o),()=>{l.current.delete(o),o.dispose()}),[t]);i.useEffect(()=>{l.current.forEach(o=>M(o,b(t)))},[t]);const u=i.useRef(0);return T((o,f)=>{c.current&&a&&!n&&(c.current.rotation.y+=a*f),n||(u.current+=f,l.current.forEach(s=>s.uniforms.uTime.value=u.current))}),v.jsx("group",{ref:c,children:e?v.jsx(ne,{url:e,settings:t,register:m}):r??v.jsx(ae,{settings:t,register:m})})}const se=`
precision highp float;
in vec3 position;
in vec2 uv;
out vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position.xy, 0.0, 1.0);
}
`,ce=`
precision highp float;
in vec2 vUv;
uniform sampler2D uSource;
uniform vec2 uResolution;
uniform float uLevels;
uniform float uDither;
out vec4 fragColor;

float bayer4(vec2 p) {
  int x = int(mod(p.x, 4.0));
  int y = int(mod(p.y, 4.0));
  int idx = x + y * 4;
  float m[16] = float[16](
    0.0, 8.0, 2.0, 10.0,
    12.0, 4.0, 14.0, 6.0,
    3.0, 11.0, 1.0, 9.0,
    15.0, 7.0, 13.0, 5.0
  );
  return m[idx] / 16.0 - 0.5;
}

void main() {
  vec3 c = texture(uSource, vUv).rgb;
  vec2 p = floor(vUv * uResolution);
  c += bayer4(p) * uDither / uLevels;
  c = floor(c * uLevels + 0.5) / uLevels;
  fragColor = vec4(clamp(c, 0.0, 1.0), 1.0);
}
`;function ue({resolutionScale:t,colorDepth:e,dither:r,frameRate:a}){const{gl:n,scene:c,camera:l,size:m}=V(),u=i.useMemo(()=>new A(2,2,{minFilter:g,magFilter:g,depthBuffer:!0}),[]),o=i.useMemo(()=>{const s=new D({glslVersion:P,vertexShader:se,fragmentShader:ce,depthTest:!1,depthWrite:!1,uniforms:{uSource:{value:u.texture},uResolution:{value:new W(2,2)},uLevels:{value:e},uDither:{value:r}}}),d=new z(-1,1,1,-1,0,1),p=new _(new H(2,2),s),S=new O;return S.add(p),{scene:S,cam:d,material:s,mesh:p}},[u]);i.useEffect(()=>{const s=Math.max(2,Math.round(m.width*t)),d=Math.max(2,Math.round(m.height*t));u.setSize(s,d),o.material.uniforms.uResolution.value.set(s,d)},[m.width,m.height,t,u,o]),i.useEffect(()=>{o.material.uniforms.uLevels.value=e,o.material.uniforms.uDither.value=r},[e,r,o]);const f=i.useRef(0);return T((s,d)=>{f.current+=d;const p=a>0?1/a:0;(p===0||f.current>=p)&&(f.current=p===0?0:f.current%p,n.setRenderTarget(u),n.render(c,l),n.setRenderTarget(null)),o.material.uniforms.uSource.value=u.texture,n.render(o.scene,o.cam)},1),i.useEffect(()=>()=>{u.dispose(),o.material.dispose(),o.mesh.geometry.dispose()},[u,o]),null}function de(t){const{model:e,children:r,preset:a,autoRotate:n=.5,cameraDistance:c=2.8,quality:l="auto",respectReducedMotion:m=!0,forceFallback:u=!1,className:o,style:f,...s}=t,d=I(),p=m&&d,S=Q(),h=i.useMemo(()=>$(a,s),[a,s.resolutionScale,s.vertexPrecision,s.vertexJitter,s.colorDepth,s.dither,s.fogDistance,s.frameRate,s.background]),x=i.useMemo(()=>p?{...h,vertexJitter:0,frameRate:0}:h,[h,p]),E=i.useMemo(()=>X().supported,[]),j=!u&&E,U=B(l,S),L=K(U),w={position:"relative",width:"100%",height:"100%",minHeight:200,background:h.background,overflow:"hidden",...f};return j?v.jsx("div",{className:o,style:w,"data-rffx-ps1":"","data-rffx-mode":"webgl",children:v.jsxs(q,{gl:{antialias:!1,powerPreference:"high-performance"},dpr:[1,L],camera:{position:[0,0,c],fov:50,near:.1,far:100},style:{width:"100%",height:"100%",imageRendering:"pixelated"},children:[v.jsx("color",{attach:"background",args:[h.background]}),v.jsx(i.Suspense,{fallback:null,children:v.jsx(ie,{settings:x,model:e,autoRotate:p?0:n,reduced:p,children:r})}),v.jsx(ue,{resolutionScale:x.resolutionScale,colorDepth:x.colorDepth,dither:x.dither,frameRate:x.frameRate})]})}):v.jsx("div",{className:o,style:w,"data-rffx-ps1":"","data-rffx-mode":"fallback",role:"img","aria-label":"3D model preview (WebGL unavailable)",children:v.jsx("div",{"aria-hidden":"true",style:{position:"absolute",inset:0,display:"grid",placeItems:"center",color:"rgba(255,255,255,0.5)",fontFamily:"ui-monospace, monospace",fontSize:13,background:"repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0 8px, transparent 8px 16px)"},children:"◈ 3D preview"})})}export{de as P};
