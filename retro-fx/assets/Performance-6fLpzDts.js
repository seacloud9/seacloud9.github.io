import{j as e}from"./iframe-ClM0jS1U.js";import{u as o,M as i}from"./blocks-BeZrOQ76.js";import"./preload-helper-C1FmrZbK.js";import"./index-Bd9AUIGf.js";function s(r){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Docs/Performance"}),`
`,e.jsx(n.h1,{id:"performance",children:"Performance"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Targets:"})," 60 FPS on typical desktops, 30–60 FPS on average mobile devices."]}),`
`,e.jsx(n.h2,{id:"how-components-stay-fast",children:"How components stay fast"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"No per-frame allocation."}),` The render loop
(`,e.jsx(n.code,{children:"useAnimationFrame"}),`) stores its callback in a ref, so changing props never
restarts it and the hot path creates no objects.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"One of everything."}),` CRT compiles a single program, uploads one reused
texture, and draws one fullscreen triangle. Shaders and geometry are never
recreated.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Pauses when idle."})," ",e.jsx(n.code,{children:"useVisibility"}),` stops the loop when the element scrolls
off-screen or the tab is hidden.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Quality tiers."})," ",e.jsx(n.code,{children:'quality="auto"'}),` (the default) profiles the device and caps
the device-pixel-ratio; the `,e.jsx(n.code,{children:"low"}),` tier also caps to 30 FPS. Override with
`,e.jsx(n.code,{children:'quality="high"'})," etc."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Clean teardown."}),` All WebGL resources are disposed on unmount, and the
context is released — no texture or material leaks across route changes.`]}),`
`]}),`
`,e.jsx(n.h2,{id:"quality-tiers",children:"Quality tiers"}),`
`,e.jsxs(n.p,{children:[`| Tier | DPR cap | Picked for |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"low"}),` | 1.0 | no WebGL / low-core mobile |
| `,e.jsx(n.code,{children:"medium"}),` | 1.5 | mid mobile / WebGL1 desktop |
| `,e.jsx(n.code,{children:"high"}),` | 2.0 | WebGL2, 4+ cores |
| `,e.jsx(n.code,{children:"ultra"})," | 2.5 | WebGL2, 8+ cores |"]}),`
`,e.jsx(n.h2,{id:"measuring-in-this-workbench",children:"Measuring in this workbench"}),`
`,e.jsxs(n.p,{children:["Flip the ",e.jsx(n.strong,{children:"Viewport"}),` toolbar to emulate mobile sizes, and use the browser's
performance panel on any story. The `,e.jsx(n.code,{children:"low"}),` tier is the safe floor for the widest
device range.`]}),`
`,e.jsx(n.h2,{id:"what-to-avoid-in-your-own-code",children:"What to avoid in your own code"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Don't drive continuous React state from an animation frame."}),`
`,e.jsx(n.li,{children:"Don't recreate the wrapped media element every render."}),`
`,e.jsxs(n.li,{children:["Prefer ",e.jsx(n.code,{children:"intensity"})," / ",e.jsx(n.code,{children:"quality"})," over mounting multiple stacked effects."]}),`
`]})]})}function a(r={}){const{wrapper:n}={...o(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{a as default};
