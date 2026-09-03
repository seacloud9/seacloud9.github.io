import{j as e}from"./iframe-ClM0jS1U.js";import{u as o,M as i,P as a,a as d,C as s}from"./blocks-BeZrOQ76.js";import{P as l,a as c,R as h,D as p,b as x,W as u}from"./PS1Effect.stories-rbiKI70z.js";import"./preload-helper-C1FmrZbK.js";import"./index-Bd9AUIGf.js";import"./PS1Effect-DV9EgeaB.js";import"./GLTFLoader-D_Zo4mbP.js";import"./math-DUtpe-EO.js";import"./useReducedMotion-BC0jmgEw.js";import"./useDeviceCapabilities-TlijpFiE.js";function t(n){const r={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...o(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:l,name:"Docs"}),`
`,e.jsx(r.h1,{id:"retrofuture-fx--ps1",children:"RetroFuture FX — PS1"}),`
`,e.jsxs(r.p,{children:["Render 3D models the way early hardware actually drew them — ",e.jsx(r.strong,{children:"not"}),` just low
poly. Vertex snapping, affine texture warping, low-resolution rendering, reduced
color precision, ordered dithering, and distance fog. Built on Three.js + React
Three Fiber; shows a built-in fictional cartridge when no model is provided.`]}),`
`,e.jsx(a,{}),`
`,e.jsx(r.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(d,{}),`
`,e.jsx(r.h2,{id:"presets",children:"Presets"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"ps1"})," · ",e.jsx(r.code,{children:"saturn"})," · ",e.jsx(r.code,{children:"pc1995"})," · ",e.jsx(r.code,{children:"horror"})," · ",e.jsx(r.code,{children:"dreamlike"}),"."]}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(r.h2,{id:"how-the-effect-works",children:"How the effect works"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Vertex snapping"}),` — the material quantizes NDC vertex positions to a coarse
grid, so vertices jump between cells as the model moves (the signature wobble).`]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Affine texture mapping"})," — UVs use the ",e.jsx(r.code,{children:"noperspective"}),` qualifier (WebGL2), so
textures warp across triangles exactly like the PSX GPU.`]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Low-res + posterize + dither"}),` — the scene renders into a tiny
nearest-filtered buffer, then a full-screen pass reduces color precision and
applies an ordered Bayer dither aligned to the low-res pixels.`]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Fog + frame-rate simulation"}),` — distance fog limits the draw distance; an
optional simulated frame rate reproduces PS1-era choppiness.`]}),`
`]}),`
`,e.jsx(r.h2,{id:"your-own-content",children:"Your own content"}),`
`,e.jsxs(r.p,{children:["Point ",e.jsx(r.code,{children:"model"})," at a ",e.jsx(r.code,{children:".glb"}),`, or pass R3F children using the exported
`,e.jsx(r.code,{children:"createPS1Material"}),":"]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { PS1Effect, createPS1Material } from "@retrofuture/ps1";

<PS1Effect preset="ps1">
  <mesh material={createPS1Material({ snap: 80, jitter: 0, fogNear: 1.2, fogFar: 12, fogColor: "#20304a", color: "#ff6ad5" })}>
    <torusKnotGeometry args={[0.7, 0.25, 90, 12]} />
  </mesh>
</PS1Effect>
`})}),`
`,e.jsx(r.h2,{id:"accessibility--reduced-motion",children:"Accessibility & reduced motion"}),`
`,e.jsxs(r.p,{children:["The canvas is decorative. With ",e.jsx(r.code,{children:"prefers-reduced-motion: reduce"}),`, rotation, jitter
and frame-rate simulation stop and the model renders smoothly and still.`]}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(r.h2,{id:"fallback",children:"Fallback"}),`
`,e.jsx(r.p,{children:"Without WebGL, a static labelled panel is shown — never a broken canvas."}),`
`,e.jsx(s,{of:u})]})}function M(n={}){const{wrapper:r}={...o(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(t,{...n})}):t(n)}export{M as default};
