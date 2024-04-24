"use strict";
const common_vendor = require("../../../common/vendor.js");
const utils_storage = require("../../../utils/storage.js");
const constants_index = require("../../../constants/index.js");
const useSearch = () => {
  const navbarHeight = common_vendor.ref(0);
  const searchValue = common_vendor.ref("");
  const historyList = common_vendor.ref([]);
  const searchResult = common_vendor.ref([
    {
      id: "1",
      title: "小程序官网源码，已上线",
      desc: "小程序前端源码，欢迎白嫖嗷嗷，可以的话给个 star 哈，还可以一件三连的哈哈哈哈哈",
      mainImage: "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
      tag: "小程序",
      viewCount: 998,
      likeCount: 100
    },
    {
      id: "2",
      title: "一个拥有大量3D模型的网站",
      desc: "喜欢3D模型的不了解一下?",
      mainImage: "https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg",
      tag: "模型",
      viewCount: 467,
      likeCount: 239
    },
    {
      id: "3",
      title: "小程序官网源码，已上线",
      desc: "小程序前端源码，欢迎白嫖嗷嗷，可以的话给个 star 哈，还可以一件三连的哈哈哈哈哈",
      mainImage: "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
      tag: "小程序",
      viewCount: 998,
      likeCount: 100
    },
    {
      id: "4",
      title: "一个拥有大量3D模型的网站",
      desc: "喜欢3D模型的不了解一下?",
      mainImage: "https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg",
      tag: "模型",
      viewCount: 467,
      likeCount: 239
    },
    {
      id: "5",
      title: "小程序官网源码，已上线",
      desc: "小程序前端源码，欢迎白嫖嗷嗷，可以的话给个 star 哈，还可以一件三连的哈哈哈哈哈",
      mainImage: "https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg",
      tag: "小程序",
      viewCount: 998,
      likeCount: 100
    },
    {
      id: "6",
      title: "一个拥有大量3D模型的网站",
      desc: "喜欢3D模型的不了解一下?",
      mainImage: "https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg",
      tag: "模型",
      viewCount: 467,
      likeCount: 239
    }
  ]);
  const searchConfirmHandle = () => {
    if (!searchValue.value)
      return;
    addHistory(searchValue.value);
  };
  const historyClickHandle = (value) => {
    searchValue.value = value;
  };
  const addHistory = (value) => {
    if (historyList.value.includes(value)) {
      return;
    }
    if (historyList.value.length >= 10) {
      historyList.value.pop();
    }
    historyList.value.unshift(value);
    utils_storage.storage.set(constants_index.SearchHistoryKey, historyList.value);
  };
  const clearHistory = () => {
    common_vendor.index.showModal({
      title: "提示",
      content: "确认清除搜索历史记录吗?",
      showCancel: true,
      success: ({ confirm }) => {
        if (confirm) {
          historyList.value = [];
          utils_storage.storage.remove(constants_index.SearchHistoryKey);
        }
      }
    });
  };
  const navbarInitFinishHandle = (info) => {
    navbarHeight.value = info.height;
  };
  common_vendor.onLoad(() => {
    const historyData = utils_storage.storage.get(constants_index.SearchHistoryKey);
    if (historyData) {
      historyList.value = historyData;
    }
  });
  return {
    searchValue,
    navbarHeight,
    historyList,
    searchResult,
    navbarInitFinishHandle,
    searchConfirmHandle,
    historyClickHandle,
    clearHistory
  };
};
exports.useSearch = useSearch;
