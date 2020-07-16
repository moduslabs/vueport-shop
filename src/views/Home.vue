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
      <CategoryList v-if="$route.path === '/'" />
    </IonContent>
  </IonTab>
</template>

<script lang="ts">
import { IonContent, IonTab, IonRouterView } from '@modus/ionic-vue'
import { defineComponent } from 'vue'
import CategoryList from '@/components/CategoryList.vue'

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonTab,
    IonRouterView,
    CategoryList,
  },
})
</script>
<style scoped>
.list {
  padding-bottom: 3rem;
}
</style>
