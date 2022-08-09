import { themes } from '@storybook/theming'

export const parameters = {
  actions: {
    argTypesRegex: '^on[A-Z].*'
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  darkMode: {
    current: 'light',
    dark: {
      ...themes.dark,
      appBg: 'black'
    },
    light: {
      ...themes.light,
      appBg: 'white'
    }
  }
}
