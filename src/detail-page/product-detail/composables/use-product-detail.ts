import { getCurrentInstance, ref } from 'vue'
import type { Product } from '@/types/api/product'
import type { NavbarRectInfo } from '@tuniao/tnui-vue3-uniapp/components/navbar'
import { generateRandomFloat, generateRandomNumber } from '@/utils/local-mock'
import { useScrollTransparentNavbar } from '@/hooks'

export const useProductDetail = () => {
  const instance = getCurrentInstance()
  const product = ref<Product>()

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
  product.value = generateProductData()

  const {
    triggerElementId,
    navbarOpacity,
    init: initTransparentScroll,
    updateTargetTriggerValue,
    opacityScrollHandle,
  } = useScrollTransparentNavbar(instance)

  // 顶部导航栏初始化完成事件
  const navbarInitFinishHandle = (info : NavbarRectInfo) => {
    updateTargetTriggerValue(info.height)
  }

  return {
    triggerElementId,
    navbarOpacity,
    product,
    initTransparentScroll,
    opacityScrollHandle,
    navbarInitFinishHandle,
  }
}