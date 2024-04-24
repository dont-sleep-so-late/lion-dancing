"use strict";
const common_vendor = require("../../common/vendor.js");
const useScrollUpdownBottomContent = (type = "up", extraHeight = 0) => {
  const currentTop = common_vendor.ref(0);
  const lastTop = common_vendor.ref(0);
  const upScroll = common_vendor.computed(() => currentTop.value > lastTop.value);
  const style = common_vendor.computed(() => {
    const style2 = {};
    if (type === "up") {
      style2.transform = upScroll.value ? `translateY(calc(100% + ${extraHeight}px))` : "translateY(0)";
    } else if (type === "down") {
      style2.transform = upScroll.value ? "translateY(0)" : `translateY(calc(100% + ${extraHeight}px))`;
    }
    style2.transitionDuration = "0.25s";
    style2.transitionTimingFunction = "linear";
    style2.transitionProperty = "transform";
    return style2;
  });
  const scrollHandle = common_vendor.throttle(
    (top) => {
      lastTop.value = currentTop.value;
      currentTop.value = top;
    },
    50,
    {
      leading: false,
      trailing: true
    }
  );
  return {
    style,
    scrollHandle
  };
};
exports.useScrollUpdownBottomContent = useScrollUpdownBottomContent;
