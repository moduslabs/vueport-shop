<template>
  <ion-page>
    <NavBar />
    <IonContent>
      <RouterLink to="/tshirts">
        <img src="../assets/sample.jpg" />
      </RouterLink>
      <RouterLink to="/tshirts">
        <IonButton fill="outline">Buy T-Shirts</IonButton>
      </RouterLink>
      <RouterLink to="/hoodies">
        <img src="../assets/sample.jpg" />
        <IonButton fill="outline">Buy Hoodies</IonButton>
      </RouterLink>
      <RouterLink to="/shorts">
        <img src="../assets/sample.jpg" />
        <IonButton fill="outline">Buy Shorts</IonButton>
      </RouterLink>
      <RouterLink to="/jeans">
        <img src="../assets/sample.jpg" />
        <IonButton fill="outline">Buy Jeans</IonButton>
      </RouterLink>
    </IonContent>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonButton } from '@modus/ionic-vue'
import NavBar from '../components/NavBar.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Home',
  components: {
    NavBar,
    IonContent,
    IonButton,
  },
})
</script>
<style>
img {
  width: 100%;
  height: 30%;
}
</style>
