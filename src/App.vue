<template>
  <IonApp>
    <IonRouterView />
  </IonApp>
</template>

<script lang="ts">
import { IonApp, IonRouterView } from '@modus/ionic-vue'
export default {
  name: 'App',
  components: {
    IonApp,
    IonRouterView,
  },
  watch: {
    $route: {
      immediate: true,
      handler(to: any, from: any) {
        document.title = to.meta.title || 'Some Default Title'
      },
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
