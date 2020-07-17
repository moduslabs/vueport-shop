<template>
  <IonContent>
    <IonSlides :options="slideOpts" pager="true">
      <IonSlide v-for="category in this.categories" :key="category.id">
        <IonCard>
          <RouterLink :to="`/category/${category.id}`">
            <IonImg class="hero" :src="category.image" :alt="category.title" />
          </RouterLink>
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
      </IonSlide>
    </IonSlides>
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
  IonSlides,
  IonSlide,
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
    IonSlides,
    IonSlide,
  },
  async setup() {
    const { categories } = await useCategories()
    const slideOpts = {
      initialSlide: 1,
      speed: 400,
      spaceBetween: 30,
    }
    return { categories, slideOpts }
  },
})
</script>
<style scoped>
.list {
  padding-bottom: 3rem;
}
</style>
