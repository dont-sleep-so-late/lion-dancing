"use strict";
const common_vendor = require("../../../common/vendor.js");
const hooks_useScrollTransparentNavbar_index = require("../../../hooks/use-scroll-transparent-navbar/index.js");
const useBrandIntroduction = () => {
  const instance = common_vendor.getCurrentInstance();
  const swiperData = common_vendor.ref([
    {
      id: "1",
      name: "品牌介绍-1",
      image: "https://resource.tuniaokj.com/images/shop/cup1.jpg",
      title: "BUG再多",
      desc: "也别忘了",
      remark: "可以无限续杯"
    },
    {
      id: "2",
      name: "品牌介绍-2",
      image: "https://resource.tuniaokj.com/images/swiper/read.jpg",
      title: "图鸟南南",
      desc: "欢迎加入东东们",
      remark: "如果你也有不错的产品"
    },
    {
      id: "3",
      name: "品牌介绍-3",
      image: "https://resource.tuniaokj.com/images/swiper/swiper2.jpg",
      title: "图鸟西西",
      desc: "一起玩转图鸟UI",
      remark: "用最少的代码实现最骚的操作"
    },
    {
      id: "4",
      name: "品牌介绍-4",
      image: "https://resource.tuniaokj.com/images/swiper/swiper3.jpg",
      title: "图鸟北北",
      desc: "微信号 tnkewo",
      remark: "商业合作联系作者"
    },
    {
      id: "5",
      name: "品牌介绍-5",
      image: "https://resource.tuniaokj.com/images/swiper/job.jpg",
      title: "图鸟猪猪",
      desc: "努力成为大佬",
      remark: "一起加油吖"
    }
  ]);
  const brandIntroductionData = common_vendor.ref("");
  const authorInfo = common_vendor.ref({
    nickname: "图鸟凶姐",
    office: "高级UI设计师",
    company: "化州市图鸟科技有限公司",
    avatar: "https://resource.tuniaokj.com/images/xiongjie/x14.jpg",
    wechat: "tnkewo",
    wechatCode: "https://resource.tuniaokj.com/images/gitee_introduce_file/bottom.jpg"
  });
  const showAuthorCodeInfo = common_vendor.ref(false);
  const {
    triggerElementId,
    navbarOpacity,
    init: initTransparentScroll,
    updateTargetTriggerValue,
    opacityScrollHandle
  } = hooks_useScrollTransparentNavbar_index.useScrollTransparentNavbar(instance);
  const openAuthorCodeInfo = () => {
    showAuthorCodeInfo.value = true;
  };
  const copyAuthorWechat = () => {
    common_vendor.index.setClipboardData({
      data: authorInfo.value.wechat,
      success: () => {
        common_vendor.index.showToast({
          title: "复制成功",
          icon: "none"
        });
      }
    });
  };
  const previewAuthorWechatCode = () => {
    common_vendor.index.previewImage({
      urls: [authorInfo.value.wechatCode]
    });
  };
  const navbarInitFinishHandle = (info) => {
    updateTargetTriggerValue(info.height);
  };
  return {
    instance,
    triggerElementId,
    navbarOpacity,
    swiperData,
    brandIntroductionData,
    authorInfo,
    showAuthorCodeInfo,
    initTransparentScroll,
    opacityScrollHandle,
    navbarInitFinishHandle,
    openAuthorCodeInfo,
    copyAuthorWechat,
    previewAuthorWechatCode
  };
};
exports.useBrandIntroduction = useBrandIntroduction;
