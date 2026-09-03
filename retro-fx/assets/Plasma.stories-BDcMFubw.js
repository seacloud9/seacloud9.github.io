import{j as a}from"./iframe-ClM0jS1U.js";import{P as y}from"./Plasma-BkgWUHnS.js";const{expect:u,within:Q}=__STORYBOOK_MODULE_TEST__,Z={title:"Components/Plasma",component:y,parameters:{layout:"fullscreen",docs:{description:{component:"A GPU-driven demoscene plasma — Amiga/DOS/VGA palettes, rendered at low resolution for chunky pixels, with posterization and an optional audio-reactive mode. Place content inside for a hero backdrop."}}},argTypes:{preset:{control:"select",options:["vga","amiga","acid","vapor","fire","ice","rainbow"],table:{category:"Look"}},scale:{control:{type:"range",min:1,max:16,step:.5},table:{category:"Field"}},speed:{control:{type:"range",min:0,max:3,step:.05},table:{category:"Motion"}},distortion:{control:{type:"range",min:0,max:1.5,step:.05},table:{category:"Field"}},waves:{control:{type:"range",min:0,max:1.5,step:.05},table:{category:"Field"}},noise:{control:{type:"range",min:0,max:.6,step:.02},table:{category:"Field"}},posterize:{control:{type:"range",min:0,max:32,step:1},table:{category:"Look"}},resolutionScale:{control:{type:"range",min:.1,max:1,step:.02},table:{category:"Look"}},respectReducedMotion:{control:"boolean",table:{category:"System"}},forceFallback:{control:"boolean",table:{category:"System"}},children:{control:!1,table:{disable:!0}},audioSource:{control:!1,table:{disable:!0}},palette:{control:!1,table:{disable:!0}}},args:{preset:"rainbow"},render:e=>a.jsx("div",{style:{padding:24,minHeight:"70vh"},children:a.jsx(y,{...e,style:{width:"100%",height:"60vh",borderRadius:14,overflow:"hidden"}})})},o={play:async({canvasElement:e})=>{const r=e.querySelector("[data-rffx-plasma]");await u(r).toBeTruthy(),await u(r==null?void 0:r.getAttribute("data-rffx-mode")).toMatch(/shader|fallback/)}},s={args:{preset:"vga"}},n={args:{preset:"amiga"}},c={args:{preset:"acid"}},i={args:{preset:"vapor"}},p={args:{preset:"fire"}},l={args:{preset:"ice"}},d={args:{preset:"rainbow"}},t={render:e=>a.jsx(y,{...e,preset:"vapor",style:{minHeight:"80vh"},children:a.jsx("div",{style:{display:"grid",placeItems:"center",minHeight:"80vh",textAlign:"center",color:"#fff",textShadow:"0 2px 20px rgba(0,0,0,0.5)"},children:a.jsxs("div",{children:[a.jsx("h1",{style:{fontSize:"clamp(36px,7vw,72px)",margin:0},children:"RetroFuture FX"}),a.jsx("p",{children:"Demoscene plasma, straight from the GPU."}),a.jsx("a",{href:"#go",style:{display:"inline-block",marginTop:12,padding:"12px 22px",borderRadius:10,background:"#05060a",color:"#fff",textDecoration:"none",fontWeight:700},children:"Enter →"})]})})}),play:async({canvasElement:e})=>{await u(Q(e).getByRole("link",{name:/Enter/i})).toBeVisible()}},m={args:{preset:"acid"},parameters:{reducedMotion:!0}},g={args:{preset:"fire",forceFallback:!0},play:async({canvasElement:e})=>{var r;await u((r=e.querySelector("[data-rffx-plasma]"))==null?void 0:r.getAttribute("data-rffx-mode")).toBe("fallback")}};var f,b,x;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const root = canvasElement.querySelector("[data-rffx-plasma]");
    await expect(root).toBeTruthy();
    await expect(root?.getAttribute("data-rffx-mode")).toMatch(/shader|fallback/);
  }
}`,...(x=(b=o.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var h,v,S;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    preset: "vga"
  }
}`,...(S=(v=s.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var w,k,A;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    preset: "amiga"
  }
}`,...(A=(k=n.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var F,R,E;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    preset: "acid"
  }
}`,...(E=(R=c.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var P,j,_;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    preset: "vapor"
  }
}`,...(_=(j=i.parameters)==null?void 0:j.docs)==null?void 0:_.source}}};var M,B,H;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    preset: "fire"
  }
}`,...(H=(B=p.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var T,G,O;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    preset: "ice"
  }
}`,...(O=(G=l.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var V,D,L;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    preset: "rainbow"
  }
}`,...(L=(D=d.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var z,W,q,I,U;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args => <Plasma {...args} preset="vapor" style={{
    minHeight: "80vh"
  }}>
      <div style={{
      display: "grid",
      placeItems: "center",
      minHeight: "80vh",
      textAlign: "center",
      color: "#fff",
      textShadow: "0 2px 20px rgba(0,0,0,0.5)"
    }}>
        <div>
          <h1 style={{
          fontSize: "clamp(36px,7vw,72px)",
          margin: 0
        }}>RetroFuture FX</h1>
          <p>Demoscene plasma, straight from the GPU.</p>
          <a href="#go" style={{
          display: "inline-block",
          marginTop: 12,
          padding: "12px 22px",
          borderRadius: 10,
          background: "#05060a",
          color: "#fff",
          textDecoration: "none",
          fontWeight: 700
        }}>Enter →</a>
        </div>
      </div>
    </Plasma>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByRole("link", {
      name: /Enter/i
    })).toBeVisible();
  }
}`,...(q=(W=t.parameters)==null?void 0:W.docs)==null?void 0:q.source},description:{story:"Hero backdrop with accessible content on top.",...(U=(I=t.parameters)==null?void 0:I.docs)==null?void 0:U.description}}};var X,C,K;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    preset: "acid"
  },
  parameters: {
    reducedMotion: true
  }
}`,...(K=(C=m.parameters)==null?void 0:C.docs)==null?void 0:K.source}}};var Y,J,N;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    preset: "fire",
    forceFallback: true
  },
  play: async ({
    canvasElement
  }) => {
    await expect(canvasElement.querySelector("[data-rffx-plasma]")?.getAttribute("data-rffx-mode")).toBe("fallback");
  }
}`,...(N=(J=g.parameters)==null?void 0:J.docs)==null?void 0:N.source}}};const $=["Playground","VGA","Amiga","Acid","Vapor","Fire","Ice","Rainbow","Hero","ReducedMotion","WebGLFallback"],re=Object.freeze(Object.defineProperty({__proto__:null,Acid:c,Amiga:n,Fire:p,Hero:t,Ice:l,Playground:o,Rainbow:d,ReducedMotion:m,VGA:s,Vapor:i,WebGLFallback:g,__namedExportsOrder:$,default:Z},Symbol.toStringTag,{value:"Module"}));export{n as A,p as F,t as H,re as P,m as R,s as V,g as W,c as a};
