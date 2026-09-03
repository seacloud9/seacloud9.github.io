import{j as i}from"./iframe-ClM0jS1U.js";import{a as T,C as e}from"./index-D8wtoCkM.js";import{P as _}from"./Plasma-BkgWUHnS.js";import"./preload-helper-C1FmrZbK.js";import"./useDeviceCapabilities-TlijpFiE.js";import"./useReducedMotion-BC0jmgEw.js";import"./useElementSize-BDiBlEFR.js";import"./useVisibility-CrX1ncah.js";import"./useAnimationFrame-D0dvpe6q.js";function o(t){const{preset:x,scale:f,speed:b,distortion:h,waves:v,posterize:S,resolutionScale:w,style:P}=t;return i.jsx(_,{preset:x,scale:f,speed:b,distortion:h,waves:v,posterize:S,resolutionScale:w,style:{width:"100%",height:"100%",...P}})}o.defaultProps={preset:"rainbow"};T(o,{preset:{type:e.Enum,title:"Palette",options:["vga","amiga","acid","vapor","fire","ice","rainbow"],optionTitles:["VGA","Amiga","Acid","Vapor","Fire","Ice","Rainbow"]},scale:{type:e.Number,title:"Scale",min:1,max:16,step:.5},speed:{type:e.Number,title:"Speed",min:0,max:3,step:.05},distortion:{type:e.Number,title:"Distortion",min:0,max:1.5,step:.05},waves:{type:e.Number,title:"Waves",min:0,max:1.5,step:.05},posterize:{type:e.Number,title:"Posterize",min:0,max:32,step:1},resolutionScale:{type:e.Number,title:"Pixelation",min:.1,max:1,step:.02}});const{expect:A}=__STORYBOOK_MODULE_TEST__,q={title:"Framer/Plasma",component:o,parameters:{layout:"fullscreen",docs:{description:{component:"The Framer Code Component, rendered live via the `framer` shim."}}},argTypes:{preset:{control:"select",options:["vga","amiga","acid","vapor","fire","ice","rainbow"]},speed:{control:{type:"range",min:0,max:3,step:.05}},posterize:{control:{type:"range",min:0,max:32,step:1}},resolutionScale:{control:{type:"range",min:.1,max:1,step:.02}}},args:{preset:"amiga"},render:t=>i.jsx("div",{style:{width:"100%",height:"70vh",padding:24,boxSizing:"border-box"},children:i.jsx(o,{...t})})},r={play:async({canvasElement:t})=>{await A(t.querySelector("[data-rffx-plasma]")).toBeTruthy()}},a={args:{preset:"acid"}},s={args:{preset:"fire"}};var n,p,m;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    await expect(canvasElement.querySelector("[data-rffx-plasma]")).toBeTruthy();
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var c,l,d;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    preset: "acid"
  }
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,y,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    preset: "fire"
  }
}`,...(g=(y=s.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};const D=["Amiga","Acid","Fire"];export{a as Acid,r as Amiga,s as Fire,D as __namedExportsOrder,q as default};
