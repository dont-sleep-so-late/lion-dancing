import { ref } from 'vue'
import { useUniAppSystemRectInfo } from '@tuniao/tnui-vue3-uniapp/hooks'
import { tnNavPage } from '@tuniao/tnui-vue3-uniapp/utils'
import type { StoreUser } from '@/types/store/user'
import { useSubPageProvide } from '@/pages/index/composables'
import { generateRandomNumber } from '@/utils/local-mock'

export const useSubPage = () => {
  const { navBarInfo } = useUniAppSystemRectInfo()

  // 用户信息
  const userInfo = ref<StoreUser>()

  // 点击获取用户信息
  const loginHandle = () => {
    uni.showLoading({
      title: '登录中...',
      mask: true,
    })
    setTimeout(() => {
      uni.hideLoading()
      userInfo.value = {
        uid: generateRandomNumber(100000, 999999).toString(),
        nickname: '不许凶我吖',
        username: '',
        avatar: 'https://resource.tuniaokj.com/images/avatar/xiong.jpg',
        sex: 0,
        phone: '',
        desc: '',
        birthday: '',
        profession: '',
      }
    }, 1500)
  }

  // 跳转到个人信息页面
  const navUserInfoPage = () => {
    tnNavPage('/info-page/user-info/index')
  }

  // 跳转到常见问题页面
  const navCommonProblemPage = () => {
    tnNavPage('/info-page/common-problem/index')
  }

  // 跳转到会员权益页面
  const navMemberRightsPage = () => {
    tnNavPage('/info-page/member-rights/index')
  }

  // 跳转到订单列表页面
  const navOrderListPage = () => {
    tnNavPage('/order-page/order-list/index')
  }

  useSubPageProvide(4)

  return {
    navBarInfo,
    userInfo,
    loginHandle,
    navUserInfoPage,
    navCommonProblemPage,
    navMemberRightsPage,
    navOrderListPage,
  }
}
