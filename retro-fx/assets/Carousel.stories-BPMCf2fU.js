import{j as e,r as v}from"./iframe-ClM0jS1U.js";import{C as y}from"./Carousel-BjYZ3aHz.js";import{C as ee}from"./CRT-CoXNDUm6.js";const{expect:h,within:V,userEvent:X}=__STORYBOOK_MODULE_TEST__,c=["#ff2d95","#00ffe1","#ffd23f","#7ad7ff","#b592ff","#57ff9a"];function Z({i:r}){return e.jsx("div",{style:{width:220,height:300,borderRadius:16,background:`linear-gradient(160deg, ${c[r%c.length]}, #05060a)`,display:"grid",placeItems:"center",color:"#fff",fontFamily:"ui-monospace, monospace",fontSize:40,fontWeight:800,boxShadow:"0 20px 50px rgba(0,0,0,0.5)"},children:r+1})}const re={title:"Components/Carousel",component:y,parameters:{layout:"fullscreen",docs:{description:{component:"A 3D carousel (cover flow / circular / arc / stack / flat) for any React children, with drag, wheel, keyboard, momentum, snap, loop, auto-play and pointer tilt. Compose it with CRT / PS1 / Dissolve cards."}}},argTypes:{preset:{control:"select",options:["coverflow","flat","circular","arc","stack"],table:{category:"Look"}},spacing:{control:{type:"range",min:40,max:600,step:5},table:{category:"Layout"}},rotation:{control:{type:"range",min:0,max:90,step:1},table:{category:"Layout"}},depth:{control:{type:"range",min:0,max:600,step:5},table:{category:"Layout"}},scale:{control:{type:"range",min:.6,max:1.4,step:.02},table:{category:"Layout"}},perspective:{control:{type:"range",min:400,max:3e3,step:50},table:{category:"Layout"}},tilt:{control:{type:"range",min:0,max:20,step:1},table:{category:"Motion"}},autoPlay:{control:{type:"range",min:0,max:6e3,step:100},table:{category:"Motion"}},dragSensitivity:{control:{type:"range",min:.2,max:3,step:.1},table:{category:"Motion"}},loop:{control:"boolean",table:{category:"Behavior"}},snap:{control:"boolean",table:{category:"Behavior"}},reflections:{control:"boolean",table:{category:"Look"}},respectReducedMotion:{control:"boolean",table:{category:"System"}},children:{control:!1,table:{disable:!0}},onChange:{table:{disable:!0}}},args:{preset:"coverflow"},render:r=>e.jsx("div",{style:{padding:"40px 0",display:"grid",placeItems:"center",minHeight:"70vh"},children:e.jsx("div",{style:{width:"min(96vw, 980px)"},children:e.jsx(y,{...r,children:c.map((t,n)=>e.jsx(Z,{i:n},n))})})})},i={args:{preset:"coverflow",reflections:!0},play:async({canvasElement:r})=>{const t=V(r).getByRole("group");await h(t).toHaveAttribute("aria-roledescription","carousel"),t.focus(),await X.keyboard("{ArrowRight}"),await h(t).toBeInTheDocument()}},l={args:{preset:"coverflow",reflections:!0}},p={args:{preset:"circular"}},d={args:{preset:"arc"}},u={args:{preset:"stack"}},m={args:{preset:"flat"}},o={render:r=>e.jsx("div",{style:{padding:"40px 0",display:"grid",placeItems:"center",minHeight:"70vh"},children:e.jsx("div",{style:{width:"min(96vw, 980px)"},children:e.jsx(y,{...r,preset:"coverflow",reflections:!0,children:c.slice(0,5).map((t,n)=>e.jsx("div",{style:{width:240,height:300,borderRadius:14,overflow:"hidden"},children:e.jsx(ee,{preset:"arcade",style:{width:"100%",height:"100%"},children:e.jsx("div",{style:{width:"100%",height:"100%",background:`linear-gradient(160deg, ${t}, #05060a)`,display:"grid",placeItems:"center",color:"#fff",fontFamily:"ui-monospace, monospace",fontSize:34,fontWeight:800},children:n+1})})},n))})})})},s={render:()=>{const r=v.useRef(null),[t,n]=v.useState(0);return e.jsxs("div",{style:{padding:"24px 0",display:"grid",placeItems:"center",gap:16,minHeight:"70vh"},children:[e.jsxs("div",{style:{display:"flex",gap:10,alignItems:"center",color:"#e7ecf5",fontFamily:"ui-monospace, monospace"},children:[e.jsx("button",{type:"button",onClick:()=>{var a;return(a=r.current)==null?void 0:a.prev()},style:x,children:"◀"}),e.jsxs("span",{children:[t+1," / ",c.length]}),e.jsx("button",{type:"button",onClick:()=>{var a;return(a=r.current)==null?void 0:a.next()},style:x,children:"▶"})]}),e.jsx("div",{style:{width:"min(96vw, 980px)"},children:e.jsx(y,{ref:r,preset:"circular",onChange:n,children:c.map((a,f)=>e.jsx(Z,{i:f},f))})})]})},play:async({canvasElement:r})=>{const t=V(r).getByRole("button",{name:"▶"});await X.click(t),await h(t).toBeInTheDocument()}},g={args:{preset:"coverflow",autoPlay:1500},parameters:{reducedMotion:!0}},x={padding:"6px 14px",borderRadius:8,border:"1px solid #262a3b",background:"#12141d",color:"#00ffe1",fontFamily:"ui-monospace, monospace",cursor:"pointer"};var b,w,C;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    preset: "coverflow",
    reflections: true
  },
  play: async ({
    canvasElement
  }) => {
    const group = within(canvasElement).getByRole("group");
    await expect(group).toHaveAttribute("aria-roledescription", "carousel");
    group.focus();
    await userEvent.keyboard("{ArrowRight}");
    await expect(group).toBeInTheDocument();
  }
}`,...(C=(w=i.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var R,S,j;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    preset: "coverflow",
    reflections: true
  }
}`,...(j=(S=l.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var k,I,T;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    preset: "circular"
  }
}`,...(T=(I=p.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var O,_,E;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    preset: "arc"
  }
}`,...(E=(_=d.parameters)==null?void 0:_.docs)==null?void 0:E.source}}};var L,B,F;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    preset: "stack"
  }
}`,...(F=(B=u.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var M,A,H;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    preset: "flat"
  }
}`,...(H=(A=m.parameters)==null?void 0:A.docs)==null?void 0:H.source}}};var D,P,z,W,$;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <div style={{
    padding: "40px 0",
    display: "grid",
    placeItems: "center",
    minHeight: "70vh"
  }}>
      <div style={{
      width: "min(96vw, 980px)"
    }}>
        <Carousel {...args} preset="coverflow" reflections>
          {COLORS.slice(0, 5).map((c, i) => <div key={i} style={{
          width: 240,
          height: 300,
          borderRadius: 14,
          overflow: "hidden"
        }}>
              <CRT preset="arcade" style={{
            width: "100%",
            height: "100%"
          }}>
                <div style={{
              width: "100%",
              height: "100%",
              background: \`linear-gradient(160deg, \${c}, #05060a)\`,
              display: "grid",
              placeItems: "center",
              color: "#fff",
              fontFamily: "ui-monospace, monospace",
              fontSize: 34,
              fontWeight: 800
            }}>
                  {i + 1}
                </div>
              </CRT>
            </div>)}
        </Carousel>
      </div>
    </div>
}`,...(z=(P=o.parameters)==null?void 0:P.docs)==null?void 0:z.source},description:{story:"Composition: CRT-wrapped cards inside the carousel.",...($=(W=o.parameters)==null?void 0:W.docs)==null?void 0:$.description}}};var K,U,Y,q,G;s.parameters={...s.parameters,docs:{...(K=s.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const car = useRef<CarouselHandle>(null);
    const [index, setIndex] = useState(0);
    return <div style={{
      padding: "24px 0",
      display: "grid",
      placeItems: "center",
      gap: 16,
      minHeight: "70vh"
    }}>
        <div style={{
        display: "flex",
        gap: 10,
        alignItems: "center",
        color: "#e7ecf5",
        fontFamily: "ui-monospace, monospace"
      }}>
          <button type="button" onClick={() => car.current?.prev()} style={btn}>◀</button>
          <span>{index + 1} / {COLORS.length}</span>
          <button type="button" onClick={() => car.current?.next()} style={btn}>▶</button>
        </div>
        <div style={{
        width: "min(96vw, 980px)"
      }}>
          <Carousel ref={car} preset="circular" onChange={setIndex}>
            {COLORS.map((_, i) => <ColorCard key={i} i={i} />)}
          </Carousel>
        </div>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const next = within(canvasElement).getByRole("button", {
      name: "▶"
    });
    await userEvent.click(next);
    await expect(next).toBeInTheDocument();
  }
}`,...(Y=(U=s.parameters)==null?void 0:U.docs)==null?void 0:Y.source},description:{story:"External buttons via the imperative handle.",...(G=(q=s.parameters)==null?void 0:q.docs)==null?void 0:G.description}}};var J,N,Q;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    preset: "coverflow",
    autoPlay: 1500
  },
  parameters: {
    reducedMotion: true
  }
}`,...(Q=(N=g.parameters)==null?void 0:N.docs)==null?void 0:Q.source}}};const te=["Playground","CoverFlow","Circular","Arc","Stack","Flat","CRTCards","Imperative","ReducedMotion"],se=Object.freeze(Object.defineProperty({__proto__:null,Arc:d,CRTCards:o,Circular:p,CoverFlow:l,Flat:m,Imperative:s,Playground:i,ReducedMotion:g,Stack:u,__namedExportsOrder:te,default:re},Symbol.toStringTag,{value:"Module"}));export{d as A,se as C,s as I,g as R,u as S,l as a,p as b,o as c};
