<template>
  <IonTab tab="collections">
    <IonRouterView />
    <IonContent v-if="$route.path === category.path">
      <IonImg class="image" :alt="category.title" :src="category.image" />
      <IonText color="dark">{{ heading }}</IonText>
      <IonText color="medium">{{ data.length + ' items' }}</IonText>
      <IonGrid fixed="true">
        <IonRow>
          <IonCol col-2>
            <IonCard v-for="(product, index) in data" :key="index">
              <RouterLink
                :to="{
                  path: category.path + '/' + product.id,
                  params: { prod: product.id },
                }"
              >
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
  </IonTab>
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
  IonTab,
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
    IonTab,
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
