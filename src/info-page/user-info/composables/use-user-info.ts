import { ref } from 'vue'
import type { StoreUser } from '@/types/store/user'

export const useUserInfo = () => {
  // 用户信息
  const userInfo = ref<StoreUser>({
    uid: '1',
    nickname: '不许凶我吖',
    username: '',
    avatar: 'https://resource.tuniaokj.com/images/avatar/xiong.jpg',
    phone: '18888888888',
    sex: 2,
    desc: '静下心来，做好图鸟',
    birthday: '1995-06-01',
    profession: '前端开发',
  })

  // 显示修改用户信息弹框
  const showUpdateUserInfoPopup = ref<boolean>(false)
  // 显示性别选择弹框
  const showSexPicker = ref<boolean>(false)
  const sexPickerData = [
    { label: '男', value: 1 },
    { label: '女', value: 2 },
    { label: '保密', value: 0 },
  ]
  // 显示生日选择弹框
  const showBirthdayPicker = ref<boolean>(false)
  // 显示职业选择弹框
  const showProfessionPicker = ref<boolean>(false)
  const professionPickerData = [
    '前端开发',
    '后端开发',
    '产品经理',
    'UI设计师',
    '运营',
  ]

  const openUpdateUserInfoPopup = () => {
    showUpdateUserInfoPopup.value = true
  }
  const openSexPicker = () => {
    showSexPicker.value = true
  }
  const openBirthdayPicker = () => {
    showBirthdayPicker.value = true
  }
  const openProfessionPicker = () => {
    showProfessionPicker.value = true
  }

  return {
    userInfo,
    showUpdateUserInfoPopup,
    showSexPicker,
    showBirthdayPicker,
    showProfessionPicker,
    sexPickerData,
    professionPickerData,
    openUpdateUserInfoPopup,
    openSexPicker,
    openBirthdayPicker,
    openProfessionPicker,
  }
}
