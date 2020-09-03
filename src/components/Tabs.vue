<template>
  <IonApp>
    <IonTabs>
      <template v-slot:top>
        <NavBar />
      </template>
      <RouterView />
    </IonTabs>
  </IonApp>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonApp, IonTabs } from '@modus/ionic-vue'
import { RouterView } from 'vue-router'
import NavBar from './NavBar.vue'

export default defineComponent({
  name: 'Tabs',
  components: {
    IonApp,
    NavBar,
    IonTabs,
    RouterView,
  },
})
</script>
