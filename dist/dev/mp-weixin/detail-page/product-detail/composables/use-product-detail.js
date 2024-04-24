"use strict";
const common_vendor = require("../../../common/vendor.js");
const utils_localMock = require("../../../utils/local-mock.js");
const hooks_useScrollTransparentNavbar_index = require("../../../hooks/use-scroll-transparent-navbar/index.js");
const useProductDetail = () => {
  const instance = common_vendor.getCurrentInstance();
  const product = common_vendor.ref();
  const generateProductData = () => {
    return {
      id: utils_localMock.generateRandomNumber(1, 100).toString(),
      title: "图鸟模板",
      desc: "图鸟模板，是一套你值得拥有的模板",
      images: [
        "https://resource.tuniaokj.com/images/shop/bag1.jpg",
        "https://resource.tuniaokj.com/images/shop/bag2.jpg",
        "https://resource.tuniaokj.com/images/shop/card.jpg",
        "https://resource.tuniaokj.com/images/shop/computer1.jpg",
        "https://resource.tuniaokj.com/images/shop/computer2.jpg",
        "https://resource.tuniaokj.com/images/shop/cup1.jpg",
        "https://resource.tuniaokj.com/images/shop/cup2.jpg"
      ].sort(() => Math.random() - 0.5),
      price: utils_localMock.generateRandomFloat(1, 1e3),
      sale: utils_localMock.generateRandomNumber(1, 1e3),
      content: "图鸟模板，是一套你值得拥有的模板",
      attributes: [
        {
          name: "前端语言",
          value: "uniapp"
        },
        {
          name: "后端语言",
          value: "你想要的都有"
        },
        {
          name: "授权方式",
          value: "单独购买"
        }
      ],
      tags: ["热销", "推荐", "新品"].slice(0, utils_localMock.generateRandomNumber(1, 3))
    };
  };
  product.value = generateProductData();
  const {
    triggerElementId,
    navbarOpacity,
    init: initTransparentScroll,
    updateTargetTriggerValue,
    opacityScrollHandle
  } = hooks_useScrollTransparentNavbar_index.useScrollTransparentNavbar(instance);
  const navbarInitFinishHandle = (info) => {
    updateTargetTriggerValue(info.height);
  };
  return {
    triggerElementId,
    navbarOpacity,
    product,
    initTransparentScroll,
    opacityScrollHandle,
    navbarInitFinishHandle
  };
};
exports.useProductDetail = useProductDetail;
