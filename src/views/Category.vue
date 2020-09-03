<template>
  <div class="ion-page">
    <IonContent>
      <header>
        <IonImg
          :alt="category.description"
          :src="category.image.replace('1600x900', '860x480')"
          aria-label="category"
        />
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
              <div class="product-image">
                <IonImg
                  :src="product.images[0].replace('1600x900', '256x144')"
                  :alt="product.title"
                  class="product-image"
                />
              </div>
            </IonThumbnail>
            <article>
              <IonBadge color="success" class="tag">{{
                product.tags[0]
              }}</IonBadge>

              <ion-text color="dark">
                <h4 class="product-title">{{ product.title }}</h4>
              </ion-text>

              <IonText color="tertiary">{{ currency(product.price) }}</IonText>
            </article>
          </IonItem>
        </RouterLink>
      </IonList>
    </IonContent>
  </div>
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
  name: 'Category',
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

    document.title = category.value.title

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
  --product-image-width: 8rem;
  width: var(--product-image-width);
  height: calc(var(--product-image-width) * 9 / 16);
}

.product-image {
  border-radius: 0.4rem;
  overflow: hidden;
}

.product-title {
  margin-top: 0;
}

.list-item {
  box-shadow: 16px 2px 0 rgba(0, 0, 0, 0.2);
}

article {
  padding: 0.825rem 0;
}
</style>
