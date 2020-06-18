<template>
  <div class="ion-page">
    <NavBar />
    <h1>{{ heading }}</h1>
    <div role="main" />
  </div>
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
