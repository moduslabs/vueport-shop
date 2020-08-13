import { createWebHistory } from 'vue-router'
import { createRouter } from '@modus/ionic-vue'

const home = () => import('@/views/Home.vue')
const categoryList = () => import('@/components/CategoryList.vue')
const category = () => import('@/components/Category.vue')
const about = () => import('@/views/About.vue')
const productDetails = () => import('@/components/ProductDetails.vue')
const checkout = () => import('@/views/Checkout.vue')
const cart = () => import('@/views/Cart.vue')
const orderCompleted = () => import('@/views/OrderCompleted.vue')
const cartComponent = () => import('@/components/CartComponent.vue')
const phone = () => import('@/components/phoneViewport.vue')
const history = createWebHistory()
const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: home,
      children: [
        {
          path: '',
          component: categoryList,
          meta: {
            title: 'Home Page - Vue-Port Shop',
          },
        },
        {
          path: 'category/:categoryId',
          component: category,
          meta: {
            title: 'Category - Vue-Port Shop',
          },
        },
        {
          path: 'product/:productId',
          component: productDetails,
        },
      ],
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
      children: [
        {
          path: '',
          component: cartComponent,
          meta: {
            title: 'Cart - Vue-Port Shop',
          },
        },
        {
          path: 'checkout',
          component: checkout,
          meta: {
            title: 'Checkout - Vue-Port Shop',
          },
        },
        {
          path: 'ordercompleted',
          component: orderCompleted,
          meta: {
            title: 'Order Completed - Vue-Port Shop',
          },
        },
      ],
    },
    {
      path: '/phone',
      component: phone,
      meta: {
        title: 'Phone View - Vue-Port Shop',
      },
    },
  ],
})

export default router
