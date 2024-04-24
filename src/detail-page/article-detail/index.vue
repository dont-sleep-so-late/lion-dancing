<script lang="ts" setup>
import { getCurrentInstance, ref } from 'vue'
import { onLoad, onPageScroll } from '@dcloudio/uni-app'
import TnAvatarGroup from '@tuniao/tnui-vue3-uniapp/components/avatar/src/avatar-group.vue'
import TnAvatar from '@tuniao/tnui-vue3-uniapp/components/avatar/src/avatar.vue'
import { useArticleDetail } from './composables'
import CoolTitle from '@/components/cool-title/index.vue'
import Title from '@/components/title/index.vue'
import ArticleSimpleItem from '@/components/article-simple-item/index.vue'
import ConsultOperationBar from '@/components/consult-operation-bar/index.vue'
import { useScrollUpdownBottomContent } from '@/hooks'

const instance = getCurrentInstance()

const {
  style: operationBarScrollStyle,
  scrollHandle: operationBarScrollHandle,
} = useScrollUpdownBottomContent('up', 80)

const type = ref<string>('')

const {
  navbarHeight,
  article,
  recommendArticles,
  navbarInitFinishHandle,
  getData,
} = useArticleDetail()

onLoad((options) => {
  if (!options?.id || !options?.type) {
    uni.showModal({
      title: '提示',
      content: '参数错误',
      showCancel: false,
      success: () => {
        uni.navigateBack()
      },
    })
    return
  }
  type.value = options.type
  getData(options.id)
})

onPageScroll((e) => {
  const top = e.scrollTop
  operationBarScrollHandle(instance, top)
})
</script>

<template>
  <TnNavbar
    fixed
    bg-color="transparent"
    :bottom-shadow="false"
    :placeholder="false"
    @init-finish="navbarInitFinishHandle"
  />
  <!-- 顶部导航栏背景动画 -->
  <view class="navbar-bg-animation" :style="{ height: `${navbarHeight}px` }" />
  <view
    class="article-detail-page"
    :style="{ paddingTop: `${navbarHeight + 10}px` }"
  >
    <!-- 文章内容 -->
    <view class="article-content">
      <view class="title">
        <CoolTitle
          :title="article?.title || ''"
          title-bg-image="https://resource.tuniaokj.com/images/title_bg/title00.png"
          left-icon=""
          right-icon=""
          :cool-bg-number="6"
        />
      </view>
      <view class="content">
        {{ article?.content || '' }}
      </view>
      <view class="bottom-container">
        <view class="view-data tn-flex items-center">
          <view class="view-avatar">
            <TnAvatarGroup size="40" :gap="0.5">
              <TnAvatar
                v-for="(item, index) in article?.viewUsersAvatar"
                :key="index"
                :url="item"
              />
            </TnAvatarGroup>
          </view>
          <view class="view-count"> {{ article?.viewCount }}人阅读 </view>
        </view>
        <view class="count-data tn-flex items-center">
          <view> <TnIcon name="rocket" />{{ article?.hotCount }} </view>
          <view> <TnIcon name="like" />{{ article?.likeCount }} </view>
        </view>
      </view>
    </view>

    <!-- 推荐数据 -->
    <view class="recommend-article">
      <view class="recommend-title">
        <Title
          sub-title
          title="Ta们都在看"
          operation-title="全部"
          operation-icon="topics"
        />
      </view>
      <view class="recommend-data">
        <view
          v-for="(item, index) in recommendArticles"
          :key="index"
          class="recommend-item"
        >
          <ArticleSimpleItem
            :title="item.title"
            :desc="item.desc"
            :image="item.mainImage"
            :tag="item.tags[0]"
            :view-count="item.hotCount"
            :like-count="item.likeCount"
          />
        </view>
      </view>
    </view>
  </view>
  <!-- 咨询操作栏 -->
  <view
    v-if="type === 'case'"
    class="operation-bar"
    :style="{ ...operationBarScrollStyle }"
  >
    <ConsultOperationBar button-text="案例资讯">
      <template #message> {{ article?.replyCount }}人 已咨询 </template>
    </ConsultOperationBar>
  </view>
  <view v-if="type === 'news'" class="operation-bar">
    <view class="news-bar">
      <view class="btn-container">
        <view class="btn tn-gradient-bg__aquablue">
          <view class="text">点赞鼓励</view>
          <view class="icon">
            <TnIcon name="like-lack" />
          </view>
        </view>
      </view>
      <view class="btn-container">
        <TnButton only-button open-type="share">
          <view class="btn tn-gradient-bg__cyan">
            <view class="text">分享好友</view>
            <view class="icon">
              <TnIcon name="wechat" />
            </view>
          </view>
        </TnButton>
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
@import './styles/index.scss';
</style>
