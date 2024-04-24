<script lang="ts" setup>
import { tnNavPage } from '@tuniao/tnui-vue3-uniapp/utils'
import TnLazyLoad from '@tuniao/tnui-vue3-uniapp/components/lazy-load/src/lazy-load.vue'
import type { Product } from '@/types/api/product'

defineProps<{
  product: Product
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
  <view
    class="product-item tn-shadow"
    @tap.stop="tnNavPage('/detail-page/product-detail/index')"
  >
    <view class="product-image">
      <TnLazyLoad :src="product.images[0]" mode="widthFix" />
    </view>
    <view class="product-content">
      <view class="title tn-text-ellipsis-1">{{ product.title }}</view>
      <view class="tags">
        <view
          v-for="(item, index) in product.tags"
          :key="index"
          class="tag-item tn-gray-light_bg"
        >
          {{ item }}
        </view>
      </view>
      <view class="tn-flex-end-between tn-mt-sm">
        <view class="price">{{ product.price }}</view>
        <view class="hot">
          <TnIcon name="rocket" />
          {{ product.sale }}
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
