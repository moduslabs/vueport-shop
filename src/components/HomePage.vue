<template>
  <IonContent>
    <div class="list">
      <ion-card v-for="category in categories" :key="category.id">
        <RouterLink :to="category.path">
          <ion-img class="hero" :src="category.image" :alt="category.name" />
        </RouterLink>
        <ion-card-header>
          <ion-card-subtitle>Featured</ion-card-subtitle>
          <ion-card-title>{{ category.name }}</ion-card-title>
          <ion-fab vertical="center" horizontal="end">
            <ion-fab-button :href="category.path">
              View
            </ion-fab-button>
          </ion-fab>
        </ion-card-header>
      </ion-card>
    </div>
  </IonContent>
</template>

<script>
import { IonContent } from '@modus/ionic-vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
  },
  props: {
    categories: Array,
  },
})
</script>

<style scoped>
.list {
  padding-bottom: 3rem;
}
</style>
