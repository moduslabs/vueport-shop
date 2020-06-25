import { createWebHistory } from 'vue-router'
import { createRouter } from '@modus/ionic-vue'
import { categories } from '@/mockData/categories-list'
import { products } from '@/mockData/product-list'

const home = () => import('@/views/Home.vue')
const collectionList = () => import('@/components/CollectionList.vue')
const about = () => import('@/views/About.vue')
const productDetails = () => import('@/components/ProductDetails.vue')
const history = createWebHistory()
const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: home,
      props: { categories: categories },
      children: [
        {
          path: '/:category',
          component: collectionList,
          props: (route) => ({
            cat: route.params.category,
            data: products,
          }),
        },
        {
          path: '/:category/:id',
          component: productDetails,
          props: (route) => ({
            id: route.params.id,
          }),
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
  ],
})

export default router
