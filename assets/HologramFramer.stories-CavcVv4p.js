import{j as s}from"./iframe-ClM0jS1U.js";import{a as S,C as e}from"./index-D8wtoCkM.js";import{H as _}from"./HologramViewer-BpZIBhSs.js";import"./preload-helper-C1FmrZbK.js";import"./GLTFLoader-D_Zo4mbP.js";import"./math-DUtpe-EO.js";import"./useReducedMotion-BC0jmgEw.js";import"./useDeviceCapabilities-TlijpFiE.js";function n(t){const{model:x,preset:h,color:f,strength:b,scanlines:C,autoRotate:T,grid:w,background:M,style:R}=t;return s.jsx(_,{model:x||void 0,preset:h,color:f,strength:b,scanlines:C,autoRotate:T,grid:w,background:M,style:{width:"100%",height:"100%",...R}})}n.defaultProps={preset:"cyan",autoRotate:.4,grid:!0};S(n,{model:{type:e.File,title:"Model",allowedFileTypes:["glb","gltf"]},preset:{type:e.Enum,title:"Theme",options:["cyan","magenta","amber","matrix","ghost"],optionTitles:["Cyan","Magenta","Amber","Matrix","Ghost"]},color:{type:e.Color,title:"Color"},strength:{type:e.Number,title:"Glow",min:0,max:3,step:.1},scanlines:{type:e.Number,title:"Scanlines",min:0,max:1,step:.05},autoRotate:{type:e.Number,title:"Auto Rotate",min:0,max:3,step:.1},grid:{type:e.Boolean,title:"Grid Floor",defaultValue:!0},background:{type:e.Color,title:"Background"}});const{expect:v}=__STORYBOOK_MODULE_TEST__,N={title:"Framer/Hologram",component:n,parameters:{docs:{description:{component:"The Framer Code Component, rendered live via the `framer` shim. Set a Model (.glb) or use the demo; drag to rotate, wheel to zoom."}}},argTypes:{preset:{control:"select",options:["cyan","magenta","amber","matrix","ghost"]},strength:{control:{type:"range",min:0,max:3,step:.1}},scanlines:{control:{type:"range",min:0,max:1,step:.05}},autoRotate:{control:{type:"range",min:0,max:3,step:.1}},grid:{control:"boolean"},background:{control:"color"}},args:{preset:"cyan",autoRotate:.5,grid:!0},render:t=>s.jsx("div",{style:{width:"min(90vw, 440px)",height:440},children:s.jsx(n,{...t})})},r={play:async({canvasElement:t})=>{await v(t.querySelector("[data-rffx-hologram]")).toBeTruthy()}},o={args:{preset:"matrix"}},a={args:{preset:"magenta"}};var m,i,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    await expect(canvasElement.querySelector("[data-rffx-hologram]")).toBeTruthy();
  }
}`,...(l=(i=r.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var p,c,d;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    preset: "matrix"
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var g,u,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    preset: "magenta"
  }
}`,...(y=(u=a.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const q=["Cyan","Matrix","Magenta"];export{r as Cyan,a as Magenta,o as Matrix,q as __namedExportsOrder,N as default};
