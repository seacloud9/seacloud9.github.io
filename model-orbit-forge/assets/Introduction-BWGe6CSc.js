import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as s}from"./index-B25X6Ias.js";import{M as i}from"./index-CqL22QJ3.js";import"./index-DoKeIHtn.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BeEFE1wl.js";import"./index-DTod9LKm.js";import"./index-Bhelpi4i.js";import"./index-Bhqu_tAV.js";function r(t){const n={code:"code",em:"em",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"ProductStage 3D/Introduction"}),`
`,e.jsx(n.h1,{id:"productstage-3d",children:"ProductStage 3D"}),`
`,e.jsx(n.p,{children:"A 3D product viewer and configurator starter for React and Next.js."}),`
`,e.jsx(n.p,{children:`Drop in a GLB, define product options, and get an editorial-quality product experience with camera
presets, hotspots, accessible fallbacks, and image export built in.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`Poster → live GLB → orbit → finish selection → camera preset → hotspot detail
       → mobile fallback → screenshot export → commerce callback
`})}),`
`,e.jsx(n.h2,{id:"using-this-storybook",children:"Using this Storybook"}),`
`,e.jsxs(n.p,{children:["Two toolbar controls apply to ",e.jsx(n.strong,{children:"every"})," story:"]}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Locale"}),` — switches between English, French, German, Japanese, and Arabic. Arabic also flips the
layout to right-to-left, so it doubles as the RTL check.`]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Currency"}),` — changes how price deltas format, which is not just a symbol swap: separators, symbol
placement, and the sign glyph are all locale-dependent.`]}),`
`]}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Accessibility"})," panel runs axe against each story as you browse it."]}),`
`,e.jsx("div",{style:{padding:"12px 16px",border:"1px solid #23262e",borderRadius:8,margin:"20px 0"},children:e.jsxs(n.p,{children:[e.jsx("strong",{children:"Viewer stories create real WebGL contexts."}),` Browsers cap how many can exist at once,
so view them one at a time rather than opening the docs page that renders all of them together.`]})}),`
`,e.jsx(n.h2,{id:"architecture",children:"Architecture"}),`
`,e.jsx(n.p,{children:"Four layers, with renderer specifics confined to exactly one of them:"}),`
`,e.jsxs(n.p,{children:[`| Layer | Package | Responsibility |
| --- | --- | --- |
| Product schema and state | `,e.jsx(n.code,{children:"@productstage/core"}),` | Types, validation, rules, serialization, quality profiles. No React, no DOM, no Three.js at runtime. |
| Scene services | `,e.jsx(n.code,{children:"@productstage/three-adapter"}),` | Loading and caching, material targets, camera framing, offscreen export. |
| Renderer adapter | `,e.jsx(n.code,{children:"ProductRendererAdapter"}),` | A small, capability-oriented contract. |
| Host binding | `,e.jsx(n.code,{children:"@productstage/react"})," | Components, hooks, headless state. |"]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"@productstage/core"}),` runs in plain Node with no WebGL context — its whole test suite proves it. That
constraint is what keeps a future Babylon.js or A-Frame adapter an addition rather than a rewrite.`]}),`
`,e.jsx(n.h2,{id:"two-ideas-worth-knowing-before-you-read-the-stories",children:"Two ideas worth knowing before you read the stories"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Models are normalized to one unit."}),` The loader centres every model on the origin and scales its
largest dimension to 1. Camera presets and hotspot anchors are therefore authored once, in normalized
space, and behave the same whatever scale the source file was exported at.`]}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Unavailable options stay visible."}),` The rules engine returns an availability map rather than
filtering options away. A picker whose options appear and disappear as you click is more confusing
than one where an option greys out and says why. See `,e.jsx(n.em,{children:"Controls/VariantPicker → Disabled by a rule"}),"."]}),`
`,e.jsx(n.h2,{id:"where-to-start",children:"Where to start"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Showcase/Cybertruck Atelier"})," — the automotive flagship: four curated editions, surface textures, six lighting looks, close-up cameras, conditional details, export and quality fallbacks"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Controls/VariantPicker"})," — the rules engine, disabled states, and locale-aware pricing"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Controls/HotspotList"})," — the accessible equivalent of the 3D markers"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Viewer/ProductViewer"})," — the full journey, plus the fallback and error states"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Accessibility"})," — what is guaranteed, and what axe cannot check"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Internationalization"})," — localizing product content and UI chrome"]}),`
`]})]})}function g(t={}){const{wrapper:n}={...s(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(r,{...t})}):r(t)}export{g as default};
