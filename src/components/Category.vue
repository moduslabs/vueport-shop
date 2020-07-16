<template>
  <IonContent>
    <header>
      <IonItem lines="none">
        <IonText color="dark">
          <h1>{{ category.title }}</h1>
        </IonText>
      </IonItem>
      <IonItem lines="none">
        <IonText color="medium">{{ category.description }}</IonText>
      </IonItem>
    </header>
    <IonList lines="full">
      <RouterLink
        :to="`/product/${product.id}`"
        v-for="product in products"
        :key="product.id"
      >
        <IonItem class="list-item">
          <IonThumbnail slot="start" class="product-image-container">
            <IonImg
              :src="product.images[0]"
              :alt="product.title"
              class="product-image"
            />
          </IonThumbnail>
          <article>
            <IonBadge color="success" class="tag">{{
              product.tags[0]
            }}</IonBadge>

            <ion-text color="dark">
              <h3 class="product-title">{{ product.title }}</h3>
            </ion-text>

            <IonText color="tertiary">{{ currency(product.price) }}</IonText>
          </article>
        </IonItem>
      </RouterLink>
    </IonList>
  </IonContent>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import {
  IonContent,
  IonItem,
  IonList,
  IonText,
  IonImg,
  IonThumbnail,
  IonBadge,
} from '@modus/ionic-vue'
import { useRoute } from 'vue-router'
import useProductsInCategory from '@/composables/products'
import useCategories from '@/composables/categories'

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
    IonThumbnail,
    IonBadge,
  },
  async setup() {
    const categoryId = ref(useRoute().params.categoryId as string)

    const { products } = await useProductsInCategory(categoryId.value)

    const { getCategoryById } = await useCategories()

    const category = ref(getCategoryById(categoryId.value))

    const currency = getCurrencyFormat()

    return { products, currency, category }
  },
})
</script>

<style scoped>
header {
  margin-bottom: 2.525rem;
}

.tag {
  margin-right: 0.525rem;
}

.product-image-container {
  width: 8rem;
  height: 8rem;
}

.product-image {
  border-radius: 0.4rem;
}

.product-title {
  margin-top: 0;
}

.list-item {
  box-shadow: 16px 2px 0 rgba(0, 0, 0, 0.2);
}
</style>
