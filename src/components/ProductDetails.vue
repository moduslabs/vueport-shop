<template>
  <IonContent>
    <IonRouterView />
    <IonGrid>
      <IonRow>
        <IonCol>
          <IonImg :alt="product.title" :src="product.image[1]" />
        </IonCol>
        <IonCol>
          <IonItemGroup>
            <IonItemDivider>
              <IonItem>
                <IonText color="dark">{{ product.title }}</IonText>
              </IonItem>
            </IonItemDivider>
            <IonItemDivider>
              <IonItem>
                <IonText color="medium">{{ product.price }}</IonText>
              </IonItem>
            </IonItemDivider>
            <IonItemDivider>
              <IonItem>
                <IonLabel>
                  Size
                </IonLabel>
                <IonSelect placeholder="Select Size">
                  <IonSelectOption
                    :v-for="variant in product.variants"
                    :key="variant.id"
                    :value="variant.sku"
                    >{{ variant.title }}</IonSelectOption
                  >
                </IonSelect>
              </IonItem>
            </IonItemDivider>
            <IonItemDivider>
              <IonItem>
                <IonLabel>
                  Quantity
                </IonLabel>
                <IonSelect placeholder="Select Quantity">
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
                <IonText color="medium">{{ product.description }}</IonText>
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
import { products } from '@/mockData/product-list'

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
  data() {
    const currentProd = products.filter(
      (product) => product.id === this.prod
    )[0]
    return {
      product: currentProd,
    }
  },
})
</script>

<style scoped></style>
