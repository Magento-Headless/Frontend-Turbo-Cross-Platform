import { themes } from '@storybook/theming'

import { brandTheme } from './theme'

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
      ...brandTheme.dark
    },
    light: {
      ...themes.light,
      ...brandTheme.light
    }
  }
}
