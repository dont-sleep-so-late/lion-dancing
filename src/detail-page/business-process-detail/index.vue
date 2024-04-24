<script lang="ts" setup>
import { getCurrentInstance } from 'vue'
import { onPageScroll } from '@dcloudio/uni-app'
import TnTimeLine from 'tnuiv3p-tn-time-line/time-line.vue'
import TnTimeLineItem from 'tnuiv3p-tn-time-line/time-line-item.vue'
import TnTimeLineData from 'tnuiv3p-tn-time-line/time-line-data.vue'
import { useBusinessProcessDetail } from './composables'
import ConsultOperationBar from '@/components/consult-operation-bar/index.vue'
import { useScrollUpdownBottomContent } from '@/hooks'

const instance = getCurrentInstance()

const {
  style: operationBarScrollStyle,
  scrollHandle: operationBarScrollHandle,
} = useScrollUpdownBottomContent('up', 80)

const { businessProcessDetail } = useBusinessProcessDetail()

onPageScroll((e) => {
  const top = e.scrollTop
  operationBarScrollHandle(instance, top)
})
</script>

<template>
  <TnNavbar
    fixed
    back-icon="left-arrow"
    home-icon=""
    home-text=""
    :bottom-shadow="false"
  >
    {{ businessProcessDetail.title }}
  </TnNavbar>
  <view class="business-process-detail">
    <TnTimeLine>
      <TnTimeLineItem
        v-for="(item, index) in businessProcessDetail.data"
        :key="index"
        :title="item.title"
        title-icon="clip"
      >
        <TnTimeLineData
          v-for="(dItem, dIndex) in item.data"
          :key="dIndex"
          dot-icon="constellation"
          dot-color="tn-indigo"
        >
          <view
            class="process-content tn-gradient-bg__blue-light tn-shadow-blur"
          >
            {{ dItem }}
          </view>
        </TnTimeLineData>
      </TnTimeLineItem>
    </TnTimeLine>
  </view>
  <!-- 咨询操作栏 -->
  <view class="operation-bar" :style="{ ...operationBarScrollStyle }">
    <ConsultOperationBar button-text="业务资讯">
      <template #message>
        {{ businessProcessDetail.consultCount }}人 已咨询
      </template>
    </ConsultOperationBar>
  </view>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
