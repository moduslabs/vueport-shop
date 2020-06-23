<template>
  <NavBar />
  <IonContent>
    <ion-img :alt="category.title" :src="category.image" />
    <ion-label>{{ heading }}</ion-label>
    <ion-label>{{ data.length + ' items' }}</ion-label>
    <ion-grid fixed="true">
      <ion-row>
        <ion-col col-2>
          <ion-card v-for="product in data" :key="product.id">
            <img
              class="image"
              :alt="product.description"
              :src="product.images[1]"
            />
            <p>{{ product.title }}</p>
            <p>{{ product.price }}</p>
          </ion-card>
        </ion-col>
      </ion-row>
    </ion-grid>
  </IonContent>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonContent } from '@modus/ionic-vue'
import NavBar from '../components/NavBar.vue'

export default defineComponent({
  name: 'CollectionList',
  components: {
    IonContent,
    NavBar,
  },
  props: {
    heading: String,
    data: Array,
    category: Object,
  },
})
</script>
<style scoped>
.list {
  padding-bottom: 3rem;
}
.image {
  height: 20%;
  width: 50%;
}
</style>
