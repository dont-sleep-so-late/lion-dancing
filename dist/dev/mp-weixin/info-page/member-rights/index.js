"use strict";
const common_vendor = require("../../common/vendor.js");
const infoPage_memberRights_composables_useMemberRights = require("./composables/use-member-rights.js");
if (!Array) {
  const _component_TnNavbar = common_vendor.resolveComponent("TnNavbar");
  const _component_TnButton = common_vendor.resolveComponent("TnButton");
  (_component_TnNavbar + _component_TnButton)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const { tuniaoProjects } = infoPage_memberRights_composables_useMemberRights.useMemberRights();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          fixed: true,
          ["bottom-shadow"]: false
        }),
        b: common_vendor.f(common_vendor.unref(tuniaoProjects), (item, index, i0) => {
          return common_vendor.e({
            a: common_vendor.t(item.name),
            b: !item.isVIP
          }, !item.isVIP ? {} : {}, {
            c: !item.isVIP
          }, !item.isVIP ? {} : {}, {
            d: index
          });
        }),
        c: common_vendor.p({
          shape: "round",
          ["bg-color"]: "tn-blue",
          shadow: true,
          ["shadow-color"]: "tn-blue",
          ["open-type"]: "contact",
          width: "70%",
          height: "76rpx"
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-aa7e7632"], ["__file", "C:/Users/DIO/Desktop/大学/项目/狮业有成/demo-vue3/src/info-page/member-rights/index.vue"]]);
wx.createPage(MiniProgramPage);
