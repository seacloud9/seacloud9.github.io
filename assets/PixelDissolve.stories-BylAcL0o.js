import{j as t,r as y}from"./iframe-ClM0jS1U.js";import{P as u}from"./PixelDissolve-C6eyZXFY.js";const{expect:b,within:X,userEvent:G}=__STORYBOOK_MODULE_TEST__;function h(){return t.jsx("div",{style:{width:340,height:220,borderRadius:14,display:"grid",placeItems:"center",background:"linear-gradient(135deg,#ff2d95,#7ad7ff)",color:"#04060f",fontFamily:"ui-monospace, monospace",fontWeight:800,fontSize:24,textAlign:"center"},children:"RETROFUTURE FX"})}function J(e=2200){const[r,o]=y.useState(!0);return y.useEffect(()=>{const m=setInterval(()=>o(Y=>!Y),e);return()=>clearInterval(m)},[e]),r}const N={title:"Components/Pixel Dissolve",component:u,parameters:{docs:{description:{component:"Dissolve any element into pixels, blocks or noise. Content stays live and accessible in the DOM; an animated CSS mask reveals/hides it. Drive it with the `trigger` boolean."}}},argTypes:{trigger:{control:"boolean",table:{category:"Transition"}},preset:{control:"select",options:["pixelate","shatter","static","wipe","iris"],table:{category:"Look"}},mode:{control:"select",options:["pixels","blocks","noise","horizontal","vertical","radial"],table:{category:"Look"}},pixelSize:{control:{type:"range",min:4,max:80,step:1},table:{category:"Look"}},duration:{control:{type:"range",min:100,max:4e3,step:50},table:{category:"Transition"}},delay:{control:{type:"range",min:0,max:2e3,step:50},table:{category:"Transition"}},randomness:{control:{type:"range",min:0,max:1,step:.05},table:{category:"Look"}},edgeSoftness:{control:{type:"range",min:0,max:1,step:.05},table:{category:"Look"}},direction:{control:"inline-radio",options:["forward","reverse"],table:{category:"Look"}},respectReducedMotion:{control:"boolean",table:{category:"System"}},children:{control:!1,table:{disable:!0}},onReveal:{table:{disable:!0}},onHide:{table:{disable:!0}}},render:e=>t.jsx(u,{...e,children:t.jsx(h,{})})},s={args:{preset:"pixelate",trigger:!0,animateInitial:!0},render:e=>{const[r,o]=y.useState(!0);return t.jsxs("div",{style:{display:"grid",gap:16,justifyItems:"center"},children:[t.jsx(u,{...e,trigger:r,children:t.jsx(h,{})}),t.jsx("button",{type:"button",onClick:()=>o(m=>!m),style:Q,children:r?"Dissolve out":"Dissolve in"})]})},play:async({canvasElement:e})=>{const r=e.querySelector("[data-rffx-dissolve]");await b(r).toBeTruthy();const o=X(e).getByRole("button");await G.click(o),await b(o).toBeInTheDocument()}},g=e=>({args:{preset:e,animateInitial:!0},render:r=>{const o=J();return t.jsx(u,{...r,trigger:o,children:t.jsx(h,{})})}}),n=g("pixelate"),i=g("shatter"),c=g("static"),l=g("wipe"),d=g("iris"),a={args:{preset:"pixelate",trigger:!0},render:e=>t.jsx(u,{...e,children:t.jsxs("div",{style:{padding:24,borderRadius:12,background:"#12141d",color:"#e7ecf5",width:320},children:[t.jsx("h3",{style:{marginTop:0},children:"Product Card"}),t.jsx("p",{children:"Real, selectable text."}),t.jsx("a",{href:"#buy",style:{color:"#00ffe1"},children:"Buy now →"})]})}),play:async({canvasElement:e})=>{await b(X(e).getByRole("link",{name:/Buy now/i})).toBeVisible()}},p={args:{preset:"shatter",trigger:!0,animateInitial:!0},parameters:{reducedMotion:!0}},Q={padding:"8px 16px",borderRadius:8,border:"1px solid #262a3b",background:"#12141d",color:"#00ffe1",fontFamily:"ui-monospace, monospace",cursor:"pointer"};var x,f,v,S,w;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    preset: "pixelate",
    trigger: true,
    animateInitial: true
  },
  render: args => {
    const [shown, setShown] = useState(true);
    return <div style={{
      display: "grid",
      gap: 16,
      justifyItems: "center"
    }}>
        <PixelDissolve {...args} trigger={shown}>
          <DemoCard />
        </PixelDissolve>
        <button type="button" onClick={() => setShown(s => !s)} style={btn}>
          {shown ? "Dissolve out" : "Dissolve in"}
        </button>
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const root = canvasElement.querySelector("[data-rffx-dissolve]");
    await expect(root).toBeTruthy();
    const btn = within(canvasElement).getByRole("button");
    await userEvent.click(btn);
    await expect(btn).toBeInTheDocument();
  }
}`,...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source},description:{story:"Toggle the field or use the button to play the transition.",...(w=(S=s.parameters)==null?void 0:S.docs)==null?void 0:w.description}}};var D,j,R;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:'auto("pixelate")',...(R=(j=n.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};var k,T,B;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:'auto("shatter")',...(B=(T=i.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var I,P,E;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:'auto("static")',...(E=(P=c.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var _,C,O;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:'auto("wipe")',...(O=(C=l.parameters)==null?void 0:C.docs)==null?void 0:O.source}}};var M,L,A;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:'auto("iris")',...(A=(L=d.parameters)==null?void 0:L.docs)==null?void 0:A.source}}};var z,F,W,U,q;a.parameters={...a.parameters,docs:{...(z=a.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    preset: "pixelate",
    trigger: true
  },
  render: args => <PixelDissolve {...args}>
      <div style={{
      padding: 24,
      borderRadius: 12,
      background: "#12141d",
      color: "#e7ecf5",
      width: 320
    }}>
        <h3 style={{
        marginTop: 0
      }}>Product Card</h3>
        <p>Real, selectable text.</p>
        <a href="#buy" style={{
        color: "#00ffe1"
      }}>Buy now →</a>
      </div>
    </PixelDissolve>,
  play: async ({
    canvasElement
  }) => {
    await expect(within(canvasElement).getByRole("link", {
      name: /Buy now/i
    })).toBeVisible();
  }
}`,...(W=(F=a.parameters)==null?void 0:F.docs)==null?void 0:W.source},description:{story:"Arbitrary interactive DOM stays accessible through the dissolve.",...(q=(U=a.parameters)==null?void 0:U.docs)==null?void 0:q.description}}};var V,H,K;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    preset: "shatter",
    trigger: true,
    animateInitial: true
  },
  parameters: {
    reducedMotion: true
  }
}`,...(K=(H=p.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};const Z=["Playground","Pixelate","Shatter","Static","Wipe","Iris","AccessibleContent","ReducedMotion"],te=Object.freeze(Object.defineProperty({__proto__:null,AccessibleContent:a,Iris:d,Pixelate:n,Playground:s,ReducedMotion:p,Shatter:i,Static:c,Wipe:l,__namedExportsOrder:Z,default:N},Symbol.toStringTag,{value:"Module"}));export{a as A,te as D,d as I,n as P,p as R,i as S,l as W,c as a};
