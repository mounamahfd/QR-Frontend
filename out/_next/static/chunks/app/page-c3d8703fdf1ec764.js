(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{7914:(e,t,r)=>{Promise.resolve().then(r.bind(r,9319))},9319:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var n=r(5155),o=r(2115),a=r(2651),i=r(2818);function l(){let[e,t]=(0,o.useState)(""),[r,l]=(0,o.useState)(""),[d,c]=(0,o.useState)(!1),[p,u]=(0,o.useState)(""),[g,x]=(0,o.useState)(""),[h,m]=(0,o.useState)(!1),[y,f]=(0,o.useState)(!1),b=i.env.NEXT_PUBLIC_BACKEND_URL||"http://localhost:8000",C=e=>/^(https?:\/\/)?[\w.-]+(\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/.test(e),v=async t=>{if(t.preventDefault(),c(!0),u(""),x(""),l(""),m(!1),!C(e)){u("Please enter a valid URL."),c(!1);return}try{let t=await a.A.post("".concat(b,"/generate-qr/"),{url:e});t.data.message&&x(t.data.message),l(t.data.qr_code_url),f(!0)}catch(e){console.error("Error generating QR Code:",e),u("Failed to generate QR Code. Please try again.")}finally{c(!1)}};return(0,n.jsxs)("div",{style:s.container,children:[(0,n.jsx)("h1",{style:s.title,children:"QR Code Generator"}),(0,n.jsxs)("form",{onSubmit:v,style:s.form,children:[(0,n.jsx)("input",{type:"text",value:e,onChange:e=>t(e.target.value),placeholder:"Enter URL like https://example.com",style:s.input}),(0,n.jsx)("button",{type:"submit",style:s.button,disabled:d,children:d?"Generating...":"Generate QR Code"})]}),p&&(0,n.jsx)("p",{style:s.error,"aria-live":"assertive",children:p}),g&&(0,n.jsx)("p",{style:s.message,"aria-live":"polite",children:g}),r&&!g&&(0,n.jsxs)("div",{children:[y&&(0,n.jsx)("p",{children:"Loading QR code..."}),h?(0,n.jsx)("p",{style:s.error,children:"Failed to load QR code image."}):(0,n.jsx)("img",{src:r,alt:"QR Code",style:s.qrCode,onLoad:()=>{f(!1)},onError:()=>{m(!0),f(!1)}})]})]})}let s={container:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"#121212",color:"white"},title:{margin:"0",lineHeight:"1.15",fontSize:"4rem",textAlign:"center"},form:{display:"flex",flexDirection:"column",alignItems:"center"},input:{padding:"10px",borderRadius:"5px",border:"none",marginTop:"20px",width:"300px",color:"#121212"},button:{padding:"10px 20px",marginTop:"20px",border:"none",borderRadius:"5px",backgroundColor:"#0070f3",color:"white",cursor:"pointer"},qrCode:{marginTop:"20px",width:"200px",height:"200px"},error:{color:"red",marginTop:"20px"},message:{color:"green",marginTop:"20px"}}}},e=>{var t=t=>e(e.s=t);e.O(0,[651,441,517,358],()=>t(7914)),_N_E=e.O()}]);