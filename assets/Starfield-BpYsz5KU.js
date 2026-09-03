import{j as e}from"./iframe-ClM0jS1U.js";import{u as a,M as t,P as i,a as d,C as n}from"./blocks-BeZrOQ76.js";import{S as c,D as l,H as p,N as h,W as f,a as x,R as j,b as u}from"./Starfield.stories-CPNClRwe.js";import"./preload-helper-C1FmrZbK.js";import"./index-Bd9AUIGf.js";import"./Starfield-D6d9n_at.js";import"./useDeviceCapabilities-TlijpFiE.js";import"./useReducedMotion-BC0jmgEw.js";import"./math-DUtpe-EO.js";import"./useElementSize-BDiBlEFR.js";import"./useVisibility-CrX1ncah.js";import"./usePointerPosition-CLvrN410.js";import"./useAnimationFrame-D0dvpe6q.js";function o(s){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...a(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c,name:"Docs"}),`
`,e.jsx(r.h1,{id:"retrofuture-fx--hyperspace-starfield",children:"RetroFuture FX — Hyperspace Starfield"}),`
`,e.jsxs(r.p,{children:[`A GPU starfield for landing-page heroes, game sites and sci-fi projects. Stars
fly toward the camera through an endless volume; push the speed and trails up for
full hyperspace, or trigger a `,e.jsx(r.code,{children:"warp()"}),` imperatively to sync with a navigation
transition.`]}),`
`,e.jsx(i,{}),`
`,e.jsx(r.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(d,{}),`
`,e.jsx(r.h2,{id:"modes--presets",children:"Modes / presets"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"deepspace"})," (calm) · ",e.jsx(r.code,{children:"flight"})," (steady forward) · ",e.jsx(r.code,{children:"hyperspace"}),` (fast, streaks) ·
`,e.jsx(r.code,{children:"warp"})," (near light-speed) · ",e.jsx(r.code,{children:"nebula"})," (slow, colorful)."]}),`
`,e.jsx(n,{of:l}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(r.h2,{id:"imperative-warp",children:"Imperative warp"}),`
`,e.jsxs(r.p,{children:["Expose a ",e.jsx(r.code,{children:"ref"})," and call ",e.jsx(r.code,{children:"warp()"}),` — it boosts speed and streak length with an
ease in/out and fires `,e.jsx(r.code,{children:"onWarpStart"})," / ",e.jsx(r.code,{children:"onWarpComplete"}),`, ideal for triggering a
route change when the warp completes.`]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`const field = useRef<StarfieldHandle>(null);

<Starfield ref={field} preset="flight" onWarpComplete={() => router.push("/app")} />
<button onClick={() => field.current?.warp()}>Engage</button>
`})}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(r.h2,{id:"hero-with-overlaid-content",children:"Hero with overlaid content"}),`
`,e.jsxs(r.p,{children:["Pass ",e.jsx(r.code,{children:"children"})," to render accessible content above the field."]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(r.h2,{id:"accessibility--reduced-motion",children:"Accessibility & reduced motion"}),`
`,e.jsxs(r.p,{children:["The canvas is ",e.jsx(r.code,{children:"aria-hidden"}),"; overlaid ",e.jsx(r.code,{children:"children"}),` stay fully in the DOM and
accessible. With `,e.jsx(r.code,{children:"prefers-reduced-motion: reduce"}),`, flight freezes to a static
starfield and `,e.jsx(r.code,{children:"warp()"})," becomes a no-op (no flashing). Toggle the ",e.jsx(r.strong,{children:"Motion"}),`
toolbar to preview.`]}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(r.h2,{id:"performance",children:"Performance"}),`
`,e.jsxs(r.p,{children:[`One program, star geometry uploaded once, two draw calls per frame, no per-frame
allocations. `,e.jsx(r.code,{children:'quality="auto"'}),` scales star count and caps DPR by device tier; the
loop pauses off-screen. All GL resources are disposed on unmount.`]}),`
`,e.jsx(r.h2,{id:"fallback",children:"Fallback"}),`
`,e.jsx(r.p,{children:"Without WebGL it renders a static CSS starfield — never blank."}),`
`,e.jsx(n,{of:u})]})}function H(s={}){const{wrapper:r}={...a(),...s.components};return r?e.jsx(r,{...s,children:e.jsx(o,{...s})}):o(s)}export{H as default};
