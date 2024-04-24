"use strict";
const common_vendor = require("../../common/vendor.js");
const detailPage_problemDetail_composables_useProblemDetail = require("./composables/use-problem-detail.js");
if (!Array) {
  const _component_TnNavbar = common_vendor.resolveComponent("TnNavbar");
  _component_TnNavbar();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const { problemDetail, getProblemDetail } = detailPage_problemDetail_composables_useProblemDetail.useProblemDetail();
    common_vendor.onLoad((options) => {
      if (!(options == null ? void 0 : options.id)) {
        common_vendor.index.showModal({
          title: "标题",
          content: "参数错误",
          showCancel: false,
          success: () => {
            common_vendor.index.navigateBack();
          }
        });
        return;
      }
      getProblemDetail(options.id);
    });
    return (_ctx, _cache) => {
      var _a;
      return {
        a: common_vendor.p({
          fixed: true,
          ["bottom-shadow"]: false
        }),
        b: common_vendor.t((_a = common_vendor.unref(problemDetail)) == null ? void 0 : _a.content)
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d3f2e019"], ["__file", "C:/Users/DIO/Desktop/大学/项目/狮业有成/demo-vue3/src/detail-page/problem-detail/index.vue"]]);
wx.createPage(MiniProgramPage);
