import { ref } from 'vue'
import { tnNavPage } from '@tuniao/tnui-vue3-uniapp/utils'
import type { NavbarRectInfo } from '@tuniao/tnui-vue3-uniapp/components/navbar'
import type { IndexPageOnLoadFunc } from '@/pages/index/types'
import type { Category } from '@/types/api/category'
import type { Banner } from '@/types/api/banner'
import type { Product } from '@/types/api/product'
import { useSubPageProvide } from '@/pages/index/composables'
import { generateRandomFloat, generateRandomNumber } from '@/utils/local-mock'

interface ProductData {
  banners : Banner[]
  products : Product[]
  isLoad : boolean
}

export const useSubPage = () => {
  // 导航栏的高度
  const navbarHeight = ref(0)
  // 分类数据
  // 当前选中的分类索引
  const currentCategoryIndex = ref(0)
  const categoryList = ref<Category[]>([])
  // 产品数据
  const categoryProductData = ref<ProductData[]>([])

  // 跳转到搜索页面
  const navSearchPage = () => {
    tnNavPage('/home-page/search/index')
  }

  // 导航栏初始化完毕
  const navbarInitFinishHandle = (info : NavbarRectInfo) => {
    navbarHeight.value = info.height
  }

  // 分类切换事件
  const categoryChangeHandle = (index : string | number) => {
    if (!categoryProductData.value[index as number]?.banners?.length) {
      categoryProductData.value[index as number].banners = Array.from({
        length: 5,
      }).map(() => generateBanner())
      categoryProductData.value[index as number].products = Array.from({
        length: 20,
      }).map(() => generateProductData())
    }
  }

  // 生成产品数据
  const generateProductData = () : Product => {
    return {
      id: generateRandomNumber(1, 100).toString(),
      title: '醒狮周边',
      desc: '醒狮周边，是一套你值得拥有的醒狮周边',
      images: [
        '/src/assets/shop/baijian.png',
        '/src/assets/shop/bianlitie.jpg',
        '/src/assets/shop/bingxiangtie.jpg',
        '/src/assets/shop/chezaishiping.jpg',
        '/src/assets/shop/cixiu (1).jpg',
        '/src/assets/shop/cixiu (2).jpg',
        '/src/assets/shop/denglong (1).jpg',
        '/src/assets/shop/denglong (2).jpg',
        '/src/assets/shop/dingshuji (1).jpg',
        '/src/assets/shop/dingshuji (2).jpg',
        '/src/assets/shop/gouwudai.jpg',
        '/src/assets/shop/huaban.jpg',
        '/src/assets/shop/huizhang.jpg',
        '/src/assets/shop/jiaobu.jpg',
        '/src/assets/shop/jimu.jpg',
        '/src/assets/shop/jimu2 (1).jpg',
        '/src/assets/shop/jimu2 (2).jpg',
        '/src/assets/shop/jimu2 (3).jpg',
        '/src/assets/shop/jimu2 (4).jpg',
        '/src/assets/shop/maozi.jpg',
        '/src/assets/shop/qichepaijian.jpg',
        '/src/assets/shop/shizitou.jpg',
        '/src/assets/shop/shoujike.jpg',
        '/src/assets/shop/shubiaodian.jpg',
        '/src/assets/shop/shuiping.jpg',
        '/src/assets/shop/shuzhibaijian (1).jpg',
        '/src/assets/shop/shuzhibaijian (2).jpg',
        '/src/assets/shop/shuzhibaijian (3).jpg',
        '/src/assets/shop/shuzhibaijian (4).jpg',
        '/src/assets/shop/shuzhibaijian (5).jpg',
        '/src/assets/shop/stone (1).jpg',
        '/src/assets/shop/stone (2).jpg',
        '/src/assets/shop/taicui.jpg',
        '/src/assets/shop/taoyi.jpg',
        '/src/assets/shop/xiongshi.jpg',
        '/src/assets/shop/yanzhao.jpg',
      ].sort(() => Math.random() - 0.5),
      price: generateRandomFloat(1, 200),
      sale: generateRandomNumber(1, 1000),
      content: '醒狮周边，是一套你值得拥有的醒狮周边',
      attributes: [
        {
          name: '可获取积分',
          value: '2积分',
        },
        {
          name: '授权方式',
          value: '单独购买',
        },
      ],
      tags: ['热销', '推荐', '新品'].slice(0, generateRandomNumber(1, 3)),
    }
  }
  // 生成轮播图
  const generateBanner = () : Banner => {
    return {
      id: generateRandomNumber(1, 100).toString(),
      name: '图鸟模板',
      image: [
        '/src/assets/shop/baijian.png',
        '/src/assets/shop/bianlitie.jpg',
        '/src/assets/shop/bingxiangtie.jpg',
        '/src/assets/shop/chezaishiping.jpg',
        '/src/assets/shop/cixiu (1).jpg',
        '/src/assets/shop/cixiu (2).jpg',
      ][generateRandomNumber(0, 5)],
    }
  }

  const onLoad : IndexPageOnLoadFunc = () => {
    categoryList.value = [
      {
        id: '1',
        name: '推荐',
        icon: 'logo-tuniao',
      },
      {
        id: '2',
        name: '最新',
        icon: 'logo-tuniao',
      },
      {
        id: '3',
        name: '最热',
        icon: 'logo-tuniao',
      },
    ]
    categoryProductData.value = Array.from({
      length: categoryList.value.length,
    }).map(() => ({
      banners: [],
      products: [],
      isLoad: false,
    }))
    // 设置第一个分类的数据
    categoryProductData.value[0].banners = Array.from({
      length: 5,
    }).map(() => generateBanner())
    categoryProductData.value[0].products = Array.from({
      length: 20,
    }).map(() => generateProductData())
    categoryProductData.value[0].isLoad = true
  }

  useSubPageProvide(1, {
    onLoad,
  })

  return {
    navbarHeight,
    currentCategoryIndex,
    categoryList,
    categoryProductData,
    navbarInitFinishHandle,
    navSearchPage,
    categoryChangeHandle,
  }
}