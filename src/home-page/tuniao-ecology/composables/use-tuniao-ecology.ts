import { ref } from 'vue'
import type { Banner } from '@/types/api/banner'
import type { FriendLink } from '@/types/api/friend-link'

export const useTuniaoEcology = () => {
  // 顶部轮播数据
  const swiperData = ref<Banner[]>([
    {
      id: '1',
      name: 'banner1',
      image: 'https://resource.tuniaokj.com/images/swiper/fullbg4.jpg',
      secondImage: 'https://resource.tuniaokj.com/images/swiper/c4d1.png',
      title: '总有你想不到得创意',
      desc: '海量分享',
    },
    {
      id: '2',
      name: 'banner2',
      image: 'https://resource.tuniaokj.com/images/swiper/fullbg5.jpg',
      secondImage: 'https://resource.tuniaokj.com/images/swiper/c4d4.png',
      title: '寻找一起成长得小伙伴',
      desc: '愉快玩耍',
    },
    {
      id: '3',
      name: 'banner3',
      image: 'https://resource.tuniaokj.com/images/swiper/fullbg4.jpg',
      secondImage: 'https://resource.tuniaokj.com/images/swiper/c4d5.png',
      title: '跟多彩蛋等你探索',
      desc: '炫酷多彩',
    },
    {
      id: '4',
      name: 'banner4',
      image: 'https://resource.tuniaokj.com/images/swiper/fullbg5.jpg',
      secondImage: 'https://resource.tuniaokj.com/images/swiper/c4d6.png',
      title: '商业合作请联系作者',
      desc: '免费开源',
    },
  ])
  // 群友项目
  const groupFriendsData = ref<FriendLink[]>([
    {
      id: '1',
      title: '群友项目1',
      desc: '群友项目作者',
      image: 'https://resource.tuniaokj.com/images/logo/tuniao.jpg',
    },
    {
      id: '2',
      title: '群友项目2',
      desc: '群友项目作者',
      image: 'https://resource.tuniaokj.com/images/logo/tuniao.jpg',
    },
    {
      id: '3',
      title: '群友项目3',
      desc: '群友项目作者',
      image: 'https://resource.tuniaokj.com/images/logo/tuniao.jpg',
    },
    {
      id: '4',
      title: '群友项目4',
      desc: '群友项目作者',
      image: 'https://resource.tuniaokj.com/images/logo/tuniao.jpg',
    },
    {
      id: '5',
      title: '群友项目5',
      desc: '群友项目作者',
      image: 'https://resource.tuniaokj.com/images/logo/tuniao.jpg',
    },
    {
      id: '6',
      title: '群友项目6',
      desc: '群友项目作者',
      image: 'https://resource.tuniaokj.com/images/logo/tuniao.jpg',
    },
  ])
  // 友情链接
  const friendLinkData = ref<FriendLink[]>([
    {
      id: '1',
      title: '友情链接1',
      image: 'https://resource.tuniaokj.com/images/logo/tuniao.jpg',
    },
    {
      id: '2',
      title: '友情链接2',
      image: 'https://resource.tuniaokj.com/images/logo/tuniao.jpg',
    },
    {
      id: '3',
      title: '敬请期待',
      image: '',
    },
    {
      id: '4',
      title: '敬请期待',
      image: '',
    },
    {
      id: '5',
      title: '敬请期待',
      image: '',
    },
    {
      id: '6',
      title: '敬请期待',
      image: '',
    },
  ])
  // 图鸟项目
  const tuniaoProjectData = ref<FriendLink[]>([
    {
      id: '1',
      title: '使用文档',
      image: 'https://resource.tuniaokj.com/images/logo/tuniao.jpg',
      desc: '图鸟UI使用文档, 一文读懂图鸟UI',
    },
    {
      id: '2',
      title: '素材社区',
      image: 'https://resource.tuniaokj.com/images/logo/tuniao.jpg',
      desc: '图鸟素材均在此可以找到',
    },
    {
      id: '3',
      title: '图鸟UI',
      image: 'https://resource.tuniaokj.com/images/logo/tuniao.jpg',
      desc: '图鸟UI项目地址',
    },
  ])

  return {
    swiperData,
    groupFriendsData,
    friendLinkData,
    tuniaoProjectData,
  }
}
