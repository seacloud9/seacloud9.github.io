import{j as e}from"./iframe-ClM0jS1U.js";import{u as t,M as s,P as i,a as l,C as n}from"./blocks-BeZrOQ76.js";import{H as c,C as d,M as h,a as m,T as x,R as j,W as p}from"./Hologram.stories-BAHAADV4.js";import"./preload-helper-C1FmrZbK.js";import"./index-Bd9AUIGf.js";import"./HologramViewer-BpZIBhSs.js";import"./GLTFLoader-D_Zo4mbP.js";import"./math-DUtpe-EO.js";import"./useReducedMotion-BC0jmgEw.js";import"./useDeviceCapabilities-TlijpFiE.js";function a(o){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{of:c,name:"Docs"}),`
`,e.jsx(r.h1,{id:"retrofuture-fx--hologram",children:"RetroFuture FX — Hologram"}),`
`,e.jsx(r.p,{children:`A reusable holographic 3D viewer for products, game cartridges, hardware and 3D
portfolios. Load a GLB/GLTF (or use the built-in demo); it's re-shaded with a
fresnel + scanline hologram material and gets a grid floor, floating animation,
auto-rotate and drag/zoom orbit controls — over a solid or transparent
background.`}),`
`,e.jsx(i,{}),`
`,e.jsx(r.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(r.p,{children:"Drag to rotate, wheel to zoom."}),`
`,e.jsx(l,{}),`
`,e.jsx(r.h2,{id:"themes",children:"Themes"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"cyan"})," · ",e.jsx(r.code,{children:"magenta"})," · ",e.jsx(r.code,{children:"amber"})," · ",e.jsx(r.code,{children:"matrix"})," · ",e.jsx(r.code,{children:"ghost"}),"."]}),`
`,e.jsx(n,{of:d}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(r.h2,{id:"transparent-background",children:"Transparent background"}),`
`,e.jsxs(r.p,{children:["Set ",e.jsx(r.code,{children:'background="transparent"'})," to float the hologram over your own page content."]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(r.h2,{id:"your-own-model--content",children:"Your own model / content"}),`
`,e.jsxs(r.p,{children:["Point ",e.jsx(r.code,{children:"model"})," at a ",e.jsx(r.code,{children:".glb"}),", or pass R3F children with ",e.jsx(r.code,{children:"createHologramMaterial"}),":"]}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import { HologramViewer, createHologramMaterial } from "@retrofuture/hologram";

<HologramViewer preset="matrix">
  <mesh material={createHologramMaterial({ color: "#5bff8f", strength: 1.7, scanlines: 0.7, scanlineDensity: 1, fill: 0.1, flicker: 0.2 })}>
    <icosahedronGeometry args={[1, 1]} />
  </mesh>
</HologramViewer>
`})}),`
`,e.jsx(r.h2,{id:"accessibility--reduced-motion",children:"Accessibility & reduced motion"}),`
`,e.jsxs(r.p,{children:["The canvas is decorative; the loading state is an ",e.jsx(r.code,{children:"aria-live"}),` region and the
fallback has an `,e.jsx(r.code,{children:"aria-label"}),". With ",e.jsx(r.code,{children:"prefers-reduced-motion: reduce"}),`, rotation,
float and flicker stop.`]}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(r.h2,{id:"fallback",children:"Fallback"}),`
`,e.jsx(r.p,{children:"Without WebGL, a static labelled panel is shown."}),`
`,e.jsx(n,{of:p})]})}function D(o={}){const{wrapper:r}={...t(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(a,{...o})}):a(o)}export{D as default};
