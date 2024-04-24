"use strict";
const common_vendor = require("../../../common/vendor.js");
const useWinWin = () => {
  const slideImages = common_vendor.ref([
    "https://resource.tuniaokj.com/images/vue3-template/template2-website/web1.jpg",
    "https://resource.tuniaokj.com/images/vue3-template/template2-website/web2.jpg",
    "https://resource.tuniaokj.com/images/vue3-template/template2-website/web3.jpg",
    "https://resource.tuniaokj.com/images/vue3-template/template2-website/web4.jpg",
    "https://resource.tuniaokj.com/images/vue3-template/template2-website/web5.jpg",
    "https://resource.tuniaokj.com/images/vue3-template/template2-website/web6.jpg"
  ]);
  return {
    slideImages
  };
};
exports.useWinWin = useWinWin;
