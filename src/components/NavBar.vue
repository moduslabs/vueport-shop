<template>
  <IonTabBar id="main-content" selectedTab="collections">
    <IonMenuButton @click="openMenuComponent"></IonMenuButton>
    <IonTitle>Vueport Shop</IonTitle>
    <IonTabButton tab="collections" href="/" class="ion-hide-sm-down">
      <IonLabel>Collections</IonLabel>
    </IonTabButton>
    <IonTabButton tab="about" href="/about" class="ion-hide-sm-down">
      <IonLabel>About</IonLabel>
    </IonTabButton>
    <IonTabButton tab="cart">
      <IonIcon icon="cart" class="ion-hide-sm-down" />
    </IonTabButton>
  </IonTabBar>
  <Menu />
</template>
<script lang="ts">
import {
  IonTitle,
  IonTabBar,
  IonIcon,
  IonLabel,
  IonTabButton,
  IonMenuButton,
} from '@modus/ionic-vue'
import { defineComponent } from 'vue'
import Menu from '@/components/Menu.vue'
import { menuController } from '@ionic/core'
export default defineComponent({
  name: 'NavBar',
  components: {
    IonTitle,
    IonTabBar,
    IonIcon,
    IonLabel,
    IonTabButton,
    IonMenuButton,
    Menu,
  },
  setup() {
    function openMenuComponent() {
      menuController.open('main-menu')
    }
    return { openMenuComponent }
  },
})
</script>
