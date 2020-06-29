<template>
  <IonContent>
    <RouterView />
    <IonImg :alt="category.title" :src="category.image" />
    <IonLabel>{{ heading }}</IonLabel>
    <IonLabel>{{ data.length + ' items' }}</IonLabel>
    <IonGrid fixed="true">
      <IonRow>
        <IonCol col-2>
          <IonCard v-for="product in data" :key="product.id">
            <IonImg
              class="image"
              :alt="product.description"
              :src="product.images[1]"
            />
            <IonText>{{ product.title }}</IonText>
            <IonText>{{ product.price }}</IonText>
          </IonCard>
        </IonCol>
      </IonRow>
    </IonGrid>
    <RouterLink to="/">
      Go back home
    </RouterLink>
  </IonContent>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
  IonContent,
  IonImg,
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonText,
} from '@modus/ionic-vue'
import { RouterView } from 'vue-router'

export default defineComponent({
  name: 'CollectionList',
  components: {
    IonContent,
    RouterView,
    IonImg,
    IonLabel,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonText,
  },
  props: {
    heading: String,
    data: Array,
    category: Object,
  },
})
</script>

<style scoped>
.image {
  height: 20%;
  width: 50%;
}
</style>
