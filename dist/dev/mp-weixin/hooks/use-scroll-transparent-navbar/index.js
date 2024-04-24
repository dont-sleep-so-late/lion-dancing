"use strict";
const common_vendor = require("../../common/vendor.js");
const useScrollTransparentNavbar = (instance) => {
  const { getSelectorNodeInfo } = common_vendor.useSelectorQuery(instance);
  const navbarOpacity = common_vendor.ref(0);
  const triggerElementId = `tse-${common_vendor.generateId()}`;
  let targetTriggerValue = 100;
  const triggerTop = common_vendor.ref(0);
  let initCount = 0;
  const _getTriggerElementRectInfo = async () => {
    try {
      const res = await getSelectorNodeInfo(`#${triggerElementId}`);
      if (!res.top) {
        throw new Error("获取触发元素容器信息top信息失败");
      }
      initCount = 0;
      triggerTop.value = res.top;
    } catch (err) {
      if (initCount > 10) {
        initCount = 0;
        common_vendor.debugWarn(
          "useScrollTransparentNavbar",
          `获取触发元素容器信息失败: ${err}`
        );
        return;
      }
      initCount++;
      setTimeout(() => {
        _getTriggerElementRectInfo();
      }, 150);
    }
  };
  const init = () => {
    common_vendor.nextTick$1(() => {
      _getTriggerElementRectInfo();
    });
  };
  const updateTargetTriggerValue = (value) => {
    targetTriggerValue = value;
  };
  const opacityScrollHandle = (top) => {
    if (!triggerTop.value)
      return;
    const triggerDistance = triggerTop.value - targetTriggerValue;
    let opacity = top / triggerDistance;
    if (opacity > 1.5)
      return;
    if (opacity < 0.1)
      opacity = 0;
    if (top > triggerDistance)
      opacity = 1;
    navbarOpacity.value = opacity;
  };
  return {
    navbarOpacity,
    triggerElementId,
    triggerTop,
    init,
    updateTargetTriggerValue,
    opacityScrollHandle
  };
};
exports.useScrollTransparentNavbar = useScrollTransparentNavbar;
