<template>
  <IonTabBar selectedTab="collections">
    <IonTitle>Vueport Shop</IonTitle>
    <IonTabButton tab="collections" href="/">
      <IonLabel>Collections</IonLabel>
    </IonTabButton>
    <IonTabButton tab="about" href="/about">
      <IonLabel>About</IonLabel>
    </IonTabButton>
    <IonTabButton tab="cart">
      <IonIcon icon="cart" class="cart" />
      <IonBadge color="primary"> {{ cartItems }} </IonBadge>
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
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'NavBar',
  components: {
    IonTitle,
    IonTabBar,
    IonIcon,
    IonLabel,
    IonTabButton,
  },
  async setup() {
    const cartItems = ref(0)

    function cartIncrement() {
      cartItems.value = cartItems.value++
    }

    return {
      cartItems,
      cartIncrement,
    }
  },
})
</script>
<style scoped>
.cart {
  color: black;
}
</style>
