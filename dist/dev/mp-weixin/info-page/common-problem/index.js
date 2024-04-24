"use strict";
const common_vendor = require("../../common/vendor.js");
const infoPage_commonProblem_composables_useCommonProblem = require("./composables/use-common-problem.js");
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
    const { commonProblemData, loginProblemData, navProblemDetail } = infoPage_commonProblem_composables_useCommonProblem.useCommonProblem();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          fixed: true,
          ["bottom-shadow"]: false
        }),
        b: common_vendor.f(common_vendor.unref(commonProblemData), (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: "f84297d1-1-" + i0,
            c: index,
            d: common_vendor.o(($event) => common_vendor.unref(navProblemDetail)(item.id), index)
          };
        }),
        c: common_vendor.p({
          name: "right"
        }),
        d: common_vendor.f(common_vendor.unref(loginProblemData), (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: "f84297d1-2-" + i0,
            c: index,
            d: common_vendor.o(($event) => common_vendor.unref(navProblemDetail)(item.id), index)
          };
        }),
        e: common_vendor.p({
          name: "right"
        }),
        f: common_vendor.p({
          name: "wechat-fill",
          color: "#fff",
          size: "70"
        }),
        g: common_vendor.p({
          ["only-button"]: true,
          ["open-type"]: "contact"
        }),
        h: common_vendor.p({
          ["bg-color"]: "tn-gradient__blue"
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f84297d1"], ["__file", "C:/Users/DIO/Desktop/大学/项目/狮业有成/demo-vue3/src/info-page/common-problem/index.vue"]]);
wx.createPage(MiniProgramPage);
