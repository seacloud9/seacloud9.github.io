import{j as m}from"./iframe-ClM0jS1U.js";import{a as V,C as e}from"./index-D8wtoCkM.js";import{C as q}from"./CRT-CoXNDUm6.js";function c(r){const{image:w,preset:A,intensity:M,scanlines:N,curvature:B,noise:E,chromaticAberration:O,vignette:k,bloom:I,flicker:G,respectReducedMotion:D,style:P}=r;return m.jsx(q,{preset:A,intensity:M,scanlines:N,curvature:B,noise:E,chromaticAberration:O,vignette:k,bloom:I,flicker:G,respectReducedMotion:D,style:{width:"100%",height:"100%",...P},children:m.jsx("img",{src:w,alt:"",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}})})}c.defaultProps={image:"https://framerusercontent.com/images/placeholder.png",preset:"arcade",intensity:1,respectReducedMotion:!0};V(c,{image:{type:e.Image,title:"Image"},preset:{type:e.Enum,title:"Preset",options:["arcade","consumer","broadcast","green-terminal","amber-terminal","damaged"],optionTitles:["Arcade Monitor","Consumer CRT","Broadcast / VHS","Green Terminal","Amber Terminal","Damaged Monitor"]},intensity:{type:e.Number,title:"Intensity",min:0,max:1,step:.01,defaultValue:1},scanlines:{type:e.Number,title:"Scanlines",min:0,max:1,step:.01},curvature:{type:e.Number,title:"Curvature",min:0,max:.5,step:.01},noise:{type:e.Number,title:"Noise",min:0,max:1,step:.01},chromaticAberration:{type:e.Number,title:"RGB Split",min:0,max:8,step:.1,hidden:r=>!1},vignette:{type:e.Number,title:"Vignette",min:0,max:1,step:.01},bloom:{type:e.Number,title:"Glow",min:0,max:1,step:.01},flicker:{type:e.Number,title:"Flicker",min:0,max:1,step:.01},respectReducedMotion:{type:e.Boolean,title:"Reduced Motion",defaultValue:!0,enabledTitle:"Respect",disabledTitle:"Ignore"}});const{expect:L}=__STORYBOOK_MODULE_TEST__;function U({children:r}){return m.jsx("div",{style:{width:"min(90vw, 720px)",aspectRatio:"4 / 3",borderRadius:16,overflow:"hidden",border:"1px solid #262a3b"},children:r})}const z={title:"Framer/CRT",component:c,parameters:{docs:{description:{component:"The exact Framer Code Component designers paste into Framer, rendered live via a `framer` module shim. These controls mirror the Framer properties panel one-to-one."}}},argTypes:{image:{control:"text",description:"Image asset URL (Framer: Image picker)."},preset:{control:"select",options:["arcade","consumer","broadcast","green-terminal","amber-terminal","damaged"]},intensity:{control:{type:"range",min:0,max:1,step:.01}},scanlines:{control:{type:"range",min:0,max:1,step:.01}},curvature:{control:{type:"range",min:0,max:.5,step:.01}},noise:{control:{type:"range",min:0,max:1,step:.01}},chromaticAberration:{control:{type:"range",min:0,max:8,step:.1}},vignette:{control:{type:"range",min:0,max:1,step:.01}},bloom:{control:{type:"range",min:0,max:1,step:.01}},flicker:{control:{type:"range",min:0,max:1,step:.01}},respectReducedMotion:{control:"boolean"}},args:{image:"./testcard.svg",preset:"arcade",intensity:1,respectReducedMotion:!0},render:r=>m.jsx(U,{children:m.jsx(c,{...r})})},t={play:async({canvasElement:r})=>{await L(r.querySelector("[data-rffx-crt]")).toBeTruthy()}},a={args:{preset:"consumer"}},s={args:{preset:"broadcast"}},n={args:{preset:"green-terminal",image:"./bios.svg"}},o={args:{preset:"amber-terminal",image:"./bios.svg"}},i={args:{preset:"damaged"}};var p,l,d;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    // The wrapper mounts the real <CRT>, which stamps this attribute.
    await expect(canvasElement.querySelector("[data-rffx-crt]")).toBeTruthy();
  }
}`,...(d=(l=t.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,g,y;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    preset: "consumer"
  }
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var b,x,h;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    preset: "broadcast"
  }
}`,...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var T,f,v;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    preset: "green-terminal",
    image: "./bios.svg"
  }
}`,...(v=(f=n.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var R,S,C;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    preset: "amber-terminal",
    image: "./bios.svg"
  }
}`,...(C=(S=o.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var _,F,j;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    preset: "damaged"
  }
}`,...(j=(F=i.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};const H=["Arcade","Consumer","Broadcast","GreenTerminal","AmberTerminal","Damaged"],Q=Object.freeze(Object.defineProperty({__proto__:null,AmberTerminal:o,Arcade:t,Broadcast:s,Consumer:a,Damaged:i,GreenTerminal:n,__namedExportsOrder:H,default:z},Symbol.toStringTag,{value:"Module"}));export{t as A,Q as F};
