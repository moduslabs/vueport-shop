<template>
  <IonContent>
    <IonRouterView />
    <IonGrid>
      <IonRow>
        <IonCol>
          <IonImg
            :alt="product['products'].title"
            :src="product['products'].images[1]"
          />
        </IonCol>
        <IonCol>
          <IonItemGroup>
            <IonItemDivider>
              <IonItem>
                <IonText color="dark">{{ product['products'].title }}</IonText>
              </IonItem>
            </IonItemDivider>
            <IonItemDivider>
              <IonItem>
                <IonText color="medium">
                  {{ currency(product['products'].price) }}
                </IonText>
              </IonItem>
            </IonItemDivider>
            <IonItemDivider>
              <IonItem>
                <IonLabel>
                  Size
                </IonLabel>
                <IonSelect placeholder="Select Size" class="select">
                  <IonSelectOption
                    v-for="variant in product['products'].variants"
                    :key="variant.id"
                    :value="variant.sku"
                    >{{ variant.title }}
                  </IonSelectOption>
                </IonSelect>
              </IonItem>
            </IonItemDivider>
            <IonItemDivider>
              <IonItem>
                <IonLabel>
                  Quantity
                </IonLabel>
                <IonInput
                  name="quantity"
                  placeholder="1"
                  type="number"
                  @input="(event) => setQuantity(event.target.value)"
                />
              </IonItem>
            </IonItemDivider>
            <IonItemDivider>
              <IonItem>
                <IonText color="dark">Description</IonText>
                <IonText color="medium">
                  {{ product['products'].description }}
                </IonText>
              </IonItem>
            </IonItemDivider>
            <IonItemDivider>
              <IonItem>
                <IonButton @click="openModalComponent">ADD TO CART</IonButton>
              </IonItem>
            </IonItemDivider>
          </IonItemGroup>
        </IonCol>
      </IonRow>
    </IonGrid>
    <IonModal :isOpen="isOpen" @willDismiss="willDismiss" :showBackdrop="true">
      <IonText>{{ product['products'].title }} added to cart</IonText>
      <RouterLink to="/cart">
        <IonButton>View Cart</IonButton>
      </RouterLink>
      <RouterLink to="/checkout">
        <IonButton>Checkout</IonButton>
      </RouterLink>
      <IonButton @click="willDismiss" size="small" color="light" shape="round"
        >X</IonButton
      >
    </IonModal>
  </IonContent>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import {
  IonContent,
  IonRouterView,
  IonText,
  IonImg,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonItemDivider,
  IonItemGroup,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonModal,
  IonInput,
} from '@modus/ionic-vue'
// import Input from '@/components/Input.vue'
import { useRoute } from 'vue-router'
import useProduct from '@/composables/products'
import cart from '@/composables/cart/index'
function getCurrencyFormat() {
  const intl = new Intl.NumberFormat(navigator.language, {
    maximumFractionDigits: 2,
    style: 'currency',
    currency: 'USD',
  })

  return intl.format
}
export default defineComponent({
  name: 'ProductDetails',
  components: {
    IonContent,
    IonRouterView,
    IonText,
    IonImg,
    IonGrid,
    IonRow,
    IonCol,
    IonItem,
    IonItemDivider,
    IonItemGroup,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonButton,
    IonModal,
    IonInput,
  },
  async setup() {
    const product = await useProduct(useRoute().params.productId)
    const isOpen = ref(false)
    const currency = getCurrencyFormat()
    let quantity = 1

    function setQuantity(num: number) {
      quantity = num
    }

    function openModalComponent() {
      for (let i = 0; i < quantity; i++) {
        cart.add(product)
      }
      isOpen.value = true
    }

    function willDismiss() {
      isOpen.value = false
    }

    return {
      product,
      currency,
      isOpen,
      cart,
      openModalComponent,
      willDismiss,
      setQuantity,
    }
  },
})
</script>
