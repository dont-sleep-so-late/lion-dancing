<script lang="ts" setup>
import { onReachBottom } from '@dcloudio/uni-app'
import TnWaterFall from '@tuniao/tnui-vue3-uniapp/components/water-fall/src/water-fall.vue'
import TnLazyLoad from '@tuniao/tnui-vue3-uniapp/components/lazy-load/src/lazy-load.vue'
import { useCompanyAlbum } from './composables'

const { albumInfo, albumList, generateAlbumData } = useCompanyAlbum()

onReachBottom(() => {
  generateAlbumData()
})
</script>

<template>
  <TnNavbar
    fixed
    bg-color="transparent"
    :bottom-shadow="false"
    :placeholder="false"
  />
  <!-- 相册介绍 -->
  <view class="album-introduction">
    <view class="introduction-info">
      <view class="info-content">
        <view class="title">{{ albumInfo.title }}</view>
        <view class="desc">{{ albumInfo.desc }}</view>
      </view>
      <view class="tips-icon">
        <TnIcon name="tip-fill" />
      </view>
    </view>
  </view>

  <!-- 相册列表 -->
  <view class="company-album">
    <TnWaterFall :data="albumList">
      <template #left="{ item }">
        <view class="album-item">
          <TnLazyLoad :src="item.image" mode="widthFix" />
        </view>
      </template>
      <template #right="{ item }">
        <view class="album-item">
          <TnLazyLoad :src="item.image" mode="widthFix" />
        </view>
      </template>
    </TnWaterFall>
  </view>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
