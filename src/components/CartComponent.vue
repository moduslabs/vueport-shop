<template>
  <IonContent>
    <IonText v-if="cart.items.length === 0">
      Your <IonIcon icon="cart" class="ion-hide-sm-down" /> is empty
    </IonText>
    <IonList v-if="cart.items.length > 0">
      <IonText> You have {{ cart.totalItems }} items in your cart </IonText>
      <IonItem v-for="item in cart.items" :key="item.id">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonImg
                :alt="item['products'].title"
                :src="item['products'].images[0]"
              />
            </IonCol>
            <IonCol>
              <IonLabel class="title">{{ item['products'].title }}</IonLabel>
            </IonCol>
            <IonCol>
              <IonLabel>{{ currency(item['products'].price) }}</IonLabel>
            </IonCol>
            <IonCol>
              <IonButton @click="removeItem(item)">X</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonItem>
      <IonLabel>{{ 'Total: ' + currency(cart.totalCost) }}</IonLabel>
      <RouterLink to="/cart/checkout">
        <IonButton fill="outline" color="dark">
          Checkout
        </IonButton>
      </RouterLink>
    </IonList>
  </IonContent>
</template>

<script type="ts">
import {
  IonContent,
  IonText,
  IonIcon,
  IonList,
  IonItem,
  IonButton,
  IonLabel,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
} from '@modus/ionic-vue'
import cart from '../composables/cart/index'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CartComponent',
  components: {
    IonContent,
    IonText,
    IonIcon,
    IonList,
    IonItem,
    IonButton,
    IonLabel,
    IonImg,
    IonGrid,
    IonRow,
    IonCol,
  },
  setup() {
    const currency = cart.getCurrencyFormat()
    function removeItem(item){
      cart.remove(item)
    }
    return { cart, currency, removeItem }
  },
})
</script>
<style scoped>
ion-label {
  word-wrap: break-word;
}
</style>