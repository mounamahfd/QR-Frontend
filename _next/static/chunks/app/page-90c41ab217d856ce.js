(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{7914:(e,t,r)=>{Promise.resolve().then(r.bind(r,9319))},9319:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var n=r(5155),o=r(2115),a=r(2651);function l(){let[e,t]=(0,o.useState)(""),[r,l]=(0,o.useState)(""),[i,d]=(0,o.useState)(!1),[c,p]=(0,o.useState)(""),[u,g]=(0,o.useState)(""),[x,h]=(0,o.useState)(!1),m=async t=>{t.preventDefault(),d(!0),p(""),g("");try{let t=await a.A.post("https://qr-backend-2.onrender.com/generate-qr/",{url:e});console.log("Response:",t.data),t.data.qr_code_url&&l(t.data.qr_code_url),t.data.message&&g(t.data.message)}catch(e){console.error("Error generating QR Code:",e),p("Failed to generate QR Code. Please try again.")}finally{d(!1)}};return(0,n.jsxs)("div",{style:s.container,children:[(0,n.jsx)("h1",{style:s.title,children:"QR Code Generator"}),(0,n.jsxs)("form",{onSubmit:m,style:s.form,children:[(0,n.jsx)("input",{type:"text",value:e,onChange:e=>t(e.target.value),placeholder:"Enter URL like https://example.com",style:s.input}),(0,n.jsx)("button",{type:"submit",style:s.button,disabled:i,children:i?"Generating...":"Generate QR Code"})]}),u&&(0,n.jsx)("p",{style:s.message,children:u}),c&&(0,n.jsx)("p",{style:s.error,children:c}),r&&(0,n.jsxs)("div",{children:[(0,n.jsx)("img",{src:r,alt:"QR Code",style:s.qrCode,onError:()=>{h(!0)}}),u&&(0,n.jsx)("p",{style:s.message,children:u})]}),x&&(0,n.jsx)("p",{style:s.error,children:"Failed to load QR code image."})]})}let s={container:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"#121212",color:"white"},title:{margin:"0",lineHeight:"1.15",fontSize:"4rem",textAlign:"center"},form:{display:"flex",flexDirection:"column",alignItems:"center"},input:{padding:"10px",borderRadius:"5px",border:"none",marginTop:"20px",width:"300px",color:"#121212"},button:{padding:"10px 20px",marginTop:"20px",border:"none",borderRadius:"5px",backgroundColor:"#0070f3",color:"white",cursor:"pointer"},qrCode:{marginTop:"20px",width:"200px",height:"200px"},error:{color:"red",marginTop:"20px"},message:{color:"green",marginTop:"20px"}}}},e=>{var t=t=>e(e.s=t);e.O(0,[651,441,517,358],()=>t(7914)),_N_E=e.O()}]);