"use strict";const e=require("../../../../../../common/vendor.js");Math||n();const n=()=>"../../icon/src/icon.js",r=e.defineComponent({__name:"search-box",props:e.searchBoxProps,emits:e.searchBoxEmits,setup(n,{emit:r}){const u=n,{showPlaceholder:o,inputValue:t,inputFocus:c,searchBoxClickEvent:l,inputFocusEvent:a,inputBlurEvent:s,inputValueEvent:f,clearClickEvent:h,searchBtnClickEvent:p}=e.useSearchBox(u,r),{ns:i,searchBoxClass:d,searchBoxStyle:B,placeholderClass:x,placeholderStyle:m,searchButtonClass:v,searchButtonStyle:C}=e.useSearchBoxCustomStyle(u);return(n,r)=>e.e({a:e.unref(o)},e.unref(o)?e.e({b:n.placeholderIcon},n.placeholderIcon?{c:e.p({name:n.placeholderIcon}),d:e.n(e.unref(i).e("placeholder-icon"))}:{},{e:n.placeholder},n.placeholder?{f:e.t(n.placeholder),g:e.n(e.unref(i).e("placeholder-text"))}:{},{h:e.n(e.unref(x)),i:e.s(e.unref(m))}):e.e({j:e.n(e.unref(i).e("input")),k:e.n(e.unref(i).em("input",n.textAlign)),l:e.unref(c),m:e.o(((...n)=>e.unref(a)&&e.unref(a)(...n))),n:e.o(((...n)=>e.unref(s)&&e.unref(s)(...n))),o:e.o([n=>e.isRef(t)?t.value=n.detail.value:null,(...n)=>e.unref(f)&&e.unref(f)(...n)]),p:e.o(((...n)=>e.unref(p)&&e.unref(p)(...n))),q:e.unref(t),r:n.clearable&&e.unref(t)},n.clearable&&e.unref(t)?{s:e.p({name:"close-fill"}),t:e.n(e.unref(i).e("clear-button")),v:e.o(((...n)=>e.unref(h)&&e.unref(h)(...n)))}:{}),{w:e.n(e.unref(i).e("content")),x:n.searchButton},n.searchButton?{y:e.t(n.searchButtonText),z:e.n(e.unref(v)),A:e.s(e.unref(C)),B:e.o(((...n)=>e.unref(p)&&e.unref(p)(...n)))}:{},{C:e.n(e.unref(d)),D:e.s(e.unref(B)),E:e.o(((...n)=>e.unref(l)&&e.unref(l)(...n)))})}}),u=e._export_sfc(r,[["__scopeId","data-v-d25b03d6"]]);wx.createComponent(u);
