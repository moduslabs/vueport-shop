<template>
  <IonHeader>
    <IonToolbar>
      <IonTitle id="title" align="center">
        <RouterLink to="/">Vueport Shop</RouterLink>
      </IonTitle>
      <ul id="menu">
        <li>
          <IonLabel>
            <RouterLink to="/tshirts">T-Shirts</RouterLink>
          </IonLabel>
        </li>
        <li>
          <IonLabel>
            <RouterLink to="/hoodies">Hoodies</RouterLink>
          </IonLabel>
        </li>
        <li>
          <IonLabel>
            <RouterLink to="/jeans">Jeans</RouterLink>
          </IonLabel>
        </li>
        <li>
          <IonLabel>
            <RouterLink to="/shorts">Shorts</RouterLink>
          </IonLabel>
        </li>
      </ul>
    </IonToolbar>
  </IonHeader>
</template>
<script>
import { IonHeader, IonToolbar, IonTitle, IonLabel } from '@modus/ionic-vue'
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

export default defineComponent({
  name: 'NavBar',
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonLabel,
    RouterLink,
  },
  props: {
    currentComponent: String,
  },
})
</script>
<style>
/* temporary until i install tailwind */
#title {
  padding: 0.25%;
  margin-top: 0.5%;
}
ul {
  text-align: center;
}
ul#menu li {
  display: inline;
  padding: 2%;
}
</style>
