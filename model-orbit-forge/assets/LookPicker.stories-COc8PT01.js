import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{P as l}from"./ProductViewer-CyrxaEVb.js";import{L as a}from"./LookPicker-CD1dAZaU.js";import{u as q}from"./useProductConfiguration-Z1hqTQ5Z.js";import{r as G}from"./index-DoKeIHtn.js";import{f as o}from"./flight-helmet-D3F8kep0.js";import"./context-B97yrZ1_.js";import"./iframe-BeEFE1wl.js";import"./_commonjsHelpers-Cpj98o6Y.js";const M={title:"Controls/LookPicker",component:a,parameters:{docs:{description:{component:"Radio inputs, so arrow keys move between looks and the active one is announced as a selection rather than inferred from a highlight colour. Swatches derive from each look’s own backdrop unless one is given."}}}},t={render:()=>{const[r,c]=G.useState(o.defaultLook);return e.jsx("div",{className:"sb-panel",children:e.jsx(a,{product:o,value:r,onSelect:c})})}},s={name:"Driving the viewer",render:()=>{const[r,c]=G.useState("golden-hour"),V=q({product:o});return e.jsxs("div",{className:"sb-row",children:[e.jsx(l,{className:"sb-viewer",product:o,configuration:V.configuration,look:r}),e.jsx("div",{className:"sb-panel",children:e.jsx(a,{product:o,value:r,onSelect:c})})]})}},n={name:"Effects under quality profiles",render:()=>{const r=q({product:o});return e.jsxs("div",{className:"sb-stack",children:[e.jsxs("p",{className:"sb-note",children:["The same “Golden hour” look at two tiers. Left runs the full chain including god rays; right is pinned to ",e.jsx("code",{children:"mobile"}),", which keeps bloom and grain but drops the shafts."]}),e.jsxs("div",{className:"sb-row",children:[e.jsx(l,{className:"sb-viewer",product:o,configuration:r.configuration,look:"golden-hour",quality:"cinematic"}),e.jsx(l,{className:"sb-viewer",product:o,configuration:r.configuration,look:"golden-hour",quality:"mobile"})]})]})}},i={name:"No looks declared",render:()=>e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"sb-note",children:"A product without looks renders nothing at all, not an empty container."}),e.jsx(a,{product:{...o,looks:[]},onSelect:()=>{}})]})};var d,u,m,p,h;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => {
    const [look, setLook] = useState<string | undefined>(flightHelmet.defaultLook);
    return <div className="sb-panel">
        <LookPicker product={flightHelmet} value={look} onSelect={setLook} />
      </div>;
  }
}`,...(m=(u=t.parameters)==null?void 0:u.docs)==null?void 0:m.source},description:{story:"The picker alone.",...(h=(p=t.parameters)==null?void 0:p.docs)==null?void 0:h.description}}};var g,f,k,v,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Driving the viewer',
  render: () => {
    const [look, setLook] = useState<string | undefined>('golden-hour');
    const configuration = useProductConfiguration({
      product: flightHelmet
    });
    return <div className="sb-row">
        <ProductViewer className="sb-viewer" product={flightHelmet} configuration={configuration.configuration} look={look} />
        <div className="sb-panel">
          <LookPicker product={flightHelmet} value={look} onSelect={setLook} />
        </div>
      </div>;
  }
}`,...(k=(f=s.parameters)==null?void 0:f.docs)==null?void 0:k.source},description:{story:`The picker driving a live scene. Each look changes the lighting rig, the
backdrop **and** the effect chain in one step:

| Look | Effects |
| --- | --- |
| Studio | Gentle bloom, light vignette |
| Golden hour | Warm key, **god rays**, bloom, grain |
| Noir | Hard rim light, heavy vignette, grain |
| Daylight | Minimal bloom only |`,...(b=(v=s.parameters)==null?void 0:v.docs)==null?void 0:b.description}}};var w,y,N,x,L;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Effects under quality profiles',
  render: () => {
    const configuration = useProductConfiguration({
      product: flightHelmet
    });
    return <div className="sb-stack">
        <p className="sb-note">
          The same “Golden hour” look at two tiers. Left runs the full chain including god rays; right is
          pinned to <code>mobile</code>, which keeps bloom and grain but drops the shafts.
        </p>
        <div className="sb-row">
          <ProductViewer className="sb-viewer" product={flightHelmet} configuration={configuration.configuration} look="golden-hour" quality="cinematic" />
          <ProductViewer className="sb-viewer" product={flightHelmet} configuration={configuration.configuration} look="golden-hour" quality="mobile" />
        </div>
      </div>;
  }
}`,...(N=(y=n.parameters)==null?void 0:y.docs)==null?void 0:N.source},description:{story:`Quality profiles are a **ceiling** on effects, not a floor.

\`mobile\` drops god rays — they cost an extra pass over the scene — while
keeping bloom and vignette. \`fallback\` skips the composer entirely, which
saves a full-screen copy every frame. A product cannot opt back in above its
device's tier.`,...(L=(x=n.parameters)==null?void 0:x.docs)==null?void 0:L.description}}};var j,S,P,H,E;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'No looks declared',
  render: () => <>
      <p className="sb-note">A product without looks renders nothing at all, not an empty container.</p>
      <LookPicker product={{
      ...flightHelmet,
      looks: []
    }} onSelect={() => {}} />
    </>
}`,...(P=(S=i.parameters)==null?void 0:S.docs)==null?void 0:P.source},description:{story:"Renders nothing when a product declares no looks.",...(E=(H=i.parameters)==null?void 0:H.docs)==null?void 0:E.description}}};const O=["Default","WithViewer","QualityGating","NoLooks"];export{t as Default,i as NoLooks,n as QualityGating,s as WithViewer,O as __namedExportsOrder,M as default};
