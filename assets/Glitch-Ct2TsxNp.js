import{j as e}from"./iframe-ClM0jS1U.js";import{u as o,M as t,P as l,a as c,C as r}from"./blocks-BeZrOQ76.js";import{G as a,R as d,S as h,V as x,a as j,b as m}from"./Glitch.stories-BNfKDWlX.js";import"./preload-helper-C1FmrZbK.js";import"./index-Bd9AUIGf.js";import"./Glitch-G6pVHfvy.js";import"./useReducedMotion-BC0jmgEw.js";import"./useAnimationFrame-D0dvpe6q.js";import"./math-DUtpe-EO.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:a,name:"Docs"}),`
`,e.jsx(n.h1,{id:"retrofuture-fx--glitch",children:"RetroFuture FX — Glitch"}),`
`,e.jsx(n.p,{children:`An RGB-split + torn-slice glitch for images — the datamosh/CRT-tear look — on
hover, continuously, or as a one-shot reveal (glitches hard, then resolves to
clean). Two channel-isolated copies are screened back together, so it's the clean
image at rest and chromatically tears when glitching.`}),`
`,e.jsx(l,{}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h2,{id:"presets",children:"Presets"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"rgb"})," · ",e.jsx(n.code,{children:"slice"})," · ",e.jsx(n.code,{children:"digital"})," · ",e.jsx(n.code,{children:"vhs"})," · ",e.jsx(n.code,{children:"subtle"}),"."]}),`
`,e.jsx(r,{of:d}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(n.h2,{id:"modes",children:"Modes"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"hover"})," — clean until the pointer is over it."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"always"})," — continuous glitch."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"reveal"}),` — glitches hard, then resolves to clean (great with a visibility
hook for reveal-on-scroll).`]}),`
`]}),`
`,e.jsx(r,{of:j}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const [ref, visible] = useVisibility();
<div ref={ref}>
  <Glitch src="/hero.jpg" alt="Hero" mode="reveal" trigger={visible} preset="digital" />
</div>
`})}),`
`,e.jsx(n.h2,{id:"accessibility--reduced-motion",children:"Accessibility & reduced motion"}),`
`,e.jsxs(n.p,{children:["The glitch layers are ",e.jsx(n.code,{children:"aria-hidden"}),"; the underlying ",e.jsx(n.code,{children:"<img>"})," keeps its ",e.jsx(n.code,{children:"alt"}),`. With
`,e.jsx(n.code,{children:"prefers-reduced-motion: reduce"}),", the clean image is shown with no animation."]}),`
`,e.jsx(r,{of:m}),`
`,e.jsx(n.h2,{id:"performance",children:"Performance"}),`
`,e.jsxs(n.p,{children:["One ",e.jsx(n.code,{children:"requestAnimationFrame"})," loop runs ",e.jsx(n.strong,{children:"only while active"}),` (hover / reveal /
always), throttled to `,e.jsx(n.code,{children:"speed"}),`, writing transforms directly — no per-frame React
state, and idle at rest.`]})]})}function M(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{M as default};
