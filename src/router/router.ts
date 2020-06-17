import { createWebHistory } from 'vue-router'
import { createRouter } from '@modus/ionic-vue'

const home = () => import('@/views/Home.vue')
const hello = () => import('@/components/HelloWorld.vue')
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
      path: '/hello',
      component: hello,
      props: { msg: 'Hello World!' },
      meta: {
        title: 'Hello - Vue-Port Shop',
      },
    },
    {
      path: '/tshirts',
      component: hello,
      props: { msg: 'T-Shirts' },
      meta: {
        title: 'T-Shirts - Vue-Port Shop',
      },
    },
    {
      path: '/hoodies',
      component: hello,
      props: { msg: 'Hoodies' },
      meta: {
        title: 'Hoodies - Vue-Port Shop',
      },
    },
    {
      path: '/jeans',
      component: hello,
      props: { msg: 'Jeans' },
      meta: {
        title: 'Jeans - Vue-Port Shop',
      },
    },
    {
      path: '/shorts',
      component: hello,
      props: { msg: 'Shorts' },
      meta: {
        title: 'Shorts - Vue-Port Shop',
      },
    },
  ],
})

export default router
