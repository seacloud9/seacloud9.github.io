import{j as e}from"./iframe-ClM0jS1U.js";import{u as o,M as t}from"./blocks-BeZrOQ76.js";import"./preload-helper-C1FmrZbK.js";import"./index-Bd9AUIGf.js";function r(s){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Docs/Architecture"}),`
`,e.jsx(n.h1,{id:"architecture",children:"Architecture"}),`
`,e.jsxs(n.p,{children:["RetroFuture FX is a monorepo. A single shared framework (",e.jsx(n.code,{children:"@retrofuture/core"}),`)
powers every component so individual products stay thin and consistent.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-text",children:`packages/core/     @retrofuture/core — hooks, WebGL & performance framework
components/crt/     @retrofuture/crt — FX-01 (React + shader + Framer + docs)
storybook/         this workbench (docs, showcase, tests)
demo/              standalone Vite playground
examples/          copy-paste React & Next.js usage
`})}),`
`,e.jsx(n.h2,{id:"the-reusable-spine",children:"The reusable spine"}),`
`,e.jsxs(n.p,{children:["Every component consumes these from ",e.jsx(n.code,{children:"@retrofuture/core"}),` rather than
re-implementing them:`]}),`
`,e.jsxs(n.p,{children:[`| Concern | Reuse |
| --- | --- |
| Reduced motion | `,e.jsx(n.code,{children:"useReducedMotion()"}),` |
| Render loop | `,e.jsx(n.code,{children:"useAnimationFrame(cb, { paused, fps })"}),` — ref-stored callback, no per-frame allocation |
| Responsive size | `,e.jsx(n.code,{children:"useElementSize()"}),` (ResizeObserver) |
| Off-screen pausing | `,e.jsx(n.code,{children:"useVisibility()"}),` (IntersectionObserver + Page Visibility) |
| Pointer input | `,e.jsx(n.code,{children:"usePointerPosition({ viaRef })"}),` |
| Device / quality | `,e.jsx(n.code,{children:"useDeviceCapabilities()"}),", ",e.jsx(n.code,{children:"resolveQuality()"}),", ",e.jsx(n.code,{children:"pixelRatioCap()"}),` |
| WebGL bootstrap | `,e.jsx(n.code,{children:"detectWebGLSupport()"}),", ",e.jsx(n.code,{children:"createProgram()"}),", ",e.jsx(n.code,{children:"createFullscreenTriangle()"}),` |
| SSR safety | `,e.jsx(n.code,{children:"isBrowser"}),", ",e.jsx(n.code,{children:"useIsomorphicLayoutEffect"}),` |
| Math | `,e.jsx(n.code,{children:"clamp"}),", ",e.jsx(n.code,{children:"lerp"}),", ",e.jsx(n.code,{children:"damp"}),", ",e.jsx(n.code,{children:"hexToRgb"})," |"]}),`
`,e.jsxs(n.p,{children:["See ",e.jsx(n.strong,{children:"Core → Hooks"})," for signatures and examples."]}),`
`,e.jsx(n.h2,{id:"product-template-set-by-crt",children:"Product template (set by CRT)"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Preset → override → intensity"})," resolution via a ",e.jsx(n.code,{children:"resolveSettings()"}),`
function returning a complete, typed settings object.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Typed, documented public API"})," in ",e.jsx(n.code,{children:"types.ts"}),` — every prop has a range and a
description (these JSDoc comments generate the prop tables in this workbench).`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"A renderer class owns all GL resources"}),`, created/disposed in one effect;
`,e.jsx(n.code,{children:"render()"})," does zero allocation; ",e.jsx(n.code,{children:"dispose()"})," frees everything."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Graceful degradation is first-class"}),` — a CSS look and a live-DOM overlay,
surfaced via a `,e.jsx(n.code,{children:"data-rffx-mode"})," attribute (also used by interaction tests)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Accessibility by construction"}),` — real content stays in the DOM; decorative
layers are `,e.jsx(n.code,{children:"aria-hidden"})," + ",e.jsx(n.code,{children:"pointer-events: none"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Thin Framer wrapper"})," mapping a small control set to the same props."]}),`
`]}),`
`,e.jsx(n.h2,{id:"adding-the-next-component",children:"Adding the next component"}),`
`,e.jsxs(n.p,{children:["Create ",e.jsx(n.code,{children:"components/<fx>/"}),` following the CRT layout, add a
`,e.jsx(n.code,{children:"storybook/stories/<fx>/"})," folder with a ",e.jsx(n.code,{children:"*.stories.tsx"})," + ",e.jsx(n.code,{children:"*.mdx"}),`, and reuse the
core spine above. No changes to existing packages are required — the workbench
picks up new stories automatically.`]})]})}function l(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(r,{...s})}):r(s)}export{l as default};
