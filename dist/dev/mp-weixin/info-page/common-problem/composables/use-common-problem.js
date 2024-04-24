"use strict";
const common_vendor = require("../../../common/vendor.js");
const useCommonProblem = () => {
  const commonProblemData = common_vendor.ref([
    {
      id: "1",
      title: "关于账户余额",
      content: ""
    },
    {
      id: "2",
      title: "找回密码无法收到验证码",
      content: ""
    },
    {
      id: "3",
      title: "账号无法退出切换账号",
      content: ""
    },
    {
      id: "4",
      title: "无法授权微信登录",
      content: ""
    },
    {
      id: "5",
      title: "我的账号登录上别人的账号了",
      content: ""
    },
    {
      id: "6",
      title: "手机登录无法收到验证码",
      content: ""
    }
  ]);
  const loginProblemData = common_vendor.ref([
    {
      id: "1",
      title: "关于账户余额",
      content: ""
    },
    {
      id: "2",
      title: "找回密码无法收到验证码",
      content: ""
    },
    {
      id: "3",
      title: "账号无法退出切换账号",
      content: ""
    },
    {
      id: "4",
      title: "无法授权微信登录",
      content: ""
    },
    {
      id: "5",
      title: "我的账号登录上别人的账号了",
      content: ""
    },
    {
      id: "6",
      title: "手机登录无法收到验证码",
      content: ""
    }
  ]);
  const navProblemDetail = (id) => {
    common_vendor.tnNavPage(`/detail-page/problem-detail/index?id=${id}`);
  };
  return {
    commonProblemData,
    loginProblemData,
    navProblemDetail
  };
};
exports.useCommonProblem = useCommonProblem;
