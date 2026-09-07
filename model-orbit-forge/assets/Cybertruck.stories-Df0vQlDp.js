import{j as _}from"./jsx-runtime-BjG_zV1W.js";import{within as A,userEvent as d,waitFor as I,expect as m}from"./index-DeN4tkzB.js";import{C as u}from"./CybertruckShowcase-DI0fthKx.js";import"./index-DoKeIHtn.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./useProductConfiguration-Z1hqTQ5Z.js";import"./context-B97yrZ1_.js";import"./ProductViewer-Bq9fSg8s.js";import"./iframe-CV0YaKml.js";import"./ev-truck-o5zU0NMM.js";import"./VariantPicker-Claf2m0D.js";import"./CameraPresetPicker-BhUw-kGb.js";import"./LookPicker-CD1dAZaU.js";import"./HotspotList-2llcEwTm.js";const re={title:"Showcase/Cybertruck Atelier",component:u,parameters:{layout:"fullscreen",docs:{description:{component:"Independent Cybertruck design study composed entirely from the public ProductStage components. Real geometry, eight variant groups, dependency rules, six scene looks, six cameras, conditional hotspots, export and quality fallbacks. Finishes and prices are illustrative."}}},tags:["!autodocs"],args:{edition:"foundation",quality:"auto",initialCamera:"hero",initialSection:"design",showHotspots:!1,autoRotate:!1},argTypes:{edition:{control:"select",options:["foundation","stealth","copper","glacier"]},quality:{control:"select",options:["auto","cinematic","balanced","mobile","fallback"]},initialCamera:{control:"select",options:["hero","front","profile","wheel","bed","rear"]},initialSection:{control:"select",options:["design","details","output"]}},render:e=>_.jsx(u,{...e},[e.edition,e.initialCamera,e.initialSection].join("-"))},t={name:"01 / Foundation studio"},o={name:"02 / Stealth after dark",args:{edition:"stealth"}},r={name:"03 / Copper dusk",args:{edition:"copper"}},n={name:"04 / Glacier daylight",args:{edition:"glacier"}},i={name:"05 / Machined details",args:{initialCamera:"wheel",initialSection:"details",showHotspots:!0}},s={name:"06 / Mobile quality",args:{quality:"mobile"},parameters:{viewport:{defaultViewport:"mobile1"}}},c={name:"07 / No WebGL fallback",args:{quality:"fallback"}},l={name:"08 / Export & payload",args:{edition:"copper",initialSection:"output"}},p={name:"09 / Dependency rules",play:async({canvasElement:e})=>{const a=A(e);await d.click(a.getByRole("radio",{name:/Terrain black/})),await I(()=>m(a.getByRole("radio",{name:/Mud terrain/})).toBeEnabled()),await d.click(a.getByRole("radio",{name:/Mud terrain/})),await d.click(a.getByRole("button",{name:/02\s*Details/})),await m(a.getByRole("radio",{name:/Satin black/})).toBeChecked(),await m(a.getByRole("radio",{name:/Brushed alloy/})).toBeDisabled()}};var g,y,b;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '01 / Foundation studio'
}`,...(b=(y=t.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var h,w,k;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '02 / Stealth after dark',
  args: {
    edition: 'stealth'
  }
}`,...(k=(w=o.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var S,f,B;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '03 / Copper dusk',
  args: {
    edition: 'copper'
  }
}`,...(B=(f=r.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var v,x,R;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '04 / Glacier daylight',
  args: {
    edition: 'glacier'
  }
}`,...(R=(x=n.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};var C,E,M;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '05 / Machined details',
  args: {
    initialCamera: 'wheel',
    initialSection: 'details',
    showHotspots: true
  }
}`,...(M=(E=i.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var q,D,F;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: '06 / Mobile quality',
  args: {
    quality: 'mobile'
  },
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}`,...(F=(D=s.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var G,j,H;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  name: '07 / No WebGL fallback',
  args: {
    quality: 'fallback'
  }
}`,...(H=(j=c.parameters)==null?void 0:j.docs)==null?void 0:H.source}}};var P,T,L;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: '08 / Export & payload',
  args: {
    edition: 'copper',
    initialSection: 'output'
  }
}`,...(L=(T=l.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var N,V,W;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: '09 / Dependency rules',
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('radio', {
      name: /Terrain black/
    }));
    await waitFor(() => expect(canvas.getByRole('radio', {
      name: /Mud terrain/
    })).toBeEnabled());
    await userEvent.click(canvas.getByRole('radio', {
      name: /Mud terrain/
    }));
    await userEvent.click(canvas.getByRole('button', {
      name: /02\\s*Details/
    }));
    await expect(canvas.getByRole('radio', {
      name: /Satin black/
    })).toBeChecked();
    await expect(canvas.getByRole('radio', {
      name: /Brushed alloy/
    })).toBeDisabled();
  }
}`,...(W=(V=p.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};const ne=["Foundation","Stealth","Copper","Glacier","Detail","Mobile","Poster","Export","Rules"];export{r as Copper,i as Detail,l as Export,t as Foundation,n as Glacier,s as Mobile,c as Poster,p as Rules,o as Stealth,ne as __namedExportsOrder,re as default};
