import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{P as i}from"./ProductViewer-Bq9fSg8s.js";import{u as c}from"./useProductConfiguration-Z1hqTQ5Z.js";import{f as d}from"./flight-helmet-DdOYu_BX.js";import{e as t}from"./ev-truck-o5zU0NMM.js";import"./context-B97yrZ1_.js";import"./index-DoKeIHtn.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./iframe-CV0YaKml.js";const q={title:"Viewer/HotspotMarkers",component:i,parameters:{layout:"padded",docs:{description:{component:"Markers rest as bare dots and expand to a label on hover or focus. Occluded markers fade to 32% but stay focusable, so a keyboard user never loses one behind the product."}}}},o={render:()=>{const r=c({product:d});return e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"sb-note",children:"Hover a marker to expand its label. Orbit the model to watch occluded markers fade as geometry passes in front of them."}),e.jsx(i,{className:"sb-viewer",product:d,configuration:r.configuration})]})}},n={name:"Enter and exit",render:()=>{const r=c({product:t}),u=r.isSelected("lights","signature");return e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"sb-note",children:"Entrances are staggered by index, so a set of markers sweeps in rather than popping as one block. Exits are not staggered — a hotspot that no longer applies should leave at once."}),e.jsx("button",{type:"button",className:"sb-button",onClick:()=>r.select("lights",u?"standard":"signature"),children:u?"Remove the signature light bar":"Add the signature light bar"}),e.jsx(i,{className:"sb-viewer",product:t,configuration:r.configuration,camera:"front"})]})}},s={name:"On a vehicle",render:()=>{const r=c({product:t});return e.jsx(i,{className:"sb-viewer",product:t,configuration:r.configuration})}},a={render:()=>{const r=c({product:t});return e.jsx(i,{className:"sb-viewer",product:t,configuration:r.configuration,showHotspots:!1})}};var l,p,m,g,h;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => {
    const configuration = useProductConfiguration({
      product: flightHelmet
    });
    return <>
        <p className="sb-note">
          Hover a marker to expand its label. Orbit the model to watch occluded markers fade as
          geometry passes in front of them.
        </p>
        <ProductViewer className="sb-viewer" product={flightHelmet} configuration={configuration.configuration} />
      </>;
  }
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source},description:{story:"Drag to orbit: the markers track their anchors without lag or easing.",...(h=(g=o.parameters)==null?void 0:g.docs)==null?void 0:h.description}}};var f,b,k,w,v;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Enter and exit',
  render: () => {
    const configuration = useProductConfiguration({
      product: evTruck
    });
    const selected = configuration.isSelected('lights', 'signature');
    return <>
        <p className="sb-note">
          Entrances are staggered by index, so a set of markers sweeps in rather than popping as one
          block. Exits are not staggered — a hotspot that no longer applies should leave at once.
        </p>
        <button type="button" className="sb-button" onClick={() => configuration.select('lights', selected ? 'standard' : 'signature')}>
          {selected ? 'Remove the signature light bar' : 'Add the signature light bar'}
        </button>
        <ProductViewer className="sb-viewer" product={evTruck} configuration={configuration.configuration} camera="front" />
      </>;
  }
}`,...(k=(b=n.parameters)==null?void 0:b.docs)==null?void 0:k.source},description:{story:`Markers gated on a selection animate in and out with it.

The truck's light-bar marker is bound to \`visibleWhen: [{ group: 'lights',
option: 'signature' }]\`. Toggle the option below and watch it scale in — and,
more interestingly, leave: React unmounts immediately, which would cancel a
transition on the way out, so a presence hook holds the element mounted for
the 240 ms its exit needs.`,...(v=(w=n.parameters)==null?void 0:w.docs)==null?void 0:v.description}}};var x,y,N,j,E;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'On a vehicle',
  render: () => {
    const configuration = useProductConfiguration({
      product: evTruck
    });
    return <ProductViewer className="sb-viewer" product={evTruck} configuration={configuration.configuration} />;
  }
}`,...(N=(y=s.parameters)==null?void 0:y.docs)==null?void 0:N.source},description:{story:`A six-metre subject with five anchors, to check the markers hold their points
across a camera transition rather than only when the scene is at rest.`,...(E=(j=s.parameters)==null?void 0:j.docs)==null?void 0:E.description}}};var P,H,T,O,V;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => {
    const configuration = useProductConfiguration({
      product: evTruck
    });
    return <ProductViewer className="sb-viewer" product={evTruck} configuration={configuration.configuration} showHotspots={false} />;
  }
}`,...(T=(H=a.parameters)==null?void 0:H.docs)==null?void 0:T.source},description:{story:"Markers suppressed entirely, for a clean hero presentation.",...(V=(O=a.parameters)==null?void 0:O.docs)==null?void 0:V.description}}};const z=["Default","EnterAndExit","OnAVehicle","Hidden"];export{o as Default,n as EnterAndExit,a as Hidden,s as OnAVehicle,z as __namedExportsOrder,q as default};
