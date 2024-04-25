"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _component_TnNavbar = common_vendor.resolveComponent("TnNavbar");
  _component_TnNavbar();
}
if (!Math) {
  Video();
}
const Video = () => "../../components/video/video.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          fixed: true,
          ["bg-color"]: "transparent",
          ["bottom-shadow"]: false,
          placeholder: false
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a5bf2696"], ["__file", "C:/Users/DIO/Desktop/大学/项目/狮业有成/demo-vue3/src/home-page/win-win/index.vue"]]);
wx.createPage(MiniProgramPage);
