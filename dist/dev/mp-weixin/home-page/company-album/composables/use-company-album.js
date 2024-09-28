"use strict";
const common_vendor = require("../../../common/vendor.js");
const utils_localMock = require("../../../utils/local-mock.js");
const useCompanyAlbum = () => {
  const albumInfo = common_vendor.ref({
    title: "精选图片",
    desc: "醒狮表演 & 志愿瞬间 & 课程培训 & 故事记录"
  });
  const albumList = common_vendor.ref([]);
  const generateAlbumData = () => {
    const album = [
      {
        id: utils_localMock.generateRandomNumber(1, 100).toString(),
        title: "相册",
        image: `https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/lionDancing/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240424160203.jpg`
      },
      {
        id: utils_localMock.generateRandomNumber(1, 100).toString(),
        title: "相册",
        image: `https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/lionDancing/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240424160201.jpg`
      },
      {
        id: utils_localMock.generateRandomNumber(1, 100).toString(),
        title: "相册",
        image: `https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/lionDancing/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240424160127.jpg`
      },
      {
        id: utils_localMock.generateRandomNumber(1, 100).toString(),
        title: "相册",
        image: `https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/lionDancing/1713929237490.jpg`
      },
      {
        id: utils_localMock.generateRandomNumber(1, 100).toString(),
        title: "相册",
        image: `https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/lionDancing/1713878439910.jpg`
      },
      {
        id: utils_localMock.generateRandomNumber(1, 100).toString(),
        title: "相册",
        image: `https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/lionDancing/1713878412366.jpg`
      },
      {
        id: utils_localMock.generateRandomNumber(1, 100).toString(),
        title: "相册",
        image: `https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/lionDancing/1713878406472.jpg`
      },
      {
        id: utils_localMock.generateRandomNumber(1, 100).toString(),
        title: "相册",
        image: `https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/lionDancing/1713878345680.jpg`
      }
    ];
    albumList.value = albumList.value.concat(album);
  };
  generateAlbumData();
  return {
    albumInfo,
    albumList,
    generateAlbumData
  };
};
exports.useCompanyAlbum = useCompanyAlbum;
