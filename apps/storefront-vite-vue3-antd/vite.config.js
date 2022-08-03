import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import pluginImp from 'vite-plugin-imp'

import { SystemConf } from './config/system.conf'

export default defineConfig({
  envPrefix: 'VUE_',
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: SystemConf.antd.variables
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
    pluginImp({
      libList: [
        {
          libName: 'lodash',
          libDirectory: '',
          camel2DashComponentName: false
        },
        {
          libName: 'ant-design-vue',
          style: (name) => `ant-design-vue/es/${name}/style`
        }
      ]
    })
  ],
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@components': path.resolve(__dirname, './components')
    }
  }
})
