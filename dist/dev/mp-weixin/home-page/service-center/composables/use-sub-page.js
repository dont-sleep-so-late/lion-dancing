"use strict";
const common_vendor = require("../../../common/vendor.js");
const hooks_useScrollTransparentNavbar_index = require("../../../hooks/use-scroll-transparent-navbar/index.js");
const types_color = require("../../../types/color.js");
const homePage_serviceCenter_composables_useSubPageProvide = require("./use-sub-page-provide.js");
const useSubPage = () => {
  const instance = common_vendor.getCurrentInstance();
  const swiperData = common_vendor.ref([
    "https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/lionDancing/20240501163444.png",
    "https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/lionDancing/20240501164048.png",
    "https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/lionDancing/20240501163619.png",
    "https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/lionDancing/20240501164237.png"
  ]);
  const swiperData2 = common_vendor.ref([
    "https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/lionDancing/20240501164311.png",
    "https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/lionDancing/20240501164308.png",
    "https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/lionDancing/20240501163428.png"
  ]);
  const classCategoryData = common_vendor.ref([
    {
      id: "1",
      name: "南狮教学",
      icon: "con-leo",
      backgroundColor: {
        type: types_color.ColorType.select,
        value: "#82B2FF"
      },
      url: "/home-page/company-album/index"
      // url: '/home-page/brand-introduction/index',
    },
    {
      id: "2",
      name: "假期学习",
      icon: "book",
      backgroundColor: {
        type: types_color.ColorType.select,
        value: "#24BA97"
      },
      url: "/home-page/win-win/index"
    },
    {
      id: "3",
      name: "课程加盟",
      icon: "education",
      backgroundColor: {
        type: types_color.ColorType.select,
        value: "#5F7E8B"
      },
      url: "/home-page/topic-community/index"
    },
    {
      id: "4",
      name: "体验课程",
      icon: "video-square",
      backgroundColor: {
        type: types_color.ColorType.select,
        value: "#CC5A36"
      },
      url: "/home-page/win-win/index"
    }
  ]);
  const volunteerCategoryData = common_vendor.ref([
    {
      id: "1",
      name: "志愿者报名",
      icon: "like-lack-fill",
      backgroundColor: {
        type: types_color.ColorType.select,
        value: "#82B2FF"
      },
      url: "/home-page/service-center/index"
    },
    {
      id: "2",
      name: "活动组织",
      icon: "qr-code-circle",
      backgroundColor: {
        type: types_color.ColorType.select,
        value: "#24BA97"
      },
      url: "/home-page/service-center/index"
    },
    {
      id: "3",
      name: "意见询问",
      icon: "help",
      backgroundColor: {
        type: types_color.ColorType.select,
        value: "#5F7E8B"
      },
      url: "/home-page/service-center/index"
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
    "https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/lionDancing/微信图片_20240424155803.jpg",
    "https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/lionDancing/微信图片_20240424160105.jpg",
    "https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/lionDancing/微信图片_20240424160112.jpg"
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
  homePage_serviceCenter_composables_useSubPageProvide.useSubPageProvide(0, {
    onLoad,
    onScroll
  });
  return {
    triggerElementId,
    navbarOpacity,
    swiperData,
    swiperData2,
    classCategoryData,
    volunteerCategoryData,
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
