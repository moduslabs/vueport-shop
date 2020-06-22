<template>
  <NavBar />
  <IonContent>
    <img alt="mens" src="../assets/sample.jpg" />
    <h1>{{ heading }}</h1>
    <h5>{{ data.length + ' items' }}</h5>
    <div role="list" class="list">
      <ion-card v-for="product in data" :key="product.id">
        <img
          class="image"
          :alt="product.description"
          :src="product.images[1]"
        />
        <p>{{ product.title }}</p>
        <p>{{ product.price }}</p>
      </ion-card>
    </div>
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
<style scoped>
.list {
  padding-bottom: 3rem;
}
.image {
  height: 40%;
  width: 70%;
}
</style>
