import { createWebHistory } from 'vue-router'
import { createRouter } from '@modus/ionic-vue'

const home = () => import('@/views/Home.vue')
const category = () => import('@/components/Category.vue')
const about = () => import('@/views/About.vue')
const productDetails = () => import('@/components/ProductDetails.vue')
const checkout = () => import('@/views/Checkout.vue')
const cart = () => import('@/views/Cart.vue')
const orderCompleted = () => import('@/views/OrderCompleted.vue')
const history = createWebHistory()
const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: home,
      children: [
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
      ],
      meta: {
        title: 'Home Page - Vue-Port Shop',
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
      path: '/checkout',
      component: checkout,
      meta: {
        title: 'Checkout - Vue-Port Shop',
      },
    },
    {
      path: '/cart',
      component: cart,
      meta: {
        title: 'Cart - Vue-Port Shop',
      },
    },
    {
      path: '/ordercompleted',
      component: orderCompleted,
      meta: {
        title: 'Order Completed - Vue-Port Shop',
      },
    },
  ],
})

export default router
