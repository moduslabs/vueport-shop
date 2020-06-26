<template>
  <IonTab tab="about">
    <IonContent>
      <h1 align="center">Welcome to Vueport-Shop</h1>
      <IonText color="primary" class="text">
        This website was built using Modus' Ionic-Vue library, which you can
        check out on GitHub. This project was built as part of Modus Create's
        open source projects.
      </IonText>
      <IonText color="danger" class="text">
        You can find out more about Modus' other projects on our website.
      </IonText>
    </IonContent>
  </IonTab>
</template>

<script lang="ts">
import { IonContent, IonText, IonTab } from '@modus/ionic-vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonText,
    IonTab,
  },
})
</script>
