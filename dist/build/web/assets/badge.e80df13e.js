import{b as e,ap as t,aB as s,d as a,aC as o,c as n,i as u,u as l,a as i,t as r,V as c,f as b,az as p,s as d,W as m,v as g,B as y,z as v,F as h,A as C,C as f,D as S,K as z,x,T as k,J as B,G as N,E as _,H as j,_ as T}from"./index-77323780.js";import{i as P}from"./is-number.ce4beb98.js";const $=e({value:{type:[String,Number]},max:{type:[String,Number]},type:{type:String,values:t,default:"primary"},bgColor:String,textColor:String,size:{type:[String,Number]},fontSize:{type:[String,Number]},bold:Boolean,customStyle:s,customClass:String,dot:Boolean,absolute:{type:Boolean,default:!0},absolutePosition:{type:a(Object),default:()=>({})},absoluteCenter:{type:Boolean,default:!0},index:o}),w=(e,t)=>{const s=n((()=>!!e.dot||""!==e.value&&void 0!==e.value)),a=n((()=>{let t="string";return P(e.value)&&(t="number"),u(e.value)&&e.value.startsWith("icon-")&&(t="icon"),t})),o=n((()=>{if(e.dot)return"";if("number"===a.value&&e.max){const t=Number(e.value||0),s=Number(e.max||0);return t>s?`${s}+`:`${t}`}return"icon"===a.value?e.value.replace("icon-",""):e.value}));return{showBadge:s,contentType:a,content:o,badgeClick:()=>{t&&t("click",e.index)}}},O=T(d({__name:"badge",props:$,emits:{click:e=>"number"==typeof e||"string"==typeof e},setup(e,{emit:t}){const s=e,a=m(),{ns:o,contentNs:u,badgeContentClass:d,badgeContentStyle:T}=(e=>{const t=l("badge"),s=l("badge-content"),{contentType:a}=w(e),[o,u]=i(r(e,"bgColor"),"bg"),[d,m]=i(r(e,"textColor"),"text"),{sizeType:g}=c(e.size),y=n((()=>{const t=[];return t.push(s.b()),e.dot&&t.push(s.m("dot")),"icon"===a.value&&t.push(s.m("icon")),e.absolute&&(t.push(s.e("absolute")),e.absoluteCenter&&t.push(s.em("absolute","center"))),e.type&&t.push(`tn-type-${e.type}_bg`),o.value&&t.push(o.value),d.value&&t.push(d.value),e.size&&"inner"===g.value&&t.push(s.m(e.size)),e.bold&&t.push("tn-text-bold"),e.customClass&&t.push(e.customClass),t.join(" ")})),v=n((()=>{const t={};return u.value&&(t.backgroundColor=u.value),m.value&&(t.color=m.value),!e.size||"custom"!==g.value&&"icon"!==a.value||(t.width=t.height=b(e.size)),e.fontSize&&(t.fontSize=b(e.fontSize)),e.absolutePosition.top&&(t.top=b(e.absolutePosition.top)),e.absolutePosition.right&&(t.right=b(e.absolutePosition.right)),p(e.customStyle)||Object.assign(t,e.customStyle),t}));return{ns:t,contentNs:s,badgeContentClass:y,badgeContentStyle:v}})(s),{showBadge:P,contentType:$,content:O,badgeClick:W}=w(s,t),A=n((()=>{const e=[];return e.push(o.b()),(null==a?void 0:a.default)||s.absolute&&(e.push(o.e("absolute")),s.absoluteCenter&&e.push(o.em("absolute","center"))),e.join(" ")}));return(e,t)=>{const s=j;return g(),y(s,{class:f([C(A)])},{default:v((()=>[h(e.$slots,"default",{},void 0,!0),C(P)?(g(),y(s,{key:0,class:f([C(d)]),style:S(C(T)),onClick:z(C(W),["stop"])},{default:v((()=>[C(O)?(g(),x(N,{key:0},["icon"===C($)?(g(),y(k,{key:0,name:C(O)},null,8,["name"])):(g(),x("span",{key:1,class:f(`${C(u).e("data")}`)},B(C(O)),3))],64)):_("",!0)])),_:1},8,["class","style","onClick"])):_("",!0)])),_:3},8,["class"])}}}),[["__scopeId","data-v-3a92f4ed"]]);export{O as T};
