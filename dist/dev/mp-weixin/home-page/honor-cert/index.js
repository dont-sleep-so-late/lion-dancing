"use strict";
const common_vendor = require("../../common/vendor.js");
const homePage_honorCert_composables_useHonorCert = require("./composables/use-honor-cert.js");
if (!Array) {
  const _component_TnNavbar = common_vendor.resolveComponent("TnNavbar");
  const _component_TnIcon = common_vendor.resolveComponent("TnIcon");
  (_component_TnNavbar + _component_TnIcon)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const { honorCertList } = homePage_honorCert_composables_useHonorCert.useHonorCert();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          fixed: true,
          ["home-icon"]: "",
          ["home-text"]: "",
          ["back-icon"]: "left-arrow",
          ["bottom-shadow"]: false
        }),
        b: common_vendor.f(common_vendor.unref(honorCertList), (item, index, i0) => {
          return {
            a: `url(${item.image})`,
            b: common_vendor.t(item.title),
            c: "18489f78-1-" + i0,
            d: common_vendor.t(item.desc),
            e: index
          };
        }),
        c: common_vendor.p({
          name: "honor-fill"
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-18489f78"], ["__file", "C:/Users/DIO/Desktop/大学/项目/狮业有成/demo-vue3/src/home-page/honor-cert/index.vue"]]);
wx.createPage(MiniProgramPage);
