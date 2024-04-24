"use strict";
const common_vendor = require("../../common/vendor.js");
const homePage_brandIntroduction_composables_useBrandIntroduction = require("./composables/use-brand-introduction.js");
const hooks_useScrollUpdownBottomContent_index = require("../../hooks/use-scroll-updown-bottom-content/index.js");
require("../../hooks/use-scroll-transparent-navbar/index.js");
if (!Array) {
  const _component_TnNavbar = common_vendor.resolveComponent("TnNavbar");
  const _component_TnIcon = common_vendor.resolveComponent("TnIcon");
  (_component_TnNavbar + _component_TnIcon)();
}
if (!Math) {
  (TnSwiper + TnAvatar + TnPopup)();
}
const TnSwiper = () => "../../node-modules/@tuniao/tnui-vue3-uniapp/components/swiper/src/swiper.js";
const TnAvatar = () => "../../node-modules/@tuniao/tnui-vue3-uniapp/components/avatar/src/avatar.js";
const TnPopup = () => "../../node-modules/@tuniao/tnui-vue3-uniapp/components/popup/src/popup.js";
const _sfc_defineComponent = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const {
      instance,
      triggerElementId,
      navbarOpacity,
      swiperData,
      brandIntroductionData,
      authorInfo,
      showAuthorCodeInfo,
      initTransparentScroll,
      navbarInitFinishHandle,
      opacityScrollHandle,
      openAuthorCodeInfo,
      previewAuthorWechatCode,
      copyAuthorWechat
    } = homePage_brandIntroduction_composables_useBrandIntroduction.useBrandIntroduction();
    const { style: authInfoScrollStyle, scrollHandle: authInfoScrollHandle } = hooks_useScrollUpdownBottomContent_index.useScrollUpdownBottomContent("up", 80);
    common_vendor.onReady(() => {
      initTransparentScroll();
    });
    common_vendor.onPageScroll((e) => {
      opacityScrollHandle(e.scrollTop);
      authInfoScrollHandle(instance, e.scrollTop);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(common_vendor.unref(navbarInitFinishHandle)),
        b: common_vendor.p({
          fixed: true,
          ["bg-color"]: `rgba(255, 255, 255, ${common_vendor.unref(navbarOpacity)})`,
          ["bottom-shadow"]: false,
          placeholder: false
        }),
        c: common_vendor.w(({
          data,
          active
        }, s0, i0) => {
          return {
            a: data.image,
            b: common_vendor.t(data.title),
            c: common_vendor.t(data.desc),
            d: common_vendor.t(data.remark),
            e: common_vendor.n({
              active
            }),
            f: i0,
            g: s0
          };
        }, {
          name: "d",
          path: "c",
          vueId: "150e06f2-1"
        }),
        d: common_vendor.p({
          data: common_vendor.unref(swiperData),
          loop: true,
          autoplay: true
        }),
        e: common_vendor.p({
          name: "qr-code"
        }),
        f: common_vendor.t(common_vendor.unref(brandIntroductionData)),
        g: common_vendor.unref(triggerElementId),
        h: common_vendor.p({
          url: common_vendor.unref(authorInfo).avatar,
          size: "80"
        }),
        i: common_vendor.t(common_vendor.unref(authorInfo).nickname),
        j: common_vendor.t(common_vendor.unref(authorInfo).office),
        k: common_vendor.t(common_vendor.unref(authorInfo).company),
        l: common_vendor.p({
          name: "wechat-fill",
          color: "#28b83e"
        }),
        m: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(openAuthorCodeInfo) && common_vendor.unref(openAuthorCodeInfo)(...args)
        ),
        n: common_vendor.s(common_vendor.unref(authInfoScrollStyle)),
        o: common_vendor.unref(authorInfo).wechatCode,
        p: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(previewAuthorWechatCode) && common_vendor.unref(previewAuthorWechatCode)(...args)
        ),
        q: common_vendor.t(common_vendor.unref(authorInfo).wechat),
        r: common_vendor.p({
          name: "copy",
          color: "tn-blue-light"
        }),
        s: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(copyAuthorWechat) && common_vendor.unref(copyAuthorWechat)(...args)
        ),
        t: common_vendor.o(($event) => common_vendor.isRef(showAuthorCodeInfo) ? showAuthorCodeInfo.value = $event : null),
        v: common_vendor.p({
          modelValue: common_vendor.unref(showAuthorCodeInfo)
        })
      };
    };
  }
});
_sfc_defineComponent.__runtimeHooks = 1;
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_defineComponent, [["__scopeId", "data-v-150e06f2"], ["__file", "C:/Users/DIO/Desktop/大学/项目/狮业有成/demo-vue3/src/home-page/brand-introduction/index.vue"]]);
wx.createPage(MiniProgramPage);
