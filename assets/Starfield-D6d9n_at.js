import{r as l,j as E}from"./iframe-ClM0jS1U.js";import{c as V,u as G,r as H,p as q,d as Q}from"./useDeviceCapabilities-TlijpFiE.js";import{h as B,c as $}from"./math-DUtpe-EO.js";import{a as J}from"./useReducedMotion-BC0jmgEw.js";import{u as K}from"./useElementSize-BDiBlEFR.js";import{u as Z}from"./useVisibility-CrX1ncah.js";import{u as tt}from"./usePointerPosition-CLvrN410.js";import{u as et}from"./useAnimationFrame-D0dvpe6q.js";const ot={deepspace:{starCount:1700,speed:1.2,depth:34,fov:75,trailLength:.15,starSize:2.4,mouseInfluence:.35,rotationSpeed:.01,colors:["#ffffff","#bcd3ff","#ffe6c4"],background:"#04060f"},flight:{starCount:2600,speed:6,depth:30,fov:85,trailLength:.4,starSize:2,mouseInfluence:.5,rotationSpeed:0,colors:["#ffffff","#aacbff"],background:"#04060f"},hyperspace:{starCount:3800,speed:15,depth:26,fov:95,trailLength:1.1,starSize:1.8,mouseInfluence:.4,rotationSpeed:0,colors:["#ffffff","#9ec5ff","#c9a8ff"],background:"#03040c"},warp:{starCount:4200,speed:24,depth:24,fov:105,trailLength:2.2,starSize:1.6,mouseInfluence:.25,rotationSpeed:0,colors:["#ffffff","#8ab4ff"],background:"#02030a"},nebula:{starCount:3200,speed:2.5,depth:32,fov:80,trailLength:.3,starSize:3,mouseInfluence:.6,rotationSpeed:.03,colors:["#ff77e1","#7ad7ff","#b592ff","#ffffff"],background:"#0a0620"}},rt="flight";function at(n,e){const o={...ot[n??rt]};for(const t in e){const a=e[t];a!==void 0&&(o[t]=a)}return o}const st=`
attribute vec3 aStar;    // x, y, zInit (zInit in [0, uRange))
attribute vec3 aColor;   // per-star colour
attribute float aEnd;    // 0.0 = head, 1.0 = tail (streak); constant 0 for points

uniform float uTime;
uniform float uSpeed;
uniform float uRange;
uniform float uNear;
uniform float uFocal;
uniform float uAspect;
uniform float uTrail;
uniform float uSize;
uniform float uMouseInfluence;
uniform float uRotation;
uniform float uWarp;
uniform vec2  uMouse;

varying float vAlpha;
varying vec3  vColor;

void main() {
  // Travel toward the camera and wrap into [uNear, uNear + uRange).
  float z = aStar.z - mod(uTime * uSpeed, uRange);
  z = mod(z - uNear, uRange) + uNear;

  // Tail endpoint sits further from the camera → projects nearer the centre,
  // drawing a radial streak. Streak length scales with warp.
  float trail = uTrail * (0.12 + uWarp * 5.0);
  z += aEnd * trail;

  // Slow rotation / drift of the whole field.
  float c = cos(uRotation), s = sin(uRotation);
  vec2 xy = vec2(aStar.x * c - aStar.y * s, aStar.x * s + aStar.y * c);

  // Perspective projection.
  vec2 p = (xy * uFocal) / z;
  // Depth parallax from the pointer (nearer stars shift more).
  p += uMouse * uMouseInfluence * (uFocal / z);
  p.x /= uAspect;

  gl_Position = vec4(p, 0.0, 1.0);
  gl_PointSize = clamp(uSize * (uFocal / z), 1.0, 40.0);

  // Fade in at the far plane (so respawns don't pop) and brighten toward camera.
  // A brightness floor keeps distant stars visible instead of fading to black.
  float far = uNear + uRange;
  float depthFade = smoothstep(far, far - uRange * 0.45, z);
  float bright = clamp(0.4 + 1.6 / (z + 0.4), 0.0, 1.0);
  vAlpha = depthFade * bright;
  vColor = aColor;
}
`,it=`
precision mediump float;

varying float vAlpha;
varying vec3  vColor;

uniform float uIsPoint; // 1.0 for the points pass (round core), 0.0 for lines

void main() {
  float a = vAlpha;
  if (uIsPoint > 0.5) {
    // Round, soft-edged core.
    vec2 d = gl_PointCoord - 0.5;
    float r = dot(d, d);
    if (r > 0.25) discard;
    a *= smoothstep(0.25, 0.0, r);
  }
  gl_FragColor = vec4(vColor * a, a);
}
`,nt=["uTime","uSpeed","uRange","uNear","uFocal","uAspect","uTrail","uSize","uMouseInfluence","uRotation","uWarp","uMouse","uIsPoint"];class ut{constructor(e,r){this.canvas=e,this.onContextLost=r,this.uniforms=new Map,this.count=0,this.width=1,this.height=1,this.settings=null,this.focal=1,this.rotation=0,this.mouseX=0,this.mouseY=0,this.targetMouseX=0,this.targetMouseY=0,this.lastTime=0,this.disposed=!1,this.warpState={active:!1,start:0,durationMs:0,intensity:0};const o=e.getContext("webgl",{premultipliedAlpha:!0,alpha:!0,antialias:!0})??e.getContext("experimental-webgl");if(!o)throw new Error("RetroFuture FX Starfield: WebGL unavailable");this.gl=o,this.handleContextLost=t=>{var a;t.preventDefault(),(a=this.onContextLost)==null||a.call(this)},e.addEventListener("webglcontextlost",this.handleContextLost,!1),this.program=V(o,st,it);for(const t of nt)this.uniforms.set(t,o.getUniformLocation(this.program,t));this.locStar=o.getAttribLocation(this.program,"aStar"),this.locColor=o.getAttribLocation(this.program,"aColor"),this.locEnd=o.getAttribLocation(this.program,"aEnd"),this.headStar=this.mustBuffer(),this.headColor=this.mustBuffer(),this.lineStar=this.mustBuffer(),this.lineColor=this.mustBuffer(),this.lineEnd=this.mustBuffer()}mustBuffer(){const e=this.gl.createBuffer();if(!e)throw new Error("RetroFuture FX Starfield: unable to create buffer");return e}buildStars(e){const r=this.gl,o=Math.max(1,Math.floor(e.starCount));this.count=o;const t=(e.colors.length?e.colors:["#ffffff"]).map(B),a=2.2,g=new Float32Array(o*3),h=new Float32Array(o*3),p=new Float32Array(o*2*3),b=new Float32Array(o*2*3),R=new Float32Array(o*2);for(let c=0;c<o;c++){const u=(Math.random()*2-1)*a,s=(Math.random()*2-1)*a,w=Math.random()*e.depth,d=t[Math.random()*t.length|0]??[1,1,1];g[c*3]=u,g[c*3+1]=s,g[c*3+2]=w,h[c*3]=d[0],h[c*3+1]=d[1],h[c*3+2]=d[2];for(let S=0;S<2;S++){const m=c*2+S;p[m*3]=u,p[m*3+1]=s,p[m*3+2]=w,b[m*3]=d[0],b[m*3+1]=d[1],b[m*3+2]=d[2],R[m]=S}}x(r,this.headStar,g),x(r,this.headColor,h),x(r,this.lineStar,p),x(r,this.lineColor,b),x(r,this.lineEnd,R)}setSettings(e){const r=!this.settings||this.settings.starCount!==e.starCount||this.settings.depth!==e.depth||this.settings.colors.join()!==e.colors.join();this.settings=e,this.focal=1/Math.tan(e.fov*Math.PI/180/2),r&&this.buildStars(e)}resize(e,r){this.width=Math.max(1,Math.floor(e)),this.height=Math.max(1,Math.floor(r)),this.canvas.width=this.width,this.canvas.height=this.height}setPointer(e,r){this.targetMouseX=e,this.targetMouseY=r}startWarp(e,r,o){this.warpState={active:!0,start:this.lastTime,durationMs:e,intensity:r,onComplete:o}}get isWarping(){return this.warpState.active}warpFactor(e){var a;const r=this.warpState;if(!r.active)return 0;const o=(e-r.start)/(r.durationMs/1e3);if(o>=1)return this.warpState={active:!1,start:0,durationMs:0,intensity:0},(a=r.onComplete)==null||a.call(r),0;const t=o<.3?o/.3:1-(o-.3)/.7;return $(t,0,1)*r.intensity}render(e,r,o){if(this.disposed||!this.settings)return;const t=this.gl;this.lastTime=e;const a=this.settings,g=o?Math.min(1,r*6):1;this.mouseX+=(this.targetMouseX-this.mouseX)*g,this.mouseY+=(this.targetMouseY-this.mouseY)*g,o&&(this.rotation+=a.rotationSpeed*r);const h=o?this.warpFactor(e):0,p=o?e:0;t.viewport(0,0,this.width,this.height);const[b,R,c,u]=ft(a.background);t.clearColor(b,R,c,u),t.clear(t.COLOR_BUFFER_BIT),t.enable(t.BLEND),t.blendFunc(t.SRC_ALPHA,t.ONE),t.useProgram(this.program);const s=this.uniforms;t.uniform1f(s.get("uTime"),p),t.uniform1f(s.get("uSpeed"),a.speed*(1+h*2.5)),t.uniform1f(s.get("uRange"),a.depth),t.uniform1f(s.get("uNear"),.2),t.uniform1f(s.get("uFocal"),this.focal),t.uniform1f(s.get("uAspect"),this.width/this.height),t.uniform1f(s.get("uTrail"),a.trailLength+h*.5),t.uniform1f(s.get("uSize"),a.starSize*(this.height/460)),t.uniform1f(s.get("uMouseInfluence"),a.mouseInfluence),t.uniform1f(s.get("uRotation"),this.rotation),t.uniform1f(s.get("uWarp"),h),t.uniform2f(s.get("uMouse"),this.mouseX,this.mouseY),this.bindAttribs(this.lineStar,this.lineColor,this.lineEnd),t.uniform1f(s.get("uIsPoint"),0),t.drawArrays(t.LINES,0,this.count*2),this.bindAttribs(this.headStar,this.headColor,null),t.disableVertexAttribArray(this.locEnd),t.vertexAttrib1f(this.locEnd,0),t.uniform1f(s.get("uIsPoint"),1),t.drawArrays(t.POINTS,0,this.count)}bindAttribs(e,r,o){const t=this.gl;t.bindBuffer(t.ARRAY_BUFFER,e),t.enableVertexAttribArray(this.locStar),t.vertexAttribPointer(this.locStar,3,t.FLOAT,!1,0,0),t.bindBuffer(t.ARRAY_BUFFER,r),t.enableVertexAttribArray(this.locColor),t.vertexAttribPointer(this.locColor,3,t.FLOAT,!1,0,0),o&&(t.bindBuffer(t.ARRAY_BUFFER,o),t.enableVertexAttribArray(this.locEnd),t.vertexAttribPointer(this.locEnd,1,t.FLOAT,!1,0,0))}dispose(){var r;if(this.disposed)return;this.disposed=!0;const e=this.gl;this.canvas.removeEventListener("webglcontextlost",this.handleContextLost);for(const o of[this.headStar,this.headColor,this.lineStar,this.lineColor,this.lineEnd])e.deleteBuffer(o);e.deleteProgram(this.program),(r=e.getExtension("WEBGL_lose_context"))==null||r.loseContext()}}function x(n,e,r){n.bindBuffer(n.ARRAY_BUFFER,e),n.bufferData(n.ARRAY_BUFFER,r,n.STATIC_DRAW)}function ft(n){if(n.toLowerCase()==="transparent")return[0,0,0,0];const[e,r,o]=B(n);return[e,r,o,1]}function lt(n){const e=n.background==="transparent"?"#04060f":n.background,r=n.colors[0]??"#ffffff",o=["20% 30%","70% 60%","40% 80%","85% 25%","10% 70%","55% 45%","30% 15%","90% 85%","65% 10%","5% 40%","50% 95%","78% 50%"].map(t=>`radial-gradient(1.5px 1.5px at ${t}, ${r}, transparent)`).join(",");return{position:"absolute",inset:0,backgroundColor:e,backgroundImage:o,backgroundRepeat:"no-repeat"}}const ht={low:.4,medium:.7,high:1,ultra:1.25},Rt=l.forwardRef(function(e,r){const{preset:o,quality:t="auto",respectReducedMotion:a=!0,forceFallback:g=!1,onWarpStart:h,onWarpComplete:p,children:b,className:R,style:c,...u}=e,s=J(),w=G(),d=l.useMemo(()=>at(o,u),[o,u.starCount,u.speed,u.depth,u.fov,u.trailLength,u.starSize,u.mouseInfluence,u.rotationSpeed,u.background,(u.colors??[]).join()]),S=H(t,w),m=Math.min(w.pixelRatio,q(S)),F=l.useMemo(()=>({...d,starCount:Math.round(d.starCount*ht[S])}),[d,S]),N=l.useMemo(()=>Q().supported,[]),[Y,L]=l.useState(!1),A=!g&&N&&!Y,[M,j]=l.useState(null),[f,z]=l.useState(null),[D,v]=K(),[W,U]=Z({rootMargin:"80px"}),I=tt({viaRef:!0});l.useEffect(()=>{if(!A||!M)return;let i;try{i=new ut(M,()=>L(!0))}catch{L(!0);return}return z(i),()=>{i.dispose(),z(C=>C===i?null:C)}},[A,M]),l.useEffect(()=>{f==null||f.setSettings(F)},[f,F]),l.useEffect(()=>{!f||v.width===0||v.height===0||f.resize(v.width*m,v.height*m)},[f,v.width,v.height,m]);const y=a&&s||!U;et(i=>{const C=f;if(!C)return;const _=I.positionRef.current;C.setPointer(_.x,_.y),C.render(i.time,i.delta,!0)},{paused:!A||y||!f,fps:S==="low"?30:0}),l.useEffect(()=>{if(!f||!A||!y)return;const i=requestAnimationFrame(()=>f.render(0,0,!1));return()=>cancelAnimationFrame(i)},[f,A,y,F,v.width,v.height]);const[T,k]=l.useState(!1),P=l.useCallback(i=>{a&&s||f&&(h==null||h(),k(!0),f.startWarp((i==null?void 0:i.durationMs)??1400,(i==null?void 0:i.intensity)??1,()=>{k(!1),p==null||p()}))},[f,a,s,h,p]);l.useImperativeHandle(r,()=>({warp:P,isWarping:T}),[P,T]);const X=i=>{D(i),W(i),I.ref(i)},O={position:"relative",overflow:"hidden",display:"block",background:d.background==="transparent"?void 0:d.background,...c};return E.jsxs("div",{ref:X,className:R,style:O,"data-rffx-starfield":"","data-rffx-mode":A?"shader":"fallback",children:[A?E.jsx("canvas",{ref:j,"aria-hidden":"true",style:{position:"absolute",inset:0,width:"100%",height:"100%",display:"block"}}):E.jsx("div",{"aria-hidden":"true",style:lt(d)}),b!=null&&E.jsx("div",{style:{position:"relative",zIndex:1},children:b})]})});export{Rt as S};
