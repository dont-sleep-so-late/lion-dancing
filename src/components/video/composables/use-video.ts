import { ref } from 'vue'

export const useVidio = () => {
  // 视频
  const video = ref<string[]>([
    'https://v.qq.com/txp/iframe/player.html?vid=a0036h5o35h',
  ])

  return {
    video,
  }
}