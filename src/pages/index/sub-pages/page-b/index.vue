<script lang="ts" setup>
import TnTabs from '@tuniao/tnui-vue3-uniapp/components/tabs/src/tabs.vue'
import TnTabsItem from '@tuniao/tnui-vue3-uniapp/components/tabs/src/tabs-item.vue'
import PageContainer from '../../components/page-container/index.vue'
import CategoryProductPage from './components/category-product-page/index.vue'
import { useSubPage } from './composables'

const {
  navbarHeight,
  currentCategoryIndex,
  categoryList,
  categoryProductData,
  navbarInitFinishHandle,
  navSearchPage,
  categoryChangeHandle,
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
  <PageContainer :placeholder-bottom="false">
    <TnNavbar
      fixed
      :bottom-shadow="false"
      :placeholder="false"
      frosted
      back-icon=""
      back-text=""
      home-icon=""
      home-text=""
      @init-finish="navbarInitFinishHandle"
    >
      <view class="navbar">
        <view class="search-operation" @tap.stop="navSearchPage">
          <TnIcon name="search-menu-fill" />
        </view>
        <view class="category">
          <TnTabs
            v-model="currentCategoryIndex"
            bg-color="transparent"
            :bottom-shadow="false"
            :bar="false"
            :scroll="false"
            height="auto"
            active-color="#080808"
            font-size="34"
            @change="categoryChangeHandle"
          >
            <TnTabsItem
              v-for="(item, index) in categoryList"
              :key="index"
              :title="item.name"
            />
          </TnTabs>
        </view>
      </view>
    </TnNavbar>
    <view class="page">
      <view class="page-container">
        <scroll-view
          v-for="(item, index) in categoryProductData"
          :key="index"
          class="page-scroll"
          :class="{
            active: currentCategoryIndex === index,
          }"
          scroll-y
        >
          <CategoryProductPage
            :padding-top="navbarHeight + 15"
            :banners="item.banners"
            :products="item.products"
            :is-load="item.isLoad"
          />
        </scroll-view>
      </view>
    </view>
  </PageContainer>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
