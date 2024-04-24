import { ref } from 'vue'
import type { NavbarRectInfo } from '@tuniao/tnui-vue3-uniapp/components/navbar'
import type { Order } from '../types'

export const useOrderList = () => {
  // 导航栏的高度
  const navbarHeight = ref(0)
  // 当前激活的分类
  const currentActiveCategoryIndex = ref(0)
  // 订单分类数据
  const orderCategory = ref([
    { label: '全部', value: -1, count: 0 },
    { label: '待付款', value: 0, count: 0 },
    { label: '待收货', value: 2, count: 12 },
    { label: '已完成', value: 4, count: 0 },
  ])
  // 订单数据
  const orderListData = ref<[Order[], Order[], Order[], Order[]]>([
    [],
    [],
    [],
    [],
  ])

  const generateOrderData = () => {
    orderListData.value.forEach((_, index) => {
      const data = Array.from({
        length: Math.floor(Math.random() * 20) + 1,
      }).map(() => _generateOrder(orderCategory.value[index].value))
      orderListData.value[index] = data
    })
  }

  // 导航栏初始化完毕
  const navBarInitFinishHandle = (info: NavbarRectInfo) => {
    navbarHeight.value = info.height
  }

  // 生成模拟订单数据
  const _generateOrder = (status = -1): Order => ({
    id: Math.random().toString(36).slice(2),
    orderId: Math.random().toString(36).slice(2),
    title: '图鸟官方设计 酷炫效果展示让用户眼前一亮的赶脚',
    mainImage:
      'https://resource.tuniaokj.com/images/publicity/publicity-vue2.jpg',
    price: Number.parseFloat((Math.random() * 4000 + 500).toFixed(2)),
    status: status === -1 ? Math.floor(Math.random() * 5) : status,
    date: '2020-11-11 11:11:11',
  })

  return {
    navbarHeight,
    currentActiveCategoryIndex,
    orderCategory,
    orderListData,
    generateOrderData,
    navBarInitFinishHandle,
  }
}
