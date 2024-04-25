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
    const album = Array.from({ length: 10 }).map(() => ({
      id: utils_localMock.generateRandomNumber(1, 100).toString(),
      title: "相册",
      image: `https://resource.tuniaokj.com/images/album/xiong${Math.floor(Math.random() * 10) + 1}.jpg`
    }));
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
