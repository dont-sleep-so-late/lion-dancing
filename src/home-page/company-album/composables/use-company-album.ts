import { ref } from 'vue'
import type { Album } from '@/types/api/album'
import { generateRandomNumber } from '@/utils/local-mock'

interface AlbumInfo {
  title : string
  desc : string
}

export const useCompanyAlbum = () => {
  // 相册信息
  const albumInfo = ref<AlbumInfo>({
    title: '精选图片',
    desc: '醒狮表演 & 志愿瞬间 & 课程培训 & 故事记录',
  })
  // 相册图片
  const albumList = ref<Album[]>([])

  // 生成相册图片
  const generateAlbumData = () => {
    const album : Album[] = [
      {
        id: generateRandomNumber(1, 100).toString(),
        title: '相册',
        image: `https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/lionDancing/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240424160203.jpg`,
      },
      {
        id: generateRandomNumber(1, 100).toString(),
        title: '相册',
        image: `https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/lionDancing/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240424160201.jpg`,
      },
      {
        id: generateRandomNumber(1, 100).toString(),
        title: '相册',
        image: `https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/lionDancing/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20240424160127.jpg`,
      },
      {
        id: generateRandomNumber(1, 100).toString(),
        title: '相册',
        image: `https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/lionDancing/1713929237490.jpg`,
      },
      {
        id: generateRandomNumber(1, 100).toString(),
        title: '相册',
        image: `https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/lionDancing/1713878439910.jpg`,
      },
      {
        id: generateRandomNumber(1, 100).toString(),
        title: '相册',
        image: `https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/lionDancing/1713878412366.jpg`,
      },
      {
        id: generateRandomNumber(1, 100).toString(),
        title: '相册',
        image: `https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/lionDancing/1713878406472.jpg`,
      },
      {
        id: generateRandomNumber(1, 100).toString(),
        title: '相册',
        image: `https://cdn.jsdelivr.net/gh/dont-sleep-so-late/CDN/lionDancing/1713878345680.jpg`,
      },
    ];
    albumList.value = albumList.value.concat(album)
  }
  generateAlbumData()

  return {
    albumInfo,
    albumList,
    generateAlbumData,
  }
}