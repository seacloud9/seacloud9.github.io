import{j as e}from"./iframe-ClM0jS1U.js";import{u as o,M as i,C as r}from"./blocks-BeZrOQ76.js";import{R as d}from"./CRT.stories-CCXuMVu1.js";import"./preload-helper-C1FmrZbK.js";import"./index-Bd9AUIGf.js";import"./AnimatedCanvasSource-DLMJ84R0.js";import"./CRT-CoXNDUm6.js";import"./useDeviceCapabilities-TlijpFiE.js";import"./useReducedMotion-BC0jmgEw.js";import"./math-DUtpe-EO.js";import"./useElementSize-BDiBlEFR.js";import"./useVisibility-CrX1ncah.js";import"./useAnimationFrame-D0dvpe6q.js";function s(t){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Docs/Reduced Motion"}),`
`,e.jsx(n.h1,{id:"reduced-motion",children:"Reduced Motion"}),`
`,e.jsxs(n.p,{children:["Reduced-motion support is ",e.jsx(n.strong,{children:"mandatory"})," across RetroFuture FX and on by default."]}),`
`,e.jsx(n.h2,{id:"what-happens",children:"What happens"}),`
`,e.jsxs(n.p,{children:["When the visitor requests ",e.jsx(n.code,{children:"prefers-reduced-motion: reduce"}),` (and
`,e.jsx(n.code,{children:"respectReducedMotion"})," is ",e.jsx(n.code,{children:"true"}),", the default), CRT:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Freezes animated distortion to a ",e.jsx(n.strong,{children:"single static frame"})," (the loop stops)."]}),`
`,e.jsxs(n.li,{children:["Sets ",e.jsx(n.strong,{children:"noise, flicker, roll, and sync-jitter to 0"})," — no flashing."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Clamps chromatic aberration"})," so the still frame stays legible."]}),`
`]}),`
`,e.jsx(n.p,{children:`The static grade (curvature, scanlines, tint, vignette, bloom) is preserved, so
the CRT look still reads — it just stops moving.`}),`
`,e.jsx(n.h2,{id:"try-it",children:"Try it"}),`
`,e.jsxs(n.p,{children:["Toggle the ",e.jsx(n.strong,{children:"Motion"})," control in the toolbar (top of the window) between ",e.jsx(n.em,{children:"Normal"}),`
and `,e.jsx(n.em,{children:"Reduced"}),". This story additionally forces reduced motion:"]}),`
`,e.jsx(r,{of:d}),`
`,e.jsx(n.h2,{id:"opting-out",children:"Opting out"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<CRT preset="damaged" respectReducedMotion={false} />
`})}),`
`,e.jsx(n.p,{children:`Only disable it when you have a specific reason — published marketing sites
should leave it on.`}),`
`,e.jsx(n.h2,{id:"how-its-implemented",children:"How it's implemented"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.code,{children:"useReducedMotion()"})," hook (in ",e.jsx(n.code,{children:"@retrofuture/core"}),`) tracks the media query
reactively and updates if the OS setting changes mid-session. Components read it
and adjust their settings; the workbench emulates the query so you can preview
both states without changing your OS.`]})]})}function M(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{M as default};
