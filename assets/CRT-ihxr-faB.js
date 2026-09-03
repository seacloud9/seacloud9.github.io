import{j as e}from"./iframe-ClM0jS1U.js";import{u as o,M as t,P as l,a as c,C as s}from"./blocks-BeZrOQ76.js";import{C as d,A as r,a as h,I as p,b as x,B as j,G as m,c as u,D as g,R as f,W as v}from"./CRT.stories-CCXuMVu1.js";import"./preload-helper-C1FmrZbK.js";import"./index-Bd9AUIGf.js";import"./AnimatedCanvasSource-DLMJ84R0.js";import"./CRT-CoXNDUm6.js";import"./useDeviceCapabilities-TlijpFiE.js";import"./useReducedMotion-BC0jmgEw.js";import"./math-DUtpe-EO.js";import"./useElementSize-BDiBlEFR.js";import"./useVisibility-CrX1ncah.js";import"./useAnimationFrame-D0dvpe6q.js";function a(i){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:d,name:"Docs"}),`
`,e.jsx(n.h1,{id:"retrofuture-fx--crt",children:"RetroFuture FX — CRT"}),`
`,e.jsxs(n.p,{children:["Wrap any image, video, or canvas in an ",e.jsx(n.strong,{children:"authentic cathode-ray-tube display"}),`.
It reproduces real display behaviour — barrel curvature, phosphor scanlines, an
aperture-grille shadow mask, RGB beam misconvergence, sync wobble, rolling bars,
bloom and grain — with an original single-pass GLSL shader, not a scanline PNG
overlay.`]}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"live-playground",children:"Live playground"}),`
`,e.jsxs(n.p,{children:[`Every control below is live. Drag the sliders, switch presets, and flip the
`,e.jsx(n.strong,{children:"Motion"})," and ",e.jsx(n.strong,{children:"Viewport"}),` toolbars to see reduced-motion and responsive
behaviour.`]}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h2,{id:"use-cases",children:"Use cases"}),`
`,e.jsx(n.h3,{id:"image",children:"Image"}),`
`,e.jsxs(n.p,{children:["The default path: a single ",e.jsx(n.code,{children:"<img>"})," is sampled into the shader."]}),`
`,e.jsx(s,{of:r}),`
`,e.jsx(n.h3,{id:"live-canvas--video",children:"Live canvas / video"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"<CRT>"})," also accepts a ",e.jsx(n.code,{children:"<video>"})," or ",e.jsx(n.code,{children:"<canvas>"}),` element and re-samples it every
frame. This story drives an animated `,e.jsx(n.code,{children:"<canvas>"})," — the same path a ",e.jsx(n.code,{children:"<video>"}),`
uses, with no binary asset.`]}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(n.h3,{id:"interactive-dom-accessible-overlay",children:"Interactive DOM (accessible overlay)"}),`
`,e.jsx(n.p,{children:`When the content isn't a single image/video/canvas, CRT keeps the real DOM live
and layers the effect on top, so links, buttons and focus keep working and the
content stays in the accessibility tree.`}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h2,{id:"preset-gallery",children:"Preset gallery"}),`
`,e.jsx(n.p,{children:"Six complete looks. Any prop you pass overrides the corresponding preset field."}),`
`,e.jsx(s,{of:r}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(s,{of:j}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(s,{of:u}),`
`,e.jsx(s,{of:g}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<CRT preset="arcade" noise={0.2}>
  <img src="/product.jpg" alt="Our product" />
</CRT>
`})}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`The original media stays in the DOM; in shader mode it is hidden with
`,e.jsx(n.code,{children:"opacity: 0"}),", which keeps it in the accessibility tree (unlike ",e.jsx(n.code,{children:"display:none"}),")."]}),`
`,e.jsxs(n.li,{children:["All decorative layers are ",e.jsx(n.code,{children:"aria-hidden"})," and ",e.jsx(n.code,{children:"pointer-events: none"}),"."]}),`
`,e.jsx(n.li,{children:"Arbitrary interactive DOM uses the live-overlay path (see above)."}),`
`,e.jsx(n.li,{children:"Reduced motion disables flashing (noise/flicker/roll/sync) by default."}),`
`]}),`
`,e.jsx(s,{of:f}),`
`,e.jsx(n.h2,{id:"performance",children:"Performance"}),`
`,e.jsxs(n.p,{children:[`One WebGL program, one fullscreen triangle, one reused texture — no per-frame
allocations. The loop pauses when the element is off-screen or the tab is hidden,
`,e.jsx(n.code,{children:'quality="auto"'}),` picks a DPR cap by device tier, and all GL resources are
disposed on unmount. Targets: 60 FPS desktop, 30–60 FPS mobile.`]}),`
`,e.jsx(n.h2,{id:"fallback",children:"Fallback"}),`
`,e.jsx(n.p,{children:`If WebGL is unavailable the component degrades to a pure-CSS approximation —
never a blank canvas or a thrown error.`}),`
`,e.jsx(s,{of:v}),`
`,e.jsx(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Black screen"}),` — the media must be same-origin or CORS-enabled; cross-origin
media without CORS taints the texture and is skipped.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"No effect in Next.js"})," — the rendering file needs ",e.jsx(n.code,{children:'"use client"'}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Blurry on retina"})," — raise ",e.jsx(n.code,{children:"quality"})," (defaults cap DPR for performance)."]}),`
`]})]})}function P(i={}){const{wrapper:n}={...o(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(a,{...i})}):a(i)}export{P as default};
