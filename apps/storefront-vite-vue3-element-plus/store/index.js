import { createStore, createLogger } from 'vuex'

import { appModule } from './app'
import { cartModule } from './cart'

const isDev = import.meta.env.MODE === 'development'
const plugins = []

if (isDev)
  plugins.push(
    createLogger({
      collapsed: false,
      logActions: true,
      logMutations: true,
      logger: console
    })
  )

export default createStore({
  strict: true,
  devtools: isDev,
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    app: appModule,
    cart: cartModule
  },
  plugins
})
