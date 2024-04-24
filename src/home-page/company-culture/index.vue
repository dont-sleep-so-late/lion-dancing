<script lang="ts" setup>
import TnSwiper from '@tuniao/tnui-vue3-uniapp/components/swiper/src/swiper.vue'
import { useCompanyCulture } from './composables'

const { swiperData } = useCompanyCulture()
</script>

<template>
  <TnNavbar
    fixed
    bg-color="transparent"
    :bottom-shadow="false"
    :placeholder="false"
  />
  <view class="swiper">
    <TnSwiper :data="swiperData" indicator indicator-position="right-bottom">
      <template #default="{ data, active }">
        <view
          class="swiper-item"
          :class="[{ active }]"
          :style="{ backgroundImage: `url(${data.image})` }"
        >
          <view class="swiper-data">
            <view class="assist-image">
              <image class="tn-image" :src="data.secondImage" mode="widthFix" />
            </view>
            <view class="swiper-info">
              <view class="title">{{ data.title }}</view>
              <view class="desc">{{ data.desc }}</view>
            </view>
          </view>
        </view>
      </template>
    </TnSwiper>
  </view>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
