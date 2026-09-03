import{r as u,j as r}from"./iframe-ClM0jS1U.js";import{B as m}from"./BootScreen-C3vmqLBN.js";const{expect:y,within:f}=__STORYBOOK_MODULE_TEST__;function q({children:e}){return r.jsx("div",{style:{position:"relative",width:"min(92vw, 720px)",height:440,borderRadius:12,overflow:"hidden",border:"1px solid #262a3b"},children:e})}const V={title:"Components/Boot Screen",component:m,parameters:{docs:{description:{component:"A retro loading / BIOS-boot overlay: types a boot log, fills a progress bar, optional CRT scanlines, then fades out when done. Drive it with a controlled `progress`, a `duration`, or an `until` promise."}}},argTypes:{preset:{control:"select",options:["green","amber","dos","cyberpunk","sci-fi"],table:{category:"Look"}},typingSpeed:{control:{type:"range",min:20,max:400,step:10},table:{category:"Typing"}},crt:{control:"boolean",table:{category:"Look"}},showProgress:{control:"boolean",table:{category:"Look"}},label:{control:"text",table:{category:"Look"}},respectReducedMotion:{control:"boolean",table:{category:"System"}},progress:{table:{disable:!0}},until:{table:{disable:!0}},onComplete:{table:{disable:!0}},lines:{table:{disable:!0}},title:{table:{disable:!0}}},args:{preset:"green",progress:.72,inline:!0,title:"RETROFUTURE FX"},render:e=>r.jsx(q,{children:r.jsx(m,{...e})})},t={play:async({canvasElement:e})=>{const l=f(e).getByRole("status");await y(l).toHaveAttribute("data-rffx-boot"),await y(f(e).getByText("72%")).toBeInTheDocument()}},s={args:{preset:"green"}},n={args:{preset:"amber"}},a={args:{preset:"dos"}},c={args:{preset:"cyberpunk"}},i={args:{preset:"sci-fi"}},o={render:e=>{const[l,J]=u.useState(0),[g,b]=u.useState(!1);return r.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"center"},children:[r.jsxs(q,{children:[!g&&u.createElement(m,{...e,key:l,progress:void 0,duration:3e3,inline:!0,onComplete:()=>b(!0)}),g&&r.jsx("div",{style:{position:"absolute",inset:0,display:"grid",placeItems:"center",color:"#39ff6a",fontFamily:"ui-monospace, monospace",background:"#02140a"},children:"✔ SYSTEM ONLINE"})]}),r.jsx("button",{type:"button",onClick:()=>{b(!1),J(Q=>Q+1)},style:{padding:"6px 14px",borderRadius:8,border:"1px solid #262a3b",background:"#12141d",color:"#00ffe1",fontFamily:"ui-monospace, monospace",cursor:"pointer"},children:"Replay boot"})]})}},p={args:{preset:"dos",crt:!1}},d={args:{preset:"cyberpunk"},parameters:{reducedMotion:!0}};var S,x,T;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const el = within(canvasElement).getByRole("status");
    await expect(el).toHaveAttribute("data-rffx-boot");
    await expect(within(canvasElement).getByText("72%")).toBeInTheDocument();
  }
}`,...(T=(x=t.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var v,k,R;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    preset: "green"
  }
}`,...(R=(k=s.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var h,B,E;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    preset: "amber"
  }
}`,...(E=(B=n.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var j,w,O;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    preset: "dos"
  }
}`,...(O=(w=a.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var C,_,D;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    preset: "cyberpunk"
  }
}`,...(D=(_=c.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var I,M,N;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    preset: "sci-fi"
  }
}`,...(N=(M=i.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};var F,L,A,P,G;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args => {
    const [n, setN] = useState(0);
    const [done, setDone] = useState(false);
    return <div style={{
      display: "grid",
      gap: 12,
      justifyItems: "center"
    }}>
        <Stage>
          {!done && <BootScreen {...args} key={n} progress={undefined} duration={3000} inline onComplete={() => setDone(true)} />}
          {done && <div style={{
          position: "absolute",
          inset: 0,
          display: "grid",
          placeItems: "center",
          color: "#39ff6a",
          fontFamily: "ui-monospace, monospace",
          background: "#02140a"
        }}>
              ✔ SYSTEM ONLINE
            </div>}
        </Stage>
        <button type="button" onClick={() => {
        setDone(false);
        setN(v => v + 1);
      }} style={{
        padding: "6px 14px",
        borderRadius: 8,
        border: "1px solid #262a3b",
        background: "#12141d",
        color: "#00ffe1",
        fontFamily: "ui-monospace, monospace",
        cursor: "pointer"
      }}>
          Replay boot
        </button>
      </div>;
  }
}`,...(A=(L=o.parameters)==null?void 0:L.docs)==null?void 0:A.source},description:{story:"Timed run — types, fills, fades out; press replay.",...(G=(P=o.parameters)==null?void 0:P.docs)==null?void 0:G.description}}};var U,Y,H;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    preset: "dos",
    crt: false
  }
}`,...(H=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:H.source}}};var z,K,X;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    preset: "cyberpunk"
  },
  parameters: {
    reducedMotion: true
  }
}`,...(X=(K=d.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};const W=["Playground","Green","Amber","DOS","Cyberpunk","SciFi","Timed","NoCRT","ReducedMotion"],ee=Object.freeze(Object.defineProperty({__proto__:null,Amber:n,Cyberpunk:c,DOS:a,Green:s,NoCRT:p,Playground:t,ReducedMotion:d,SciFi:i,Timed:o,__namedExportsOrder:W,default:V},Symbol.toStringTag,{value:"Module"}));export{n as A,ee as B,c as C,s as G,d as R,o as T};
