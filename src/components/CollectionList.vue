<template>
  <NavBar />
  <IonContent>
    <h1>{{ heading }}</h1>
  </IonContent>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonContent } from '@modus/ionic-vue'
import NavBar from '../components/NavBar.vue'

export default defineComponent({
  name: 'CollectionList',
  components: {
    NavBar,
    IonContent,
  },
  props: {
    heading: String,
    data: Array,
  },
})
</script>
