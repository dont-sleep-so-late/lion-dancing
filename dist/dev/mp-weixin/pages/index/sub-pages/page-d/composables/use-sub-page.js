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
        name: "醒狮表演",
        image: "/src/assets/bg/微信图片_20240424160137.jpg",
        title: "通讯员 张智轩",
        desc: "助力非遗传承，广东学子在路上"
      },
      {
        id: "2",
        name: "醒狮表演2",
        image: "/src/assets/bg/微信图片_20240424160115.jpg",
        title: "通讯员 陈舒琪",
        desc: "深入佛声工艺厂，挖掘醒狮文化内涵"
      }
    ];
    newsData.value = Array.from({ length: utils_localMock.generateRandomNumber(10, 30) }).map(
      () => ({
        id: utils_localMock.generateRandomNumber(1e3, 9999).toString(),
        title: "广东省——“非遗”工作取得新成效",
        mainImage: "/src/assets/bg/微信图片_20240424160137.jpg",
        desc: "2022年6月11日，广东省文化和旅游厅在中山市召开2022年全省非物质文化遗产保护工作会议。",
        content: "2022年6月11日，广东省文化和旅游厅在中山市召开2022年全省非物质文化遗产保护工作会议。会议指出，近年来，广东省非遗保护工作在多方的支持和共同努力下，全省非遗保护工作在建章立制、基础工作、场馆建设、传承传播、双创发展、服务大局上均取得新成效，新突破。在相关政策的支持下，从岭南一带延伸至全国各地甚至海内外，“狮业有承”项目的开展将更具底气与动力。目前，全省共有联合国教科文组织公布的人类非遗代表作名录4项，国家级非遗代表性项目名录165项，国家级非遗传承人132人，省级非遗代表性项目816项，省级非遗传承人837人。",
        tags: ["醒狮", "非遗"],
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
