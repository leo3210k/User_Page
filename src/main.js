import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createWebHistory, createRouter } from 'vue-router'

import Login from '@/components/template/Login.vue'
import Home from '@/components/template/Home.vue'

const routes = [
  { path: '/login', component: Login },
  { path: '/', component: Home },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App).use(router).mount('#app')
