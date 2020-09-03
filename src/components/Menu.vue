<template>
  <IonMenu
    menuId="main-menu"
    contentId="main-content"
    class="centeredTitle"
    role="menu"
  >
    <IonHeader>
      <IonToolbar translucent>
        <IonTitle>Menu</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonList>
        <IonItem>
          <IonTabButton tab="collections" href="/">
            <IonLabel>Collections</IonLabel>
          </IonTabButton>
        </IonItem>
        <IonItem>
          <IonTabButton tab="about" href="/about">
            <IonLabel>About</IonLabel>
          </IonTabButton>
        </IonItem>
        <IonItem>
          <IonTabButton tab="cart" href="/cart">
            <IonIcon icon="cart" />
          </IonTabButton>
        </IonItem>
      </IonList>
    </IonContent>
  </IonMenu>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import {
  IonMenu,
  IonToolbar,
  IonHeader,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonTabButton,
  IonIcon,
  IonTitle,
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
    IonTabButton,
    IonIcon,
    IonTitle,
  },
})
</script>
<style scoped>
.centeredTitle {
  text-align: center;
}

ion-toolbar.ios {
  margin-top: 1rem;
}
</style>
