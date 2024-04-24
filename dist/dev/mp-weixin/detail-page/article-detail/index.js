"use strict";
const common_vendor = require("../../common/vendor.js");
const detailPage_articleDetail_composables_useArticleDetail = require("./composables/use-article-detail.js");
const hooks_useScrollUpdownBottomContent_index = require("../../hooks/use-scroll-updown-bottom-content/index.js");
require("../../utils/local-mock.js");
if (!Array) {
  const _component_TnNavbar = common_vendor.resolveComponent("TnNavbar");
  const _component_TnIcon = common_vendor.resolveComponent("TnIcon");
  const _component_TnButton = common_vendor.resolveComponent("TnButton");
  (_component_TnNavbar + _component_TnIcon + _component_TnButton)();
}
if (!Math) {
  (CoolTitle + TnAvatar + TnAvatarGroup + Title + ArticleSimpleItem + ConsultOperationBar)();
}
const TnAvatarGroup = () => "../../node-modules/@tuniao/tnui-vue3-uniapp/components/avatar/src/avatar-group.js";
const TnAvatar = () => "../../node-modules/@tuniao/tnui-vue3-uniapp/components/avatar/src/avatar.js";
const CoolTitle = () => "../../components/cool-title/index.js";
const Title = () => "../../components/title/index.js";
const ArticleSimpleItem = () => "../../components/article-simple-item/index.js";
const ConsultOperationBar = () => "../../components/consult-operation-bar/index.js";
const _sfc_defineComponent = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const instance = common_vendor.getCurrentInstance();
    const {
      style: operationBarScrollStyle,
      scrollHandle: operationBarScrollHandle
    } = hooks_useScrollUpdownBottomContent_index.useScrollUpdownBottomContent("up", 80);
    const type = common_vendor.ref("");
    const {
      navbarHeight,
      article,
      recommendArticles,
      navbarInitFinishHandle,
      getData
    } = detailPage_articleDetail_composables_useArticleDetail.useArticleDetail();
    common_vendor.onLoad((options) => {
      if (!(options == null ? void 0 : options.id) || !(options == null ? void 0 : options.type)) {
        common_vendor.index.showModal({
          title: "提示",
          content: "参数错误",
          showCancel: false,
          success: () => {
            common_vendor.index.navigateBack();
          }
        });
        return;
      }
      type.value = options.type;
      getData(options.id);
    });
    common_vendor.onPageScroll((e) => {
      const top = e.scrollTop;
      operationBarScrollHandle(instance, top);
    });
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e, _f, _g;
      return common_vendor.e({
        a: common_vendor.o(common_vendor.unref(navbarInitFinishHandle)),
        b: common_vendor.p({
          fixed: true,
          ["bg-color"]: "transparent",
          ["bottom-shadow"]: false,
          placeholder: false
        }),
        c: `${common_vendor.unref(navbarHeight)}px`,
        d: common_vendor.p({
          title: ((_a = common_vendor.unref(article)) == null ? void 0 : _a.title) || "",
          ["title-bg-image"]: "https://resource.tuniaokj.com/images/title_bg/title00.png",
          ["left-icon"]: "",
          ["right-icon"]: "",
          ["cool-bg-number"]: 6
        }),
        e: common_vendor.t(((_b = common_vendor.unref(article)) == null ? void 0 : _b.content) || ""),
        f: common_vendor.f((_c = common_vendor.unref(article)) == null ? void 0 : _c.viewUsersAvatar, (item, index, i0) => {
          return {
            a: index,
            b: "1399ec94-3-" + i0 + ",1399ec94-2",
            c: common_vendor.p({
              url: item
            })
          };
        }),
        g: common_vendor.p({
          size: "40",
          gap: 0.5
        }),
        h: common_vendor.t((_d = common_vendor.unref(article)) == null ? void 0 : _d.viewCount),
        i: common_vendor.p({
          name: "rocket"
        }),
        j: common_vendor.t((_e = common_vendor.unref(article)) == null ? void 0 : _e.hotCount),
        k: common_vendor.p({
          name: "like"
        }),
        l: common_vendor.t((_f = common_vendor.unref(article)) == null ? void 0 : _f.likeCount),
        m: common_vendor.p({
          ["sub-title"]: true,
          title: "Ta们都在看",
          ["operation-title"]: "全部",
          ["operation-icon"]: "topics"
        }),
        n: common_vendor.f(common_vendor.unref(recommendArticles), (item, index, i0) => {
          return {
            a: "1399ec94-7-" + i0,
            b: common_vendor.p({
              title: item.title,
              desc: item.desc,
              image: item.mainImage,
              tag: item.tags[0],
              ["view-count"]: item.hotCount,
              ["like-count"]: item.likeCount
            }),
            c: index
          };
        }),
        o: `${common_vendor.unref(navbarHeight) + 10}px`,
        p: type.value === "case"
      }, type.value === "case" ? {
        q: common_vendor.t((_g = common_vendor.unref(article)) == null ? void 0 : _g.replyCount),
        r: common_vendor.p({
          ["button-text"]: "案例资讯"
        }),
        s: common_vendor.s(common_vendor.unref(operationBarScrollStyle))
      } : {}, {
        t: type.value === "news"
      }, type.value === "news" ? {
        v: common_vendor.p({
          name: "like-lack"
        }),
        w: common_vendor.p({
          name: "wechat"
        }),
        x: common_vendor.p({
          ["only-button"]: true,
          ["open-type"]: "share"
        })
      } : {});
    };
  }
});
_sfc_defineComponent.__runtimeHooks = 1;
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_defineComponent, [["__scopeId", "data-v-1399ec94"], ["__file", "C:/Users/DIO/Desktop/大学/项目/狮业有成/demo-vue3/src/detail-page/article-detail/index.vue"]]);
wx.createPage(MiniProgramPage);
