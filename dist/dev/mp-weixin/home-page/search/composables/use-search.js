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
      title: "我们是冠军！",
      desc: "我们是冠军！我们是冠军！我们是冠军！",
      mainImage: "https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/lionDancing/20240501164311.png",
      tag: "醒狮",
      viewCount: 998,
      likeCount: 100
    },
    {
      id: "2",
      title: "一个拥有醒狮文化的网站",
      desc: "喜欢醒狮的不了解一下?",
      mainImage: "https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/lionDancing/shuzhibaijian%20(3).jpg",
      tag: "醒狮周边",
      viewCount: 467,
      likeCount: 239
    },
    {
      id: "3",
      title: "教你敲鼓！",
      desc: "咚咚咚！咚咚咚！咚咚咚！！！！",
      mainImage: "https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/lionDancing/20240501164300.png",
      tag: "醒狮",
      viewCount: 998,
      likeCount: 100
    },
    {
      id: "4",
      title: "醒狮背后训练秘密曝光！",
      desc: "醒狮的秘密训练！",
      mainImage: "https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/lionDancing/20240501163457.png",
      tag: "醒狮训练",
      viewCount: 467,
      likeCount: 239
    },
    {
      id: "5",
      title: "醒狮国潮",
      desc: "醒狮小狮子，不来买一个吗！",
      mainImage: "https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/lionDancing/baijian.png",
      tag: "醒狮周边",
      viewCount: 998,
      likeCount: 100
    },
    {
      id: "6",
      title: "精美醒狮手机壳",
      desc: "喜欢3D模型的不了解一下?",
      mainImage: "https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/lionDancing/shoujike.jpg",
      tag: "醒狮周边",
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
