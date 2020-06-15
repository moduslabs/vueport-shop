<template>
  <div class="ion-page">
    <IonHeader>
      <IonToolbar>
        <IonTitle>Vue-port Shop</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonLabel>
      <RouterLink to= "/hello">Hello World</RouterLink>
    </IonLabel>
  </div>
</template>

<script lang="ts">
  import {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonLabel
  } from '@modus/ionic-vue';
  export default {
    name: "Home",
    components: {
      IonHeader,
      IonToolbar,
      IonTitle,
      IonLabel
    },
    watch: {
      $route: {
        immediate: true,
        handler(to: any) {
          document.title = to.meta.title;
        }
      },
    }
  }
</script>