<template>
  <NavBar />
  <IonTab :tab="heading">
    <IonContent>
      <h1>{{ heading }}</h1>
    </IonContent>
  </IonTab>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonContent } from '@modus/ionic-vue'
import NavBar from './NavBar.vue'

export default defineComponent({
  name: 'CollectionList',
  components: {
    IonContent,
    NavBar,
  },
  props: {
    heading: String,
  },
})
</script>
