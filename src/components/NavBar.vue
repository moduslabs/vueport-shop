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
      <IonBadge color="primary">{{ cartItems }}</IonBadge>
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
  IonBadge,
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
    IonBadge,
  },
  props: {
    cartItems: {
      required: true,
      type: Number,
    },
  },
})
</script>
<style scoped>
.cart {
  color: black;
}
</style>
