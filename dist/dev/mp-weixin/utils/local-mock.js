"use strict";
const generateRandomNickname = () => {
  const nicknames = [
    "东东",
    "小东",
    "西西",
    "小西",
    "南南",
    "小南",
    "北北",
    "小北",
    "中中",
    "小中"
  ];
  return `狮业有承-${nicknames[Math.floor(Math.random() * nicknames.length)]}`;
};
const generateRandomAvatar = (type = "default") => {
  switch (type) {
    case "xiong":
      return `https://resource.tuniaokj.com/images/avatar/xiong/x${Math.floor(Math.random() * 19) + 1}.jpg`;
    default:
      return `https://resource.tuniaokj.com/images/avatar/default/${Math.floor(Math.random() * 49) + 1}.png`;
  }
};
const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const generateRandomFloat = (min, max, decimal = 2) => {
  return Number.parseFloat((Math.random() * (max - min) + min).toFixed(decimal));
};
exports.generateRandomAvatar = generateRandomAvatar;
exports.generateRandomFloat = generateRandomFloat;
exports.generateRandomNickname = generateRandomNickname;
exports.generateRandomNumber = generateRandomNumber;
