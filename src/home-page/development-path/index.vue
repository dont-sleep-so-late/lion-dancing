<script lang="ts" setup>
import TnTimeLine from 'tnuiv3p-tn-time-line/time-line.vue'
import TnTimeLineItem from 'tnuiv3p-tn-time-line/time-line-item.vue'
import TnTimeLineData from 'tnuiv3p-tn-time-line/time-line-data.vue'
import { useDevelopmentPath } from './composables'

const { developmentData } = useDevelopmentPath()
</script>

<template>
  <TnNavbar
    fixed
    home-icon=""
    home-text=""
    back-icon="left-arrow"
    :bottom-shadow="false"
  >
    发展历程
  </TnNavbar>
  <view class="development-path">
    <TnTimeLine>
      <TnTimeLineItem
        v-for="(dItem, dIndex) in developmentData"
        :key="dIndex"
        :title="dItem.date"
        title-icon="trophy"
      >
        <TnTimeLineData v-for="(item, index) in dItem.data" :key="index">
          <view class="path-item tn-shadow">
            <view class="item-image">
              <image class="tn-image" :src="item.image" mode="aspectFill" />
            </view>
            <view class="item-content">
              <view class="desc tn-text-ellipsis-2">{{ item.desc }}</view>
              <view class="tags">
                <view
                  v-for="(tag, tIndex) in item.tags"
                  :key="tIndex"
                  class="tag-item"
                >
                  # {{ tag }}
                </view>
              </view>
            </view>
          </view>
        </TnTimeLineData>
      </TnTimeLineItem>
    </TnTimeLine>
  </view>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
