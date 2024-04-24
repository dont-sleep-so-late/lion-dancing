"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Math) {
  (TnIcon + TnLazyLoad + TnPhotoAlbum + TnAvatar + TnAvatarGroup)();
}
const TnIcon = () => "../@tuniao/tnui-vue3-uniapp/components/icon/src/icon.js";
const TnPhotoAlbum = () => "../@tuniao/tnui-vue3-uniapp/components/photo-album/src/photo-album.js";
const TnAvatar = () => "../@tuniao/tnui-vue3-uniapp/components/avatar/src/avatar.js";
const TnAvatarGroup = () => "../@tuniao/tnui-vue3-uniapp/components/avatar/src/avatar-group.js";
const TnLazyLoad = () => "../@tuniao/tnui-vue3-uniapp/components/lazy-load/src/lazy-load.js";
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "index",
  props: common_vendor.graphicCardProps,
  emits: common_vendor.graphicCardEmits,
  setup(__props, { emit: emits }) {
    const props = __props;
    const {
      viewUserAvatars,
      viewUserCount,
      imageCount,
      previewImageHandle,
      cardClickEvent,
      handleAvatarClick,
      handleMoreClick,
      handleCommentClick,
      handleHotClick,
      handleLikeClick
    } = common_vendor.useGraphicCard(props, emits);
    const {
      ns,
      tagClass,
      tagStyle,
      hotClass,
      hotStyle,
      commentClass,
      commentStyle,
      likeClass,
      likeStyle
    } = common_vendor.useGraphicCardCustomStyle(props);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: _ctx.avatar,
        b: common_vendor.n(common_vendor.unref(ns).e("brief-info__avatar")),
        c: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(handleAvatarClick) && common_vendor.unref(handleAvatarClick)(...args)
        ),
        d: common_vendor.t(_ctx.title),
        e: _ctx.description
      }, _ctx.description ? {
        f: common_vendor.t(_ctx.description)
      } : {}, {
        g: common_vendor.n(common_vendor.unref(ns).e("brief-info__data")),
        h: common_vendor.n(common_vendor.unref(ns).e("brief-info__content")),
        i: _ctx.showMore
      }, _ctx.showMore ? {
        j: common_vendor.p({
          name: "more-vertical"
        }),
        k: common_vendor.n(common_vendor.unref(ns).em("brief-info__operation", "more")),
        l: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(handleMoreClick) && common_vendor.unref(handleMoreClick)(...args)
        ),
        m: common_vendor.n(common_vendor.unref(ns).e("brief-info__operation"))
      } : {}, {
        n: common_vendor.n(common_vendor.unref(ns).e("brief-info")),
        o: common_vendor.f(_ctx.tags, (tagItem, tagIndex, i0) => {
          return {
            a: "20d23020-1-" + i0,
            b: common_vendor.t(tagItem),
            c: tagIndex
          };
        }),
        p: common_vendor.p({
          name: "topics-fill"
        }),
        q: common_vendor.n(common_vendor.unref(tagClass)),
        r: common_vendor.s(common_vendor.unref(tagStyle)),
        s: common_vendor.n(common_vendor.unref(ns).e("content__tags")),
        t: common_vendor.t(_ctx.content),
        v: common_vendor.n(common_vendor.unref(ns).e("content__data")),
        w: common_vendor.n(common_vendor.unref(ns).e("content")),
        x: !!common_vendor.unref(imageCount)
      }, !!common_vendor.unref(imageCount) ? common_vendor.e({
        y: common_vendor.unref(imageCount) === 1
      }, common_vendor.unref(imageCount) === 1 ? {
        z: common_vendor.p({
          src: _ctx.images[0]
        }),
        A: common_vendor.n(common_vendor.unref(ns).em("images", "item")),
        B: common_vendor.n(common_vendor.unref(ns).is("one")),
        C: common_vendor.o(($event) => common_vendor.unref(previewImageHandle)(0))
      } : {}, {
        D: common_vendor.unref(imageCount) === 2
      }, common_vendor.unref(imageCount) === 2 ? {
        E: common_vendor.p({
          data: _ctx.images,
          column: 2
        }),
        F: common_vendor.n(common_vendor.unref(ns).em("images", "item")),
        G: common_vendor.n(common_vendor.unref(ns).is("two"))
      } : {}, {
        H: common_vendor.unref(imageCount) === 3
      }, common_vendor.unref(imageCount) === 3 ? {
        I: common_vendor.p({
          src: _ctx.images[0]
        }),
        J: common_vendor.o(($event) => common_vendor.unref(previewImageHandle)(0)),
        K: common_vendor.p({
          src: _ctx.images[1]
        }),
        L: common_vendor.o(($event) => common_vendor.unref(previewImageHandle)(1)),
        M: common_vendor.p({
          src: _ctx.images[2]
        }),
        N: common_vendor.o(($event) => common_vendor.unref(previewImageHandle)(2)),
        O: common_vendor.n(common_vendor.unref(ns).em("images", "item")),
        P: common_vendor.n(common_vendor.unref(ns).is("three"))
      } : {}, {
        Q: common_vendor.unref(imageCount) === 4
      }, common_vendor.unref(imageCount) === 4 ? {
        R: common_vendor.p({
          data: _ctx.images,
          column: 2
        }),
        S: common_vendor.n(common_vendor.unref(ns).em("images", "item")),
        T: common_vendor.n(common_vendor.unref(ns).is("four"))
      } : {}, {
        U: common_vendor.unref(imageCount) >= 5
      }, common_vendor.unref(imageCount) >= 5 ? {
        V: common_vendor.p({
          data: _ctx.images
        })
      } : {}, {
        W: common_vendor.n(common_vendor.unref(ns).e("images"))
      }) : {}, {
        X: common_vendor.n(common_vendor.unref(ns).e("container")),
        Y: _ctx.showHot
      }, _ctx.showHot ? {
        Z: common_vendor.p({
          name: _ctx.activeHot ? _ctx.activeHotIcon : _ctx.hotIcon
        }),
        aa: common_vendor.t(_ctx.hotCount),
        ab: common_vendor.n(common_vendor.unref(hotClass)),
        ac: common_vendor.s(common_vendor.unref(hotStyle)),
        ad: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(handleHotClick) && common_vendor.unref(handleHotClick)(...args)
        )
      } : {}, {
        ae: _ctx.showComment
      }, _ctx.showComment ? {
        af: common_vendor.p({
          name: _ctx.activeComment ? _ctx.activeCommentIcon : _ctx.commentIcon
        }),
        ag: common_vendor.t(_ctx.commentCount),
        ah: common_vendor.n(common_vendor.unref(commentClass)),
        ai: common_vendor.s(common_vendor.unref(commentStyle)),
        aj: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(handleCommentClick) && common_vendor.unref(handleCommentClick)(...args)
        )
      } : {}, {
        ak: _ctx.showLike
      }, _ctx.showLike ? {
        al: common_vendor.p({
          name: _ctx.activeLike ? _ctx.activeLikeIcon : _ctx.likeIcon
        }),
        am: common_vendor.t(_ctx.likeCount),
        an: common_vendor.n(common_vendor.unref(likeClass)),
        ao: common_vendor.s(common_vendor.unref(likeStyle)),
        ap: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(handleLikeClick) && common_vendor.unref(handleLikeClick)(...args)
        )
      } : {}, {
        aq: common_vendor.n(common_vendor.unref(ns).e("bottom-info__left")),
        ar: _ctx.showViewUser && common_vendor.unref(viewUserAvatars).length || _ctx.$slots.bottomRight
      }, _ctx.showViewUser && common_vendor.unref(viewUserAvatars).length || _ctx.$slots.bottomRight ? {
        as: common_vendor.f(common_vendor.unref(viewUserAvatars), (viewUserAvatar, viewUserIndex, i0) => {
          return {
            a: viewUserIndex,
            b: "20d23020-13-" + i0 + ",20d23020-12",
            c: common_vendor.p({
              url: viewUserAvatar
            })
          };
        }),
        at: common_vendor.p({
          border: true,
          size: "sm"
        }),
        av: common_vendor.n(common_vendor.unref(ns).e("view-user-list")),
        aw: common_vendor.t(_ctx.viewCount !== void 0 ? _ctx.viewCount : common_vendor.unref(viewUserCount)),
        ax: common_vendor.n(common_vendor.unref(ns).e("view-user-count")),
        ay: common_vendor.n(common_vendor.unref(ns).e("bottom-info__right"))
      } : {}, {
        az: common_vendor.n(common_vendor.unref(ns).e("bottom-info")),
        aA: common_vendor.n(common_vendor.unref(ns).is("no-content", !!_ctx.$slots.bottomRight)),
        aB: common_vendor.n(common_vendor.unref(ns).b()),
        aC: common_vendor.o(
          //@ts-ignore
          (...args) => common_vendor.unref(cardClickEvent) && common_vendor.unref(cardClickEvent)(...args)
        )
      });
    };
  }
});
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-20d23020"], ["__file", "C:/Users/DIO/Desktop/大学/项目/狮业有成/demo-vue3/node_modules/tnuiv3p-tn-graphic-card/index.vue"]]);
wx.createComponent(Component);
