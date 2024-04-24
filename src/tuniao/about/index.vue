<script lang="ts" setup>
import TnSuspendButton from 'tnuiv3p-tn-suspend-button/index.vue'
</script>

<template>
  <TnNavbar
    bg-color="transparent"
    fixed
    :bottom-shadow="false"
    :placeholder="false"
  />
  <view class="about-page">
    <view
      class="about-image"
      :style="{
        backgroundImage:
          'url(https://resource.tuniaokj.com/images/about/about-new.png)',
      }"
    />
    <TnSuspendButton bg-color="tn-gradient__orange">
      <TnButton only-button open-type="contact">
        <TnIcon name="wechat-fill" color="#fff" size="70" />
      </TnButton>
    </TnSuspendButton>
  </view>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
