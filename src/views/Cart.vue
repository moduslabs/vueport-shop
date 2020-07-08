<template>
  <IonTab tab="cart">
    <IonContent>
      <IonText v-if="cart.isEmpty">
        Your <IonIcon icon="cart" class="ion-hide-sm-down" /> is empty
      </IonText>
      <IonText v-if="!cart.isEmpty">
        {{ cart.items.value }}
      </IonText>
    </IonContent>
  </IonTab>
</template>

<script>
import { IonContent, IonText, IonTab, IonIcon } from '@modus/ionic-vue'
import cart from '@/composables/cart/index'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Cart',
  components: {
    IonContent,
    IonText,
    IonTab,
    IonIcon,
  },
  setup() {
    return { cart }
  },
})
</script>
