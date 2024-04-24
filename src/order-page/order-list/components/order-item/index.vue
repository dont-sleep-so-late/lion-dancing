<script lang="ts" setup>
import { OrderStatusMap } from '../../types'
import type { Order } from '../../types'

defineProps<{
  data: Order
}>()
</script>

<template>
  <view class="order-info">
    <view class="info-header">
      <view class="order-no">
        <text class="value"> 订单编号: {{ data.orderId }} </text>
        <TnIcon name="copy" color="tn-grey" />
      </view>
      <view class="status" :class="[OrderStatusMap[data.status].color]">
        {{ OrderStatusMap[data.status].label }}
      </view>
    </view>
    <view class="info-content">
      <view class="content-desc">
        <view class="image">
          <image class="tn-image" :src="data.mainImage" mode="aspectFill" />
        </view>
        <view class="title tn-text-ellipsis-2">{{ data.title }}</view>
      </view>
      <view class="price">{{ data.price }}</view>
    </view>
    <view class="info-bottom">
      <view class="date">{{ data.date }}</view>
      <view class="operation">
        <view v-if="data.status === 4" class="operation-btn">
          <TnButton
            shape="round"
            bg-color="tn-blue"
            shadow
            shadow-color="tn-blue"
            size="sm"
          >
            <view class="btn"> 再次购买 </view>
          </TnButton>
        </view>
        <view v-if="data.status === 0" class="operation-btn">
          <TnButton
            shape="round"
            bg-color="tn-blue"
            shadow
            shadow-color="tn-blue"
            size="sm"
          >
            <view class="btn"> 去付款 </view>
          </TnButton>
        </view>
        <view v-if="data.status === 0" class="operation-btn">
          <TnButton
            shape="round"
            bg-color="tn-type-danger"
            shadow
            shadow-color="tn-type-danger"
            size="sm"
          >
            <view class="btn"> 取消支付 </view>
          </TnButton>
        </view>
        <view v-if="data.status === 2" class="operation-btn">
          <TnButton
            shape="round"
            bg-color="tn-blue"
            shadow
            shadow-color="tn-blue"
            size="sm"
          >
            <view class="btn"> 确认收货 </view>
          </TnButton>
        </view>
        <view v-if="[1, 2].includes(data.status)" class="operation-btn">
          <TnButton
            shape="round"
            bg-color="tn-type-danger"
            shadow
            shadow-color="tn-type-danger"
            size="sm"
          >
            <view class="btn"> 申请退款 </view>
          </TnButton>
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
