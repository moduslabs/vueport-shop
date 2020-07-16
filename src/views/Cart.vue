<template>
  <IonTab tab="cart">
    <IonRouterView v-slot="{ Component, transitionProps }">
      <Transition v-bind="transitionProps">
        <component :is="Component" />
      </Transition>
    </IonRouterView>
  </IonTab>
</template>

<script lang="ts">
import { IonTab, IonRouterView } from '@modus/ionic-vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Cart',
  components: {
    IonTab,
    IonRouterView,
  },
})
</script>
<style scoped>
.list {
  padding-bottom: 3rem;
}
</style>
