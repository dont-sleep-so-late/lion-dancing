<script lang="ts" setup>
  import TnSwiper from '@tuniao/tnui-vue3-uniapp/components/swiper/src/swiper.vue'
  import TnNoticeBar from '@tuniao/tnui-vue3-uniapp/components/notice-bar/src/notice-bar.vue'
  import PageContainer from '../../components/page-container/index.vue'
  import { useSubPage } from './composables'
  import Title from '@/components/title/index.vue'

  const {
    triggerElementId,
    navbarOpacity,
    swiperData,
    hotCategoryData,
    noticeData,
    adCapsuleData,
    hotCaseData,
    tnNavPage,
    navbarInitFinishHandle,
    navAboutPage,
    navSearchPage,
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
      <!-- 顶部搜索区域 -->
      <TnNavbar fixed :placeholder="false" back-icon="" back-text="" home-icon="" :bottom-shadow="false"
        :bg-color="`rgba(255, 255, 255, ${navbarOpacity})`" @init-finish="navbarInitFinishHandle">
        <view class="navbar">
          <view class="navbar__logo" @tap.stop="navAboutPage">
            <image class="tn-image" src="https://resource.tuniaokj.com/logo.png" mode="aspectFill" />
          </view>
          <view class="search-box" :style="{
              backgroundColor: `rgba(248, 247, 248 , ${Math.max(
                0.25,
                navbarOpacity
              )})`,
              color: `rgba(0, 0, 0 , ${Math.max(0.45, navbarOpacity)})`,
            }" @tap.stop="navSearchPage">
            <view class="search-box__icon">
              <TnIcon name="search" />
            </view>
            <view class="search-box__tips">想搜索点什么呢</view>
          </view>
        </view>
      </TnNavbar>

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

      <!-- 通知 -->
      <view :id="triggerElementId" class="notice-bar">
        <TnNoticeBar :data="noticeData" direction="vertical" loop left-icon="sound" />
      </view>

      <!-- 页面内容 -->
      <view class="sub-page-container">
        <!-- 导航分类 -->
        <view class="category-container">
          <view v-for="(item, index) in hotCategoryData" :key="index" class="category-item"
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

        <!-- 广告胶囊 -->
        <view class="ad-capsule">
          <image class="tn-image" :src="adCapsuleData" mode="widthFix" />
        </view>

        <!-- 最新资讯 -->
        <view class="hot-case-container">
          <Title title="最新资讯" />
          <view class="content-wrapper">
            <view class="left">
              <view class="image tn-shadow-blur" :style="{ backgroundImage: `url(${hotCaseData[0]})` }" />
            </view>
            <view class="right">
              <view class="right-item">
                <view class="image tn-shadow-blur" :style="{ backgroundImage: `url(${hotCaseData[1]})` }" />
              </view>
              <view class="right-item">
                <view class="image tn-shadow-blur" :style="{ backgroundImage: `url(${hotCaseData[2]})` }" />
              </view>
            </view>
          </view>
        </view>

        <!-- 关于我们 -->
        <view class="about">
          <Title title="关于我们">
            <template #operation>
              <view />
            </template>
          </Title>
          <view class="content-wrapper">
            <view class="content-item tn-bg-image tn-shadow-blur tn-gradient-bg__blue"
              @tap.stop="tnNavPage('/home-page/company-culture/index')">
              <view class="left">
                <view class="title">醒狮文化</view>
                <view class="show-more">
                  <text>查看详情</text>
                  <TnIcon name="right" />
                </view>
              </view>
              <view class="icon">
                <TnIcon name="image-text-fill" />
              </view>
            </view>
            <view class="content-item tn-bg-image tn-shadow-blur tn-gradient-bg__cyan"
              @tap.stop="tnNavPage('/home-page/development-path/index')">
              <view class="left">
                <view class="title">发展历程</view>
                <view class="show-more">
                  <text>查看详情</text>
                  <TnIcon name="right" />
                </view>
              </view>
              <view class="icon">
                <TnIcon name="calendar-fill" />
              </view>
            </view>
            <view class="content-item tn-bg-image tn-shadow-blur tn-gradient-bg__bluepurple"
              @tap.stop="tnNavPage('/home-page/company-album/index')">
              <view class="left">
                <view class="title">集体相册</view>
                <view class="show-more">
                  <text>查看详情</text>
                  <TnIcon name="right" />
                </view>
              </view>
              <view class="icon">
                <TnIcon name="image-fill" />
              </view>
            </view>
            <view class="content-item tn-bg-image tn-shadow-blur tn-gradient-bg__purple"
              @tap.stop="tnNavPage('/home-page/win-win/index')">
              <view class="left">
                <view class="title">宣传短片</view>
                <view class="show-more">
                  <text>查看详情</text>
                  <TnIcon name="right" />
                </view>
              </view>
              <view class="icon">
                <TnIcon name="theme-fill" />
              </view>
            </view>
            <view class="content-item tn-bg-image tn-shadow-blur tn-gradient-bg__red"
              @tap.stop="tnNavPage('/home-page/honor-cert/index')">
              <view class="left">
                <view class="title">荣誉证书</view>
                <view class="show-more">
                  <text>查看详情</text>
                  <TnIcon name="right" />
                </view>
              </view>
              <view class="icon">
                <TnIcon name="trophy-fill" />
              </view>
            </view>
            <view class="content-item tn-bg-image tn-shadow-blur tn-gradient-bg__orange"
              @tap.stop="tnNavPage('/home-page/company-location/index')">
              <view class="left">
                <view class="title">展览地址</view>
                <view class="show-more">
                  <text>查看详情</text>
                  <TnIcon name="right" />
                </view>
              </view>
              <view class="icon">
                <TnIcon name="location-fill" />
              </view>
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