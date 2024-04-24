"use strict";
const common_vendor = require("../../common/vendor.js");
const orderPage_orderList_composables_useOrderList = require("./composables/use-order-list.js");
if (!Array) {
  const _component_TnNavbar = common_vendor.resolveComponent("TnNavbar");
  _component_TnNavbar();
}
if (!Math) {
  (TnTabsItem + TnTabs + OrderItem + TnSwiper)();
}
const TnTabs = () => "../../node-modules/@tuniao/tnui-vue3-uniapp/components/tabs/src/tabs.js";
const TnTabsItem = () => "../../node-modules/@tuniao/tnui-vue3-uniapp/components/tabs/src/tabs-item.js";
const TnSwiper = () => "../../node-modules/@tuniao/tnui-vue3-uniapp/components/swiper/src/swiper.js";
const OrderItem = () => "./components/order-item/index.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const {
      navbarHeight,
      currentActiveCategoryIndex,
      orderCategory,
      orderListData,
      generateOrderData,
      navBarInitFinishHandle
    } = orderPage_orderList_composables_useOrderList.useOrderList();
    common_vendor.onLoad(() => {
      generateOrderData();
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(common_vendor.unref(navBarInitFinishHandle)),
        b: common_vendor.p({
          fixed: true,
          ["bottom-shadow"]: false,
          placeholder: false
        }),
        c: common_vendor.f(common_vendor.unref(orderCategory), (item, index, i0) => {
          return {
            a: index,
            b: "846a9455-2-" + i0 + ",846a9455-1",
            c: common_vendor.p({
              title: item.label,
              ["badge-config"]: item.count !== 0 ? {
                value: item.count
              } : void 0
            })
          };
        }),
        d: common_vendor.o(($event) => common_vendor.isRef(currentActiveCategoryIndex) ? currentActiveCategoryIndex.value = $event : null),
        e: common_vendor.p({
          scroll: false,
          ["bottom-shadow"]: false,
          ["active-color"]: "tn-blue",
          ["bar-color"]: "tn-blue",
          modelValue: common_vendor.unref(currentActiveCategoryIndex)
        }),
        f: common_vendor.w(({
          data
        }, s0, i0) => {
          return {
            a: common_vendor.f(data, (item, index, i1) => {
              return {
                a: "846a9455-4-" + i0 + "-" + i1 + ",846a9455-3",
                b: common_vendor.p({
                  data: item
                }),
                c: index
              };
            }),
            b: i0,
            c: s0
          };
        }, {
          name: "d",
          path: "f",
          vueId: "846a9455-3"
        }),
        g: common_vendor.o(($event) => common_vendor.isRef(currentActiveCategoryIndex) ? currentActiveCategoryIndex.value = $event : null),
        h: common_vendor.p({
          data: common_vendor.unref(orderListData),
          modelValue: common_vendor.unref(currentActiveCategoryIndex)
        }),
        i: `${common_vendor.unref(navbarHeight)}px`
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-846a9455"], ["__file", "C:/Users/DIO/Desktop/大学/项目/狮业有成/demo-vue3/src/order-page/order-list/index.vue"]]);
wx.createPage(MiniProgramPage);
