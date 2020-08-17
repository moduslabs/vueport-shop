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
      ><iframe src="http://localhost:8080/">
        <RouterView />
      </iframe>
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
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
user agent stylesheet div {
  display: block;
}
ion-icon {
  visibility: hidden;
}
docs-page {
  display: grid;
  font-size: 16px;
  line-height: 2;
  margin-left: var(--page-margin-left);
  margin-top: var(--header-height);
  overflow-x: hidden;
  transition: transform 200ms cubic-bezier(0.2, 1, 0.2, 1) 0s,
    -webkit-transform 200ms cubic-bezier(0.2, 1, 0.2, 1) 0s;
}
docs-page {
  display: grid;
  font-size: 16px;
  line-height: 2;
  margin-left: var(--page-margin-left);
  margin-top: var(--header-height);
  overflow-x: hidden;
  -webkit-transition: -webkit-transform 200ms cubic-bezier(0.2, 1, 0.2, 1);
  transition: -webkit-transform 200ms cubic-bezier(0.2, 1, 0.2, 1);
  transition: transform 200ms cubic-bezier(0.2, 1, 0.2, 1);
  transition: transform 200ms cubic-bezier(0.2, 1, 0.2, 1),
    -webkit-transform 200ms cubic-bezier(0.2, 1, 0.2, 1);
}
body {
  background-color: var(--background);
  color: var(--text-color);
  font-family: var(--font-family);
  -webkit-text-size-adjust: none;
  -moz-text-size-adjust: none;
  -ms-text-size-adjust: none;
  text-size-adjust: none;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html.md {
  --ion-default-font: 'Roboto', 'Helvetica Neue', sans-serif;
}
:root {
  --ion-color-primary: #3880ff;
  --ion-color-primary-rgb: 56, 128, 255;
  --ion-color-primary-contrast: #ffffff;
  --ion-color-primary-contrast-rgb: 255, 255, 255;
  --ion-color-primary-shade: #3171e0;
  --ion-color-primary-tint: #4c8dff;
  --ion-color-secondary: #3dc2ff;
  --ion-color-secondary-rgb: 61, 194, 255;
  --ion-color-secondary-contrast: #ffffff;
  --ion-color-secondary-contrast-rgb: 255, 255, 255;
  --ion-color-secondary-shade: #36abe0;
  --ion-color-secondary-tint: #50c8ff;
  --ion-color-tertiary: #5260ff;
  --ion-color-tertiary-rgb: 82, 96, 255;
  --ion-color-tertiary-contrast: #ffffff;
  --ion-color-tertiary-contrast-rgb: 255, 255, 255;
  --ion-color-tertiary-shade: #4854e0;
  --ion-color-tertiary-tint: #6370ff;
  --ion-color-success: #2dd36f;
  --ion-color-success-rgb: 45, 211, 111;
  --ion-color-success-contrast: #ffffff;
  --ion-color-success-contrast-rgb: 255, 255, 255;
  --ion-color-success-shade: #28ba62;
  --ion-color-success-tint: #42d77d;
  --ion-color-warning: #ffc409;
  --ion-color-warning-rgb: 255, 196, 9;
  --ion-color-warning-contrast: #000000;
  --ion-color-warning-contrast-rgb: 0, 0, 0;
  --ion-color-warning-shade: #e0ac08;
  --ion-color-warning-tint: #ffca22;
  --ion-color-danger: #eb445a;
  --ion-color-danger-rgb: 235, 68, 90;
  --ion-color-danger-contrast: #ffffff;
  --ion-color-danger-contrast-rgb: 255, 255, 255;
  --ion-color-danger-shade: #cf3c4f;
  --ion-color-danger-tint: #ed576b;
  --ion-color-dark: #222428;
  --ion-color-dark-rgb: 34, 36, 40;
  --ion-color-dark-contrast: #ffffff;
  --ion-color-dark-contrast-rgb: 255, 255, 255;
  --ion-color-dark-shade: #1e2023;
  --ion-color-dark-tint: #383a3e;
  --ion-color-medium: #92949c;
  --ion-color-medium-rgb: 146, 148, 156;
  --ion-color-medium-contrast: #ffffff;
  --ion-color-medium-contrast-rgb: 255, 255, 255;
  --ion-color-medium-shade: #808289;
  --ion-color-medium-tint: #9d9fa6;
  --ion-color-light: #f4f5f8;
  --ion-color-light-rgb: 244, 245, 248;
  --ion-color-light-contrast: #000000;
  --ion-color-light-contrast-rgb: 0, 0, 0;
  --ion-color-light-shade: #d7d8da;
  --ion-color-light-tint: #f5f6f9;
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
html {
  --ion-safe-area-top: var(--ion-statusbar-padding);
}
html {
  --ion-font-family: var(--ion-default-font);
}

.docs-demo-mode-toggle button.is-selected {
  background-color: white;
  color: black;
  font-weight: 600;
  box-shadow: rgba(0, 16, 46, 0.15) 0px 2px 3px;
}
.docs-demo-mode-toggle button.is-selected {
  background-color: white;
  color: black;
  font-weight: 600;
  -webkit-box-shadow: 0px 2px 3px rgba(0, 16, 46, 0.15);
  box-shadow: 0px 2px 3px rgba(0, 16, 46, 0.15);
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
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
user agent stylesheet button {
  -webkit-appearance: button;
  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: center;
  align-items: flex-start;
  cursor: default;
  box-sizing: border-box;
  margin: 0em;
  font: 400 13.3333px Arial;
  padding: 1px 6px;
  border-width: 2px;
  border-style: outset;
  border-image: initial;
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
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
user agent stylesheet button {
  -webkit-appearance: button;
  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: center;
  align-items: flex-start;
  cursor: default;
  box-sizing: border-box;
  margin: 0em;
  font: 400 13.3333px Arial;
  padding: 1px 6px;
  border-width: 2px;
  border-style: outset;
  border-image: initial;
}

.docs-demo-device {
  --device-padding: 1rem;
  --device-width: 344px;
  --device-height: 704px;
  --device-frame-width: 12px;
  position: sticky;
  top: 0px;
}
.docs-demo-device {
  --device-padding: 1rem;
  --device-width: 344px;
  --device-height: 704px;
  --device-frame-width: 12px;
  padding: var(--device-padding);
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
user agent stylesheet div {
  display: block;
}

.docs-demo-device.ios figure {
  background-image: url(https://ionicframework.com/docs/assets/img/iphone-device-skin.png);
  border-radius: 54px;
}
.docs-demo-device.ios figure {
  background-image: url(https://ionicframework.com/docs/assets/img/iphone-device-skin.png);
  border-radius: 54px;
}
.docs-demo-device > figure {
  background-size: contain;
  box-shadow: rgba(2, 8, 20, 0.1) 0px 2px 8px, rgba(2, 8, 20, 0.08) 0px 8px 16px;
  width: var(--device-width);
  height: var(--device-height);
  position: relative;
  z-index: 1;
  margin: 0px;
  background-repeat: no-repeat;
  overflow: hidden;
}
.docs-demo-device > figure {
  margin: 0;
  background-size: contain;
  background-repeat: no-repeat;
  -webkit-box-shadow: 0px 2px 8px rgba(2, 8, 20, 0.1),
    0px 8px 16px rgba(2, 8, 20, 0.08);
  box-shadow: 0px 2px 8px rgba(2, 8, 20, 0.1), 0px 8px 16px rgba(2, 8, 20, 0.08);
  width: var(--device-width);
  height: var(--device-height);
  overflow: hidden;
  position: relative;
  z-index: 1;
}
figure {
  margin: 0;
}
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
user agent stylesheet figure {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 40px;
  margin-inline-end: 40px;
}
.docs-demo-device {
  --device-padding: 1rem;
  --device-width: 344px;
  --device-height: 704px;
  --device-frame-width: 12px;
  position: sticky;
  top: 0px;
}
.docs-demo-device {
  --device-padding: 1rem;
  --device-width: 344px;
  --device-height: 704px;
  --device-frame-width: 12px;
  padding: var(--device-padding);
  position: -webkit-sticky;
  position: sticky;
  top: 0;
}

.docs-demo-device__md-bar {
  display: none;
}
.docs-demo-device__md-bar {
  display: none;
}
figure > * {
  display: block;
  margin: 0 auto;
}
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
user agent stylesheet svg:not(:root) {
  overflow: hidden;
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
figure > * {
  display: block;
  margin: 0 auto;
}
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
user agent stylesheet svg:not(:root) {
  overflow: hidden;
}

.docs-demo-device.ios > figure > iframe {
  border-radius: 38px;
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
  border-image: initial;
  overflow: hidden;
}
.docs-demo-device > figure > iframe {
  position: absolute;
  top: 0;
  left: 0;
  margin: var(--device-frame-width);
  width: calc(100% - var(--device-frame-width) * 2);
  height: calc(100% - var(--device-frame-width) * 2);
  border: none;
  overflow: hidden;
  z-index: 1;
}
iframe {
  background-color: rgba(0, 0, 0, 0.02);
  -webkit-box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
}
figure > * {
  display: block;
  margin: 0 auto;
}
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
user agent stylesheet iframe {
  border-width: 2px;
  border-style: inset;
  border-color: initial;
  border-image: initial;
}
</style>
