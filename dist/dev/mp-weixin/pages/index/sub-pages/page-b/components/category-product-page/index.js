"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
if (!Array) {
  const _component_TnIcon = common_vendor.resolveComponent("TnIcon");
  _component_TnIcon();
}
if (!Math) {
  (TnSwiper + ProductItem + TnWaterFall + TnEmpty)();
}
const TnSwiper = () => "../../../../../../node-modules/@tuniao/tnui-vue3-uniapp/components/swiper/src/swiper.js";
const TnEmpty = () => "../../../../../../node-modules/@tuniao/tnui-vue3-uniapp/components/empty/src/empty.js";
const TnWaterFall = () => "../../../../../../node-modules/@tuniao/tnui-vue3-uniapp/components/water-fall/src/water-fall.js";
const ProductItem = () => "../product-item/index.js";
const __default__ = {
  options: {
    // 在微信小程序中将组件节点渲染为虚拟节点，更加接近Vue组件的表现(不会出现shadow节点下再去创建元素)
    virtualHost: true
  }
};
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  ...__default__,
  __name: "index",
  props: {
    paddingTop: null,
    banners: null,
    products: null,
    isLoad: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      var _a, _b;
      return common_vendor.e({
        a: common_vendor.w(({
          data
        }, s0, i0) => {
          return {
            a: data.image,
            b: i0,
            c: s0
          };
        }, {
          name: "d",
          path: "a",
          vueId: "1ef5b0eb-0"
        }),
        b: common_vendor.p({
          data: __props.banners,
          autoplay: true,
          loop: true,
          indicator: true
        }),
        c: (_a = __props.products) == null ? void 0 : _a.length
      }, ((_b = __props.products) == null ? void 0 : _b.length) ? {
        d: common_vendor.w(({
          item
        }, s0, i0) => {
          return {
            a: "1ef5b0eb-2-" + i0 + ",1ef5b0eb-1",
            b: common_vendor.p({
              product: item
            }),
            c: i0,
            d: s0
          };
        }, {
          name: "left",
          path: "d",
          vueId: "1ef5b0eb-1"
        }),
        e: common_vendor.w(({
          item,
          index
        }, s0, i0) => {
          return common_vendor.e({
            a: index === 0
          }, index === 0 ? {
            b: "1ef5b0eb-3-" + i0 + ",1ef5b0eb-1",
            c: common_vendor.p({
              name: "link"
            }),
            d: common_vendor.o(($event) => common_vendor.unref(common_vendor.tnNavPage)("/home-page/tuniao-ecology/index"))
          } : {}, {
            e: "1ef5b0eb-4-" + i0 + ",1ef5b0eb-1",
            f: common_vendor.p({
              product: item
            }),
            g: i0,
            h: s0
          });
        }, {
          name: "right",
          path: "e",
          vueId: "1ef5b0eb-1"
        }),
        f: common_vendor.p({
          data: __props.products
        })
      } : __props.isLoad ? {
        h: common_vendor.p({
          name: "wea-wind"
        })
      } : {}, {
        g: __props.isLoad,
        i: `${__props.paddingTop}px`
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1ef5b0eb"], ["__file", "C:/Users/DIO/Desktop/大学/项目/狮业有成/demo-vue3/src/pages/index/sub-pages/page-b/components/category-product-page/index.vue"]]);
wx.createComponent(Component);
