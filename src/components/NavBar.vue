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
