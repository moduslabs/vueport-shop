<template>
  <IonTab tab="collections">
    <IonRouterView />
    <IonContent v-if="$route.path === '/'">
      <div class="list">
        <IonCard v-for="category in this.categories" :key="category.id">
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
      </div>
    </IonContent>
  </IonTab>
</template>

<script lang="ts">
import {
  IonContent,
  IonTab,
  IonCard,
  IonImg,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonFab,
  IonFabButton,
  IonRouterView,
} from '@modus/ionic-vue'
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import useCategories from '@/composables/categories'

export default defineComponent({
  name: 'Home',
  components: {
    RouterLink,
    IonContent,
    IonTab,
    IonCard,
    IonImg,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonFab,
    IonFabButton,
    IonRouterView,
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
