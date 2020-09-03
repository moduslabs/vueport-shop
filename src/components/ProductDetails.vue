<template>
  <div class="ion-page">
    <IonContent v-if="product">
      <header>
        <div class="product-image">
          <IonImg
            :alt="product.title"
            :src="product.images[1].replace('1600x900', '860x483')"
            class="product-image"
          />
        </div>

        <IonItem lines="none">
          <IonText color="dark">
            <h2>{{ product.title }}</h2>
          </IonText>
        </IonItem>
      </header>

      <IonItem class="tags" lines="none">
        <IonBadge
          v-for="tag in product.tags.slice(0, 3)"
          :key="tag"
          color="success"
          class="tag"
          >{{ tag }}</IonBadge
        >
      </IonItem>

      <IonItem lines="none">
        <div class="qty_price">
          <IonText color="primary">
            <h2>{{ currency(product.price) }}</h2>
          </IonText>
          <aside className="qty_container">
            <IonLabel> Qty </IonLabel>
            <IonInput
              name="quantity"
              placeholder="1"
              type="number"
              role="form"
              class="qty"
              inputmode="numeric"
              :max="variant.quantity"
              min="1"
              step="1"
              @input="(event) => setQuantity(parseInt(event.target.value))"
            />
          </aside>
        </div>
      </IonItem>

      <IonItem lines="none" class="description">
        <IonText color="medium">{{ product.description }}</IonText>
      </IonItem>

      <footer slot="fixed">
        <IonSelect
          placeholder="Model"
          class="select"
          @ionChange="setVariant"
          :value="variant.title"
        >
          <IonSelectOption
            v-for="variant in uniqueVariants"
            :key="variant.id"
            v-bind:value="variant.title"
            >{{ variant.title }}
          </IonSelectOption>
        </IonSelect>

        <IonButton class="addBtn" @click="openModalComponent"
          >ADD TO CART</IonButton
        >
      </footer>

      <IonModal
        :isOpen="isOpen"
        @willDismiss="willDismiss"
        :showBackdrop="true"
      >
        <CartComponent />

        <IonToolbar>
          <IonButton
            @click="toCheckout"
            color="primary"
            shape="round"
            expand="full"
            slot="primary"
            v-if="cart.totalCost.value > 0"
          >
            <IonIcon slot="start" icon="close" /> Checkout
          </IonButton>
          <IonButton
            @click="willDismiss"
            color="light"
            shape="round"
            expand="block"
            slot="secondary"
          >
            <IonIcon slot="start" icon="close" /> Close
          </IonButton>
        </IonToolbar>
      </IonModal>
    </IonContent>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import {
  IonContent,
  IonText,
  IonImg,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonModal,
  IonInput,
  IonBadge,
  IonIcon,
  IonToolbar,
} from '@modus/ionic-vue'
import { useRoute, useRouter } from 'vue-router'
import { useProduct } from '@/composables/products'
import cart from '@/composables/cart'
import CartComponent from '@/components/CartComponent.vue'
import useCategories from '@/composables/categories'
import { close } from 'ionicons/icons'
import { addIcons } from 'ionicons'

addIcons({ close })

export default defineComponent({
  name: 'ProductDetails',
  components: {
    IonContent,
    IonText,
    IonImg,
    IonItem,
    IonLabel,
    IonSelect,
    IonSelectOption,
    IonButton,
    IonModal,
    IonInput,
    CartComponent,
    IonBadge,
    IonIcon,
    IonToolbar,
  },

  async setup() {
    const { params } = useRoute()
    const { push } = useRouter()
    const { product } = await useProduct(params.productId as string)
    const isOpen = ref(false)
    const currency = cart.getCurrencyFormat()
    const quantity = ref(1)
    const defaultVariant = product.value.variants[0]
    const variant = ref(defaultVariant)
    const { getCategoryById } = await useCategories()
    const category = ref(getCategoryById(product.value.category))

    // document.title = product.value.title

    const uniqueVariants = Array.from(
      new Map(
        product.value.variants.map((variant) => [variant['title'], variant])
      ).values()
    )

    function setQuantity(num: number) {
      quantity.value = num
    }

    function setVariant(e: Event) {
      const target = e.target as HTMLSelectElement
      const selected = target?.value
      variant.value = selected
        ? uniqueVariants.find(
            (variant) => variant.title === selected.valueOf()
          ) || defaultVariant
        : defaultVariant
    }

    function openModalComponent() {
      isOpen.value = true
      cart.add(product.value, variant.value, quantity.value)
    }

    function willDismiss() {
      isOpen.value = false
    }

    function toCheckout() {
      push('/checkout')
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
      variant,
      uniqueVariants,
      category,
      toCheckout,
    }
  },
})
</script>

<style scoped>
h1 {
  margin-bottom: 0;
}

.product-image {
  width: 100vw;
  height: calc(100vw / (16 / 9));
}

.tag {
  margin-right: 0.825rem;
}

.qty_price {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.qty_container {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.qty {
  width: 2rem;
  text-align: center;
}

.qty:invalid {
  color: red;
  border: 1px solid red;
}

.description {
  padding: 1rem 0;
}

.addBtn {
  z-index: 100;
}

footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  bottom: 0;
  right: 0;
  left: 0;
}
</style>
