import { ref } from 'vue'
import { tnNavPage } from '@tuniao/tnui-vue3-uniapp/utils'
import type { Banner } from '@/types/api/banner'
import type { IndexPageOnLoadFunc } from '@/pages/index/types'
import type { Article } from '@/types/api/article'
import { useSubPageProvide } from '@/pages/index/composables'
import { generateRandomNumber } from '@/utils/local-mock'

export const useSubPage = () => {
  // 轮播数据
  const swiperData = ref<Banner[]>([])
  // 资讯数据
  const newsData = ref<Article[]>([])

  // 跳转到资讯详情页
  const navArticleDetail = (id: string) => {
    tnNavPage(`/detail-page/article-detail/index?id=${id}&type=news`)
  }

  const onLoad: IndexPageOnLoadFunc = () => {
    swiperData.value = [
      {
        id: '1',
        name: '轮播图1',
        image: 'https://resource.tuniaokj.com/images/swiper/ad1.jpg',
        title: '我不喜欢带雨伞',
        desc: '因为雨水从来不低落在我心上',
      },
      {
        id: '2',
        name: '轮播图2',
        image: 'https://resource.tuniaokj.com/images/swiper/ad2.jpg',
        title: '图鸟南南',
        desc: '欢迎加入东东们',
      },
      {
        id: '3',
        name: '轮播图3',
        image: 'https://resource.tuniaokj.com/images/swiper/ad3.jpg',
        title: '图鸟北北',
        desc: '微信号 tnkewo',
      },
      {
        id: '4',
        name: '轮播图4',
        image: 'https://resource.tuniaokj.com/images/swiper/ad4.jpg',
        title: '图鸟猪猪',
        desc: '努力成为大佬',
      },
    ]

    newsData.value = Array.from({ length: generateRandomNumber(10, 30) }).map(
      () => ({
        id: generateRandomNumber(1000, 9999).toString(),
        title: '图鸟官网模板全新上线',
        mainImage: 'https://resource.tuniaokj.com/images/xiongjie/x14.jpg',
        desc: '图鸟官网模板全新上线，欢迎大家前来体验。',
        content: '图鸟官网模板全新上线，欢迎大家前来体验。',
        tags: ['图鸟'],
        hotCount: generateRandomNumber(1, 100),
        replyCount: generateRandomNumber(1, 100),
        likeCount: generateRandomNumber(1, 100),
        viewCount: generateRandomNumber(1, 100),
        shareCount: generateRandomNumber(1, 100),
        viewUsersAvatar: [],
        recommend: generateRandomNumber(1, 10) % 2 === 0,
      })
    )
  }

  useSubPageProvide(3, {
    onLoad,
  })

  return {
    swiperData,
    newsData,
    navArticleDetail,
  }
}
