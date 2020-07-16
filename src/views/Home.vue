<template>
  <IonTab tab="collections">
    <IonContent>
      <IonRouterView v-slot="{ Component, transitionProps }">
        <Suspense>
          <template #default>
            <Transition v-bind="transitionProps">
              <component :is="Component" />
            </Transition>
          </template>
        </Suspense>
      </IonRouterView>
    </IonContent>
  </IonTab>
</template>

<script lang="ts">
import { IonContent, IonTab, IonRouterView } from '@modus/ionic-vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
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
