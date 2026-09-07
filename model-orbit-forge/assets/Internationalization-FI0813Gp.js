import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{useMDXComponents as t}from"./index-B25X6Ias.js";import{M as s}from"./index-DKP3Ien9.js";import"./index-DoKeIHtn.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-CV0YaKml.js";import"./index-DTod9LKm.js";import"./index-Bhelpi4i.js";import"./index-Bhqu_tAV.js";function i(r){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...t(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(s,{title:"ProductStage 3D/Internationalization"}),`
`,e.jsx(n.h1,{id:"internationalization",children:"Internationalization"}),`
`,e.jsx(n.p,{children:"There are two separate bodies of text, localized in two different places:"}),`
`,e.jsxs(n.p,{children:[`| | Owner | Example | Localized via |
| --- | --- | --- | --- |
| `,e.jsx(n.strong,{children:"Product content"}),' | You | "Nappa leather", hotspot descriptions, rule reasons | ',e.jsx(n.code,{children:"LocalizedString"}),` in the product definition |
| `,e.jsx(n.strong,{children:"UI chrome"}),' | The starter | "Export view", "Reset view", "Loading…" | ',e.jsx(n.code,{children:"ViewerMessages"})," catalogue |"]}),`
`,e.jsx(n.p,{children:`Keeping them apart matters: your catalogue changes when your products change, and the chrome
catalogue ships with the package.`}),`
`,e.jsx(n.h2,{id:"product-content",children:"Product content"}),`
`,e.jsxs(n.p,{children:["Any display field accepts a plain string ",e.jsx(n.strong,{children:"or"})," a locale map:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`label: 'Finish'                                        // single language
label: { en: 'Finish', fr: 'Finition', ja: '仕上げ' }   // localized
`})}),`
`,e.jsxs(n.p,{children:[`The union is deliberate. A single-language product keeps writing plain strings and nothing changes;
adding locales is opt-in `,e.jsx(n.strong,{children:"per field"}),`, so you can localize a catalogue incrementally instead of
migrating all of it at once.`]}),`
`,e.jsxs(n.p,{children:["Localizable: ",e.jsx(n.code,{children:"name"}),", ",e.jsx(n.code,{children:"description"}),", variant group and option ",e.jsx(n.code,{children:"label"}),", option ",e.jsx(n.code,{children:"description"}),`, camera
preset `,e.jsx(n.code,{children:"label"}),", hotspot ",e.jsx(n.code,{children:"label"})," and ",e.jsx(n.code,{children:"description"}),", and rule ",e.jsx(n.code,{children:"reason"}),"."]}),`
`,e.jsx(n.h3,{id:"declaring-supported-locales",children:"Declaring supported locales"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`const product = {
  locales: ['en', 'fr', 'ja', 'ar'],
  defaultLocale: 'en',
  // …
};
`})}),`
`,e.jsxs(n.p,{children:["Validation then reports gaps as ",e.jsx(n.strong,{children:"warnings"}),", with the exact path:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{children:`variants[0].options[1].label — Missing translations for: ja, ar.
`})}),`
`,e.jsx(n.p,{children:`Warnings, not errors: a half-translated catalogue should still render while the gap stays visible.
Plain strings are never flagged, so incremental adoption produces no noise.`}),`
`,e.jsx(n.h3,{id:"resolution-order",children:"Resolution order"}),`
`,e.jsxs(n.p,{children:[e.jsx(n.code,{children:"resolveLocalized(value, locale, fallback)"})," tries, in order:"]}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["exact tag (",e.jsx(n.code,{children:"fr-CA"}),")"]}),`
`,e.jsxs(n.li,{children:["base language (",e.jsx(n.code,{children:"fr"}),")"]}),`
`,e.jsxs(n.li,{children:["any regional variant of that language (",e.jsx(n.code,{children:"fr-CA"})," when ",e.jsx(n.code,{children:"fr"})," was asked for)"]}),`
`,e.jsx(n.li,{children:"the fallback locale"}),`
`,e.jsx(n.li,{children:"the first entry present"}),`
`]}),`
`,e.jsxs(n.p,{children:["Falling back to ",e.jsx(n.em,{children:"something"}),` matters more than strictness — a missing translation should degrade to
another language, never to a blank swatch label or an empty hotspot description.`]}),`
`,e.jsx(n.h2,{id:"ui-chrome",children:"UI chrome"}),`
`,e.jsx(n.p,{children:"Wrap your app once:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import { ProductStageProvider } from '@productstage/react';

<ProductStageProvider locale="fr" currency="EUR">
  <ProductViewer product={product} configuration={configuration} />
</ProductStageProvider>
`})}),`
`,e.jsxs(n.p,{children:["Catalogues ship for ",e.jsx(n.strong,{children:"en, fr, de, ja, ar"}),". Everything else falls back to English."]}),`
`,e.jsx(n.p,{children:`The provider is optional — without one, components render English left-to-right, so the
five-minute quickstart never has to mention i18n.`}),`
`,e.jsx(n.h3,{id:"overriding-individual-strings",children:"Overriding individual strings"}),`
`,e.jsx(n.p,{children:`Overrides are partial and merged over the resolved base, so you can retune one string without
restating the catalogue or losing the other translations:`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`<ProductStageProvider locale="fr" messages={{ exportView: 'Télécharger l’image' }}>
`})}),`
`,e.jsx(n.h2,{id:"prices",children:"Prices"}),`
`,e.jsxs(n.p,{children:["Prices format through ",e.jsx(n.code,{children:"Intl.NumberFormat"}),`, not string concatenation — symbol placement, separators,
and the minus glyph are all locale-dependent:`]}),`
`,e.jsxs(n.p,{children:[`| Locale | Currency | Output |
| --- | --- | --- |
| `,e.jsx(n.code,{children:"en-US"})," | USD | ",e.jsx(n.code,{children:"+$60"}),` |
| `,e.jsx(n.code,{children:"fr-FR"})," | EUR | ",e.jsx(n.code,{children:"+60 €"}),` |
| `,e.jsx(n.code,{children:"ja-JP"})," | JPY | ",e.jsx(n.code,{children:"+￥60"})," |"]}),`
`,e.jsxs(n.p,{children:["Try the ",e.jsx(n.strong,{children:"Currency"})," toolbar control on ",e.jsx(n.em,{children:"Controls/VariantPicker → Locale-aware pricing"}),"."]}),`
`,e.jsx(n.h2,{id:"right-to-left",children:"Right-to-left"}),`
`,e.jsxs(n.p,{children:["Direction is inferred from the locale (",e.jsx(n.code,{children:"ar"}),", ",e.jsx(n.code,{children:"he"}),", ",e.jsx(n.code,{children:"fa"}),", ",e.jsx(n.code,{children:"ur"}),", and others) and set as a real ",e.jsx(n.code,{children:"dir"}),`
attribute, so CSS logical properties and native text rendering both pick it up. Override it with
`,e.jsx(n.code,{children:'<ProductStageProvider dir="rtl">'})," when your host manages direction itself."]}),`
`,e.jsxs(n.p,{children:["The stylesheet uses ",e.jsx(n.code,{children:"padding-inline-end"}),", ",e.jsx(n.code,{children:"border-inline-end"}),", and ",e.jsx(n.code,{children:"text-align: start"}),` rather than
physical properties, and the hotspot chevron mirrors so it still points along the reading direction.`]}),`
`,e.jsxs(n.p,{children:["Select ",e.jsx(n.strong,{children:"العربية (RTL)"})," in the toolbar on any story to see it."]}),`
`,e.jsx(n.p,{children:`Two things deliberately stay left-to-right even in an RTL page: the 3D scene itself, and the
configuration JSON payload — that is data, not prose.`}),`
`,e.jsx(n.h2,{id:"rule-reasons",children:"Rule reasons"}),`
`,e.jsx(n.p,{children:`Rule explanations resolve in the active locale, which is why the locale is threaded through the rules
engine rather than applied at render time — generated fallback explanations are assembled from option
labels, so producing them in the presentation layer would mean re-implementing the rule semantics
there.`}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-ts",children:`computeAvailability(product, selections, { locale: 'fr' });
// → reason: 'La coque chromée n’est produite qu’avec une quincaillerie en acier.'
`})}),`
`,e.jsxs(n.p,{children:[e.jsxs(n.strong,{children:["Write a ",e.jsx(n.code,{children:"reason"})," for every rule."]}),` Generated fallbacks interpolate localized labels into an English
sentence frame; only an authored reason is fully translated. Validation warns when one is missing.`]}),`
`,e.jsx(n.h2,{id:"server-rendering",children:"Server rendering"}),`
`,e.jsxs(n.p,{children:["Resolve the locale on the server and pass it down — the Next.js demo reads a ",e.jsx(n.code,{children:"lang"}),` query param in
its Server Component, so a shared link opens in the right language with correct `,e.jsx(n.code,{children:"<title>"}),` and
OpenGraph metadata, and there is no flash of English before hydration.`]})]})}function j(r={}){const{wrapper:n}={...t(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(i,{...r})}):i(r)}export{j as default};
