<template>
  <ion-page>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Hello World</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <h1>What's cookin'?</h1>
      <RouterLink to="/">Home Page</RouterLink>
    </IonContent>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonHeader, IonTitle, IonToolbar, IonContent } from '@modus/ionic-vue'

export default defineComponent({
  name: 'HelloWorld',
  components: {
    IonHeader,
    IonTitle,
    IonToolbar,
    IonContent,
  },
})
</script>
