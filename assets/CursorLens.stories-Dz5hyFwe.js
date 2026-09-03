import{j as e}from"./iframe-ClM0jS1U.js";import{C as i}from"./CursorLens-CvHkkaCe.js";const{expect:l,within:E}=__STORYBOOK_MODULE_TEST__;function O(){return e.jsxs("div",{style:{position:"relative",padding:48,minHeight:420,color:"#fff",background:"radial-gradient(1200px 500px at 30% 20%, #1b0033, #05060a 60%)",overflow:"hidden"},children:[e.jsx("div",{style:{position:"absolute",inset:0,backgroundImage:"repeating-linear-gradient(45deg, rgba(0,255,225,0.08) 0 12px, transparent 12px 24px)"}}),e.jsxs("div",{style:{position:"relative",maxWidth:560},children:[e.jsx("h1",{style:{fontSize:44,margin:0},children:"RETROFUTURE FX"}),e.jsx("p",{style:{fontSize:20,color:"#b7c0d6"},children:"Move the pointer to scan this surface through the lens. The content underneath stays selectable and clickable."}),e.jsx("a",{href:"#more",style:{color:"#00ffe1",fontSize:18},children:"Read more →"}),e.jsx("div",{style:{display:"flex",gap:12,marginTop:20},children:["#ff2d95","#00ffe1","#ffd23f","#7ad7ff"].map(r=>e.jsx("div",{style:{width:90,height:90,borderRadius:12,background:r}},r))})]})]})}const M={title:"Components/Cursor Lens",component:i,parameters:{layout:"fullscreen",docs:{description:{component:"A CRT/fisheye lens that follows the pointer and distorts the content beneath it (backdrop-filter + an SVG displacement fisheye). Decorative and non-interactive — the content stays fully usable. Best in Chromium."}}},argTypes:{preset:{control:"select",options:["crt","bulge","invert","thermal","blur"],table:{category:"Look"}},size:{control:{type:"range",min:60,max:480,step:10},table:{category:"Look"}},distortion:{control:{type:"range",min:0,max:40,step:1},table:{category:"Look"}},scanlines:{control:{type:"range",min:0,max:1,step:.05},table:{category:"Look"}},smoothing:{control:{type:"range",min:.05,max:1,step:.05},table:{category:"Motion"}},global:{control:"boolean",table:{category:"Behavior"}},respectReducedMotion:{control:"boolean",table:{category:"System"}},children:{control:!1,table:{disable:!0}}},args:{preset:"crt"},render:r=>e.jsx(i,{...r,children:e.jsx(O,{})})},t={play:async({canvasElement:r})=>{const L=r.querySelector("[data-rffx-cursor-lens]");await l(L).toBeTruthy(),await l(E(r).getByRole("link",{name:/Read more/i})).toBeVisible()}},o={args:{preset:"crt"}},a={args:{preset:"bulge",distortion:30}},s={args:{preset:"invert"}},n={args:{preset:"thermal"}},c={args:{preset:"blur"}};var p,d,m,u,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const root = canvasElement.querySelector("[data-rffx-cursor-lens]");
    await expect(root).toBeTruthy();
    // Content underneath the lens stays accessible.
    await expect(within(canvasElement).getByRole("link", {
      name: /Read more/i
    })).toBeVisible();
  }
}`,...(m=(d=t.parameters)==null?void 0:d.docs)==null?void 0:m.source},description:{story:"Move your pointer over the surface.",...(g=(u=t.parameters)==null?void 0:u.docs)==null?void 0:g.description}}};var h,y,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    preset: "crt"
  }
}`,...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var b,x,v;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    preset: "bulge",
    distortion: 30
  }
}`,...(v=(x=a.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var S,T,R;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    preset: "invert"
  }
}`,...(R=(T=s.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var j,B,_;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    preset: "thermal"
  }
}`,...(_=(B=n.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var k,C,w;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    preset: "blur"
  }
}`,...(w=(C=c.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};const z=["Playground","CRT","Bulge","Invert","Thermal","Blur"],P=Object.freeze(Object.defineProperty({__proto__:null,Blur:c,Bulge:a,CRT:o,Invert:s,Playground:t,Thermal:n,__namedExportsOrder:z,default:M},Symbol.toStringTag,{value:"Module"}));export{a as B,o as C,s as I,P as L,n as T};
