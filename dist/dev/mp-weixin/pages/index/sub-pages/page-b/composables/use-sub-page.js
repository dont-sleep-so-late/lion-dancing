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
      title: "醒狮周边",
      desc: "醒狮周边，是一套你值得拥有的醒狮周边",
      images: [
        "/src/assets/shop/baijian.png",
        "/src/assets/shop/bianlitie.jpg",
        "/src/assets/shop/bingxiangtie.jpg",
        "/src/assets/shop/chezaishiping.jpg",
        "/src/assets/shop/cixiu (1).jpg",
        "/src/assets/shop/cixiu (2).jpg",
        "/src/assets/shop/denglong (1).jpg",
        "/src/assets/shop/denglong (2).jpg",
        "/src/assets/shop/dingshuji (1).jpg",
        "/src/assets/shop/dingshuji (2).jpg",
        "/src/assets/shop/gouwudai.jpg",
        "/src/assets/shop/huaban.jpg",
        "/src/assets/shop/huizhang.jpg",
        "/src/assets/shop/jiaobu.jpg",
        "/src/assets/shop/jimu.jpg",
        "/src/assets/shop/jimu2 (1).jpg",
        "/src/assets/shop/jimu2 (2).jpg",
        "/src/assets/shop/jimu2 (3).jpg",
        "/src/assets/shop/jimu2 (4).jpg",
        "/src/assets/shop/maozi.jpg",
        "/src/assets/shop/qichepaijian.jpg",
        "/src/assets/shop/shizitou.jpg",
        "/src/assets/shop/shoujike.jpg",
        "/src/assets/shop/shubiaodian.jpg",
        "/src/assets/shop/shuiping.jpg",
        "/src/assets/shop/shuzhibaijian (1).jpg",
        "/src/assets/shop/shuzhibaijian (2).jpg",
        "/src/assets/shop/shuzhibaijian (3).jpg",
        "/src/assets/shop/shuzhibaijian (4).jpg",
        "/src/assets/shop/shuzhibaijian (5).jpg",
        "/src/assets/shop/stone (1).jpg",
        "/src/assets/shop/stone (2).jpg",
        "/src/assets/shop/taicui.jpg",
        "/src/assets/shop/taoyi.jpg",
        "/src/assets/shop/xiongshi.jpg",
        "/src/assets/shop/yanzhao.jpg"
      ].sort(() => Math.random() - 0.5),
      price: utils_localMock.generateRandomFloat(1, 200),
      sale: utils_localMock.generateRandomNumber(1, 1e3),
      content: "醒狮周边，是一套你值得拥有的醒狮周边",
      attributes: [
        {
          name: "可获取积分",
          value: "2积分"
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
      name: "狮业有承模板",
      image: [
        "/src/assets/shop/baijian.png",
        "/src/assets/shop/bianlitie.jpg",
        "/src/assets/shop/bingxiangtie.jpg",
        "/src/assets/shop/chezaishiping.jpg",
        "/src/assets/shop/cixiu (1).jpg",
        "/src/assets/shop/cixiu (2).jpg"
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
