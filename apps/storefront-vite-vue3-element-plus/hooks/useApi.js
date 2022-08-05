import axios from 'axios'
import { useAxios } from '@vueuse/integrations/useAxios'

export const useApi = (url, config = {}, options = {}) => {
  const instance = axios.create({
    baseURL: '/',
    timeout: 1000,
    headers: {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    }
  })

  instance.interceptors.request.use(
    (params) => {
      return params
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  instance.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  return useAxios(url, config, instance, { immediate: false, ...options })
}
