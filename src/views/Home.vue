<template>
  <NavBar />
  <IonContent>
    <div class="list">
      <ion-card v-for="category in categories" :key="category.id">
        <RouterLink :to="`/category/${category.id}`">
          <ion-img class="hero" :src="category.image" :alt="category.title" />
        </RouterLink>
        <ion-card-header>
          <ion-card-subtitle>Featured</ion-card-subtitle>
          <ion-card-title>{{ category.title }}</ion-card-title>
          <ion-fab vertical="center" horizontal="end">
            <ion-fab-button :href="`/category/${category.id}`">
              View
            </ion-fab-button>
          </ion-fab>
        </ion-card-header>
      </ion-card>
    </div>
  </IonContent>
</template>

<script lang="ts">
import { IonContent } from '@modus/ionic-vue'
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import NavBar from '../components/NavBar.vue'
import useCategories from '@/composables/categories'

export default defineComponent({
  name: 'Home',
  components: {
    NavBar,
    RouterLink,
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
