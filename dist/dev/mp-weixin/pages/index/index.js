"use strict";
const common_vendor = require("../../common/vendor.js");
const pages_index_composables_useIndex = require("./composables/use-index.js");
const pages_index_composables_indexCustom = require("./composables/index-custom.js");
require("./tokens/index-page.js");
if (!Math) {
  (PageA + PageB + PageC + PageD + PageE + TnTabbarItem + TnTabbar)();
}
const TnTabbar = () => "../../node-modules/@tuniao/tnui-vue3-uniapp/components/tabbar/src/tabbar.js";
const TnTabbarItem = () => "../../node-modules/@tuniao/tnui-vue3-uniapp/components/tabbar/src/tabbar-item.js";
const PageA = () => "./sub-pages/page-a/index.js";
const PageB = () => "./sub-pages/page-b/index.js";
const PageC = () => "./sub-pages/page-c/index.js";
const PageD = () => "./sub-pages/page-d/index.js";
const PageE = () => "./sub-pages/page-e/index.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const {
      tabbarData,
      currentTabbarIndex,
      renderPageStatus,
      tabbarChangeHandle,
      scrollViewScrollHandle
    } = pages_index_composables_useIndex.useIndex();
    const { pageContainerStyle } = pages_index_composables_indexCustom.useIndexCustomStyle(currentTabbarIndex);
    common_vendor.onLoad((options) => {
      const index = Number((options == null ? void 0 : options.index) || 0);
      tabbarChangeHandle(index);
      renderPageStatus.value[index] = true;
      common_vendor.nextTick$1(() => {
        currentTabbarIndex.value = index;
      });
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(renderPageStatus)[0]
      }, common_vendor.unref(renderPageStatus)[0] ? {
        b: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(scrollViewScrollHandle) && common_vendor.unref(scrollViewScrollHandle)(...args)
        ),
        c: common_vendor.s(common_vendor.unref(pageContainerStyle)(0))
      } : {}, {
        d: common_vendor.unref(renderPageStatus)[1]
      }, common_vendor.unref(renderPageStatus)[1] ? {
        e: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(scrollViewScrollHandle) && common_vendor.unref(scrollViewScrollHandle)(...args)
        ),
        f: common_vendor.s(common_vendor.unref(pageContainerStyle)(1))
      } : {}, {
        g: common_vendor.unref(renderPageStatus)[2]
      }, common_vendor.unref(renderPageStatus)[2] ? {
        h: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(scrollViewScrollHandle) && common_vendor.unref(scrollViewScrollHandle)(...args)
        ),
        i: common_vendor.s(common_vendor.unref(pageContainerStyle)(2))
      } : {}, {
        j: common_vendor.unref(renderPageStatus)[3]
      }, common_vendor.unref(renderPageStatus)[3] ? {
        k: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(scrollViewScrollHandle) && common_vendor.unref(scrollViewScrollHandle)(...args)
        ),
        l: common_vendor.s(common_vendor.unref(pageContainerStyle)(3))
      } : {}, {
        m: common_vendor.unref(renderPageStatus)[4]
      }, common_vendor.unref(renderPageStatus)[4] ? {
        n: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(scrollViewScrollHandle) && common_vendor.unref(scrollViewScrollHandle)(...args)
        ),
        o: common_vendor.s(common_vendor.unref(pageContainerStyle)(4))
      } : {}, {
        p: common_vendor.f(common_vendor.unref(tabbarData), (item, index, i0) => {
          return {
            a: index,
            b: "83a5a03c-6-" + i0 + ",83a5a03c-5",
            c: common_vendor.p({
              text: item.text,
              icon: item.icon,
              ["active-icon"]: item.activeIcon,
              bulge: index === 2,
              ["icon-size"]: index === 2 ? "56" : ""
            })
          };
        }),
        q: common_vendor.o(common_vendor.unref(tabbarChangeHandle)),
        r: common_vendor.o(($event) => common_vendor.isRef(currentTabbarIndex) ? currentTabbarIndex.value = $event : null),
        s: common_vendor.p({
          fixed: true,
          frosted: true,
          ["switch-animation"]: true,
          placeholder: false,
          ["font-size"]: "20",
          modelValue: common_vendor.unref(currentTabbarIndex)
        })
      });
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-83a5a03c"], ["__file", "C:/Users/DIO/Desktop/大学/项目/狮业有成/demo-vue3/src/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
