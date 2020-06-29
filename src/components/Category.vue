<template>
  <IonContent>
    <IonList v-for="product in products" :key="product.id">
      <RouterLink :to="`/product/${product.id}`">
        <IonItem>
          <IonAvatar slot="start">
            <IonImg :src="product.images[0]" :alt="product.title" />
          </IonAvatar>
          <IonLabel>
            <h2>{{ product.title }}</h2>
            <IonBadge
              v-for="tag in product.tags"
              :key="tag"
              color="medium"
              class="tag"
              >{{ tag }}
            </IonBadge>
            <IonText>{{ product.description }}</IonText>
          </IonLabel>
          <IonText color="primary" slot="end">{{
            currency(product.price)
          }}</IonText>
        </IonItem>
      </RouterLink>
    </IonList>
  </IonContent>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
  IonContent,
  IonItem,
  IonList,
  IonText,
  IonImg,
  IonLabel,
  IonAvatar,
  IonBadge,
} from '@modus/ionic-vue'
import { useRoute } from 'vue-router'
import useProductsInCategory from '@/composables/products'

function getCurrencyFormat() {
  const intl = new Intl.NumberFormat(navigator.language, {
    maximumFractionDigits: 2,
    style: 'currency',
    currency: 'USD',
  })

  return intl.format
}

export default defineComponent({
  name: 'CollectionList',
  components: {
    IonContent,
    IonItem,
    IonList,
    IonText,
    IonImg,
    IonLabel,
    IonAvatar,
    IonBadge,
  },
  async setup() {
    const { products } = await useProductsInCategory(
      useRoute().params.categoryId
    )

    const currency = getCurrencyFormat()
    return { products, currency }
  },
})
</script>

<style scoped>
.tag {
  margin-right: 0.525rem;
}
</style>
