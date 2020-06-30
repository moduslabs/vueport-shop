import { createWebHistory } from 'vue-router'
import { createRouter } from '@modus/ionic-vue'

const home = () => import('@/views/Home.vue')
const category = () => import('@/components/Category.vue')
const about = () => import('@/views/About.vue')
const productDetails = () => import('@/components/ProductDetails.vue')
const cart = () => import('@/components/Cart.vue')

const history = createWebHistory()
const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: home,
      meta: {
        title: 'Home Page - Vue-Port Shop',
      },
    },
    {
      path: '/category/:categoryId',
      component: category,
      meta: {
        title: 'Category - Vue-Port Shop',
      },
    },
    {
      path: '/product/:productId',
      component: productDetails,
      meta: {
        title: 'Product - Vue-Port Shop',
      },
    },
    {
      path: '/about',
      component: about,
      meta: {
        title: 'About - Vue-Port Shop',
      },
    },
    {
      path: '/cart',
      component: cart,
      meta: {
        title: 'Cart - Vue-Port Shop',
      },
    },
  ],
})

export default router
