<template>
  <div class="ion-page">
    <IonHeader>
      <IonToolbar>
        <IonTitle>Hello World</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonLabel>
      <RouterLink to="/">Home Page</RouterLink>
    </IonLabel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { IonHeader, IonTitle, IonToolbar, IonLabel } from "@modus/ionic-vue";

export default defineComponent({
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    IonHeader,
    IonTitle,
    IonToolbar,
    IonLabel,
  },
});
</script>
