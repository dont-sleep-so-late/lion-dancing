import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import type { NavbarRectInfo } from '@tuniao/tnui-vue3-uniapp/components/navbar'
import storage from '@/utils/storage'
import { SearchHistoryKey } from '@/constants'

interface ResultItem {
  id: string
  title: string
  desc: string
  mainImage: string
  viewCount?: number
  likeCount?: number
  tag?: string
}

export const useSearch = () => {
  // 导航栏顶部的高度
  const navbarHeight = ref<number>(0)
  // 输入框的值
  const searchValue = ref<string>('')
  // 最近搜索历史记录
  const historyList = ref<string[]>([])
  // 搜索结果
  const searchResult = ref<ResultItem[]>([
    {
      id: '1',
      title: '小程序官网源码，已上线',
      desc: '小程序前端源码，欢迎白嫖嗷嗷，可以的话给个 star 哈，还可以一件三连的哈哈哈哈哈',
      mainImage: 'https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg',
      tag: '小程序',
      viewCount: 998,
      likeCount: 100,
    },
    {
      id: '2',
      title: '一个拥有大量3D模型的网站',
      desc: '喜欢3D模型的不了解一下?',
      mainImage: 'https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg',
      tag: '模型',
      viewCount: 467,
      likeCount: 239,
    },
    {
      id: '3',
      title: '小程序官网源码，已上线',
      desc: '小程序前端源码，欢迎白嫖嗷嗷，可以的话给个 star 哈，还可以一件三连的哈哈哈哈哈',
      mainImage: 'https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg',
      tag: '小程序',
      viewCount: 998,
      likeCount: 100,
    },
    {
      id: '4',
      title: '一个拥有大量3D模型的网站',
      desc: '喜欢3D模型的不了解一下?',
      mainImage: 'https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg',
      tag: '模型',
      viewCount: 467,
      likeCount: 239,
    },
    {
      id: '5',
      title: '小程序官网源码，已上线',
      desc: '小程序前端源码，欢迎白嫖嗷嗷，可以的话给个 star 哈，还可以一件三连的哈哈哈哈哈',
      mainImage: 'https://resource.tuniaokj.com/images/blogger/avatar_1.jpeg',
      tag: '小程序',
      viewCount: 998,
      likeCount: 100,
    },
    {
      id: '6',
      title: '一个拥有大量3D模型的网站',
      desc: '喜欢3D模型的不了解一下?',
      mainImage: 'https://resource.tuniaokj.com/images/blogger/avatar_2.jpeg',
      tag: '模型',
      viewCount: 467,
      likeCount: 239,
    },
  ])

  // 搜索提交事件
  const searchConfirmHandle = () => {
    if (!searchValue.value) return
    addHistory(searchValue.value)
  }

  // 历史记录点击事件
  const historyClickHandle = (value: string) => {
    searchValue.value = value
  }

  // 添加记录到搜索历史
  const addHistory = (value: string) => {
    // 如果已经存在，则不进行操作
    if (historyList.value.includes(value)) {
      return
    }
    // 最大只能存储 10 条记录，超过则删除最后一条
    if (historyList.value.length >= 10) {
      historyList.value.pop()
    }
    // 添加到第一条
    historyList.value.unshift(value)
    // 保存到本地
    storage.set(SearchHistoryKey, historyList.value)
  }

  // 清除全部搜索历史
  const clearHistory = () => {
    uni.showModal({
      title: '提示',
      content: '确认清除搜索历史记录吗?',
      showCancel: true,
      success: ({ confirm }) => {
        if (confirm) {
          historyList.value = []
          storage.remove(SearchHistoryKey)
        }
      },
    })
  }

  // 顶到导航栏初始化完毕
  const navbarInitFinishHandle = (info: NavbarRectInfo) => {
    navbarHeight.value = info.height
  }

  onLoad(() => {
    const historyData = storage.get(SearchHistoryKey)
    if (historyData) {
      historyList.value = historyData
    }
  })

  return {
    searchValue,
    navbarHeight,
    historyList,
    searchResult,
    navbarInitFinishHandle,
    searchConfirmHandle,
    historyClickHandle,
    clearHistory,
  }
}
