"use strict";
const common_vendor = require("../../../../common/vendor.js");
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
    placeholderBottom: { type: Boolean, default: true }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.n({
          "placeholder-bottom": __props.placeholderBottom
        })
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-bc6d96b8"], ["__file", "C:/Users/DIO/Desktop/大学/项目/狮业有成/demo-vue3/src/pages/index/components/page-container/index.vue"]]);
wx.createComponent(Component);
