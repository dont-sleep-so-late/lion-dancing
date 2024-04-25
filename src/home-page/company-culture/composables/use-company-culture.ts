import { ref } from 'vue'
import type { Banner } from '@/types/api/banner'

export const useCompanyCulture = () => {
  // 轮播数据
  const swiperData = ref<Banner[]>([
    {
      id: '1',
      name: '轮播图1',
      title: '海量分享',
      desc: '总有你想不到的周边',
      image: 'https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/lionDancing/1713929237490.jpg',
      secondImage: 'https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/lionDancing/denglong%20(1).jpg',
    },
    {
      id: '2',
      name: '轮播图2',
      title: '愉快玩耍',
      desc: '寻找一起成长的小伙伴',
      image: 'https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/lionDancing/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240424160154.jpg',
      secondImage: 'https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/lionDancing/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240424160156.jpg',
    },
    {
      id: '3',
      name: '轮播图3',
      title: '炫酷多彩',
      desc: '更多知识等你探索',
      image: 'https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/lionDancing/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240424160152.jpg',
      secondImage: 'https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/lionDancing/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240424160149.jpg',
    },
    {
      id: '4',
      name: '轮播图4',
      title: '悄悄来袭',
      desc: '商业合作请联系作者',
      image: 'https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/lionDancing/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240424160115.jpg',
      secondImage: 'https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/lionDancing/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240424160127.jpg',
    },
  ])

  return {
    swiperData,
  }
}