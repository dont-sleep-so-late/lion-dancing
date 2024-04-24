"use strict";
const common_vendor = require("../../../common/vendor.js");
const useProblemDetail = () => {
  const problemDetail = common_vendor.ref();
  const getProblemDetail = (id) => {
    problemDetail.value = {
      id,
      title: "常见问题",
      content: "常见问题详情"
    };
  };
  return {
    problemDetail,
    getProblemDetail
  };
};
exports.useProblemDetail = useProblemDetail;
