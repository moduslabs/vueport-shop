<template>
  <div class="docs-demo-mode-toggle">
    <button class="is-selected" title="Toggle iOS mode">iOS</button
    ><button title="Toggle Android mode" class="">Android</button>
  </div>
  <div class="docs-demo-device ios">
    <figure>
      <svg class="docs-demo-device__md-bar" viewBox="0 0 1384.3 40.3">
        <path
          class="st0"
          d="M1343 5l18.8 32.3c.8 1.3 2.7 1.3 3.5 0L1384 5c.8-1.3-.2-3-1.7-3h-37.6c-1.5 0-2.5 1.7-1.7 3z"
        ></path>
        <circle class="st0" cx="1299" cy="20.2" r="20"></circle>
        <path
          class="st0"
          d="M1213 1.2h30c2.2 0 4 1.8 4 4v30c0 2.2-1.8 4-4 4h-30c-2.2 0-4-1.8-4-4v-30c0-2.3 1.8-4 4-4zM16 4.2h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16z"
        ></path></svg
      ><svg class="docs-demo-device__ios-notch" viewBox="0 0 219 31">
        <path
          d="M0 1V0h219v1a5 5 0 0 0-5 5v3c0 12.15-9.85 22-22 22H27C14.85 31 5 21.15 5 9V6a5 5 0 0 0-5-5z"
          fill-rule="evenodd"
        ></path></svg
      ><iframe src="http://localhost:8081/"></iframe>
    </figure>
  </div>
</template>

<script>
export default {
  name: 'phoneViewport',
}
</script>

<style>
.docs-demo-mode-toggle {
  align-items: center;
  display: flex;
  justify-content: center;
  width: 128px;
  height: 28px;
  margin: 1rem auto 0px;
  background: rgb(236, 240, 245);
  border-radius: 18px;
}

.docs-demo-mode-toggle button.is-selected {
  background-color: white;
  color: black;
  font-weight: 600;
  box-shadow: rgba(0, 16, 46, 0.15) 0px 2px 3px;
}

.docs-demo-mode-toggle button {
  background-color: transparent;
  color: rgb(91, 112, 139);
  cursor: pointer;
  font-family: Helvetica;
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

.docs-demo-device {
  --device-padding: 1rem;
  --device-width: 344px;
  --device-height: 704px;
  --device-frame-width: 12px;
  position: sticky;
  top: 0px;
}

.docs-demo-device.ios figure {
  background-image: url(https://ionicframework.com/docs/assets/img/iphone-device-skin.png);
  border-radius: 54px;
}

.docs-demo-device__md-bar {
  display: none;
}

.docs-demo-device.ios .docs-demo-device__ios-notch,
.docs-demo-device.ios figure::after {
  display: block;
}

.docs-demo-device__ios-notch {
  fill: rgb(9, 10, 13);
  left: 50%;
  position: absolute;
  top: 12px;
  transform: translateX(-50%);
  width: 165px;
  z-index: 2;
}

.docs-demo-device.ios > figure > iframe {
  border-radius: 38px;
}

.docs-demo-device > figure > iframe {
  position: absolute;
  top: 0px;
  left: 0px;
  width: calc(100% - var(--device-frame-width) * 2);
  height: calc(100% - var(--device-frame-width) * 2);
  z-index: 1;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-top-color: initial;
  border-right-color: initial;
  border-bottom-color: initial;
  border-left-color: initial;
  border-image: initial;
  overflow: hidden;
}

:root {
  --accent-color: #3880ff;
  --accent-color-rgb: 56, 128, 255;
  --accent-color-100: #4d8dff;
  --accent-color-200: #639cff;
  --accent-color-300: #4d8dff;
  --accent-color-400: #7cabff;
  --accent-color-500: #97bdff;
  --accent-color-600: #b2ceff;
  --accent-color-700: #cddfff;
  --accent-color-800: #e3edff;
  --accent-color-900: #f0f6ff;
  --background: #ffffff;
  --code-background: #f5f7fa;
  --code-color: var(--text-color--dark);
  --code-font-family: 'SFMono-Regular', 'Roboto Mono', Consolas,
    'Liberation Mono', Menlo, Courier, monospace;
  --font-family: system-ui, sans-serif;
  --header-height: 56px;
  --heading-font-family: 'Eina', var(--font-family);
  --line-rule-color: #edf2f6;
  --menu-width: 240px;
  --offset-background: #fdfdff;
  --offset-background--dark: #f7f7ff;
  --page-margin-left: var(--menu-width);
  --text-color: #303943;
  --text-color--darker: #24282e;
  --text-color--dark: #020814;
  --text-color--lighter: #abb2bf;
  --text-color--light: #73849a;
}
</style>
