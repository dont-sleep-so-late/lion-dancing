"use strict";
const common_vendor = require("../../../../common/vendor.js");
const pages_index_subPages_pageC_composables_useSubPage = require("./composables/use-sub-page.js");
require("../../composables/use-sub-page-provide.js");
require("../../tokens/index-page.js");
require("../../../../types/color.js");
if (!Math) {
  (TnSwiper + TnCoolIcon + CoolTitle + PageContainer)();
}
const TnSwiper = () => "../../../../node-modules/@tuniao/tnui-vue3-uniapp/components/swiper/src/swiper.js";
const TnCoolIcon = () => "../../../../node-modules/tnuiv3p-tn-cool-icon/index.js";
const PageContainer = () => "../../components/page-container/index.js";
const CoolTitle = () => "../../../../components/cool-title/index.js";
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
    const { navBarInfo } = common_vendor.useUniAppSystemRectInfo();
    const {
      demoImages,
      businessCategoryData,
      projectCaseData,
      navBusinessProcessDetail,
      navCaseDetail
    } = pages_index_subPages_pageC_composables_useSubPage.useSubPage();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.w(({
          data,
          active
        }, s0, i0) => {
          return {
            a: data.image,
            b: active ? 1 : "",
            c: i0,
            d: s0
          };
        }, {
          name: "d",
          path: "a",
          vueId: "49442815-1,49442815-0"
        }),
        b: common_vendor.p({
          data: common_vendor.unref(demoImages),
          ["previous-margin"]: "120",
          ["next-margin"]: "130",
          loop: true
        }),
        c: `${common_vendor.unref(navBarInfo).height}px`,
        d: common_vendor.f(common_vendor.unref(businessCategoryData), (item, index, i0) => {
          var _a;
          return {
            a: "49442815-2-" + i0 + ",49442815-0",
            b: common_vendor.p({
              name: item.icon,
              color: (_a = item == null ? void 0 : item.iconColor) == null ? void 0 : _a.value,
              size: "110"
            }),
            c: common_vendor.t(item.name),
            d: index,
            e: common_vendor.o(
              //@ts-ignore
              (...args) => common_vendor.unref(navBusinessProcessDetail) && common_vendor.unref(navBusinessProcessDetail)(...args),
              index
            )
          };
        }),
        e: common_vendor.p({
          title: "项 / 目 / 案 / 例",
          ["cool-bg-number"]: 5
        }),
        f: common_vendor.f(common_vendor.unref(projectCaseData), (item, index, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: index,
            c: `url(${item.mainImage})`,
            d: common_vendor.o(($event) => common_vendor.unref(navCaseDetail)(item.id), index)
          };
        })
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-49442815"], ["__file", "C:/Users/DIO/Desktop/大学/项目/狮业有成/demo-vue3/src/pages/index/sub-pages/page-c/index.vue"]]);
wx.createComponent(Component);
