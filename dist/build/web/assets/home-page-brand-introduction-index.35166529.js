import{r as a,m as e,ae as t,af as s,ag as l,s as o,ah as i,ai as c,v as r,x as n,y as d,A as u,z as p,C as m,I as f,J as h,K as g,D as _,X as j,G as w,R as k,Q as v,H as b,U as I,_ as y}from"./index-77323780.js";import{T as C}from"./swiper.ae7b0807.js";import{T as x}from"./avatar.e4e0e883.js";import{T}from"./popup.6e9813d6.js";import{u as A}from"./index.6a689c5f.js";import{u as H}from"./index.db47244a.js";import"./is-number.ce4beb98.js";import"./event.66482612.js";import"./badge.e80df13e.js";import"./index.070e5df5.js";const D=y(o({__name:"index",setup(o){const{instance:y,triggerElementId:D,navbarOpacity:F,swiperData:S,brandIntroductionData:U,authorInfo:V,showAuthorCodeInfo:W,initTransparentScroll:E,navbarInitFinishHandle:O,opacityScrollHandle:q,openAuthorCodeInfo:z,previewAuthorWechatCode:B,copyAuthorWechat:G}=(()=>{const o=e(),i=a([{id:"1",name:"品牌介绍-1",image:"https://resource.tuniaokj.com/images/shop/cup1.jpg",title:"BUG再多",desc:"也别忘了",remark:"可以无限续杯"},{id:"2",name:"品牌介绍-2",image:"https://resource.tuniaokj.com/images/swiper/read.jpg",title:"狮业有承南南",desc:"欢迎加入东东们",remark:"如果你也有不错的产品"},{id:"3",name:"品牌介绍-3",image:"https://resource.tuniaokj.com/images/swiper/swiper2.jpg",title:"狮业有承西西",desc:"一起玩转狮业有承UI",remark:"用最少的代码实现最骚的操作"},{id:"4",name:"品牌介绍-4",image:"https://resource.tuniaokj.com/images/swiper/swiper3.jpg",title:"狮业有承北北",desc:"微信号 tnkewo",remark:"商业合作联系作者"},{id:"5",name:"品牌介绍-5",image:"https://resource.tuniaokj.com/images/swiper/job.jpg",title:"狮业有承猪猪",desc:"努力成为大佬",remark:"一起加油吖"}]),c=a(""),r=a({nickname:"狮业有承凶姐",office:"高级UI设计师",company:"化州市狮业有承科技有限公司",avatar:"https://resource.tuniaokj.com/images/xiongjie/x14.jpg",wechat:"tnkewo",wechatCode:"https://resource.tuniaokj.com/images/gitee_introduce_file/bottom.jpg"}),n=a(!1),{triggerElementId:d,navbarOpacity:u,init:p,updateTargetTriggerValue:m,opacityScrollHandle:f}=A(o);return{instance:o,triggerElementId:d,navbarOpacity:u,swiperData:i,brandIntroductionData:c,authorInfo:r,showAuthorCodeInfo:n,initTransparentScroll:p,opacityScrollHandle:f,navbarInitFinishHandle:a=>{m(a.height)},openAuthorCodeInfo:()=>{n.value=!0},copyAuthorWechat:()=>{t({data:r.value.wechat,success:()=>{s({title:"复制成功",icon:"none"})}})},previewAuthorWechatCode:()=>{l({urls:[r.value.wechatCode]})}}})(),{style:J,scrollHandle:K}=H("up",80);return i((()=>{E()})),c((a=>{q(a.scrollTop),K(y,a.scrollTop)})),(a,e)=>{const t=k("TnNavbar"),s=v,l=b,o=k("TnIcon"),i=I;return r(),n(w,null,[d(t,{fixed:"","bg-color":`rgba(255, 255, 255, ${u(F)})`,"bottom-shadow":!1,placeholder:!1,onInitFinish:u(O)},null,8,["bg-color","onInitFinish"]),d(l,{class:"swiper"},{default:p((()=>[d(C,{data:u(S),loop:"",autoplay:""},{default:p((({data:a,active:e})=>[d(l,{class:m(["swiper-item",[{active:e}]])},{default:p((()=>[d(s,{class:"image",src:a.image,mode:"aspectFill"},null,8,["src"]),d(l,{class:"item-content"},{default:p((()=>[d(l,{class:"title"},{default:p((()=>[f(h(a.title),1)])),_:2},1024),d(l,{class:"desc"},{default:p((()=>[f(h(a.desc),1)])),_:2},1024),d(l,{class:"remark"},{default:p((()=>[f(h(a.remark),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["class"])])),_:1},8,["data"])])),_:1}),d(l,{id:u(D),class:"introduction-page"},{default:p((()=>[d(l,{class:"title-container"},{default:p((()=>[d(l,{class:"left"},{default:p((()=>[d(l,{class:"title"},{default:p((()=>[f("让我们一同探索未知")])),_:1}),d(l,{class:"desc"},{default:p((()=>[f("一同前往无限可能")])),_:1})])),_:1}),d(l,{class:"right"},{default:p((()=>[d(l,{class:"icon"},{default:p((()=>[d(o,{name:"qr-code"})])),_:1}),d(l,{class:"text"},{default:p((()=>[f("探 索")])),_:1})])),_:1})])),_:1}),d(l,{class:"introduction-content tn-gradient-bg__blue-light"},{default:p((()=>[f(h(u(U)),1)])),_:1})])),_:1},8,["id"]),d(l,{class:"author-info",style:_({...u(J)})},{default:p((()=>[d(l,{class:"left"},{default:p((()=>[d(l,{class:"avatar"},{default:p((()=>[d(x,{url:u(V).avatar,size:"80"},null,8,["url"])])),_:1}),d(l,{class:"info-data"},{default:p((()=>[d(l,{class:"tn-flex items-end"},{default:p((()=>[d(l,{class:"nickname"},{default:p((()=>[f(h(u(V).nickname),1)])),_:1}),d(l,{class:"office"},{default:p((()=>[f(h(u(V).office),1)])),_:1})])),_:1}),d(l,{class:"company"},{default:p((()=>[f(h(u(V).company),1)])),_:1})])),_:1})])),_:1}),d(l,{class:"right",onClick:g(u(z),["stop"])},{default:p((()=>[d(l,{class:"icon"},{default:p((()=>[d(o,{name:"wechat-fill",color:"#28b83e"})])),_:1}),d(l,{class:"text"},{default:p((()=>[f("作者微信")])),_:1})])),_:1},8,["onClick"])])),_:1},8,["style"]),d(T,{modelValue:u(W),"onUpdate:modelValue":e[0]||(e[0]=a=>j(W)?W.value=a:null)},{default:p((()=>[d(l,{class:"author-code-info"},{default:p((()=>[d(l,{class:"qr-code",onClick:g(u(B),["stop"])},{default:p((()=>[d(s,{class:"tn-image",src:u(V).wechatCode,mode:"aspectFill"},null,8,["src"])])),_:1},8,["onClick"]),d(l,{class:"wechat",onClick:g(u(G),["stop"])},{default:p((()=>[f(" 作者微信: "),d(i,null,{default:p((()=>[f(h(u(V).wechat),1)])),_:1}),d(o,{name:"copy",color:"tn-blue-light"})])),_:1},8,["onClick"]),d(l,{class:"tips"},{default:p((()=>[f("点击上图，可识别微信二维码")])),_:1})])),_:1})])),_:1},8,["modelValue"])],64)}}}),[["__scopeId","data-v-7ee54795"]]);export{D as default};
