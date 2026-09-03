import{j as s}from"./iframe-ClM0jS1U.js";import{a as E,C as e}from"./index-D8wtoCkM.js";import{B as R}from"./BootScreen-C3vmqLBN.js";import"./preload-helper-C1FmrZbK.js";import"./useReducedMotion-BC0jmgEw.js";import"./math-DUtpe-EO.js";import"./useAnimationFrame-D0dvpe6q.js";import"./CRT-CoXNDUm6.js";import"./useDeviceCapabilities-TlijpFiE.js";import"./useElementSize-BDiBlEFR.js";import"./useVisibility-CrX1ncah.js";function a(t){const{preset:x,bootText:S,title:T,duration:f,typingSpeed:h,crt:v,label:B,style:C}=t,i=(S||"").split(`
`).filter(Boolean);return s.jsx(R,{preset:x,title:T||void 0,lines:i.length?i:void 0,duration:f,typingSpeed:h,crt:v,label:B||void 0,inline:!0,style:{width:"100%",height:"100%",...C}})}a.defaultProps={preset:"green",duration:3e3,crt:!0};E(a,{preset:{type:e.Enum,title:"Theme",options:["green","amber","dos","cyberpunk","sci-fi"],optionTitles:["Green","Amber","DOS","Cyberpunk","Sci-Fi"]},title:{type:e.String,title:"Title"},bootText:{type:e.String,title:"Boot Log",displayTextArea:!0},label:{type:e.String,title:"Label"},duration:{type:e.Number,title:"Duration (ms)",min:500,max:1e4,step:100},typingSpeed:{type:e.Number,title:"Typing Speed",min:20,max:400,step:10},crt:{type:e.Boolean,title:"CRT Mode",defaultValue:!0}});const{expect:_}=__STORYBOOK_MODULE_TEST__,q={title:"Framer/Boot Screen",component:a,parameters:{docs:{description:{component:"The Framer Code Component, rendered live via the `framer` shim. Plays once and fades out."}}},argTypes:{preset:{control:"select",options:["green","amber","dos","cyberpunk","sci-fi"]},title:{control:"text"},duration:{control:{type:"range",min:500,max:1e4,step:100}},typingSpeed:{control:{type:"range",min:20,max:400,step:10}},crt:{control:"boolean"}},args:{preset:"green",title:"RETROFUTURE FX",duration:1e5,crt:!0},render:t=>s.jsx("div",{style:{position:"relative",width:"min(92vw, 640px)",height:400,borderRadius:12,overflow:"hidden"},children:s.jsx(a,{...t})})},r={play:async({canvasElement:t})=>{await _(t.querySelector("[data-rffx-boot]")).toBeTruthy()}},o={args:{preset:"amber"}},n={args:{preset:"cyberpunk"}};var p,c,l;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    await expect(canvasElement.querySelector("[data-rffx-boot]")).toBeTruthy();
  }
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var m,d,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    preset: "amber"
  }
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var y,b,g;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    preset: "cyberpunk"
  }
}`,...(g=(b=n.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};const M=["Green","Amber","Cyberpunk"];export{o as Amber,n as Cyberpunk,r as Green,M as __namedExportsOrder,q as default};
