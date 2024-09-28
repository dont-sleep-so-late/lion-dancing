"use strict";
const common_vendor = require("../../common/vendor.js");
const components_video_composables_useVideo = require("./composables/use-video.js");
if (!Math) {
  TnTitle();
}
const TnTitle = () => "../../node-modules/@tuniao/tnui-vue3-uniapp/components/title/src/title.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "video",
  setup(__props) {
    const { video } = components_video_composables_useVideo.useVidio();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "醒狮开泰：少年舞狮文化传承",
          mode: "vLine",
          ["assist-color"]: "tn-red"
        }),
        b: common_vendor.unref(video)
      };
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/DIO/Desktop/大学/项目/狮业有成/demo-vue3/src/components/video/video.vue"]]);
wx.createComponent(Component);
