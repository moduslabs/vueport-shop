<template>
  <IonApp>
    <Suspense>
      <template #default>
        <IonRouterView />
      </template>
      <template #fallback>
        <Skeleton />
      </template>
    </Suspense>
  </IonApp>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue'
import { IonApp, IonRouterView } from '@modus/ionic-vue'
import { useRouter } from 'vue-router'
import Skeleton from '@/components/Skeleton'

import '@ionic/core/css/normalize.css'
import '@ionic/core/css/core.css'
import '@ionic/core/css/structure.css'
import '@ionic/core/css/typography.css'
import '@ionic/core/css/ionic.bundle.css'

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterView,
    Skeleton,
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
ion-title {
  padding: 0.25%;
  margin-top: 0.5%;
}
</style>
