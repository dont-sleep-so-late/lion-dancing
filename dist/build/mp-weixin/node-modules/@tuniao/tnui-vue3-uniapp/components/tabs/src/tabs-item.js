"use strict";const e=require("../../../../../../common/vendor.js");Math||t();const t=()=>"../../badge/src/badge.js",n=e.defineComponent({options:{virtualHost:!0},__name:"tabs-item",props:e.tabsItemProps,emits:e.tabsItemEmits,setup(t){const n=t,{componentId:s,isActive:o,hasBadge:a,itemClickEvent:r}=e.useTabsItem(n),{ns:u,tabsItemClass:i,tabsItemStyle:m}=e.useTabsItemCustomStyle(n,o);return(t,n)=>e.e({a:e.unref(a)},e.unref(a)?{b:e.o(e.unref(r)),c:e.p({value:t.badgeConfig.value,dot:t.badgeConfig.dot,size:t.badgeConfig.dot?"16":"",type:"danger"})}:{},{d:e.t(t.title),e:e.n(e.unref(u).e("content__value")),f:e.n(e.unref(u).e("content")),g:e.unref(s),h:e.n(e.unref(i)),i:e.s(e.unref(m)),j:e.o(((...t)=>e.unref(r)&&e.unref(r)(...t)))})}}),s=e._export_sfc(n,[["__scopeId","data-v-79bbca13"]]);wx.createComponent(s);
