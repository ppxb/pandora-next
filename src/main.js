import routes from 'virtual:generated-pages'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createPinia } from 'pinia'

import '~/assets/styles/main.css'

import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()
const router = createRouter({
  history: createWebHistory(),
  routes
})

app.use(pinia)
app.use(router)
app.mount('#app')
