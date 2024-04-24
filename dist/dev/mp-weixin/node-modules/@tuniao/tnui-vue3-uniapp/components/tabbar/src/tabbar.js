"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "tabbar",
  props: common_vendor.tabbarProps,
  emits: common_vendor.tabbarEmits,
  setup(__props, { expose }) {
    const props = __props;
    const { rectId, bulgeRectInfo, hasBulgeButton, setActiveItemByValue } = common_vendor.useTabbar(props);
    const {
      ns,
      tabbarClass,
      tabbarStyle,
      bgClass,
      bgStyle,
      placeholderStyle,
      bulgeClass,
      bulgeStyle
    } = common_vendor.useTabbarCustomStyle(props);
    expose({
      /**
       * @description 手动设置当前激活的item
       */
      setActiveItem: setActiveItemByValue
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(hasBulgeButton)
      }, common_vendor.unref(hasBulgeButton) ? {
        b: common_vendor.n(common_vendor.unref(bulgeClass)),
        c: `${common_vendor.unref(bulgeRectInfo).width}px`,
        d: `${common_vendor.unref(bulgeRectInfo).height}px`,
        e: `${common_vendor.unref(bulgeRectInfo).left}px`,
        f: `-${common_vendor.unref(bulgeRectInfo).height * 0.35}px`,
        g: common_vendor.s(common_vendor.unref(bulgeStyle))
      } : {}, {
        h: common_vendor.n(common_vendor.unref(bgClass)),
        i: common_vendor.s(common_vendor.unref(bgStyle)),
        j: common_vendor.n(common_vendor.unref(ns).e("content")),
        k: common_vendor.n({
          "tn-u-safe-area": _ctx.safeAreaInsetBottom
        }),
        l: common_vendor.unref(rectId),
        m: common_vendor.n(common_vendor.unref(tabbarClass)),
        n: common_vendor.s(common_vendor.unref(tabbarStyle)),
        o: _ctx.fixed && _ctx.placeholder
      }, _ctx.fixed && _ctx.placeholder ? {
        p: common_vendor.n(common_vendor.unref(ns).e("placeholder")),
        q: common_vendor.n({
          "tn-u-safe-area": _ctx.safeAreaInsetBottom
        }),
        r: common_vendor.s(common_vendor.unref(placeholderStyle))
      } : {});
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2d58a4ef"], ["__file", "C:/Users/DIO/Desktop/大学/项目/狮业有成/demo-vue3/node_modules/@tuniao/tnui-vue3-uniapp/components/tabbar/src/tabbar.vue"]]);
wx.createComponent(Component);
