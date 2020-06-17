<template>
  <IonHeader>
    <IonToolbar>
      <IonTitle id="title">
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
export default defineComponent({
  name: 'NavBar',
  components: {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonLabel,
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
#title a {
  text-decoration: none;
  color: black;
}
ul#menu li {
  display: inline;
  padding: 2%;
  text-decoration: none;
}
li a {
  text-decoration: none;
  color: black;
}
</style>
