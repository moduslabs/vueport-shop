<template>
  <IonContent>
    <ion-list v-for="product in products" :key="product.id">
      <ion-item>
        <ion-avatar slot="start">
          <ion-img :src="product.images[0]" :alt="product.title" />
        </ion-avatar>
        <ion-label>
          <h2>{{ product.title }}</h2>
          <ion-badge
            v-for="tag in product.tags"
            :key="tag"
            color="medium"
            class="tag"
            >{{ tag }}</ion-badge
          >
          <p>{{ product.description }}</p>
        </ion-label>
        <ion-text color="primary" slot="end">{{
          currency(product.price)
        }}</ion-text>
      </ion-item>
    </ion-list>
  </IonContent>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonContent } from '@modus/ionic-vue'
import { useRoute } from 'vue-router'
import useProducts from '@/composables/products'

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
  },
  async setup() {
    const {
      params: { categoryId },
    } = useRoute()

    const { products } = await useProducts(categoryId)

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
