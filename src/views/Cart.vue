<template>
  <IonTab tab="cart">
    <IonContent>
      <IonText v-if="cart.items.length === 0">
        Your <IonIcon icon="cart" class="ion-hide-sm-down" /> is empty
      </IonText>
      <IonList v-if="cart.items.length > 0">
        <IonText> You have {{ cart.totalItems() }} items in your cart </IonText>
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
        <IonLabel>{{ 'Total: ' + currency(calcTotal()) }}</IonLabel>
        <RouterLink to="/checkout">
          <IonButton fill="outline" color="dark">
            Checkout
          </IonButton>
        </RouterLink>
      </IonList>
    </IonContent>
  </IonTab>
</template>

<script type="ts">
import {
  IonContent,
  IonText,
  IonTab,
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

function getCurrencyFormat() {
  const intl = new Intl.NumberFormat(navigator.language, {
    maximumFractionDigits: 2,
    style: 'currency',
    currency: 'USD',
  })

  return intl.format
}

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
    IonLabel,
    IonImg,
    IonGrid,
    IonRow,
    IonCol,
  },
  setup() {
    const currency = getCurrencyFormat()
    function removeItem(item){
      cart.remove(item)
    }
    function calcTotal() {
      let total = 0

      cart.items.value.forEach((item) => {
        const quantity = cart.cartCapacity.value.filter((quantity) => quantity.id === item.id)[0]
        for (let i = 0; i < quantity.num; i++){
          total = total + item.price
        }
      })

      return total
    }

    return { cart, calcTotal, currency, removeItem }
  },
})
</script>
<style scoped>
ion-label {
  word-wrap: break-word;
}
</style>
