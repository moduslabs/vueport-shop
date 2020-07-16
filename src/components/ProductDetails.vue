<template>
  <IonContent>
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
      <CartComponent />
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
import CartComponent from '@/components/CartComponent.vue'
export default defineComponent({
  name: 'ProductDetails',
  components: {
    IonContent,
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
    CartComponent,
  },
  async setup() {
    const product = await useProduct(useRoute().params.productId)
    const isOpen = ref(false)
    const currency = cart.getCurrencyFormat()
    const quantity = ref(1)
    const variant = ref('')
    const ogTitle = product['products'].value.title
    function setQuantity(num: number) {
      quantity.value = num
    }
    function setVariant(str: string) {
      variant.value = str
    }
    function openModalComponent() {
      if (variant.value) {
        product[
          'products'
        ].value.title = `${variant.value} ${ogTitle} (${quantity.value})`
      } else {
        product['products'].value.title = `${ogTitle} (${quantity.value})`
      }
      cart.add(product, quantity.value)
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
      quantity,
    }
  },
})
</script>
