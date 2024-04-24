<script lang="ts" setup>
import TnSearchBox from '@tuniao/tnui-vue3-uniapp/components/search-box/src/search-box.vue'
import { useSearch } from './composables'
import Title from '@/components/title/index.vue'
import ArticleSimpleItem from '@/components/article-simple-item/index.vue'

const {
  navbarHeight,
  searchValue,
  historyList,
  searchResult,
  navbarInitFinishHandle,
  searchConfirmHandle,
  historyClickHandle,
  clearHistory,
} = useSearch()
</script>

<template>
  <TnNavbar
    fixed
    bg-color="transparent"
    :bottom-shadow="false"
    :placeholder="false"
    @init-finish="navbarInitFinishHandle"
  />
  <view class="search-page" :style="{ paddingTop: `${navbarHeight + 20}px` }">
    <!-- 搜索操作栏 -->
    <view class="search-operation">
      <view class="input">
        <TnSearchBox
          v-model="searchValue"
          :search-button="false"
          shape="round"
          size="sm"
          @search="searchConfirmHandle"
        />
      </view>
      <view class="button">
        <TnButton
          bg-color="tn-blue"
          shape="round"
          width="150"
          height="66"
          @click="searchConfirmHandle"
        >
          搜 索
        </TnButton>
      </view>
    </view>

    <!-- 最近搜索 -->
    <view v-if="historyList.length > 0" class="history-list">
      <Title
        title="最近搜索"
        sub-title
        operation-title="删除"
        operation-icon="delete"
        @operation="clearHistory"
      />
      <view class="content-wrapper">
        <view
          v-for="(item, index) in historyList"
          :key="index"
          class="history-item tn-gray-light_bg"
          @tap.stop="historyClickHandle(item)"
        >
          # {{ item }}
        </view>
      </view>
    </view>

    <!-- 搜索结果 -->
    <view v-if="searchResult.length > 0" class="search-result">
      <Title title="搜索结果" sub-title>
        <template #operation>
          <view />
        </template>
      </Title>
      <view class="content-wrapper">
        <view
          v-for="(item, index) in searchResult"
          :key="index"
          class="result-item"
        >
          <ArticleSimpleItem
            :title="item.title"
            :desc="item.desc"
            :image="item.mainImage"
            :tag="item.tag"
            :view-count="item.viewCount"
            :like-count="item.likeCount"
          />
        </view>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
