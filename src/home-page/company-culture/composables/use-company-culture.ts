import { ref } from 'vue'
import type { Banner } from '@/types/api/banner'

export const useCompanyCulture = () => {
  // 轮播数据
  const swiperData = ref<Banner[]>([
    {
      id: '1',
      name: '轮播图1',
      title: '海量分享',
      desc: '总有你想不到的创意',
      image: 'https://resource.tuniaokj.com/images/swiper/guide-bg1.jpg',
      secondImage: 'https://resource.tuniaokj.com/images/swiper/c4d7.png',
    },
    {
      id: '2',
      name: '轮播图2',
      title: '愉快玩耍',
      desc: '寻找一起成长的小伙伴',
      image: 'https://resource.tuniaokj.com/images/swiper/guide-bg2.jpg',
      secondImage: 'https://resource.tuniaokj.com/images/swiper/c4d8.png',
    },
    {
      id: '3',
      name: '轮播图3',
      title: '炫酷多彩',
      desc: '更多彩蛋等你探索',
      image: 'https://resource.tuniaokj.com/images/swiper/guide-bg3.jpg',
      secondImage: 'https://resource.tuniaokj.com/images/swiper/c4d9.png',
    },
    {
      id: '4',
      name: '轮播图4',
      title: '悄悄来袭',
      desc: '商业合作请联系作者',
      image: 'https://resource.tuniaokj.com/images/swiper/guide-bg4.jpg',
      secondImage: 'https://resource.tuniaokj.com/images/swiper/c4d10.png',
    },
  ])

  return {
    swiperData,
  }
}
