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
      title: "广东省——“非遗”工作取得新成效",
      desc: "2022年6月11日，广东省文化和旅游厅在中山市召开2022年全省非物质文化遗产保护工作会议。会议指出，近年来，广东省非遗保护工作在多方的支持和共同努力下，全省非遗保护工作在建章立制、基础工作、场馆建设、传承传播、双创发展、服务大局上均取得新成效，新突破。在相关政策的支持下，从岭南一带延伸至全国各地甚至海内外，“狮业有承”项目的开展将更具底气与动力。目前，全省共有联合国教科文组织公布的人类非遗代表作名录4项，国家级非遗代表性项目名录165项，国家级非遗传承人132人，省级非遗代表性项目816项，省级非遗传承人837人。",
      content: "2022年6月11日，广东省文化和旅游厅在中山市召开2022年全省非物质文化遗产保护工作会议。会议指出，近年来，广东省非遗保护工作在多方的支持和共同努力下，全省非遗保护工作在建章立制、基础工作、场馆建设、传承传播、双创发展、服务大局上均取得新成效，新突破。在相关政策的支持下，从岭南一带延伸至全国各地甚至海内外，“狮业有承”项目的开展将更具底气与动力。目前，全省共有联合国教科文组织公布的人类非遗代表作名录4项，国家级非遗代表性项目名录165项，国家级非遗传承人132人，省级非遗代表性项目816项，省级非遗传承人837人。2.2.3湛江市——全面落实非遗文化保护工作①　助力非物质文化遗产保护、传承和发展一是完善非遗项目保护机制，着力打造传统工艺振兴平台，推进湛江市遂溪龙湾舞狮文化馆等平台的建设和发展。同时促进文化企业和民间工艺发展，孕育一批民族文化企业家和反映湛江非物质文化遗产的代表性作品。二是加强非物质文化遗产的传承与保护。建立“湛江非遗学院”，依托“非遗学院”平台，组织非遗传承人和非遗专家开展多样性传教活动；建设一批集传承研培、文创研发、媒体传播、产品生产为一体的非遗工作站，促进我市非遗项目与文旅融合，从而实现非遗传承的可持续发展；加强非物质文化遗产的交流与传播，提升国际国内的知名度。为“狮业有承”品牌文创产品及教学活动的传播与推广奠定了基础。②　传承舞狮文化遂溪县螺岗小镇腾艺龍狮客栈获湛江市委书记认可2021年8月24日，湛江市市委书记刘红兵刘书记莅临舞狮文化非遗传承人许海龙的传承基地螺岗小镇腾艺龍狮客栈，表示迷你狮是展示舞狮文化的绝佳载体，结合IP化化运营，迷你狮有望以旅游礼品的形式向全国各地进行推广。借助舞狮文化的名片，不仅能树立遂溪品牌，更能带动湛江市的旅游事业迈上新的台阶。在此基础上，“狮业有承”文创产品顺势而生，将在平台上以积分兑换及自由购买的形式面向全国各地推出舞狮相关文创周边。③　广东海洋大学社会实践团队助力舞狮文化传承为推动岭南舞狮文化传承与发展，促进中华优秀传统“舞狮”文化的研究与传播，2022年7月7日上午，广东海洋大学文学与新闻传播学院三下乡团队“舞狮文化传承调研队”前往遂溪国家级非遗遂溪舞狮保护传承基地针对南狮文化进行深入实际了解，传承基地狮队为调研队表演欢迎，舞狮传承人黄桃为团队讲解狮头的制作流程，并带领大家参观舞狮博物馆，舞狮文化传承调研队肩负起继承和发扬中华传统文化，同时舞狮文化实践调研所得使“狮业有承”项目建设更加完善，更具实用性与创新性。",
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
        title: "狮业有承官网上线",
        desc: "2022年6月11日，广东省文化和旅游厅在中山市召开2022年全省非物质文化遗产保护工作会议。会议指出，近年来，广东省非遗保护工作在多方的支持和共同努力下，全省非遗保护工作在建章立制、基础工作、场馆建设、传承传播、双创发展、服务大局上均取得新成效，新突破。在相关政策的支持下，从岭南一带延伸至全国各地甚至海内外，“狮业有承”项目的开展将更具底气与动力。目前，全省共有联合国教科文组织公布的人类非遗代表作名录4项，国家级非遗代表性项目名录165项，国家级非遗传承人132人，省级非遗代表性项目816项，省级非遗传承人837人。",
        content: "2022年6月11日，广东省文化和旅游厅在中山市召开2022年全省非物质文化遗产保护工作会议。会议指出，近年来，广东省非遗保护工作在多方的支持和共同努力下，全省非遗保护工作在建章立制、基础工作、场馆建设、传承传播、双创发展、服务大局上均取得新成效，新突破。在相关政策的支持下，从岭南一带延伸至全国各地甚至海内外，“狮业有承”项目的开展将更具底气与动力。目前，全省共有联合国教科文组织公布的人类非遗代表作名录4项，国家级非遗代表性项目名录165项，国家级非遗传承人132人，省级非遗代表性项目816项，省级非遗传承人837人。",
        mainImage: "https://resource.tuniaokj.com/images/publicity/publicity-vue2.jpg",
        tags: ["狮业有承"],
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
        title: "狮业有承官网上线",
        desc: "2022年6月11日，广东省文化和旅游厅在中山市召开2022年全省非物质文化遗产保护工作会议。会议指出，近年来，广东省非遗保护工作在多方的支持和共同努力下，全省非遗保护工作在建章立制、基础工作、场馆建设、传承传播、双创发展、服务大局上均取得新成效，新突破。在相关政策的支持下，从岭南一带延伸至全国各地甚至海内外，“狮业有承”项目的开展将更具底气与动力。目前，全省共有联合国教科文组织公布的人类非遗代表作名录4项，国家级非遗代表性项目名录165项，国家级非遗传承人132人，省级非遗代表性项目816项，省级非遗传承人837人。",
        content: "2022年6月11日，广东省文化和旅游厅在中山市召开2022年全省非物质文化遗产保护工作会议。会议指出，近年来，广东省非遗保护工作在多方的支持和共同努力下，全省非遗保护工作在建章立制、基础工作、场馆建设、传承传播、双创发展、服务大局上均取得新成效，新突破。在相关政策的支持下，从岭南一带延伸至全国各地甚至海内外，“狮业有承”项目的开展将更具底气与动力。目前，全省共有联合国教科文组织公布的人类非遗代表作名录4项，国家级非遗代表性项目名录165项，国家级非遗传承人132人，省级非遗代表性项目816项，省级非遗传承人837人。",
        mainImage: "https://resource.tuniaokj.com/images/publicity/publicity-vue2.jpg",
        tags: ["狮业有承"],
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
