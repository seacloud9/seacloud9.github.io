import{j as e}from"./iframe-ClM0jS1U.js";import{u as t,M as r,C as o}from"./blocks-BeZrOQ76.js";import{I as l}from"./CRT.stories-CCXuMVu1.js";import"./preload-helper-C1FmrZbK.js";import"./index-Bd9AUIGf.js";import"./AnimatedCanvasSource-DLMJ84R0.js";import"./CRT-CoXNDUm6.js";import"./useDeviceCapabilities-TlijpFiE.js";import"./useReducedMotion-BC0jmgEw.js";import"./math-DUtpe-EO.js";import"./useElementSize-BDiBlEFR.js";import"./useVisibility-CrX1ncah.js";import"./useAnimationFrame-D0dvpe6q.js";function s(i){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Docs/Accessibility"}),`
`,e.jsx(n.h1,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["Visual effects must ",e.jsx(n.strong,{children:"enhance"}),` content, never remove it from the accessibility
tree. RetroFuture FX is built around that rule (and every story in this workbench
is audited with axe via the test-runner).`]}),`
`,e.jsx(n.h2,{id:"content-stays-accessible",children:"Content stays accessible"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`When CRT wraps a single image/video, the real element stays in the DOM and is
hidden `,e.jsx(n.strong,{children:"visually"})," with ",e.jsx(n.code,{children:"opacity: 0"})," — which, unlike ",e.jsx(n.code,{children:"display: none"}),` or
`,e.jsx(n.code,{children:"visibility: hidden"}),", keeps it in the accessibility tree and preserves ",e.jsx(n.code,{children:"alt"}),`
text.`]}),`
`,e.jsxs(n.li,{children:[`All decorative layers (the shader canvas, CSS overlays, tint) are
`,e.jsx(n.code,{children:'aria-hidden="true"'})," and ",e.jsx(n.code,{children:"pointer-events: none"}),`, so screen readers skip them
and they never intercept clicks.`]}),`
`]}),`
`,e.jsx(n.h2,{id:"interactive-dom-keeps-working",children:"Interactive DOM keeps working"}),`
`,e.jsxs(n.p,{children:["When the content isn't a single media element, CRT uses a ",e.jsx(n.strong,{children:"live-DOM overlay"}),`:
the real markup renders normally and the effect layers on top. Links, buttons,
and keyboard focus all keep working.`]}),`
`,e.jsx(o,{of:l}),`
`,e.jsx(n.h2,{id:"flashing-safety",children:"Flashing safety"}),`
`,e.jsx(n.p,{children:"Rapid flashing is a seizure risk. RetroFuture FX:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`Disables flicker / noise / roll / sync-jitter automatically under
`,e.jsx(n.code,{children:"prefers-reduced-motion: reduce"})," (see ",e.jsx(n.strong,{children:"Docs → Reduced Motion"}),")."]}),`
`,e.jsx(n.li,{children:"Keeps preset flicker values low and non-strobing by default."}),`
`,e.jsxs(n.li,{children:["Lets you clamp everything with a single ",e.jsx(n.code,{children:"intensity"})," prop."]}),`
`]}),`
`,e.jsx(n.h2,{id:"checklist-for-your-usage",children:"Checklist for your usage"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["Always provide meaningful ",e.jsx(n.code,{children:"alt"})," text on wrapped images."]}),`
`,e.jsx(n.li,{children:"Keep foreground text contrast high when compositing over an effect."}),`
`,e.jsxs(n.li,{children:["Leave ",e.jsx(n.code,{children:"respectReducedMotion"})," on (the default) for published sites."]}),`
`]})]})}function k(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{k as default};
