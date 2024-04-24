"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const pages_index_composables_useSubPageProvide = require("../../../composables/use-sub-page-provide.js");
const types_color = require("../../../../../types/color.js");
const useSubPage = () => {
  const demoImages = common_vendor.ref([]);
  const businessCategoryData = common_vendor.ref([]);
  const projectCaseData = common_vendor.ref([]);
  const onLoad = () => {
    demoImages.value = [
      {
        id: "1",
        name: "样机1",
        image: "https://resource.tuniaokj.com/images/index_bg/pro1.jpg"
      },
      {
        id: "2",
        name: "样机2",
        image: "https://resource.tuniaokj.com/images/index_bg/pro2.jpg"
      },
      {
        id: "3",
        name: "样机3",
        image: "https://resource.tuniaokj.com/images/index_bg/pro3.jpg"
      },
      {
        id: "4",
        name: "样机4",
        image: "https://resource.tuniaokj.com/images/index_bg/pro4.jpg"
      },
      {
        id: "5",
        name: "样机5",
        image: "https://resource.tuniaokj.com/images/index_bg/pro5.jpg"
      }
    ];
    businessCategoryData.value = [
      {
        id: "1",
        name: "原型设计",
        icon: "cube-fill",
        iconColor: {
          type: types_color.ColorType.custom,
          value: "gradient__cool-5"
        }
      },
      {
        id: "2",
        name: "UI设计",
        icon: "clover-fill",
        iconColor: {
          type: types_color.ColorType.custom,
          value: "gradient__cool-6"
        }
      },
      {
        id: "3",
        name: "UNIAPP前端",
        icon: "block-fill",
        iconColor: {
          type: types_color.ColorType.custom,
          value: "gradient__cool-7"
        }
      },
      {
        id: "4",
        name: "整套开发",
        icon: "moon-fill",
        iconColor: {
          type: types_color.ColorType.custom,
          value: "gradient__cool-8"
        }
      },
      {
        id: "5",
        name: "ICON图标",
        icon: "dragon",
        iconColor: {
          type: types_color.ColorType.custom,
          value: "gradient__cool-1"
        }
      },
      {
        id: "6",
        name: "Logo商标",
        icon: "gloves-fill",
        iconColor: {
          type: types_color.ColorType.custom,
          value: "gradient__cool-16"
        }
      },
      {
        id: "7",
        name: "名片设计",
        icon: "cube-fill",
        iconColor: {
          type: types_color.ColorType.custom,
          value: "gradient__cool-14"
        }
      },
      {
        id: "8",
        name: "其他业务",
        icon: "chain",
        iconColor: {
          type: types_color.ColorType.custom,
          value: "gradient__cool-2"
        }
      }
    ];
    projectCaseData.value = [
      {
        id: "1",
        title: "项目案例1",
        desc: "项目案例1描述",
        content: "",
        mainImage: "https://resource.tuniaokj.com/images/publicity/publicity-vue2.jpg",
        tags: [],
        hotCount: 0,
        replyCount: 0,
        likeCount: 0,
        viewCount: 0,
        shareCount: 0,
        viewUsersAvatar: [],
        recommend: false
      },
      {
        id: "2",
        title: "项目案例2",
        desc: "项目案例2描述",
        content: "",
        mainImage: "https://resource.tuniaokj.com/images/publicity/publicity-vue2.jpg",
        tags: [],
        hotCount: 0,
        replyCount: 0,
        likeCount: 0,
        viewCount: 0,
        shareCount: 0,
        viewUsersAvatar: [],
        recommend: false
      },
      {
        id: "3",
        title: "项目案例3",
        desc: "项目案例3描述",
        content: "",
        mainImage: "https://resource.tuniaokj.com/images/publicity/publicity-vue2.jpg",
        tags: [],
        hotCount: 0,
        replyCount: 0,
        likeCount: 0,
        viewCount: 0,
        shareCount: 0,
        viewUsersAvatar: [],
        recommend: false
      },
      {
        id: "4",
        title: "项目案例4",
        desc: "项目案例4描述",
        content: "",
        mainImage: "https://resource.tuniaokj.com/images/publicity/publicity-vue2.jpg",
        tags: [],
        hotCount: 0,
        replyCount: 0,
        likeCount: 0,
        viewCount: 0,
        shareCount: 0,
        viewUsersAvatar: [],
        recommend: false
      },
      {
        id: "5",
        title: "项目案例5",
        desc: "项目案例5描述",
        content: "",
        mainImage: "https://resource.tuniaokj.com/images/publicity/publicity-vue2.jpg",
        tags: [],
        hotCount: 0,
        replyCount: 0,
        likeCount: 0,
        viewCount: 0,
        shareCount: 0,
        viewUsersAvatar: [],
        recommend: false
      }
    ];
  };
  const navBusinessProcessDetail = () => {
    common_vendor.tnNavPage("/detail-page/business-process-detail/index");
  };
  const navCaseDetail = (id) => {
    common_vendor.tnNavPage(`/detail-page/article-detail/index?id=${id}&type=case`);
  };
  pages_index_composables_useSubPageProvide.useSubPageProvide(2, {
    onLoad
  });
  return {
    demoImages,
    businessCategoryData,
    projectCaseData,
    navBusinessProcessDetail,
    navCaseDetail
  };
};
exports.useSubPage = useSubPage;
