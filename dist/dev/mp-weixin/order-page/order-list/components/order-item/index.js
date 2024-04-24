"use strict";
const common_vendor = require("../../../../common/vendor.js");
const orderPage_orderList_types_index = require("../../types/index.js");
if (!Array) {
  const _component_TnIcon = common_vendor.resolveComponent("TnIcon");
  const _component_TnButton = common_vendor.resolveComponent("TnButton");
  (_component_TnIcon + _component_TnButton)();
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  props: {
    data: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(__props.data.orderId),
        b: common_vendor.p({
          name: "copy",
          color: "tn-grey"
        }),
        c: common_vendor.t(common_vendor.unref(orderPage_orderList_types_index.OrderStatusMap)[__props.data.status].label),
        d: common_vendor.n(common_vendor.unref(orderPage_orderList_types_index.OrderStatusMap)[__props.data.status].color),
        e: __props.data.mainImage,
        f: common_vendor.t(__props.data.title),
        g: common_vendor.t(__props.data.price),
        h: common_vendor.t(__props.data.date),
        i: __props.data.status === 4
      }, __props.data.status === 4 ? {
        j: common_vendor.p({
          shape: "round",
          ["bg-color"]: "tn-blue",
          shadow: true,
          ["shadow-color"]: "tn-blue",
          size: "sm"
        })
      } : {}, {
        k: __props.data.status === 0
      }, __props.data.status === 0 ? {
        l: common_vendor.p({
          shape: "round",
          ["bg-color"]: "tn-blue",
          shadow: true,
          ["shadow-color"]: "tn-blue",
          size: "sm"
        })
      } : {}, {
        m: __props.data.status === 0
      }, __props.data.status === 0 ? {
        n: common_vendor.p({
          shape: "round",
          ["bg-color"]: "tn-type-danger",
          shadow: true,
          ["shadow-color"]: "tn-type-danger",
          size: "sm"
        })
      } : {}, {
        o: __props.data.status === 2
      }, __props.data.status === 2 ? {
        p: common_vendor.p({
          shape: "round",
          ["bg-color"]: "tn-blue",
          shadow: true,
          ["shadow-color"]: "tn-blue",
          size: "sm"
        })
      } : {}, {
        q: [1, 2].includes(__props.data.status)
      }, [1, 2].includes(__props.data.status) ? {
        r: common_vendor.p({
          shape: "round",
          ["bg-color"]: "tn-type-danger",
          shadow: true,
          ["shadow-color"]: "tn-type-danger",
          size: "sm"
        })
      } : {});
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a3e964f5"], ["__file", "C:/Users/DIO/Desktop/大学/项目/狮业有成/demo-vue3/src/order-page/order-list/components/order-item/index.vue"]]);
wx.createComponent(Component);
