"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _component_TnNavbar = common_vendor.resolveComponent("TnNavbar");
  const _component_TnIcon = common_vendor.resolveComponent("TnIcon");
  (_component_TnNavbar + _component_TnIcon)();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      fixed: true,
      ["bg-color"]: "transparent",
      ["bottom-shadow"]: false,
      placeholder: false
    }),
    b: common_vendor.p({
      name: "location-fill"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-aa0de221"], ["__file", "C:/Users/DIO/Desktop/大学/项目/狮业有成/demo-vue3/src/home-page/company-location/index.vue"]]);
wx.createPage(MiniProgramPage);
