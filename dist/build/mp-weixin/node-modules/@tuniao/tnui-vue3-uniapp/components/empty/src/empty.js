"use strict";const e=require("../../../../../../common/vendor.js");Math||s();const s=()=>"../../icon/src/icon.js",t=e.defineComponent({__name:"empty",props:e.emptyProps,setup(s){const t=s,n=e.useSlots(),o=e.computed((()=>!!(null==n?void 0:n.icon))),p=e.computed((()=>!!(null==n?void 0:n.tips))),{ns:u,emptyClass:i,emptyStyle:m,iconTextStyle:r}=e.useEmptyCustomStyle(t,o,p),c=e.computed((()=>t.mode?e.emptyDefaultTips[t.mode]:""));return(s,t)=>e.e({a:e.p({name:`empty-${s.mode}`}),b:e.n(e.unref(u).e("icon")),c:e.n(e.unref(u).is("custom",e.unref(o))),d:e.s(e.unref(r)("icon")),e:s.showTips||s.$slots.tips},s.showTips||s.$slots.tips?{f:e.t(e.unref(c)),g:e.n(e.unref(u).e("tips")),h:e.n(e.unref(u).is("custom",e.unref(p))),i:e.s(e.unref(r)("tips"))}:{},{j:e.n(e.unref(i)),k:e.s(e.unref(m))})}}),n=e._export_sfc(t,[["__scopeId","data-v-feabae24"]]);wx.createComponent(n);
