<template>
  <div class="hide-phone docs-demo-mode-toggle">
    <button
      :class="iosSelected"
      @click="toggleIosSelected"
      title="Toggle iOS mode"
    >
      iOS</button
    ><button
      :class="androidSelected"
      @click="toggleAndroidSelected"
      title="Toggle Android mode"
    >
      Android
    </button>
  </div>
  <div :class="divClass">
    <figure>
      <svg
        class="hide-phone docs-demo-device__md-bar"
        viewBox="0 0 1384.3 40.3"
      >
        <path
          class="st0"
          d="M1343 5l18.8 32.3c.8 1.3 2.7 1.3 3.5 0L1384 5c.8-1.3-.2-3-1.7-3h-37.6c-1.5 0-2.5 1.7-1.7 3z"
        ></path>
        <circle class="st0" cx="1299" cy="20.2" r="20"></circle>
        <path
          class="st0"
          d="M1213 1.2h30c2.2 0 4 1.8 4 4v30c0 2.2-1.8 4-4 4h-30c-2.2 0-4-1.8-4-4v-30c0-2.3 1.8-4 4-4zM16 4.2h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
        ></path>
      </svg>
      <svg class="hide-phone docs-demo-device__ios-notch" viewBox="0 0 219 31">
        <path
          d="M0 1V0h219v1a5 5 0 0 0-5 5v3c0 12.15-9.85 22-22 22H27C14.85 31 5 21.15 5 9V6a5 5 0 0 0-5-5z"
          fill-rule="evenodd"
        ></path>
      </svg>
      <iframe :src="frameSrc" title="Vueshop Vueport">
        <RouterView />
      </iframe>
    </figure>
  </div>
  <RouterLink class="mobile-view-link" to="/shop"
    >Remove the mobile frame</RouterLink
  >
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'phoneViewport',
  setup() {
    const iosSelected = ref('is-selected')
    const androidSelected = ref('')
    const divClass = ref('docs-demo-device ios')
    const origin = window.location.origin
    const frameSrc = ref(`${origin}/shop?ionic:mode=ios`)

    function toggleAndroidSelected() {
      iosSelected.value = ''
      androidSelected.value = 'is-selected'
      divClass.value = 'docs-demo-device md'
      frameSrc.value = `${origin}/shop?ionic:mode=md`
    }

    function toggleIosSelected() {
      iosSelected.value = 'is-selected'
      androidSelected.value = ''
      divClass.value = 'docs-demo-device ios'
      frameSrc.value = `${origin}/shop?ionic:mode=ios`
    }

    return {
      iosSelected,
      androidSelected,
      toggleAndroidSelected,
      toggleIosSelected,
      divClass,
      frameSrc,
    }
  },
}
</script>

<style scoped>
.mobile-view-link {
  display: block;
  text-align: center;
  color: rgba(0, 0, 0, 0.46);
  font-size: 0.825rem;
}

.docs-demo-mode-toggle {
  align-items: center;
  display: flex;
  justify-content: center;
  width: 128px;
  height: 28px;
  margin: 1rem auto 0;
  background: rgb(236, 240, 245);
  border-radius: 18px;
}

.docs-demo-mode-toggle {
  -ms-flex-align: center;
  align-items: center;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  margin: 1rem auto 0;
  width: 128px;
  height: 28px;
  background: #ecf0f5;
  border-radius: 18px;
}

iframe {
  background-color: #ffffff;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
  border: none;
  width: 100vw;
  height: 100vh;
}

@media screen and (min-width: 621px) {
  .docs-demo-mode-toggle button.is-selected {
    background-color: white;
    color: black;
    font-weight: 600;
    box-shadow: rgba(0, 16, 46, 0.15) 0 2px 3px;
  }

  .docs-demo-mode-toggle button.is-selected {
    background-color: white;
    color: black;
    font-weight: 600;
    -webkit-box-shadow: 0 2px 3px rgba(0, 16, 46, 0.15);
    box-shadow: 0 2px 3px rgba(0, 16, 46, 0.15);
  }

  .docs-demo-mode-toggle button {
    background-color: transparent;
    color: rgb(91, 112, 139);
    cursor: pointer;
    font-family: var(--font-family);
    font-size: 11px;
    letter-spacing: -0.02em;
    width: calc(50% - 2px);
    line-height: 21px;
    padding-top: 2px;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    border-radius: 16px;
    transition: background-color 200ms ease 0s, color 200ms ease 0s;
  }

  .docs-demo-mode-toggle button {
    background-color: transparent;
    border: none;
    border-radius: 16px;
    color: #5b708b;
    cursor: pointer;
    font-family: var(--font-family);
    font-size: 11px;
    letter-spacing: -0.02em;
    width: calc(50% - 2px);
    line-height: 21px;
    padding-top: 2px;
    -webkit-transition: 200ms background-color ease, 200ms color ease;
    transition: 200ms background-color ease, 200ms color ease;
  }

  .docs-demo-mode-toggle button {
    background-color: transparent;
    color: rgb(91, 112, 139);
    cursor: pointer;
    font-family: var(--font-family);
    font-size: 11px;
    letter-spacing: -0.02em;
    width: calc(50% - 2px);
    line-height: 21px;
    padding-top: 2px;
    border-width: initial;
    border-style: none;
    border-color: initial;
    border-image: initial;
    border-radius: 16px;
    transition: background-color 200ms ease 0s, color 200ms ease 0s;
  }

  .docs-demo-mode-toggle button {
    background-color: transparent;
    border: none;
    border-radius: 16px;
    color: #5b708b;
    cursor: pointer;
    font-family: var(--font-family);
    font-size: 11px;
    letter-spacing: -0.02em;
    width: calc(50% - 2px);
    line-height: 21px;
    padding-top: 2px;
    -webkit-transition: 200ms background-color ease, 200ms color ease;
    transition: 200ms background-color ease, 200ms color ease;
  }

  .docs-demo-device.ios figure {
    background-image: url(https://ionicframework.com/docs/assets/img/iphone-device-skin.png);
    border-radius: 54px;
  }

  .docs-demo-device > figure {
    background-size: contain;
    box-shadow: rgba(2, 8, 20, 0.1) 0 2px 8px, rgba(2, 8, 20, 0.08) 0 8px 16px;
    width: var(--device-width);
    height: var(--device-height);
    position: relative;
    z-index: 1;
    margin: 0;
    background-repeat: no-repeat;
    overflow: hidden;
  }

  .docs-demo-device > figure {
    margin: 0;
    background-size: contain;
    background-repeat: no-repeat;
    -webkit-box-shadow: 0 2px 8px rgba(2, 8, 20, 0.1),
      0 8px 16px rgba(2, 8, 20, 0.08);
    box-shadow: 0 2px 8px rgba(2, 8, 20, 0.1), 0 8px 16px rgba(2, 8, 20, 0.08);
    width: var(--device-width);
    height: var(--device-height);
    overflow: hidden;
    position: relative;
    z-index: 1;
  }

  .docs-demo-device {
    --device-padding: 1rem;
    --device-width: 344px;
    --device-height: 704px;
    --device-frame-width: 12px;
    padding: var(--device-padding);
    position: sticky;
    top: 0;
    display: flex;
    justify-content: center;
  }

  .docs-demo-device__md-bar {
    display: none;
  }

  .docs-demo-device__md-bar {
    display: none;
  }

  .docs-demo-device.ios .docs-demo-device__ios-notch,
  .docs-demo-device.ios figure::after {
    display: block;
  }

  .docs-demo-device.ios .docs-demo-device__ios-notch,
  .docs-demo-device.ios figure:after {
    display: block;
  }

  .docs-demo-device__ios-notch {
    display: none;
    fill: rgb(9, 10, 13);
    left: 50%;
    position: absolute;
    top: 12px;
    transform: translateX(-50%);
    width: 165px;
    z-index: 2;
  }

  .docs-demo-device__ios-notch {
    display: none;
    fill: #090a0d;
    left: 50%;
    position: absolute;
    top: 12px;
    -webkit-transform: translateX(-50%);
    transform: translateX(-50%);
    width: 165px;
    z-index: 2;
  }

  .docs-demo-device.ios > figure > iframe {
    border-radius: 38px;
  }

  .docs-demo-device.ios > figure > iframe {
    border-radius: 38px;
  }

  .docs-demo-device > figure > iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - var(--device-frame-width) * 2);
    height: calc(100% - var(--device-frame-width) * 2);
    z-index: 1;
    overflow: hidden;
  }

  .docs-demo-device > figure > iframe {
    position: absolute;
    top: 0;
    left: 0;
    margin: var(--device-frame-width);
    width: calc(100% - var(--device-frame-width) * 2);
    height: calc(100% - var(--device-frame-width) * 2);
    overflow: hidden;
    z-index: 1;
  }
}

@media screen and (max-width: 620px) {
  .hide-phone {
    display: none !important;
  }
}
</style>
