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
                <IonSelect placeholder="Select Quantity" class="select">
                  <IonSelectOption value="1">1</IonSelectOption>
                  <IonSelectOption value="2">2</IonSelectOption>
                  <IonSelectOption value="3">3</IonSelectOption>
                  <IonSelectOption value="4">4</IonSelectOption>
                  <IonSelectOption value="5">5</IonSelectOption>
                </IonSelect>
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
      <IonText>{{ product.title }} added to cart</IonText>
      <RouterLink to="/cart">
        <IonButton>View Cart</IonButton>
      </RouterLink>
      <RouterLink to="/cart">
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
} from '@modus/ionic-vue'
import { useRoute } from 'vue-router'
import useProduct from '@/composables/products'
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
  },
  props: {
    cartItems: {
      required: true,
      type: Number,
    },
    cartIncrement: {
      required: true,
      type: Function,
    },
  },
  async setup(props) {
    const isOpen = ref(false)
    const product = await useProduct(useRoute().params.productId)
    const currency = getCurrencyFormat()

    function openModalComponent() {
      props.cartIncrement()
      isOpen.value = true
    }

    function willDismiss() {
      isOpen.value = false
    }

    return {
      product,
      currency,
      isOpen,
      openModalComponent,
      willDismiss,
    }
  },
})
</script>
