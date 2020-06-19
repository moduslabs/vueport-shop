<template>
  <div class="tabs">
    <IonTabs>
      <IonTab tab="home">
        <HomePage :categories="categories" />
      </IonTab>
      <IonTab tab="tshirts">
        <CollectionList heading="tshirts" />
      </IonTab>
      <IonTab tab="hoodies">
        <CollectionList heading="hoodies" />
      </IonTab>
      <IonTab tab="shorts">
        <CollectionList heading="shorts" />
      </IonTab>
      <IonTab tab="jeans">
        <CollectionList heading="jeans" />
      </IonTab>
      <IonTab tab="cart">
        <IonLabel>Cart page</IonLabel>
      </IonTab>
      <template v-slot:top>
        <IonTabBar>
          <IonTitle>Vueport Shop</IonTitle>
          <IonTabButton tab="home">
            <IonLabel>Home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tshirts">
            <IonLabel>T-Shirts</IonLabel>
          </IonTabButton>
          <IonTabButton tab="shorts">
            <IonLabel>Shorts</IonLabel>
          </IonTabButton>
          <IonTabButton tab="jeans">
            <IonLabel>Jeans</IonLabel>
          </IonTabButton>
          <IonTabButton tab="cart">
            <IonIcon icon="cart" />
            <IonLabel>Cart</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </template>
    </IonTabs>
  </div>
</template>

<script lang="ts">
import {
  IonTabs,
  IonTab,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonTitle,
  IonIcon,
} from '@modus/ionic-vue'
import { defineComponent } from 'vue'
import HomePage from '../components/HomePage.vue'
import CollectionList from '../components/CollectionList.vue'
export default defineComponent({
  name: 'Home',
  components: {
    CollectionList,
    IonTabs,
    IonTab,
    HomePage,
    IonTabBar,
    IonTabButton,
    IonLabel,
    IonTitle,
    IonIcon,
  },
  props: {
    categories: Array,
  },
})
</script>
<style>
ion-icon {
  color: black;
}
</style>
