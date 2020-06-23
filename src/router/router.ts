import { createWebHistory } from 'vue-router'
import { createRouter } from '@modus/ionic-vue'

const home = () => import('@/views/Home.vue')
const collectionList = () => import('@/components/CollectionList.vue')
const Category = () => import('@/components/Category.vue')

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
      path: '/tshirts',
      component: collectionList,
      props: { heading: 'T-Shirts', data: [] },
      meta: {
        title: 'T-Shirts - Vue-Port Shop',
      },
    },
    {
      path: '/hoodies',
      component: collectionList,
      props: { heading: 'Hoodies', data: [] },
      meta: {
        title: 'Hoodies - Vue-Port Shop',
      },
    },
    {
      path: '/jeans',
      component: collectionList,
      props: { heading: 'Jeans', data: [] },
      meta: {
        title: 'Jeans - Vue-Port Shop',
      },
    },
    {
      path: '/shorts',
      component: collectionList,
      props: { heading: 'Shorts', data: [] },
      meta: {
        title: 'Shorts - Vue-Port Shop',
      },
    },
    {
      path: '/category/:categoryId',
      component: Category,
      meta: {
        title: 'Category - Vue-Port Shop',
      },
    },
  ],
})

export default router
