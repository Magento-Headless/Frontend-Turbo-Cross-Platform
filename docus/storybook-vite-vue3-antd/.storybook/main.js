const { mergeConfig } = require('vite')

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
      }
    })
  }
}
