<template>
  <div class="ion-page">
    <IonHeader>
      <IonToolbar>
        <IonTitle>Vue-port Shop</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <h1>Welcome</h1>
      <RouterLink to="/hello">Hello World</RouterLink>
    </IonContent>
  </div>
</template>

<script lang="ts">
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@modus/ionic-vue'
export default {
  name: 'Home',
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
  },
}
</script>
