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
  title : string
  desc : string
  image : string
}

export const useTopicCommunity = () => {
  const instance = getCurrentInstance()
  // 社区概要
  const communitySummary = ref<CommunitySummary>({
    title: '新闻中心',
    desc: '来自一线记者的细心采访，在这里发现文化传承',
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
        title: `舞狮文化传承调研队丨助力醒狮传承，广海学子在路上-${i}`,
        desc: '中华舞狮有南北之分，而南狮因追求“神似”又被称为“醒狮”。岭南醒狮文化作为国家级非物质文化遗产，凝聚岭南历史的精魂，对其传承就是对岭南文化继承、传播和创新的过程。',
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
  const navbarInitFinishHandle = (info : NavbarRectInfo) => {
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