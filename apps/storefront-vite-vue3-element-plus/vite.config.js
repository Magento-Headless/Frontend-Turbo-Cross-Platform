import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  envPrefix: 'VUE_',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "~/styles/index.scss" as *;`
      }
    }
  },
  plugins: [
    legacy({
      targets: ['> 1%, last 1 version, ie >= 11'],
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      polyfills: true,
      renderLegacyChunks: false
    }),
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@components': path.resolve(__dirname, './components')
    }
  }
})
