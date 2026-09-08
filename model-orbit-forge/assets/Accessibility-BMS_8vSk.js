import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as t}from"./index-B25X6Ias.js";import{M as r}from"./index-CqL22QJ3.js";import"./index-DoKeIHtn.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-BeEFE1wl.js";import"./index-DTod9LKm.js";import"./index-Bhelpi4i.js";import"./index-Bhqu_tAV.js";function s(i){const n={blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...t(),...i.components};return e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"ProductStage 3D/Accessibility"}),`
`,e.jsx(n.h1,{id:"accessibility",children:"Accessibility"}),`
`,e.jsx(n.p,{children:"Accessibility here is a functional requirement, not a polish pass. The rule the whole design follows:"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"The canvas is never the only route to any information or any action."})}),`
`]}),`
`,e.jsx(n.p,{children:`A WebGL canvas is opaque to assistive technology. Anything conveyed only by pixels inside it is
conveyed to nobody using a screen reader — so every piece of product information and every camera
action exists as ordinary HTML outside the canvas as well.`}),`
`,e.jsx(n.h2,{id:"what-the-components-guarantee",children:"What the components guarantee"}),`
`,e.jsx(n.h3,{id:"native-controls-not-aria-reimplementations",children:"Native controls, not ARIA reimplementations"}),`
`,e.jsxs(n.p,{children:["Variant pickers are real ",e.jsx(n.code,{children:'<input type="radio">'})," and ",e.jsx(n.code,{children:'<input type="checkbox">'}),` elements inside a
`,e.jsx(n.code,{children:"<fieldset>"})," with a ",e.jsx(n.code,{children:"<legend>"}),`. That brings arrow-key navigation within a group, correct group
semantics, form participation, and screen-reader announcements for free.`]}),`
`,e.jsxs(n.p,{children:["Rebuilding this with ",e.jsx(n.code,{children:'role="radio"'})," and a roving ",e.jsx(n.code,{children:"tabindex"}),` is a well-known source of subtly broken
keyboard behaviour, so the starter does not.`]}),`
`,e.jsx(n.h3,{id:"disabled-options-keep-their-explanation-visible",children:"Disabled options keep their explanation visible"}),`
`,e.jsx(n.p,{children:`When a rule disables an option, the reason is rendered as visible text next to it — not hidden behind
a disabled input, which assistive tech may skip entirely:`}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:["Graphite — ",e.jsx(n.em,{children:"The chrome shell is only produced with steel hardware."})]}),`
`]}),`
`,e.jsxs(n.p,{children:["See ",e.jsx(n.em,{children:"Controls/VariantPicker → Disabled by a rule"}),"."]}),`
`,e.jsx(n.h3,{id:"every-hotspot-has-required-text",children:"Every hotspot has required text"}),`
`,e.jsxs(n.p,{children:["Schema validation ",e.jsx(n.strong,{children:"rejects"})," a hotspot without a ",e.jsx(n.code,{children:"description"}),`. It is the accessible, text-only
equivalent of the 3D marker, so it is not optional:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`hotspots[0].description — Hotspot description is required.
  hint: The description is the accessible, text-only equivalent of the 3D marker.
`})}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"HotspotList"})," renders those descriptions as expandable buttons wired with ",e.jsx(n.code,{children:"aria-expanded"}),` and
`,e.jsx(n.code,{children:"aria-controls"}),`. It is also the mobile drawer — pinpoint-tapping a small marker on a phone is not a
reasonable requirement.`]}),`
`,e.jsx(n.h3,{id:"camera-actions-live-outside-the-canvas",children:"Camera actions live outside the canvas"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"CameraPresetPicker"})," renders ordinary buttons with ",e.jsx(n.code,{children:"aria-pressed"}),`, so the active view is exposed as
state rather than colour alone.`]}),`
`,e.jsx(n.h3,{id:"status-is-announced",children:"Status is announced"}),`
`,e.jsx(n.p,{children:"Loading, readiness, errors, and completed exports are announced through a polite live region:"}),`
`,e.jsxs(n.blockquote,{children:[`
`,e.jsxs(n.p,{children:[e.jsx(n.em,{children:"Atelier One viewer ready. Drag to rotate."}),`
`,e.jsx(n.em,{children:"Image exported: studio-headphones-finish-obsidian-hero.png"})]}),`
`]}),`
`,e.jsx(n.h3,{id:"reduced-motion-is-respected",children:"Reduced motion is respected"}),`
`,e.jsxs(n.p,{children:["Under ",e.jsx(n.code,{children:"prefers-reduced-motion: reduce"}),`, auto-rotate and camera transitions are disabled while
`,e.jsx(n.strong,{children:"direct manipulation and full visual quality are preserved"}),`. Someone who asked for less motion still
wants to drag the product around; what they do not want is the camera flying on its own.`]}),`
`,e.jsx(n.h3,{id:"touch-targets-and-focus",children:"Touch targets and focus"}),`
`,e.jsxs(n.p,{children:[`Interactive controls are at least 44 px tall. Focus is never trapped inside the canvas, and every
control has a visible `,e.jsx(n.code,{children:":focus-visible"})," ring."]}),`
`,e.jsx(n.h2,{id:"what-axe-cannot-check",children:"What axe cannot check"}),`
`,e.jsxs(n.p,{children:["The ",e.jsx(n.strong,{children:"Accessibility"}),` panel runs axe on every story, but automated scans catch a minority of real
issues. These need a person:`]}),`
`,e.jsxs(n.p,{children:[`| Needs a human | Why |
| --- | --- |
| Whether hotspot descriptions are `,e.jsx(n.em,{children:"useful"}),` | axe checks presence, not whether the text explains the feature |
| Whether the product is understandable without the canvas | Requires reading the page with the viewer hidden |
| Screen-reader flow | VoiceOver and NVDA passes; announcement order and verbosity |
| Focus order through the full configurator | Tab order across viewer, pickers, and list |
| Colour contrast of the `,e.jsx(n.em,{children:"rendered 3D scene"})," | axe cannot see into WebGL |"]}),`
`,e.jsxs(n.p,{children:["One deliberate axe configuration: the canvas wrapper carries ",e.jsx(n.code,{children:'role="img"'}),` with an accessible name.
Everything it depicts is also available as text, so this is the correct role — but it is worth knowing
it is a considered choice rather than an oversight.`]}),`
`,e.jsx(n.h2,{id:"checking-a-story-yourself",children:"Checking a story yourself"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsx(n.li,{children:"Open any story and tab through it — the order should be obvious and nothing should be unreachable."}),`
`,e.jsxs(n.li,{children:["Switch the ",e.jsx(n.strong,{children:"Locale"})," toolbar to ",e.jsx(n.code,{children:"العربية"})," and confirm the layout mirrors correctly."]}),`
`,e.jsxs(n.li,{children:["Open the ",e.jsx(n.strong,{children:"Accessibility"})," panel and review violations and incomplete checks."]}),`
`,e.jsx(n.li,{children:"Turn on reduced motion in your OS and reload — auto-rotate should stop, dragging should not."}),`
`]}),`
`,e.jsx(n.h2,{id:"known-gaps",children:"Known gaps"}),`
`,e.jsx(n.p,{children:`Automated axe runs per story exist today. Not yet built: a full keyboard-only pass, VoiceOver and
NVDA passes, and axe assertions wired into CI as a release gate. These are tracked in the repository
roadmap.`})]})}function j(i={}){const{wrapper:n}={...t(),...i.components};return n?e.jsx(n,{...i,children:e.jsx(s,{...i})}):s(i)}export{j as default};
