"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _component_TnIcon = common_vendor.resolveComponent("TnIcon");
  _component_TnIcon();
}
const __default__ = {
  options: {
    // 在微信小程序中将组件节点渲染为虚拟节点，更加接近Vue组件的表现(不会出现shadow节点下再去创建元素)
    virtualHost: true
  }
};
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  ...__default__,
  __name: "index",
  props: {
    title: null,
    operationTitle: { default: "更多" },
    operationIcon: { default: "right" },
    subTitle: { type: Boolean, default: false }
  },
  emits: ["click", "operation"],
  setup(__props, { emit: emits }) {
    const clickHandle = () => {
      emits("click");
    };
    const operationClickHandle = () => {
      emits("operation");
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(__props.title),
        b: common_vendor.t(__props.operationTitle),
        c: common_vendor.p({
          name: __props.operationIcon
        }),
        d: common_vendor.o(operationClickHandle),
        e: __props.subTitle ? 1 : "",
        f: common_vendor.o(clickHandle)
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-98db9ca4"], ["__file", "C:/Users/DIO/Desktop/大学/项目/狮业有成/demo-vue3/src/components/title/index.vue"]]);
wx.createComponent(Component);
