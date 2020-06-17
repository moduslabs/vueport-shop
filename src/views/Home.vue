<template>
  <div class="ion-page">
    <NavBar />
    <IonLabel>
      <RouterLink to="/hello">Hello World</RouterLink>
    </IonLabel>
  </div>
</template>

<script lang="ts">
import { IonLabel } from "@modus/ionic-vue";
import NavBar from '../components/NavBar.vue'
export default {
  name: "Home",
  components: {
    IonLabel,
    NavBar
  },
};
</script>
