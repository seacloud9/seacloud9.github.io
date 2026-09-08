import{j as s}from"./jsx-runtime-BjG_zV1W.js";import{H as r}from"./HotspotList-2llcEwTm.js";import{u as n}from"./useProductConfiguration-Z1hqTQ5Z.js";import{fn as j}from"./index-DeN4tkzB.js";import{f as i}from"./flight-helmet-D3F8kep0.js";import"./index-DoKeIHtn.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./context-B97yrZ1_.js";const S={title:"Controls/HotspotList",component:r,args:{product:i,onFocus:j()},parameters:{docs:{description:{component:"Expandable buttons wired to `aria-expanded` / `aria-controls`. Activating one also flies the camera to the anchor, keeping the list and the 3D view in step."}}}},a={render:e=>s.jsx("div",{className:"sb-panel",children:s.jsx(r,{...e})})},o={name:"Filtered by configuration",render:e=>{const y=n({product:i,defaultConfiguration:{accessory:["oxygen-hose"]}}),N=n({product:i});return s.jsxs("div",{className:"sb-row",children:[s.jsxs("div",{className:"sb-panel",children:[s.jsx("p",{className:"sb-note",children:"No accessories — 3 hotspots"}),s.jsx(r,{...e,configuration:N.configuration})]}),s.jsxs("div",{className:"sb-panel",children:[s.jsx("p",{className:"sb-note",children:"Oxygen hose selected — 4 hotspots"}),s.jsx(r,{...e,configuration:y.configuration})]})]})}},t={args:{label:"In this product"},render:e=>s.jsx("div",{className:"sb-panel",children:s.jsx(r,{...e})})};var c,d,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: args => <div className="sb-panel">
      <HotspotList {...args} />
    </div>
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var l,u,m,h,g;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Filtered by configuration',
  render: args => {
    const withHose = useProductConfiguration({
      product: flightHelmet,
      defaultConfiguration: {
        accessory: ['oxygen-hose']
      }
    });
    const withoutHose = useProductConfiguration({
      product: flightHelmet
    });
    return <div className="sb-row">
        <div className="sb-panel">
          <p className="sb-note">No accessories — 3 hotspots</p>
          <HotspotList {...args} configuration={withoutHose.configuration} />
        </div>
        <div className="sb-panel">
          <p className="sb-note">Oxygen hose selected — 4 hotspots</p>
          <HotspotList {...args} configuration={withHose.configuration} />
        </div>
      </div>;
  }
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source},description:{story:"Hotspots carrying `visibleWhen` are filtered by the current configuration.\nWithout the oxygen hose selected, the hose-fitting hotspot is absent from both\nthis list and the canvas markers — they never disagree.",...(g=(h=o.parameters)==null?void 0:h.docs)==null?void 0:g.description}}};var f,b,x,v,H;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'In this product'
  },
  render: args => <div className="sb-panel">
      <HotspotList {...args} />
    </div>
}`,...(x=(b=t.parameters)==null?void 0:b.docs)==null?void 0:x.source},description:{story:"A custom heading, for hosts with their own section titles.",...(H=(v=t.parameters)==null?void 0:v.docs)==null?void 0:H.description}}};const k=["Default","FilteredByConfiguration","CustomLabel"];export{t as CustomLabel,a as Default,o as FilteredByConfiguration,k as __namedExportsOrder,S as default};
