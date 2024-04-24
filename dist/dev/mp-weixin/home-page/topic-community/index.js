"use strict";
const common_vendor = require("../../common/vendor.js");
const homePage_topicCommunity_composables_useTopicCommunity = require("./composables/use-topic-community.js");
require("../../utils/local-mock.js");
require("../../hooks/use-scroll-transparent-navbar/index.js");
if (!Array) {
  const _component_TnNavbar = common_vendor.resolveComponent("TnNavbar");
  _component_TnNavbar();
}
if (!Math) {
  TnGraphicCard();
}
const TnGraphicCard = () => "../../node-modules/tnuiv3p-tn-graphic-card/index.js";
const _sfc_defineComponent = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const {
      triggerElementId,
      navbarOpacity,
      communitySummary,
      topicsData,
      initTransparentScroll,
      navbarInitFinishHandle,
      opacityScrollHandle
    } = homePage_topicCommunity_composables_useTopicCommunity.useTopicCommunity();
    common_vendor.onReady(() => {
      initTransparentScroll();
    });
    common_vendor.onPageScroll((e) => {
      opacityScrollHandle(e.scrollTop);
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(common_vendor.unref(navbarInitFinishHandle)),
        b: common_vendor.p({
          fixed: true,
          ["home-icon"]: "discover-fill",
          ["bg-color"]: `rgba(255, 255, 255, ${common_vendor.unref(navbarOpacity)})`,
          ["bottom-shadow"]: false,
          placeholder: false
        }),
        c: common_vendor.t(common_vendor.unref(communitySummary).title),
        d: common_vendor.t(common_vendor.unref(communitySummary).desc),
        e: common_vendor.unref(communitySummary).image,
        f: common_vendor.f(common_vendor.unref(topicsData), (item, index, i0) => {
          return {
            a: "bf21275f-1-" + i0,
            b: common_vendor.p({
              avatar: item.author.avatar,
              title: item.title,
              description: item.createTime,
              tags: item.tags,
              content: item.desc,
              images: item.images,
              ["hot-count"]: item.hotCount,
              ["comment-count"]: item.replyCount,
              ["like-count"]: item.likeCount,
              ["view-count"]: item.viewCount,
              ["view-user-avatars"]: item.viewUsersAvatar
            }),
            c: index
          };
        }),
        g: common_vendor.unref(triggerElementId)
      };
    };
  }
});
_sfc_defineComponent.__runtimeHooks = 1;
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_defineComponent, [["__scopeId", "data-v-bf21275f"], ["__file", "C:/Users/DIO/Desktop/大学/项目/狮业有成/demo-vue3/src/home-page/topic-community/index.vue"]]);
wx.createPage(MiniProgramPage);
