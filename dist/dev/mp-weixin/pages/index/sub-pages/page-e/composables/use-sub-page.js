"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const pages_index_composables_useSubPageProvide = require("../../../composables/use-sub-page-provide.js");
const utils_localMock = require("../../../../../utils/local-mock.js");
const useSubPage = () => {
  const { navBarInfo } = common_vendor.useUniAppSystemRectInfo();
  const userInfo = common_vendor.ref();
  const loginHandle = () => {
    common_vendor.index.showLoading({
      title: "登录中...",
      mask: true
    });
    setTimeout(() => {
      common_vendor.index.hideLoading();
      userInfo.value = {
        uid: utils_localMock.generateRandomNumber(1e5, 999999).toString(),
        nickname: "你别睡这么晚",
        username: "",
        avatar: "https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/lionDancing/shuzhibaijian%20(3).jpg",
        sex: 0,
        phone: "",
        desc: "",
        birthday: "",
        profession: ""
      };
    }, 1500);
  };
  const navUserInfoPage = () => {
    common_vendor.tnNavPage("/info-page/user-info/index");
  };
  const navCommonProblemPage = () => {
    common_vendor.tnNavPage("/info-page/common-problem/index");
  };
  const navMemberRightsPage = () => {
    common_vendor.tnNavPage("/info-page/member-rights/index");
  };
  const navOrderListPage = () => {
    common_vendor.tnNavPage("/order-page/order-list/index");
  };
  pages_index_composables_useSubPageProvide.useSubPageProvide(4);
  return {
    navBarInfo,
    userInfo,
    loginHandle,
    navUserInfoPage,
    navCommonProblemPage,
    navMemberRightsPage,
    navOrderListPage
  };
};
exports.useSubPage = useSubPage;
