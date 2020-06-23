<template>
  <IonContent>
    <h1>{{ heading }}</h1>
    <RouterLink to="/">Back to home</RouterLink>
  </IonContent>
  <RouterView />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonContent } from '@modus/ionic-vue'
import { RouterView } from 'vue-router'
//import NavBar from './NavBar.vue'

export default defineComponent({
  name: 'CollectionList',
  components: {
    IonContent,
    RouterView,
  },
  props: {
    heading: String,
  },
})
</script>
