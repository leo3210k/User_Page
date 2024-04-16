import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createWebHistory, createRouter } from 'vue-router'

import Home from '@/components/Home.vue'

const routes = [
  { path: '/', component: Home },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
