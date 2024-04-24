"use strict";
const common_vendor = require("../../../../common/vendor.js");
const pages_index_subPages_pageA_composables_useSubPage = require("./composables/use-sub-page.js");
require("../../composables/use-sub-page-provide.js");
require("../../tokens/index-page.js");
require("../../../../hooks/use-scroll-transparent-navbar/index.js");
require("../../../../types/color.js");
if (!Array) {
  const _component_TnIcon = common_vendor.resolveComponent("TnIcon");
  const _component_TnNavbar = common_vendor.resolveComponent("TnNavbar");
  (_component_TnIcon + _component_TnNavbar)();
}
if (!Math) {
  (TnSwiper + TnNoticeBar + Title + PageContainer)();
}
const TnSwiper = () => "../../../../node-modules/@tuniao/tnui-vue3-uniapp/components/swiper/src/swiper.js";
const TnNoticeBar = () => "../../../../node-modules/@tuniao/tnui-vue3-uniapp/components/notice-bar/src/notice-bar.js";
const PageContainer = () => "../../components/page-container/index.js";
const Title = () => "../../../../components/title/index.js";
const __default__ = {
  options: {
    // 在微信小程序中将组件节点渲染为虚拟节点，更加接近Vue组件的表现(不会出现shadow节点下再去创建元素)
    virtualHost: true
  }
};
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  ...__default__,
  __name: "index",
  setup(__props) {
    const {
      triggerElementId,
      navbarOpacity,
      swiperData,
      hotCategoryData,
      noticeData,
      adCapsuleData,
      hotCaseData,
      tnNavPage,
      navbarInitFinishHandle,
      navAboutPage,
      navSearchPage
    } = pages_index_subPages_pageA_composables_useSubPage.useSubPage();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(navAboutPage) && common_vendor.unref(navAboutPage)(...args)
        ),
        b: common_vendor.p({
          name: "search"
        }),
        c: `rgba(248, 247, 248 , ${Math.max(0.25, common_vendor.unref(navbarOpacity))})`,
        d: `rgba(0, 0, 0 , ${Math.max(0.45, common_vendor.unref(navbarOpacity))})`,
        e: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(navSearchPage) && common_vendor.unref(navSearchPage)(...args)
        ),
        f: common_vendor.o(common_vendor.unref(navbarInitFinishHandle)),
        g: common_vendor.p({
          fixed: true,
          placeholder: false,
          ["back-icon"]: "",
          ["back-text"]: "",
          ["home-icon"]: "",
          ["bottom-shadow"]: false,
          ["bg-color"]: `rgba(255, 255, 255, ${common_vendor.unref(navbarOpacity)})`
        }),
        h: common_vendor.w(({
          data
        }, s0, i0) => {
          return {
            a: data,
            b: i0,
            c: s0
          };
        }, {
          name: "d",
          path: "h",
          vueId: "80fdba5d-3,80fdba5d-0"
        }),
        i: common_vendor.p({
          data: common_vendor.unref(swiperData),
          width: "100%",
          height: "100%",
          indicator: true,
          loop: true
        }),
        j: common_vendor.p({
          data: common_vendor.unref(noticeData),
          direction: "vertical",
          loop: true,
          ["left-icon"]: "sound"
        }),
        k: common_vendor.unref(triggerElementId),
        l: common_vendor.f(common_vendor.unref(hotCategoryData), (item, index, i0) => {
          var _a;
          return {
            a: "80fdba5d-5-" + i0 + ",80fdba5d-0",
            b: common_vendor.p({
              name: item.icon
            }),
            c: (_a = item == null ? void 0 : item.backgroundColor) == null ? void 0 : _a.value,
            d: common_vendor.t(item.name),
            e: index,
            f: common_vendor.o(($event) => common_vendor.unref(tnNavPage)(item.url), index)
          };
        }),
        m: common_vendor.unref(adCapsuleData),
        n: common_vendor.p({
          title: "热门案例"
        }),
        o: `url(${common_vendor.unref(hotCaseData)[0]})`,
        p: `url(${common_vendor.unref(hotCaseData)[1]})`,
        q: `url(${common_vendor.unref(hotCaseData)[2]})`,
        r: common_vendor.p({
          title: "关于我们"
        }),
        s: common_vendor.p({
          name: "right"
        }),
        t: common_vendor.p({
          name: "image-text-fill"
        }),
        v: common_vendor.o(($event) => common_vendor.unref(tnNavPage)("/home-page/company-culture/index")),
        w: common_vendor.p({
          name: "right"
        }),
        x: common_vendor.p({
          name: "calendar-fill"
        }),
        y: common_vendor.o(($event) => common_vendor.unref(tnNavPage)("/home-page/development-path/index")),
        z: common_vendor.p({
          name: "right"
        }),
        A: common_vendor.p({
          name: "image-fill"
        }),
        B: common_vendor.o(($event) => common_vendor.unref(tnNavPage)("/home-page/company-album/index")),
        C: common_vendor.p({
          name: "right"
        }),
        D: common_vendor.p({
          name: "theme-fill"
        }),
        E: common_vendor.p({
          name: "right"
        }),
        F: common_vendor.p({
          name: "trophy-fill"
        }),
        G: common_vendor.o(($event) => common_vendor.unref(tnNavPage)("/home-page/honor-cert/index")),
        H: common_vendor.p({
          name: "right"
        }),
        I: common_vendor.p({
          name: "location-fill"
        }),
        J: common_vendor.o(($event) => common_vendor.unref(tnNavPage)("/home-page/company-location/index"))
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-80fdba5d"], ["__file", "C:/Users/DIO/Desktop/大学/项目/狮业有成/demo-vue3/src/pages/index/sub-pages/page-a/index.vue"]]);
wx.createComponent(Component);
