import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createWebHistory, createRouter } from 'vue-router'
import { createStore } from 'vuex'

import Login from '@/components/template/Login.vue'
import Home from '@/components/template/Home.vue'
import Users from '@/components/template/Users.vue'

const routes = [
  { path: '/login', component: Login },
  { path: '/', component: Home },
  { path: '/users', component: Users },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const user = localStorage.getItem('user')
  next()
})

const store = createStore({
  state: {
    isMenuVisible: true,
  },
})

createApp(App).use(store).use(router).mount('#app')
