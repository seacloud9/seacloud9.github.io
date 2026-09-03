import{j as r,r as Z}from"./iframe-ClM0jS1U.js";import{S as g}from"./Starfield-D6d9n_at.js";const{expect:m,within:J,userEvent:$}=__STORYBOOK_MODULE_TEST__;function Q({children:t}){return r.jsx("div",{style:{width:"min(92vw, 820px)",height:"min(60vh, 460px)",borderRadius:16,overflow:"hidden",border:"1px solid #262a3b"},children:t})}const ee={title:"Components/Starfield",component:g,parameters:{docs:{description:{component:"A GPU starfield — static field, forward flight, or full warp — with pointer parallax, reduced-motion support, quality scaling and a CSS fallback. Expose a `ref` to trigger `warp()` and sync it with navigation transitions."}}},argTypes:{preset:{control:"select",options:["deepspace","flight","hyperspace","warp","nebula"],table:{category:"Look"}},speed:{control:{type:"range",min:0,max:30,step:.5},table:{category:"Motion"}},starCount:{control:{type:"range",min:200,max:12e3,step:100},table:{category:"Field"}},depth:{control:{type:"range",min:4,max:60,step:1},table:{category:"Field"}},fov:{control:{type:"range",min:40,max:130,step:1},table:{category:"Field"}},trailLength:{control:{type:"range",min:0,max:4,step:.1},table:{category:"Motion"}},starSize:{control:{type:"range",min:.5,max:6,step:.1},table:{category:"Field"}},mouseInfluence:{control:{type:"range",min:0,max:1,step:.05},table:{category:"Motion"}},rotationSpeed:{control:{type:"range",min:-.5,max:.5,step:.01},table:{category:"Motion"}},background:{control:"color",table:{category:"Look"}},quality:{control:"select",options:["auto","low","medium","high","ultra"],table:{category:"System"}},respectReducedMotion:{control:"boolean",table:{category:"System"}},forceFallback:{control:"boolean",table:{category:"System"}},children:{control:!1,table:{disable:!0}},onWarpStart:{table:{disable:!0}},onWarpComplete:{table:{disable:!0}}},render:t=>r.jsx(Q,{children:r.jsx(g,{...t,style:{width:"100%",height:"100%"}})})},o={args:{preset:"flight"},play:async({canvasElement:t})=>{const e=t.querySelector("[data-rffx-starfield]");await m(e).toBeTruthy(),await m(e==null?void 0:e.getAttribute("data-rffx-mode")).toMatch(/shader|fallback/)}},s={args:{preset:"deepspace"}},c={args:{preset:"flight"}},i={args:{preset:"hyperspace"}},l={args:{preset:"warp"}},p={args:{preset:"nebula"}},a={parameters:{docs:{description:{story:"Call `ref.current.warp()` to punch into hyperspace. Fires `onWarpStart`/`onWarpComplete` so you can sync page transitions."}}},render:t=>{const e=Z.useRef(null);return r.jsx(Q,{children:r.jsxs("div",{style:{position:"relative",width:"100%",height:"100%"},children:[r.jsx(g,{...t,ref:e,preset:"flight",style:{width:"100%",height:"100%"}}),r.jsx("button",{type:"button",onClick:()=>{var f;return(f=e.current)==null?void 0:f.warp()},style:{position:"absolute",left:"50%",bottom:24,transform:"translateX(-50%)",padding:"12px 22px",borderRadius:10,border:"1px solid #00ffe1",background:"rgba(4,6,15,0.7)",color:"#00ffe1",fontFamily:"ui-monospace, monospace",cursor:"pointer",zIndex:2},children:"⚡ Engage warp"})]})})},play:async({canvasElement:t})=>{const e=J(t).getByRole("button",{name:/warp/i});await $.click(e),await m(e).toBeInTheDocument()}},n={parameters:{layout:"fullscreen"},render:()=>r.jsx(g,{preset:"nebula",style:{width:"100%",height:"100vh"},children:r.jsx("div",{style:{display:"grid",placeItems:"center",height:"100vh",textAlign:"center",color:"#fff"},children:r.jsxs("div",{children:[r.jsx("p",{style:{color:"#7ad7ff",fontFamily:"ui-monospace, monospace",letterSpacing:3},children:"RETROFUTURE FX"}),r.jsx("h1",{style:{fontSize:"clamp(32px,6vw,64px)",margin:"8px 0 16px"},children:"Enter hyperspace"}),r.jsx("a",{href:"#launch",style:{display:"inline-block",padding:"14px 22px",borderRadius:10,background:"#7ad7ff",color:"#05060a",fontWeight:800,textDecoration:"none"},children:"Launch →"})]})})}),play:async({canvasElement:t})=>{await m(J(t).getByRole("link",{name:/Launch/i})).toBeVisible()}},d={args:{preset:"hyperspace"},parameters:{reducedMotion:!0}},u={args:{preset:"flight",forceFallback:!0},play:async({canvasElement:t})=>{const e=t.querySelector("[data-rffx-starfield]");await m(e==null?void 0:e.getAttribute("data-rffx-mode")).toBe("fallback")}};var y,h,b;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    preset: "flight"
  },
  play: async ({
    canvasElement
  }) => {
    const root = canvasElement.querySelector("[data-rffx-starfield]");
    await expect(root).toBeTruthy();
    await expect(root?.getAttribute("data-rffx-mode")).toMatch(/shader|fallback/);
  }
}`,...(b=(h=o.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var x,S,w;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    preset: "deepspace"
  }
}`,...(w=(S=s.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var v,k,E;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    preset: "flight"
  }
}`,...(E=(k=c.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var R,F,j;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    preset: "hyperspace"
  }
}`,...(j=(F=i.parameters)==null?void 0:F.docs)==null?void 0:j.source}}};var T,W,B;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    preset: "warp"
  }
}`,...(B=(W=l.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var M,_,C;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    preset: "nebula"
  }
}`,...(C=(_=p.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var L,O,D,I,A;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: "Call \`ref.current.warp()\` to punch into hyperspace. Fires " + "\`onWarpStart\`/\`onWarpComplete\` so you can sync page transitions."
      }
    }
  },
  render: args => {
    const ref = useRef<StarfieldHandle>(null);
    return <Stage>
        <div style={{
        position: "relative",
        width: "100%",
        height: "100%"
      }}>
          <Starfield {...args} ref={ref} preset="flight" style={{
          width: "100%",
          height: "100%"
        }} />
          <button type="button" onClick={() => ref.current?.warp()} style={{
          position: "absolute",
          left: "50%",
          bottom: 24,
          transform: "translateX(-50%)",
          padding: "12px 22px",
          borderRadius: 10,
          border: "1px solid #00ffe1",
          background: "rgba(4,6,15,0.7)",
          color: "#00ffe1",
          fontFamily: "ui-monospace, monospace",
          cursor: "pointer",
          zIndex: 2
        }}>
            ⚡ Engage warp
          </button>
        </div>
      </Stage>;
  },
  play: async ({
    canvasElement
  }) => {
    const button = within(canvasElement).getByRole("button", {
      name: /warp/i
    });
    await userEvent.click(button);
    await expect(button).toBeInTheDocument();
  }
}`,...(D=(O=a.parameters)==null?void 0:O.docs)==null?void 0:D.source},description:{story:"Imperative warp() driven by a button + ref, with events.",...(A=(I=a.parameters)==null?void 0:I.docs)==null?void 0:A.description}}};var q,z,H,U,P;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  parameters: {
    layout: "fullscreen"
  },
  render: () => <Starfield preset="nebula" style={{
    width: "100%",
    height: "100vh"
  }}>
      <div style={{
      display: "grid",
      placeItems: "center",
      height: "100vh",
      textAlign: "center",
      color: "#fff"
    }}>
        <div>
          <p style={{
          color: "#7ad7ff",
          fontFamily: "ui-monospace, monospace",
          letterSpacing: 3
        }}>RETROFUTURE FX</p>
          <h1 style={{
          fontSize: "clamp(32px,6vw,64px)",
          margin: "8px 0 16px"
        }}>Enter hyperspace</h1>
          <a href="#launch" style={{
          display: "inline-block",
          padding: "14px 22px",
          borderRadius: 10,
          background: "#7ad7ff",
          color: "#05060a",
          fontWeight: 800,
          textDecoration: "none"
        }}>Launch →</a>
        </div>
      </div>
    </Starfield>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByRole("link", {
      name: /Launch/i
    })).toBeVisible();
  }
}`,...(H=(z=n.parameters)==null?void 0:z.docs)==null?void 0:H.source},description:{story:"Content overlaid on the field (accessible hero).",...(P=(U=n.parameters)==null?void 0:U.docs)==null?void 0:P.description}}};var X,G,N;d.parameters={...d.parameters,docs:{...(X=d.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    preset: "hyperspace"
  },
  parameters: {
    reducedMotion: true
  }
}`,...(N=(G=d.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};var V,K,Y;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    preset: "flight",
    forceFallback: true
  },
  play: async ({
    canvasElement
  }) => {
    const root = canvasElement.querySelector("[data-rffx-starfield]");
    await expect(root?.getAttribute("data-rffx-mode")).toBe("fallback");
  }
}`,...(Y=(K=u.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};const te=["Playground","DeepSpace","Flight","Hyperspace","Warp","Nebula","WarpTrigger","Hero","ReducedMotion","WebGLFallback"],ne=Object.freeze(Object.defineProperty({__proto__:null,DeepSpace:s,Flight:c,Hero:n,Hyperspace:i,Nebula:p,Playground:o,ReducedMotion:d,Warp:l,WarpTrigger:a,WebGLFallback:u,__namedExportsOrder:te,default:ee},Symbol.toStringTag,{value:"Module"}));export{s as D,i as H,p as N,d as R,ne as S,a as W,n as a,u as b};
