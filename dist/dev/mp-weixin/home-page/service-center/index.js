"use strict";
const common_vendor = require("../../common/vendor.js");
const homePage_serviceCenter_composables_useSubPage = require("./composables/use-sub-page.js");
require("../../hooks/use-scroll-transparent-navbar/index.js");
require("../../types/color.js");
require("./composables/use-sub-page-provide.js");
require("./tokens/index-page.js");
if (!Array) {
  const _component_TnNavbar = common_vendor.resolveComponent("TnNavbar");
  const _component_TnIcon = common_vendor.resolveComponent("TnIcon");
  (_component_TnNavbar + _component_TnIcon)();
}
if (!Math) {
  (TnNoticeBar + Title + TnSwiper + Video + PageContainer)();
}
const TnSwiper = () => "../../node-modules/@tuniao/tnui-vue3-uniapp/components/swiper/src/swiper.js";
const TnNoticeBar = () => "../../node-modules/@tuniao/tnui-vue3-uniapp/components/notice-bar/src/notice-bar.js";
const PageContainer = () => "./components/page-container/index.js";
const Title = () => "../../components/title/index.js";
const Video = () => "../../components/video/video.js";
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
      swiperData,
      swiperData2,
      classCategoryData,
      volunteerCategoryData,
      noticeData,
      hotCaseData,
      tnNavPage
    } = homePage_serviceCenter_composables_useSubPage.useSubPage();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          fixed: true,
          ["bg-color"]: "transparent",
          ["bottom-shadow"]: false,
          placeholder: false
        }),
        b: common_vendor.p({
          data: common_vendor.unref(noticeData),
          direction: "vertical",
          loop: true,
          ["left-icon"]: "sound"
        }),
        c: common_vendor.unref(triggerElementId),
        d: common_vendor.p({
          title: "核心课程"
        }),
        e: common_vendor.w(({
          data
        }, s0, i0) => {
          return {
            a: data,
            b: i0,
            c: s0
          };
        }, {
          name: "d",
          path: "e",
          vueId: "df6ae8ab-4,df6ae8ab-0"
        }),
        f: common_vendor.p({
          data: common_vendor.unref(swiperData),
          width: "100%",
          height: "100%",
          indicator: true,
          loop: true
        }),
        g: common_vendor.f(common_vendor.unref(classCategoryData), (item, index, i0) => {
          var _a;
          return {
            a: "df6ae8ab-5-" + i0 + ",df6ae8ab-0",
            b: common_vendor.p({
              name: item.icon
            }),
            c: (_a = item == null ? void 0 : item.backgroundColor) == null ? void 0 : _a.value,
            d: common_vendor.t(item.name),
            e: index,
            f: common_vendor.o(($event) => common_vendor.unref(tnNavPage)(item.url), index)
          };
        }),
        h: common_vendor.p({
          data: common_vendor.unref(noticeData),
          direction: "vertical",
          loop: true,
          ["left-icon"]: "sound"
        }),
        i: common_vendor.unref(triggerElementId),
        j: common_vendor.p({
          title: "志愿专区"
        }),
        k: common_vendor.w(({
          data
        }, s0, i0) => {
          return {
            a: data,
            b: i0,
            c: s0
          };
        }, {
          name: "d",
          path: "k",
          vueId: "df6ae8ab-9,df6ae8ab-0"
        }),
        l: common_vendor.p({
          data: common_vendor.unref(swiperData2),
          width: "100%",
          height: "100%",
          indicator: true,
          loop: true
        }),
        m: common_vendor.f(common_vendor.unref(volunteerCategoryData), (item, index, i0) => {
          var _a;
          return {
            a: "df6ae8ab-10-" + i0 + ",df6ae8ab-0",
            b: common_vendor.p({
              name: item.icon
            }),
            c: (_a = item == null ? void 0 : item.backgroundColor) == null ? void 0 : _a.value,
            d: common_vendor.t(item.name),
            e: index,
            f: common_vendor.o(($event) => common_vendor.unref(tnNavPage)(item.url), index)
          };
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-df6ae8ab"], ["__file", "C:/Users/DIO/Desktop/大学/项目/狮业有成/demo-vue3/src/home-page/service-center/index.vue"]]);
wx.createPage(MiniProgramPage);
