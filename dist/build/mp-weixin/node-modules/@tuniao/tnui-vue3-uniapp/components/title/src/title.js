"use strict";const e=require("../../../../../../common/vendor.js"),t=e.defineComponent({__name:"title",props:e.titleProps,emits:e.titleEmits,setup(t,{emit:s}){const n=t,{ns:o,titleClass:r,titleStyle:i,assistColorClass:l,assistColorStyle:m}=e.useTitleCustomStyle(n),u=()=>{s("click")};return(t,s)=>e.e({a:e.t(t.title),b:"normal"!==t.mode&&"transparent"!==t.mode},"normal"!==t.mode&&"transparent"!==t.mode?e.e({c:"subTitle"===t.mode&&t.subTitle},"subTitle"===t.mode&&t.subTitle?{d:e.t(t.subTitle)}:{},{e:e.n(e.unref(o).e(t.mode)),f:e.n(e.unref(l)),g:e.s(e.unref(m))}):{},{h:e.n(e.unref(r)),i:e.s(e.unref(i)),j:e.n(e.unref(o).b()),k:e.o(u)})}}),s=e._export_sfc(t,[["__scopeId","data-v-94d7adb7"]]);wx.createComponent(s);
