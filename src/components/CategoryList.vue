<template>
  <IonContent>
    <IonSlides :options="slideOpts" pager="true" class="container">
      <IonSlide
        v-for="category in this.categories"
        :key="category.id"
        class="slide"
      >
        <RouterLink :to="`/category/${category.id}`" class="category-link">
          <article>
            <IonImg
              :src="category.image"
              :alt="category.title"
              class="category-image"
            />

            <div class="category-title">
              <h2>{{ category.title }}</h2>
            </div>
          </article>
        </RouterLink>
      </IonSlide>
    </IonSlides>
  </IonContent>
</template>

<script lang="ts">
import { IonImg, IonContent, IonSlides, IonSlide } from '@modus/ionic-vue'
import { defineComponent, ref } from 'vue'
import { RouterLink } from 'vue-router'
import useCategories from '@/composables/categories'

export default defineComponent({
  name: 'CategoryList',
  components: {
    RouterLink,
    IonImg,
    IonContent,
    IonSlides,
    IonSlide,
  },
  async setup() {
    const { categories } = await useCategories()
    const isDesktop = ref(false)
    const slideOpts = ref({})

    const mql = window.matchMedia('(min-width: 800px)')

    function onWidthChange(query: MediaQueryList) {
      isDesktop.value = query.matches

      if (query.matches) {
        // desktop options
        slideOpts.value = {
          slidesPerView: 3,
          spaceBetween: 10,
          loop: true,
          autoplay: {
            delay: 5500,
            disableOnInteraction: true,
          },
        }
      } else {
        slideOpts.value = {
          // mobile options
          slidesPerView: 'auto',
          initialSlide: 0,
          spaceBetween: 30,
          loop: true,
          autoplay: {
            delay: 3500,
            disableOnInteraction: true,
          },
        }
      }
    }

    mql.addListener(onWidthChange)
    onWidthChange(mql)

    return { categories, slideOpts }
  },
})
</script>

<style scoped>
.container {
  padding: 0 1rem;
}

.container >>> .swiper-wrapper {
  align-items: flex-start;
  justify-content: stretch;
}

.slide {
  font-size: 1.25rem;
  height: auto;
}

.card-content {
  text-align: left;
}

article {
  position: relative;
  height: 30rem;
  border-radius: 0.825rem;
  overflow: hidden;
  box-shadow: 16px 4px 0 rgba(0, 0, 0, 0.5);
  box-shadow: 1px 2px 16px 2px rgba(0, 0, 0, 0.5);
  margin: 2rem 0;
}

.category-title h2 {
  position: absolute;
  top: 2rem;
  left: 1.25rem;
  color: white;
  font-size: 3rem;
}

.category-title {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}

.category-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.category-link {
  width: 100%;
}
</style>
