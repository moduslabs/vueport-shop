<template>
  <div class="ion-page">
    <NavBar/>
    <IonLabel>
      <RouterLink to="/">Home Page</RouterLink>
    </IonLabel>
    <IonLabel>
      You are currently on {{msg}}
    </IonLabel>
  </div>
</template>

<script lang="ts">
import { IonLabel } from "@modus/ionic-vue";
import NavBar from './NavBar.vue'
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  components: {
    IonLabel,
    NavBar
  },
};
</script>
