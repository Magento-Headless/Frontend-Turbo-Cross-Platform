import { defineConfig, loadEnv } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import banner from 'vite-plugin-banner'
import autoImport from 'unplugin-auto-import/vite'
import components from 'unplugin-vue-components/vite'
import { visualizer } from 'rollup-plugin-visualizer'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import pkg from './package.json'

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
      banner(
        `/**\n * name: ${pkg.name}\n * version: v${pkg.version}\n * author: ${pkg.author}\n * version: ${pkg.version}\n * copyright: ${pkg.copyright}\n */`
      ),
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
        '@components': path.resolve(__dirname, './components'),
        '@hooks': path.resolve(__dirname, './hooks'),
        '@pages': path.resolve(__dirname, './pages'),
        '@router': path.resolve(__dirname, './router'),
        '@store': path.resolve(__dirname, './store'),
        '@utils': path.resolve(__dirname, './utils')
      }
    },
    server: {
      host: 'localhost',
      port: 3000,
      https: false,
      open: true,
      proxy: {
        '/api-graphql': {
          target: process.env.REACT_APP_GRAPHQL_URL,
          changeOrigin: true,
          secure: false,
          rewrite: (url) => url.replace(/^\/api-graphql/, 'graphql')
        },
        '/rest': {
          target: process.env.REACT_APP_GRAPHQL_URL,
          changeOrigin: true,
          secure: false,
          rewrite: (url) => url.replace(/^\/rest/, 'rest')
        }
      },
      cors: true,
      hmr: true
    }
  })
}
