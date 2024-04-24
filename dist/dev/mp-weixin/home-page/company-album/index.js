"use strict";
const common_vendor = require("../../common/vendor.js");
const homePage_companyAlbum_composables_useCompanyAlbum = require("./composables/use-company-album.js");
require("../../utils/local-mock.js");
if (!Array) {
  const _component_TnNavbar = common_vendor.resolveComponent("TnNavbar");
  const _component_TnIcon = common_vendor.resolveComponent("TnIcon");
  (_component_TnNavbar + _component_TnIcon)();
}
if (!Math) {
  (TnLazyLoad + TnWaterFall)();
}
const TnWaterFall = () => "../../node-modules/@tuniao/tnui-vue3-uniapp/components/water-fall/src/water-fall.js";
const TnLazyLoad = () => "../../node-modules/@tuniao/tnui-vue3-uniapp/components/lazy-load/src/lazy-load.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const { albumInfo, albumList, generateAlbumData } = homePage_companyAlbum_composables_useCompanyAlbum.useCompanyAlbum();
    common_vendor.onReachBottom(() => {
      generateAlbumData();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          fixed: true,
          ["bg-color"]: "transparent",
          ["bottom-shadow"]: false,
          placeholder: false
        }),
        b: common_vendor.t(common_vendor.unref(albumInfo).title),
        c: common_vendor.t(common_vendor.unref(albumInfo).desc),
        d: common_vendor.p({
          name: "tip-fill"
        }),
        e: common_vendor.w(({
          item
        }, s0, i0) => {
          return {
            a: "835a1d68-3-" + i0 + ",835a1d68-2",
            b: common_vendor.p({
              src: item.image,
              mode: "widthFix"
            }),
            c: i0,
            d: s0
          };
        }, {
          name: "left",
          path: "e",
          vueId: "835a1d68-2"
        }),
        f: common_vendor.w(({
          item
        }, s0, i0) => {
          return {
            a: "835a1d68-4-" + i0 + ",835a1d68-2",
            b: common_vendor.p({
              src: item.image,
              mode: "widthFix"
            }),
            c: i0,
            d: s0
          };
        }, {
          name: "right",
          path: "f",
          vueId: "835a1d68-2"
        }),
        g: common_vendor.p({
          data: common_vendor.unref(albumList)
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-835a1d68"], ["__file", "C:/Users/DIO/Desktop/大学/项目/狮业有成/demo-vue3/src/home-page/company-album/index.vue"]]);
wx.createPage(MiniProgramPage);
