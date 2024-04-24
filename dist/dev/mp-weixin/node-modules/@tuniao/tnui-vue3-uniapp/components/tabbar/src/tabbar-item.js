"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
if (!Math) {
  (TnIcon + TnBadge)();
}
const TnIcon = () => "../../icon/src/icon.js";
const TnBadge = () => "../../badge/src/badge.js";
const __default__ = {
  options: {
    // 在微信小程序中将组件节点渲染为虚拟节点，更加接近Vue组件的表现(不会出现shadow节点下再去创建元素)
    virtualHost: true
  }
};
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  ...__default__,
  __name: "tabbar-item",
  props: common_vendor.tabbarItemProps,
  emits: common_vendor.tabbatItemEmits,
  setup(__props, { emit: emits }) {
    const props = __props;
    const { itemId, isActive, itemRectInfo, iconSize, hasBadge, itemClick } = common_vendor.useTabbarItem(props, emits);
    const {
      ns,
      tabbarItemClass,
      tabbarItemStyle,
      tabbarItemElementStyle,
      bulgeClass,
      bulgeStyle
    } = common_vendor.useTabbarItemCustomStyle(props, isActive);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: _ctx.bulge
      }, _ctx.bulge ? {
        b: common_vendor.p({
          name: common_vendor.unref(isActive) ? _ctx.activeIcon : _ctx.icon,
          size: common_vendor.unref(iconSize)
        }),
        c: common_vendor.n(common_vendor.unref(bulgeClass)),
        d: common_vendor.s(common_vendor.unref(bulgeStyle)(common_vendor.unref(itemRectInfo)))
      } : common_vendor.e({
        e: _ctx.icon && _ctx.activeIcon
      }, _ctx.icon && _ctx.activeIcon ? common_vendor.e({
        f: common_vendor.p({
          name: common_vendor.unref(isActive) ? _ctx.activeIcon : _ctx.icon,
          size: common_vendor.unref(iconSize)
        }),
        g: common_vendor.unref(hasBadge)
      }, common_vendor.unref(hasBadge) ? {
        h: common_vendor.p({
          value: _ctx.badge,
          dot: _ctx.badgeConfig.dot,
          size: _ctx.badgeConfig.dot ? "16" : "",
          type: "danger"
        })
      } : {}, {
        i: common_vendor.n(common_vendor.unref(ns).e("icon")),
        j: common_vendor.s(common_vendor.unref(tabbarItemElementStyle)("icon"))
      }) : {}), {
        k: _ctx.text
      }, _ctx.text ? {
        l: common_vendor.t(_ctx.text),
        m: common_vendor.n(common_vendor.unref(ns).e("text")),
        n: common_vendor.s(common_vendor.unref(tabbarItemElementStyle)("text"))
      } : {}, {
        o: common_vendor.unref(itemId),
        p: common_vendor.n(common_vendor.unref(tabbarItemClass)),
        q: common_vendor.s(common_vendor.unref(tabbarItemStyle)),
        r: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(itemClick) && common_vendor.unref(itemClick)(...args)
        )
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c5d689a1"], ["__file", "C:/Users/DIO/Desktop/大学/项目/狮业有成/demo-vue3/node_modules/@tuniao/tnui-vue3-uniapp/components/tabbar/src/tabbar-item.vue"]]);
wx.createComponent(Component);
