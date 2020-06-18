<template>
  <div class="ion-page">
    <NavBar />
    <div id="list" role="main">
      <IonItem>
        <RouterLink to="/tshirts">
          <img src="../assets/sample.jpg" alt="tshirt" />
        </RouterLink>
        <RouterLink to="/tshirts">
          <IonButton fill="outline">Buy T-Shirts</IonButton>
        </RouterLink>
      </IonItem>
      <IonItem>
        <RouterLink to="/hoodies">
          <img src="../assets/sample.jpg" alt="hoodies" />
        </RouterLink>
        <RouterLink to="/hoodies">
          <IonButton fill="outline">Buy Hoodies</IonButton>
        </RouterLink>
      </IonItem>
      <IonItem>
        <RouterLink to="/shorts">
          <img src="../assets/sample.jpg" alt="shorts" />
        </RouterLink>
        <RouterLink to="/shorts">
          <IonButton fill="outline">Buy Shorts</IonButton>
        </RouterLink>
      </IonItem>
      <IonItem>
        <RouterLink to="/jeans">
          <img src="../assets/sample.jpg" alt="jeans" />
        </RouterLink>
        <RouterLink to="/jeans">
          <IonButton fill="outline">Buy Jeans</IonButton>
        </RouterLink>
      </IonItem>
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
