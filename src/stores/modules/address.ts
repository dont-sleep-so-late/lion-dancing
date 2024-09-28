import type { AddressItem } from '@/types/address'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAddressStore = defineStore(
  'address',
  () => {
    const selectedAddress = ref<AddressItem>()

    const changeSelectedAddress = (val: AddressItem) => {
      selectedAddress.value = val
    }

    return {
      selectedAddress,
      changeSelectedAddress,
    }
  },
  // TODO: 持久化
  {
    // 网页端配置
    // persist: true,
    // 小程序端配置
    persist: {
      storage: {
        getItem(key) {
          return uni.getStorageSync(key)
        },
        setItem(key, value) {
          uni.setStorageSync(key, value)
        },
      },
    },
  },
)
