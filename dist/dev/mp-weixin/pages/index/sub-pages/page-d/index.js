"use strict";
const common_vendor = require("../../../../common/vendor.js");
const pages_index_subPages_pageD_composables_useSubPage = require("./composables/use-sub-page.js");
require("../../composables/use-sub-page-provide.js");
require("../../tokens/index-page.js");
require("../../../../utils/local-mock.js");
if (!Math) {
  (TnSwiper + ArticleSimpleItem + PageContainer)();
}
const TnSwiper = () => "../../../../node-modules/@tuniao/tnui-vue3-uniapp/components/swiper/src/swiper.js";
const PageContainer = () => "../../components/page-container/index.js";
const ArticleSimpleItem = () => "../../../../components/article-simple-item/index.js";
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
    const { swiperData, newsData, navArticleDetail } = pages_index_subPages_pageD_composables_useSubPage.useSubPage();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.w(({
          data
        }, s0, i0) => {
          return {
            a: data.image,
            b: common_vendor.t(data.title),
            c: common_vendor.t(data.desc),
            d: i0,
            e: s0
          };
        }, {
          name: "d",
          path: "a",
          vueId: "8940ecab-1,8940ecab-0"
        }),
        b: common_vendor.p({
          data: common_vendor.unref(swiperData),
          loop: true,
          autoplay: true
        }),
        c: common_vendor.f(common_vendor.unref(newsData), (item, index, i0) => {
          return {
            a: "8940ecab-2-" + i0 + ",8940ecab-0",
            b: common_vendor.p({
              title: item.title,
              desc: item.desc,
              image: item.mainImage,
              tag: item.tags[0],
              ["view-count"]: item.hotCount,
              ["like-count"]: item.likeCount
            }),
            c: index,
            d: common_vendor.o(
              //@ts-ignore
              (...args) => common_vendor.unref(navArticleDetail) && common_vendor.unref(navArticleDetail)(...args),
              index
            )
          };
        })
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-8940ecab"], ["__file", "C:/Users/DIO/Desktop/大学/项目/狮业有成/demo-vue3/src/pages/index/sub-pages/page-d/index.vue"]]);
wx.createComponent(Component);
