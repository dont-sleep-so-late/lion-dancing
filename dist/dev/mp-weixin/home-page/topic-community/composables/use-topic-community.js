"use strict";
const common_vendor = require("../../../common/vendor.js");
const utils_localMock = require("../../../utils/local-mock.js");
const hooks_useScrollTransparentNavbar_index = require("../../../hooks/use-scroll-transparent-navbar/index.js");
const useTopicCommunity = () => {
  const instance = common_vendor.getCurrentInstance();
  const communitySummary = common_vendor.ref({
    title: "新闻中心",
    desc: "来自一线记者的细心采访，在这里发现文化传承",
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
        title: `舞狮文化传承调研队丨助力醒狮传承，广海学子在路上-${i}`,
        desc: "中华舞狮有南北之分，而南狮因追求“神似”又被称为“醒狮”。岭南醒狮文化作为国家级非物质文化遗产，凝聚岭南历史的精魂，对其传承就是对岭南文化继承、传播和创新的过程。",
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
