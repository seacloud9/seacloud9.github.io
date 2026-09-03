import{j as e}from"./iframe-ClM0jS1U.js";import{u as o,M as t,C as i}from"./blocks-BeZrOQ76.js";import{W as a}from"./CRT.stories-CCXuMVu1.js";import"./preload-helper-C1FmrZbK.js";import"./index-Bd9AUIGf.js";import"./AnimatedCanvasSource-DLMJ84R0.js";import"./CRT-CoXNDUm6.js";import"./useDeviceCapabilities-TlijpFiE.js";import"./useReducedMotion-BC0jmgEw.js";import"./math-DUtpe-EO.js";import"./useElementSize-BDiBlEFR.js";import"./useVisibility-CrX1ncah.js";import"./useAnimationFrame-D0dvpe6q.js";function r(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Docs/Browser Support"}),`
`,e.jsx(n.h1,{id:"browser-support",children:"Browser Support"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Baseline:"}),` the latest two major generations of Chrome, Edge, Firefox, and
Safari — plus iOS Safari and Android Chrome.`]}),`
`,e.jsx(n.h2,{id:"webgl--fallback",children:"WebGL + fallback"}),`
`,e.jsx(n.p,{children:`The shader path uses WebGL (WebGL2 where available, WebGL1 otherwise). When WebGL
is unavailable — old browsers, disabled GPUs, some headless environments — CRT
degrades to a pure-CSS approximation. It never shows a blank canvas, a thrown
exception, or a broken layout.`}),`
`,e.jsx(i,{of:a}),`
`,e.jsx(n.h2,{id:"feature-detection-not-ua-sniffing",children:"Feature detection, not UA sniffing"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsx(n.li,{children:"WebGL support is detected by actually creating a context (and releasing it)."}),`
`,e.jsx(n.li,{children:"Device tier uses core count + WebGL version + a mobile check, cached once."}),`
`,e.jsxs(n.li,{children:[e.jsx(n.code,{children:"ResizeObserver"})," / ",e.jsx(n.code,{children:"IntersectionObserver"}),` are feature-detected; when absent the
component assumes visible and static so content still renders.`]}),`
`]}),`
`,e.jsx(n.h2,{id:"ssr--nextjs",children:"SSR / Next.js"}),`
`,e.jsxs(n.p,{children:[`All browser-only globals are guarded, so components import safely on the server
and render fallback markup during SSR, upgrading after hydration. See
`,e.jsx(n.strong,{children:"Docs → Getting Started"}),"."]}),`
`,e.jsx(n.h2,{id:"known-constraints",children:"Known constraints"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[`Cross-origin images/video need CORS headers, or the frame is skipped (canvas
taint) — use same-origin assets or set `,e.jsx(n.code,{children:'crossOrigin="anonymous"'}),"."]}),`
`,e.jsx(n.li,{children:"SVG sources are supported once loaded; very large SVGs cost more to upload."}),`
`]})]})}function v(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{v as default};
