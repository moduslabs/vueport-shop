<template>
  <IonContent>
    <IonText v-if="cart.totalItems === 0">
      Your <IonIcon icon="cart" /> is empty
    </IonText>

    <IonList v-else>
      <IonText> You have {{ cart.totalItems }} items in your cart </IonText>
      <IonItem v-for="[skuId, item] in Array.from(cart.items)" :key="skuId">
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonImg :alt="item.product.title" :src="item.product.images[0]" />
            </IonCol>
            <IonCol>
              <IonLabel class="title"
                >{{ item.product.title }}, {{ item.variant.title }} ({{
                  item.quantity
                }})</IonLabel
              >
            </IonCol>
            <IonCol>
              <IonLabel>{{ currency(item.price) }}</IonLabel>
            </IonCol>
            <IonCol>
              <IonButton @click="removeItem(skuId)">X</IonButton>
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
import cart from '../composables/cart'
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
