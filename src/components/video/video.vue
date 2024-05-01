<template>
  <view class="hot-case-container">
    <TnTitle title="醒狮开泰：少年舞狮文化传承" mode="vLine" assist-color="tn-red" />
    <view class="content-wrapper">
      <iframe frameborder="0" :src="video" allowFullScreen="true"></iframe>
    </view>
  </view>
</template>

<script lang="ts" setup>
  import { useVidio } from './composables'
  import TnTitle from '@tuniao/tnui-vue3-uniapp/components/title/src/title.vue'


  const { video } = useVidio()
</script>


<style lang="scss">
  @import './styles/index.scss';
</style>