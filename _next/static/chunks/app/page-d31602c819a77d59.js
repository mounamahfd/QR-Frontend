(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{7914:(e,r,t)=>{Promise.resolve().then(t.bind(t,9319))},9319:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>a});var o=t(5155),n=t(2115),l=t(2651);function a(){let[e,r]=(0,n.useState)(""),[t,a]=(0,n.useState)(""),[i,d]=(0,n.useState)(!1),[c,u]=(0,n.useState)(""),[p,m]=(0,n.useState)(""),[g,x]=(0,n.useState)(!1),h=async r=>{r.preventDefault(),d(!0),u(""),m(""),x(!1);try{let r=await l.A.post("".concat("https://qr-backend-2.onrender.com","/generate-qr/"),{url:e});r.data.qr_code_url?(a(r.data.qr_code_url),m(r.data.message||"QR Code generated successfully!")):m("No QR Code returned.")}catch(e){console.error("Error:",e),u("Failed to generate QR Code. Please check your URL or try again later.")}finally{d(!1)}};return(0,o.jsxs)("div",{style:s.container,children:[(0,o.jsx)("h1",{style:s.title,children:"QR Code Generator"}),(0,o.jsxs)("form",{onSubmit:h,style:s.form,children:[(0,o.jsx)("label",{htmlFor:"url",style:s.label,children:"Enter URL:"}),(0,o.jsx)("input",{id:"url",type:"text",value:e,onChange:e=>r(e.target.value),placeholder:"e.g., https://example.com",style:s.input}),(0,o.jsx)("button",{type:"submit",style:s.button,disabled:i,children:i?"Generating...":"Generate QR Code"})]}),c&&(0,o.jsx)("p",{style:s.error,children:c}),p&&(0,o.jsx)("p",{style:s.message,children:p}),t&&!g&&(0,o.jsx)("img",{src:t,alt:"Generated QR Code",style:s.qrCode,onError:()=>x(!0)}),g&&(0,o.jsx)("p",{style:s.error,children:"Unable to load QR Code image."})]})}let s={container:{minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",backgroundColor:"#121212",color:"#FFFFFF"},title:{fontSize:"3rem",marginBottom:"1rem"},form:{display:"flex",flexDirection:"column",alignItems:"center"},label:{fontSize:"1rem",marginBottom:"0.5rem"},input:{padding:"10px",width:"300px",borderRadius:"5px",border:"1px solid #CCCCCC",marginBottom:"1rem"},button:{padding:"10px 20px",border:"none",borderRadius:"5px",backgroundColor:"#0070f3",color:"#FFFFFF",cursor:"pointer",fontSize:"1rem"},qrCode:{marginTop:"20px",width:"200px",height:"200px"},error:{color:"red",marginTop:"20px"},message:{color:"green",marginTop:"20px"}}}},e=>{var r=r=>e(e.s=r);e.O(0,[651,441,517,358],()=>r(7914)),_N_E=e.O()}]);