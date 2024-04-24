<script lang="ts" setup>
import { useUniAppSystemRectInfo } from '@tuniao/tnui-vue3-uniapp/hooks'
import TnSwiper from '@tuniao/tnui-vue3-uniapp/components/swiper/src/swiper.vue'
import TnCoolIcon from 'tnuiv3p-tn-cool-icon/index.vue'
import PageContainer from '../../components/page-container/index.vue'
import { useSubPage } from './composables'
import CoolTitle from '@/components/cool-title/index.vue'

const { navBarInfo } = useUniAppSystemRectInfo()

const {
  demoImages,
  businessCategoryData,
  projectCaseData,
  navBusinessProcessDetail,
  navCaseDetail,
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
    <!-- 顶部样机演示 -->
    <view class="demo-preview">
      <view class="swiper" :style="{ marginTop: `${navBarInfo.height}px` }">
        <TnSwiper
          :data="demoImages"
          previous-margin="120"
          next-margin="130"
          loop
        >
          <template #default="{ data, active }">
            <view class="swiper-item" :class="{ active }">
              <image
                class="tn-image tn-shadow"
                :src="data.image"
                mode="heightFix"
              />
            </view>
          </template>
        </TnSwiper>
      </view>
    </view>

    <view class="page">
      <!-- 业务分类 -->
      <view class="business-category">
        <view
          v-for="(item, index) in businessCategoryData"
          :key="index"
          class="business-item"
          @tap.stop="navBusinessProcessDetail"
        >
          <view class="icon">
            <TnCoolIcon
              :name="item.icon"
              :color="item?.iconColor?.value"
              size="110"
            />
          </view>
          <view class="name">{{ item.name }}</view>
        </view>
      </view>

      <!-- 项目案例 -->
      <view class="case-project">
        <view class="container-title">
          <CoolTitle title="项 / 目 / 案 / 例" :cool-bg-number="5" />
        </view>
        <view class="case-list">
          <view
            v-for="(item, index) in projectCaseData"
            :key="index"
            class="case-item tn-shadow-blur"
            :style="{ backgroundImage: `url(${item.mainImage})` }"
            @tap.stop="navCaseDetail(item.id)"
          >
            <view class="title">{{ item.title }}</view>
          </view>
        </view>
      </view>
    </view>
  </PageContainer>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
