"use strict";
const common_vendor = require("../../../../common/vendor.js");
const pages_index_subPages_pageD_composables_useSubPage = require("./composables/use-sub-page.js");
require("../../composables/use-sub-page-provide.js");
require("../../tokens/index-page.js");
require("../../../../utils/local-mock.js");
if (!Array) {
  const _component_TnIcon = common_vendor.resolveComponent("TnIcon");
  const _component_TnNavbar = common_vendor.resolveComponent("TnNavbar");
  (_component_TnIcon + _component_TnNavbar)();
}
if (!Math) {
  (TnTabsItem + TnTabs + CategoryProductPage + PageContainer)();
}
const TnTabs = () => "../../../../node-modules/@tuniao/tnui-vue3-uniapp/components/tabs/src/tabs.js";
const TnTabsItem = () => "../../../../node-modules/@tuniao/tnui-vue3-uniapp/components/tabs/src/tabs-item.js";
const PageContainer = () => "../../components/page-container/index.js";
const CategoryProductPage = () => "./components/category-product-page/index.js";
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
      navbarHeight,
      currentCategoryIndex,
      categoryList,
      categoryProductData,
      navbarInitFinishHandle,
      navSearchPage,
      categoryChangeHandle
    } = pages_index_subPages_pageD_composables_useSubPage.useSubPage();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          name: "search-menu-fill"
        }),
        b: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(navSearchPage) && common_vendor.unref(navSearchPage)(...args)
        ),
        c: common_vendor.f(common_vendor.unref(categoryList), (item, index, i0) => {
          return {
            a: index,
            b: "8940ecab-4-" + i0 + ",8940ecab-3",
            c: common_vendor.p({
              title: item.name
            })
          };
        }),
        d: common_vendor.o(common_vendor.unref(categoryChangeHandle)),
        e: common_vendor.o(($event) => common_vendor.isRef(currentCategoryIndex) ? currentCategoryIndex.value = $event : null),
        f: common_vendor.p({
          ["bg-color"]: "transparent",
          ["bottom-shadow"]: false,
          bar: false,
          scroll: false,
          height: "auto",
          ["active-color"]: "#080808",
          ["font-size"]: "34",
          modelValue: common_vendor.unref(currentCategoryIndex)
        }),
        g: common_vendor.o(common_vendor.unref(navbarInitFinishHandle)),
        h: common_vendor.p({
          fixed: true,
          ["bottom-shadow"]: false,
          placeholder: false,
          frosted: true,
          ["back-icon"]: "",
          ["back-text"]: "",
          ["home-icon"]: "",
          ["home-text"]: ""
        }),
        i: common_vendor.f(common_vendor.unref(categoryProductData), (item, index, i0) => {
          return {
            a: "8940ecab-5-" + i0 + ",8940ecab-0",
            b: common_vendor.p({
              ["padding-top"]: common_vendor.unref(navbarHeight) + 15,
              banners: item.banners,
              products: item.products,
              ["is-load"]: item.isLoad
            }),
            c: index,
            d: common_vendor.unref(currentCategoryIndex) === index ? 1 : ""
          };
        }),
        j: common_vendor.p({
          ["placeholder-bottom"]: false
        })
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-8940ecab"], ["__file", "C:/Users/DIO/Desktop/大学/项目/狮业有成/demo-vue3/src/pages/index/sub-pages/page-d/index.vue"]]);
wx.createComponent(Component);
