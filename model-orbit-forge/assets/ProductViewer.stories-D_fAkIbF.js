import{j as e}from"./jsx-runtime-BjG_zV1W.js";import{P as i}from"./ProductViewer-CyrxaEVb.js";import{V as $}from"./VariantPicker-Claf2m0D.js";import{C as ee}from"./CameraPresetPicker-BhUw-kGb.js";import{H as re}from"./HotspotList-2llcEwTm.js";import{E as oe,C as te}from"./CybertruckShowcase-ChDFYhZm.js";import{u as a}from"./useProductConfiguration-Z1hqTQ5Z.js";import{r as b}from"./index-DoKeIHtn.js";import{f as o}from"./flight-helmet-D3F8kep0.js";import"./context-B97yrZ1_.js";import"./iframe-BeEFE1wl.js";import"./ev-truck-6DPjGx1Q.js";import"./LookPicker-CD1dAZaU.js";import"./_commonjsHelpers-Cpj98o6Y.js";const ve={title:"Viewer/ProductViewer",component:i,parameters:{layout:"padded",docs:{description:{component:"Owns quality-profile selection, resize handling, visibility pausing, and GPU disposal. The only prop it strictly needs is a product and a configuration."}}}},s={render:()=>{const r=a({product:o});return e.jsx(i,{className:"sb-viewer",product:o,configuration:r.configuration})}},c={name:"Full configurator",render:()=>{const r=b.useRef(null),[f,h]=b.useState("hero"),g=a({product:o});return e.jsxs("div",{className:"sb-row",children:[e.jsxs("div",{children:[e.jsx(i,{ref:r,className:"sb-viewer",product:o,configuration:g.configuration,camera:f,onCameraChange:h}),e.jsx("div",{style:{marginTop:16},children:e.jsx(ee,{product:o,value:f,onSelect:t=>{var n;h(t),(n=r.current)==null||n.selectCamera(t)},onReset:()=>{var t;return void((t=r.current)==null?void 0:t.resetCamera())}})})]}),e.jsxs("div",{className:"sb-panel sb-stack",children:[e.jsx($,{product:o,configuration:g}),e.jsx(re,{product:o,configuration:g.configuration,onFocus:t=>{var n;return void((n=r.current)==null?void 0:n.focusHotspot(t))}}),e.jsx(oe,{viewer:r,options:{width:1600,height:1200}})]})]})}},u={name:"Cybertruck configurator",parameters:{layout:"fullscreen"},render:()=>e.jsx(te,{})},d={name:"Mobile quality profile",render:()=>{const r=a({product:o});return e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"sb-note",children:"Quality is normally detected from device hints. Pinning it is for testing and for hosts that know better than the heuristic."}),e.jsx(i,{className:"sb-viewer",product:o,configuration:r.configuration,quality:"mobile"})]})}},l={name:"Poster fallback (no WebGL)",render:()=>{const r=a({product:o});return e.jsxs("div",{className:"sb-row",children:[e.jsxs("div",{children:[e.jsx("p",{className:"sb-note",children:"Quality pinned to `fallback` — no renderer is created."}),e.jsx(i,{className:"sb-viewer",product:o,configuration:r.configuration,quality:"fallback"})]}),e.jsx("div",{className:"sb-panel",children:e.jsx($,{product:o,configuration:r})})]})}},m={name:"Error state",render:()=>{const r={...o,model:{...o.model,src:"./models/does-not-exist.glb"}},f=a({product:r});return e.jsx(i,{className:"sb-viewer",product:r,configuration:f.configuration})}},p={name:"Without hotspot markers",render:()=>{const r=a({product:o});return e.jsx(i,{className:"sb-viewer",product:o,configuration:r.configuration,showHotspots:!1})}};var v,w,y,x,P;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => {
    const configuration = useProductConfiguration({
      product: flightHelmet
    });
    return <ProductViewer className="sb-viewer" product={flightHelmet} configuration={configuration.configuration} />;
  }
}`,...(y=(w=s.parameters)==null?void 0:w.docs)==null?void 0:y.source},description:{story:"Viewer alone, with the product's default configuration.",...(P=(x=s.parameters)==null?void 0:x.docs)==null?void 0:P.description}}};var k,C,H,N,j;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Full configurator',
  render: () => {
    const viewer = useRef<ProductViewerHandle>(null);
    const [camera, setCamera] = useState<string | undefined>('hero');
    const configuration = useProductConfiguration({
      product: flightHelmet
    });
    return <div className="sb-row">
        <div>
          <ProductViewer ref={viewer} className="sb-viewer" product={flightHelmet} configuration={configuration.configuration} camera={camera} onCameraChange={setCamera} />
          <div style={{
          marginTop: 16
        }}>
            <CameraPresetPicker product={flightHelmet} value={camera} onSelect={id => {
            setCamera(id);
            void viewer.current?.selectCamera(id);
          }} onReset={() => void viewer.current?.resetCamera()} />
          </div>
        </div>

        <div className="sb-panel sb-stack">
          <VariantPicker product={flightHelmet} configuration={configuration} />
          <HotspotList product={flightHelmet} configuration={configuration.configuration} onFocus={id => void viewer.current?.focusHotspot(id)} />
          <ExportButton viewer={viewer} options={{
          width: 1600,
          height: 1200
        }} />
        </div>
      </div>;
  }
}`,...(H=(C=c.parameters)==null?void 0:C.docs)==null?void 0:H.source},description:{story:`The full journey from the product plan: poster → live model → orbit → material
selection → camera preset → hotspot detail → export.`,...(j=(N=c.parameters)==null?void 0:N.docs)==null?void 0:j.description}}};var V,S,E,F,T;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Cybertruck configurator',
  parameters: {
    layout: 'fullscreen'
  },
  render: () => <CybertruckShowcase />
}`,...(E=(S=u.parameters)==null?void 0:S.docs)==null?void 0:E.source},description:{story:"The automotive atelier composes the same public viewer and configuration controls.",...(T=(F=u.parameters)==null?void 0:F.docs)==null?void 0:T.description}}};var q,L,W,O,Q;d.parameters={...d.parameters,docs:{...(q=d.parameters)==null?void 0:q.docs,source:{originalSource:`{
  name: 'Mobile quality profile',
  render: () => {
    const configuration = useProductConfiguration({
      product: flightHelmet
    });
    return <>
        <p className="sb-note">
          Quality is normally detected from device hints. Pinning it is for testing and for hosts that
          know better than the heuristic.
        </p>
        <ProductViewer className="sb-viewer" product={flightHelmet} configuration={configuration.configuration} quality="mobile" />
      </>;
  }
}`,...(W=(L=d.parameters)==null?void 0:L.docs)==null?void 0:W.source},description:{story:"Forcing the `mobile` profile caps the pixel ratio at 1.5, drops shadow maps in\nfavour of the contact-shadow decal, and disables hotspot occlusion. On a 3×\nphone display that is roughly a 4× reduction in fragments.",...(Q=(O=d.parameters)==null?void 0:O.docs)==null?void 0:Q.description}}};var R,M,_,D,G;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Poster fallback (no WebGL)',
  render: () => {
    const configuration = useProductConfiguration({
      product: flightHelmet
    });
    return <div className="sb-row">
        <div>
          <p className="sb-note">Quality pinned to \`fallback\` — no renderer is created.</p>
          <ProductViewer className="sb-viewer" product={flightHelmet} configuration={configuration.configuration} quality="fallback" />
        </div>
        <div className="sb-panel">
          <VariantPicker product={flightHelmet} configuration={configuration} />
        </div>
      </div>;
  }
}`,...(_=(M=l.parameters)==null?void 0:M.docs)==null?void 0:_.source},description:{story:"The `fallback` profile is what a device without WebGL gets: the poster stays,\nand every control around it keeps working. It is a commercially useful state,\nnot an empty grey box.",...(G=(D=l.parameters)==null?void 0:D.docs)==null?void 0:G.description}}};var U,B,z,A,I;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  name: 'Error state',
  render: () => {
    const broken = {
      ...flightHelmet,
      model: {
        ...flightHelmet.model,
        src: './models/does-not-exist.glb'
      }
    };
    const configuration = useProductConfiguration({
      product: broken
    });
    return <ProductViewer className="sb-viewer" product={broken} configuration={configuration.configuration} />;
  }
}`,...(z=(B=m.parameters)==null?void 0:B.docs)==null?void 0:z.source},description:{story:"A model URL that 404s. The viewer reports `PS_MODEL_NOT_FOUND` with an\noperator-facing hint rather than failing silently, and the poster remains.",...(I=(A=m.parameters)==null?void 0:A.docs)==null?void 0:I.description}}};var J,K,X,Y,Z;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Without hotspot markers',
  render: () => {
    const configuration = useProductConfiguration({
      product: flightHelmet
    });
    return <ProductViewer className="sb-viewer" product={flightHelmet} configuration={configuration.configuration} showHotspots={false} />;
  }
}`,...(X=(K=p.parameters)==null?void 0:K.docs)==null?void 0:X.source},description:{story:"Hotspot markers hidden, for a clean hero presentation.",...(Z=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:Z.description}}};const we=["Default","FullConfigurator","Vehicle","MobileQualityProfile","PosterFallback","ErrorState","WithoutHotspots"];export{s as Default,m as ErrorState,c as FullConfigurator,d as MobileQualityProfile,l as PosterFallback,u as Vehicle,p as WithoutHotspots,we as __namedExportsOrder,ve as default};
