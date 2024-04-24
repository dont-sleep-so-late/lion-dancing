"use strict";
const common_vendor = require("../../../common/vendor.js");
const utils_localMock = require("../../../utils/local-mock.js");
const hooks_useScrollTransparentNavbar_index = require("../../../hooks/use-scroll-transparent-navbar/index.js");
const useTopicCommunity = () => {
  const instance = common_vendor.getCurrentInstance();
  const communitySummary = common_vendor.ref({
    title: "话题社区",
    desc: "来自图鸟内部成员的烂漫，在这里发现创意",
    image: "https://resource.tuniaokj.com/images/logo/logo.jpg"
  });
  const topicsData = common_vendor.ref([]);
  const {
    triggerElementId,
    navbarOpacity,
    init: initTransparentScroll,
    updateTargetTriggerValue,
    opacityScrollHandle
  } = hooks_useScrollTransparentNavbar_index.useScrollTransparentNavbar(instance);
  const generateTopicsData = () => {
    for (let i = 0; i < 20; i++) {
      const viewUserAvatars = Array.from({
        length: utils_localMock.generateRandomNumber(1, 6)
      }).map(() => utils_localMock.generateRandomAvatar());
      topicsData.value.push({
        id: `${i}`,
        title: `话题标题-${i}`,
        desc: "开源可商用组件，助你快速开发炫酷的小程序",
        createTime: "news",
        author: {
          id: `${i}`,
          nickname: utils_localMock.generateRandomNickname(),
          avatar: utils_localMock.generateRandomAvatar("xiong")
        },
        tags: ["开源", "创意", "UI框架"].slice(0, utils_localMock.generateRandomNumber(1, 3)),
        images: [
          "https://resource.tuniaokj.com/images/blogger/content_1.jpeg",
          "https://resource.tuniaokj.com/images/blogger/onepiece-1.jpg",
          "https://resource.tuniaokj.com/images/blogger/onepiece-2.jpg",
          "https://resource.tuniaokj.com/images/blogger/onepiece-3.jpg",
          "https://resource.tuniaokj.com/images/blogger/onepiece-1.jpg",
          "https://resource.tuniaokj.com/images/blogger/onepiece-2.jpg",
          "https://resource.tuniaokj.com/images/blogger/onepiece-3.jpg"
        ].slice(0, utils_localMock.generateRandomNumber(1, 7)),
        hotCount: utils_localMock.generateRandomNumber(1, 1e3),
        replyCount: utils_localMock.generateRandomNumber(1, 1e3),
        likeCount: utils_localMock.generateRandomNumber(1, 1e3),
        viewCount: utils_localMock.generateRandomNumber(1, 1e3),
        viewUsersAvatar: viewUserAvatars
      });
    }
  };
  generateTopicsData();
  const navbarInitFinishHandle = (info) => {
    updateTargetTriggerValue(info.height);
  };
  return {
    triggerElementId,
    navbarOpacity,
    communitySummary,
    topicsData,
    initTransparentScroll,
    opacityScrollHandle,
    navbarInitFinishHandle
  };
};
exports.useTopicCommunity = useTopicCommunity;
