import{p as a,g as e,h as o,b as s,s as t,u as r,v as d,B as i,z as n,F as l,C as p,A as m,H as c,_ as g}from"./index-77323780.js";import{a as u,b as f}from"./avatar.e4e0e883.js";import{u as b}from"./index.5954b613.js";const C=g(t({__name:"avatar-group",props:s({iconConfig:f.iconConfig,type:f.type,size:f.size,shape:f.shape,imgMode:f.imgMode,bgColor:f.bgColor,border:{type:Boolean,default:!0},borderColor:{type:String,default:"tn-white"},borderBold:f.borderBold,shadow:f.shadow,shadowColor:f.shadowColor,badgeConfig:f.badgeConfig,gap:{type:[String,Number],default:.4}}),emits:{click:a=>"number"==typeof a},setup(s,{emit:t}){const g=s,f=r("avatar");return((s,t)=>{const{children:r,addChild:d,removeChild:i}=b();a(u,e({...o(s),avatarItems:r,addItem:d,removeItem:i,handleItemClick:a=>{const e=r.value.findIndex((e=>e.uid===a));t("click",e)}}))})(g,t),(a,e)=>{const o=c;return d(),i(o,{class:p(`${m(f).b("group")}`)},{default:n((()=>[l(a.$slots,"default",{},void 0,!0)])),_:3},8,["class"])}}}),[["__scopeId","data-v-088ce5e4"]]);export{C as T};
