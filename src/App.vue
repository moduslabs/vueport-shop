<template>
  <IonApp>
    <IonRouterView />
  </IonApp>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
import { IonApp, IonRouterView } from "@modus/ionic-vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonRouterView,
  },
  setup() {
    const { currentRoute } = useRouter();

    watch(currentRoute, (to) => {
      document.title = to.meta.title || "Vue-Port Shop";
    });
  },
});
</script>
