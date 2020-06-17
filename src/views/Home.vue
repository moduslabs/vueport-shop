<template>
  <div class="ion-page">
    <NavBar />
    <IonContent>
      <RouterLink to="/tshirts">
        <img src="../assets/sample.jpg" alt="tshirt" />
      </RouterLink>
      <RouterLink to="/tshirts">
        <IonButton fill="outline">Buy T-Shirts</IonButton>
      </RouterLink>
      <RouterLink to="/hoodies">
        <img src="../assets/sample.jpg" alt="hoodies" />
      </RouterLink>
      <RouterLink to="/hoodies">
        <IonButton fill="outline">Buy Hoodies</IonButton>
      </RouterLink>
      <RouterLink to="/shorts">
        <img src="../assets/sample.jpg" alt="shorts" />
      </RouterLink>
      <RouterLink to="/shorts">
        <IonButton fill="outline">Buy Shorts</IonButton>
      </RouterLink>
      <RouterLink to="/jeans">
        <img src="../assets/sample.jpg" alt="jeans" />
      </RouterLink>
      <RouterLink to="/jeans">
        <IonButton fill="outline">Buy Jeans</IonButton>
      </RouterLink>
    </IonContent>
  </div>
</template>

<script lang="ts">
import { IonContent, IonButton } from '@modus/ionic-vue'
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'
import NavBar from '../components/NavBar.vue'
export default defineComponent({
  name: 'Home',
  components: {
    NavBar,
    IonContent,
    IonButton,
    RouterLink,
  },
})
</script>
<style>
img {
  width: 100%;
  height: 40%;
}
</style>
