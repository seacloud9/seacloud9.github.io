import{j as e,r as ce}from"./iframe-ClM0jS1U.js";import{R as b}from"./RetroTerminal-C7VcRT2m.js";const{expect:h,within:x,userEvent:ie}=__STORYBOOK_MODULE_TEST__,se={about:{description:"About this demo",run:()=>"RetroFuture FX — Retro Terminal."},projects:{description:"List projects",run:()=>["- CRT","- Hyperspace","- Pixel Dissolve","- Retro Terminal"]},contact:()=>e.jsxs("span",{children:["email: ",e.jsx("a",{href:"#mail",style:{color:"inherit",textDecoration:"underline"},children:"hi@example.com"})]})},pe={title:"Components/Retro Terminal",component:b,parameters:{docs:{description:{component:"A customizable terminal UI: typing, boot sequence, a command registry with history, and an optional CRT scanline mode (reusing the CRT component). Seven presets — not hard-coded to one look."}}},argTypes:{preset:{control:"select",options:["dos","unix","cyberpunk","amber-mainframe","green-phosphor","bbs","sci-fi"],table:{category:"Look"}},typingSpeed:{control:{type:"range",min:10,max:400,step:5},table:{category:"Typing"}},cursor:{control:"inline-radio",options:["block","underline","bar"],table:{category:"Look"}},crt:{control:"boolean",table:{category:"Look"}},readOnly:{control:"boolean",table:{category:"Mode"}},respectReducedMotion:{control:"boolean",table:{category:"System"}},height:{control:{type:"range",min:200,max:640,step:10},table:{category:"Layout"}},commands:{control:!1,table:{disable:!0}},banner:{control:!1,table:{disable:!0}},onCommand:{table:{disable:!0}},onType:{table:{disable:!0}}},args:{preset:"green-phosphor",typingSpeed:120,height:420},render:r=>e.jsx("div",{style:{width:"min(92vw, 720px)"},children:e.jsx(b,{...r,commands:se,welcome:"Type 'help' to begin."})})},o={play:async({canvasElement:r})=>{const n=x(r);await h(r.querySelector("[data-rffx-terminal]")).toBeTruthy(),await h(await n.findByLabelText("Terminal input",void 0,{timeout:8e3})).toBeInTheDocument()}},i={args:{preset:"green-phosphor"}},p={args:{preset:"amber-mainframe"}},m={args:{preset:"dos"}},d={args:{preset:"cyberpunk"}},l={args:{preset:"bbs"}},u={args:{preset:"sci-fi"}},a={args:{preset:"green-phosphor",crt:!0}},s={args:{preset:"amber-mainframe",crt:"amber-terminal",readOnly:!0,typingSpeed:80,height:300},render:r=>e.jsx("div",{style:{width:"min(92vw, 720px)"},children:e.jsx(b,{...r,boot:["INITIALIZING...","LOADING KERNEL ... OK","MOUNTING /fx ... OK",""],welcome:"RETROFUTURE FX — ONLINE"})})},c={render:r=>{const n=ce.useRef(null);return e.jsxs("div",{style:{width:"min(92vw, 720px)",display:"grid",gap:10},children:[e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx("button",{type:"button",onClick:()=>{var t;return(t=n.current)==null?void 0:t.run("help")},style:g,children:"run help"}),e.jsx("button",{type:"button",onClick:()=>{var t;return(t=n.current)==null?void 0:t.print("injected ✨")},style:g,children:"print"}),e.jsx("button",{type:"button",onClick:()=>{var t;return(t=n.current)==null?void 0:t.clear()},style:g,children:"clear"})]}),e.jsx(b,{...r,ref:n,commands:se,welcome:"ready."})]})},play:async({canvasElement:r})=>{await ie.click(x(r).getByRole("button",{name:"run help"})),await h(await x(r).findByText(/Available commands/,void 0,{timeout:8e3})).toBeInTheDocument()}},y={args:{preset:"cyberpunk"},parameters:{reducedMotion:!0}},g={padding:"6px 12px",borderRadius:8,border:"1px solid #262a3b",background:"#12141d",color:"#00ffe1",fontFamily:"ui-monospace, monospace",cursor:"pointer"};var T,f,v,R,w;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvasElement.querySelector("[data-rffx-terminal]")).toBeTruthy();
    // The input appears once the boot sequence finishes typing. (Command entry
    // is covered by unit tests and the Imperative story below.)
    await expect(await canvas.findByLabelText("Terminal input", undefined, {
      timeout: 8000
    })).toBeInTheDocument();
  }
}`,...(v=(f=o.parameters)==null?void 0:f.docs)==null?void 0:v.source},description:{story:"Interactive — type `help`, `about`, `projects`, `contact`.",...(w=(R=o.parameters)==null?void 0:R.docs)==null?void 0:w.description}}};var S,I,O;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    preset: "green-phosphor"
  }
}`,...(O=(I=i.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};var j,k,E;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    preset: "amber-mainframe"
  }
}`,...(E=(k=p.parameters)==null?void 0:k.docs)==null?void 0:E.source}}};var B,C,L;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    preset: "dos"
  }
}`,...(L=(C=m.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var N,M,D;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    preset: "cyberpunk"
  }
}`,...(D=(M=d.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var _,A,F;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    preset: "bbs"
  }
}`,...(F=(A=l.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var G,U,K;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    preset: "sci-fi"
  }
}`,...(K=(U=u.parameters)==null?void 0:U.docs)==null?void 0:K.source}}};var P,q,H,X,z;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    preset: "green-phosphor",
    crt: true
  }
}`,...(H=(q=a.parameters)==null?void 0:q.docs)==null?void 0:H.source},description:{story:"CRT scanline mode (reuses @retrofuture/crt).",...(z=(X=a.parameters)==null?void 0:X.docs)==null?void 0:z.description}}};var Z,Y,J,Q,V;s.parameters={...s.parameters,docs:{...(Z=s.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    preset: "amber-mainframe",
    crt: "amber-terminal",
    readOnly: true,
    typingSpeed: 80,
    height: 300
  },
  render: args => <div style={{
    width: "min(92vw, 720px)"
  }}>
      <RetroTerminal {...args} boot={["INITIALIZING...", "LOADING KERNEL ... OK", "MOUNTING /fx ... OK", ""]} welcome="RETROFUTURE FX — ONLINE" />
    </div>
}`,...(J=(Y=s.parameters)==null?void 0:Y.docs)==null?void 0:J.source},description:{story:"Read-only boot hero — no input, just an animated boot.",...(V=(Q=s.parameters)==null?void 0:Q.docs)==null?void 0:V.description}}};var W,$,ee,re,te;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => {
    const term = useRef<RetroTerminalHandle>(null);
    return <div style={{
      width: "min(92vw, 720px)",
      display: "grid",
      gap: 10
    }}>
        <div style={{
        display: "flex",
        gap: 8
      }}>
          <button type="button" onClick={() => term.current?.run("help")} style={btn}>run help</button>
          <button type="button" onClick={() => term.current?.print("injected ✨")} style={btn}>print</button>
          <button type="button" onClick={() => term.current?.clear()} style={btn}>clear</button>
        </div>
        <RetroTerminal {...args} ref={term} commands={demoCommands} welcome="ready." />
      </div>;
  },
  play: async ({
    canvasElement
  }) => {
    await userEvent.click(within(canvasElement).getByRole("button", {
      name: "run help"
    }));
    await expect(await within(canvasElement).findByText(/Available commands/, undefined, {
      timeout: 8000
    })).toBeInTheDocument();
  }
}`,...(ee=($=c.parameters)==null?void 0:$.docs)==null?void 0:ee.source},description:{story:"Driven from React via the imperative handle.",...(te=(re=c.parameters)==null?void 0:re.docs)==null?void 0:te.description}}};var ne,oe,ae;y.parameters={...y.parameters,docs:{...(ne=y.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    preset: "cyberpunk"
  },
  parameters: {
    reducedMotion: true
  }
}`,...(ae=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};const me=["Playground","GreenPhosphor","AmberMainframe","DOS","Cyberpunk","BBS","SciFi","CRTMode","BootHero","Imperative","ReducedMotion"],ue=Object.freeze(Object.defineProperty({__proto__:null,AmberMainframe:p,BBS:l,BootHero:s,CRTMode:a,Cyberpunk:d,DOS:m,GreenPhosphor:i,Imperative:c,Playground:o,ReducedMotion:y,SciFi:u,__namedExportsOrder:me,default:pe},Symbol.toStringTag,{value:"Module"}));export{p as A,s as B,d as C,i as G,c as I,y as R,ue as T,a};
