import{j as e}from"./iframe-ClM0jS1U.js";import{u as o,M as i,P as c,a,C as r}from"./blocks-BeZrOQ76.js";import{L as d,C as l,B as h,T as p,I as x}from"./CursorLens.stories-Dz5hyFwe.js";import"./preload-helper-C1FmrZbK.js";import"./index-Bd9AUIGf.js";import"./CursorLens-CvHkkaCe.js";import"./useReducedMotion-BC0jmgEw.js";import"./useAnimationFrame-D0dvpe6q.js";import"./math-DUtpe-EO.js";function t(s){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...o(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:d,name:"Docs"}),`
`,e.jsx(n.h1,{id:"retrofuture-fx--cursor-lens",children:"RetroFuture FX — Cursor Lens"}),`
`,e.jsx(n.p,{children:`A CRT/fisheye lens that follows the pointer, distorting and re-grading the content
beneath it — scanlines, magnification, hue shifts, invert. It's decorative and
non-interactive, so the content underneath stays fully selectable and clickable.`}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n.p,{children:`Move your pointer over the surface. (Fisheye distortion renders best in Chromium;
elsewhere you still get the grade + scanlines.)`}),`
`,e.jsx(a,{}),`
`,e.jsx(n.h2,{id:"presets",children:"Presets"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"crt"})," · ",e.jsx(n.code,{children:"bulge"})," · ",e.jsx(n.code,{children:"invert"})," · ",e.jsx(n.code,{children:"thermal"})," · ",e.jsx(n.code,{children:"blur"}),"."]}),`
`,e.jsx(r,{of:l}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(n.h2,{id:"whole-page-lens",children:"Whole-page lens"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<CursorLens global preset="bulge" size={240} distortion={30}>
  {app}
</CursorLens>
`})}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["The lens is ",e.jsx(n.code,{children:"aria-hidden"})," and ",e.jsx(n.code,{children:"pointer-events: none"}),` — it never intercepts clicks
or hides content from screen readers. Reduced motion removes the eased trailing.`]}),`
`,e.jsx(n.h2,{id:"performance",children:"Performance"}),`
`,e.jsxs(n.p,{children:["One ",e.jsx(n.code,{children:"requestAnimationFrame"}),` loop eases a single position into the lens transform
(no per-frame React state); the visual work is the GPU-composited
`,e.jsx(n.code,{children:"backdrop-filter"}),"."]})]})}function M(s={}){const{wrapper:n}={...o(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(t,{...s})}):t(s)}export{M as default};
