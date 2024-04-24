"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const pages_index_composables_useSubPageProvide = require("../../../composables/use-sub-page-provide.js");
const utils_localMock = require("../../../../../utils/local-mock.js");
const useSubPage = () => {
  const swiperData = common_vendor.ref([]);
  const newsData = common_vendor.ref([]);
  const navArticleDetail = (id) => {
    common_vendor.tnNavPage(`/detail-page/article-detail/index?id=${id}&type=news`);
  };
  const onLoad = () => {
    swiperData.value = [
      {
        id: "1",
        name: "轮播图1",
        image: "https://resource.tuniaokj.com/images/swiper/ad1.jpg",
        title: "我不喜欢带雨伞",
        desc: "因为雨水从来不低落在我心上"
      },
      {
        id: "2",
        name: "轮播图2",
        image: "https://resource.tuniaokj.com/images/swiper/ad2.jpg",
        title: "图鸟南南",
        desc: "欢迎加入东东们"
      },
      {
        id: "3",
        name: "轮播图3",
        image: "https://resource.tuniaokj.com/images/swiper/ad3.jpg",
        title: "图鸟北北",
        desc: "微信号 tnkewo"
      },
      {
        id: "4",
        name: "轮播图4",
        image: "https://resource.tuniaokj.com/images/swiper/ad4.jpg",
        title: "图鸟猪猪",
        desc: "努力成为大佬"
      }
    ];
    newsData.value = Array.from({ length: utils_localMock.generateRandomNumber(10, 30) }).map(
      () => ({
        id: utils_localMock.generateRandomNumber(1e3, 9999).toString(),
        title: "图鸟官网模板全新上线",
        mainImage: "https://resource.tuniaokj.com/images/xiongjie/x14.jpg",
        desc: "图鸟官网模板全新上线，欢迎大家前来体验。",
        content: "图鸟官网模板全新上线，欢迎大家前来体验。",
        tags: ["图鸟"],
        hotCount: utils_localMock.generateRandomNumber(1, 100),
        replyCount: utils_localMock.generateRandomNumber(1, 100),
        likeCount: utils_localMock.generateRandomNumber(1, 100),
        viewCount: utils_localMock.generateRandomNumber(1, 100),
        shareCount: utils_localMock.generateRandomNumber(1, 100),
        viewUsersAvatar: [],
        recommend: utils_localMock.generateRandomNumber(1, 10) % 2 === 0
      })
    );
  };
  pages_index_composables_useSubPageProvide.useSubPageProvide(3, {
    onLoad
  });
  return {
    swiperData,
    newsData,
    navArticleDetail
  };
};
exports.useSubPage = useSubPage;
