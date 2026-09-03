import{j as e}from"./iframe-ClM0jS1U.js";import{u as r,M as o}from"./blocks-BeZrOQ76.js";import"./preload-helper-C1FmrZbK.js";import"./index-Bd9AUIGf.js";function i(s){const n={code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",strong:"strong",...r(),...s.components};return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Core/Hooks"}),`
`,e.jsxs(n.h1,{id:"retrofuturecore--hooks",children:[e.jsx(n.code,{children:"@retrofuture/core"})," — Hooks"]}),`
`,e.jsxs(n.p,{children:[`The shared framework every RetroFuture FX component is built on. Framework-light
(React + DOM only), SSR-safe, zero runtime dependencies. Import from
`,e.jsx(n.code,{children:"@retrofuture/core"}),"."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"usereducedmotion",children:e.jsx(n.code,{children:"useReducedMotion()"})}),`
`,e.jsxs(n.p,{children:["Track ",e.jsx(n.code,{children:"prefers-reduced-motion: reduce"})," reactively."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const reduced = useReducedMotion(); // boolean; false during SSR
`})}),`
`,e.jsx(n.p,{children:`Updates if the OS setting changes mid-session. Components use it to freeze
animation and disable flashing.`}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"useanimationframecallback-options",children:e.jsx(n.code,{children:"useAnimationFrame(callback, options?)"})}),`
`,e.jsxs(n.p,{children:["A ",e.jsx(n.code,{children:"requestAnimationFrame"})," loop with a stable callback and optional FPS cap."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`useAnimationFrame(
  ({ time, delta }) => { /* time & delta in seconds */ },
  { paused: false, fps: 0 } // fps: 0 = uncapped
);
`})}),`
`,e.jsxs(n.p,{children:[`The callback is stored in a ref, so changing it never restarts the loop — the
hot path stays allocation-free. `,e.jsx(n.code,{children:"paused"})," stops the loop; ",e.jsx(n.code,{children:"fps"}),` throttles it
(used for the `,e.jsx(n.code,{children:"low"})," quality tier and reduced motion)."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"useelementsize",children:e.jsx(n.code,{children:"useElementSize()"})}),`
`,e.jsxs(n.p,{children:["Observe an element's content-box size with ",e.jsx(n.code,{children:"ResizeObserver"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const [ref, { width, height }] = useElementSize();
return <div ref={ref} />; // 0×0 until measured
`})}),`
`,e.jsx(n.p,{children:"The backbone of responsive rendering — components never assume fixed dimensions."}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"usevisibilityoptions",children:e.jsx(n.code,{children:"useVisibility(options?)"})}),`
`,e.jsxs(n.p,{children:["Report whether an element is on-screen ",e.jsx(n.strong,{children:"and"})," the tab is visible."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const [ref, visible] = useVisibility({ rootMargin: "120px" });
useAnimationFrame(tick, { paused: !visible });
`})}),`
`,e.jsxs(n.p,{children:["Combines ",e.jsx(n.code,{children:"IntersectionObserver"}),` with the Page Visibility API so render loops
pause off-screen and in background tabs.`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"usepointerpositionoptions",children:e.jsx(n.code,{children:"usePointerPosition(options?)"})}),`
`,e.jsxs(n.p,{children:["Normalized pointer position over an element (mouse + touch), in ",e.jsx(n.code,{children:"[-1, 1]"}),"."]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const { ref, position, positionRef } = usePointerPosition({ viaRef: true });
// viaRef: read positionRef.current inside a frame loop to avoid re-renders
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"{ x, y, active }"}),". Pass ",e.jsx(n.code,{children:"viaRef"}),` for hot loops (e.g. starfield parallax) to skip
React state updates.`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"usedevicecapabilities",children:e.jsx(n.code,{children:"useDeviceCapabilities()"})}),`
`,e.jsx(n.p,{children:"Cached device profile, resolved after mount to avoid hydration mismatch."}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const { webgl, webgl2, isMobile, pixelRatio, hardwareConcurrency, tier } =
  useDeviceCapabilities();
`})}),`
`,e.jsxs(n.p,{children:["Pair with ",e.jsx(n.code,{children:"resolveQuality(setting, caps)"})," and ",e.jsx(n.code,{children:"pixelRatioCap(tier)"}),` to turn
`,e.jsx(n.code,{children:'quality="auto"'})," into a concrete tier and DPR cap."]}),`
`,e.jsx(n.hr,{}),`
`,e.jsx(n.h2,{id:"utilities-non-hook",children:"Utilities (non-hook)"}),`
`,e.jsxs(n.p,{children:[`| Export | Purpose |
| --- | --- |
| `,e.jsx(n.code,{children:"detectWebGLSupport()"})," | ",e.jsx(n.code,{children:"{ supported, webgl2 }"}),`, cached, leak-free |
| `,e.jsx(n.code,{children:"createProgram(gl, vs, fs)"}),` | Compile + link, readable errors |
| `,e.jsx(n.code,{children:"createFullscreenTriangle(gl)"}),` | Clip-space triangle for post-process |
| `,e.jsx(n.code,{children:"resolveQuality(setting, caps)"})," | ",e.jsx(n.code,{children:'"auto"'}),` → concrete tier |
| `,e.jsx(n.code,{children:"pixelRatioCap(tier)"}),` | Recommended DPR cap per tier |
| `,e.jsx(n.code,{children:"clamp / lerp / damp / hexToRgb"})," | Small math helpers (",e.jsx(n.code,{children:"damp"}),` is frame-rate independent) |
| `,e.jsx(n.code,{children:"isBrowser"}),", ",e.jsx(n.code,{children:"useIsomorphicLayoutEffect"})," | SSR guards |"]})]})}function l(s={}){const{wrapper:n}={...r(),...s.components};return n?e.jsx(n,{...s,children:e.jsx(i,{...s})}):i(s)}export{l as default};
