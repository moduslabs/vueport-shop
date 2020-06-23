<template>
  <NavBar />
  <IonTab tab="about">
    <IonContent>
      <h1>Welcome to Modus</h1>
    </IonContent>
  </IonTab>
</template>

<script lang="ts">
import { IonContent } from '@modus/ionic-vue'
import { defineComponent } from 'vue'
import NavBar from '../components/NavBar.vue'

export default defineComponent({
  name: 'Home',
  components: {
    NavBar,
    IonContent,
  },
})
</script>
