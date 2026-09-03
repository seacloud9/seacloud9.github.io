import{j as e}from"./iframe-ClM0jS1U.js";import{u as t,M as o}from"./blocks-BeZrOQ76.js";import"./preload-helper-C1FmrZbK.js";import"./index-Bd9AUIGf.js";function s(r){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Docs/Getting Started"}),`
`,e.jsx(n.h1,{id:"getting-started",children:"Getting Started"}),`
`,e.jsx(n.p,{children:"RetroFuture FX components work in three environments. Pick your path."}),`
`,e.jsx(n.h2,{id:"install",children:"Install"}),`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"As packages (npm-style):"})}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install @retrofuture/crt @retrofuture/core
# or: pnpm add / yarn add
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"As source (drop-in):"})," copy ",e.jsx(n.code,{children:"components/crt/src"}),` into your project (e.g.
`,e.jsx(n.code,{children:"components/retrofuture/crt"}),`) and import from there. Both methods are supported —
buyers who want full control get the source; teams that want updates use the
package.`]}),`
`,e.jsx(n.h2,{id:"react",children:"React"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { CRT } from "@retrofuture/crt";

export function Hero() {
  return (
    <CRT preset="arcade" intensity={0.8}>
      <img src="/product.jpg" alt="Our product" />
    </CRT>
  );
}
`})}),`
`,e.jsxs(n.p,{children:[`The wrapped element stays in the DOM for accessibility; the shader renders on a
sibling `,e.jsx(n.code,{children:"<canvas>"}),`. Users never touch Three.js or GLSL — but the shader source
ships with the component for advanced customization.`]}),`
`,e.jsx(n.h2,{id:"nextjs-app-router",children:"Next.js (App Router)"}),`
`,e.jsxs(n.p,{children:["CRT uses WebGL and browser APIs, so render it from a ",e.jsx(n.strong,{children:"Client Component"}),":"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`"use client";
import { CRT } from "@retrofuture/crt";

export default function Page() {
  return (
    <CRT preset="green-terminal" style={{ width: "min(90vw, 720px)", aspectRatio: "4 / 3" }}>
      <img src="/testcard.svg" alt="Boot screen" />
    </CRT>
  );
}
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"SSR safety:"})," the component guards every ",e.jsx(n.code,{children:"window"})," / ",e.jsx(n.code,{children:"document"})," / ",e.jsx(n.code,{children:"navigator"}),`
access, so importing it during SSR is safe. On the server it renders the
fallback markup; after hydration it upgrades to the shader. You never need to
`,e.jsx(n.code,{children:"dynamic(() => …, { ssr: false })"})," it — just remember ",e.jsx(n.code,{children:'"use client"'}),` on the file
that renders it.`]}),`
`,e.jsx(n.h2,{id:"framer",children:"Framer"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Framer → ",e.jsx(n.strong,{children:"Assets"})," → ",e.jsx(n.strong,{children:"Code"})," → ",e.jsx(n.strong,{children:"New Code File"}),"."]}),`
`,e.jsxs(n.li,{children:["Paste ",e.jsx(n.code,{children:"components/crt/framer/RetroFutureCRT.tsx"}),"."]}),`
`,e.jsxs(n.li,{children:["Drop ",e.jsx(n.strong,{children:"RetroFutureCRT"})," on the canvas; set ",e.jsx(n.strong,{children:"Image"}),", ",e.jsx(n.strong,{children:"Preset"}),", sliders."]}),`
`]}),`
`,e.jsxs(n.p,{children:["See ",e.jsx(n.strong,{children:"Framer → CRT"}),` in this workbench for the live component and the full
control-mapping table.`]}),`
`,e.jsx(n.h2,{id:"presets--overrides",children:"Presets + overrides"}),`
`,e.jsxs(n.p,{children:[`Every component ships presets; any prop overrides the preset's field, and
`,e.jsx(n.code,{children:"intensity"})," scales the whole animated look at once:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<CRT preset="arcade" noise={0.2} intensity={0.7} />
`})}),`
`,e.jsx(n.h2,{id:"next-steps",children:"Next steps"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Components → CRT"})," — full prop reference (auto-generated from the types)."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Docs → Accessibility"}),", ",e.jsx(n.strong,{children:"Performance"}),", ",e.jsx(n.strong,{children:"Reduced Motion"}),"."]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Docs → Architecture"})," — how the shared core powers every component."]}),`
`]})]})}function a(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{a as default};
