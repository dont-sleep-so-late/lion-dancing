"use strict";
const common_vendor = require("../../../common/vendor.js");
const utils_localMock = require("../../../utils/local-mock.js");
const useArticleDetail = () => {
  const navbarHeight = common_vendor.ref(0);
  const article = common_vendor.ref();
  const recommendArticles = common_vendor.ref([]);
  const getData = (id) => {
    article.value = {
      id,
      title: "图鸟官网模板上线",
      desc: "图鸟官网模板上线，欢迎大家使用",
      content: "图鸟官网模板上线，欢迎大家使用",
      mainImage: "https://resource.tuniaokj.com/images/publicity/publicity-vue2.jpg",
      tags: [],
      hotCount: utils_localMock.generateRandomNumber(1, 100),
      replyCount: utils_localMock.generateRandomNumber(1, 100),
      likeCount: utils_localMock.generateRandomNumber(1, 100),
      viewCount: utils_localMock.generateRandomNumber(1, 100),
      shareCount: utils_localMock.generateRandomNumber(1, 100),
      viewUsersAvatar: Array.from({
        length: utils_localMock.generateRandomNumber(4, 6)
      }).map(() => utils_localMock.generateRandomAvatar()),
      recommend: false
    };
    recommendArticles.value = [
      {
        id,
        title: "图鸟官网模板上线",
        desc: "图鸟官网模板上线，欢迎大家使用",
        content: "图鸟官网模板上线，欢迎大家使用",
        mainImage: "https://resource.tuniaokj.com/images/publicity/publicity-vue2.jpg",
        tags: ["图鸟"],
        hotCount: utils_localMock.generateRandomNumber(1, 100),
        replyCount: utils_localMock.generateRandomNumber(1, 100),
        likeCount: utils_localMock.generateRandomNumber(1, 100),
        viewCount: utils_localMock.generateRandomNumber(1, 100),
        shareCount: utils_localMock.generateRandomNumber(1, 100),
        viewUsersAvatar: [],
        recommend: false
      },
      {
        id,
        title: "图鸟官网模板上线",
        desc: "图鸟官网模板上线，欢迎大家使用",
        content: "图鸟官网模板上线，欢迎大家使用",
        mainImage: "https://resource.tuniaokj.com/images/publicity/publicity-vue2.jpg",
        tags: ["图鸟"],
        hotCount: utils_localMock.generateRandomNumber(1, 100),
        replyCount: utils_localMock.generateRandomNumber(1, 100),
        likeCount: utils_localMock.generateRandomNumber(1, 100),
        viewCount: utils_localMock.generateRandomNumber(1, 100),
        shareCount: utils_localMock.generateRandomNumber(1, 100),
        viewUsersAvatar: [],
        recommend: false
      }
    ];
  };
  const navbarInitFinishHandle = (info) => {
    navbarHeight.value = info.height;
  };
  return {
    navbarHeight,
    article,
    recommendArticles,
    navbarInitFinishHandle,
    getData
  };
};
exports.useArticleDetail = useArticleDetail;
