<template>
  <ion-page>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Vue-port Shop</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <h1>Welcome</h1>
      <RouterLink to="/hello">Hello World</RouterLink>
    </IonContent>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@modus/ionic-vue'

export default defineComponent({
  name: 'Home',
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
  },
})
</script>
