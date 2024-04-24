import { ref } from 'vue'
import type { BusinessProcess } from '@/types/api/business-process'

export const useBusinessProcessDetail = () => {
  const businessProcessDetail = ref<BusinessProcess>({
    id: '1',
    title: '前端开发',
    consultCount: 123,
    data: [
      {
        title: '前端开发',
        data: ['基于图鸟UI进行开发，适配APP、微信小程序、H5的Uniapp应用'],
      },
      {
        title: '写在前面',
        data: [
          '初步了解，主要是看能不能聊得来，聊不来给高价也不接，毕竟追求的是合作愉快以及长期合作',
          '试稿? 白嫖? 请自重',
          '如果当月业务已满，可以群里找群友们合作',
        ],
      },
      {
        title: '初步沟通',
        data: ['是否有需求原型?如果没有原型或参考，是无法写前端的'],
      },
      {
        title: '评估报价',
        data: [
          '简单报价，大概一个页面300+，简单的页面可以送，交互复杂度较高的需沟通确认',
          '时间开发周期',
        ],
      },
      {
        title: '支付定金',
        data: ['项目内容描述'],
      },
      {
        title: '开发测试',
        data: ['项目内容描述'],
      },
      {
        title: '项目交付',
        data: ['项目内容描述'],
      },
      {
        title: '支付尾款',
        data: ['项目内容描述'],
      },
      {
        title: '注意事项',
        data: ['项目内容描述'],
      },
    ],
  })

  return {
    businessProcessDetail,
  }
}
