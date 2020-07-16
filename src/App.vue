<template>
  <IonApp>
    <IonTabs>
      <template v-slot:top>
        <NavBar />
      </template>
      <IonText v-if="error" color="warning">{{ error }}</IonText>
      <RouterView />
    </IonTabs>
  </IonApp>
</template>

<script lang="ts">
import { defineComponent, watch, onErrorCaptured, ref } from 'vue'
import { IonApp, IonTabs, IonText } from '@modus/ionic-vue'
import { useRouter } from 'vue-router'
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
    NavBar,
    IonTabs,
    IonText,
  },
  setup() {
    const error = ref()
    const { currentRoute } = useRouter()

    watch(currentRoute, (to) => {
      document.title = to.meta.title || 'Vue-Port Shop'
    })

    onErrorCaptured((err) => {
      error.value = err as string
    })

    return { error }
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
</style>
