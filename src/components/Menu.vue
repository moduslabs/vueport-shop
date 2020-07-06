<template>
  <IonMenu menuId="main-menu" contentId="main-content">
    <IonHeader>
      <IonToolbar>
        <IonTitle>Menu</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList>
        <IonItem>
          <IonLabel>Collections</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>About</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Cart</IonLabel>
        </IonItem>
      </IonList>
    </IonContent>
  </IonMenu>
  <IonToolbar id="main-content">
    <IonMenuButton autoHide="false" slot="start" @click="openMenuComponent">
    </IonMenuButton>
    <IonTitle>Vueport Shop</IonTitle>
  </IonToolbar>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { menuController } from '@ionic/core'
import {
  IonMenu,
  IonToolbar,
  IonHeader,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonMenuButton,
} from '@modus/ionic-vue'
export default defineComponent({
  name: 'Menu',
  components: {
    IonMenu,
    IonToolbar,
    IonHeader,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonMenuButton,
  },
  setup() {
    function openMenuComponent() {
      menuController.open('main-menu')
    }
    return { openMenuComponent }
  },
})
</script>
