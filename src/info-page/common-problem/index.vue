<script lang="ts" setup>
import TnSuspendButton from 'tnuiv3p-tn-suspend-button/index.vue'
import { useCommonProblem } from './composables'

const { commonProblemData, loginProblemData, navProblemDetail } =
  useCommonProblem()
</script>

<template>
  <TnNavbar fixed :bottom-shadow="false"> 帮助中心 </TnNavbar>
  <view class="common-problem">
    <view class="problem-container">
      <view class="problem-title">常见问题</view>
      <view class="problem-data">
        <view
          v-for="(item, index) in commonProblemData"
          :key="index"
          class="problem-item"
          @tap.stop="navProblemDetail(item.id)"
        >
          <view class="title">{{ item.title }}</view>
          <view class="icon">
            <TnIcon name="right" />
          </view>
        </view>
      </view>
    </view>
    <view class="problem-container">
      <view class="problem-title">登录问题</view>
      <view class="problem-data">
        <view
          v-for="(item, index) in loginProblemData"
          :key="index"
          class="problem-item"
          @tap.stop="navProblemDetail(item.id)"
        >
          <view class="title">{{ item.title }}</view>
          <view class="icon">
            <TnIcon name="right" />
          </view>
        </view>
      </view>
    </view>
  </view>

  <TnSuspendButton bg-color="tn-gradient__blue">
    <TnButton only-button open-type="contact">
      <TnIcon name="wechat-fill" color="#fff" size="70" />
    </TnButton>
  </TnSuspendButton>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
