<template>
  <div>
    <ion-list>
      <ion-list-header>
        <ion-label>
          <ion-skeleton-text animated style="width: 20%;"></ion-skeleton-text>
        </ion-label>
      </ion-list-header>
      <ion-item v-for="(n, idx) in Array(5)" :key="idx">
        <ion-avatar slot="start">
          <ion-skeleton-text animated></ion-skeleton-text>
        </ion-avatar>
        <ion-label>
          <h3>
            <ion-skeleton-text animated style="width: 50%;"></ion-skeleton-text>
          </h3>
          <p>
            <ion-skeleton-text animated style="width: 80%;"></ion-skeleton-text>
          </p>
          <p>
            <ion-skeleton-text animated style="width: 60%;"></ion-skeleton-text>
          </p>
        </ion-label>
        <ion-thumbnail slot="end">
          <ion-skeleton-text animated></ion-skeleton-text>
        </ion-thumbnail>
      </ion-item>
    </ion-list>
  </div>
</template>

<style scoped>
.custom-skeleton ion-skeleton-text {
  line-height: 13px;
}

.custom-skeleton ion-skeleton-text:last-child {
  margin-bottom: 5px;
}
</style>
