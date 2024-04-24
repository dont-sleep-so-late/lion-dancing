"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const pages_index_composables_useSubPageProvide = require("../../../composables/use-sub-page-provide.js");
const utils_localMock = require("../../../../../utils/local-mock.js");
const useSubPage = () => {
  const navbarHeight = common_vendor.ref(0);
  const currentCategoryIndex = common_vendor.ref(0);
  const categoryList = common_vendor.ref([]);
  const categoryProductData = common_vendor.ref([]);
  const navSearchPage = () => {
    common_vendor.tnNavPage("/home-page/search/index");
  };
  const navbarInitFinishHandle = (info) => {
    navbarHeight.value = info.height;
  };
  const categoryChangeHandle = (index) => {
    var _a, _b;
    if (!((_b = (_a = categoryProductData.value[index]) == null ? void 0 : _a.banners) == null ? void 0 : _b.length)) {
      categoryProductData.value[index].banners = Array.from({
        length: 5
      }).map(() => generateBanner());
      categoryProductData.value[index].products = Array.from({
        length: 20
      }).map(() => generateProductData());
    }
  };
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
  const generateBanner = () => {
    return {
      id: utils_localMock.generateRandomNumber(1, 100).toString(),
      name: "图鸟模板",
      image: [
        "https://resource.tuniaokj.com/images/shop/banner1.jpg",
        "https://resource.tuniaokj.com/images/shop/banner2.jpg",
        "https://resource.tuniaokj.com/images/swiper/ad2.jpg",
        "https://resource.tuniaokj.com/images/swiper/ad3.jpg",
        "https://resource.tuniaokj.com/images/swiper/ad4.jpg",
        "https://resource.tuniaokj.com/images/swiper/ad5.jpg"
      ][utils_localMock.generateRandomNumber(0, 5)]
    };
  };
  const onLoad = () => {
    categoryList.value = [
      {
        id: "1",
        name: "推荐",
        icon: "logo-tuniao"
      },
      {
        id: "2",
        name: "最新",
        icon: "logo-tuniao"
      },
      {
        id: "3",
        name: "最热",
        icon: "logo-tuniao"
      }
    ];
    categoryProductData.value = Array.from({
      length: categoryList.value.length
    }).map(() => ({
      banners: [],
      products: [],
      isLoad: false
    }));
    categoryProductData.value[0].banners = Array.from({
      length: 5
    }).map(() => generateBanner());
    categoryProductData.value[0].products = Array.from({
      length: 20
    }).map(() => generateProductData());
    categoryProductData.value[0].isLoad = true;
  };
  pages_index_composables_useSubPageProvide.useSubPageProvide(1, {
    onLoad
  });
  return {
    navbarHeight,
    currentCategoryIndex,
    categoryList,
    categoryProductData,
    navbarInitFinishHandle,
    navSearchPage,
    categoryChangeHandle
  };
};
exports.useSubPage = useSubPage;
