import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home-page',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about-page',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/team',
      name: 'team-page',
      component: () => import('../views/TeamView.vue')
    },
    {
      path: '/contact',
      name: 'contact-page',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/settings',
      name: 'setting-page',
      component: () => import('../views/SettingView.vue')
    }
  ]
})

export default router
