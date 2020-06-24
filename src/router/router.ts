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
      children: [
        {
          path: '/tshirts',
          component: collectionList,
          children: [
            {
              path: '/:id',
              component: productDetails,
              props: {
                product: products[0],
              },
              meta: {
                title: 'T-Shirts',
              },
            },
          ],
          props: {
            heading: 'T-Shirts',
            data: products,
            category: categories[0],
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
            category: categories[1],
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
            category: categories[2],
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
            category: categories[3],
          },
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
    { path: '/', redirect: '/' },
  ],
})

export default router
