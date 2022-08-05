import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../pages/home'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/view',
    name: 'view',
    component: () => import(/* webpackChunkName: "view" */ '../pages/view')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
