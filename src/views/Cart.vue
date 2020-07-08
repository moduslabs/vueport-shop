<template>
  <IonTab tab="cart">
    <IonContent>
      <IonText v-if="cartState.cartItems === 0">
        Your <IonIcon icon="cart" class="ion-hide-sm-down" /> is empty
      </IonText>
      <IonText v-if="cartState.cartItems > 0">
        Your cart has {{ cartState.cartItems }} items
      </IonText>
    </IonContent>
  </IonTab>
</template>

<script>
import { IonContent, IonText, IonTab, IonIcon } from '@modus/ionic-vue'
import cartState from '@/composables/cart/index'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Cart',
  components: {
    IonContent,
    IonText,
    IonTab,
    IonIcon,
  },
  setup() {
    return { cartState }
  },
})
</script>
