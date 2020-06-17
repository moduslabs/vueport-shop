<template>
  <div class="ion-page">
    <NavBar />
    <IonContent>
      <h1>What's cookin'? You are currently on {{ msg }}</h1>
      <RouterLink to="/">Home Page</RouterLink>
    </IonContent>
  </div>
</template>

<script lang="ts">
import { IonContent } from '@modus/ionic-vue'
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
export default defineComponent({
  name: 'HelloWorld',
  components: {
    NavBar: () => import('./NavBar.vue'),
    IonContent,
    RouterLink,
  },
  props: {
    msg: String,
  },
})
</script>
