export const OrderStatusMap: {
  [key: number]: {
    label: string
    color: string
  }
} = {
  0: { label: '待付款', color: 'tn-gray_text' },
  1: { label: '待发货', color: 'tn-gray_text' },
  2: { label: '待收货', color: 'tn-gray_text' },
  3: { label: '待评价', color: 'tn-gray_text' },
  4: { label: '已完成', color: 'tn-gray_text' },
  5: { label: '已取消', color: 'tn-gray_text' },
}

export interface Order {
  id: string
  orderId: string
  title: string
  mainImage: string
  price: number
  status: number // 0: 待付款 1: 待发货 2: 待收货 3: 待评价 4: 已完成 5: 已取消
  date: string
}
