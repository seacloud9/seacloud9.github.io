import{j as e}from"./iframe-ClM0jS1U.js";import{u as a,M as o,P as d,a as t,C as n}from"./blocks-BeZrOQ76.js";import{P as c,A as l,a as h,F as m,V as p,H as u,R as x,W as j}from"./Plasma.stories-BDcMFubw.js";import"./preload-helper-C1FmrZbK.js";import"./index-Bd9AUIGf.js";import"./Plasma-BkgWUHnS.js";import"./useDeviceCapabilities-TlijpFiE.js";import"./useReducedMotion-BC0jmgEw.js";import"./useElementSize-BDiBlEFR.js";import"./useVisibility-CrX1ncah.js";import"./useAnimationFrame-D0dvpe6q.js";function r(i){const s={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...a(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{of:c,name:"Docs"}),`
`,e.jsx(s.h1,{id:"retrofuture-fx--demoscene-plasma",children:"RetroFuture FX — Demoscene Plasma"}),`
`,e.jsx(s.p,{children:`A GPU-driven plasma with the aesthetic of Amiga/DOS demos and 1990s VGA graphics.
Layered sines + a radial ripple, domain-warped and mapped through a cosine
palette for classic colour cycling, rendered at low resolution for chunky pixels.
Optional audio-reactive mode.`}),`
`,e.jsx(d,{}),`
`,e.jsx(s.h2,{id:"playground",children:"Playground"}),`
`,e.jsx(t,{}),`
`,e.jsx(s.h2,{id:"palettes",children:"Palettes"}),`
`,e.jsxs(s.p,{children:[e.jsx(s.code,{children:"vga"})," · ",e.jsx(s.code,{children:"amiga"})," · ",e.jsx(s.code,{children:"acid"})," · ",e.jsx(s.code,{children:"vapor"})," · ",e.jsx(s.code,{children:"fire"})," · ",e.jsx(s.code,{children:"ice"})," · ",e.jsx(s.code,{children:"rainbow"}),"."]}),`
`,e.jsx(n,{of:l}),`
`,e.jsx(n,{of:h}),`
`,e.jsx(n,{of:m}),`
`,e.jsx(n,{of:p}),`
`,e.jsx(s.h2,{id:"hero-backdrop",children:"Hero backdrop"}),`
`,e.jsx(s.p,{children:"Place content inside — it renders above the plasma and stays accessible."}),`
`,e.jsx(n,{of:u}),`
`,e.jsx(s.h2,{id:"audio-reactive",children:"Audio-reactive"}),`
`,e.jsxs(s.p,{children:["Pass a media element or ",e.jsx(s.code,{children:'"microphone"'})," and set ",e.jsx(s.code,{children:"audioReactivity"}),":"]}),`
`,e.jsx(s.pre,{children:e.jsx(s.code,{className:"language-tsx",children:`const audio = useRef<HTMLAudioElement>(null);
<Plasma audioSource={audio.current ?? undefined} audioReactivity={0.8} preset="acid" />
<audio ref={audio} src="/track.mp3" controls />
`})}),`
`,e.jsx(s.p,{children:`Amplitude modulates the swirl, colour phase and brightness. Browsers require a
user gesture to start audio, so the AudioContext resumes on the first
interaction.`}),`
`,e.jsx(s.h2,{id:"accessibility--reduced-motion",children:"Accessibility & reduced motion"}),`
`,e.jsxs(s.p,{children:["The canvas is decorative; ",e.jsx(s.code,{children:"children"}),` stay in the DOM. With
`,e.jsx(s.code,{children:"prefers-reduced-motion: reduce"}),", the plasma freezes to a still frame."]}),`
`,e.jsx(n,{of:x}),`
`,e.jsx(s.h2,{id:"fallback",children:"Fallback"}),`
`,e.jsx(s.p,{children:"Without WebGL, a CSS gradient sampled from the same palette is shown."}),`
`,e.jsx(n,{of:j})]})}function D(i={}){const{wrapper:s}={...a(),...i.components};return s?e.jsx(s,{...i,children:e.jsx(r,{...i})}):r(i)}export{D as default};
