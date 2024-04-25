import { ref } from 'vue'

interface TuniaoProject {
  name: string
  isVIP: boolean
}

export const useMemberRights = () => {
  // 狮业有承项目
  const tuniaoProjects = ref<TuniaoProject[]>([
    {
      name: '狮业有承UI',
      isVIP: false,
    },
    {
      name: '狮业有承vue3',
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
