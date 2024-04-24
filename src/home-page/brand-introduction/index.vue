<script lang="ts" setup>
import { onPageScroll, onReady } from '@dcloudio/uni-app'
import TnSwiper from '@tuniao/tnui-vue3-uniapp/components/swiper/src/swiper.vue'
import TnAvatar from '@tuniao/tnui-vue3-uniapp/components/avatar/src/avatar.vue'
import TnPopup from '@tuniao/tnui-vue3-uniapp/components/popup/src/popup.vue'
import { useBrandIntroduction } from './composables'
import { useScrollUpdownBottomContent } from '@/hooks'

const {
  instance,
  triggerElementId,
  navbarOpacity,
  swiperData,
  brandIntroductionData,
  authorInfo,
  showAuthorCodeInfo,
  initTransparentScroll,
  navbarInitFinishHandle,
  opacityScrollHandle,
  openAuthorCodeInfo,
  previewAuthorWechatCode,
  copyAuthorWechat,
} = useBrandIntroduction()

const { style: authInfoScrollStyle, scrollHandle: authInfoScrollHandle } =
  useScrollUpdownBottomContent('up', 80)

onReady(() => {
  initTransparentScroll()
})
onPageScroll((e) => {
  opacityScrollHandle(e.scrollTop)
  authInfoScrollHandle(instance, e.scrollTop)
})
</script>

<template>
  <TnNavbar
    fixed
    :bg-color="`rgba(255, 255, 255, ${navbarOpacity})`"
    :bottom-shadow="false"
    :placeholder="false"
    @init-finish="navbarInitFinishHandle"
  />
  <!-- 顶部轮播 -->
  <view class="swiper">
    <TnSwiper :data="swiperData" loop autoplay>
      <template #default="{ data, active }">
        <view class="swiper-item" :class="[{ active }]">
          <image class="image" :src="data.image" mode="aspectFill" />
          <view class="item-content">
            <view class="title">{{ data.title }}</view>
            <view class="desc">{{ data.desc }}</view>
            <view class="remark">{{ data.remark }}</view>
          </view>
        </view>
      </template>
    </TnSwiper>
  </view>
  <view :id="triggerElementId" class="introduction-page">
    <!-- 容器标题 -->
    <view class="title-container">
      <view class="left">
        <view class="title">让我们一同探索未知</view>
        <view class="desc">一同前往无限可能</view>
      </view>
      <view class="right">
        <view class="icon">
          <TnIcon name="qr-code" />
        </view>
        <view class="text">探 索</view>
      </view>
    </view>

    <!-- 富文本内容 -->
    <view class="introduction-content tn-gradient-bg__blue-light">
      {{ brandIntroductionData }}
    </view>
  </view>

  <!-- 作者信息 -->
  <view class="author-info" :style="{ ...authInfoScrollStyle }">
    <view class="left">
      <view class="avatar">
        <TnAvatar :url="authorInfo.avatar" size="80" />
      </view>
      <view class="info-data">
        <view class="tn-flex items-end">
          <view class="nickname">{{ authorInfo.nickname }}</view>
          <view class="office">{{ authorInfo.office }}</view>
        </view>
        <view class="company">{{ authorInfo.company }}</view>
      </view>
    </view>
    <view class="right" @tap.stop="openAuthorCodeInfo">
      <view class="icon">
        <TnIcon name="wechat-fill" color="#28b83e" />
      </view>
      <view class="text">作者微信</view>
    </view>
  </view>

  <!-- 作者信息弹框 -->
  <TnPopup v-model="showAuthorCodeInfo">
    <view class="author-code-info">
      <view class="qr-code" @tap.stop="previewAuthorWechatCode">
        <image
          class="tn-image"
          :src="authorInfo.wechatCode"
          mode="aspectFill"
        />
      </view>
      <view class="wechat" @tap.stop="copyAuthorWechat">
        作者微信: <text>{{ authorInfo.wechat }}</text>
        <TnIcon name="copy" color="tn-blue-light" />
      </view>
      <view class="tips">点击上图，可识别微信二维码</view>
    </view>
  </TnPopup>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
