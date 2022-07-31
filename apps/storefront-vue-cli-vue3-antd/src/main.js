import { createApp } from 'vue'

import router from './router'
import store from './store'
import App from './App'
import './registerServiceWorker'

createApp(App).use(store).use(router).mount('#app')
