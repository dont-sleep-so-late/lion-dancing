<script lang="ts" setup>
import TnSwiper from '@tuniao/tnui-vue3-uniapp/components/swiper/src/swiper.vue'
import TnCoolIcon from 'tnuiv3p-tn-cool-icon/index.vue'
import { useTuniaoEcology } from './composables'
import Title from '@/components/title/index.vue'

const { swiperData, groupFriendsData, friendLinkData, tuniaoProjectData } =
  useTuniaoEcology()
</script>

<template>
  <TnNavbar
    fixed
    bg-color="transparent"
    :bottom-shadow="false"
    :placeholder="false"
  />
  <!-- 顶部轮播 -->
  <view class="swiper">
    <TnSwiper :data="swiperData" loop autoplay>
      <template #default="{ data, active }">
        <view class="swiper-item" :class="[{ active }]">
          <image class="image" :src="data.image" mode="aspectFill" />
          <view class="swiper-info">
            <view class="title">{{ data.title }}</view>
            <view class="desc">{{ data.desc }}</view>
          </view>
          <view class="assist-image">
            <image class="tn-image" :src="data.secondImage" mode="heightFix" />
          </view>
        </view>
      </template>
    </TnSwiper>
  </view>
  <!-- 页面内容 -->
  <view class="ecology-wrapper">
    <!-- 群友项目 -->
    <view class="group-link">
      <Title title="群友项目" sub-title operation-title="" />
      <view class="group-link-list">
        <view
          v-for="(item, index) in groupFriendsData"
          :key="index"
          class="list-item tn-shadow"
        >
          <view class="item-image">
            <image class="tn-image" :src="item.image" mode="aspectFill" />
          </view>
          <view class="item-content">
            <view class="title">{{ item.title }}</view>
            <view class="desc">{{ item.desc }}</view>
          </view>
        </view>
      </view>
    </view>
    <!-- 友情链接 -->
    <view class="friend-link">
      <Title title="友情链接" sub-title operation-title="" />
      <view class="friend-link-list">
        <view
          v-for="(item, index) in friendLinkData"
          :key="index"
          class="list-item tn-shadow"
        >
          <view class="item-image">
            <image
              v-if="item.image"
              class="tn-image"
              :src="item.image"
              mode="aspectFill"
            />
            <TnCoolIcon
              v-else
              name="tag"
              type="circle"
              bg-color="tn-orange-light"
              color="tn-orange"
              size="80"
            />
          </view>
          <view class="item-title">
            {{ item.title }}
          </view>
        </view>
      </view>
    </view>
    <!-- 图鸟开源项目 -->
    <view class="tuniao-project">
      <Title title="图鸟开源项目" sub-title operation-title="" />
      <view class="tuniao-project-list">
        <view
          v-for="(item, index) in tuniaoProjectData"
          :key="index"
          class="list-item tn-shadow"
        >
          <view class="top">
            <view class="list-info">
              <view class="image">
                <image class="tn-image" :src="item.image" mode="aspectFill" />
              </view>
              <view class="title">{{ item.title }}</view>
            </view>
            <view class="list-operation">
              复制连接 <TnIcon name="copy" size="24" />
            </view>
          </view>
          <view class="item-desc">
            {{ item.desc }}
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
