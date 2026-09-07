import{j as r}from"./jsx-runtime-BjG_zV1W.js";import{C as o}from"./CameraPresetPicker-BhUw-kGb.js";import{fn as W}from"./index-DeN4tkzB.js";import{r as N}from"./index-DoKeIHtn.js";import{f as R}from"./flight-helmet-DdOYu_BX.js";import"./context-B97yrZ1_.js";import"./_commonjsHelpers-Cpj98o6Y.js";const _={title:"Controls/CameraPresetPicker",component:o,args:{product:R,onSelect:W()},parameters:{docs:{description:{component:`Camera presets rendered as ordinary buttons **outside** the canvas.

Every camera move must be reachable by keyboard and by screen reader, so the
canvas is never the only way to change the view. The active preset is
communicated with \`aria-pressed\` rather than colour alone.`}}}},c={render:e=>{const[i,n]=N.useState("hero");return r.jsx(o,{...e,value:i,onSelect:d=>{n(d),e.onSelect(d)}})}},t={name:"With reset",render:e=>{const[i,n]=N.useState("detail");return r.jsx(o,{...e,value:i,onSelect:n,onReset:()=>n("hero")})}},a={render:e=>r.jsx(o,{...e,value:"side"})},s={name:"No presets",render:e=>r.jsxs(r.Fragment,{children:[r.jsx("p",{className:"sb-note",children:"A product without cameras renders nothing at all, not an empty container."}),r.jsx(o,{...e,product:{...R,cameras:[]}})]})};var m,l,p;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string | undefined>('hero');
    return <CameraPresetPicker {...args} value={value} onSelect={id => {
      setValue(id);
      args.onSelect(id);
    }} />;
  }
}`,...(p=(l=c.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,h,g,f,v;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'With reset',
  render: args => {
    const [value, setValue] = useState<string | undefined>('detail');
    return <CameraPresetPicker {...args} value={value} onSelect={setValue} onReset={() => setValue('hero')} />;
  }
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source},description:{story:"With a reset action appended, returning to `product.initialCamera`.",...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.description}}};var S,P,y,b,x;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <CameraPresetPicker {...args} value="side" />
}`,...(y=(P=a.parameters)==null?void 0:P.docs)==null?void 0:y.source},description:{story:`Preset labels come from the product definition, so they localize with
everything else. The group's accessible name comes from the package
catalogue. Switch the **Locale** toolbar control to compare.`,...(x=(b=a.parameters)==null?void 0:b.docs)==null?void 0:x.description}}};var C,j,k,w,V;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'No presets',
  render: args => <>
      <p className="sb-note">A product without cameras renders nothing at all, not an empty container.</p>
      <CameraPresetPicker {...args} product={{
      ...flightHelmet,
      cameras: []
    }} />
    </>
}`,...(k=(j=s.parameters)==null?void 0:j.docs)==null?void 0:k.source},description:{story:"Renders nothing when a product declares no camera presets.",...(V=(w=s.parameters)==null?void 0:w.docs)==null?void 0:V.description}}};const F=["Default","WithReset","Localized","NoPresets"];export{c as Default,a as Localized,s as NoPresets,t as WithReset,F as __namedExportsOrder,_ as default};
