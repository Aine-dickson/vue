import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/display.vue'),
    children: [
      {
        path: '/',
        name: 'main',
        component: () => import('@/views/includes/main.vue'),
        children: [
          {
            path: '/',
            name: 'home',
            component: () => import('@/views/pages/home.vue')
          },
          {
            path: 'favorites',
            name: 'fav',
            component: () => import('@/views/pages/fav.vue')
          },
          {
            path: 'history',
            name: 'history',
            component: () => import('@/views/pages/history.vue')
          },
          { 
            path: 'settings',
            name: 'settings',
            component: () => import('@/views/pages/settings.vue')
          },
          { 
            path: 'profile',
            name: 'profile',
            component: () => import('@/views/pages/profile.vue')
          },
        ]
      },
      // {
      //   path: '/aside',
      //   name: 'aside',
      //   component: () => import('@/views/includes/aside.vue'),
      //   children: [
      //     {
      //       path: '/recipes/:id',
      //       name: 'details',
      //       props: true,
      //       component: () => import('@/components/detailedRecipe.vue')
      //     }
      //   ]
      // }
    ]
  },
  // {
  //   path: '/aside',
  //   name: 'aside',
  //   component: () => import('@/views/includes/aside.vue'),
  //   children:[
  //     {
  //       path: '/recipes/:id',
  //       name: 'details',
  //       components: () => import('@/components/detailedRecipe.vue')
  //     }
  //   ]
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
