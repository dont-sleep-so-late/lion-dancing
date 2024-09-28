"use strict";
const common_vendor = require("../../common/vendor.js");
const homePage_tuniaoEcology_composables_useTuniaoEcology = require("./composables/use-tuniao-ecology.js");
if (!Array) {
  const _component_TnNavbar = common_vendor.resolveComponent("TnNavbar");
  const _component_TnIcon = common_vendor.resolveComponent("TnIcon");
  (_component_TnNavbar + _component_TnIcon)();
}
if (!Math) {
  (TnSwiper + Title + TnCoolIcon)();
}
const TnSwiper = () => "../../node-modules/@tuniao/tnui-vue3-uniapp/components/swiper/src/swiper.js";
const TnCoolIcon = () => "../../node-modules/tnuiv3p-tn-cool-icon/index.js";
const Title = () => "../../components/title/index.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const { swiperData, groupFriendsData, friendLinkData, tuniaoProjectData } = homePage_tuniaoEcology_composables_useTuniaoEcology.useTuniaoEcology();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          fixed: true,
          ["bg-color"]: "transparent",
          ["bottom-shadow"]: false,
          placeholder: false
        }),
        b: common_vendor.w(({
          data,
          active
        }, s0, i0) => {
          return {
            a: data.image,
            b: common_vendor.t(data.title),
            c: common_vendor.t(data.desc),
            d: data.secondImage,
            e: common_vendor.n({
              active
            }),
            f: i0,
            g: s0
          };
        }, {
          name: "d",
          path: "b",
          vueId: "27df514f-1"
        }),
        c: common_vendor.p({
          data: common_vendor.unref(swiperData),
          loop: true,
          autoplay: true
        }),
        d: common_vendor.p({
          title: "群友项目",
          ["sub-title"]: true,
          ["operation-title"]: ""
        }),
        e: common_vendor.f(common_vendor.unref(groupFriendsData), (item, index, i0) => {
          return {
            a: item.image,
            b: common_vendor.t(item.title),
            c: common_vendor.t(item.desc),
            d: index
          };
        }),
        f: common_vendor.p({
          title: "友情链接",
          ["sub-title"]: true,
          ["operation-title"]: ""
        }),
        g: common_vendor.f(common_vendor.unref(friendLinkData), (item, index, i0) => {
          return common_vendor.e({
            a: item.image
          }, item.image ? {
            b: item.image
          } : {
            c: "27df514f-4-" + i0,
            d: common_vendor.p({
              name: "tag",
              type: "circle",
              ["bg-color"]: "tn-orange-light",
              color: "tn-orange",
              size: "80"
            })
          }, {
            e: common_vendor.t(item.title),
            f: index
          });
        }),
        h: common_vendor.p({
          title: "狮业有承开源项目",
          ["sub-title"]: true,
          ["operation-title"]: ""
        }),
        i: common_vendor.f(common_vendor.unref(tuniaoProjectData), (item, index, i0) => {
          return {
            a: item.image,
            b: common_vendor.t(item.title),
            c: "27df514f-6-" + i0,
            d: common_vendor.t(item.desc),
            e: index
          };
        }),
        j: common_vendor.p({
          name: "copy",
          size: "24"
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-27df514f"], ["__file", "C:/Users/DIO/Desktop/大学/项目/狮业有成/demo-vue3/src/home-page/tuniao-ecology/index.vue"]]);
wx.createPage(MiniProgramPage);
