<template>
  <div class="ion-page">
    <IonHeader>
      <IonToolbar>
        <IonTitle>Hello World</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonLabel>
      <RouterLink to= "/">Home Page</RouterLink>
    </IonLabel>
  </div>
</template>

<script lang="ts">
  import {
    IonHeader, IonTitle, IonToolbar, IonLabel
  } from '@modus/ionic-vue'
  export default {
    name: 'HelloWorld',
    props: {
      msg: String,
    },
    components: {
      IonHeader, IonTitle, IonToolbar, IonLabel
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>