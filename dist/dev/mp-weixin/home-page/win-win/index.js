"use strict";
const common_vendor = require("../../common/vendor.js");
const homePage_winWin_composables_useWinWin = require("./composables/use-win-win.js");
if (!Array) {
  const _component_TnNavbar = common_vendor.resolveComponent("TnNavbar");
  const _component_TnIcon = common_vendor.resolveComponent("TnIcon");
  const _component_TnButton = common_vendor.resolveComponent("TnButton");
  (_component_TnNavbar + _component_TnIcon + _component_TnButton)();
}
if (!Math) {
  (TnSlideShow + TnSuspendButton)();
}
const TnSlideShow = () => "../../node-modules/tnuiv3p-tn-slideshow/index.js";
const TnSuspendButton = () => "../../node-modules/tnuiv3p-tn-suspend-button/index.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const { slideImages } = homePage_winWin_composables_useWinWin.useWinWin();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          fixed: true,
          ["bg-color"]: "transparent",
          ["bottom-shadow"]: false,
          placeholder: false
        }),
        b: common_vendor.p({
          data: common_vendor.unref(slideImages)
        }),
        c: common_vendor.p({
          name: "wechat-fill",
          color: "#fff",
          size: "70"
        }),
        d: common_vendor.p({
          ["only-button"]: true,
          ["open-type"]: "contact"
        }),
        e: common_vendor.p({
          ["bg-color"]: "tn-gradient__orange"
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a5bf2696"], ["__file", "C:/Users/DIO/Desktop/大学/项目/狮业有成/demo-vue3/src/home-page/win-win/index.vue"]]);
wx.createPage(MiniProgramPage);
