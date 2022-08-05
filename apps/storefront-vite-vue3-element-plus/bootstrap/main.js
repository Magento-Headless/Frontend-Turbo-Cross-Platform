import { createApp } from 'vue'

import { emitter } from '@utils'
import router from '@router'
import store from '@store'

import App from './App'

const app = createApp(App)

app.use(store).use(router).mount('#app')
app.config.globalProperties.emitter = emitter()
// Inject Emitter to window
window.emitter = emitter()
