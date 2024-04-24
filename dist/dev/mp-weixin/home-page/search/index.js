"use strict";
const common_vendor = require("../../common/vendor.js");
const homePage_search_composables_useSearch = require("./composables/use-search.js");
require("../../utils/storage.js");
require("../../constants/index.js");
if (!Array) {
  const _component_TnNavbar = common_vendor.resolveComponent("TnNavbar");
  const _component_TnButton = common_vendor.resolveComponent("TnButton");
  (_component_TnNavbar + _component_TnButton)();
}
if (!Math) {
  (TnSearchBox + Title + ArticleSimpleItem)();
}
const TnSearchBox = () => "../../node-modules/@tuniao/tnui-vue3-uniapp/components/search-box/src/search-box.js";
const Title = () => "../../components/title/index.js";
const ArticleSimpleItem = () => "../../components/article-simple-item/index.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const {
      navbarHeight,
      searchValue,
      historyList,
      searchResult,
      navbarInitFinishHandle,
      searchConfirmHandle,
      historyClickHandle,
      clearHistory
    } = homePage_search_composables_useSearch.useSearch();
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(common_vendor.unref(navbarInitFinishHandle)),
        b: common_vendor.p({
          fixed: true,
          ["bg-color"]: "transparent",
          ["bottom-shadow"]: false,
          placeholder: false
        }),
        c: common_vendor.o(common_vendor.unref(searchConfirmHandle)),
        d: common_vendor.o(($event) => common_vendor.isRef(searchValue) ? searchValue.value = $event : null),
        e: common_vendor.p({
          ["search-button"]: false,
          shape: "round",
          size: "sm",
          modelValue: common_vendor.unref(searchValue)
        }),
        f: common_vendor.o(common_vendor.unref(searchConfirmHandle)),
        g: common_vendor.p({
          ["bg-color"]: "tn-blue",
          shape: "round",
          width: "150",
          height: "66"
        }),
        h: common_vendor.unref(historyList).length > 0
      }, common_vendor.unref(historyList).length > 0 ? {
        i: common_vendor.o(common_vendor.unref(clearHistory)),
        j: common_vendor.p({
          title: "最近搜索",
          ["sub-title"]: true,
          ["operation-title"]: "删除",
          ["operation-icon"]: "delete"
        }),
        k: common_vendor.f(common_vendor.unref(historyList), (item, index, i0) => {
          return {
            a: common_vendor.t(item),
            b: index,
            c: common_vendor.o(($event) => common_vendor.unref(historyClickHandle)(item), index)
          };
        })
      } : {}, {
        l: common_vendor.unref(searchResult).length > 0
      }, common_vendor.unref(searchResult).length > 0 ? {
        m: common_vendor.p({
          title: "搜索结果",
          ["sub-title"]: true
        }),
        n: common_vendor.f(common_vendor.unref(searchResult), (item, index, i0) => {
          return {
            a: "f2aa54a1-5-" + i0,
            b: common_vendor.p({
              title: item.title,
              desc: item.desc,
              image: item.mainImage,
              tag: item.tag,
              ["view-count"]: item.viewCount,
              ["like-count"]: item.likeCount
            }),
            c: index
          };
        })
      } : {}, {
        o: `${common_vendor.unref(navbarHeight) + 20}px`
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f2aa54a1"], ["__file", "C:/Users/DIO/Desktop/大学/项目/狮业有成/demo-vue3/src/home-page/search/index.vue"]]);
wx.createPage(MiniProgramPage);
