<template>
  <IonTab tab="collections">
    <IonRouterView />
    <IonContent v-if="$route.path === '/'">
      <IonList>
        <IonItemGroup v-for="category in categories" :key="category.id">
          <IonItemDivider>
            <IonItem>
              <RouterLink :to="category.path">
                <IonImg
                  class="image"
                  :src="category.image"
                  :alt="category.name"
                />
              </RouterLink>
            </IonItem>
          </IonItemDivider>
          <IonItemDivider>
            <IonItem>
              <IonLabel>
                {{ category.name }}
              </IonLabel>
            </IonItem>
          </IonItemDivider>
          <IonItemDivider>
            <IonItem>
              <RouterLink :to="category.path">
                <IonButton>Shop Now</IonButton>
              </RouterLink>
            </IonItem>
          </IonItemDivider>
        </IonItemGroup>
      </IonList>
    </IonContent>
  </IonTab>
</template>

<script lang="ts">
import {
  IonContent,
  IonRouterView,
  IonTab,
  IonList,
  IonItem,
  IonItemDivider,
  IonImg,
  IonButton,
  IonItemGroup,
  IonLabel,
} from '@modus/ionic-vue'
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

export default defineComponent({
  name: 'Home',
  components: {
    RouterLink,
    IonContent,
    IonRouterView,
    IonTab,
    IonList,
    IonItem,
    IonItemDivider,
    IonImg,
    IonButton,
    IonItemGroup,
    IonLabel,
  },
  props: {
    categories: Array,
  },
})
</script>
