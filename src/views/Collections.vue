<template>
  <IonTab tab="collections">
    <CategoryList />
  </IonTab>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { IonTab } from '@modus/ionic-vue'
import CategoryList from '@/components/CategoryList.vue'

export default defineComponent({
  name: 'Home',
  components: {
    IonTab,
    CategoryList,
  },
})
</script>

<style scoped>
.list {
  padding-bottom: 3rem;
}
</style>
