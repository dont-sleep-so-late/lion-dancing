import { ref } from 'vue'
import type { CommonProblem } from '@/types/api/common-problem'

export const useProblemDetail = () => {
  const problemDetail = ref<CommonProblem>()

  const getProblemDetail = (id: string) => {
    problemDetail.value = {
      id,
      title: '常见问题',
      content: '常见问题详情',
    }
  }

  return {
    problemDetail,
    getProblemDetail,
  }
}
