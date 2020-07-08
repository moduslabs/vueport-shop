<template>
  <IonTab tab="cart">
    <IonContent>
      <IonText v-if="cart.isEmpty">
        Your <IonIcon icon="cart" class="ion-hide-sm-down" /> is empty
      </IonText>
      <IonList v-if="!cart.isEmpty">
        <IonText> You have {{ cart.size }} items in your cart </IonText>
        <IonItem v-for="item in cart.items" :key="item.id">
          <IonLabel>{{ item['products'].title }}</IonLabel>
        </IonItem>
        <RouterLink to="/checkout">
          <IonButton fill="outline" color="dark">
            Checkout
          </IonButton>
        </RouterLink>
      </IonList>
    </IonContent>
  </IonTab>
</template>

<script>
import {
  IonContent,
  IonText,
  IonTab,
  IonIcon,
  IonList,
  IonItem,
  IonButton,
} from '@modus/ionic-vue'
import cart from '@/composables/cart/index'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Cart',
  components: {
    IonContent,
    IonText,
    IonTab,
    IonIcon,
    IonList,
    IonItem,
    IonButton,
  },
  setup() {
    return { cart }
  },
})
</script>
