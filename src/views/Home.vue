<template>
  <div class="ion-page">
    <NavBar />
    <div id="list" role="main">
      <template v-for="category in categories">
        <IonItem :key="category.id">
          <RouterLink to="{{category.path}}" :key="category.id">
            <img
              src="../assets/sample.jpg"
              alt="{{category.name}}"
              :key="category.id"
            />
          </RouterLink>
          <RouterLink to="{{category.path}}" :key="category.id">
            <IonButton fill="outline" :key="category.id">{{
              'Buy ' + category.name
            }}</IonButton>
          </RouterLink>
        </IonItem>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { IonButton, IonItem } from '@modus/ionic-vue'
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import NavBar from '../components/NavBar.vue'

export default defineComponent({
  name: 'Home',
  components: {
    NavBar,
    IonButton,
    RouterLink,
    IonItem,
  },
  props: {
    categories: Array,
  },
})
</script>
<style>
img {
  width: 100%;
  height: 40%;
}
#list {
  overflow: scroll;
}
</style>
