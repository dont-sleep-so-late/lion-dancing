"use strict";
const common_vendor = require("../../../common/vendor.js");
const homePage_serviceCenter_tokens_indexPage = require("../tokens/index-page.js");
const useSubPageProvide = (index, options = {}) => {
  const instance = common_vendor.getCurrentInstance();
  const { uid } = instance;
  const indexPage = common_vendor.inject(homePage_serviceCenter_tokens_indexPage.indexPageContextKey, null);
  indexPage == null ? void 0 : indexPage.addItem({
    uid,
    index,
    onLoad: options == null ? void 0 : options.onLoad,
    onShow: options == null ? void 0 : options.onShow,
    onScroll: options == null ? void 0 : options.onScroll
  });
  return {
    indexPage
  };
};
exports.useSubPageProvide = useSubPageProvide;
