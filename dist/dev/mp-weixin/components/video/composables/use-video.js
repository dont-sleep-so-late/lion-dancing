"use strict";
const common_vendor = require("../../../common/vendor.js");
const useVidio = () => {
  const video = common_vendor.ref([
    "//player.bilibili.com/player.html?aid=385636945&bvid=BV16Z4y1a7d4&cid=765567103&p=1"
  ]);
  return {
    video
  };
};
exports.useVidio = useVidio;
