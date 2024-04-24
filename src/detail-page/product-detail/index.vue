<script lang="ts" setup>
  import { onPageScroll, onReady } from '@dcloudio/uni-app'
  import TnSwiper from '@tuniao/tnui-vue3-uniapp/components/swiper/src/swiper.vue'
  import { tnNavPage } from '@tuniao/tnui-vue3-uniapp/utils'
  import { useProductDetail } from './composables'
  import CoolTitle from '@/components/cool-title/index.vue'

  const {
    triggerElementId,
    navbarOpacity,
    product,
    initTransparentScroll,
    opacityScrollHandle,
    navbarInitFinishHandle,
  } = useProductDetail()

  onReady(() => {
    initTransparentScroll()
  })

  onPageScroll((e) => {
    const top = e.scrollTop
    opacityScrollHandle(top)
  })
</script>

<template>
  <TnNavbar fixed :bg-color="`rgba(255, 255, 255, ${navbarOpacity})`" :bottom-shadow="false" :placeholder="false"
    @init-finish="navbarInitFinishHandle" />
  <!-- 顶部轮播 -->
  <view class="swiper">
    <TnSwiper :data="product?.images" autoplay loop indicator>
      <template #default="{ data }">
        <view class="swiper-item">
          <image class="tn-image" :src="data" mode="aspectFill" />
        </view>
      </template>
    </TnSwiper>
  </view>
  <view :id="triggerElementId" class="product-info">
    <!-- 分享按钮 -->
    <view class="share-operation tn-share tn-flex-center">
      <TnButton only-button open-type="share">
        <TnIcon name="share-circle" size="54" />
      </TnButton>
    </view>
    <!-- 基础信息 -->
    <view class="product-base">
      <view class="title">{{ product?.title }}</view>
      <view class="tn-flex-end-between tn-mt">
        <view class="price">{{ product?.price }}</view>
        <view class="sale">
          已售 <text>{{ product?.sale }}</text>
        </view>
      </view>
    </view>
    <!-- 商品属性 -->
    <view class="product-attr">
      <view v-for="(item, index) in product?.attributes" :key="index" class="attr-item">
        <view class="name">{{ item.name }}</view>
        <view class="value">{{ item.value }}</view>
      </view>
    </view>
    <!-- 产品详情 -->
    <view class="product-detail">
      <view class="title">
        <CoolTitle title="醒狮周边 · 产品详情" :cool-bg-number="6" />
      </view>
      <view class="content">
        {{ product?.content }}
      </view>
    </view>
  </view>

  <!-- 底部操作栏 -->
  <view class="bottom-operation-bar tn-shadow">
    <view class="left">
      <view class="left-btn-item first" @tap.stop="tnNavPage('/pages/index/index', 'reLaunch')">
        <view class="icon">
          <TnIcon name="home-in" />
        </view>
        <view class="title">首页</view>
      </view>
      <TnButton only-button open-type="contact">
        <view class="left-btn-item">
          <view class="icon">
            <TnIcon name="service-simple-fill" />
          </view>
          <view class="title">客服</view>
        </view>
      </TnButton>
    </view>
    <view class="buy-btn tn-gradient-bg__cool-15 tn-white_text tn-shadow-blur">
      立 即 购 买
    </view>
  </view>
</template>

<style lang="scss" scoped>
  @import './styles/index.scss';
</style>