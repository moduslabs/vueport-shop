<template>
  <IonContent>
    <IonList>
      <IonItem>
        <IonLabel>Order Submitted</IonLabel>
      </IonItem>
      <IonItem>
        <RouterLink to="/cart">
          <IonLabel>Back to Cart</IonLabel>
        </RouterLink>
      </IonItem>
      <IonItem>
        <RouterLink to="/">
          <IonLabel>Back to Home</IonLabel>
        </RouterLink>
      </IonItem>
    </IonList>
  </IonContent>
</template>

<script>
import { IonLabel, IonContent, IonList, IonItem } from '@modus/ionic-vue'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'OrderCompleted',
  components: {
    IonLabel,
    IonContent,
    IonItem,
    IonList,
  },
})
</script>
