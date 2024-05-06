import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import type { NavbarRectInfo } from '@tuniao/tnui-vue3-uniapp/components/navbar'
import storage from '@/utils/storage'
import { SearchHistoryKey } from '@/constants'

interface ResultItem {
  id : string
  title : string
  desc : string
  mainImage : string
  viewCount ?: number
  likeCount ?: number
  tag ?: string
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
      title: '我们是冠军！',
      desc: '我们是冠军！我们是冠军！我们是冠军！',
      mainImage: 'https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/lionDancing/20240501164311.png',
      tag: '醒狮',
      viewCount: 998,
      likeCount: 100,
    },
    {
      id: '2',
      title: '一个拥有醒狮文化的网站',
      desc: '喜欢醒狮的不了解一下?',
      mainImage: 'https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/lionDancing/shuzhibaijian%20(3).jpg',
      tag: '醒狮周边',
      viewCount: 467,
      likeCount: 239,
    },
    {
      id: '3',
      title: '教你敲鼓！',
      desc: '咚咚咚！咚咚咚！咚咚咚！！！！',
      mainImage: 'https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/lionDancing/20240501164300.png',
      tag: '醒狮',
      viewCount: 998,
      likeCount: 100,
    },
    {
      id: '4',
      title: '醒狮背后训练秘密曝光！',
      desc: '醒狮的秘密训练！',
      mainImage: 'https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/lionDancing/20240501163457.png',
      tag: '醒狮训练',
      viewCount: 467,
      likeCount: 239,
    },
    {
      id: '5',
      title: '醒狮国潮',
      desc: '醒狮小狮子，不来买一个吗！',
      mainImage: 'https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/lionDancing/baijian.png',
      tag: '醒狮周边',
      viewCount: 998,
      likeCount: 100,
    },
    {
      id: '6',
      title: '精美醒狮手机壳',
      desc: '喜欢3D模型的不了解一下?',
      mainImage: 'https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/lionDancing/shoujike.jpg',
      tag: '醒狮周边',
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
  const historyClickHandle = (value : string) => {
    searchValue.value = value
  }

  // 添加记录到搜索历史
  const addHistory = (value : string) => {
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
  const navbarInitFinishHandle = (info : NavbarRectInfo) => {
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