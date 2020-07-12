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
                <IonSelect
                  v-model="variant"
                  placeholder="Select Size"
                  class="select"
                  @ionChange="(e) => setVariant(e.target.value)"
                >
                  <IonSelectOption
                    v-for="variant in product['products'].variants"
                    :key="variant.id"
                    v-bind:value="variant.title"
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
                  role="form"
                  @input="(event) => setQuantity(parseInt(event.target.value))"
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
    const variant = ref('')
    const ogTitle = product['products'].value.title
    function setQuantity(num: number) {
      quantity = num
    }
    function setVariant(str: string) {
      variant.value = str
    }
    function openModalComponent() {
      if (variant.value) {
        product[
          'products'
        ].value.title = `${variant.value} ${ogTitle} (${quantity})`
      } else {
        product['products'].value.title = `${ogTitle} (${quantity})`
      }
      for (let i = 0; i < quantity; i++) {
        cart.add(product)
      }
      cart.filter()
      console.log(cart.items.value)
      console.log(cart.uniqueItems.value)
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
      setVariant,
    }
  },
})
</script>
