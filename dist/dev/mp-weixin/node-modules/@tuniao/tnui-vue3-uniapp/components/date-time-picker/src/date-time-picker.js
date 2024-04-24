"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
if (!Math) {
  TnPicker();
}
const TnPicker = () => "../../picker/src/picker.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "date-time-picker",
  props: common_vendor.dateTimePickerProps,
  emits: common_vendor.dateTimePickerEmits,
  setup(__props) {
    const props = __props;
    const {
      pickerRef,
      showPicker,
      pickerData,
      pickerSelectData,
      handlePickerCloseEvent,
      initDateTimePicker,
      pickerValueChangeEvent,
      handlePickerConfirmEvent,
      handlePickerCancelEvent
    } = common_vendor.useDateTimePicker(props);
    initDateTimePicker(props.initCurrentDateTime);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.sr(pickerRef, "0b8abf96-0", {
          "k": "pickerRef"
        }),
        b: common_vendor.o(common_vendor.unref(pickerValueChangeEvent)),
        c: common_vendor.o(common_vendor.unref(handlePickerConfirmEvent)),
        d: common_vendor.o(common_vendor.unref(handlePickerCancelEvent)),
        e: common_vendor.o(common_vendor.unref(handlePickerCloseEvent)),
        f: common_vendor.o(($event) => common_vendor.isRef(showPicker) ? showPicker.value = $event : null),
        g: common_vendor.p({
          ["model-value"]: common_vendor.unref(pickerSelectData),
          data: common_vendor.unref(pickerData),
          ["show-cancel"]: _ctx.showCancel,
          ["show-confirm"]: _ctx.showConfirm,
          mask: _ctx.mask,
          ["cancel-text"]: _ctx.cancelText,
          ["cancel-color"]: _ctx.cancelColor,
          ["confirm-text"]: _ctx.confirmText,
          ["confirm-color"]: _ctx.confirmColor,
          ["z-index"]: _ctx.zIndex,
          open: common_vendor.unref(showPicker)
        })
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/DIO/Desktop/大学/项目/狮业有成/demo-vue3/node_modules/@tuniao/tnui-vue3-uniapp/components/date-time-picker/src/date-time-picker.vue"]]);
wx.createComponent(Component);
