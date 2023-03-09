import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/display.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/pages/home.vue')
      },
      {
        path: '/favorites',
        name: 'fav',
        component: () => import('@/views/pages/fav.vue')
      },
      {
        path: '/finished',
        name: 'tried',
        component: () => import('@/views/pages/tried.vue')
      },
      { 
        path: '/settings',
        name: 'settings',
        component: () => import('@/views/pages/settings.vue')
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
