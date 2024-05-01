<script lang="ts" setup>
  import TnSwiper from '@tuniao/tnui-vue3-uniapp/components/swiper/src/swiper.vue'
  import TnNoticeBar from '@tuniao/tnui-vue3-uniapp/components/notice-bar/src/notice-bar.vue'
  import PageContainer from './components/page-container/index.vue'
  import { useSubPage } from './composables'
  import Title from '@/components/title/index.vue'
  import Video from '@/components/video/video.vue'

  const {
    triggerElementId,
    swiperData,
    swiperData2,
    classCategoryData,
    volunteerCategoryData,
    noticeData,
    hotCaseData,
    tnNavPage,
  } = useSubPage()
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
  <PageContainer>
    <view class="page">
      <!-- 顶部区域 -->
      <TnNavbar fixed bg-color="transparent" :bottom-shadow="false" :placeholder="false" />
      <!-- 通知 -->
      <view :id="triggerElementId" class="notice-bar">
        <TnNoticeBar :data="noticeData" direction="vertical" loop left-icon="sound" />
      </view>
      <Title class="title" title="核心课程" />
      <!-- 顶部轮播图 -->
      <view class="top-swiper">
        <TnSwiper :data="swiperData" width="100%" height="100%" indicator loop>
          <template #default="{ data }">
            <view class="swiper-item">
              <image class="tn-image" :src="data" mode="aspectFill" />
            </view>
          </template>
        </TnSwiper>
      </view>


      <!-- 页面内容 -->
      <view class="sub-page-container">
        <!-- 导航分类 -->
        <view class="category-container">
          <view v-for="(item, index) in classCategoryData" :key="index" class="category-item"
            @tap.stop="tnNavPage(item.url!)">
            <view class="item-icon tn-bg-image tn-shadow-blur"
              :style="{ backgroundColor: item?.backgroundColor?.value }">
              <view class="icon">
                <TnIcon :name="item.icon" />
              </view>
            </view>
            <view class="item-name">
              {{ item.name }}
            </view>
          </view>
        </view>

        <Video />

        <!-- 志愿者专区 -->
        <view :id="triggerElementId" class="notice-bar">
          <TnNoticeBar :data="noticeData" direction="vertical" loop left-icon="sound" />
        </view>
        <Title class="title" title="志愿专区" />
        <!-- 顶部轮播图 -->
        <view class="top-swiper">
          <TnSwiper :data="swiperData2" width="100%" height="100%" indicator loop>
            <template #default="{ data }">
              <view class="swiper-item">
                <image class="tn-image" :src="data" mode="aspectFill" />
              </view>
            </template>
          </TnSwiper>
        </view>
        <!-- 导航分类 -->
        <view class="category-container">
          <view v-for="(item, index) in volunteerCategoryData" :key="index" class="category-item"
            @tap.stop="tnNavPage(item.url!)">
            <view class="item-icon tn-bg-image tn-shadow-blur"
              :style="{ backgroundColor: item?.backgroundColor?.value }">
              <view class="icon">
                <TnIcon :name="item.icon" />
              </view>
            </view>
            <view class="item-name">
              {{ item.name }}
            </view>
          </view>
        </view>
      </view>

    </view>
  </PageContainer>
</template>

<style lang="scss" scoped>
  @import './styles/index.scss';
</style>