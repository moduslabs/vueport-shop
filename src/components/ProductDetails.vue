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
                <IonButton>ADD TO CART</IonButton>
              </IonItem>
            </IonItemDivider>
          </IonItemGroup>
        </IonCol>
      </IonRow>
    </IonGrid>
  </IonContent>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
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
  },
  props: {
    prod: String,
  },
  async setup() {
    const {
      params: { productId },
    } = useRoute()
    const product = await useProduct(productId)

    const currency = getCurrencyFormat()
    return { product, currency }
  },
})
</script>
