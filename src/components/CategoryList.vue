<template>
  <IonContent>
    <IonSlides :options="slideOpts" pager="true" class="container">
      <IonSlide
        v-for="category in this.categories"
        :key="category.id"
        class="slide"
      >
        <IonCard class="card">
          <RouterLink :to="`/category/${category.id}`">
            <IonImg class="hero" :src="category.image" :alt="category.title" />
          </RouterLink>
          <IonCardHeader>
            <IonCardSubtitle>Featured</IonCardSubtitle>
            <IonCardTitle>{{ category.title }}</IonCardTitle>
            <IonCardSubtitle>{{ category.description }}</IonCardSubtitle>
            <br />
            <IonFab vertical="end" horizontal="end">
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
      initialSlide: 0,
      slidesPerView: 'auto',
      speed: 400,
      spaceBetween: 15,
      loop: true,
      keyboard: true,
    }
    return { categories, slideOpts }
  },
})
</script>
<style scoped>
.list {
  padding-bottom: 3rem;
}
.container {
  width: 100%;
  height: 100%;
}
.slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  width: 100%;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.card {
  height: 90%;
}
</style>
