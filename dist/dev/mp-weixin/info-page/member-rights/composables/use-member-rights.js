"use strict";
const common_vendor = require("../../../common/vendor.js");
const useMemberRights = () => {
  const tuniaoProjects = common_vendor.ref([
    {
      name: "狮业有承UI",
      isVIP: false
    },
    {
      name: "狮业有承vue3",
      isVIP: false
    },
    {
      name: "圈子博客",
      isVIP: false
    },
    {
      name: "简约商圈",
      isVIP: false
    },
    {
      name: "凶姐壁纸",
      isVIP: false
    },
    {
      name: "名片资讯",
      isVIP: true
    },
    {
      name: "炫酷官网",
      isVIP: true
    }
  ]);
  return {
    tuniaoProjects
  };
};
exports.useMemberRights = useMemberRights;
