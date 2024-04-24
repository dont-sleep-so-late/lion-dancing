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
    desc: null,
    image: null,
    tag: { default: "" },
    viewCount: { default: 0 },
    likeCount: { default: 0 }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(__props.title),
        b: common_vendor.t(__props.desc),
        c: common_vendor.t(__props.tag && `# ${__props.tag}`),
        d: common_vendor.p({
          name: "rocket"
        }),
        e: common_vendor.t(__props.viewCount),
        f: common_vendor.p({
          name: "like-lack"
        }),
        g: common_vendor.t(__props.likeCount),
        h: __props.image
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f571fc93"], ["__file", "C:/Users/DIO/Desktop/大学/项目/狮业有成/demo-vue3/src/components/article-simple-item/index.vue"]]);
wx.createComponent(Component);
