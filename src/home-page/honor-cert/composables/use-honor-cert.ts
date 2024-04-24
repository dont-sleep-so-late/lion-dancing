import { ref } from 'vue'
import type { Album } from '@/types/api/album'

export const useHonorCert = () => {
  // 荣誉证书列表
  const honorCertList = ref<Album[]>([
    {
      id: '1',
      title: '高新技术企业',
      image:
        'https://resource.tuniaokj.com/images/publicity/publicity-vue2.jpg',
      desc: '2023年',
    },
    {
      id: '2',
      title: 'AAA级信用企业',
      image:
        'https://resource.tuniaokj.com/images/publicity/publicity-vue2.jpg',
      desc: '2022年',
    },
    {
      id: '3',
      title: 'AAA级信用企业',
      image:
        'https://resource.tuniaokj.com/images/publicity/publicity-vue2.jpg',
      desc: '2021年',
    },
    {
      id: '4',
      title: 'AAA级信用企业',
      image:
        'https://resource.tuniaokj.com/images/publicity/publicity-vue2.jpg',
      desc: '2020年',
    },
    {
      id: '5',
      title: 'AAA级信用企业',
      image:
        'https://resource.tuniaokj.com/images/publicity/publicity-vue2.jpg',
      desc: '2019年',
    },
    {
      id: '6',
      title: 'AAA级信用企业',
      image:
        'https://resource.tuniaokj.com/images/publicity/publicity-vue2.jpg',
      desc: '2018年',
    },
    {
      id: '7',
      title: 'AAA级信用企业',
      image:
        'https://resource.tuniaokj.com/images/publicity/publicity-vue2.jpg',
      desc: '2017年',
    },
    {
      id: '8',
      title: 'AAA级信用企业',
      image:
        'https://resource.tuniaokj.com/images/publicity/publicity-vue2.jpg',
      desc: '2016年',
    },
    {
      id: '9',
      title: 'AAA级信用企业',
      image:
        'https://resource.tuniaokj.com/images/publicity/publicity-vue2.jpg',
      desc: '2015年',
    },
    {
      id: '10',
      title: 'AAA级信用企业',
      image:
        'https://resource.tuniaokj.com/images/publicity/publicity-vue2.jpg',
      desc: '2014年',
    },
    {
      id: '11',
      title: 'AAA级信用企业',
      image:
        'https://resource.tuniaokj.com/images/publicity/publicity-vue2.jpg',
      desc: '2013年',
    },
    {
      id: '12',
      title: 'AAA级信用企业',
      image:
        'https://resource.tuniaokj.com/images/publicity/publicity-vue2.jpg',
      desc: '2012年',
    },
    {
      id: '13',
      title: 'AAA级信用企业',
      image:
        'https://resource.tuniaokj.com/images/publicity/publicity-vue2.jpg',
      desc: '2011年',
    },
    {
      id: '14',
      title: 'AAA级信用企业',
      image:
        'https://resource.tuniaokj.com/images/publicity/publicity-vue2.jpg',
      desc: '2010年',
    },
  ])

  return {
    honorCertList,
  }
}
