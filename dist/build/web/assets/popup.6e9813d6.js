import{b as e,Z as o,l as t,u as s,c as a,L as n,s as i,v as r,B as l,z as p,F as u,C as c,A as d,D as y,K as v,H as h,_ as m,ay as f,r as b,w as g,n as C,m as D,a as x,t as B,f as k,y as w,T as I,E as z}from"./index-77323780.js";import{U as R}from"./event.66482612.js";const _=e({show:{type:Boolean,default:!1},duration:{type:Number,default:300},opacity:{type:Number,default:.5},zIndex:{type:Number,default:o.mask}}),S=m(i({__name:"overlay",props:_,emits:{"update:show":e=>t(e),click:()=>!0},setup(e,{emit:o}){const t=e,{overlayClass:i,overlayStyle:m,overlayClick:f}=((e,o)=>{const t=s("overlay"),i=a((()=>{const o=[t.b()];return e.show&&o.push(t.m("show")),o.join(" ")})),r=a((()=>{const o={};return o.transitionDuration=`${n(e.duration,300)}ms`,o.backgroundColor=`rgba(0, 0, 0, ${n(e.opacity,.5)})`,e.zIndex&&(o.zIndex=e.zIndex),o}));return{ns:t,overlayClass:i,overlayStyle:r,overlayClick:()=>{o("update:show",!1),o("click")}}})(t,o);return(e,o)=>{const t=h;return r(),l(t,{class:c([d(i)]),style:y(d(m)),onClick:v(d(f),["stop"]),onTouchmove:o[0]||(o[0]=v((()=>{}),["stop","prevent"]))},{default:p((()=>[u(e.$slots,"default",{},void 0,!0)])),_:3},8,["class","style","onClick"])}}}),[["__scopeId","data-v-c16721ff"]]);S.install=()=>{};const N=e({modelValue:Boolean,openDirection:{type:String,values:["top","bottom","left","right","center"],default:"center"},width:{type:[String,Number]},height:{type:[String,Number]},bgColor:{type:String,default:"#fff"},radius:{type:[String,Number],default:15},overlay:{type:Boolean,default:!0},overlayOpacity:_.opacity,overlayCloseable:{type:Boolean,default:!0},closeBtn:Boolean,closeBtnPosition:{type:String,values:["left-top","right-top","left-bottom","right-bottom"],default:"right-top"},safeAreaInsetBottom:f,zIndex:{type:Number,default:o.popup},top:{type:[String,Number]}}),T=e=>{const{emit:o}=D(),t=b(!1),s=b(!1),n=b(!1);g((()=>e.modelValue),(a=>{a?(n.value=!0,s.value=!0,e.overlay&&(t.value=!0),o("open")):(s.value=!1,t.value=!1,setTimeout((()=>{n.value=!1}),250),o("close"))}),{immediate:!0});const i=a((()=>Number(e.zIndex))),r=a((()=>i.value-1)),l=e=>{o(R,e),C((()=>{o(e?"open":"close")}))};return{showOverlay:t,showPopup:s,visiblePopup:n,zIndex:i,overlayZIndex:r,updateModelValue:l,onClickCloseBtn:()=>{l(!1)},onClickOverlay:()=>{e.overlayCloseable&&l(!1)}}},O=m(i({__name:"popup",props:N,emits:{[R]:e=>t(e),open:()=>!0,close:()=>!0},setup(e){const o=e,{showOverlay:t,showPopup:n,visiblePopup:i,overlayZIndex:m,zIndex:f,onClickCloseBtn:b,onClickOverlay:g}=T(o),{ns:C,popupContentClass:D,popupContentStyle:R}=(e=>{const o=s("popup"),{zIndex:t}=T(e),[n,i]=x(B(e,"bgColor"),"bg"),r=a((()=>{const t=[o.e("content")];return e.openDirection&&t.push(o.em("content",e.openDirection)),"bottom"===e.openDirection&&e.safeAreaInsetBottom&&t.push("tn-u-safe-area"),n.value&&t.push(n.value),t.join(" ")})),l=a((()=>{const o={};return i.value&&(o.backgroundColor=i.value),e.radius&&(o.overflow="hidden","center"===e.openDirection&&(o.borderRadius=k(e.radius)),"top"===e.openDirection&&(o.borderBottomLeftRadius=k(e.radius),o.borderBottomRightRadius=k(e.radius)),"left"===e.openDirection&&(o.borderTopRightRadius=k(e.radius),o.borderBottomRightRadius=k(e.radius)),"right"===e.openDirection&&(o.borderTopLeftRadius=k(e.radius),o.borderBottomLeftRadius=k(e.radius)),"bottom"===e.openDirection&&(o.borderTopLeftRadius=k(e.radius),o.borderTopRightRadius=k(e.radius))),!e.top||"top"!==e.openDirection&&"left"!==e.openDirection&&"right"!==e.openDirection||(o.top=k(e.top,"px")),!e.width||"left"!==e.openDirection&&"right"!==e.openDirection&&"center"!==e.openDirection||(o.width=k(e.width)),!e.height||"top"!==e.openDirection&&"bottom"!==e.openDirection&&"center"!==e.openDirection||(o.height=k(e.height)),"left"!==e.openDirection&&"right"!==e.openDirection||e.top&&(o.height=`calc(100% - ${k(e.top,"px")})`),o.zIndex=t.value,o}));return{ns:o,popupContentClass:r,popupContentStyle:l}})(o);return(e,o)=>{const s=h;return r(),l(s,{class:c([d(C).b(),d(C).is("show",d(n)),d(C).is("visible",d(i))]),style:y({zIndex:d(f)})},{default:p((()=>[w(S,{show:d(t),"z-index":d(m),opacity:e.overlayOpacity,onClick:d(g)},null,8,["show","z-index","opacity","onClick"]),w(s,{class:c([d(D)]),style:y(d(R))},{default:p((()=>[u(e.$slots,"default",{},void 0,!0),e.closeBtn?(r(),l(s,{key:0,class:c([d(C).e("close-btn"),d(C).em("close-btn",e.closeBtnPosition)]),onClick:v(d(b),["stop"])},{default:p((()=>[u(e.$slots,"closeBtn",{},(()=>[w(I,{name:"close"})]),!0)])),_:3},8,["class","onClick"])):z("",!0)])),_:3},8,["class","style"])])),_:3},8,["class","style"])}}}),[["__scopeId","data-v-365f2332"]]);export{O as T};
