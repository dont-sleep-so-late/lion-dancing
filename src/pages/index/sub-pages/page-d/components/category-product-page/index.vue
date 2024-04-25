<script lang="ts" setup>
  import { tnNavPage } from '@tuniao/tnui-vue3-uniapp/utils'
  import TnSwiper from '@tuniao/tnui-vue3-uniapp/components/swiper/src/swiper.vue'
  import TnEmpty from '@tuniao/tnui-vue3-uniapp/components/empty/src/empty.vue'
  import TnWaterFall from '@tuniao/tnui-vue3-uniapp/components/water-fall/src/water-fall.vue'
  import ProductItem from '../product-item/index.vue'
  import type { Banner } from '@/types/api/banner'
  import type { Product } from '@/types/api/product'

  defineProps<{
    paddingTop : number
    banners : Banner[]
    products : Product[]
    isLoad : boolean
  }>()
</script>

// #ifdef MP-WEIXIN
<script lang="ts">
  export default {
    options: {
      // 在微信小程序中将组件节点渲染为虚拟节点，更加接近Vue组件的表现(不会出现shadow节点下再去创建元素)
      virtualHost: true,
    },
  }
</script>
// #endif

<template>
  <view class="category-product-page" :style="{ paddingTop: `${paddingTop}px` }">
    <!-- 顶部轮播图 -->
    <view class="swiper">
      <TnSwiper :data="banners" autoplay loop indicator>
        <template #default="{ data }">
          <view class="swiper-item">
            <image class="tn-image" :src="data.image" mode="aspectFill" />
          </view>
        </template>
      </TnSwiper>
    </view>
    <!-- 商品信息 -->
    <view v-if="products?.length" class="product-list">
      <TnWaterFall :data="products">
        <template #left="{ item }">
          <ProductItem :product="item" />
        </template>
        <template #right="{ item, index }">
          <!-- 广告位 -->
          <view v-if="index === 0" class="ad-content tn-gradient-bg__blue tn-shadow-blur"
            @tap.stop="tnNavPage('/home-page/tuniao-ecology/index')">
            <view>导航 · 醒狮周边</view>
            <view>
              <text class="tn-mr-xs">看看都有什么</text>
              <TnIcon name="link" />
            </view>
          </view>
          <ProductItem :product="item" />
        </template>
      </TnWaterFall>
    </view>
    <!-- 无商品信息 -->
    <view v-else-if="isLoad" class="empty-product">
      <TnEmpty>
        <template #icon>
          <view class="empty-icon">
            <TnIcon name="wea-wind" />
          </view>
        </template>
        <template #tips>
          <view class="empty-tips"> 内容被台风吹走了 </view>
        </template>
      </TnEmpty>
    </view>
  </view>
</template>

<style lang="scss" scoped>
  @import './styles/index.scss';
</style>