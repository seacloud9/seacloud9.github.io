import{j as e}from"./iframe-ClM0jS1U.js";import{a as R,C as r}from"./index-D8wtoCkM.js";import{C as j}from"./CursorLens-CvHkkaCe.js";import"./preload-helper-C1FmrZbK.js";import"./useReducedMotion-BC0jmgEw.js";import"./useAnimationFrame-D0dvpe6q.js";import"./math-DUtpe-EO.js";function a(t){const{content:g,preset:x,size:T,distortion:C,scanlines:b,border:f,style:v}=t;return e.jsx(j,{preset:x,size:T,distortion:C,scanlines:b,border:f,style:{width:"100%",height:"100%",...v},children:g})}a.defaultProps={preset:"crt"};R(a,{content:{type:r.ComponentInstance,title:"Content"},preset:{type:r.Enum,title:"Lens",options:["crt","bulge","invert","thermal","blur"],optionTitles:["CRT","Bulge","Invert","Thermal","Blur"]},size:{type:r.Number,title:"Size",min:60,max:480,step:10},distortion:{type:r.Number,title:"Distortion",min:0,max:40,step:1},scanlines:{type:r.Number,title:"Scanlines",min:0,max:1,step:.05},border:{type:r.Color,title:"Ring"}});const{expect:E}=__STORYBOOK_MODULE_TEST__,S=e.jsx("div",{style:{width:"100%",height:"100%",display:"grid",placeItems:"center",background:"radial-gradient(600px 300px at 40% 30%, #1b0033, #05060a)",color:"#fff"},children:e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx("h1",{style:{margin:0},children:"RETROFUTURE"}),e.jsx("p",{style:{color:"#8a93ab"},children:"Move the pointer over me"})]})}),I={title:"Framer/Cursor Lens",component:a,parameters:{layout:"fullscreen",docs:{description:{component:"The Framer Code Component, rendered live via the `framer` shim. Best in Chromium."}}},argTypes:{preset:{control:"select",options:["crt","bulge","invert","thermal","blur"]},size:{control:{type:"range",min:60,max:480,step:10}},distortion:{control:{type:"range",min:0,max:40,step:1}},scanlines:{control:{type:"range",min:0,max:1,step:.05}},border:{control:"color"}},args:{preset:"crt"},render:t=>e.jsx("div",{style:{width:"100%",height:"60vh"},children:e.jsx(a,{...t,content:S})})},s={play:async({canvasElement:t})=>{await E(t.querySelector("[data-rffx-cursor-lens]")).toBeTruthy()}},o={args:{preset:"bulge",distortion:30}},n={args:{preset:"thermal"}};var i,l,c;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    await expect(canvasElement.querySelector("[data-rffx-cursor-lens]")).toBeTruthy();
  }
}`,...(c=(l=s.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var p,m,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    preset: "bulge",
    distortion: 30
  }
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var u,h,y;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    preset: "thermal"
  }
}`,...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};const N=["CRT","Bulge","Thermal"];export{o as Bulge,s as CRT,n as Thermal,N as __namedExportsOrder,I as default};
