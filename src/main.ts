import { createApp } from 'vue'
import { IonicVue } from '@modus/ionic-vue'
//components
import App from './App.vue'
import router from '@/router/router'
import { cart, close } from 'ionicons/icons'
import { addIcons } from 'ionicons'
import './registerServiceWorker'

addIcons({ cart, close })
const app = createApp(App).use(IonicVue).use(router)

IonicVue.isReady().then(() => {
  app.mount('#app')
})
