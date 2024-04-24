<script lang="ts" setup>
import { useMemberRights } from './composables'

const { tuniaoProjects } = useMemberRights()
</script>

<template>
  <TnNavbar fixed :bottom-shadow="false"> 会员权益 </TnNavbar>
  <view class="page">
    <!-- 会员等级、权益 -->
    <view class="member-rights tn-shadow-blur">
      <view class="member-content">
        <view class="grade tn-text-transparent">至尊 VIP</view>
        <view class="desc">尊享图鸟UI所有开源(付费)项目的代码</view>
      </view>
      <view class="price tn-gradient-bg__orangeyellow tn-text-transparent">
        <text class="unit">￥</text>1299 / 终身
      </view>

      <!-- 图片波浪 -->
      <view class="image-wave-container">
        <view class="image-wave" />
        <view class="image-wave" />
        <view class="image-wave" />
      </view>
    </view>

    <!--  项目表格 -->
    <view class="project-table tn-shadow">
      <view class="table-header">
        <view class="header-item">
          <view class="title">项目名称</view>
          <view class="desc">不喜勿喷</view>
        </view>
        <view class="header-item">
          <view class="title">普通用户</view>
          <view class="desc">免费开源</view>
        </view>
        <view class="header-item">
          <view class="title">至尊VIP</view>
          <view class="desc">会员专享</view>
        </view>
      </view>
      <view
        v-for="(item, index) in tuniaoProjects"
        :key="index"
        class="table-tr"
      >
        <view class="tr-item">
          <view class="project-name">{{ item.name }}</view>
        </view>
        <view v-if="!item.isVIP" class="tr-item">
          <view class="text">免费商用</view>
          <view class="text">插件市场获取</view>
        </view>
        <view v-else class="tr-item">
          <view class="empty">无</view>
        </view>
        <view v-if="!item.isVIP" class="tr-item">
          <view class="text">免费商用</view>
          <view class="text">会员群文件获取</view>
        </view>
        <view v-else class="tr-item">
          <view class="text">会员专属</view>
          <view class="text">会员群文件获取</view>
        </view>
      </view>
    </view>
  </view>
  <!-- 咨询按钮 -->
  <view class="contact-btn">
    <TnButton
      shape="round"
      bg-color="tn-blue"
      shadow
      shadow-color="tn-blue"
      open-type="contact"
      width="70%"
      height="76rpx"
    >
      前往咨询
    </TnButton>
  </view>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
