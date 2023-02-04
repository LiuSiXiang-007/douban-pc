import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { storage, sessionStorage } from './utils/storage'

import '@assets/css/main.css'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'

const app = createApp(App)
app.config.globalProperties.storage = storage                   // 全局挂载 缓存方法(本地)
app.config.globalProperties.sessionStorage = sessionStorage     // 全局挂载 缓存方法(临时)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.mount('#app')
