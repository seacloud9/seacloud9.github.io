import{r as g,j as s}from"./iframe-ClM0jS1U.js";import{G as m}from"./Glitch-G6pVHfvy.js";const{expect:u,within:X}=__STORYBOOK_MODULE_TEST__;function J({children:e}){return s.jsx("div",{style:{width:"min(90vw, 560px)"},children:e})}const Z={title:"Components/Glitch",component:m,parameters:{docs:{description:{component:"An RGB-split + torn-slice glitch for images — on hover, continuously, or as a one-shot reveal. Channel-isolated copies are screened back together, so it's the clean image at rest and chromatically tears when glitching. Pairs with the CRT component."}}},argTypes:{preset:{control:"select",options:["rgb","slice","digital","vhs","subtle"],table:{category:"Look"}},mode:{control:"inline-radio",options:["hover","always","reveal"],table:{category:"Behavior"}},intensity:{control:{type:"range",min:0,max:1,step:.05},table:{category:"Look"}},split:{control:{type:"range",min:0,max:40,step:1},table:{category:"Look"}},slices:{control:{type:"range",min:0,max:12,step:1},table:{category:"Look"}},scanlines:{control:{type:"range",min:0,max:1,step:.05},table:{category:"Look"}},speed:{control:{type:"range",min:1,max:30,step:1},table:{category:"Motion"}},respectReducedMotion:{control:"boolean",table:{category:"System"}},src:{control:!1,table:{disable:!0}},trigger:{table:{disable:!0}},onRevealComplete:{table:{disable:!0}}},args:{src:"./testcard.svg",alt:"RetroFuture test card",preset:"rgb",mode:"always"},render:e=>s.jsx(J,{children:s.jsx(m,{...e})})},r={args:{mode:"always",preset:"rgb"},play:async({canvasElement:e})=>{const d=e.querySelector("[data-rffx-glitch]");await u(d).toBeTruthy(),await u(X(e).getByAltText("RetroFuture test card")).toBeInTheDocument()}},o={args:{preset:"rgb",mode:"always"}},n={args:{preset:"slice",mode:"always"}},c={args:{preset:"digital",mode:"always"}},i={args:{preset:"vhs",mode:"always"}},l={args:{preset:"subtle",mode:"always"}},t={args:{preset:"rgb",mode:"hover"}},a={render:e=>{const[d,Q]=g.useState(0);return s.jsxs("div",{style:{display:"grid",gap:12,justifyItems:"center"},children:[s.jsx(J,{children:g.createElement(m,{...e,key:d,mode:"reveal",trigger:!0,preset:"digital",revealDuration:1100})}),s.jsx("button",{type:"button",onClick:()=>Q(W=>W+1),style:{padding:"6px 14px",borderRadius:8,border:"1px solid #262a3b",background:"#12141d",color:"#00ffe1",fontFamily:"ui-monospace, monospace",cursor:"pointer"},children:"Replay reveal"})]})}},p={args:{preset:"digital",mode:"always"},parameters:{reducedMotion:!0}};var y,b,h,v,x;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    mode: "always",
    preset: "rgb"
  },
  play: async ({
    canvasElement
  }) => {
    const root = canvasElement.querySelector("[data-rffx-glitch]");
    await expect(root).toBeTruthy();
    await expect(within(canvasElement).getByAltText("RetroFuture test card")).toBeInTheDocument();
  }
}`,...(h=(b=r.parameters)==null?void 0:b.docs)==null?void 0:h.source},description:{story:"Continuous glitch so the effect is visible without hovering.",...(x=(v=r.parameters)==null?void 0:v.docs)==null?void 0:x.description}}};var w,S,f;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    preset: "rgb",
    mode: "always"
  }
}`,...(f=(S=o.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var R,k,j;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    preset: "slice",
    mode: "always"
  }
}`,...(j=(k=n.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var T,_,B;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    preset: "digital",
    mode: "always"
  }
}`,...(B=(_=c.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var O,G,E;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    preset: "vhs",
    mode: "always"
  }
}`,...(E=(G=i.parameters)==null?void 0:G.docs)==null?void 0:E.source}}};var F,M,C;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    preset: "subtle",
    mode: "always"
  }
}`,...(C=(M=l.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var D,L,H,I,P;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    preset: "rgb",
    mode: "hover"
  }
}`,...(H=(L=t.parameters)==null?void 0:L.docs)==null?void 0:H.source},description:{story:"Hover to glitch — clean at rest.",...(P=(I=t.parameters)==null?void 0:I.docs)==null?void 0:P.description}}};var A,N,V,q,z;a.parameters={...a.parameters,docs:{...(A=a.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => {
    const [n, setN] = useState(0);
    return <div style={{
      display: "grid",
      gap: 12,
      justifyItems: "center"
    }}>
        <Frame>
          <Glitch {...args} key={n} mode="reveal" trigger preset="digital" revealDuration={1100} />
        </Frame>
        <button type="button" onClick={() => setN(v => v + 1)} style={{
        padding: "6px 14px",
        borderRadius: 8,
        border: "1px solid #262a3b",
        background: "#12141d",
        color: "#00ffe1",
        fontFamily: "ui-monospace, monospace",
        cursor: "pointer"
      }}>
          Replay reveal
        </button>
      </div>;
  }
}`,...(V=(N=a.parameters)==null?void 0:N.docs)==null?void 0:V.source},description:{story:"One-shot reveal: click to replay the glitch-in.",...(z=(q=a.parameters)==null?void 0:q.docs)==null?void 0:z.description}}};var K,U,Y;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    preset: "digital",
    mode: "always"
  },
  parameters: {
    reducedMotion: true
  }
}`,...(Y=(U=p.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};const $=["Playground","RGB","Slice","Digital","VHS","Subtle","OnHover","Reveal","ReducedMotion"],te=Object.freeze(Object.defineProperty({__proto__:null,Digital:c,OnHover:t,Playground:r,RGB:o,ReducedMotion:p,Reveal:a,Slice:n,Subtle:l,VHS:i,__namedExportsOrder:$,default:Z},Symbol.toStringTag,{value:"Module"}));export{te as G,o as R,n as S,i as V,a,p as b};
