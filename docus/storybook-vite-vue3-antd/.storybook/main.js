const { mergeConfig } = require('vite')
const pluginImp = require('vite-plugin-imp')

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-interactions',
    'storybook-dark-mode'
  ],
  framework: '@storybook/vue3',
  core: {
    builder: '@storybook/builder-vite'
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      define: {
        ...config.define,
        global: 'window'
      },
      css: {
        preprocessorOptions: {
          less: {
            javascriptEnabled: true
          }
        }
      },
      resolve: {
        extensions: ['.js', '.vue']
      },
      plugins: [
        pluginImp({
          libList: [
            {
              libName: 'ant-design-vue',
              style: (name) => `ant-design-vue/es/${name}/style`
            }
          ]
        })
      ]
    })
  }
}
