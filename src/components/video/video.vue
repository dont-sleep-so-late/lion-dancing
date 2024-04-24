<template>
  <view class="hot-case-container">
    <Title title="最新资讯" />
    <view class="content-wrapper">
      <video class="video" :src="video" id="video">
      </video>
    </view>
  </view>
</template>

<script lang="ts" setup>
  import { useVidio } from './composables'
  import Title from '@/components/title/index.vue'

  const { video } = useVidio()
</script>


<style lang="scss">
  @import './styles/index.scss';
</style>