"use strict";
const common_vendor = require("../../../common/vendor.js");
const pages_index_tokens_indexPage = require("../tokens/index-page.js");
const useIndex = () => {
  const tabbarData = [
    {
      text: "首页",
      icon: "home-in",
      activeIcon: "home-in-fill"
    },
    {
      text: "产品",
      icon: "iot",
      activeIcon: "iot-fill"
    },
    {
      text: "AI数字人导游",
      icon: "emoji-good",
      activeIcon: "emoji-good-fill"
    },
    {
      text: "资讯",
      icon: "topics",
      activeIcon: "topics-fill"
    },
    {
      text: "狮业有承",
      icon: "my-circle",
      activeIcon: "my-circle-fill"
    }
  ];
  const currentTabbarIndex = common_vendor.ref(-1);
  const renderPageStatus = common_vendor.ref(
    Array.from({ length: tabbarData.length }).map(() => false)
  );
  const _findPageByIndex = (index) => {
    return items.value.find((item) => item.index === index);
  };
  const tabbarChangeHandle = (index) => {
    if (typeof index === "string") {
      index = Number.parseInt(index);
    }
    if (!renderPageStatus.value[index]) {
      renderPageStatus.value[index] = true;
      common_vendor.nextTick$1(() => {
        var _a, _b;
        (_b = (_a = _findPageByIndex(index)) == null ? void 0 : _a.onLoad) == null ? void 0 : _b.call(_a);
      });
    }
    common_vendor.nextTick$1(() => {
      var _a, _b;
      (_b = (_a = _findPageByIndex(index)) == null ? void 0 : _a.onShow) == null ? void 0 : _b.call(_a);
    });
  };
  const scrollViewScrollHandle = (event) => {
    var _a, _b;
    const { scrollTop, scrollLeft } = event.detail;
    (_b = (_a = _findPageByIndex(currentTabbarIndex.value)) == null ? void 0 : _a.onScroll) == null ? void 0 : _b.call(_a, {
      top: scrollTop,
      left: scrollLeft
    });
  };
  const {
    children: items,
    addChild: addItem,
    removeChild: removeItem
  } = common_vendor.useOrderedChildren();
  common_vendor.provide(
    pages_index_tokens_indexPage.indexPageContextKey,
    common_vendor.reactive({
      items,
      addItem,
      removeItem
    })
  );
  return {
    tabbarData,
    currentTabbarIndex,
    renderPageStatus,
    tabbarChangeHandle,
    scrollViewScrollHandle
  };
};
exports.useIndex = useIndex;
