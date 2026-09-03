import{j as e}from"./iframe-ClM0jS1U.js";import{u as a,M as t,P as i,a as c,C as n}from"./blocks-BeZrOQ76.js";import{C as d,a as l,b as h,A as u,S as m,c as p,I as x,R as j}from"./Carousel.stories-BPMCf2fU.js";import"./preload-helper-C1FmrZbK.js";import"./index-Bd9AUIGf.js";import"./Carousel-BjYZ3aHz.js";import"./useReducedMotion-BC0jmgEw.js";import"./usePointerPosition-CLvrN410.js";import"./math-DUtpe-EO.js";import"./useAnimationFrame-D0dvpe6q.js";import"./CRT-CoXNDUm6.js";import"./useDeviceCapabilities-TlijpFiE.js";import"./useElementSize-BDiBlEFR.js";import"./useVisibility-CrX1ncah.js";function s(o){const r={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...a(),...o.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{of:d,name:"Docs"}),`
`,e.jsx(r.h1,{id:"retrofuture-fx--creative-carousel",children:"RetroFuture FX — Creative Carousel"}),`
`,e.jsxs(r.p,{children:[`A premium 3D carousel for products, portfolios, games and case studies. Five
layouts, drag / wheel / keyboard / touch, momentum, snapping, looping, auto-play
and a pointer-parallax tilt. It renders `,e.jsx(r.strong,{children:"any"}),` React children as cards — so it
composes with the rest of RetroFuture FX.`]}),`
`,e.jsx(i,{}),`
`,e.jsx(r.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(r.p,{children:"Drag, scroll, or focus the carousel and use ← →."}),`
`,e.jsx(c,{}),`
`,e.jsx(r.h2,{id:"layouts",children:"Layouts"}),`
`,e.jsxs(r.p,{children:[e.jsx(r.code,{children:"coverflow"})," · ",e.jsx(r.code,{children:"circular"})," · ",e.jsx(r.code,{children:"arc"})," · ",e.jsx(r.code,{children:"stack"})," · ",e.jsx(r.code,{children:"flat"}),"."]}),`
`,e.jsx(n,{of:l}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(r.h2,{id:"compose-with-other-effects",children:"Compose with other effects"}),`
`,e.jsx(r.p,{children:"Cards are just children, so drop CRT / PS1 / Dissolve inside them:"}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(r.h2,{id:"imperative-control",children:"Imperative control"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`const car = useRef<CarouselHandle>(null);
car.current?.next();
car.current?.goTo(2);
<Carousel ref={car} onChange={(i) => setIndex(i)}>{cards}</Carousel>
`})}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(r.h2,{id:"accessibility--reduced-motion",children:"Accessibility & reduced motion"}),`
`,e.jsxs(r.p,{children:["The root is a keyboard-navigable ",e.jsx(r.code,{children:'role="group"'}),` carousel (← → Home End); cards
are marked as slides and non-active cards are `,e.jsx(r.code,{children:"aria-hidden"}),`. With
`,e.jsx(r.code,{children:"prefers-reduced-motion: reduce"}),`, movement snaps instantly and auto-play + tilt
are disabled.`]}),`
`,e.jsx(n,{of:j}),`
`,e.jsx(r.h2,{id:"performance",children:"Performance"}),`
`,e.jsx(r.p,{children:`Card transforms are written straight to the DOM in a single animation loop that
eases one fractional index — no per-frame React state, and nothing to do once it
settles.`})]})}function X(o={}){const{wrapper:r}={...a(),...o.components};return r?e.jsx(r,{...o,children:e.jsx(s,{...o})}):s(o)}export{X as default};
