<template>
  <ion-page>
    <NavBar />
    <IonContent>
      <h1>{{ heading }}</h1>
    </IonContent>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from '../components/NavBar.vue'

export default defineComponent({
  name: 'CollectionList',
  components: {
    NavBar,
  },
  props: {
    heading: String,
    data: Array,
  },
})
</script>
