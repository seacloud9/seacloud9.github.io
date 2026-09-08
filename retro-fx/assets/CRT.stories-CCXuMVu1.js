import{j as e}from"./iframe-ClM0jS1U.js";import{A as ye}from"./AnimatedCanvasSource-DLMJ84R0.js";import{C as p}from"./CRT-CoXNDUm6.js";const{expect:a,within:fe,userEvent:ve}=__STORYBOOK_MODULE_TEST__;function f({children:r}){return e.jsx("div",{style:{width:"min(90vw, 720px)",aspectRatio:"4 / 3",borderRadius:16,overflow:"hidden",border:"1px solid #262a3b",boxShadow:"0 24px 60px rgba(0,0,0,0.55)",background:"#000"},children:r})}const v=e.jsx("img",{src:"./testcard.svg",alt:"RetroFuture FX CRT test card",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}}),xe={title:"Components/CRT",component:p,parameters:{docs:{description:{component:"Wrap any image, video or canvas in an authentic cathode-ray-tube display. Single-pass GLSL shader — curvature, phosphor scanlines, aperture-grille mask, RGB misconvergence, sync wobble, roll, bloom and grain — with reduced-motion support and a CSS fallback."}}},argTypes:{preset:{control:"select",options:["arcade","consumer","broadcast","green-terminal","amber-terminal","damaged"],table:{category:"Look"},description:"Named starting look; individual props override its fields."},intensity:{control:{type:"range",min:0,max:1,step:.01},table:{category:"Look"}},scanlines:{control:{type:"range",min:0,max:1,step:.01},table:{category:"Effects"}},curvature:{control:{type:"range",min:0,max:.5,step:.01},table:{category:"Effects"}},chromaticAberration:{control:{type:"range",min:0,max:8,step:.1},table:{category:"Effects"}},noise:{control:{type:"range",min:0,max:1,step:.01},table:{category:"Effects"}},flicker:{control:{type:"range",min:0,max:1,step:.01},table:{category:"Effects"}},roll:{control:{type:"range",min:0,max:1,step:.01},table:{category:"Effects"}},vignette:{control:{type:"range",min:0,max:1,step:.01},table:{category:"Effects"}},bloom:{control:{type:"range",min:0,max:1,step:.01},table:{category:"Effects"}},tint:{control:"color",table:{category:"Effects"}},quality:{control:"select",options:["auto","low","medium","high","ultra"],table:{category:"System"}},respectReducedMotion:{control:"boolean",table:{category:"System"}},forceFallback:{control:"boolean",table:{category:"System"}},children:{control:!1,table:{disable:!0}}},args:{children:v},render:r=>e.jsx(f,{children:e.jsx(p,{...r,children:v})})},n={args:{preset:"arcade",intensity:1},play:async({canvasElement:r})=>{const t=r.querySelector("[data-rffx-crt]");await a(t).toBeTruthy();const m=t==null?void 0:t.getAttribute("data-rffx-mode");if(await a(m).toMatch(/shader|fallback/),m==="shader"){const x=t.querySelector("canvas"),S=t.getBoundingClientRect();await a(x.width).toBeGreaterThanOrEqual(Math.floor(S.width)-2),await a(x.height).toBeGreaterThanOrEqual(Math.floor(S.height)-2)}}},g={args:{preset:"arcade"}},u={args:{preset:"consumer"}},h={args:{preset:"broadcast"}},l={args:{preset:"green-terminal"},render:r=>e.jsx(f,{children:e.jsx(p,{...r,children:e.jsx("img",{src:"./bios.svg",alt:"BIOS boot screen",style:{width:"100%",height:"100%",objectFit:"cover",display:"block"}})})})},b={args:{preset:"amber-terminal"},render:l.render},y={args:{preset:"damaged"}},s={args:{preset:"broadcast"},parameters:{docs:{description:{story:"CRT sampling a live `<canvas>` every frame — no video file required."}}},render:r=>e.jsx(f,{children:e.jsx(p,{...r,children:e.jsx(ye,{})})})},o={args:{preset:"green-terminal",forceFallback:!0},parameters:{docs:{description:{story:"When content isn't a single image/video/canvas, CRT keeps the DOM live and overlays the effect — links, buttons and focus keep working."}}},render:r=>e.jsx(f,{children:e.jsx(p,{...r,children:e.jsxs("div",{style:{padding:32,color:"#39ff6a",fontFamily:"ui-monospace, monospace",height:"100%",boxSizing:"border-box"},children:[e.jsx("h2",{style:{marginTop:0},children:"MAIN MENU"}),e.jsx("p",{children:"Select an option:"}),e.jsx("p",{children:e.jsx("button",{type:"button",style:w,children:"▸ NEW GAME"})}),e.jsx("p",{children:e.jsx("button",{type:"button",style:w,children:"▸ CONTINUE"})}),e.jsx("p",{children:e.jsx("a",{href:"#options",style:{color:"#8affaf"},children:"▸ OPTIONS"})})]})})}),play:async({canvasElement:r})=>{const t=fe(r),m=t.getByRole("button",{name:/NEW GAME/i});await ve.click(m),await a(m).toBeInTheDocument(),await a(t.getByRole("link",{name:/OPTIONS/i})).toBeVisible()}},c={args:{preset:"damaged"},parameters:{reducedMotion:!0,docs:{description:{story:"With `prefers-reduced-motion: reduce`, animated distortion freezes to a static frame and aberration is clamped."}}}},i={args:{preset:"consumer",forceFallback:!0},play:async({canvasElement:r})=>{const t=r.querySelector("[data-rffx-crt]");await a(t==null?void 0:t.getAttribute("data-rffx-mode")).toBe("fallback")}},d={args:{preset:"arcade"},globals:{viewport:{value:"mobile"}},render:r=>e.jsx("div",{style:{width:"100%",height:"100%"},children:e.jsx(p,{...r,style:{width:"100%",height:"100%"},children:v})}),parameters:{layout:"fullscreen"}},w={background:"transparent",border:"none",color:"#39ff6a",fontFamily:"ui-monospace, monospace",fontSize:16,cursor:"pointer",padding:0};var T,k,E,R,C;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    preset: "arcade",
    intensity: 1
  },
  play: async ({
    canvasElement
  }) => {
    const root = canvasElement.querySelector("[data-rffx-crt]");
    await expect(root).toBeTruthy();
    const mode = root?.getAttribute("data-rffx-mode");
    // Shader path when WebGL is available, fallback otherwise — both valid.
    await expect(mode).toMatch(/shader|fallback/);
    if (mode === "shader") {
      // Regression guard: the drawing buffer must be sized to the element, not
      // left at the 300x150 canvas default (which happened when the renderer
      // was created after size/settings and never received them → black).
      const canvas = root!.querySelector("canvas") as HTMLCanvasElement;
      const rect = root!.getBoundingClientRect();
      await expect(canvas.width).toBeGreaterThanOrEqual(Math.floor(rect.width) - 2);
      await expect(canvas.height).toBeGreaterThanOrEqual(Math.floor(rect.height) - 2);
    }
  }
}`,...(E=(k=n.parameters)==null?void 0:k.docs)==null?void 0:E.source},description:{story:"Full playground — every control is live.",...(C=(R=n.parameters)==null?void 0:R.docs)==null?void 0:C.description}}};var j,M,O;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    preset: "arcade"
  }
}`,...(O=(M=g.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var B,A,G;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    preset: "consumer"
  }
}`,...(G=(A=u.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var F,N,I;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    preset: "broadcast"
  }
}`,...(I=(N=h.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var W,q,D;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    preset: "green-terminal"
  },
  render: args => <Screen>
      <CRT {...args}>
        <img src="./bios.svg" alt="BIOS boot screen" style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block"
      }} />
      </CRT>
    </Screen>
}`,...(D=(q=l.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var _,L,z;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    preset: "amber-terminal"
  },
  render: GreenTerminal.render
}`,...(z=(L=b.parameters)==null?void 0:L.docs)==null?void 0:z.source}}};var P,U,V;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    preset: "damaged"
  }
}`,...(V=(U=y.parameters)==null?void 0:U.docs)==null?void 0:V.source}}};var H,K,X,Y,J;s.parameters={...s.parameters,docs:{...(H=s.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    preset: "broadcast"
  },
  parameters: {
    docs: {
      description: {
        story: "CRT sampling a live \`<canvas>\` every frame — no video file required."
      }
    }
  },
  render: args => <Screen>
      <CRT {...args}>
        <AnimatedCanvasSource />
      </CRT>
    </Screen>
}`,...(X=(K=s.parameters)==null?void 0:K.docs)==null?void 0:X.source},description:{story:'Animated <canvas> as the shader source — the "live feed" use case.',...(J=(Y=s.parameters)==null?void 0:Y.docs)==null?void 0:J.description}}};var Q,Z,$,ee,re;o.parameters={...o.parameters,docs:{...(Q=o.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    preset: "green-terminal",
    forceFallback: true
  },
  parameters: {
    docs: {
      description: {
        story: "When content isn't a single image/video/canvas, CRT keeps the DOM " + "live and overlays the effect — links, buttons and focus keep working."
      }
    }
  },
  render: args => <Screen>
      <CRT {...args}>
        <div style={{
        padding: 32,
        color: "#39ff6a",
        fontFamily: "ui-monospace, monospace",
        height: "100%",
        boxSizing: "border-box"
      }}>
          <h2 style={{
          marginTop: 0
        }}>MAIN MENU</h2>
          <p>Select an option:</p>
          <p><button type="button" style={termBtn}>▸ NEW GAME</button></p>
          <p><button type="button" style={termBtn}>▸ CONTINUE</button></p>
          <p><a href="#options" style={{
            color: "#8affaf"
          }}>▸ OPTIONS</a></p>
        </div>
      </CRT>
    </Screen>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const btn = canvas.getByRole("button", {
      name: /NEW GAME/i
    });
    await userEvent.click(btn);
    await expect(btn).toBeInTheDocument();
    // Link stays reachable through the overlay.
    await expect(canvas.getByRole("link", {
      name: /OPTIONS/i
    })).toBeVisible();
  }
}`,...($=(Z=o.parameters)==null?void 0:Z.docs)==null?void 0:$.source},description:{story:"Arbitrary interactive DOM → accessible live-DOM overlay path.",...(re=(ee=o.parameters)==null?void 0:ee.docs)==null?void 0:re.description}}};var te,ae,ne,se,oe;c.parameters={...c.parameters,docs:{...(te=c.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    preset: "damaged"
  },
  parameters: {
    reducedMotion: true,
    docs: {
      description: {
        story: "With \`prefers-reduced-motion: reduce\`, animated distortion freezes to a static frame and aberration is clamped."
      }
    }
  }
}`,...(ne=(ae=c.parameters)==null?void 0:ae.docs)==null?void 0:ne.source},description:{story:"Reduced-motion frozen state (toggle the Motion toolbar too).",...(oe=(se=c.parameters)==null?void 0:se.docs)==null?void 0:oe.description}}};var ce,ie,de,le,pe;i.parameters={...i.parameters,docs:{...(ce=i.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    preset: "consumer",
    forceFallback: true
  },
  play: async ({
    canvasElement
  }) => {
    const root = canvasElement.querySelector("[data-rffx-crt]");
    await expect(root?.getAttribute("data-rffx-mode")).toBe("fallback");
  }
}`,...(de=(ie=i.parameters)==null?void 0:ie.docs)==null?void 0:de.source},description:{story:"Force the non-WebGL CSS fallback.",...(pe=(le=i.parameters)==null?void 0:le.docs)==null?void 0:pe.description}}};var me,ge,ue,he,be;d.parameters={...d.parameters,docs:{...(me=d.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    preset: "arcade"
  },
  globals: {
    viewport: {
      value: "mobile"
    }
  },
  render: args => <div style={{
    width: "100%",
    height: "100%"
  }}>
      <CRT {...args} style={{
      width: "100%",
      height: "100%"
    }}>{testCard}</CRT>
    </div>,
  parameters: {
    layout: "fullscreen"
  }
}`,...(ue=(ge=d.parameters)==null?void 0:ge.docs)==null?void 0:ue.source},description:{story:"Responsive — switch the Viewport toolbar to see it reflow.",...(be=(he=d.parameters)==null?void 0:he.docs)==null?void 0:be.description}}};const Se=["Playground","Arcade","Consumer","Broadcast","GreenTerminal","AmberTerminal","Damaged","AnimatedSource","InteractiveDOM","ReducedMotion","WebGLFallback","Responsive"],Ee=Object.freeze(Object.defineProperty({__proto__:null,AmberTerminal:b,AnimatedSource:s,Arcade:g,Broadcast:h,Consumer:u,Damaged:y,GreenTerminal:l,InteractiveDOM:o,Playground:n,ReducedMotion:c,Responsive:d,WebGLFallback:i,__namedExportsOrder:Se,default:xe},Symbol.toStringTag,{value:"Module"}));export{g as A,h as B,Ee as C,y as D,l as G,o as I,c as R,i as W,s as a,u as b,b as c};
