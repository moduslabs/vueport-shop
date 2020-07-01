<template>
  <IonItem>
    <IonLabel position="stacked">
      {{ name }}
      <IonText color="danger">*</IonText>
    </IonLabel>
    <IonInput required :type="inputType" :placeholder="name" />
  </IonItem>
</template>

<script>
import { defineComponent } from 'vue'
import { IonLabel, IonInput, IonText, IonItem } from '@modus/ionic-vue'
export default defineComponent({
  name: 'Input',
  components: {
    IonLabel,
    IonInput,
    IonText,
    IonItem,
  },
  props: {
    name: String,
    inputType: String,
  },
})
</script>
