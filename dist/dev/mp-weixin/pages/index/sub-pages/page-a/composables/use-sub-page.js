"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const pages_index_composables_useSubPageProvide = require("../../../composables/use-sub-page-provide.js");
const hooks_useScrollTransparentNavbar_index = require("../../../../../hooks/use-scroll-transparent-navbar/index.js");
const types_color = require("../../../../../types/color.js");
const useSubPage = () => {
  const instance = common_vendor.getCurrentInstance();
  const swiperData = common_vendor.ref([
    "/src/static/bg/1713878345680.jpg",
    "/src/static/bg/1713878406472.jpg",
    "/src/static/bg/1713878412366.jpg",
    "/src/static/bg/1713929237490.jpg"
  ]);
  const hotCategoryData = common_vendor.ref([
    {
      id: "1",
      name: "品牌介绍",
      icon: "cute",
      backgroundColor: {
        type: types_color.ColorType.select,
        value: "#3c7efe"
      },
      url: "/home-page/brand-introduction/index"
    },
    {
      id: "2",
      name: "合作共赢",
      icon: "cute",
      backgroundColor: {
        type: types_color.ColorType.select,
        value: "#2be9bb"
      },
      url: "/home-page/win-win/index"
    },
    {
      id: "3",
      name: "社区话题",
      icon: "cute",
      backgroundColor: {
        type: types_color.ColorType.select,
        value: "#e93c32"
      },
      url: "/home-page/topic-community/index"
    },
    {
      id: "4",
      name: "开源生态",
      icon: "cute",
      backgroundColor: {
        type: types_color.ColorType.select,
        value: "#ffa929"
      },
      url: "/home-page/tuniao-ecology/index"
    }
  ]);
  const noticeData = common_vendor.ref([
    "图鸟官网全新上线，欢迎大家前来访问",
    "图鸟官网全新上线，欢迎大家前来访问",
    "图鸟官网全新上线，欢迎大家前来访问"
  ]);
  const adCapsuleData = common_vendor.ref(
    "https://resource.tuniaokj.com/images/swiper/capsule1.png"
  );
  const hotCaseData = common_vendor.ref([
    "https://resource.tuniaokj.com/images/blogger/content_1.jpeg",
    "https://resource.tuniaokj.com/images/blogger/onepiece-1.jpg",
    "https://resource.tuniaokj.com/images/blogger/onepiece-2.jpg"
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
