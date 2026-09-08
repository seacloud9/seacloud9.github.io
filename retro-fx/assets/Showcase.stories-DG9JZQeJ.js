import{r as x,j as e}from"./iframe-ClM0jS1U.js";import{A as L}from"./AnimatedCanvasSource-DLMJ84R0.js";import{C as i}from"./CRT-CoXNDUm6.js";import"./preload-helper-C1FmrZbK.js";import"./useDeviceCapabilities-TlijpFiE.js";import"./useReducedMotion-BC0jmgEw.js";import"./math-DUtpe-EO.js";import"./useElementSize-BDiBlEFR.js";import"./useVisibility-CrX1ncah.js";import"./useAnimationFrame-D0dvpe6q.js";function m({before:n,after:o,initial:D=50,ariaLabel:I="Before and after comparison"}){const[a,g]=x.useState(D),h=x.useRef(null),y=t=>{const u=h.current;if(!u)return;const b=u.getBoundingClientRect(),U=(t-b.left)/b.width*100;g(Math.max(0,Math.min(100,U)))};return e.jsxs("div",{ref:h,style:{position:"relative",width:"100%",aspectRatio:"4 / 3",overflow:"hidden",borderRadius:12,userSelect:"none",touchAction:"none",background:"#000"},onPointerMove:t=>t.buttons===1&&y(t.clientX),onPointerDown:t=>y(t.clientX),children:[e.jsx("div",{style:{position:"absolute",inset:0},children:o}),e.jsx("div",{style:{position:"absolute",inset:0,clipPath:`inset(0 ${100-a}% 0 0)`},children:n}),e.jsx("div",{style:{position:"absolute",top:0,bottom:0,left:`${a}%`,width:2,background:"#00ffe1",boxShadow:"0 0 12px #00ffe1",transform:"translateX(-1px)",pointerEvents:"none"}}),e.jsx("div",{style:{position:"absolute",top:"50%",left:`${a}%`,transform:"translate(-50%, -50%)",width:34,height:34,borderRadius:"50%",background:"#0a0b10",border:"2px solid #00ffe1",display:"grid",placeItems:"center",color:"#00ffe1",fontFamily:"ui-monospace, monospace",fontSize:14,pointerEvents:"none"},children:"⟷"}),e.jsx("span",{style:v("left"),children:"RAW"}),e.jsx("span",{style:v("right"),children:"CRT"}),e.jsx("input",{"aria-label":I,type:"range",min:0,max:100,value:a,onChange:t=>g(Number(t.target.value)),style:{position:"absolute",left:12,right:12,bottom:12,width:"calc(100% - 24px)",accentColor:"#ff2d95"}})]})}function v(n){return{position:"absolute",top:12,[n]:12,padding:"4px 10px",borderRadius:6,background:"rgba(10,11,16,0.7)",color:"#e7ecf5",fontFamily:"ui-monospace, monospace",fontSize:12,letterSpacing:1}}try{m.displayName="BeforeAfter",m.__docgenInfo={description:"Draggable before/after comparison slider. `before` shows through on the left,\n`after` (the CRT-wrapped content) is clipped on the right. Keyboard-operable\nvia the range input for accessibility.",displayName:"BeforeAfter",filePath:"/mnt/c/Users/brend/exp/retro-fx/storybook/scenes/BeforeAfter.tsx",methods:[],props:{before:{defaultValue:null,declarations:[{fileName:"storybook/scenes/BeforeAfter.tsx",name:"BeforeAfterProps"}],description:"",name:"before",parent:{fileName:"storybook/scenes/BeforeAfter.tsx",name:"BeforeAfterProps"},required:!0,tags:{},type:{name:"ReactNode"}},after:{defaultValue:null,declarations:[{fileName:"storybook/scenes/BeforeAfter.tsx",name:"BeforeAfterProps"}],description:"",name:"after",parent:{fileName:"storybook/scenes/BeforeAfter.tsx",name:"BeforeAfterProps"},required:!0,tags:{},type:{name:"ReactNode"}},initial:{defaultValue:{value:"50"},declarations:[{fileName:"storybook/scenes/BeforeAfter.tsx",name:"BeforeAfterProps"}],description:"Initial divider position, 0–100.",name:"initial",parent:{fileName:"storybook/scenes/BeforeAfter.tsx",name:"BeforeAfterProps"},required:!1,tags:{},type:{name:"number"}},ariaLabel:{defaultValue:{value:"Before and after comparison"},declarations:[{fileName:"storybook/scenes/BeforeAfter.tsx",name:"BeforeAfterProps"}],description:"",name:"ariaLabel",parent:{fileName:"storybook/scenes/BeforeAfter.tsx",name:"BeforeAfterProps"},required:!1,tags:{},type:{name:"string"}}},tags:{}}}catch{}const{expect:z,within:W}=__STORYBOOK_MODULE_TEST__,ee={title:"Showcase/CRT",parameters:{layout:"fullscreen",docs:{description:{component:"Polished, real-world compositions built with `<CRT>` — the kind of scenes you'd ship on a landing page. Every asset is original SVG or canvas; no binaries, no copyrighted material."}}}},r={width:"100%",height:"100%",objectFit:"cover",display:"block"},f={display:"grid",placeItems:"center",minHeight:"100vh",padding:32,boxSizing:"border-box"},s={render:()=>e.jsx("div",{style:{...f,background:"radial-gradient(120% 120% at 50% 0%, #24122f, #05060a 70%)"},children:e.jsxs("div",{style:{width:"min(92vw, 560px)",padding:28,borderRadius:"28px 28px 40px 40px",background:"linear-gradient(180deg,#2b2f42,#14161f)",boxShadow:"0 40px 80px rgba(0,0,0,.6), inset 0 2px 0 rgba(255,255,255,.08)"},children:[e.jsx("div",{style:{textAlign:"center",color:"#ff2d95",fontFamily:"ui-monospace, monospace",letterSpacing:4,marginBottom:14,fontWeight:700},children:"RETROFUTURE ARCADE"}),e.jsx("div",{style:{borderRadius:16,overflow:"hidden",border:"8px solid #05060a",boxShadow:"inset 0 0 40px #000"},children:e.jsx(i,{preset:"arcade",style:{width:"100%",aspectRatio:"4 / 3"},children:e.jsx("img",{src:"./testcard.svg",alt:"Arcade attract screen",style:r})})}),e.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:14,marginTop:18},children:[e.jsx("span",{style:R})," ",e.jsx("span",{style:R}),e.jsx("span",{style:{color:"#8a93ab",fontFamily:"ui-monospace, monospace",fontSize:12,alignSelf:"center"},children:"INSERT COIN"})]})]})})},l={render:()=>e.jsx("div",{style:{...f,background:"#05060a"},children:e.jsxs("div",{style:{width:"min(92vw, 760px)"},children:[e.jsx("div",{style:{borderRadius:12,overflow:"hidden",border:"1px solid #262a3b"},children:e.jsx(i,{preset:"broadcast",intensity:1,style:{width:"100%",aspectRatio:"16 / 9"},children:e.jsx(L,{width:760,height:428})})}),e.jsxs("div",{style:{marginTop:10,color:"#8a93ab",fontFamily:"ui-monospace, monospace",fontSize:12,display:"flex",justifyContent:"space-between"},children:[e.jsx("span",{children:"▶ PLAY · SP"}),e.jsx("span",{children:"CH 03 · 00:14:22"})]})]})})},d={render:()=>e.jsx("div",{style:{...f,background:"#02140a"},children:e.jsx("div",{style:{width:"min(92vw, 720px)",borderRadius:14,overflow:"hidden",boxShadow:"0 0 60px rgba(57,255,106,.15)"},children:e.jsx(i,{preset:"green-terminal",style:{width:"100%",aspectRatio:"4 / 3"},children:e.jsx("img",{src:"./bios.svg",alt:"System boot screen",style:r})})})})},c={render:()=>e.jsx("div",{style:{...f,background:"#05060a"},children:e.jsxs("div",{style:{width:"min(92vw, 640px)"},children:[e.jsx(m,{before:e.jsx("img",{src:"./testcard.svg",alt:"Original, no effect",style:r}),after:e.jsx(i,{preset:"arcade",style:{width:"100%",height:"100%"},children:e.jsx("img",{src:"./testcard.svg",alt:"With RetroFuture CRT",style:r})})}),e.jsxs("p",{style:{color:"#8a93ab",fontFamily:"ui-monospace, monospace",fontSize:13,textAlign:"center"},children:["Drag the divider — ",e.jsx("strong",{style:{color:"#00ffe1"},children:"RAW"})," vs"," ",e.jsx("strong",{style:{color:"#00ffe1"},children:"CRT"})]})]})}),play:async({canvasElement:n})=>{const o=W(n).getByRole("slider",{name:/comparison/i});await z(o).toBeInTheDocument()}},p={name:"Landing Hero",render:()=>e.jsxs("section",{style:{position:"relative",minHeight:"100vh",overflow:"hidden",background:"#05060a"},children:[e.jsx("div",{style:{position:"absolute",inset:0},children:e.jsx(i,{preset:"consumer",intensity:.8,style:{width:"100%",height:"100%"},children:e.jsx("img",{src:"./testcard.svg",alt:"",style:r})})}),e.jsx("div",{style:{position:"absolute",inset:0,background:"linear-gradient(90deg, rgba(5,6,10,.9), rgba(5,6,10,.35))"}}),e.jsxs("div",{style:{position:"relative",maxWidth:620,padding:"12vh 6vw",color:"#e7ecf5"},children:[e.jsx("p",{style:{color:"#00ffe1",fontFamily:"ui-monospace, monospace",letterSpacing:3,margin:0},children:"RETROFUTURE FX"}),e.jsx("h1",{style:{fontSize:"clamp(32px, 6vw, 64px)",lineHeight:1.05,margin:"12px 0 16px"},children:"Your product page can look like this."}),e.jsx("p",{style:{color:"#b7c0d6",fontSize:18,maxWidth:460},children:"One React component turns any image or video into an authentic CRT — with reduced-motion support and a graceful fallback baked in."}),e.jsx("a",{href:"#buy",style:V,children:"Get the CRT component →"})]})]}),play:async({canvasElement:n})=>{const o=W(n).getByRole("link",{name:/Get the CRT component/i});await z(o).toBeVisible()}},R={width:18,height:18,borderRadius:"50%",background:"radial-gradient(circle at 35% 35%, #ffe27a, #b8860b)"},V={display:"inline-block",marginTop:8,padding:"14px 22px",borderRadius:10,background:"#00ffe1",color:"#05060a",fontWeight:800,textDecoration:"none"};var w,j,S;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div style={{
    ...center,
    background: "radial-gradient(120% 120% at 50% 0%, #24122f, #05060a 70%)"
  }}>
      <div style={{
      width: "min(92vw, 560px)",
      padding: 28,
      borderRadius: "28px 28px 40px 40px",
      background: "linear-gradient(180deg,#2b2f42,#14161f)",
      boxShadow: "0 40px 80px rgba(0,0,0,.6), inset 0 2px 0 rgba(255,255,255,.08)"
    }}>
        <div style={{
        textAlign: "center",
        color: "#ff2d95",
        fontFamily: "ui-monospace, monospace",
        letterSpacing: 4,
        marginBottom: 14,
        fontWeight: 700
      }}>
          RETROFUTURE ARCADE
        </div>
        <div style={{
        borderRadius: 16,
        overflow: "hidden",
        border: "8px solid #05060a",
        boxShadow: "inset 0 0 40px #000"
      }}>
          <CRT preset="arcade" style={{
          width: "100%",
          aspectRatio: "4 / 3"
        }}>
            <img src="./testcard.svg" alt="Arcade attract screen" style={fill} />
          </CRT>
        </div>
        <div style={{
        display: "flex",
        justifyContent: "center",
        gap: 14,
        marginTop: 18
      }}>
          <span style={coin} /> <span style={coin} />
          <span style={{
          color: "#8a93ab",
          fontFamily: "ui-monospace, monospace",
          fontSize: 12,
          alignSelf: "center"
        }}>INSERT COIN</span>
        </div>
      </div>
    </div>
}`,...(S=(j=s.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var T,k,A;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    ...center,
    background: "#05060a"
  }}>
      <div style={{
      width: "min(92vw, 760px)"
    }}>
        <div style={{
        borderRadius: 12,
        overflow: "hidden",
        border: "1px solid #262a3b"
      }}>
          <CRT preset="broadcast" intensity={1} style={{
          width: "100%",
          aspectRatio: "16 / 9"
        }}>
            <AnimatedCanvasSource width={760} height={428} />
          </CRT>
        </div>
        <div style={{
        marginTop: 10,
        color: "#8a93ab",
        fontFamily: "ui-monospace, monospace",
        fontSize: 12,
        display: "flex",
        justifyContent: "space-between"
      }}>
          <span>▶ PLAY · SP</span><span>CH 03 · 00:14:22</span>
        </div>
      </div>
    </div>
}`,...(A=(k=l.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var C,B,E;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    ...center,
    background: "#02140a"
  }}>
      <div style={{
      width: "min(92vw, 720px)",
      borderRadius: 14,
      overflow: "hidden",
      boxShadow: "0 0 60px rgba(57,255,106,.15)"
    }}>
        <CRT preset="green-terminal" style={{
        width: "100%",
        aspectRatio: "4 / 3"
      }}>
          <img src="./bios.svg" alt="System boot screen" style={fill} />
        </CRT>
      </div>
    </div>
}`,...(E=(B=d.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var F,P,N;c.parameters={...c.parameters,docs:{...(F=c.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    ...center,
    background: "#05060a"
  }}>
      <div style={{
      width: "min(92vw, 640px)"
    }}>
        <BeforeAfter before={<img src="./testcard.svg" alt="Original, no effect" style={fill} />} after={<CRT preset="arcade" style={{
        width: "100%",
        height: "100%"
      }}>
              <img src="./testcard.svg" alt="With RetroFuture CRT" style={fill} />
            </CRT>} />
        <p style={{
        color: "#8a93ab",
        fontFamily: "ui-monospace, monospace",
        fontSize: 13,
        textAlign: "center"
      }}>
          Drag the divider — <strong style={{
          color: "#00ffe1"
        }}>RAW</strong> vs{" "}
          <strong style={{
          color: "#00ffe1"
        }}>CRT</strong>
        </p>
      </div>
    </div>,
  play: async ({
    canvasElement
  }) => {
    const slider = within(canvasElement).getByRole("slider", {
      name: /comparison/i
    });
    await expect(slider).toBeInTheDocument();
  }
}`,...(N=(P=c.parameters)==null?void 0:P.docs)==null?void 0:N.source}}};var _,H,O;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: "Landing Hero",
  render: () => <section style={{
    position: "relative",
    minHeight: "100vh",
    overflow: "hidden",
    background: "#05060a"
  }}>
      <div style={{
      position: "absolute",
      inset: 0
    }}>
        <CRT preset="consumer" intensity={0.8} style={{
        width: "100%",
        height: "100%"
      }}>
          <img src="./testcard.svg" alt="" style={fill} />
        </CRT>
      </div>
      <div style={{
      position: "absolute",
      inset: 0,
      background: "linear-gradient(90deg, rgba(5,6,10,.9), rgba(5,6,10,.35))"
    }} />
      <div style={{
      position: "relative",
      maxWidth: 620,
      padding: "12vh 6vw",
      color: "#e7ecf5"
    }}>
        <p style={{
        color: "#00ffe1",
        fontFamily: "ui-monospace, monospace",
        letterSpacing: 3,
        margin: 0
      }}>RETROFUTURE FX</p>
        <h1 style={{
        fontSize: "clamp(32px, 6vw, 64px)",
        lineHeight: 1.05,
        margin: "12px 0 16px"
      }}>
          Your product page can look like&nbsp;this.
        </h1>
        <p style={{
        color: "#b7c0d6",
        fontSize: 18,
        maxWidth: 460
      }}>
          One React component turns any image or video into an authentic CRT — with
          reduced-motion support and a graceful fallback baked in.
        </p>
        <a href="#buy" style={cta}>Get the CRT component →</a>
      </div>
    </section>,
  play: async ({
    canvasElement
  }) => {
    // Foreground content stays fully accessible above the effect.
    const link = within(canvasElement).getByRole("link", {
      name: /Get the CRT component/i
    });
    await expect(link).toBeVisible();
  }
}`,...(O=(H=p.parameters)==null?void 0:H.docs)==null?void 0:O.source}}};const ne=["ArcadeCabinetHero","VHSBroadcastPlayer","TerminalBoot","BeforeAfterSlider","LandingHero"];export{s as ArcadeCabinetHero,c as BeforeAfterSlider,p as LandingHero,d as TerminalBoot,l as VHSBroadcastPlayer,ne as __namedExportsOrder,ee as default};
