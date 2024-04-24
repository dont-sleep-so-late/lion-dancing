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
          title: '推出图鸟UI',
          desc: '图鸟UI是一套基于Vue3.0的UI组件库，它是一个面向未来的组件库，它的目标是为了提升开发者的开发效率，让开发者更专注于业务。',
          image: 'https://resource.tuniaokj.com/images/bless/bless-tiger.png',
          tags: ['图鸟UI', 'Vue3.0', '组件库'],
        },
        {
          id: '12',
          title: '推出图鸟UI',
          desc: '图鸟UI是一套基于Vue3.0的UI组件库，它是一个面向未来的组件库，它的目标是为了提升开发者的开发效率，让开发者更专注于业务。',
          image: 'https://resource.tuniaokj.com/images/bless/bless-tiger.png',
          tags: ['图鸟UI', 'Vue3.0', '组件库'],
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
          title: '图鸟成立',
          desc: '图鸟成为一个小工作室',
          image: 'https://resource.tuniaokj.com/images/bless/bless-tiger.png',
          tags: ['图鸟'],
        },
        {
          id: '22',
          title: '图鸟成立',
          desc: '图鸟成为一个小工作室',
          image: 'https://resource.tuniaokj.com/images/bless/bless-tiger.png',
          tags: ['图鸟'],
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
