import { getCurrentInstance } from 'vue'

export const useEmitter = () => {
  const currentInstance = getCurrentInstance()
  const { emitter } = currentInstance.appContext.config.globalProperties

  return emitter
}
