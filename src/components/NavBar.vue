<template>
  <nav>
    <IonTabBar id="main-content">
      <IonMenuButton @click="openMenuComponent"></IonMenuButton>
      <IonTabButton tab="collections" href="/" class="ion-hide-sm-down">
        <IonLabel>Collections</IonLabel>
      </IonTabButton>
      <IonTabButton tab="about" href="/about" class="ion-hide-sm-down">
        <IonLabel>About</IonLabel>
      </IonTabButton>
      <IonButton
        @click="openModalComponent"
        fill="clear"
        class="ion-hide-sm-down"
      >
        <IonIcon icon="cart" class="cart" />
        <IonBadge>{{ cart.totalItems.value }}</IonBadge>
      </IonButton>
    </IonTabBar>
    <Menu />
    <IonModal :isOpen="isOpen" @willDismiss="willDismiss" :showBackdrop="true">
      <CartComponent />
      <IonButton @click="willDismiss" size="small" color="light" shape="round">
        <IonIcon icon="cart" />
      </IonButton>
    </IonModal>
  </nav>
</template>
<script lang="ts">
import {
  IonTabBar,
  IonIcon,
  IonLabel,
  IonTabButton,
  IonMenuButton,
  IonBadge,
  IonModal,
  IonButton,
} from '@modus/ionic-vue'
import cart from '@/composables/cart'
import { defineComponent, ref } from 'vue'
import Menu from '@/components/Menu.vue'
import CartComponent from '@/components/CartComponent.vue'
import { menuController } from '@ionic/core'
import { close } from 'ionicons/icons'
import { addIcons } from 'ionicons'

addIcons({ close })

export default defineComponent({
  name: 'NavBar',
  components: {
    IonTabBar,
    IonIcon,
    IonLabel,
    IonTabButton,
    IonMenuButton,
    Menu,
    IonBadge,
    IonModal,
    IonButton,
    CartComponent,
  },
  setup() {
    const isOpen = ref(false)
    function openMenuComponent() {
      menuController.open('main-menu')
    }
    function openModalComponent() {
      isOpen.value = true
    }

    function willDismiss() {
      isOpen.value = false
    }
    return {
      openMenuComponent,
      cart,
      isOpen,
      openModalComponent,
      willDismiss,
    }
  },
})
</script>
<style scoped>
nav {
  position: fixed;
}

.cart {
  color: grey;
}
ion-tab-bar {
  justify-content: left;
  width: 100%;
  overflow: hidden;
}
ion-title.ios {
  margin-top: 1rem;
}
ion-menu-button.ios {
  margin-left: 0.6rem;
}
</style>
