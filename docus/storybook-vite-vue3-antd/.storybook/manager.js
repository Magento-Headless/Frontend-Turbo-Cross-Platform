import { addons } from '@storybook/addons'
import { create } from '@storybook/theming'

// import logo from '../public/icons/icon-72x72.png'

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'My custom storybook',
    brandUrl: 'https://example.com',
    brandImage: 'https://place-hold.it/350x150',
    brandTarget: '_self'
  })
})
