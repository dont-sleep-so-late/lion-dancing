"use strict";const e=require("../../common/vendor.js"),a=require("./composables/use-company-album.js");if(require("../../utils/local-mock.js"),!Array){(e.resolveComponent("TnNavbar")+e.resolveComponent("TnIcon"))()}Math||(t+o)();const o=()=>"../../node-modules/@tuniao/tnui-vue3-uniapp/components/water-fall/src/water-fall.js",t=()=>"../../node-modules/@tuniao/tnui-vue3-uniapp/components/lazy-load/src/lazy-load.js",n=e.defineComponent({__name:"index",setup(o){const{albumInfo:t,albumList:n,generateAlbumData:f}=a.useCompanyAlbum();return e.onReachBottom((()=>{f()})),(a,o)=>({a:e.p({fixed:!0,"bg-color":"transparent","bottom-shadow":!1,placeholder:!1}),b:e.t(e.unref(t).title),c:e.t(e.unref(t).desc),d:e.p({name:"tip-fill"}),e:e.w((({item:a},o,t)=>({a:"24ffd98f-3-"+t+",24ffd98f-2",b:e.p({src:a.image,mode:"widthFix"}),c:t,d:o})),{name:"left",path:"e",vueId:"24ffd98f-2"}),f:e.w((({item:a},o,t)=>({a:"24ffd98f-4-"+t+",24ffd98f-2",b:e.p({src:a.image,mode:"widthFix"}),c:t,d:o})),{name:"right",path:"f",vueId:"24ffd98f-2"}),g:e.p({data:e.unref(n)})})}}),f=e._export_sfc(n,[["__scopeId","data-v-24ffd98f"]]);wx.createPage(f);
