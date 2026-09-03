import{j as e}from"./iframe-ClM0jS1U.js";import{u as t,M as i,P as a,a as d,C as s}from"./blocks-BeZrOQ76.js";import{B as l,G as c,A as h,C as p,T as m,R as x}from"./BootScreen.stories-TcCCYrz1.js";import"./preload-helper-C1FmrZbK.js";import"./index-Bd9AUIGf.js";import"./BootScreen-C3vmqLBN.js";import"./useReducedMotion-BC0jmgEw.js";import"./math-DUtpe-EO.js";import"./useAnimationFrame-D0dvpe6q.js";import"./CRT-CoXNDUm6.js";import"./useDeviceCapabilities-TlijpFiE.js";import"./useElementSize-BDiBlEFR.js";import"./useVisibility-CrX1ncah.js";function r(o){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:l,name:"Docs"}),`
`,e.jsx(n.h1,{id:"retrofuture-fx--boot-screen",children:"RetroFuture FX — Boot Screen"}),`
`,e.jsxs(n.p,{children:[`A retro loading / BIOS-boot overlay: it types a boot log, fills a progress bar,
optionally wraps everything in CRT scanlines, then fades out when loading
finishes. Drive it with a controlled `,e.jsx(n.code,{children:"progress"}),", a ",e.jsx(n.code,{children:"duration"}),", or an ",e.jsx(n.code,{children:"until"}),`
promise — a page splash or a data-load gate.`]}),`
`,e.jsx(a,{}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(n.p,{children:"The demo is held at 72% so it stays on screen; in real use it dismisses at 100%."}),`
`,e.jsx(d,{}),`
`,e.jsx(n.h2,{id:"themes",children:"Themes"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"green"})," · ",e.jsx(n.code,{children:"amber"})," · ",e.jsx(n.code,{children:"dos"})," · ",e.jsx(n.code,{children:"cyberpunk"})," · ",e.jsx(n.code,{children:"sci-fi"}),"."]}),`
`,e.jsx(s,{of:c}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h2,{id:"timed-run",children:"Timed run"}),`
`,e.jsx(n.p,{children:"Types, fills, and fades out — then reveals the app."}),`
`,e.jsx(s,{of:m}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`// Load gate — show until data resolves:
{!ready && <BootScreen preset="green" until={dataPromise} onComplete={() => setReady(true)} />}

// Timed splash:
{show && <BootScreen preset="amber" duration={2600} onComplete={() => setShow(false)} />}

// Controlled from your own value:
<BootScreen preset="sci-fi" progress={loaded / total} onComplete={done} />
`})}),`
`,e.jsx(n.h2,{id:"accessibility--reduced-motion",children:"Accessibility & reduced motion"}),`
`,e.jsxs(n.p,{children:["The overlay is a ",e.jsx(n.code,{children:'role="status"'})," ",e.jsx(n.code,{children:'aria-live="polite"'}),` region announcing progress
and "Ready". With `,e.jsx(n.code,{children:"prefers-reduced-motion: reduce"}),`, the log appears instantly and
the fade is near-instant.`]}),`
`,e.jsx(s,{of:x})]})}function S(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(r,{...o})}):r(o)}export{S as default};
