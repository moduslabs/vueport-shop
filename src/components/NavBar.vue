<template>
  <IonHeader>
    <IonToolbar>
      <RouterLink to="/">
        <IonTitle>
          Vueport Shop
        </IonTitle>
      </RouterLink>
      <IonIcon name="cart"></IonIcon>
    </IonToolbar>
    <IonToolbar>
      <RouterLink to="/tshirts">
        <IonLabel>
          T-Shirts
        </IonLabel>
      </RouterLink>
      <RouterLink to="/hoodies">
        <IonLabel>
          Hoodies
        </IonLabel>
      </RouterLink>
      <RouterLink to="/shorts">
        <IonLabel>
          Shorts
        </IonLabel>
      </RouterLink>
      <RouterLink to="/jeans">
        <IonLabel>
          Jeans
        </IonLabel>
      </RouterLink>
    </IonToolbar>
  </IonHeader>
</template>
<script lang="ts">
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonIcon,
  IonLabel,
} from '@modus/ionic-vue'
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

export default defineComponent({
  name: 'NavBar',
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonIcon,
    RouterLink,
    IonLabel,
  },
})
</script>
