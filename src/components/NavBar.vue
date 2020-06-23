<template>
  <IonTabBar>
    <RouterLink to="/"><IonTitle>Vueport Shop</IonTitle></RouterLink>
    <IonTabButton tab="tshirts" href="/tshirts">
      <IonLabel>T-Shirts</IonLabel>
    </IonTabButton>
    <IonTabButton tab="hoodies" href="/hoodies">
      <IonLabel>Hoodies</IonLabel>
    </IonTabButton>
    <IonTabButton tab="shorts" href="/shorts">
      <IonLabel>Shorts</IonLabel>
    </IonTabButton>
    <IonTabButton tab="jeans" href="/jeans">
      <IonLabel>Jeans</IonLabel>
    </IonTabButton>
    <IonTabButton tab="cart">
      <IonIcon icon="cart" class="cart" />
      <IonLabel>Cart</IonLabel>
    </IonTabButton>
  </IonTabBar>
</template>
<script lang="ts">
import {
  IonTitle,
  IonTabBar,
  IonIcon,
  IonLabel,
  IonTabButton,
} from '@modus/ionic-vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NavBar',
  components: {
    IonTitle,
    IonTabBar,
    IonIcon,
    IonLabel,
    IonTabButton,
  },
})
</script>
<style scoped>
.cart {
  color: black;
}
</style>
