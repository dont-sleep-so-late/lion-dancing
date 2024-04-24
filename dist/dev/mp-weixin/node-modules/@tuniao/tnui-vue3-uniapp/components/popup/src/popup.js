"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
if (!Math) {
  (TnOverlay + TnIcon)();
}
const TnOverlay = () => "../../overlay/src/overlay.js";
const TnIcon = () => "../../icon/src/icon.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "popup",
  props: common_vendor.popupProps,
  emits: common_vendor.popupEmits,
  setup(__props) {
    const props = __props;
    const {
      showOverlay,
      showPopup,
      visiblePopup,
      overlayZIndex,
      zIndex,
      onClickCloseBtn,
      onClickOverlay
    } = common_vendor.usePopup(props);
    const { ns, popupContentClass, popupContentStyle } = common_vendor.usePopupCustomStyle(props);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(common_vendor.unref(onClickOverlay)),
        b: common_vendor.p({
          show: common_vendor.unref(showOverlay),
          ["z-index"]: common_vendor.unref(overlayZIndex),
          opacity: _ctx.overlayOpacity
        }),
        c: _ctx.closeBtn
      }, _ctx.closeBtn ? {
        d: common_vendor.p({
          name: "close"
        }),
        e: common_vendor.n(common_vendor.unref(ns).e("close-btn")),
        f: common_vendor.n(common_vendor.unref(ns).em("close-btn", _ctx.closeBtnPosition)),
        g: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(onClickCloseBtn) && common_vendor.unref(onClickCloseBtn)(...args)
        )
      } : {}, {
        h: common_vendor.n(common_vendor.unref(popupContentClass)),
        i: common_vendor.s(common_vendor.unref(popupContentStyle)),
        j: common_vendor.n(common_vendor.unref(ns).b()),
        k: common_vendor.n(common_vendor.unref(ns).is("show", common_vendor.unref(showPopup))),
        l: common_vendor.n(common_vendor.unref(ns).is("visible", common_vendor.unref(visiblePopup))),
        m: common_vendor.unref(zIndex)
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-557a403b"], ["__file", "C:/Users/DIO/Desktop/大学/项目/狮业有成/demo-vue3/node_modules/@tuniao/tnui-vue3-uniapp/components/popup/src/popup.vue"]]);
wx.createComponent(Component);
