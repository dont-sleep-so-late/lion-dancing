"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./home-page/search/index.js";
  "./home-page/brand-introduction/index.js";
  "./home-page/win-win/index.js";
  "./home-page/service-center/index.js";
  "./home-page/topic-community/index.js";
  "./home-page/tuniao-ecology/index.js";
  "./home-page/company-culture/index.js";
  "./home-page/development-path/index.js";
  "./home-page/company-album/index.js";
  "./home-page/honor-cert/index.js";
  "./home-page/company-location/index.js";
  "./detail-page/product-detail/index.js";
  "./detail-page/business-process-detail/index.js";
  "./detail-page/article-detail/index.js";
  "./detail-page/problem-detail/index.js";
  "./tuniao/about/index.js";
  "./info-page/user-info/index.js";
  "./info-page/common-problem/index.js";
  "./info-page/member-rights/index.js";
  "./order-page/order-list/index.js";
}
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "App",
  setup(__props) {
    common_vendor.onLaunch(() => {
      console.log("欢迎使用狮业有成");
      common_vendor.index.loadFontFace({
        family: "tuniao-xiaowei",
        source: 'url("https://resource.tuniaokj.com/images/vue3-template/template2-website/font/tuniao-xiaowei.ttf")',
        fail: (err) => {
          common_vendor.debugWarn("load-font", `加载字体失败: ${err}`);
        }
      });
    });
    return () => {
    };
  }
});
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/DIO/Desktop/大学/项目/狮业有成/demo-vue3/src/App.vue"]]);
const TnIcon = () => "./node-modules/@tuniao/tnui-vue3-uniapp/components/icon/src/icon.js";
const TnNavbar = () => "./node-modules/@tuniao/tnui-vue3-uniapp/components/navbar/src/navbar.js";
const TnButton = () => "./node-modules/@tuniao/tnui-vue3-uniapp/components/button/src/button.js";
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.component("TnIcon", TnIcon);
  app.component("TnNavbar", TnNavbar);
  app.component("TnButton", TnButton);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
