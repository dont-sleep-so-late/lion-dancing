"use strict";
const OrderStatusMap = {
  0: { label: "待付款", color: "tn-gray_text" },
  1: { label: "待发货", color: "tn-gray_text" },
  2: { label: "待收货", color: "tn-gray_text" },
  3: { label: "待评价", color: "tn-gray_text" },
  4: { label: "已完成", color: "tn-gray_text" },
  5: { label: "已取消", color: "tn-gray_text" }
};
exports.OrderStatusMap = OrderStatusMap;
