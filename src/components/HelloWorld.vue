<template>
  <ion-page>
    <NavBar />
    <IonContent>
      <h1>What's cookin'? You are currently on {{ msg }}</h1>
      <RouterLink to="/">Home Page</RouterLink>
    </IonContent>
  </ion-page>
</template>

<script lang="ts">
import { IonContent } from '@modus/ionic-vue'
import { defineComponent } from 'vue'
import NavBar from './NavBar.vue'

export default defineComponent({
  name: 'HelloWorld',
  components: {
    NavBar,
    IonContent,
  },
  props: {
    msg: String,
  },
})
</script>
