<template>
  <IonApp>
    <IonRouterView />
  </IonApp>
</template>

<script lang="ts">
import { IonApp, IonRouterView } from "@modus/ionic-vue";
export default {
  name: "App",
  components: {
    IonApp,
    IonRouterView,
  },
  watch: {
    $route: {
      immediate: true,
      handler(to: any, from: any) {
        document.title = to.meta.title || 'Vue-Port Shop';
      }
    },
  }
};
</script>
