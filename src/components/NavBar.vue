<template>
  <IonHeader>
    <IonToolbar>
      <IonTitle>
        Vueport Shop
      </IonTitle>
    </IonToolbar>
  </IonHeader>
</template>
<script>
import { IonHeader, IonToolbar, IonTitle } from '@modus/ionic-vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'NavBar',
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
  },
})
</script>
