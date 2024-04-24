import { ref } from 'vue'
import { tnNavPage } from '@tuniao/tnui-vue3-uniapp/utils'
import type { IndexPageOnLoadFunc } from '@/pages/index/types'
import type { Banner } from '@/types/api/banner'
import type { Category } from '@/types/api/category'
import type { Article } from '@/types/api/article'
import { useSubPageProvide } from '@/pages/index/composables'
import { ColorType } from '@/types/color'

export const useSubPage = () => {
  // 样机数据
  const demoImages = ref<Banner[]>([])
  // 分类数据
  const businessCategoryData = ref<Category[]>([])
  // 项目案例
  const projectCaseData = ref<Article[]>([])

  const onLoad: IndexPageOnLoadFunc = () => {
    demoImages.value = [
      {
        id: '1',
        name: '样机1',
        image: 'https://resource.tuniaokj.com/images/index_bg/pro1.jpg',
      },
      {
        id: '2',
        name: '样机2',
        image: 'https://resource.tuniaokj.com/images/index_bg/pro2.jpg',
      },
      {
        id: '3',
        name: '样机3',
        image: 'https://resource.tuniaokj.com/images/index_bg/pro3.jpg',
      },
      {
        id: '4',
        name: '样机4',
        image: 'https://resource.tuniaokj.com/images/index_bg/pro4.jpg',
      },
      {
        id: '5',
        name: '样机5',
        image: 'https://resource.tuniaokj.com/images/index_bg/pro5.jpg',
      },
    ]
    businessCategoryData.value = [
      {
        id: '1',
        name: '原型设计',
        icon: 'cube-fill',
        iconColor: {
          type: ColorType.custom,
          value: 'gradient__cool-5',
        },
      },
      {
        id: '2',
        name: 'UI设计',
        icon: 'clover-fill',
        iconColor: {
          type: ColorType.custom,
          value: 'gradient__cool-6',
        },
      },
      {
        id: '3',
        name: 'UNIAPP前端',
        icon: 'block-fill',
        iconColor: {
          type: ColorType.custom,
          value: 'gradient__cool-7',
        },
      },
      {
        id: '4',
        name: '整套开发',
        icon: 'moon-fill',
        iconColor: {
          type: ColorType.custom,
          value: 'gradient__cool-8',
        },
      },
      {
        id: '5',
        name: 'ICON图标',
        icon: 'dragon',
        iconColor: {
          type: ColorType.custom,
          value: 'gradient__cool-1',
        },
      },
      {
        id: '6',
        name: 'Logo商标',
        icon: 'gloves-fill',
        iconColor: {
          type: ColorType.custom,
          value: 'gradient__cool-16',
        },
      },
      {
        id: '7',
        name: '名片设计',
        icon: 'cube-fill',
        iconColor: {
          type: ColorType.custom,
          value: 'gradient__cool-14',
        },
      },
      {
        id: '8',
        name: '其他业务',
        icon: 'chain',
        iconColor: {
          type: ColorType.custom,
          value: 'gradient__cool-2',
        },
      },
    ]
    projectCaseData.value = [
      {
        id: '1',
        title: '项目案例1',
        desc: '项目案例1描述',
        content: '',
        mainImage:
          'https://resource.tuniaokj.com/images/publicity/publicity-vue2.jpg',
        tags: [],
        hotCount: 0,
        replyCount: 0,
        likeCount: 0,
        viewCount: 0,
        shareCount: 0,
        viewUsersAvatar: [],
        recommend: false,
      },
      {
        id: '2',
        title: '项目案例2',
        desc: '项目案例2描述',
        content: '',
        mainImage:
          'https://resource.tuniaokj.com/images/publicity/publicity-vue2.jpg',
        tags: [],
        hotCount: 0,
        replyCount: 0,
        likeCount: 0,
        viewCount: 0,
        shareCount: 0,
        viewUsersAvatar: [],
        recommend: false,
      },
      {
        id: '3',
        title: '项目案例3',
        desc: '项目案例3描述',
        content: '',
        mainImage:
          'https://resource.tuniaokj.com/images/publicity/publicity-vue2.jpg',
        tags: [],
        hotCount: 0,
        replyCount: 0,
        likeCount: 0,
        viewCount: 0,
        shareCount: 0,
        viewUsersAvatar: [],
        recommend: false,
      },
      {
        id: '4',
        title: '项目案例4',
        desc: '项目案例4描述',
        content: '',
        mainImage:
          'https://resource.tuniaokj.com/images/publicity/publicity-vue2.jpg',
        tags: [],
        hotCount: 0,
        replyCount: 0,
        likeCount: 0,
        viewCount: 0,
        shareCount: 0,
        viewUsersAvatar: [],
        recommend: false,
      },
      {
        id: '5',
        title: '项目案例5',
        desc: '项目案例5描述',
        content: '',
        mainImage:
          'https://resource.tuniaokj.com/images/publicity/publicity-vue2.jpg',
        tags: [],
        hotCount: 0,
        replyCount: 0,
        likeCount: 0,
        viewCount: 0,
        shareCount: 0,
        viewUsersAvatar: [],
        recommend: false,
      },
    ]
  }

  // 跳转到业务流程详情页
  const navBusinessProcessDetail = () => {
    tnNavPage('/detail-page/business-process-detail/index')
  }

  // 跳转到案例详情页
  const navCaseDetail = (id: string) => {
    tnNavPage(`/detail-page/article-detail/index?id=${id}&type=case`)
  }

  useSubPageProvide(2, {
    onLoad,
  })

  return {
    demoImages,
    businessCategoryData,
    projectCaseData,
    navBusinessProcessDetail,
    navCaseDetail,
  }
}
