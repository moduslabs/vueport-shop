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
  },
  setup() {
    function openMenuComponent() {
      menuController.open('main-menu')
    }
    return { openMenuComponent }
  },
})
</script>
