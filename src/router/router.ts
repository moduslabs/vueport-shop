import { createWebHistory } from 'vue-router'
import { createRouter } from '@modus/ionic-vue'
import { categories } from '@/mockData/categories-list'
import { products } from '@/mockData/product-list'

const home = () => import('@/views/Home.vue')
const collectionList = () => import('@/components/CollectionList.vue')
const history = createWebHistory()
const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: home,
      props: {
        categories: categories,
      },
      meta: {
        title: 'Home Page - Vue-Port Shop',
      },
    },
    {
      path: '/tshirts',
      component: collectionList,
      props: {
        heading: 'T-Shirts',
        data: products,
      },
      meta: {
        title: 'T-Shirts - Vue-Port Shop',
      },
    },
    {
      path: '/hoodies',
      component: collectionList,
      props: {
        heading: 'Hoodies',
        data: products,
      },
      meta: {
        title: 'Hoodies - Vue-Port Shop',
      },
    },
    {
      path: '/jeans',
      component: collectionList,
      props: {
        heading: 'Jeans',
        data: products,
      },
      meta: {
        title: 'Jeans - Vue-Port Shop',
      },
    },
    {
      path: '/shorts',
      component: collectionList,
      props: {
        heading: 'Shorts',
        data: products,
      },
      meta: {
        title: 'Shorts - Vue-Port Shop',
      },
    },
  ],
})

export default router
