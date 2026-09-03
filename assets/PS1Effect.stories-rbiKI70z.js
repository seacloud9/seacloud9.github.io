import{j as i}from"./iframe-ClM0jS1U.js";import{P as d}from"./PS1Effect-DV9EgeaB.js";const{expect:m}=__STORYBOOK_MODULE_TEST__;function q({children:r}){return i.jsx("div",{style:{width:"min(90vw, 460px)",height:"min(70vh, 460px)",borderRadius:14,overflow:"hidden",border:"1px solid #262a3b"},children:r})}const A={title:"Components/PS1",component:d,parameters:{docs:{description:{component:"Render 3D models with authentic early-console traits: vertex snapping, affine texture warping, low-res rendering, reduced color precision, dithering and fog. Built on Three.js + React Three Fiber. Shows a built-in demo cartridge when no model is given."}}},argTypes:{preset:{control:"select",options:["ps1","saturn","pc1995","horror","dreamlike"],table:{category:"Look"}},resolutionScale:{control:{type:"range",min:.05,max:1,step:.01},table:{category:"Render"}},vertexPrecision:{control:{type:"range",min:16,max:400,step:1},table:{category:"Geometry"}},vertexJitter:{control:{type:"range",min:0,max:.1,step:.002},table:{category:"Geometry"}},colorDepth:{control:{type:"range",min:2,max:64,step:1},table:{category:"Render"}},dither:{control:{type:"range",min:0,max:1,step:.05},table:{category:"Render"}},fogDistance:{control:{type:"range",min:3,max:40,step:1},table:{category:"Render"}},frameRate:{control:{type:"range",min:0,max:60,step:1},table:{category:"Render"}},autoRotate:{control:{type:"range",min:0,max:3,step:.1},table:{category:"Camera"}},cameraDistance:{control:{type:"range",min:1.5,max:8,step:.1},table:{category:"Camera"}},background:{control:"color",table:{category:"Look"}},respectReducedMotion:{control:"boolean",table:{category:"System"}},forceFallback:{control:"boolean",table:{category:"System"}},model:{control:!1,table:{disable:!0}},children:{control:!1,table:{disable:!0}}},args:{preset:"ps1",autoRotate:.6},render:r=>i.jsx(q,{children:i.jsx(d,{...r})})},a={play:async({canvasElement:r})=>{const e=r.querySelector("[data-rffx-ps1]");await m(e).toBeTruthy(),await m(e==null?void 0:e.getAttribute("data-rffx-mode")).toMatch(/webgl|fallback/)}},t={args:{preset:"ps1"}},o={args:{preset:"saturn"}},s={args:{preset:"pc1995"}},n={args:{preset:"horror"}},c={args:{preset:"dreamlike"}},p={args:{preset:"ps1"},parameters:{reducedMotion:!0}},l={args:{preset:"ps1",forceFallback:!0},play:async({canvasElement:r})=>{const e=r.querySelector("[data-rffx-ps1]");await m(e==null?void 0:e.getAttribute("data-rffx-mode")).toBe("fallback")}};var u,g,y;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const root = canvasElement.querySelector("[data-rffx-ps1]");
    await expect(root).toBeTruthy();
    await expect(root?.getAttribute("data-rffx-mode")).toMatch(/webgl|fallback/);
  }
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var b,f,x;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    preset: "ps1"
  }
}`,...(x=(f=t.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var S,h,R;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    preset: "saturn"
  }
}`,...(R=(h=o.parameters)==null?void 0:h.docs)==null?void 0:R.source}}};var k,w,v;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    preset: "pc1995"
  }
}`,...(v=(w=s.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var P,_,E;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    preset: "horror"
  }
}`,...(E=(_=n.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var M,T,j;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    preset: "dreamlike"
  }
}`,...(j=(T=c.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var D,O,B;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    preset: "ps1"
  },
  parameters: {
    reducedMotion: true
  }
}`,...(B=(O=p.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var F,C,L;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    preset: "ps1",
    forceFallback: true
  },
  play: async ({
    canvasElement
  }) => {
    const root = canvasElement.querySelector("[data-rffx-ps1]");
    await expect(root?.getAttribute("data-rffx-mode")).toBe("fallback");
  }
}`,...(L=(C=l.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};const G=["Playground","PS1","Saturn","PC1995","RetroHorror","Dreamlike","ReducedMotion","WebGLFallback"],z=Object.freeze(Object.defineProperty({__proto__:null,Dreamlike:c,PC1995:s,PS1:t,Playground:a,ReducedMotion:p,RetroHorror:n,Saturn:o,WebGLFallback:l,__namedExportsOrder:G,default:A},Symbol.toStringTag,{value:"Module"}));export{c as D,z as P,n as R,l as W,t as a,p as b};
