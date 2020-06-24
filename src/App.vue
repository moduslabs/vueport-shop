<template>
  <IonApp>
    <IonTabs>
      <RouterView />
      <template v-slot:top>
        <NavBar />
      </template>
    </IonTabs>
  </IonApp>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import { IonApp, IonTabs } from '@modus/ionic-vue'
import { useRouter, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'

import '@ionic/core/css/normalize.css'
import '@ionic/core/css/core.css'
import '@ionic/core/css/structure.css'
import '@ionic/core/css/typography.css'
import '@ionic/core/css/ionic.bundle.css'

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    RouterView,
    NavBar,
    IonTabs,
  },
  setup() {
    const { currentRoute } = useRouter()

    watch(currentRoute, (to) => {
      document.title = to.meta.title || 'Vue-Port Shop'
    })
  },
})
</script>

<style>
:root {
  --ion-toolbar-color: #4b4b4b;
  --ion-color-primary: #306ed9;
}
a {
  text-decoration: none;
  color: black;
}
.image {
  height: 320px;
}
</style>
