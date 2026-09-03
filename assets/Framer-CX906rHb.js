import{j as e}from"./iframe-ClM0jS1U.js";import{u as t,M as o,a as i,C as c}from"./blocks-BeZrOQ76.js";import{F as d,A as l}from"./Framer.stories-BlQjj6hL.js";import"./preload-helper-C1FmrZbK.js";import"./index-Bd9AUIGf.js";import"./index-D8wtoCkM.js";import"./CRT-CoXNDUm6.js";import"./useDeviceCapabilities-TlijpFiE.js";import"./useReducedMotion-BC0jmgEw.js";import"./math-DUtpe-EO.js";import"./useElementSize-BDiBlEFR.js";import"./useVisibility-CrX1ncah.js";import"./useAnimationFrame-D0dvpe6q.js";function s(r){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:d,name:"Docs"}),`
`,e.jsx(n.h1,{id:"retrofuture-fx--crt-in-framer",children:"RetroFuture FX — CRT in Framer"}),`
`,e.jsxs(n.p,{children:["Every RetroFuture FX product ships a dedicated ",e.jsx(n.strong,{children:"Framer Code Component"}),` so
designers can use the effect without writing code. This page renders that exact
component live (via a small `,e.jsx(n.code,{children:"framer"})," module shim) and documents how to use it."]}),`
`,e.jsx(n.h2,{id:"add-it-to-framer",children:"Add it to Framer"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["In Framer, open the ",e.jsx(n.strong,{children:"Assets"})," panel → ",e.jsx(n.strong,{children:"Code"})," → ",e.jsx(n.strong,{children:"New Code File"}),"."]}),`
`,e.jsxs(n.li,{children:["Paste the contents of ",e.jsx(n.code,{children:"components/crt/framer/RetroFutureCRT.tsx"}),"."]}),`
`,e.jsxs(n.li,{children:["Drag ",e.jsx(n.strong,{children:"RetroFutureCRT"})," onto the canvas."]}),`
`,e.jsxs(n.li,{children:["In the properties panel, set ",e.jsx(n.strong,{children:"Image"}),", pick a ",e.jsx(n.strong,{children:"Preset"}),`, and tune the
sliders.`]}),`
`]}),`
`,e.jsxs(n.p,{children:[`The wrapper is intentionally thin — it maps a designer-friendly subset of
controls onto the same React component documented under `,e.jsx(n.strong,{children:"Components → CRT"}),"."]}),`
`,e.jsx(n.h2,{id:"live-controls",children:"Live controls"}),`
`,e.jsx(i,{}),`
`,e.jsx(c,{of:l}),`
`,e.jsx(n.h2,{id:"control-mapping",children:"Control mapping"}),`
`,e.jsxs(n.p,{children:[`| Framer control | React prop | Range |
| --- | --- | --- |
| Image | `,e.jsx(n.code,{children:"children"})," (",e.jsx(n.code,{children:"<img src>"}),`) | — |
| Preset | `,e.jsx(n.code,{children:"preset"}),` | 6 presets |
| Intensity | `,e.jsx(n.code,{children:"intensity"}),` | 0 – 1 |
| Scanlines | `,e.jsx(n.code,{children:"scanlines"}),` | 0 – 1 |
| Curvature | `,e.jsx(n.code,{children:"curvature"}),` | 0 – 0.5 |
| Noise | `,e.jsx(n.code,{children:"noise"}),` | 0 – 1 |
| RGB Split | `,e.jsx(n.code,{children:"chromaticAberration"}),` | 0 – 8 |
| Vignette | `,e.jsx(n.code,{children:"vignette"}),` | 0 – 1 |
| Glow | `,e.jsx(n.code,{children:"bloom"}),` | 0 – 1 |
| Flicker | `,e.jsx(n.code,{children:"flicker"}),` | 0 – 1 |
| Reduced Motion | `,e.jsx(n.code,{children:"respectReducedMotion"})," | on / off |"]}),`
`,e.jsx(n.h2,{id:"design-guidance",children:"Design guidance"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"Presets do the heavy lifting — start from one, then nudge two or three sliders."}),`
`,e.jsxs(n.li,{children:["Keep ",e.jsx(n.strong,{children:"Flicker"})," and ",e.jsx(n.strong,{children:"Noise"})," low for text-heavy content (readability + a11y)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Reduced Motion"})," should stay ",e.jsx(n.strong,{children:"on"}),` for published sites; it automatically
calms flashing for visitors who request it.`]}),`
`]})]})}function y(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{y as default};
