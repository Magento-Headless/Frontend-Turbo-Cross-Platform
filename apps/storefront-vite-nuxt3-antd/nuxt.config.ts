import { defineNuxtConfig } from 'nuxt'

export default defineNuxtConfig({
  app: {
    baseURL: '/',
    buildAssetsDir: '/_nuxt/',
    cdnURL: ''
  },
  autoImports: {
    dirs: [
      'composables/**/*.ts'
    ]
  },
  builder: 'vite',
  devServerHandlers: [],
  extensions: ['.js', '.vue'],
  ignore: ['.output'],
  modules: [],
  ssr: true
})
