<script lang="ts" setup>
import { onLoad } from '@dcloudio/uni-app'
import TnTabs from '@tuniao/tnui-vue3-uniapp/components/tabs/src/tabs.vue'
import TnTabsItem from '@tuniao/tnui-vue3-uniapp/components/tabs/src/tabs-item.vue'
import TnSwiper from '@tuniao/tnui-vue3-uniapp/components/swiper/src/swiper.vue'
import { useOrderList } from './composables'
import OrderItem from './components/order-item/index.vue'

const {
  navbarHeight,
  currentActiveCategoryIndex,
  orderCategory,
  orderListData,
  generateOrderData,
  navBarInitFinishHandle,
} = useOrderList()

onLoad(() => {
  generateOrderData()
})
</script>

<template>
  <TnNavbar
    fixed
    :bottom-shadow="false"
    :placeholder="false"
    @init-finish="navBarInitFinishHandle"
  >
    商品订单
  </TnNavbar>
  <view
    class="order-list-page tn-u-safe-area"
    :style="{ paddingTop: `${navbarHeight}px` }"
  >
    <!-- 分类 -->
    <view class="category">
      <TnTabs
        v-model="currentActiveCategoryIndex"
        :scroll="false"
        :bottom-shadow="false"
        active-color="tn-blue"
        bar-color="tn-blue"
      >
        <TnTabsItem
          v-for="(item, index) in orderCategory"
          :key="index"
          :title="item.label"
          :badge-config="item.count !== 0 ? { value: item.count } : undefined"
        />
      </TnTabs>
    </view>
    <!-- 订单数据 -->
    <view class="order-data">
      <view class="data-swiper">
        <TnSwiper v-model="currentActiveCategoryIndex" :data="orderListData">
          <template #default="{ data }">
            <view class="swiper-item">
              <scroll-view class="data-scroll-view" scroll-y>
                <view class="order-list">
                  <view
                    v-for="(item, index) in data"
                    :key="index"
                    class="order-item tn-shadow"
                  >
                    <OrderItem :data="item" />
                  </view>
                </view>
              </scroll-view>
            </view>
          </template>
        </TnSwiper>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
