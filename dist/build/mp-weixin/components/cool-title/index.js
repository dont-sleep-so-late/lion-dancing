"use strict";const t=require("../../common/vendor.js");if(!Array){t.resolveComponent("TnIcon")()}const e=t.defineComponent({options:{virtualHost:!0},__name:"index",props:{title:null,leftIcon:{default:"star"},rightIcon:{default:"star"},titleBgImage:{default:"https://resource.tuniaokj.com/images/title_bg/title44.png"},blackTitle:{type:Boolean,default:!1},coolBgNumber:{default:15}},setup(e){const n=e,o=t.computed((()=>{const t={};return n.titleBgImage&&(t.backgroundImage=`url(${n.titleBgImage})`),t}));return(n,a)=>({a:t.p({name:e.leftIcon,transparent:!e.blackTitle,"transparent-bg":`tn-gradient-bg__cool-${e.coolBgNumber}`}),b:t.t(e.title),c:t.p({name:e.rightIcon,transparent:!e.blackTitle,"transparent-bg":`tn-gradient-bg__cool-${e.coolBgNumber}`}),d:t.n(e.blackTitle?"":`tn-gradient-bg__cool-${e.coolBgNumber} tn-text-transparent`),e:t.s(t.unref(o))})}}),n=t._export_sfc(e,[["__scopeId","data-v-57b530af"]]);wx.createComponent(n);
