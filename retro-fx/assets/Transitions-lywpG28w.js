import{j as e}from"./iframe-ClM0jS1U.js";import{u as i,M as a,P as o,C as s}from"./blocks-BeZrOQ76.js";import{T as c,D as d,I as l,W as h,C as x,E as p}from"./Transitions.stories-BD7HpzM1.js";import"./preload-helper-C1FmrZbK.js";import"./index-Bd9AUIGf.js";import"./PageTransition-DtbRe_Q-.js";import"./math-DUtpe-EO.js";import"./useReducedMotion-BC0jmgEw.js";import"./useAnimationFrame-D0dvpe6q.js";function t(r){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(a,{of:c,name:"Docs"}),`
`,e.jsx(n.h1,{id:"retrofuture-fx--page-transitions",children:"RetroFuture FX — Page Transitions"}),`
`,e.jsxs(n.p,{children:[`Branded route transitions that make a whole site feel like one piece. An overlay
`,e.jsx(n.strong,{children:"covers"}),` the screen, the route swaps at the peak (hidden by the overlay), then
it `,e.jsx(n.strong,{children:"reveals"}),` — so you never see a half-swapped page, and you don't need to keep
the old route mounted.`]}),`
`,e.jsx(o,{}),`
`,e.jsx(n.h2,{id:"effects",children:"Effects"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"dissolve"})," (pixels) · ",e.jsx(n.code,{children:"fade"})," · ",e.jsx(n.code,{children:"iris"})," · ",e.jsx(n.code,{children:"wipe"})," · ",e.jsx(n.code,{children:"bars"})," · ",e.jsx(n.code,{children:"crt"}),`. Click a nav
button in each demo.`]}),`
`,e.jsx(s,{of:d}),`
`,e.jsx(s,{of:l}),`
`,e.jsx(s,{of:h}),`
`,e.jsx(s,{of:x}),`
`,e.jsx(n.h2,{id:"full-transition-cover--navigate--reveal",children:"Full transition (cover → navigate → reveal)"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`"use client";
import { TransitionProvider, usePageTransition } from "@retrofuture/transitions";
import { useRouter } from "next/navigation";

<TransitionProvider preset="dissolve">{children}</TransitionProvider>

const { start } = usePageTransition();
<a onClick={(e) => { e.preventDefault(); start(() => router.push("/next")); }}>Next</a>
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"start(navigate)"})," covers, runs ",e.jsx(n.code,{children:"navigate"}),` at the peak, reveals, and resolves when
done. Works the same with React Router (`,e.jsx(n.code,{children:"useNavigate"}),")."]}),`
`,e.jsxs(n.h2,{id:"entrance-only-nextjs-templatetsx--framer",children:["Entrance-only (Next.js ",e.jsx(n.code,{children:"template.tsx"})," / Framer)"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"app/template.tsx"}),` remounts on navigation, so an entrance reveal replays each
time:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`"use client";
import { PageTransition } from "@retrofuture/transitions";
export default function Template({ children }) {
  return <PageTransition preset="dissolve">{children}</PageTransition>;
}
`})}),`
`,e.jsx(s,{of:p}),`
`,e.jsx(n.h2,{id:"framer",children:"Framer"}),`
`,e.jsxs(n.p,{children:[`Framer has native page transitions and code components can't intercept routing —
so the Framer wrapper provides a branded `,e.jsx(n.strong,{children:"entrance"}),` transition. Pair it with
Framer's native link transitions for exits.`]}),`
`,e.jsx(n.h2,{id:"accessibility",children:"Accessibility"}),`
`,e.jsxs(n.p,{children:["After the reveal, focus moves to ",e.jsx(n.code,{children:"[data-rffx-transition-focus]"}),", else ",e.jsx(n.code,{children:"<main>"}),`,
else the first `,e.jsx(n.code,{children:"<h1>"}),", and an ",e.jsx(n.code,{children:"aria-live"}),` region announces the change. Reduced
motion navigates instantly with no overlay.`]})]})}function w(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(t,{...r})}):t(r)}export{w as default};
