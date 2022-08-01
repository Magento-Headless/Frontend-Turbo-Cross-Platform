const path = require('path')
const { defineConfig } = require('@vue/cli-service')

const SystemConfig = require('./config/system.conf')

const IS_PROD = ['production', 'test'].includes(process.env.NODE_ENV)

module.exports = defineConfig({
  filenameHashing: true,
  lintOnSave: false,
  productionSourceMap: false,
  transpileDependencies: true,
  css: {
    extract: IS_PROD,
    sourceMap: false,
    loaderOptions: {
      less: {
        lessOptions: {
          globalVars: {
            namespace: SystemConfig.antd.variables['ant-prefix']
          },
          math: 'always',
          modifyVars: SystemConfig.antd.variables,
          javascriptEnabled: true
        }
      }
    }
  },
  // devServer: {
  //   open: process.platform === 'darwin',
  //   host: 'localhost',
  //   port: 3000,
  //   https: false,
  //   proxy: {
  //     '/graphql': {
  //       target: process.env.VUE_APP_API_URL,
  //       changeOrigin: true,
  //       secure: false,
  //       pathRewrite: {
  //         '^/graphql': 'graphql'
  //       }
  //     }
  //   }
  // },
  chainWebpack: (config) => {
    // Remove the old entry and add the new one
    config.entry('app').clear().add('./bootstrap/main').end()

    config.resolve.alias
      .set('~', path.resolve(__dirname, './'))
      .set('@', path.resolve(__dirname, './'))
      .set(
        '@ant-design/icons/lib/dist$',
        path.resolve(__dirname, './components/Icons/icons.js')
      )

    config.plugin('html').tap((agrs) => {
      agrs[0].title = ''

      return agrs
    })
  }
})
