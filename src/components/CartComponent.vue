<template>
  <IonContent class="cart">
    <IonText v-if="cart.totalItems === 0">
      Your <IonIcon icon="cart" /> is empty
    </IonText>

    <IonList v-else>
      <IonTitle>Your Cart</IonTitle>
      <IonText> You have {{ cart.totalItems }} items in your cart </IonText>
      <IonItem v-for="[skuId, item] in Array.from(cart.items)" :key="skuId">
        <IonCard class="card">
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonThumbnail class="product-image-container">
                  <IonImg
                    class="product-image"
                    :alt="item.product.title"
                    :src="item.product.images[0]"
                  />
                </IonThumbnail>
              </IonCol>
              <IonCol>
                <b>
                  <IonText color="primary">{{ item.product.title }} </IonText>
                </b>
                <br />
                <i>
                  {{ item.variant.title }}
                </i>
              </IonCol>
              <IonCol>
                Qty: <IonLabel>{{ item.quantity }}</IonLabel>
              </IonCol>
              <IonCol>
                <IonText>
                  {{ currency(item.price) }}
                </IonText>
              </IonCol>
              <IonCol>
                <IonButton
                  @click="removeItem(skuId)"
                  class="remove"
                  fill="clear"
                  color="dark"
                >
                  X
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonCard>
      </IonItem>
      <IonLabel>{{ 'Total: ' + currency(cart.totalCost) }}</IonLabel>
      <br />
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
  IonThumbnail,
  IonCard,
  IonTitle,
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
    IonThumbnail,
    IonCard,
    IonTitle,
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
.card {
  width: 100%;
}
.cart {
  text-align: center;
}
.product-image-container {
  width: 4rem;
  height: 4rem;
}

.product-image {
  border-radius: 0.2rem;
}
.remove {
  text-align: center;
}
</style>
