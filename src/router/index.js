import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoryWholesaleView from '../views/CategoryWholesaleView.vue'
import ProductView from '../views/ProductView.vue'
import FlashSaleView from '../views/FlashSaleView.vue'
import LoginView from '../views/LoginView.vue'
import AddToCart from '../views/AddToCartView.vue'



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
    {
      path: '/product-view',
      name: 'Product View',
      component: ProductView
    },
    {
      path: '/flash-sale-view',
      name: 'Flash Sale View',
      component: FlashSaleView
    },
    {
      path: '/login',
      name: 'Login View',
      component: LoginView
    },
    {
      path: '/add-cart',
      name: 'AddCart',
      component: AddToCart
    },

  ]
})

export default router
