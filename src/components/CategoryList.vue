<template>
  <IonContent>
    <IonSlides
      :options="slideOpts"
      pager="true"
      class="container ion-hide-md-down"
    >
      <IonSlide
        v-for="category in this.categories"
        :key="category.id"
        class="slide"
      >
        <IonCard class="card-desktop">
          <RouterLink :to="`/category/${category.id}`">
            <RouterLink :to="`/category/${category.id}`">
              <IonImg
                :src="category.image"
                :alt="category.title"
                class="desktop"
              />
            </RouterLink>
            <div class="card-content">
              <IonCardHeader>
                <IonCardSubtitle>Featured</IonCardSubtitle>
                <IonCardTitle>{{ category.title }}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                {{ category.description }}
              </IonCardContent>
              <RouterLink :to="`/category/${category.id}`">
                <IonFab vertical="end" horizontal="end">
                  <IonFabButton>
                    <IonIcon icon="pricetags" />
                  </IonFabButton>
                </IonFab>
              </RouterLink>
            </div>
          </RouterLink>
        </IonCard>
      </IonSlide>
    </IonSlides>
    <IonSlides
      :options="mobileSlideOpts"
      pager="true"
      class="container ion-hide-md-up"
    >
      <IonSlide
        v-for="category in this.categories"
        :key="category.id"
        class="slide"
      >
        <IonCard class="card-mobile">
          <RouterLink :to="`/category/${category.id}`">
            <IonImg
              :src="category.image"
              :alt="category.title"
              class="mobile"
            />
            <div>
              <IonCardHeader>
                <IonCardSubtitle>Featured</IonCardSubtitle>
                <IonCardTitle>{{ category.title }}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                {{ category.description }}
              </IonCardContent>
              <RouterLink :to="`/category/${category.id}`">
                <IonFab vertical="end" horizontal="end">
                  <IonFabButton>
                    <IonIcon icon="pricetags" />
                  </IonFabButton>
                </IonFab>
              </RouterLink>
            </div>
          </RouterLink>
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
  IonCardContent,
  IonFab,
  IonFabButton,
  IonContent,
  IonSlides,
  IonSlide,
  IonIcon,
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
    IonCardContent,
    IonFab,
    IonFabButton,
    IonContent,
    IonSlides,
    IonSlide,
    IonIcon,
  },
  async setup() {
    const { categories } = await useCategories()
    const slideOpts = {
      initialSlide: 0,
      // speed: 400,
      spaceBetween: 100,
      centeredSlides: true,
      keyboard: true,
    }
    const mobileSlideOpts = {
      initialSlide: 0,
    }
    const here = () => {
      console.log('here')
    }
    return { categories, slideOpts, mobileSlideOpts, here }
  },
})
</script>
<style scoped>
.mobile {
  width: 100vw;
  height: calc(60vh / (16 / 9));
}
.desktop {
  height: 65%;
}
.container {
  height: 100%;
}
.slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  height: 100%;

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
.card-desktop {
  height: 80vh;
  width: 80vw;
}
.card-mobile {
  height: 83vh;
  width: 100%;
}
</style>
