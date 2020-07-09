<template>
  <IonTab tab="collections">
    <IonContent>
      <div class="list">
        <IonCard v-for="category in this.categories" :key="category.id">
          <RouterLink :to="`/category/${category.id}`">
            <IonImg class="hero" :src="category.image" :alt="category.title" />
          </RouterLink>
          <IonCardHeader>
            <IonCardSubtitle>Featured</IonCardSubtitle>
            <IonCardTitle>{{ category.title }}</IonCardTitle>
            <IonFab vertical="center" horizontal="end">
              <RouterLink :to="`/category/${category.id}`">
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
