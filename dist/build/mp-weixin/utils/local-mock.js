"use strict";exports.generateRandomAvatar=(a="default")=>"xiong"===a?`https://resource.tuniaokj.com/images/avatar/xiong/x${Math.floor(19*Math.random())+1}.jpg`:`https://resource.tuniaokj.com/images/avatar/default/${Math.floor(49*Math.random())+1}.png`,exports.generateRandomFloat=(a,t,o=2)=>Number.parseFloat((Math.random()*(t-a)+a).toFixed(o)),exports.generateRandomNickname=()=>{const a=["东东","小东","西西","小西","南南","小南","北北","小北","中中","小中"];return`狮业有承-${a[Math.floor(Math.random()*a.length)]}`},exports.generateRandomNumber=(a,t)=>Math.floor(Math.random()*(t-a+1))+a;
