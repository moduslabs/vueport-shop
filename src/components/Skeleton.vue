<template>
  <div>
    <IonList>
      <IonListHeader>
        <IonLabel>
          <IonSkeletonText animated style="width: 20%;"></IonSkeletonText>
        </IonLabel>
      </IonListHeader>
      <IonItem v-for="(n, idx) in Array(5)" :key="idx">
        <IonAvatar slot="start">
          <IonSkeletonText animated></IonSkeletonText>
        </IonAvatar>
        <IonLabel>
          <h3>
            <IonSkeletonText animated style="width: 50%;"></IonSkeletonText>
          </h3>
          <p>
            <IonSkeletonText animated style="width: 80%;"></IonSkeletonText>
          </p>
          <p>
            <IonSkeletonText animated style="width: 60%;"></IonSkeletonText>
          </p>
        </IonLabel>
        <IonThumbnail slot="end">
          <IonSkeletonText animated></IonSkeletonText>
        </IonThumbnail>
      </IonItem>
    </IonList>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {
  IonList,
  IonLabel,
  IonItem,
  IonThumbnail,
  IonSkeletonText,
  IonListHeader,
  IonAvatar,
} from '@modus/ionic-vue'

export default defineComponent({
  name: 'Skeleton',
  components: {
    IonList,
    IonLabel,
    IonItem,
    IonThumbnail,
    IonSkeletonText,
    IonListHeader,
    IonAvatar,
  },
})
</script>

<style scoped>
.custom-skeleton IonSkeletonText {
  line-height: 13px;
}

.custom-skeleton IonSkeletonText:last-child {
  margin-bottom: 5px;
}
</style>
