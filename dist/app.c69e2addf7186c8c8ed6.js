(globalThis.webpackChunk_ga_frontend_app_code=globalThis.webpackChunk_ga_frontend_app_code||[]).push([[143],{40133:(e,t,s)=>{"use strict";s(69758),s(32390);var n=s(55260),r=s(82650),a=s(76079),i=s(2465),o=s(45822),d=s(22057),c=s(73961),l=s(53672),u=s(81356),h=s(13755),g=s(97483);const p={ar:{},"es-419":{},fr:{},"zh-cn":{},ca:{},he:{},id:{},"ko-kr":{},pl:{},"pt-br":{},ru:{},th:{},uk:{},vi:JSON.parse('{"code.run":"Chạy","code.stop":"Dừng","code.output":"Kết quả","code.light":"Sáng","code.dark":"Tối","code.version":"Phiên bản","code.theme":"Giao diện","code.language":"Ngôn ngữ","code.codeWindowHeight":"Chiều cao cửa sổ code","code.enterYourDefaultCode":"Nhập code mặc định","code.copy":"Sao chép","code.copied":"Đã sao chép","code.someThingWentWrongPleaseTryAgainLater":"Có lỗi xảy ra, vui lòng thử lại sau!","code.error":"Lỗi","code.codeTooLong":"Code mặc định của bạn quá dày.","code.processing":"Đang xử lý...","code.embedCode":"Mã nhúng","code.message":"Nội dung","code.feedback":"Báo cáo","code.reportDefaultFeedBack":"Link bài học (nếu bạn trên web):\\n<cung cấp link bài học>\\n\\nNgôn ngữ lập trình của bạn:\\n<cung cấp ngôn ngữ lập trình của bạn>\\n\\nCode của bạn:\\n<cung cấp code của bạn ở đây>\\n\\nThông tin khác:\\n<cung cấp thêm thông tin khác nếu có>","code.ifTheErrorPersist":"Nếu lỗi vẫn tiếp diễn","code.clickHere":"nhấp vào đây","code.toReport":"để báo cáo","code.submitReport":"Gửi báo cáo","code.cancel":"Hủy","code.save":"Lưu","code.thankForSubmittingTheReport":"Báo cáo của bạn đã được gửi. Cảm ơn bạn đã báo cáo, chúng tôi sẽ tìm hiểu vấn đề này.","code.reportFailedToSubmit":"Gửi báo cáo không thành công. Vui lòng thử lại!"}')},m=[u.sY,h.sY,g.Z,p];var f=s(89526),x=s(83277),j=s(63139),v=s(84790),b=s(67557);const Z=()=>(0,b.jsx)("iframe",{frameBorder:"0",width:"100%",height:"594",src:"https://apps.courses.goamazing.org:3000/editor/v1?language=cpp&theme=vs-dark&height=300px&default_value=%3Ciframe%0D%0A%20%20%20%20frameBorder%3D%220%22%0D%0A%20%20%20%20width%3D%22100%25%22%0D%0A%20%20%20%20height%3D%22594%22%0D%0A%20%20%20%20src%3D%22https%3A%2F%2Fapps.courses.goamazing.org%3A3000%2Feditor%2Fv1%3Flanguage%3Dcpp%26theme%3Dvs-dark%26height%3D300px%26default_value%3D%22%20%0D%0A%20%20%20%20%2F%3E"});var M=s(84332),k=s(22332),C=s(21717),y=s(72509),w=s(7247),S=s(99912),R=s(96206),N=s(20077),T=s(2463),P=s(36284),D=s(37176),E=s(56549),F=s(48387);const L=(0,s(93477).vU)({run:{id:"code.run",defaultMessage:"Run",description:""},stop:{id:"code.stop",defaultMessage:"Stop",description:""},output:{id:"code.output",defaultMessage:"Output",description:""},light:{id:"code.light",defaultMessage:"Light",description:""},dark:{id:"code.dark",defaultMessage:"Dark",description:""},version:{id:"code.version",defaultMessage:"Version",description:""},theme:{id:"code.theme",defaultMessage:"Theme",description:""},language:{id:"code.language",defaultMessage:"Language",description:""},codeWindowHeight:{id:"code.codeWindowHeight",defaultMessage:"Code window height",description:""},enterYourDefaultCode:{id:"code.enterYourDefaultCode",defaultMessage:"Enter your default code",description:""},copy:{id:"code.copy",defaultMessage:"Copy",description:""},copied:{id:"code.copied",defaultMessage:"Copied ",description:""},someThingWentWrongPleaseTryAgainLater:{id:"code.someThingWentWrongPleaseTryAgainLater",defaultMessage:"Something went wrong, please try again later!",description:""},error:{id:"code.error",defaultMessage:"Error",description:""},codeTooLong:{id:"code.codeTooLong",defaultMessage:"Your default code is too long.",description:""},processing:{id:"code.processing",defaultMessage:"Processing...",description:""},embedCode:{id:"code.embedCode",defaultMessage:"Embed code",description:""},message:{id:"code.message",defaultMessage:"Message",description:""},feedback:{id:"code.feedback",defaultMessage:"Feedback",description:""},reportDefaultFeedBack:{id:"code.reportDefaultFeedBack",defaultMessage:"Unit link (if you are on web):\n<provide your unit link>\n\nYour programming language:\n<provide your programming language>\n\nYour code:\n<provide write your code here>\n\nAdditional information:\n<anything else?>\n    ",description:""},ifTheErrorPersist:{id:"code.ifTheErrorPersist",defaultMessage:"If the error persist",description:""},clickHere:{id:"code.clickHere",defaultMessage:"click here",description:""},toReport:{id:"code.toReport",defaultMessage:"to report",description:""},submitReport:{id:"code.submitReport",defaultMessage:"Submit report",description:""},cancel:{id:"code.cancel",defaultMessage:"Cancel",description:""},save:{id:"code.save",defaultMessage:"Save",description:""},thankForSubmittingTheReport:{id:"code.thankForSubmittingTheReport",defaultMessage:"Your report is submitted. Thank you for the report, our team will investigate the issue.",description:""},reportFailedToSubmit:{id:"code.reportFailedToSubmit",defaultMessage:"Failed to submit the report. Please try again!",description:""}}),_=e=>{let{intl:t}=e;const[s,n]=f.useState(""),[r,a]=f.useState("vs-dark"),[i,o]=f.useState("cpp"),[d,c]=f.useState("v1"),[l,g]=f.useState(""),[p,m]=f.useState("300"),x=f.useRef(),j=f.useRef(),v=f.useRef(),Z=f.useRef(),E=f.useRef();x.current=s,j.current=r,v.current=i,Z.current=d,E.current=p;const F=f.useRef(null),_=f.useRef(null),W=()=>{g("");const{host:e}=window.location,s=window.location.host.endsWith("3000")?"":"/code",r=Number(E.current)+294,a=F&&F.current?F.current.getValue():"",i=`https://${e}${s}/editor/v1?language=${v.current}&theme=${j.current}&height=${E.current}px&default_value=${encodeURIComponent(a)}`;i.length>8e3&&g(t.formatMessage(L.codeTooLong)),n(`<iframe\n    frameBorder="0"\n    width="100%"\n    height="${r}"\n    src="${i}" \n    />`)};f.useEffect((()=>{W()}),[r,i,d,p]);const $=e=>{a(e)},A=e=>{o(e)};return(0,b.jsxs)("div",{children:[(0,b.jsx)(u.ZP,{}),(0,b.jsxs)("div",{className:"code-exchange-wrapper",children:[(0,b.jsx)("p",{className:"text-center font-weight-bold",children:"Iframe Maker"}),(0,b.jsxs)("div",{className:"flex-wrapper",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{className:"font-weight-bold mb-1",children:t.formatMessage(L.version)}),(0,b.jsxs)(M.Z,{children:[(0,b.jsx)(k.Z,{defaultSelected:!0,children:"v1"}),(0,b.jsx)(k.Z,{disabled:!0,children:"v2"})]})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{className:"font-weight-bold mb-1",children:t.formatMessage(L.theme)}),(0,b.jsxs)(M.Z,{children:[(0,b.jsx)(k.Z,{onClick:()=>$("vs"),children:t.formatMessage(L.light)}),(0,b.jsx)(k.Z,{onClick:()=>$("vs-dark"),defaultSelected:!0,children:t.formatMessage(L.dark)})]})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{className:"font-weight-bold mb-1",children:t.formatMessage(L.language)}),(0,b.jsxs)(M.Z,{children:[(0,b.jsx)(k.Z,{defaultSelected:!0,onClick:()=>A("cpp"),children:"C++"}),(0,b.jsx)(k.Z,{onClick:()=>A("c"),children:"C"}),(0,b.jsx)(k.Z,{onClick:()=>A("java"),children:"Java"}),(0,b.jsx)(k.Z,{onClick:()=>A("python3"),children:"Python 3"})]})]})]}),(0,b.jsxs)("div",{className:"font-weight-bold mb-1",children:[t.formatMessage(L.codeWindowHeight)," (px)"]}),(0,b.jsx)("div",{className:"height-wrapper",children:(0,b.jsx)(C.Z,{onChange:e=>(e=>{let{value:t}=e.target;t||(t="300"),m(t)})(e),type:"number",defaultValue:p})}),(0,b.jsx)("div",{className:"font-weight-bold mt-3 mb-1",children:t.formatMessage(L.enterYourDefaultCode)}),(0,b.jsx)("div",{className:"editor-wrapper",children:(0,b.jsx)(D.ZP,{height:`${p}px`,language:{c:"c",cpp:"cpp",python3:"python",java:"java"}[i],theme:r,onMount:(e,t)=>{F.current=e,_.current=t},onChange:()=>{W()}})}),(0,b.jsxs)("div",{className:"font-weight-bold mt-3 mb-1",children:[t.formatMessage(L.embedCode),"  ",(0,b.jsx)(y.O,{trigger:"click",placement:"top",overlay:(0,b.jsx)(w.ZP,{id:"popover-positioned-top",variant:"success",children:(0,b.jsxs)(w.ZP.Title,{as:"h3",children:[(0,b.jsx)(S.Z,{src:T.Z})," ",t.formatMessage(L.copied)]})}),children:(0,b.jsx)(R.ZP,{onClick:()=>{const e=document.createElement("textarea");e.textContent=x.current,e.style.position="fixed",document.body.appendChild(e),e.select();try{return document.execCommand("copy")}catch(e){return""}finally{document.body.removeChild(e)}},variant:"outline-primary",size:"sm",className:"mb-2 mb-sm-0",children:t.formatMessage(L.copy)})},"top-success")]}),l&&(0,b.jsxs)(N.Z,{variant:"danger",icon:P.Z,children:[(0,b.jsx)(N.Z.Heading,{children:t.formatMessage(L.error)}),(0,b.jsx)("p",{children:l})]}),(0,b.jsx)("div",{children:s})]}),(0,b.jsx)(h.ZP,{})]})};_.propTypes={intl:E.gm.isRequired};const W=(0,F.Z)(_);var $=s(57324),A=s(70725),B=s(32997),H=s(41857),O=s(86009),I=s(31821);const U=e=>{let{message:t,intl:s}=e;const[n,r,a]=(0,$.Z)(!1),[i,o]=f.useState("unsubmit"),d=s.formatMessage(L.reportDefaultFeedBack),[c,l]=f.useState(d);return(0,b.jsxs)("div",{children:[(0,b.jsxs)(N.Z,{variant:"danger",children:[t,(0,b.jsx)("br",{}),s.formatMessage(L.ifTheErrorPersist)," , ",(0,b.jsx)("a",{className:"modal-trigger-link",onClick:()=>{"submitting"!==i&&(o("unsubmit"),l(d)),r()},children:s.formatMessage(L.clickHere)})," ",s.formatMessage(L.toReport),"."]}),(0,b.jsxs)(A.Z,{title:"My dialog",isOpen:n,onClose:a,size:"md",variant:"default",hasCloseButton:!0,isFullscreenOnMobile:!0,children:[(0,b.jsx)(A.Z.Header,{children:(0,b.jsx)(A.Z.Title,{children:s.formatMessage(L.feedback)})}),(0,b.jsxs)(A.Z.Body,{children:["submitted"!==i&&(0,b.jsxs)(b.Fragment,{children:["failedToSubmit"===i&&(0,b.jsx)(N.Z,{variant:"danger",children:s.formatMessage(L.reportFailedToSubmit)}),(0,b.jsx)(B.ZP.Group,{children:(0,b.jsx)(B.ZP.Control,{autoResize:!0,as:"textarea",value:c,disabled:"submitting"===i,onChange:e=>{l(e.target.value)},floatingLabel:s.formatMessage(L.message)})})]}),"submitted"===i&&(0,b.jsx)(N.Z,{variant:"success",children:s.formatMessage(L.thankForSubmittingTheReport)})]}),(0,b.jsx)(A.Z.Footer,{children:(0,b.jsxs)(H.Z,{children:["submitted"!==i&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(A.Z.CloseButton,{variant:"tertiary",children:s.formatMessage(L.cancel)}),(0,b.jsxs)(R.ZP,{variant:"primary",onClick:()=>{o("submitting");const e=(0,v.IC)();var t;(t={name:e.name,email:e.email,contactType:"technical_bug_report",message:c,attachments:[]},(0,v.Sv)().post("https://learner-help-api.goamazing.org/support/from_bot",t)).then((e=>{o("submitted")})).catch((e=>{o("failedToSubmit")}))},children:[s.formatMessage(L.submitReport)," ","submitting"===i&&(0,b.jsx)(O.Z,{animation:"border",variants:"light",size:"sm"})]})]}),"submitted"===i&&(0,b.jsx)(A.Z.CloseButton,{variant:"tertiary",children:"Ok"})]})})]})]})},z=e=>{let{intl:t}=e;const s={c:"c",cpp:"cpp",python3:"python3",java:"java"},n=f.useRef(null),r=f.useRef(null),[i,o]=f.useState(!1),[d,c]=f.useState(""),[l,u]=f.useState(""),{search:h}=window.location,g=new URLSearchParams(h);let p="300px",m="vs",x="",j="";const Z=g.get("height");Z&&(p=Z);const M=g.get("theme");M&&(m=M);const k=g.get("default_value");k&&(j=k);const C=g.get("language");return C&&["c","cpp","python3","java"].includes(C.toLocaleLowerCase())?(x=C,(0,b.jsxs)("div",{className:`code-app-wrapper ${m}`,children:[(0,b.jsx)("div",{className:"tool-btns",children:(0,b.jsxs)(R.ZP,{className:"run-btn",onClick:()=>{if(!i){u("");const e={code:n.current.getValue(),handler:s[x]};c(t.formatMessage(L.processing)),(e=>{let t="";return(0,a.iE)().CODE_RUNNER_URL&&(t=(0,a.iE)().CODE_RUNNER_URL),(0,v.Sv)().post(t,e)})(e).then((e=>{c(e.data.error+e.data.output),o(!1)})).catch((e=>{o(!1),c(""),u(t.formatMessage(L.someThingWentWrongPleaseTryAgainLater))}))}o(!i)},variant:"primary",size:"sm",iconAfter:i?"":I.Z,children:[i?t.formatMessage(L.stop):t.formatMessage(L.run),i&&(0,b.jsx)(O.Z,{animation:"border",variants:"light",size:"sm"})]})}),(0,b.jsx)(D.ZP,{height:p,defaultValue:j,language:{c:"c",cpp:"cpp",python3:"python",java:"java"}[x],theme:m,onMount:(e,t)=>{n.current=e,r.current=t}}),(0,b.jsx)("div",{className:"output-title",children:t.formatMessage(L.output)}),l&&(0,b.jsx)(U,{message:l,intl:t}),(0,b.jsx)("div",{className:"output",children:(0,b.jsx)("div",{children:d})})]})):U("unsuported language")};z.propTypes={intl:E.gm.isRequired};const Y=(0,F.Z)(z),V=()=>(0,b.jsxs)("div",{children:[(0,b.jsx)(u.ZP,{}),(0,b.jsx)("p",{className:"text-center mt-6 mb-6",children:"Permission denied."}),(0,b.jsx)(h.ZP,{})]}),q=()=>{const[e,t]=f.useState(null);return f.useEffect((()=>{(()=>{const e=(0,a.iE)().STUDIO_BASE_URL;return(0,v.kj)().get(`${e}/api/user/v1/me`)})().then((e=>{t(e)})).catch((e=>{if(!window.location.pathname.endsWith("/denied")){const e=window.location.host.endsWith("3000")?"":"/code";window.location.href=`${e}/denied`}}))}),[]),(0,b.jsxs)(x.Z5,{children:[null!=e&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(x.AW,{path:"/maker",element:(0,b.jsx)(j.Z,{children:(0,b.jsx)(W,{})})}),(0,b.jsx)(x.AW,{path:"/editor/v1",element:(0,b.jsx)(j.Z,{children:(0,b.jsx)(Y,{})})}),(0,b.jsx)(x.AW,{path:"/test",element:(0,b.jsx)(j.Z,{children:(0,b.jsx)(Z,{})})})]}),(0,b.jsx)(x.AW,{path:"/denied",element:(0,b.jsx)(j.Z,{children:(0,b.jsx)(V,{})})})]})},G=e=>{let{isOpen:t,close:s,tinymceEditorRef:n,intl:r}=e;const[a,i]=f.useState(""),[o,d]=f.useState("vs-dark"),[c,l]=f.useState("cpp"),[u,h]=f.useState("v1"),[g,p]=f.useState(""),[m,x]=f.useState("300"),j=f.useRef(),v=f.useRef(),Z=f.useRef(),y=f.useRef(),w=f.useRef();j.current=a,v.current=o,Z.current=c,y.current=u,w.current=m;const S=f.useRef(null),T=f.useRef(null),E=()=>{p("");const{host:e}=window.location,t=window.location.host.endsWith("3000")?"":"/code",s=Number(w.current)+294,n=S&&S.current?S.current.getValue():"",a=`https://${e}${t}/editor/v1?language=${Z.current}&theme=${v.current}&height=${w.current}px&default_value=${encodeURIComponent(n)}`;a.length>8e3&&p(r.formatMessage(L.codeTooLong)),i(`<iframe\n    frameBorder="0"\n    width="100%"\n    height="${s}"\n    src="${a}" \n    />`)};f.useEffect((()=>{E()}),[o,c,u,m]);const F=e=>{d(e)},_=e=>{l(e)};return(0,b.jsx)("div",{children:(0,b.jsxs)(A.Z,{title:"Insert code IDE",isOpen:t,onClose:s,size:"xl",variant:"dark",hasCloseButton:!1,isFullscreenOnMobile:!1,children:[(0,b.jsx)(A.Z.Header,{children:(0,b.jsx)(A.Z.Title,{children:"Insert code IDE"})}),(0,b.jsx)(A.Z.Body,{children:(0,b.jsxs)("div",{className:"code-exchange-wrapper",children:[(0,b.jsxs)("div",{className:"flex-wrapper",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{className:"font-weight-bold mb-1",children:r.formatMessage(L.version)}),(0,b.jsxs)(M.Z,{children:[(0,b.jsx)(k.Z,{defaultSelected:!0,children:"v1"}),(0,b.jsx)(k.Z,{disabled:!0,children:"v2"})]})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{className:"font-weight-bold mb-1",children:r.formatMessage(L.theme)}),(0,b.jsxs)(M.Z,{children:[(0,b.jsx)(k.Z,{onClick:()=>F("vs"),children:r.formatMessage(L.light)}),(0,b.jsx)(k.Z,{onClick:()=>F("vs-dark"),defaultSelected:!0,children:r.formatMessage(L.dark)})]})]}),(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{className:"font-weight-bold mb-1",children:r.formatMessage(L.language)}),(0,b.jsxs)(M.Z,{children:[(0,b.jsx)(k.Z,{defaultSelected:!0,onClick:()=>_("cpp"),children:"C++"}),(0,b.jsx)(k.Z,{onClick:()=>_("c"),children:"C"}),(0,b.jsx)(k.Z,{onClick:()=>_("java"),children:"Java"}),(0,b.jsx)(k.Z,{onClick:()=>_("python3"),children:"Python 3"})]})]})]}),(0,b.jsxs)("div",{className:"font-weight-bold mb-1",children:[r.formatMessage(L.codeWindowHeight)," (px)"]}),(0,b.jsx)("div",{className:"height-wrapper",children:(0,b.jsx)(C.Z,{onChange:e=>(e=>{let{value:t}=e.target;t||(t="300"),x(t)})(e),type:"number",defaultValue:m})}),(0,b.jsx)("div",{className:"font-weight-bold mt-3 mb-1",children:r.formatMessage(L.enterYourDefaultCode)}),(0,b.jsx)("div",{className:"editor-wrapper",children:(0,b.jsx)(D.ZP,{height:`${m}px`,language:{c:"c",cpp:"cpp",python3:"python",java:"java"}[c],theme:o,onMount:(e,t)=>{S.current=e,T.current=t},onChange:()=>{E()}})}),g&&(0,b.jsxs)(N.Z,{variant:"danger",icon:P.Z,children:[(0,b.jsx)(N.Z.Heading,{children:r.formatMessage(L.error)}),(0,b.jsx)("p",{children:g})]})]})}),(0,b.jsx)(A.Z.Footer,{children:(0,b.jsxs)(H.Z,{children:[(0,b.jsx)(A.Z.CloseButton,{variant:"tertiary",onClick:s,children:r.formatMessage(L.cancel)}),(0,b.jsx)(R.ZP,{variant:"primary",onClick:()=>{n.insertContent(a),s()},children:r.formatMessage(L.save)})]})})]})})};G.propTypes={intl:E.gm.isRequired},(0,F.Z)(G),(0,n.Ld)(r.Hm,(()=>{c.render((0,b.jsxs)(o.Z,{children:[(0,b.jsxs)(l.q,{children:[(0,b.jsxs)("title",{children:["Code | ",(0,a.iE)().SITE_NAME]}),(0,b.jsx)("link",{rel:"shortcut icon",href:(0,a.iE)().FAVICON_URL,type:"image/x-icon"})]}),(0,b.jsx)(q,{})]}),document.getElementById("root"))})),(0,n.Ld)(r.QL,(e=>{c.render((0,b.jsx)(d.Z,{message:e.message}),document.getElementById("root"))})),(0,i.j2)({messages:m})},37653:()=>{}},e=>{e.O(0,[556],(()=>(40133,e(e.s=40133)))),e.O()}]);
//# sourceMappingURL=app.c69e2addf7186c8c8ed6.js.map