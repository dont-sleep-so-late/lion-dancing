import { getCurrentInstance, ref } from 'vue'
import type { NavbarRectInfo } from '@tuniao/tnui-vue3-uniapp/components/navbar'
import type { Topic } from '@/types/api/topic'
import {
  generateRandomAvatar,
  generateRandomNickname,
  generateRandomNumber,
} from '@/utils/local-mock'
import { useScrollTransparentNavbar } from '@/hooks'

interface CommunitySummary {
  title: string
  desc: string
  image: string
}

export const useTopicCommunity = () => {
  const instance = getCurrentInstance()
  // 社区概要
  const communitySummary = ref<CommunitySummary>({
    title: '话题社区',
    desc: '来自图鸟内部成员的烂漫，在这里发现创意',
    image: 'https://resource.tuniaokj.com/images/logo/logo.jpg',
  })

  // 话题内容
  const topicsData = ref<Topic[]>([])

  const {
    triggerElementId,
    navbarOpacity,
    init: initTransparentScroll,
    updateTargetTriggerValue,
    opacityScrollHandle,
  } = useScrollTransparentNavbar(instance)

  // 生成话题内容
  const generateTopicsData = () => {
    for (let i = 0; i < 20; i++) {
      // 浏览用户
      const viewUserAvatars = Array.from({
        length: generateRandomNumber(1, 6),
      }).map(() => generateRandomAvatar())

      topicsData.value.push({
        id: `${i}`,
        title: `话题标题-${i}`,
        desc: '开源可商用组件，助你快速开发炫酷的小程序',
        createTime: 'news',
        author: {
          id: `${i}`,
          nickname: generateRandomNickname(),
          avatar: generateRandomAvatar('xiong'),
        },
        tags: ['开源', '创意', 'UI框架'].slice(0, generateRandomNumber(1, 3)),
        images: [
          'https://resource.tuniaokj.com/images/blogger/content_1.jpeg',
          'https://resource.tuniaokj.com/images/blogger/onepiece-1.jpg',
          'https://resource.tuniaokj.com/images/blogger/onepiece-2.jpg',
          'https://resource.tuniaokj.com/images/blogger/onepiece-3.jpg',
          'https://resource.tuniaokj.com/images/blogger/onepiece-1.jpg',
          'https://resource.tuniaokj.com/images/blogger/onepiece-2.jpg',
          'https://resource.tuniaokj.com/images/blogger/onepiece-3.jpg',
        ].slice(0, generateRandomNumber(1, 7)),
        hotCount: generateRandomNumber(1, 1000),
        replyCount: generateRandomNumber(1, 1000),
        likeCount: generateRandomNumber(1, 1000),
        viewCount: generateRandomNumber(1, 1000),
        viewUsersAvatar: viewUserAvatars,
      })
    }
  }
  generateTopicsData()

  // 顶部导航栏初始化完成事件
  const navbarInitFinishHandle = (info: NavbarRectInfo) => {
    updateTargetTriggerValue(info.height)
  }

  return {
    triggerElementId,
    navbarOpacity,
    communitySummary,
    topicsData,
    initTransparentScroll,
    opacityScrollHandle,
    navbarInitFinishHandle,
  }
}
