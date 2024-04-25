import { ref } from 'vue'
import type { DevelopmentPath } from '@/types/api/development-path'

export const useDevelopmentPath = () => {
  // 发展历程数据
  const developmentData = ref<DevelopmentPath[]>([
    {
      id: '1',
      title: '2022-03-12',
      date: '2022-03-12',
      data: [
        {
          id: '11',
          title: '推出狮业有承',
          desc: '狮业有承是一套狮业有成，一个基于虚拟数字人传播醒狮操、相关新闻展示、志愿者招募、醒狮招聘、商业合作以及周边售卖的小程序。它的目标是为了让更多人了解认识到。',
          image: 'https://resource.tuniaokj.com/images/bless/bless-tiger.png',
          tags: ['小程序', 'Vue3.0', '数字人'],
        },
        {
          id: '12',
          title: '推出狮业有承UI',
          desc: '狮业有承UI是一套基于Vue3.0的UI组件库，它是一个面向未来的组件库，它的目标是为了提升开发者的开发效率，让开发者更专注于业务。',
          image: 'https://resource.tuniaokj.com/images/bless/bless-tiger.png',
          tags: ['狮业有承UI', 'Vue3.0', '组件库'],
        },
      ],
    },
    {
      id: '2',
      title: '2019-12-12',
      date: '2019-12-12',
      data: [
        {
          id: '21',
          title: '狮业有承成立',
          desc: '狮业有承成为一个小工作室',
          image: 'https://resource.tuniaokj.com/images/bless/bless-tiger.png',
          tags: ['狮业有承'],
        },
        {
          id: '22',
          title: '狮业有承成立',
          desc: '狮业有承成为一个小工作室',
          image: 'https://resource.tuniaokj.com/images/bless/bless-tiger.png',
          tags: ['狮业有承'],
        },
      ],
    },
    {
      id: '3',
      title: '2018-06-19',
      date: '2018-06-19',
      data: [
        {
          id: '31',
          title: '毕业啦',
          desc: '开始步入社会',
          image: 'https://resource.tuniaokj.com/images/bless/bless-tiger.png',
          tags: ['毕业'],
        },
        {
          id: '32',
          title: '毕业啦',
          desc: '开始步入社会',
          image: 'https://resource.tuniaokj.com/images/bless/bless-tiger.png',
          tags: ['毕业'],
        },
      ],
    },
  ])

  return {
    developmentData,
  }
}