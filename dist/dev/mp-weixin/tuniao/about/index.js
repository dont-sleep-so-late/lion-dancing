"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _component_TnNavbar = common_vendor.resolveComponent("TnNavbar");
  const _component_TnIcon = common_vendor.resolveComponent("TnIcon");
  const _component_TnButton = common_vendor.resolveComponent("TnButton");
  (_component_TnNavbar + _component_TnIcon + _component_TnButton)();
}
if (!Math) {
  TnSuspendButton();
}
const TnSuspendButton = () => "../../node-modules/tnuiv3p-tn-suspend-button/index.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          ["bg-color"]: "transparent",
          fixed: true,
          ["bottom-shadow"]: false,
          placeholder: false
        }),
        b: common_vendor.p({
          name: "wechat-fill",
          color: "#fff",
          size: "70"
        }),
        c: common_vendor.p({
          ["only-button"]: true,
          ["open-type"]: "contact"
        }),
        d: common_vendor.p({
          ["bg-color"]: "tn-gradient__orange"
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a47e2a6f"], ["__file", "C:/Users/DIO/Desktop/大学/项目/狮业有成/demo-vue3/src/tuniao/about/index.vue"]]);
wx.createPage(MiniProgramPage);
