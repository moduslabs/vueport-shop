<template>
  <IonHeader translucent="true">
    <IonToolbar>
      <IonTitle>{{ 'Cart value: ' + currency(cart.totalCost.value) }}</IonTitle>
    </IonToolbar>
  </IonHeader>
  <IonContent class="cart">
    <IonTitle v-if="cart.totalItems.value === 0" class="title">
      Your
      <IonIcon icon="cart" /> is empty
    </IonTitle>

    <IonList v-else>
      <IonItem
        v-for="[skuId, item] in Array.from(cart.items.value)"
        :key="skuId"
      >
        <IonThumbnail class="product-image-container" slot="start">
          <IonImg
            class="product-image"
            :alt="item.product.title"
            :src="item.product.images[0]"
          />
        </IonThumbnail>

        <article class="product-content">
          <main>
            <IonText color="primary" class="product-title"
              ><h6>{{ item.product.title }}</h6>
            </IonText>
            <IonText color="medium" class="product-variant">
              <div>{{ item.variant.title }}</div>
            </IonText>
          </main>
          <aside>
            <IonText color="dark">
              <h6>{{ currency(item.price) }}</h6>
            </IonText>
            <IonText color="medium" class="product-variant">
              <div>
                Qty: <span>{{ item.quantity }}</span>
              </div>
            </IonText>
          </aside>
        </article>

        <IonButton
          @click="removeItem(skuId)"
          class="remove"
          fill="clear"
          color="dark"
          slot="end"
        >
          <IonIcon slot="start" icon="close" />
        </IonButton>
      </IonItem>
    </IonList>
  </IonContent>
</template>

<script>
import {
  IonContent,
  IonText,
  IonIcon,
  IonList,
  IonButton,
  IonImg,
  IonThumbnail,
  IonItem,
  IonTitle,
  IonHeader,
  IonToolbar,
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
    IonButton,
    IonImg,
    IonThumbnail,
    IonItem,
    IonTitle,
    IonHeader,
    IonToolbar,
  },
  setup() {
    const currency = cart.getCurrencyFormat()

    function removeItem(item) {
      cart.remove(item)
    }
    return {
      cart,
      currency,
      removeItem,
    }
  },
})
</script>

<style scoped>
ion-list.ios {
  margin-top: 1.825rem;
}

.cart {
  text-align: center;
}

.card {
  width: 100%;
  text-align: left;
}

.product-image-container {
  width: 4rem;
  height: 4rem;
}

.product-image {
  border-radius: 0.2rem;
}

.product-title {
  font-weight: bold;
}

.product-content {
  display: grid;
  grid-template-columns: 1fr auto;
}

h6 {
  margin: 0;
}
</style>
