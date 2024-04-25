"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const pages_index_composables_useSubPageProvide = require("../../../composables/use-sub-page-provide.js");
const hooks_useScrollTransparentNavbar_index = require("../../../../../hooks/use-scroll-transparent-navbar/index.js");
const types_color = require("../../../../../types/color.js");
const useSubPage = () => {
  const instance = common_vendor.getCurrentInstance();
  const swiperData = common_vendor.ref([
    "/src/assets/bg/1713878345680.jpg",
    "/src/assets/bg/1713878406472.jpg",
    "/src/assets/bg/1713878412366.jpg",
    "/src/assets/bg/1713929237490.jpg"
  ]);
  const hotCategoryData = common_vendor.ref([
    {
      id: "1",
      name: "精选图片",
      icon: "image",
      backgroundColor: {
        type: types_color.ColorType.select,
        value: "#82B2FF"
      },
      url: "/home-page/company-album/index"
      // url: '/home-page/brand-introduction/index',
    },
    {
      id: "2",
      name: "视频专区",
      icon: "video-square",
      backgroundColor: {
        type: types_color.ColorType.select,
        value: "#24BA97"
      },
      url: "/home-page/win-win/index"
    },
    {
      id: "3",
      name: "新闻中心",
      icon: "reply",
      backgroundColor: {
        type: types_color.ColorType.select,
        value: "#e93c32"
      },
      url: "/home-page/topic-community/index"
    },
    {
      id: "4",
      name: "地图导航",
      icon: "map",
      backgroundColor: {
        type: types_color.ColorType.select,
        value: "#CC5A36"
      },
      url: "/home-page/tuniao-ecology/index"
    }
  ]);
  const noticeData = common_vendor.ref([
    "欢迎来到狮业有承小程序，祝你有一段美好的旅程!",
    "狮业有承，事业有成！"
  ]);
  const adCapsuleData = common_vendor.ref(
    "https://resource.tuniaokj.com/images/swiper/capsule1.png"
  );
  const hotCaseData = common_vendor.ref([
    "/src/assets/bg/微信图片_20240424155803.jpg",
    "/src/assets/bg/微信图片_20240424160105.jpg",
    "/src/assets/bg/微信图片_20240424160112.jpg"
  ]);
  const {
    triggerElementId,
    navbarOpacity,
    init: initTransparentScroll,
    updateTargetTriggerValue,
    opacityScrollHandle
  } = hooks_useScrollTransparentNavbar_index.useScrollTransparentNavbar(instance);
  common_vendor.onMounted(() => {
    initTransparentScroll();
  });
  const navbarInitFinishHandle = (info) => {
    updateTargetTriggerValue(info.height);
  };
  const navAboutPage = () => {
    common_vendor.tnNavPage("/tuniao/about/index");
  };
  const navSearchPage = () => {
    common_vendor.tnNavPage("/home-page/search/index");
  };
  const onLoad = () => {
    console.log("pageA onLoad");
  };
  const onScroll = ({ top }) => {
    opacityScrollHandle(top);
  };
  pages_index_composables_useSubPageProvide.useSubPageProvide(0, {
    onLoad,
    onScroll
  });
  return {
    triggerElementId,
    navbarOpacity,
    swiperData,
    hotCategoryData,
    noticeData,
    adCapsuleData,
    hotCaseData,
    tnNavPage: common_vendor.tnNavPage,
    navbarInitFinishHandle,
    navAboutPage,
    navSearchPage
  };
};
exports.useSubPage = useSubPage;
