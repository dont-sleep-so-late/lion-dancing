<script lang="ts" setup>
import { useHonorCert } from './composables'

const { honorCertList } = useHonorCert()
</script>

<template>
  <TnNavbar
    fixed
    home-icon=""
    home-text=""
    back-icon="left-arrow"
    :bottom-shadow="false"
  >
    荣誉证书
  </TnNavbar>
  <view class="honor-list">
    <view
      v-for="(item, index) in honorCertList"
      :key="index"
      class="honor-item tn-shadow"
    >
      <view class="item-image">
        <view
          class="image"
          :style="{ backgroundImage: `url(${item.image})` }"
        />
      </view>
      <view class="item-title">{{ item.title }}</view>
      <view class="item-date">
        <view class="icon">
          <TnIcon name="honor-fill" />
        </view>
        <view class="value">{{ item.desc }}</view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
