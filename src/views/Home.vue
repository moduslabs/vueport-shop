<template>
  <IonTab tab="collections">
    <IonRouterView v-slot="{ Component, transitionProps }">
      <Suspense>
        <template #default>
          <Transition v-bind="transitionProps">
            <component :is="Component" />
          </Transition>
        </template>
        <template #fallback>
          <Skeleton />
        </template>
      </Suspense>
    </IonRouterView>
  </IonTab>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonTab, IonRouterView } from '@modus/ionic-vue'
import Skeleton from '@/components/Skeleton.vue'

export default defineComponent({
  name: 'Home',
  components: {
    IonTab,
    IonRouterView,
    Skeleton,
  },
})
</script>
<style scoped>
.list {
  padding-bottom: 3rem;
}
</style>
