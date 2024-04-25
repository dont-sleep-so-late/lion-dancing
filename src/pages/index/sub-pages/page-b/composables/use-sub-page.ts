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
  const navArticleDetail = (id : string) => {
    tnNavPage(`/detail-page/article-detail/index?id=${id}&type=news`)
  }

  const onLoad : IndexPageOnLoadFunc = () => {
    swiperData.value = [
      {
        id: '1',
        name: '醒狮表演',
        image: 'https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/lionDancing/微信图片_20240424160137.jpg',
        title: '通讯员 张智轩',
        desc: '助力非遗传承，广东学子在路上',
      },
      {
        id: '2',
        name: '醒狮表演2',
        image: 'https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/lionDancing/微信图片_20240424160115.jpg',
        title: '通讯员 陈舒琪',
        desc: '深入佛声工艺厂，挖掘醒狮文化内涵',
      },
    ]

    newsData.value = Array.from({ length: generateRandomNumber(10, 30) }).map(
      () => ({
        id: generateRandomNumber(1000, 9999).toString(),
        title: '广东省——“非遗”工作取得新成效',
        mainImage: 'https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/lionDancing/微信图片_20240424160137.jpg',
        desc: '2022年6月11日，广东省文化和旅游厅在中山市召开2022年全省非物质文化遗产保护工作会议。',
        content: '2022年6月11日，广东省文化和旅游厅在中山市召开2022年全省非物质文化遗产保护工作会议。会议指出，近年来，广东省非遗保护工作在多方的支持和共同努力下，全省非遗保护工作在建章立制、基础工作、场馆建设、传承传播、双创发展、服务大局上均取得新成效，新突破。在相关政策的支持下，从岭南一带延伸至全国各地甚至海内外，“狮业有承”项目的开展将更具底气与动力。目前，全省共有联合国教科文组织公布的人类非遗代表作名录4项，国家级非遗代表性项目名录165项，国家级非遗传承人132人，省级非遗代表性项目816项，省级非遗传承人837人。',
        tags: ['醒狮', '非遗'],
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

  useSubPageProvide(1, {
    onLoad,
  })

  return {
    swiperData,
    newsData,
    navArticleDetail,
  }
}