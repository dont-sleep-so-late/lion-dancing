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
    leftIcon: { default: "star" },
    rightIcon: { default: "star" },
    titleBgImage: { default: "https://resource.tuniaokj.com/images/title_bg/title44.png" },
    blackTitle: { type: Boolean, default: false },
    coolBgNumber: { default: 15 }
  },
  setup(__props) {
    const props = __props;
    const titleStyle = common_vendor.computed(() => {
      const style = {};
      if (props.titleBgImage) {
        style.backgroundImage = `url(${props.titleBgImage})`;
      }
      return style;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          name: __props.leftIcon,
          transparent: !__props.blackTitle,
          ["transparent-bg"]: `tn-gradient-bg__cool-${__props.coolBgNumber}`
        }),
        b: common_vendor.t(__props.title),
        c: common_vendor.p({
          name: __props.rightIcon,
          transparent: !__props.blackTitle,
          ["transparent-bg"]: `tn-gradient-bg__cool-${__props.coolBgNumber}`
        }),
        d: common_vendor.n(__props.blackTitle ? "" : `tn-gradient-bg__cool-${__props.coolBgNumber} tn-text-transparent`),
        e: common_vendor.s(common_vendor.unref(titleStyle))
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-8b16567e"], ["__file", "C:/Users/DIO/Desktop/大学/项目/狮业有成/demo-vue3/src/components/cool-title/index.vue"]]);
wx.createComponent(Component);
