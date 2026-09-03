import{j as r}from"./iframe-ClM0jS1U.js";import{H as p}from"./HologramViewer-BpZIBhSs.js";const{expect:g}=__STORYBOOK_MODULE_TEST__;function W({children:e}){return r.jsx("div",{style:{width:"min(90vw, 460px)",height:"min(70vh, 460px)",borderRadius:14,overflow:"hidden",border:"1px solid #262a3b"},children:e})}const z={title:"Components/Hologram",component:p,parameters:{docs:{description:{component:"A holographic 3D product viewer: loads a GLB/GLTF (or a built-in demo), re-shades it with a fresnel + scanline hologram material, and adds a grid floor, floating animation, auto-rotate and drag/zoom orbit controls. Three.js + React Three Fiber."}}},argTypes:{preset:{control:"select",options:["cyan","magenta","amber","matrix","ghost"],table:{category:"Look"}},color:{control:"color",table:{category:"Look"}},strength:{control:{type:"range",min:0,max:3,step:.1},table:{category:"Look"}},scanlines:{control:{type:"range",min:0,max:1,step:.05},table:{category:"Look"}},scanlineDensity:{control:{type:"range",min:.1,max:2,step:.05},table:{category:"Look"}},fill:{control:{type:"range",min:0,max:.6,step:.02},table:{category:"Look"}},flicker:{control:{type:"range",min:0,max:1,step:.05},table:{category:"Look"}},float:{control:{type:"range",min:0,max:.5,step:.02},table:{category:"Motion"}},autoRotate:{control:{type:"range",min:0,max:3,step:.1},table:{category:"Motion"}},cameraDistance:{control:{type:"range",min:1.6,max:8,step:.1},table:{category:"Camera"}},grid:{control:"boolean",table:{category:"Look"}},interactive:{control:"boolean",table:{category:"Camera"}},respectReducedMotion:{control:"boolean",table:{category:"System"}},forceFallback:{control:"boolean",table:{category:"System"}},model:{control:!1,table:{disable:!0}},children:{control:!1,table:{disable:!0}},onLoad:{table:{disable:!0}}},args:{preset:"cyan",autoRotate:.5},render:e=>r.jsx(W,{children:r.jsx(p,{...e})})},t={play:async({canvasElement:e})=>{const a=e.querySelector("[data-rffx-hologram]");await g(a).toBeTruthy(),await g(a==null?void 0:a.getAttribute("data-rffx-mode")).toMatch(/webgl|fallback/)}},o={args:{preset:"cyan"}},n={args:{preset:"magenta"}},s={args:{preset:"amber"}},c={args:{preset:"matrix"}},l={args:{preset:"ghost"}},i={args:{preset:"cyan",background:"transparent"},render:e=>r.jsx("div",{style:{background:"linear-gradient(135deg,#1b0033,#ff2d95)",borderRadius:14,overflow:"hidden"},children:r.jsx(W,{children:r.jsx(p,{...e})})})},d={args:{preset:"matrix"},parameters:{reducedMotion:!0}},m={args:{preset:"cyan",forceFallback:!0},play:async({canvasElement:e})=>{var a;await g((a=e.querySelector("[data-rffx-hologram]"))==null?void 0:a.getAttribute("data-rffx-mode")).toBe("fallback")}};var u,b,y;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const root = canvasElement.querySelector("[data-rffx-hologram]");
    await expect(root).toBeTruthy();
    await expect(root?.getAttribute("data-rffx-mode")).toMatch(/webgl|fallback/);
  }
}`,...(y=(b=t.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var f,x,h;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    preset: "cyan"
  }
}`,...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var S,k,w;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    preset: "magenta"
  }
}`,...(w=(k=n.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var v,M,L;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    preset: "amber"
  }
}`,...(L=(M=s.parameters)==null?void 0:M.docs)==null?void 0:L.source}}};var T,R,_;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    preset: "matrix"
  }
}`,...(_=(R=c.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var j,E,A;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    preset: "ghost"
  }
}`,...(A=(E=l.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var F,O,B;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    preset: "cyan",
    background: "transparent"
  },
  render: args => <div style={{
    background: "linear-gradient(135deg,#1b0033,#ff2d95)",
    borderRadius: 14,
    overflow: "hidden"
  }}>
      <Stage><HologramViewer {...args} /></Stage>
    </div>
}`,...(B=(O=i.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var C,G,H;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    preset: "matrix"
  },
  parameters: {
    reducedMotion: true
  }
}`,...(H=(G=d.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var q,D,P;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    preset: "cyan",
    forceFallback: true
  },
  play: async ({
    canvasElement
  }) => {
    await expect(canvasElement.querySelector("[data-rffx-hologram]")?.getAttribute("data-rffx-mode")).toBe("fallback");
  }
}`,...(P=(D=m.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};const V=["Playground","Cyan","Magenta","Amber","Matrix","Ghost","Transparent","ReducedMotion","WebGLFallback"],Y=Object.freeze(Object.defineProperty({__proto__:null,Amber:s,Cyan:o,Ghost:l,Magenta:n,Matrix:c,Playground:t,ReducedMotion:d,Transparent:i,WebGLFallback:m,__namedExportsOrder:V,default:z},Symbol.toStringTag,{value:"Module"}));export{o as C,Y as H,n as M,d as R,i as T,m as W,c as a};
