import{j as p}from"./iframe-ClM0jS1U.js";import{a as C,C as e}from"./index-D8wtoCkM.js";import{R as P}from"./RetroTerminal-C7VcRT2m.js";import"./preload-helper-C1FmrZbK.js";import"./useReducedMotion-BC0jmgEw.js";import"./CRT-CoXNDUm6.js";import"./useDeviceCapabilities-TlijpFiE.js";import"./math-DUtpe-EO.js";import"./useElementSize-BDiBlEFR.js";import"./useVisibility-CrX1ncah.js";import"./useAnimationFrame-D0dvpe6q.js";function a(t){const{preset:g,bootText:h,welcome:x,prompt:T,typingSpeed:f,crt:S,readOnly:O,style:R}=t,w=(h||"").split(`
`);return p.jsx(P,{preset:g,boot:w,welcome:x,prompt:T||void 0,typingSpeed:f,crt:S,readOnly:O,height:"100%",style:{width:"100%",height:"100%",...R}})}a.defaultProps={preset:"green-phosphor",bootText:`RetroFuture Systems
POST ... OK
booting shell
`,welcome:"Type 'help' to begin.",typingSpeed:90,crt:!0,readOnly:!1};C(a,{preset:{type:e.Enum,title:"Preset",options:["dos","unix","cyberpunk","amber-mainframe","green-phosphor","bbs","sci-fi"],optionTitles:["DOS","UNIX","Cyberpunk","Amber Mainframe","Green Phosphor","BBS","Sci-Fi"]},bootText:{type:e.String,title:"Boot Text",displayTextArea:!0},welcome:{type:e.String,title:"Welcome"},prompt:{type:e.String,title:"Prompt"},typingSpeed:{type:e.Number,title:"Typing Speed",min:10,max:400,step:5},crt:{type:e.Boolean,title:"CRT Mode",defaultValue:!0},readOnly:{type:e.Boolean,title:"Read Only",defaultValue:!1}});const{expect:B}=__STORYBOOK_MODULE_TEST__,D={title:"Framer/Retro Terminal",component:a,parameters:{docs:{description:{component:"The Framer Code Component, rendered live via the `framer` shim. Pick a preset, type Boot Text, toggle CRT Mode."}}},argTypes:{preset:{control:"select",options:["dos","unix","cyberpunk","amber-mainframe","green-phosphor","bbs","sci-fi"]},bootText:{control:"text"},welcome:{control:"text"},prompt:{control:"text"},typingSpeed:{control:{type:"range",min:10,max:400,step:5}},crt:{control:"boolean"},readOnly:{control:"boolean"}},args:{preset:"green-phosphor",bootText:`RetroFuture Systems
POST ... OK
booting shell
`,welcome:"Type 'help' to begin.",typingSpeed:110,crt:!0,readOnly:!1},render:t=>p.jsx("div",{style:{width:"min(92vw, 700px)",height:380},children:p.jsx(a,{...t})})},r={play:async({canvasElement:t})=>{await B(t.querySelector("[data-rffx-terminal]")).toBeTruthy()}},o={args:{preset:"amber-mainframe",crt:"amber-terminal"}},n={args:{preset:"cyberpunk"}};var s,i,m;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    await expect(canvasElement.querySelector("[data-rffx-terminal]")).toBeTruthy();
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var l,c,d;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    preset: "amber-mainframe",
    crt: "amber-terminal"
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var y,u,b;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    preset: "cyberpunk"
  }
}`,...(b=(u=n.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};const N=["GreenPhosphor","AmberMainframe","Cyberpunk"];export{o as AmberMainframe,n as Cyberpunk,r as GreenPhosphor,N as __namedExportsOrder,D as default};
