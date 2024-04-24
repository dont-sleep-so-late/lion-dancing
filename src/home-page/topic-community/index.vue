<script lang="ts" setup>
import { onPageScroll, onReady } from '@dcloudio/uni-app'
import TnGraphicCard from 'tnuiv3p-tn-graphic-card/index.vue'
import { useTopicCommunity } from './composables'

const {
  triggerElementId,
  navbarOpacity,
  communitySummary,
  topicsData,
  initTransparentScroll,
  navbarInitFinishHandle,
  opacityScrollHandle,
} = useTopicCommunity()

onReady(() => {
  initTransparentScroll()
})
onPageScroll((e) => {
  opacityScrollHandle(e.scrollTop)
})
</script>

<template>
  <TnNavbar
    fixed
    home-icon="discover-fill"
    :bg-color="`rgba(255, 255, 255, ${navbarOpacity})`"
    :bottom-shadow="false"
    :placeholder="false"
    @init-finish="navbarInitFinishHandle"
  />
  <!-- 社区概述 -->
  <view class="community-summary">
    <view class="summary-content">
      <view class="summary-info">
        <view class="title">{{ communitySummary.title }}</view>
        <view class="desc">{{ communitySummary.desc }}</view>
      </view>
      <view class="summary-avatar">
        <image
          class="tn-image"
          :src="communitySummary.image"
          mode="aspectFill"
        />
      </view>
    </view>
  </view>

  <!-- 话题列表 -->
  <view :id="triggerElementId" class="topic-list">
    <view
      v-for="(item, index) in topicsData"
      :key="index"
      class="topic-item tn-shadow"
    >
      <TnGraphicCard
        :avatar="item.author.avatar"
        :title="item.title"
        :description="item.createTime"
        :tags="item.tags"
        :content="item.desc"
        :images="item.images"
        :hot-count="item.hotCount"
        :comment-count="item.replyCount"
        :like-count="item.likeCount"
        :view-count="item.viewCount"
        :view-user-avatars="item.viewUsersAvatar"
      />
    </view>
  </view>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
