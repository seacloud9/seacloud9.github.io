import{j as e}from"./iframe-ClM0jS1U.js";import{u as t,M as i,P as c,a as d,C as r}from"./blocks-BeZrOQ76.js";import{T as a,G as l,A as h,C as m,a as p,B as x,I as j,R as u}from"./RetroTerminal.stories-DP2ySH0q.js";import"./preload-helper-C1FmrZbK.js";import"./index-Bd9AUIGf.js";import"./RetroTerminal-C7VcRT2m.js";import"./useReducedMotion-BC0jmgEw.js";import"./CRT-CoXNDUm6.js";import"./useDeviceCapabilities-TlijpFiE.js";import"./math-DUtpe-EO.js";import"./useElementSize-BDiBlEFR.js";import"./useVisibility-CrX1ncah.js";import"./useAnimationFrame-D0dvpe6q.js";function s(o){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...t(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{of:a,name:"Docs"}),`
`,e.jsx(n.h1,{id:"retrofuture-fx--retro-terminal",children:"RetroFuture FX — Retro Terminal"}),`
`,e.jsxs(n.p,{children:[`A customizable terminal interface for portfolio heroes, navigation, product
onboarding, AI front-ends, easter eggs and storytelling. Animated typing, a boot
sequence, a command registry with history, a blinking cursor, and an optional
`,e.jsx(n.strong,{children:"CRT mode"}),` that reuses the CRT component. Seven presets — not one hard-coded
look.`]}),`
`,e.jsx(c,{}),`
`,e.jsx(n.h2,{id:"playground",children:"Playground"}),`
`,e.jsxs(n.p,{children:["Click the terminal and type ",e.jsx(n.code,{children:"help"}),", ",e.jsx(n.code,{children:"about"}),", ",e.jsx(n.code,{children:"projects"}),", or ",e.jsx(n.code,{children:"contact"}),"."]}),`
`,e.jsx(d,{}),`
`,e.jsx(n.h2,{id:"presets",children:"Presets"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"dos"})," · ",e.jsx(n.code,{children:"unix"})," · ",e.jsx(n.code,{children:"cyberpunk"})," · ",e.jsx(n.code,{children:"amber-mainframe"})," · ",e.jsx(n.code,{children:"green-phosphor"})," · ",e.jsx(n.code,{children:"bbs"}),` ·
`,e.jsx(n.code,{children:"sci-fi"}),"."]}),`
`,e.jsx(r,{of:l}),`
`,e.jsx(r,{of:h}),`
`,e.jsx(r,{of:m}),`
`,e.jsx(n.h2,{id:"custom-commands",children:"Custom commands"}),`
`,e.jsxs(n.p,{children:["Handlers return a ",e.jsx(n.code,{children:"string"}),", ",e.jsx(n.code,{children:"string[]"}),", or a ",e.jsx(n.code,{children:"ReactNode"}),` (e.g. a link). Async
handlers are awaited. User commands merge over the built-ins (`,e.jsx(n.code,{children:"help"}),", ",e.jsx(n.code,{children:"clear"}),`,
`,e.jsx(n.code,{children:"echo"}),") and can override them."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<RetroTerminal
  commands={{
    about: () => "RetroFuture FX",
    projects: () => ["- CRT", "- Hyperspace"],
    launch: () => (window.location.href = "/products"),
    contact: () => <a href="mailto:hi@example.com">hi@example.com</a>,
  }}
/>
`})}),`
`,e.jsx(n.h2,{id:"crt-mode",children:"CRT mode"}),`
`,e.jsxs(n.p,{children:["Set ",e.jsx(n.code,{children:"crt"}),` to overlay authentic scanlines (this composes the CRT component; the
terminal stays fully interactive).`]}),`
`,e.jsx(r,{of:p}),`
`,e.jsx(n.h2,{id:"read-only-boot-hero",children:"Read-only boot hero"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"readOnly"}),` drops the input for a pure animated boot — great as a landing
headline.`]}),`
`,e.jsx(r,{of:x}),`
`,e.jsx(n.h2,{id:"imperative-control",children:"Imperative control"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`const term = useRef<RetroTerminalHandle>(null);
term.current?.run("help");
term.current?.print("hello");
term.current?.clear();
`})}),`
`,e.jsx(r,{of:j}),`
`,e.jsx(n.h2,{id:"accessibility--reduced-motion",children:"Accessibility & reduced motion"}),`
`,e.jsxs(n.p,{children:["Output is a ",e.jsx(n.code,{children:'role="log"'})," ",e.jsx(n.code,{children:'aria-live="polite"'}),` region and the input is labelled.
With `,e.jsx(n.code,{children:"prefers-reduced-motion: reduce"}),`, text appears instantly and the cursor
stops blinking.`]}),`
`,e.jsx(r,{of:u})]})}function P(o={}){const{wrapper:n}={...t(),...o.components};return n?e.jsx(n,{...o,children:e.jsx(s,{...o})}):s(o)}export{P as default};
