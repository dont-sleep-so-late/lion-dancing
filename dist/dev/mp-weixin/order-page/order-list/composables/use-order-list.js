"use strict";
const common_vendor = require("../../../common/vendor.js");
const useOrderList = () => {
  const navbarHeight = common_vendor.ref(0);
  const currentActiveCategoryIndex = common_vendor.ref(0);
  const orderCategory = common_vendor.ref([
    { label: "全部", value: -1, count: 0 },
    { label: "待付款", value: 0, count: 0 },
    { label: "待收货", value: 2, count: 12 },
    { label: "已完成", value: 4, count: 0 }
  ]);
  const orderListData = common_vendor.ref([
    [],
    [],
    [],
    []
  ]);
  const generateOrderData = () => {
    orderListData.value.forEach((_, index) => {
      const data = Array.from({
        length: Math.floor(Math.random() * 20) + 1
      }).map(() => _generateOrder(orderCategory.value[index].value));
      orderListData.value[index] = data;
    });
  };
  const navBarInitFinishHandle = (info) => {
    navbarHeight.value = info.height;
  };
  const _generateOrder = (status = -1) => ({
    id: Math.random().toString(36).slice(2),
    orderId: Math.random().toString(36).slice(2),
    title: "图鸟官方设计 酷炫效果展示让用户眼前一亮的赶脚",
    mainImage: "https://resource.tuniaokj.com/images/publicity/publicity-vue2.jpg",
    price: Number.parseFloat((Math.random() * 4e3 + 500).toFixed(2)),
    status: status === -1 ? Math.floor(Math.random() * 5) : status,
    date: "2020-11-11 11:11:11"
  });
  return {
    navbarHeight,
    currentActiveCategoryIndex,
    orderCategory,
    orderListData,
    generateOrderData,
    navBarInitFinishHandle
  };
};
exports.useOrderList = useOrderList;
