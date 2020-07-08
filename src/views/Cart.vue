<template>
  <IonTab tab="cart">
    <IonContent>
      <IonText>TEST</IonText>
    </IonContent>
  </IonTab>
</template>

<script>
import { IonContent, IonText, IonTab } from '@modus/ionic-vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Cart',
  components: {
    IonContent,
    IonText,
    IonTab,
  },
})
</script>
