import { ref } from 'vue'
import type { NavbarRectInfo } from '@tuniao/tnui-vue3-uniapp/components/navbar'
import type { Article } from '@/types/api/article'
import { generateRandomAvatar, generateRandomNumber } from '@/utils/local-mock'

export const useArticleDetail = () => {
  const navbarHeight = ref(0)
  // 文章详情
  const article = ref<Article>()

  // 推荐文章
  const recommendArticles = ref<Article[]>([])

  // 获取文章和推荐文章数据
  const getData = (id: string) => {
    article.value = {
      id,
      title: '图鸟官网模板上线',
      desc: '图鸟官网模板上线，欢迎大家使用',
      content: '图鸟官网模板上线，欢迎大家使用',
      mainImage:
        'https://resource.tuniaokj.com/images/publicity/publicity-vue2.jpg',
      tags: [],
      hotCount: generateRandomNumber(1, 100),
      replyCount: generateRandomNumber(1, 100),
      likeCount: generateRandomNumber(1, 100),
      viewCount: generateRandomNumber(1, 100),
      shareCount: generateRandomNumber(1, 100),
      viewUsersAvatar: Array.from({
        length: generateRandomNumber(4, 6),
      }).map(() => generateRandomAvatar()),
      recommend: false,
    }
    recommendArticles.value = [
      {
        id,
        title: '图鸟官网模板上线',
        desc: '图鸟官网模板上线，欢迎大家使用',
        content: '图鸟官网模板上线，欢迎大家使用',
        mainImage:
          'https://resource.tuniaokj.com/images/publicity/publicity-vue2.jpg',
        tags: ['图鸟'],
        hotCount: generateRandomNumber(1, 100),
        replyCount: generateRandomNumber(1, 100),
        likeCount: generateRandomNumber(1, 100),
        viewCount: generateRandomNumber(1, 100),
        shareCount: generateRandomNumber(1, 100),
        viewUsersAvatar: [],
        recommend: false,
      },
      {
        id,
        title: '图鸟官网模板上线',
        desc: '图鸟官网模板上线，欢迎大家使用',
        content: '图鸟官网模板上线，欢迎大家使用',
        mainImage:
          'https://resource.tuniaokj.com/images/publicity/publicity-vue2.jpg',
        tags: ['图鸟'],
        hotCount: generateRandomNumber(1, 100),
        replyCount: generateRandomNumber(1, 100),
        likeCount: generateRandomNumber(1, 100),
        viewCount: generateRandomNumber(1, 100),
        shareCount: generateRandomNumber(1, 100),
        viewUsersAvatar: [],
        recommend: false,
      },
    ]
  }

  // 导航栏初始化完毕
  const navbarInitFinishHandle = (info: NavbarRectInfo) => {
    navbarHeight.value = info.height
  }

  return {
    navbarHeight,
    article,
    recommendArticles,
    navbarInitFinishHandle,
    getData,
  }
}
