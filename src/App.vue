<template>
  <IonText v-if="error" color="warning">{{ error }}</IonText>
  <Suspense>
    <template #default>
      <RouterView v-slot="{ Component, transitionProps }">
        <Transition v-bind="transitionProps">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </template>
    <template #fallback>
      <Skeleton />
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent, watch, onErrorCaptured, ref } from 'vue'
import { IonText } from '@modus/ionic-vue'
import { useRouter, RouterView } from 'vue-router'
import Skeleton from '@/components/Skeleton.vue'

import '@ionic/core/css/normalize.css'
import '@ionic/core/css/core.css'
import '@ionic/core/css/structure.css'
import '@ionic/core/css/typography.css'
import '@ionic/core/css/ionic.bundle.css'

export default defineComponent({
  name: 'App',
  components: {
    IonText,
    RouterView,
    Skeleton,
  },
  setup() {
    const error = ref()
    const { currentRoute } = useRouter()

    watch(currentRoute, (to) => {
      document.title = to.meta.title || 'Vue-Port Shop'
    })

    onErrorCaptured((err) => {
      error.value = err as string
    })

    return {
      error,
    }
  },
})
</script>

<style>
:root {
  --ion-toolbar-color: #4b4b4b;
  --ion-color-primary: #306ed9;
}

a {
  text-decoration: none;
  color: black;
}

html.ios ion-modal .ion-page {
  padding-top: 1.25rem;
}

[style*='--aspect-ratio'] > :first-child {
  width: 100%;
}

[style*='--aspect-ratio'] > img {
  height: auto;
}

@supports (--custom: property) {
  [style*='--aspect-ratio'] {
    position: relative;
  }

  [style*='--aspect-ratio']::before {
    content: '';
    display: block;
    padding-bottom: calc(100% / (var(--aspect-ratio)));
  }

  [style*='--aspect-ratio'] > :first-child {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
  }
}
</style>
