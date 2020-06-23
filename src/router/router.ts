import { createWebHistory } from 'vue-router'
import { createRouter } from '@modus/ionic-vue'
import { categories } from '@/mockData/categories-list'

const home = () => import('@/views/Home.vue')
const collectionList = () => import('@/components/CollectionList.vue')
const about = () => import('@/views/About.vue')
const history = createWebHistory()
const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: home,
      children: [
        {
          path: 'tshirts',
          component: collectionList,
          props: { heading: 'tshirts', data: [] },
          meta: {
            title: 'T-Shirts - Vue-Port Shop',
          },
        },
        {
          path: '/hoodies',
          component: collectionList,
          props: { heading: 'hoodies', data: [] },
          meta: {
            title: 'Hoodies - Vue-Port Shop',
          },
        },
        {
          path: '/jeans',
          component: collectionList,
          props: { heading: 'jeans', data: [] },
          meta: {
            title: 'Jeans - Vue-Port Shop',
          },
        },
        {
          path: '/shorts',
          component: collectionList,
          props: { heading: 'shorts', data: [] },
          meta: {
            title: 'Shorts - Vue-Port Shop',
          },
        },
      ],
      props: { categories: categories },
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
