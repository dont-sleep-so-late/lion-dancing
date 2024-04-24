"use strict";
const common_vendor = require("../../common/vendor.js");
const homePage_companyCulture_composables_useCompanyCulture = require("./composables/use-company-culture.js");
if (!Array) {
  const _component_TnNavbar = common_vendor.resolveComponent("TnNavbar");
  _component_TnNavbar();
}
if (!Math) {
  TnSwiper();
}
const TnSwiper = () => "../../node-modules/@tuniao/tnui-vue3-uniapp/components/swiper/src/swiper.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const { swiperData } = homePage_companyCulture_composables_useCompanyCulture.useCompanyCulture();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          fixed: true,
          ["bg-color"]: "transparent",
          ["bottom-shadow"]: false,
          placeholder: false
        }),
        b: common_vendor.w(({
          data,
          active
        }, s0, i0) => {
          return {
            a: data.secondImage,
            b: common_vendor.t(data.title),
            c: common_vendor.t(data.desc),
            d: common_vendor.n({
              active
            }),
            e: `url(${data.image})`,
            f: i0,
            g: s0
          };
        }, {
          name: "d",
          path: "b",
          vueId: "6a3ac7f6-1"
        }),
        c: common_vendor.p({
          data: common_vendor.unref(swiperData),
          indicator: true,
          ["indicator-position"]: "right-bottom"
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6a3ac7f6"], ["__file", "C:/Users/DIO/Desktop/大学/项目/狮业有成/demo-vue3/src/home-page/company-culture/index.vue"]]);
wx.createPage(MiniProgramPage);
