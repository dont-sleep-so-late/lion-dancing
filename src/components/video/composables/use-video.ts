import { ref } from 'vue'

export const useVidio = () => {
  // 视频
  const video = ref<string[]>([
    '//player.bilibili.com/player.html?aid=385636945&bvid=BV16Z4y1a7d4&cid=765567103&p=1',
  ])

  return {
    video,
  }
}