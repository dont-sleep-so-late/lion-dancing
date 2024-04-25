"use strict";
const common_vendor = require("../../common/vendor.js");
const detailPage_productDetail_composables_useProductDetail = require("./composables/use-product-detail.js");
require("../../utils/local-mock.js");
require("../../hooks/use-scroll-transparent-navbar/index.js");
if (!Array) {
  const _component_TnNavbar = common_vendor.resolveComponent("TnNavbar");
  const _component_TnIcon = common_vendor.resolveComponent("TnIcon");
  const _component_TnButton = common_vendor.resolveComponent("TnButton");
  (_component_TnNavbar + _component_TnIcon + _component_TnButton)();
}
if (!Math) {
  (TnSwiper + CoolTitle)();
}
const TnSwiper = () => "../../node-modules/@tuniao/tnui-vue3-uniapp/components/swiper/src/swiper.js";
const CoolTitle = () => "../../components/cool-title/index.js";
const _sfc_defineComponent = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const {
      triggerElementId,
      navbarOpacity,
      product,
      initTransparentScroll,
      opacityScrollHandle,
      navbarInitFinishHandle
    } = detailPage_productDetail_composables_useProductDetail.useProductDetail();
    common_vendor.onReady(() => {
      initTransparentScroll();
    });
    common_vendor.onPageScroll((e) => {
      const top = e.scrollTop;
      opacityScrollHandle(top);
    });
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f;
      return {
        a: common_vendor.o(common_vendor.unref(navbarInitFinishHandle)),
        b: common_vendor.p({
          fixed: true,
          ["bg-color"]: `rgba(255, 255, 255, ${common_vendor.unref(navbarOpacity)})`,
          ["bottom-shadow"]: false,
          placeholder: false
        }),
        c: common_vendor.w(({
          data
        }, s0, i0) => {
          return {
            a: data,
            b: i0,
            c: s0
          };
        }, {
          name: "d",
          path: "c",
          vueId: "46f8ded9-1"
        }),
        d: common_vendor.p({
          data: (_a = common_vendor.unref(product)) == null ? void 0 : _a.images,
          autoplay: true,
          loop: true,
          indicator: true
        }),
        e: common_vendor.p({
          name: "share-circle",
          size: "54"
        }),
        f: common_vendor.p({
          ["only-button"]: true,
          ["open-type"]: "share"
        }),
        g: common_vendor.t((_b = common_vendor.unref(product)) == null ? void 0 : _b.title),
        h: common_vendor.t((_c = common_vendor.unref(product)) == null ? void 0 : _c.price),
        i: common_vendor.t((_d = common_vendor.unref(product)) == null ? void 0 : _d.sale),
        j: common_vendor.f((_e = common_vendor.unref(product)) == null ? void 0 : _e.attributes, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.t(item.value),
            c: index
          };
        }),
        k: common_vendor.p({
          title: "醒狮周边 · 产品详情",
          ["cool-bg-number"]: 6
        }),
        l: common_vendor.t((_f = common_vendor.unref(product)) == null ? void 0 : _f.content),
        m: common_vendor.unref(triggerElementId),
        n: common_vendor.p({
          name: "home-in"
        }),
        o: common_vendor.o(($event) => common_vendor.unref(common_vendor.tnNavPage)("/pages/index/index", "reLaunch")),
        p: common_vendor.p({
          name: "service-simple-fill"
        }),
        q: common_vendor.p({
          ["only-button"]: true,
          ["open-type"]: "contact"
        })
      };
    };
  }
});
_sfc_defineComponent.__runtimeHooks = 1;
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_defineComponent, [["__scopeId", "data-v-46f8ded9"], ["__file", "C:/Users/DIO/Desktop/大学/项目/狮业有成/demo-vue3/src/detail-page/product-detail/index.vue"]]);
wx.createPage(MiniProgramPage);
