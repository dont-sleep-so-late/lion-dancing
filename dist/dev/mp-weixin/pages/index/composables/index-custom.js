"use strict";
const common_vendor = require("../../../common/vendor.js");
const useIndexCustomStyle = (currentTabbarIndex) => {
  const pageContainerStyle = common_vendor.computed(() => {
    return (index) => {
      const style = {};
      style.display = index === currentTabbarIndex.value ? "block" : "none";
      return style;
    };
  });
  return {
    pageContainerStyle
  };
};
exports.useIndexCustomStyle = useIndexCustomStyle;
