import { createWebHistory } from 'vue-router'
import { createRouter } from '@modus/ionic-vue'

const home = () => import('@/views/Home.vue')
// const collectionList = () => import('@/components/CollectionList.vue')
const Category = () => import('@/components/Category.vue')
const about = () => import('@/views/About.vue')

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
      component: Category,
      meta: {
        title: 'Category - Vue-Port Shop',
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
