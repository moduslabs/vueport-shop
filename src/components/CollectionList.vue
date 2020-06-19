<template>
  <IonContent>
    <h1>{{ heading }}</h1>
  </IonContent>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonContent } from '@modus/ionic-vue'

export default defineComponent({
  name: 'CollectionList',
  components: {
    IonContent,
  },
  props: {
    heading: String,
  },
})
</script>
