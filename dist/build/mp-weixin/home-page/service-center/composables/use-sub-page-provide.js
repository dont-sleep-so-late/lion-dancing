"use strict";const e=require("../../../common/vendor.js"),n=require("../tokens/index-page.js");exports.useSubPageProvide=(o,d={})=>{const i=e.getCurrentInstance(),{uid:l}=i,r=e.inject(n.indexPageContextKey,null);return null==r||r.addItem({uid:l,index:o,onLoad:null==d?void 0:d.onLoad,onShow:null==d?void 0:d.onShow,onScroll:null==d?void 0:d.onScroll}),{indexPage:r}};
