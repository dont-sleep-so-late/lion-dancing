<script lang="ts" setup></script>

<template>
  <TnNavbar fixed bg-color="transparent" :bottom-shadow="false" :placeholder="false" />
  <!-- 地图 -->
  <view class="map">
    <map :longitude="110.424133" :latitude="22.024526" :enable-scroll="false" />
  </view>
  <!-- 位置内容 -->
  <view class="location-content tn-shadow">
    <view class="content-info">
      <view class="name">狮业有承有限公司 · 醒狮国际</view>
      <view class="desc">距离定位***.*km</view>
    </view>
    <view class="content-icon tn-flex-center">
      <TnIcon name="location-fill" />
    </view>
  </view>
</template>

<style lang="scss" scoped>
  @import './styles/index.scss';
</style>