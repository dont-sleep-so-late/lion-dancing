<script lang="ts" setup>
import { onLoad } from '@dcloudio/uni-app'
import { useProblemDetail } from './composables'

const { problemDetail, getProblemDetail } = useProblemDetail()

onLoad((options) => {
  if (!options?.id) {
    uni.showModal({
      title: '标题',
      content: '参数错误',
      showCancel: false,
      success: () => {
        uni.navigateBack()
      },
    })
    return
  }
  getProblemDetail(options.id)
})
</script>

<template>
  <TnNavbar fixed :bottom-shadow="false" />
  <view class="problem-detail">
    {{ problemDetail?.content }}
  </view>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
