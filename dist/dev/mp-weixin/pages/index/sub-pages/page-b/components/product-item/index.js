"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
if (!Array) {
  const _component_TnIcon = common_vendor.resolveComponent("TnIcon");
  _component_TnIcon();
}
if (!Math) {
  TnLazyLoad();
}
const TnLazyLoad = () => "../../../../../../node-modules/@tuniao/tnui-vue3-uniapp/components/lazy-load/src/lazy-load.js";
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
    product: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          src: __props.product.images[0],
          mode: "widthFix"
        }),
        b: common_vendor.t(__props.product.title),
        c: common_vendor.f(__props.product.tags, (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index
          };
        }),
        d: common_vendor.t(__props.product.price),
        e: common_vendor.p({
          name: "rocket"
        }),
        f: common_vendor.t(__props.product.sale),
        g: common_vendor.o(($event) => common_vendor.unref(common_vendor.tnNavPage)("/detail-page/product-detail/index"))
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-58f4720c"], ["__file", "C:/Users/DIO/Desktop/大学/项目/狮业有成/demo-vue3/src/pages/index/sub-pages/page-b/components/product-item/index.vue"]]);
wx.createComponent(Component);
