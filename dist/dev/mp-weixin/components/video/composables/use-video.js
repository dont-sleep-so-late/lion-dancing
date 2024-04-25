"use strict";
const common_vendor = require("../../../common/vendor.js");
const useVidio = () => {
  const video = common_vendor.ref([
    "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/2minute-demo.mp4"
  ]);
  return {
    video
  };
};
exports.useVidio = useVidio;
