"use strict";
const common_vendor = require("../../../common/vendor.js");
const useUserInfo = () => {
  const userInfo = common_vendor.ref({
    uid: "1",
    nickname: "不许凶我吖",
    username: "",
    avatar: "https://resource.tuniaokj.com/images/avatar/xiong.jpg",
    phone: "18888888888",
    sex: 2,
    desc: "静下心来，做好狮业有承",
    birthday: "1995-06-01",
    profession: "前端开发"
  });
  const showUpdateUserInfoPopup = common_vendor.ref(false);
  const showSexPicker = common_vendor.ref(false);
  const sexPickerData = [
    { label: "男", value: 1 },
    { label: "女", value: 2 },
    { label: "保密", value: 0 }
  ];
  const showBirthdayPicker = common_vendor.ref(false);
  const showProfessionPicker = common_vendor.ref(false);
  const professionPickerData = [
    "前端开发",
    "后端开发",
    "产品经理",
    "UI设计师",
    "运营"
  ];
  const openUpdateUserInfoPopup = () => {
    showUpdateUserInfoPopup.value = true;
  };
  const openSexPicker = () => {
    showSexPicker.value = true;
  };
  const openBirthdayPicker = () => {
    showBirthdayPicker.value = true;
  };
  const openProfessionPicker = () => {
    showProfessionPicker.value = true;
  };
  return {
    userInfo,
    showUpdateUserInfoPopup,
    showSexPicker,
    showBirthdayPicker,
    showProfessionPicker,
    sexPickerData,
    professionPickerData,
    openUpdateUserInfoPopup,
    openSexPicker,
    openBirthdayPicker,
    openProfessionPicker
  };
};
exports.useUserInfo = useUserInfo;
