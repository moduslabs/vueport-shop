import { createWebHistory } from 'vue-router'
import { createRouter } from '@modus/ionic-vue'

const Tabs = () => import('@/components/Tabs.vue')
const Collections = () => import('@/views/Collections.vue')
const Category = () => import('@/views/Category.vue')
const about = () => import('@/views/About.vue')
const productDetails = () => import('@/components/ProductDetails.vue')
const checkout = () => import('@/views/Checkout.vue')
const cart = () => import('@/views/Cart.vue')
const orderCompleted = () => import('@/views/OrderCompleted.vue')
const cartComponent = () => import('@/components/CartComponent.vue')
const DesktopView = () => import('@/components/DesktopView.vue')

// Check if the viewport is cut for desktop
const isDesktop = () => window.innerWidth > 620

const history = createWebHistory()

const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: Tabs,
      children: [
        {
          path: '',
          // redirect to desktop view if the viewport is wide enough
          redirect: isDesktop() ? 'desktop' : 'shop',
        },
        {
          path: 'shop',
          component: Collections,
          meta: {
            title: 'Home Page - Vue-Port Shop',
          },
        },
        {
          path: 'category/:categoryId',
          component: Category,
          meta: {
            title: 'Category - Vue-Port Shop',
          },
        },
        {
          path: 'product/:productId',
          component: productDetails,
        },
        {
          path: 'about',
          component: about,
          meta: {
            title: 'About - Vue-Port Shop',
          },
        },
        {
          path: 'cart',
          component: cart,
          children: [
            {
              path: '',
              component: cartComponent,
              meta: {
                title: 'Cart - Vue-Port Shop',
              },
            },
          ],
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
      path: '/desktop',
      component: DesktopView,
      meta: {
        title: 'Desktop View - Vue-Port Shop',
      },
    },
  ],
})

export default router
