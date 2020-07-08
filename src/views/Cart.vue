<template>
  <IonTab tab="cart">
    <IonContent>
      <IonText v-if="cart.isEmpty">
        Your <IonIcon icon="cart" class="ion-hide-sm-down" /> is empty
      </IonText>
      <IonText v-if="!cart.isEmpty">
        You have {{ cart.size }} items in your cart
      </IonText>
      <IonList>
        <IonItem v-for="item in cart.items" :key="item.id">
          <IonLabel>{{ item['products'].title }}</IonLabel>
        </IonItem>
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
  },
  setup() {
    return { cart }
  },
})
</script>
