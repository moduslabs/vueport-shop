<template>
  <ion-page>
    <NavBar />
    <IonContent>
      <h1>Welcome</h1>
      <RouterLink to="/hello">Hello World</RouterLink>
    </IonContent>
  </ion-page>
</template>

<script lang="ts">
import { IonContent } from '@modus/ionic-vue'
import NavBar from '../components/NavBar.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Home',
  components: {
    NavBar,
    IonContent,
  },
})
</script>
