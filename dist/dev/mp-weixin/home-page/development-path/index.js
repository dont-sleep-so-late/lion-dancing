"use strict";
const common_vendor = require("../../common/vendor.js");
const homePage_developmentPath_composables_useDevelopmentPath = require("./composables/use-development-path.js");
if (!Array) {
  const _component_TnNavbar = common_vendor.resolveComponent("TnNavbar");
  _component_TnNavbar();
}
if (!Math) {
  (TnTimeLineData + TnTimeLineItem + TnTimeLine)();
}
const TnTimeLine = () => "../../node-modules/tnuiv3p-tn-time-line/time-line.js";
const TnTimeLineItem = () => "../../node-modules/tnuiv3p-tn-time-line/time-line-item.js";
const TnTimeLineData = () => "../../node-modules/tnuiv3p-tn-time-line/time-line-data.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const { developmentData } = homePage_developmentPath_composables_useDevelopmentPath.useDevelopmentPath();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          fixed: true,
          ["home-icon"]: "",
          ["home-text"]: "",
          ["back-icon"]: "left-arrow",
          ["bottom-shadow"]: false
        }),
        b: common_vendor.f(common_vendor.unref(developmentData), (dItem, dIndex, i0) => {
          return {
            a: common_vendor.f(dItem.data, (item, index, i1) => {
              return {
                a: item.image,
                b: common_vendor.t(item.desc),
                c: common_vendor.f(item.tags, (tag, tIndex, i2) => {
                  return {
                    a: common_vendor.t(tag),
                    b: tIndex
                  };
                }),
                d: index,
                e: "5234a4eb-3-" + i0 + "-" + i1 + "," + ("5234a4eb-2-" + i0)
              };
            }),
            b: dIndex,
            c: "5234a4eb-2-" + i0 + ",5234a4eb-1",
            d: common_vendor.p({
              title: dItem.date,
              ["title-icon"]: "trophy"
            })
          };
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5234a4eb"], ["__file", "C:/Users/DIO/Desktop/大学/项目/狮业有成/demo-vue3/src/home-page/development-path/index.vue"]]);
wx.createPage(MiniProgramPage);
