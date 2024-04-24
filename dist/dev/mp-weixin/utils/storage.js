"use strict";
const common_vendor = require("../common/vendor.js");
const storage = {
  /**
   * 将数据保存到本地存储中
   * @param key 保存数据的键
   * @param value 保存的值
   */
  set(key, value) {
    common_vendor.index.setStorageSync(key, value);
  },
  /**
   * 从本地存储中获取数据
   * @param key 获取数据的键
   * @returns 获取到的值
   */
  get(key) {
    try {
      const value = common_vendor.index.getStorageSync(key);
      if (!value)
        return;
      return value;
    } catch (e) {
      console.error("获取数据缓存失败", e);
      return;
    }
  },
  /**
   * 从本地存储中移除数据
   * @param key 移除数据的键
   */
  remove(key) {
    common_vendor.index.removeStorageSync(key);
  },
  /**
   * 清空本地存储
   */
  clear() {
    common_vendor.index.clearStorageSync();
  }
};
exports.storage = storage;
