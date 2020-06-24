<template>
  <IonContent>
    <IonRouterView />
    <IonImg class="image" :alt="category.title" :src="category.image" />
    <IonText color="dark">{{ heading }}</IonText>
    <IonText color="medium">{{ data.length + ' items' }}</IonText>
    <IonGrid fixed="true">
      <IonRow>
        <IonCol col-2>
          <IonCard v-for="product in data" :key="product.id">
            <RouterLink :to="category.path + '/' + product.id">
              <IonImg
                id="gridImg"
                :alt="product.description"
                :src="product.images[1]"
              />
              <IonText color="dark">{{ product.title }}</IonText>
              <IonText color="medium">{{ product.price }}</IonText>
            </RouterLink>
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
  IonRouterView,
  IonText,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
} from '@modus/ionic-vue'
import { RouterLink } from 'vue-router'

export default defineComponent({
  name: 'CollectionList',
  components: {
    IonContent,
    IonRouterView,
    RouterLink,
    IonText,
    IonImg,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
  },
  props: {
    heading: String,
    data: Array,
    category: Object,
  },
})
</script>

<style>
#gridImg {
  height: 300px;
  width: 300px;
}
</style>
