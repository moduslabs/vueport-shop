import { createApp } from 'vue'
import { createWebHistory } from 'vue-router'
import { IonicVue, createRouter } from '@modus/ionic-vue'
//components
import App from './App.vue'
import Home from './views/Home.vue'
import HelloWorld from './components/HelloWorld.vue'

const history = createWebHistory()
const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: Home,
      meta: {
        title: 'Home Page - Vue-Port Shop',
        metaTags: [
          {
            name: 'description',
            content: 'The home page of the Vue-Port Shop.',
          },
          {
            property: 'og:description',
            content: 'The home page of the Vue-Port Shop.',
          },
        ],
      },
    },
    {
      path: '/hello',
      component: HelloWorld,
      props: { msg: 'Hello World!' },
      meta: {
        title: 'Hello World - Vue-Port Shop',
        metaTags: [
          {
            name: 'description',
            content: 'Hello World Page.',
          },
          {
            property: 'og:description',
            content: 'Hello World Page.',
          },
        ],
      },
    },
  ],
})

const app = createApp(App).use(IonicVue).use(router)
router.isReady().then(() => {
  app.mount('#app')
})
