<template>
  <IonContent>
    <div class="list">
      <IonCard v-for="category in this.categories" :key="category.id">
        <div class="hero">
          <RouterLink :to="`/category/${category.id}`">
            <IonImg class="hero" :src="category.image" :alt="category.title" />
          </RouterLink>
        </div>
        <IonCardHeader>
          <IonCardSubtitle>Featured</IonCardSubtitle>
          <IonCardTitle>{{ category.title }}</IonCardTitle>
          <IonFab vertical="center" horizontal="end">
            <RouterLink
              :to="`/category/${category.id}`"
              aria-label="View this category"
            >
              <IonFabButton>
                View
              </IonFabButton>
            </RouterLink>
          </IonFab>
        </IonCardHeader>
      </IonCard>
    </div>
  </IonContent>
</template>

<script lang="ts">
import {
  IonCard,
  IonImg,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonFab,
  IonFabButton,
  IonContent,
} from '@modus/ionic-vue'
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import useCategories from '@/composables/categories'

export default defineComponent({
  name: 'CategoryList',
  components: {
    RouterLink,
    IonCard,
    IonImg,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonFab,
    IonFabButton,
    IonContent,
  },
  async setup() {
    const { categories } = await useCategories()
    return { categories }
  },
})
</script>
<style scoped>
.list {
  padding-bottom: 3rem;
}
</style>
