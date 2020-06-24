import { createApp } from 'vue'
import { IonicVue } from '@modus/ionic-vue'
//components
import App from './App.vue'
import router from '@/router/router'
import { cart } from 'ionicons/icons'
import { addIcons } from 'ionicons'

addIcons({ cart })
const app = createApp(App).use(IonicVue).use(router)
router.isReady().then(() => {
  app.mount('#app')
})
