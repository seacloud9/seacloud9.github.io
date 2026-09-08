import{j as o}from"./iframe-ClM0jS1U.js";import{a as R,C as t}from"./index-D8wtoCkM.js";import{G as B}from"./Glitch-G6pVHfvy.js";import"./preload-helper-C1FmrZbK.js";import"./useReducedMotion-BC0jmgEw.js";import"./useAnimationFrame-D0dvpe6q.js";import"./math-DUtpe-EO.js";function i(e){const{image:h,preset:v,mode:x,trigger:S,intensity:f,split:b,scanlines:T,style:w}=e;return o.jsx(B,{src:h,preset:v,mode:x,trigger:S,intensity:f,split:b,scanlines:T,style:{width:"100%",height:"100%",...w}})}i.defaultProps={image:"https://framerusercontent.com/images/placeholder.png",preset:"rgb",mode:"hover",trigger:!0};R(i,{image:{type:t.Image,title:"Image"},preset:{type:t.Enum,title:"Preset",options:["rgb","slice","digital","vhs","subtle"],optionTitles:["RGB Split","Slice","Digital","VHS","Subtle"]},mode:{type:t.Enum,title:"Play",options:["hover","always","reveal"],optionTitles:["On Hover","Always","Reveal"]},trigger:{type:t.Boolean,title:"Reveal",defaultValue:!0,hidden:e=>e.mode!=="reveal"},intensity:{type:t.Number,title:"Intensity",min:0,max:1,step:.05},split:{type:t.Number,title:"RGB Split",min:0,max:40,step:1},scanlines:{type:t.Number,title:"Scanlines",min:0,max:1,step:.05}});const{expect:E}=__STORYBOOK_MODULE_TEST__,P={title:"Framer/Glitch",component:i,parameters:{docs:{description:{component:"The Framer Code Component, rendered live via the `framer` shim."}}},argTypes:{preset:{control:"select",options:["rgb","slice","digital","vhs","subtle"]},mode:{control:"inline-radio",options:["hover","always","reveal"]},intensity:{control:{type:"range",min:0,max:1,step:.05}},split:{control:{type:"range",min:0,max:40,step:1}},scanlines:{control:{type:"range",min:0,max:1,step:.05}}},args:{image:"./testcard.svg",preset:"rgb",mode:"always"},render:e=>o.jsx("div",{style:{width:"min(90vw, 520px)"},children:o.jsx(i,{...e})})},r={play:async({canvasElement:e})=>{await E(e.querySelector("[data-rffx-glitch]")).toBeTruthy()}},s={args:{preset:"digital"}},a={args:{preset:"vhs"}};var n,l,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    await expect(canvasElement.querySelector("[data-rffx-glitch]")).toBeTruthy();
  }
}`,...(p=(l=r.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var m,c,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    preset: "digital"
  }
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var g,u,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    preset: "vhs"
  }
}`,...(y=(u=a.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};const V=["RGB","Digital","VHS"];export{s as Digital,r as RGB,a as VHS,V as __namedExportsOrder,P as default};
