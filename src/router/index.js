import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoryWholesaleView from '../views/CategoryWholesaleView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cat-wholesale',
      name: 'Wholesale',
      component: CategoryWholesaleView
    },

  ]
})

export default router
