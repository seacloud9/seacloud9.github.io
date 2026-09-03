import{r,j as i}from"./iframe-ClM0jS1U.js";import{R as A,V as W,D as Y,A as I,G as N,u as P,a as X,b as _,C as O,c as B,d as q,e as K}from"./GLTFLoader-D_Zo4mbP.js";import{h as H,c as G,d as C}from"./math-DUtpe-EO.js";import{a as Q}from"./useReducedMotion-BC0jmgEw.js";import{u as U,d as Z,r as $,p as J}from"./useDeviceCapabilities-TlijpFiE.js";const ee={cyan:{color:"#3fd8ff",strength:1.5,scanlines:.6,scanlineDensity:.7,fill:.08,flicker:.15,float:.12,grid:!0,background:"#040a14"},magenta:{color:"#ff4fd8",strength:1.6,scanlines:.55,scanlineDensity:.8,fill:.08,flicker:.18,float:.12,grid:!0,background:"#0a0414"},amber:{color:"#ffb642",strength:1.4,scanlines:.5,scanlineDensity:.6,fill:.1,flicker:.2,float:.1,grid:!0,background:"#120a02"},matrix:{color:"#5bff8f",strength:1.7,scanlines:.75,scanlineDensity:1,fill:.06,flicker:.25,float:.1,grid:!0,background:"#020a04"},ghost:{color:"#dbeaff",strength:1.3,scanlines:.4,scanlineDensity:.6,fill:.11,flicker:.1,float:.14,grid:!1,background:"#05070c"}},te="cyan";function re(t,e){const o={...ee[t??te]};return Object.keys(e).forEach(a=>{const l=e[a];l!==void 0&&(o[a]=l)}),o}const ne=`
precision highp float;

in vec3 position;
in vec3 normal;

uniform mat4 modelMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform vec3 cameraPosition;

out vec3 vWorldNormal;
out vec3 vViewDir;

void main() {
  vec4 world = modelMatrix * vec4(position, 1.0);
  vWorldNormal = normalize(mat3(modelMatrix) * normal);
  vViewDir = normalize(cameraPosition - world.xyz);
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,oe=`
precision highp float;

in vec3 vWorldNormal;
in vec3 vViewDir;

uniform vec3 uColor;
uniform float uStrength;
uniform float uScan;
uniform float uScanDensity;
uniform float uFill;
uniform float uFlicker;
uniform float uTime;

out vec4 fragColor;

float hash(float n) { return fract(sin(n) * 43758.5453); }

void main() {
  float ndv = max(dot(normalize(vWorldNormal), normalize(vViewDir)), 0.0);
  float fres = pow(1.0 - ndv, 3.0);            // rim glow

  // Screen-space scanlines that scroll upward.
  float s = 0.5 + 0.5 * sin(gl_FragCoord.y * uScanDensity - uTime * 6.0);
  float scan = mix(1.0, s, uScan);

  float flick = 1.0 - uFlicker * (0.12 * sin(uTime * 30.0) + 0.06 * hash(floor(uTime * 20.0)));

  float intensity = (uFill + fres * uStrength) * scan * flick;
  intensity = clamp(intensity, 0.0, 1.0);

  // Additive blending consumes color * alpha; keep per-layer value low so
  // self-overlapping geometry stays translucent/coloured instead of blowing
  // out to white, and let the rim carry the brightness.
  vec3 col = uColor * (0.4 + fres * 1.1);
  fragColor = vec4(col, intensity);
}
`;function z(t){const[e,n,o]=H(t.color);return new A({glslVersion:N,vertexShader:ne,fragmentShader:oe,transparent:!0,depthWrite:!1,blending:I,side:Y,uniforms:{uColor:{value:new W(e,n,o)},uStrength:{value:t.strength},uScan:{value:t.scanlines},uScanDensity:{value:t.scanlineDensity},uFill:{value:t.fill},uFlicker:{value:t.flicker},uTime:{value:0}}})}function V(t,e){const n=t.uniforms,[o,a,l]=H(e.color);n.uColor.value.set(o,a,l),n.uStrength.value=e.strength,n.uScan.value=e.scanlines,n.uScanDensity.value=e.scanlineDensity,n.uFill.value=e.fill,n.uFlicker.value=e.flicker}function F(t){return{color:t.color,strength:t.strength,scanlines:t.scanlines,scanlineDensity:t.scanlineDensity,fill:t.fill,flicker:t.flicker}}function ie({settings:t,register:e}){const n=r.useMemo(()=>z(F(t)),[]);return r.useEffect(()=>e(n),[n,e]),i.jsx("mesh",{material:n,children:i.jsx("torusKnotGeometry",{args:[.75,.26,160,24]})})}function ae({url:t,settings:e,register:n,onLoad:o}){const a=_(q,t),l=r.useMemo(()=>a.scene.clone(!0),[a]);return r.useEffect(()=>{const p=[];return l.traverse(g=>{const b=g;if(!b.isMesh)return;const v=z(F(e));b.material=v,p.push(n(v))}),o==null||o(),()=>p.forEach(g=>g())},[l]),i.jsx("primitive",{object:l})}function se({color:t}){const e=r.useMemo(()=>{const n=new O(t),o=new B(8,16,n,n),a=o.material;return a.transparent=!0,a.opacity=.22,a.depthWrite=!1,o.position.y=-1.25,o},[t]);return i.jsx("primitive",{object:e})}function ce(t){const{settings:e,model:n,children:o,autoRotate:a,interactive:l,cameraDistance:p,reduced:g,onLoad:b}=t,{gl:v,camera:h}=P(),k=r.useRef(null),y=r.useRef(new Set),s=r.useRef(0),S=r.useRef(.15),w=r.useRef(0),R=r.useRef(.15),u=r.useRef(p),E=r.useRef(!1),D=r.useRef(0),M=r.useRef(0),j=r.useRef(0);r.useEffect(()=>{u.current=p},[p]);const x=r.useCallback(c=>(V(c,F(e)),y.current.add(c),()=>{y.current.delete(c),c.dispose()}),[e]);return r.useEffect(()=>{y.current.forEach(c=>V(c,F(e)))},[e]),r.useEffect(()=>{if(!l)return;const c=v.domElement,f=m=>{E.current=!0,D.current=m.clientX,M.current=m.clientY},d=m=>{E.current&&(s.current+=(m.clientX-D.current)*.01,S.current=G(S.current+(m.clientY-M.current)*.01,-1.2,1.2),D.current=m.clientX,M.current=m.clientY)},L=()=>{E.current=!1},T=m=>{m.preventDefault(),u.current=G(u.current+Math.sign(m.deltaY)*.4,1.6,8)};return c.addEventListener("pointerdown",f),window.addEventListener("pointermove",d),window.addEventListener("pointerup",L),c.addEventListener("wheel",T,{passive:!1}),()=>{c.removeEventListener("pointerdown",f),window.removeEventListener("pointermove",d),window.removeEventListener("pointerup",L),c.removeEventListener("wheel",T)}},[v,l]),X((c,f)=>{g||(j.current+=f,a&&(s.current+=a*f),y.current.forEach(L=>L.uniforms.uTime.value=j.current)),w.current=C(w.current,s.current,.18,f),R.current=C(R.current,S.current,.18,f);const d=k.current;d&&(d.rotation.y=w.current,d.rotation.x=R.current,d.position.y=g?0:Math.sin(j.current*1.6)*e.float),h.position.z=C(h.position.z,u.current,.15,f),h.lookAt(0,0,0)}),i.jsxs("group",{children:[i.jsx("group",{ref:k,children:n?i.jsx(ae,{url:n,settings:e,register:x,onLoad:b}):o??i.jsx(ie,{settings:e,register:x})}),e.grid&&i.jsx(se,{color:e.color})]})}function pe(t){const{model:e,children:n,preset:o,autoRotate:a=.4,interactive:l=!0,cameraDistance:p=3.4,quality:g="auto",respectReducedMotion:b=!0,forceFallback:v=!1,onLoad:h,className:k,style:y,...s}=t,S=Q(),w=b&&S,R=U(),u=r.useMemo(()=>re(o,s),[o,s.color,s.strength,s.scanlines,s.scanlineDensity,s.fill,s.flicker,s.float,s.grid,s.background]),E=r.useMemo(()=>Z().supported,[]),D=!v&&E,M=$(g,R),j=J(M),x=u.background==="transparent",[c,f]=r.useState(!!e);r.useEffect(()=>{f(!!e)},[e]);const d={position:"relative",width:"100%",height:"100%",minHeight:240,background:x?"transparent":u.background,overflow:"hidden",...y};return D?i.jsxs("div",{className:k,style:d,"data-rffx-hologram":"","data-rffx-mode":"webgl",children:[i.jsxs(K,{gl:{antialias:!0,alpha:x,powerPreference:"high-performance"},dpr:[1,j],camera:{position:[0,.2,p],fov:45,near:.1,far:100},style:{width:"100%",height:"100%"},children:[!x&&i.jsx("color",{attach:"background",args:[u.background]}),i.jsx(r.Suspense,{fallback:null,children:i.jsx(ce,{settings:u,model:e,autoRotate:w?0:a,interactive:l,cameraDistance:p,reduced:w,onLoad:()=>{f(!1),h==null||h()},children:n})})]}),c&&i.jsx("div",{"aria-live":"polite",style:{position:"absolute",inset:0,display:"grid",placeItems:"center",pointerEvents:"none",color:u.color,fontFamily:"ui-monospace, monospace",fontSize:13,letterSpacing:2},children:"◇ MATERIALIZING…"})]}):i.jsx("div",{className:k,style:d,"data-rffx-hologram":"","data-rffx-mode":"fallback",role:"img","aria-label":"Holographic 3D preview (WebGL unavailable)",children:i.jsx("div",{"aria-hidden":"true",style:{position:"absolute",inset:0,display:"grid",placeItems:"center",color:u.color,fontFamily:"ui-monospace, monospace",fontSize:13,background:`radial-gradient(circle at 50% 60%, ${u.color}22, transparent 60%)`},children:"◇ hologram preview"})})}export{pe as H};
