"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _component_TnIcon = common_vendor.resolveComponent("TnIcon");
  const _component_TnButton = common_vendor.resolveComponent("TnButton");
  (_component_TnIcon + _component_TnButton)();
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
    messageIcon: { default: "comment" },
    buttonText: null,
    buttonTextColor: { default: "#fff" },
    buttonBgColor: { default: "tn-gradient__red" }
  },
  setup(__props) {
    const props = __props;
    const [buttonTextColorClass, buttonTextColorStyle] = common_vendor.useComponentColor(
      common_vendor.toRef(props, "buttonTextColor"),
      "text"
    );
    const [buttonBgColorClass, buttonBgColorStyle] = common_vendor.useComponentColor(
      common_vendor.toRef(props, "buttonBgColor"),
      "bg"
    );
    const consultButtonClass = common_vendor.computed(() => {
      const cls = [];
      if (buttonTextColorClass.value) {
        cls.push(buttonTextColorClass.value);
      }
      if (buttonBgColorClass.value) {
        cls.push(buttonBgColorClass.value);
      }
      return cls.join(" ");
    });
    const consultButtonStyle = common_vendor.computed(() => {
      const style = {};
      if (buttonTextColorStyle.value) {
        style.color = buttonTextColorStyle.value;
      }
      if (buttonBgColorStyle.value) {
        style.backgroundColor = buttonBgColorStyle.value;
      }
      return style;
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          name: __props.messageIcon
        }),
        b: common_vendor.t(__props.buttonText),
        c: common_vendor.p({
          ["only-button"]: true,
          ["open-type"]: "contact",
          height: "100%",
          width: "100%"
        }),
        d: common_vendor.n(common_vendor.unref(consultButtonClass)),
        e: common_vendor.s(common_vendor.unref(consultButtonStyle))
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a0b94c16"], ["__file", "C:/Users/DIO/Desktop/大学/项目/狮业有成/demo-vue3/src/components/consult-operation-bar/index.vue"]]);
wx.createComponent(Component);
