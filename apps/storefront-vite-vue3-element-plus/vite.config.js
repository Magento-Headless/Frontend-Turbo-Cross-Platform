import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import eslint from 'vite-plugin-eslint'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import { visualizer } from 'rollup-plugin-visualizer'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), 'VUE_') }

  return defineConfig({
    envPrefix: 'VUE_',
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "./styles/index.scss" as *;`
        }
      }
    },
    plugins: [
      eslint({
        cache: false,
        fix: true
      }),
      legacy({
        targets: ['> 1%, last 1 version, ie >= 11'],
        additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
        polyfills: true,
        renderLegacyChunks: false
      }),
      vue(),
      autoImport({
        dts: false,
        resolvers: [ElementPlusResolver()]
      }),
      components({
        dts: false,
        resolvers: [
          ElementPlusResolver({
            importStyle: 'sass'
          })
        ]
      }),
      process.env.VUE_BUNDLE_VISUALIZE === '1' &&
        visualizer({
          open: true,
          gzipSize: true,
          brotliSize: true
        })
    ],
    resolve: {
      extensions: ['.js', '.vue'],
      alias: {
        '@components': path.resolve(__dirname, './components')
      }
    }
  })
}
