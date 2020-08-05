<template>
  <IonTab tab="about">
    <IonContent align="center">
      <h1>Welcome to Vueport-Shop</h1>
      <IonText color="primary" class="text">
        This website was built using Modus' Ionic-Vue library, which you can
        check out on
        <a href="https://github.com/ModusCreateOrg/ionic-vue">
          GitHub.
        </a>
      </IonText>
      <br />
      <IonText color="danger" class="text">
        This project was built as part of Modus Create's open source projects.
        You can find out more about Modus' other projects on our
        <a href="https://labs.moduscreate.com/">
          website.
        </a>
      </IonText>
      <h2>Contributors</h2>
      <a href="https://github.com/djtimmy679">
        <IonChip>
          <IonAvatar>
            <img
              src="https://ca.slack-edge.com/T025W8CSY-U013Q697PC2-ae787704615f-512"
            />
          </IonAvatar>
          <IonLabel>Tim Vu</IonLabel>
        </IonChip>
      </a>
      <a href="https://github.com/TCModus">
        <IonChip>
          <IonAvatar>
            <img
              src="https://avatars3.githubusercontent.com/u/63469617?s=460&u=666630b68e261d4437d0b21dec0a5a7e26e55e01&v=4"
            />
          </IonAvatar>
          <IonLabel>Tom Collins</IonLabel>
        </IonChip>
      </a>
      <a href="https://github.com/grgur">
        <IonChip>
          <IonAvatar>
            <img
              src="https://avatars1.githubusercontent.com/u/733074?s=460&u=9b66c755966ba5b2a7d01c6d7246204f37efbb49&v=4"
            />
          </IonAvatar>
          <IonLabel>Grgur Grisogono</IonLabel>
        </IonChip>
      </a>
      <a href="https://github.com/michaeltintiuc">
        <IonChip>
          <IonAvatar>
            <img
              src="https://avatars2.githubusercontent.com/u/1321256?s=460&v=4"
            />
          </IonAvatar>
          <IonLabel>Michael Tintiuc</IonLabel>
        </IonChip>
      </a>
    </IonContent>
  </IonTab>
</template>

<script lang="ts">
import {
  IonContent,
  IonText,
  IonTab,
  IonChip,
  IonAvatar,
} from '@modus/ionic-vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  components: {
    IonContent,
    IonText,
    IonTab,
    IonChip,
    IonAvatar,
  },
})
</script>
