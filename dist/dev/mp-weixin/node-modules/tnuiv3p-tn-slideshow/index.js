"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  props: common_vendor.slideshowProps,
  emits: common_vendor.slideshowEmits,
  setup(__props, { emit: emits }) {
    const props = __props;
    const { currentActiveIndex, imageCount, clickHandle } = common_vendor.useSlideShow(
      props,
      emits
    );
    const { containerClass, containerStyle, imageClass, imageStyle } = common_vendor.useSlideshowCustomStyle(props, imageCount, currentActiveIndex);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(props.data, (item, index, i0) => {
          return {
            a: index,
            b: common_vendor.n(common_vendor.unref(imageClass)(index)),
            c: common_vendor.s(common_vendor.unref(imageStyle)(index)),
            d: item,
            e: common_vendor.o(($event) => common_vendor.unref(clickHandle)(index), index)
          };
        }),
        b: common_vendor.n(common_vendor.unref(containerClass)),
        c: common_vendor.s(common_vendor.unref(containerStyle))
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-04540a21"], ["__file", "C:/Users/DIO/Desktop/大学/项目/狮业有成/demo-vue3/node_modules/tnuiv3p-tn-slideshow/index.vue"]]);
wx.createComponent(Component);
