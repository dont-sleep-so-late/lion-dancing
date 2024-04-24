import { getCurrentInstance, onMounted, ref } from 'vue'
import { tnNavPage } from '@tuniao/tnui-vue3-uniapp/utils'
import { useSubPageProvide } from '../../../composables'
import type { NavbarRectInfo } from '@tuniao/tnui-vue3-uniapp/components/navbar'
import type { IndexPageOnLoadFunc, IndexPageOnScrollFunc } from '../../../types'
import type { Category } from '@/types/api/category'

import { useScrollTransparentNavbar } from '@/hooks'
import { ColorType } from '@/types/color'

export const useSubPage = () => {
  const instance = getCurrentInstance()
  // 顶部轮播图
  const swiperData = ref<string[]>([
    '/src/assets/bg/1713878345680.jpg',
    '/src/assets/bg/1713878406472.jpg',
    '/src/assets/bg/1713878412366.jpg',
    '/src/assets/bg/1713929237490.jpg',
  ])

  // 热门分类
  const hotCategoryData = ref<Category[]>([
    {
      id: '1',
      name: '精选图片',
      icon: 'image',
      backgroundColor: {
        type: ColorType.select,
        value: '#3c7efe',
      },
      url: '/home-page/company-album/index',
      // url: '/home-page/brand-introduction/index',
    },
    {
      id: '2',
      name: '视频专区',
      icon: 'video-square',
      backgroundColor: {
        type: ColorType.select,
        value: '#2be9bb',
      },
      url: '/home-page/win-win/index',
    },
    {
      id: '3',
      name: '新闻中心',
      icon: 'reply',
      backgroundColor: {
        type: ColorType.select,
        value: '#e93c32',
      },
      url: '/home-page/topic-community/index',
    },
    {
      id: '4',
      name: '地图导航',
      icon: 'map',
      backgroundColor: {
        type: ColorType.select,
        value: '#ffa929',
      },
      url: '/home-page/tuniao-ecology/index',
    },
  ])

  // 通知数据
  const noticeData = ref<string[]>([
    '欢迎来到狮业有承小程序，祝你有一段美好的旅程!',
    '狮业有承，事业有成！',
  ])

  // 广告胶囊
  const adCapsuleData = ref<string>(
    'https://resource.tuniaokj.com/images/swiper/capsule1.png'
  )

  // 最新资讯
  const hotCaseData = ref<string[]>([
    '/src/assets/bg/微信图片_20240424155803.jpg',
    '/src/assets/bg/微信图片_20240424160105.jpg',
    '/src/assets/bg/微信图片_20240424160112.jpg',
  ])

  const {
    triggerElementId,
    navbarOpacity,
    init: initTransparentScroll,
    updateTargetTriggerValue,
    opacityScrollHandle,
  } = useScrollTransparentNavbar(instance)

  onMounted(() => {
    initTransparentScroll()
  })

  // 顶部导航栏初始化完成事件
  const navbarInitFinishHandle = (info : NavbarRectInfo) => {
    updateTargetTriggerValue(info.height)
  }

  // 跳转到关于图鸟页面
  const navAboutPage = () => {
    tnNavPage('/tuniao/about/index')
  }

  // 跳转到搜索页面
  const navSearchPage = () => {
    tnNavPage('/home-page/search/index')
  }

  const onLoad : IndexPageOnLoadFunc = () => {
    // eslint-disable-next-line no-console
    console.log('pageA onLoad')
  }
  const onScroll : IndexPageOnScrollFunc = ({ top }) => {
    opacityScrollHandle(top)
  }

  useSubPageProvide(0, {
    onLoad,
    onScroll,
  })

  return {
    triggerElementId,
    navbarOpacity,
    swiperData,
    hotCategoryData,
    noticeData,
    adCapsuleData,
    hotCaseData,
    tnNavPage,
    navbarInitFinishHandle,
    navAboutPage,
    navSearchPage,
  }
}