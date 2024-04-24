"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
if (!Math) {
  (TnLoading + TnIcon)();
}
const TnIcon = () => "../../icon/src/icon.js";
const TnLoading = () => "../../loading/src/loading.js";
const __default__ = {
  options: {
    // 在微信小程序中将组件节点渲染为虚拟节点，更加接近Vue组件的表现(不会出现shadow节点下再去创建元素)
    virtualHost: true
  }
};
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  ...__default__,
  __name: "button",
  props: common_vendor.buttonProps,
  emits: common_vendor.buttonEmits,
  setup(__props, { emit: emits }) {
    const props = __props;
    const {
      buttonClick,
      getPhoneNumber,
      openSetting,
      launchApp,
      getUserInfo,
      chooseAvatar,
      agreePrivacyAuthorization,
      openTypeError
    } = common_vendor.useButton(props, emits);
    const { ns, buttonClass, buttonStyle } = common_vendor.useButtonCustomStyle(props);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: _ctx.loading
      }, _ctx.loading ? {
        b: common_vendor.p({
          show: true,
          animation: true,
          mode: "flower",
          color: "tn-gray"
        }),
        c: common_vendor.n(common_vendor.unref(ns).m("loading"))
      } : {}, {
        d: _ctx.icon
      }, _ctx.icon ? {
        e: common_vendor.p({
          name: _ctx.icon
        }),
        f: common_vendor.n(common_vendor.unref(ns).e("icon"))
      } : {}, {
        g: common_vendor.n(common_vendor.unref(buttonClass)),
        h: common_vendor.s(common_vendor.unref(buttonStyle)),
        i: props.disabled || props.loading || props.onlyButton ? "" : _ctx.hoverClass,
        j: _ctx.disabled,
        k: _ctx.formType,
        l: _ctx.openType,
        m: _ctx.appParameter,
        n: _ctx.sessionFrom,
        o: _ctx.sendMessageTitle,
        p: _ctx.sendMessagePath,
        q: _ctx.sendMessageImg,
        r: _ctx.showMessageCard,
        s: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(buttonClick) && common_vendor.unref(buttonClick)(...args)
        ),
        t: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(getPhoneNumber) && common_vendor.unref(getPhoneNumber)(...args)
        ),
        v: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(openSetting) && common_vendor.unref(openSetting)(...args)
        ),
        w: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(launchApp) && common_vendor.unref(launchApp)(...args)
        ),
        x: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(getUserInfo) && common_vendor.unref(getUserInfo)(...args)
        ),
        y: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(chooseAvatar) && common_vendor.unref(chooseAvatar)(...args)
        ),
        z: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(agreePrivacyAuthorization) && common_vendor.unref(agreePrivacyAuthorization)(...args)
        ),
        A: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(openTypeError) && common_vendor.unref(openTypeError)(...args)
        )
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2c34b8c1"], ["__file", "C:/Users/DIO/Desktop/大学/项目/狮业有成/demo-vue3/node_modules/@tuniao/tnui-vue3-uniapp/components/button/src/button.vue"]]);
wx.createComponent(Component);
