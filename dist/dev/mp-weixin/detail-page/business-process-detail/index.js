"use strict";
const common_vendor = require("../../common/vendor.js");
const detailPage_businessProcessDetail_composables_useBusinessProcessDetail = require("./composables/use-business-process-detail.js");
const hooks_useScrollUpdownBottomContent_index = require("../../hooks/use-scroll-updown-bottom-content/index.js");
if (!Array) {
  const _component_TnNavbar = common_vendor.resolveComponent("TnNavbar");
  _component_TnNavbar();
}
if (!Math) {
  (TnTimeLineData + TnTimeLineItem + TnTimeLine + ConsultOperationBar)();
}
const TnTimeLine = () => "../../node-modules/tnuiv3p-tn-time-line/time-line.js";
const TnTimeLineItem = () => "../../node-modules/tnuiv3p-tn-time-line/time-line-item.js";
const TnTimeLineData = () => "../../node-modules/tnuiv3p-tn-time-line/time-line-data.js";
const ConsultOperationBar = () => "../../components/consult-operation-bar/index.js";
const _sfc_defineComponent = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const instance = common_vendor.getCurrentInstance();
    const {
      style: operationBarScrollStyle,
      scrollHandle: operationBarScrollHandle
    } = hooks_useScrollUpdownBottomContent_index.useScrollUpdownBottomContent("up", 80);
    const { businessProcessDetail } = detailPage_businessProcessDetail_composables_useBusinessProcessDetail.useBusinessProcessDetail();
    common_vendor.onPageScroll((e) => {
      const top = e.scrollTop;
      operationBarScrollHandle(instance, top);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(common_vendor.unref(businessProcessDetail).title),
        b: common_vendor.p({
          fixed: true,
          ["back-icon"]: "left-arrow",
          ["home-icon"]: "",
          ["home-text"]: "",
          ["bottom-shadow"]: false
        }),
        c: common_vendor.f(common_vendor.unref(businessProcessDetail).data, (item, index, i0) => {
          return {
            a: common_vendor.f(item.data, (dItem, dIndex, i1) => {
              return {
                a: common_vendor.t(dItem),
                b: dIndex,
                c: "9ee9269f-3-" + i0 + "-" + i1 + "," + ("9ee9269f-2-" + i0)
              };
            }),
            b: index,
            c: "9ee9269f-2-" + i0 + ",9ee9269f-1",
            d: common_vendor.p({
              title: item.title,
              ["title-icon"]: "clip"
            })
          };
        }),
        d: common_vendor.p({
          ["dot-icon"]: "constellation",
          ["dot-color"]: "tn-indigo"
        }),
        e: common_vendor.t(common_vendor.unref(businessProcessDetail).consultCount),
        f: common_vendor.p({
          ["button-text"]: "业务资讯"
        }),
        g: common_vendor.s(common_vendor.unref(operationBarScrollStyle))
      };
    };
  }
});
_sfc_defineComponent.__runtimeHooks = 1;
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_defineComponent, [["__scopeId", "data-v-9ee9269f"], ["__file", "C:/Users/DIO/Desktop/大学/项目/狮业有成/demo-vue3/src/detail-page/business-process-detail/index.vue"]]);
wx.createPage(MiniProgramPage);
