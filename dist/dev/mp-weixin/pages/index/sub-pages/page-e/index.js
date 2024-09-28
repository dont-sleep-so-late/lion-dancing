"use strict";
const common_vendor = require("../../../../common/vendor.js");
const pages_index_subPages_pageE_composables_useSubPage = require("./composables/use-sub-page.js");
require("../../composables/use-sub-page-provide.js");
require("../../tokens/index-page.js");
require("../../../../utils/local-mock.js");
if (!Array) {
  const _component_TnIcon = common_vendor.resolveComponent("TnIcon");
  const _component_TnButton = common_vendor.resolveComponent("TnButton");
  (_component_TnIcon + _component_TnButton)();
}
if (!Math) {
  (TnFooter + PageContainer)();
}
const TnFooter = () => "../../../../node-modules/@tuniao/tnui-vue3-uniapp/components/footer/src/footer.js";
const PageContainer = () => "../../components/page-container/index.js";
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
      navBarInfo,
      userInfo,
      loginHandle,
      navUserInfoPage,
      navCommonProblemPage,
      navMemberRightsPage,
      navOrderListPage
    } = pages_index_subPages_pageE_composables_useSubPage.useSubPage();
    return (_ctx, _cache) => {
      var _a, _b, _c, _d, _e;
      return common_vendor.e({
        a: (_a = common_vendor.unref(userInfo)) == null ? void 0 : _a.uid
      }, ((_b = common_vendor.unref(userInfo)) == null ? void 0 : _b.uid) ? {
        b: (_c = common_vendor.unref(userInfo)) == null ? void 0 : _c.avatar,
        c: common_vendor.t((_d = common_vendor.unref(userInfo)) == null ? void 0 : _d.nickname),
        d: common_vendor.t((_e = common_vendor.unref(userInfo)) == null ? void 0 : _e.uid),
        e: common_vendor.p({
          name: "copy"
        }),
        f: common_vendor.p({
          name: "install"
        }),
        g: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(navUserInfoPage) && common_vendor.unref(navUserInfoPage)(...args)
        )
      } : {
        h: common_vendor.p({
          name: "wechat"
        }),
        i: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(loginHandle) && common_vendor.unref(loginHandle)(...args)
        )
      }, {
        j: common_vendor.p({
          name: "order"
        }),
        k: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(navOrderListPage) && common_vendor.unref(navOrderListPage)(...args)
        ),
        l: common_vendor.p({
          name: "vip"
        }),
        m: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(navMemberRightsPage) && common_vendor.unref(navMemberRightsPage)(...args)
        ),
        n: common_vendor.p({
          name: "identity"
        }),
        o: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(navUserInfoPage) && common_vendor.unref(navUserInfoPage)(...args)
        ),
        p: common_vendor.p({
          name: "help"
        }),
        q: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(navCommonProblemPage) && common_vendor.unref(navCommonProblemPage)(...args)
        ),
        r: common_vendor.p({
          name: "plane-fill"
        }),
        s: common_vendor.p({
          name: "right"
        }),
        t: common_vendor.p({
          name: "bookmark-fill"
        }),
        v: common_vendor.p({
          name: "right"
        }),
        w: common_vendor.p({
          name: "service-fill"
        }),
        x: common_vendor.p({
          name: "right"
        }),
        y: common_vendor.p({
          ["only-button"]: true,
          ["open-type"]: "contact"
        }),
        z: common_vendor.p({
          name: "tip-fill"
        }),
        A: common_vendor.p({
          name: "right"
        }),
        B: common_vendor.p({
          ["only-button"]: true,
          ["open-type"]: "feedback"
        }),
        C: common_vendor.p({
          name: "tel-circle-fill"
        }),
        D: `${common_vendor.unref(navBarInfo).height + 12}px`,
        E: common_vendor.p({
          fixed: false,
          content: "GDOU 提供技术支持"
        })
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ad9c4ce0"], ["__file", "C:/Users/DIO/Desktop/大学/项目/狮业有成/demo-vue3/src/pages/index/sub-pages/page-e/index.vue"]]);
wx.createComponent(Component);
