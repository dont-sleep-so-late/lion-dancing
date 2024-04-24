import { ref } from 'vue'

export const useVidio = () => {
  // 视频
  const video = ref<string[]>([
    'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/2minute-demo.mp4',
  ])

  return {
    video,
  }
}