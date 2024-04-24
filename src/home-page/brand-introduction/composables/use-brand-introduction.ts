import { getCurrentInstance, ref } from 'vue'
import type { NavbarRectInfo } from '@tuniao/tnui-vue3-uniapp/components/navbar'
import type { Banner } from '@/types/api/banner'
import { useScrollTransparentNavbar } from '@/hooks'

interface AuthorInfo {
  nickname: string
  office: string
  company: string
  avatar: string
  wechat: string
  wechatCode: string
}

export const useBrandIntroduction = () => {
  const instance = getCurrentInstance()
  // 顶部轮播图
  const swiperData = ref<Banner[]>([
    {
      id: '1',
      name: '品牌介绍-1',
      image: 'https://resource.tuniaokj.com/images/shop/cup1.jpg',
      title: 'BUG再多',
      desc: '也别忘了',
      remark: '可以无限续杯',
    },
    {
      id: '2',
      name: '品牌介绍-2',
      image: 'https://resource.tuniaokj.com/images/swiper/read.jpg',
      title: '图鸟南南',
      desc: '欢迎加入东东们',
      remark: '如果你也有不错的产品',
    },
    {
      id: '3',
      name: '品牌介绍-3',
      image: 'https://resource.tuniaokj.com/images/swiper/swiper2.jpg',
      title: '图鸟西西',
      desc: '一起玩转图鸟UI',
      remark: '用最少的代码实现最骚的操作',
    },
    {
      id: '4',
      name: '品牌介绍-4',
      image: 'https://resource.tuniaokj.com/images/swiper/swiper3.jpg',
      title: '图鸟北北',
      desc: '微信号 tnkewo',
      remark: '商业合作联系作者',
    },
    {
      id: '5',
      name: '品牌介绍-5',
      image: 'https://resource.tuniaokj.com/images/swiper/job.jpg',
      title: '图鸟猪猪',
      desc: '努力成为大佬',
      remark: '一起加油吖',
    },
  ])
  // 品牌介绍富文本
  const brandIntroductionData = ref<string>('')
  // 作者信息
  const authorInfo = ref<AuthorInfo>({
    nickname: '图鸟凶姐',
    office: '高级UI设计师',
    company: '化州市图鸟科技有限公司',
    avatar: 'https://resource.tuniaokj.com/images/xiongjie/x14.jpg',
    wechat: 'tnkewo',
    wechatCode:
      'https://resource.tuniaokj.com/images/gitee_introduce_file/bottom.jpg',
  })
  // 显示作者信息弹框
  const showAuthorCodeInfo = ref<boolean>(false)

  const {
    triggerElementId,
    navbarOpacity,
    init: initTransparentScroll,
    updateTargetTriggerValue,
    opacityScrollHandle,
  } = useScrollTransparentNavbar(instance)

  // 弹出作者信息弹框
  const openAuthorCodeInfo = () => {
    showAuthorCodeInfo.value = true
  }

  // 复制作者微信
  const copyAuthorWechat = () => {
    uni.setClipboardData({
      data: authorInfo.value.wechat,
      success: () => {
        uni.showToast({
          title: '复制成功',
          icon: 'none',
        })
      },
    })
  }

  // 预览作者微信二维码
  const previewAuthorWechatCode = () => {
    uni.previewImage({
      urls: [authorInfo.value.wechatCode],
    })
  }

  // 顶部导航栏初始化完成事件
  const navbarInitFinishHandle = (info: NavbarRectInfo) => {
    updateTargetTriggerValue(info.height)
  }

  return {
    instance,
    triggerElementId,
    navbarOpacity,
    swiperData,
    brandIntroductionData,
    authorInfo,
    showAuthorCodeInfo,
    initTransparentScroll,
    opacityScrollHandle,
    navbarInitFinishHandle,
    openAuthorCodeInfo,
    copyAuthorWechat,
    previewAuthorWechatCode,
  }
}
