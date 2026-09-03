import{j as e}from"./iframe-ClM0jS1U.js";import{u as o,M as t,P as a,a as d,C as n}from"./blocks-BeZrOQ76.js";import{D as c,P as l,S as h,a as x,W as p,I as j,A as m,R as f}from"./PixelDissolve.stories-BylAcL0o.js";import"./preload-helper-C1FmrZbK.js";import"./index-Bd9AUIGf.js";import"./PixelDissolve-C6eyZXFY.js";import"./useReducedMotion-BC0jmgEw.js";import"./math-DUtpe-EO.js";import"./useElementSize-BDiBlEFR.js";import"./useAnimationFrame-D0dvpe6q.js";function r(i){const s={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...o(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:c,name:"Docs"}),`
`,e.jsx(s.h1,{id:"retrofuture-fx--pixel-dissolve",children:"RetroFuture FX — Pixel Dissolve"}),`
`,e.jsxs(s.p,{children:[`Dissolve any element into pixels, blocks or noise. Unlike effects that need an
image, this works on `,e.jsx(s.strong,{children:"arbitrary DOM"}),` — cards, text, buttons — and keeps it live
and accessible while an animated CSS mask reveals or hides it.`]}),`
`,e.jsx(a,{}),`
`,e.jsx(s.h2,{id:"playground",children:"Playground"}),`
`,e.jsxs(s.p,{children:["Toggle ",e.jsx(s.strong,{children:"trigger"})," or press the button to play the transition."]}),`
`,e.jsx(d,{}),`
`,e.jsx(s.h2,{id:"modes--presets",children:"Modes / presets"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"pixelate"})," (random pixels) · ",e.jsx(s.code,{children:"shatter"})," (big blocks) · ",e.jsx(s.code,{children:"static"}),` (noise) ·
`,e.jsx(s.code,{children:"wipe"})," (directional) · ",e.jsx(s.code,{children:"iris"})," (radial)."]}),`
`,e.jsx(n,{of:l}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(s.h2,{id:"trigger-api",children:"Trigger API"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"trigger"})," drives everything — ",e.jsx(s.code,{children:"true"})," reveals, ",e.jsx(s.code,{children:"false"}),` hides. Wire it to state,
hover, or a visibility hook for reveal-on-scroll:`]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`const [ref, visible] = useVisibility();
<div ref={ref}>
  <PixelDissolve trigger={visible} preset="pixelate">
    <ProductCard />
  </PixelDissolve>
</div>
`})}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"onReveal"})," / ",e.jsx(s.code,{children:"onHide"})," fire when a transition finishes — handy for chaining."]}),`
`,e.jsx(s.h2,{id:"accessible-content",children:"Accessible content"}),`
`,e.jsxs(s.p,{children:["The content stays in the DOM; when fully hidden the wrapper is ",e.jsx(s.code,{children:"visibility: hidden"})," + ",e.jsx(s.code,{children:"aria-hidden"}),`, so it leaves the tab order and screen-reader flow, and
revealing restores it.`]}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(s.h2,{id:"reduced-motion",children:"Reduced motion"}),`
`,e.jsxs(s.p,{children:["With ",e.jsx(s.code,{children:"prefers-reduced-motion: reduce"}),`, the pixel animation is replaced by a short
cross-fade. Toggle the `,e.jsx(s.strong,{children:"Motion"})," toolbar to preview."]}),`
`,e.jsx(n,{of:f}),`
`,e.jsx(s.h2,{id:"performance",children:"Performance"}),`
`,e.jsxs(s.p,{children:[`The dissolve is a transient one-shot: a small offscreen canvas paints the mask
per frame `,e.jsx(s.strong,{children:"only while animating"}),`, then the loop stops and the mask is cleared —
no cost at rest, no per-frame React state.`]})]})}function C(i={}){const{wrapper:s}={...o(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(r,{...i})}):r(i)}export{C as default};
