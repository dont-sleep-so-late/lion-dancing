"use strict";
const common_vendor = require("../../common/vendor.js");
const infoPage_userInfo_composables_useUserInfo = require("./composables/use-user-info.js");
const types_store_user = require("../../types/store/user.js");
if (!Array) {
  const _component_TnNavbar = common_vendor.resolveComponent("TnNavbar");
  const _component_TnIcon = common_vendor.resolveComponent("TnIcon");
  (_component_TnNavbar + _component_TnIcon)();
}
if (!Math) {
  (TnUpdateUserInfoPopup + TnPicker + TnDateTimePicker)();
}
const TnPicker = () => "../../node-modules/@tuniao/tnui-vue3-uniapp/components/picker/src/picker.js";
const TnDateTimePicker = () => "../../node-modules/@tuniao/tnui-vue3-uniapp/components/date-time-picker/src/date-time-picker.js";
const TnUpdateUserInfoPopup = () => "../../node-modules/tnuiv3p-tn-update-user-info-popup/index.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  setup(__props) {
    const {
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
    } = infoPage_userInfo_composables_useUserInfo.useUserInfo();
    return (_ctx, _cache) => {
      var _a;
      return {
        a: common_vendor.p({
          fixed: true,
          ["bottom-shadow"]: false
        }),
        b: common_vendor.t(common_vendor.unref(userInfo).nickname),
        c: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(openUpdateUserInfoPopup) && common_vendor.unref(openUpdateUserInfoPopup)(...args)
        ),
        d: common_vendor.unref(userInfo).desc,
        e: common_vendor.unref(userInfo).avatar,
        f: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(openUpdateUserInfoPopup) && common_vendor.unref(openUpdateUserInfoPopup)(...args)
        ),
        g: common_vendor.t(common_vendor.unref(userInfo).phone || "未绑定"),
        h: common_vendor.p({
          name: "right"
        }),
        i: common_vendor.unref(userInfo).username,
        j: common_vendor.t(((_a = common_vendor.unref(types_store_user.UserSex)) == null ? void 0 : _a[common_vendor.unref(userInfo).sex]) || "请选择性别"),
        k: common_vendor.p({
          name: "right"
        }),
        l: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(openSexPicker) && common_vendor.unref(openSexPicker)(...args)
        ),
        m: common_vendor.t(common_vendor.unref(userInfo).birthday || "请选择生日"),
        n: common_vendor.p({
          name: "right"
        }),
        o: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(openBirthdayPicker) && common_vendor.unref(openBirthdayPicker)(...args)
        ),
        p: common_vendor.t(common_vendor.unref(userInfo).profession || "请选择职业"),
        q: common_vendor.p({
          name: "right"
        }),
        r: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(openProfessionPicker) && common_vendor.unref(openProfessionPicker)(...args)
        ),
        s: common_vendor.o(($event) => common_vendor.isRef(showUpdateUserInfoPopup) ? showUpdateUserInfoPopup.value = $event : null),
        t: common_vendor.o(($event) => common_vendor.unref(userInfo).avatar = $event),
        v: common_vendor.o(($event) => common_vendor.unref(userInfo).nickname = $event),
        w: common_vendor.p({
          show: common_vendor.unref(showUpdateUserInfoPopup),
          avatar: common_vendor.unref(userInfo).avatar,
          nickname: common_vendor.unref(userInfo).nickname
        }),
        x: common_vendor.o(($event) => common_vendor.isRef(showSexPicker) ? showSexPicker.value = $event : null),
        y: common_vendor.o(($event) => common_vendor.unref(userInfo).sex = $event),
        z: common_vendor.p({
          data: common_vendor.unref(sexPickerData),
          open: common_vendor.unref(showSexPicker),
          modelValue: common_vendor.unref(userInfo).sex
        }),
        A: common_vendor.o(($event) => common_vendor.isRef(showBirthdayPicker) ? showBirthdayPicker.value = $event : null),
        B: common_vendor.o(($event) => common_vendor.unref(userInfo).birthday = $event),
        C: common_vendor.p({
          type: "date",
          format: "YYYY-MM-DD",
          ["min-time"]: "1900/01/01",
          open: common_vendor.unref(showBirthdayPicker),
          modelValue: common_vendor.unref(userInfo).birthday
        }),
        D: common_vendor.o(($event) => common_vendor.isRef(showProfessionPicker) ? showProfessionPicker.value = $event : null),
        E: common_vendor.o(($event) => common_vendor.unref(userInfo).profession = $event),
        F: common_vendor.p({
          data: common_vendor.unref(professionPickerData),
          open: common_vendor.unref(showProfessionPicker),
          modelValue: common_vendor.unref(userInfo).profession
        })
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9d27ea82"], ["__file", "C:/Users/DIO/Desktop/大学/项目/狮业有成/demo-vue3/src/info-page/user-info/index.vue"]]);
wx.createPage(MiniProgramPage);
