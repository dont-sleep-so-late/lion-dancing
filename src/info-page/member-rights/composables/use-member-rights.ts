import { ref } from 'vue'

interface TuniaoProject {
  name: string
  isVIP: boolean
}

export const useMemberRights = () => {
  // 图鸟项目
  const tuniaoProjects = ref<TuniaoProject[]>([
    {
      name: '图鸟UI',
      isVIP: false,
    },
    {
      name: '图鸟vue3',
      isVIP: false,
    },
    {
      name: '圈子博客',
      isVIP: false,
    },
    {
      name: '简约商圈',
      isVIP: false,
    },
    {
      name: '凶姐壁纸',
      isVIP: false,
    },
    {
      name: '名片资讯',
      isVIP: true,
    },
    {
      name: '炫酷官网',
      isVIP: true,
    },
  ])

  return {
    tuniaoProjects,
  }
}
