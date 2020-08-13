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
      ><iframe src="https://ionic-docs-demo.herokuapp.com/?ionic:mode=ios">
        <!DOCTYPE html>
        <html dir="ltr" lang="en" class="plt-desktop ios hydrated" mode="ios">
          <head>
            <meta charset="utf-8" />
            <style data-styles="">
              component-card,
              component-item,
              component-badge,
              component-infinite-scroll,
              component-input,
              component-reorder,
              component-skeleton-text,
              component-toolbar,
              component-avatar,
              component-datetime,
              component-menu,
              component-radio,
              component-refresher,
              component-select,
              component-action-sheet,
              component-alert,
              component-checkbox,
              component-item-group,
              component-list,
              component-loading,
              component-modal,
              component-modal-content,
              component-note,
              component-picker,
              component-popover,
              component-progress,
              component-range,
              component-slides,
              component-thumbnail,
              component-toast,
              component-chip,
              component-searchbar,
              component-segment,
              component-toggle,
              component-button,
              component-content,
              component-fab,
              component-grid,
              component-nav,
              component-spinner,
              app-home,
              component-icons,
              component-text,
              component-_template_,
              component-tabs-games,
              component-tabs-movies,
              component-tabs-music,
              ion-select-popover,
              component-tabs,
              popover-example-page,
              ion-action-sheet,
              ion-alert,
              ion-loading,
              ion-picker,
              ion-toast,
              ion-modal,
              ion-popover,
              ion-menu-toggle,
              ion-nav-link,
              ion-route-redirect,
              ion-router-link,
              ion-router-outlet,
              ion-split-pane,
              ion-virtual-scroll,
              ion-menu,
              ion-badge,
              ion-datetime,
              ion-img,
              ion-item-group,
              ion-picker-column,
              ion-range,
              ion-skeleton-text,
              ion-textarea,
              ion-menu-button,
              ion-footer,
              ion-spinner,
              ion-refresher-content,
              ion-refresher,
              ion-infinite-scroll-content,
              ion-infinite-scroll,
              ion-list,
              ion-item,
              ion-label,
              ion-back-button,
              ion-buttons,
              ion-content,
              ion-header,
              ion-title,
              ion-toolbar,
              ion-icon,
              ion-reorder,
              ion-reorder-group,
              ion-chip,
              ion-searchbar,
              ion-select,
              ion-select-option,
              ion-slide,
              ion-slides,
              ion-tab,
              ion-tabs,
              ion-checkbox,
              ion-item-divider,
              ion-note,
              ion-text,
              ion-fab-button,
              ion-fab,
              ion-fab-list,
              ion-item-option,
              ion-item-options,
              ion-item-sliding,
              ion-input,
              ion-progress-bar,
              ion-thumbnail,
              ion-toggle,
              app-root,
              ion-app,
              ion-nav,
              ion-route,
              ion-router,
              ion-tab-button,
              ion-tab-bar,
              ion-radio,
              ion-radio-group,
              ion-card,
              ion-card-content,
              ion-card-header,
              ion-card-subtitle,
              ion-card-title,
              ion-segment-button,
              ion-segment,
              ion-col,
              ion-grid,
              ion-row,
              component-details,
              ion-avatar,
              ion-backdrop,
              ion-button,
              ion-list-header,
              ion-ripple-effect {
                visibility: hidden;
              }
              .hydrated {
                visibility: inherit;
              }
            </style>
            <title>Ionic Kitchen Sink</title>
            <meta
              name="viewport"
              content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
            />
            <meta
              name="description"
              content="Welcome to the Ionic Kitchen Sink. You can use this to preview Ionic components!"
            />
            <meta name="theme-color" content="#3880ff" />
            <meta name="format-detection" content="telephone=no" />
            <meta name="msapplication-tap-highlight" content="no" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-title" content="Ionic PWA" />
            <meta
              name="apple-mobile-web-app-status-bar-style"
              content="black-translucent"
            />
            <meta http-equiv="x-ua-compatible" content="IE=Edge" />
            <style>
              html.plt-mobile ion-app {
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
              }
              ion-app.force-statusbar-padding {
                --ion-safe-area-top: 20px;
              }
            </style>
            <style>
              .theme-list ion-item,
              .home-list ion-item {
                --padding-start: 14px;
                --inner-padding-end: 14px;
                --transition: none;
              }
              .theme-list,
              .home-list {
                padding-bottom: 40px !important;
              }
              .theme-list ion-toggle {
                padding-right: 0;
              }
              .home-list {
                padding-top: 0 !important;
              }
              .ios .home-list ion-item:first-child {
                --border-width: 0.55px 0 0 0;
              }
              .md .home-list ion-item:first-child {
                --border-width: 1px 0 0 0;
              }
              .ios .home-list ion-item:last-child {
                --border-width: 0 0 0.55px 0;
                --inner-border-width: 0;
              }
              .md .home-list ion-item:last-child {
                --border-width: 0 0 1px 0;
                --inner-border-width: 0;
              }
              .component-icon {
                border-radius: 50%;
                padding: 7px;
                height: 18px;
                width: 18px;
                margin-top: 5px;
                margin-bottom: 5px;
              }
              .component-icon-dark {
                background: var(--ion-color-step-850, #27323e);
                color: var(--ion-item-background, #fff);
              }
              .component-icon-primary {
                background: var(--ion-color-primary);
                color: #fff;
              }
            </style>
            <style>
              ion-header {
                display: block;
                position: relative;
                -ms-flex-order: -1;
                order: -1;
                width: 100%;
                z-index: 10;
              }
              ion-header ion-toolbar:first-of-type {
                padding-top: var(--ion-safe-area-top, 0);
              }
              .header-ios ion-toolbar:last-of-type {
                --border-width: 0 0 0.55px;
              }
              @supports (
                (-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))
              ) {
                .header-background {
                  left: 0;
                  right: 0;
                  top: 0;
                  bottom: 0;
                  position: absolute;
                  -webkit-backdrop-filter: saturate(180%) blur(20px);
                  backdrop-filter: saturate(180%) blur(20px);
                }
                .header-translucent-ios ion-toolbar {
                  --opacity: 0.8;
                }
                .header-collapse-condense-inactive .header-background {
                  -webkit-backdrop-filter: blur(20px);
                  backdrop-filter: blur(20px);
                }
              }
              .header-ios.ion-no-border ion-toolbar:last-of-type {
                --border-width: 0;
              }
              .header-collapse-condense {
                z-index: 9;
              }
              .header-collapse-condense ion-toolbar {
                position: -webkit-sticky;
                position: sticky;
                top: 0;
              }
              .header-collapse-condense ion-toolbar:first-of-type {
                padding-top: 7px;
                z-index: 1;
              }
              .header-collapse-condense ion-toolbar {
                --background: var(--ion-background-color, #fff);
                z-index: 0;
              }
              .header-collapse-condense ion-toolbar ion-searchbar {
                height: 48px;
                padding-top: 0px;
                padding-bottom: 13px;
              }
              .header-collapse-main ion-toolbar.in-toolbar ion-title,
              .header-collapse-main ion-toolbar.in-toolbar ion-buttons {
                -webkit-transition: all 0.2s ease-in-out;
                transition: all 0.2s ease-in-out;
              }
              .header-collapse-condense-inactive:not(.header-collapse-condense)
                ion-toolbar.in-toolbar
                ion-title,
              .header-collapse-condense-inactive:not(.header-collapse-condense)
                ion-toolbar.in-toolbar
                ion-buttons.buttons-collapse {
                opacity: 0;
                pointer-events: none;
              }
              .header-collapse-condense-inactive.header-collapse-condense
                ion-toolbar.in-toolbar
                ion-title,
              .header-collapse-condense-inactive.header-collapse-condense
                ion-toolbar.in-toolbar
                ion-buttons.buttons-collapse {
                visibility: hidden;
              }
            </style>
            <style>
              ion-list {
                margin-left: 0;
                margin-right: 0;
                margin-top: 0;
                margin-bottom: 0;
                padding-left: 0;
                padding-right: 0;
                padding-top: 0;
                padding-bottom: 0;
                display: block;
                contain: content;
                list-style-type: none;
              }
              ion-list.list-inset {
                -webkit-transform: translateZ(0);
                transform: translateZ(0);
                overflow: hidden;
              }
              .list-ios {
                background: var(
                  --ion-item-background,
                  var(--ion-background-color, #fff)
                );
              }
              .list-ios.list-inset {
                margin-left: 16px;
                margin-right: 16px;
                margin-top: 16px;
                margin-bottom: 16px;
                border-radius: 4px;
              }
              @supports ((-webkit-margin-start: 0) or (margin-inline-start: 0))
                or (-webkit-margin-start: 0) {
                .list-ios.list-inset {
                  margin-left: unset;
                  margin-right: unset;
                  -webkit-margin-start: 16px;
                  margin-inline-start: 16px;
                  -webkit-margin-end: 16px;
                  margin-inline-end: 16px;
                }
              }
              .list-ios.list-inset ion-item {
                --border-width: 0 0 1px 0;
                --inner-border-width: 0;
              }
              .list-ios.list-inset ion-item:last-child {
                --border-width: 0;
                --inner-border-width: 0;
              }
              .list-ios.list-inset + ion-list.list-inset {
                margin-top: 0;
              }
              .list-ios-lines-none .item {
                --border-width: 0;
                --inner-border-width: 0;
              }
              .list-ios-lines-full .item,
              .list-ios .item-lines-full {
                --border-width: 0 0 0.55px 0;
              }
              .list-ios-lines-full .item {
                --inner-border-width: 0;
              }
              .list-ios-lines-inset .item,
              .list-ios .item-lines-inset {
                --inner-border-width: 0 0 0.55px 0;
              }
              .list-ios .item-lines-inset {
                --border-width: 0;
              }
              .list-ios .item-lines-full {
                --inner-border-width: 0;
              }
              .list-ios .item-lines-none {
                --border-width: 0;
                --inner-border-width: 0;
              }
              ion-card .list-ios {
                margin-left: 0;
                margin-right: 0;
                margin-top: 0;
                margin-bottom: 0;
              }
            </style>
            <style>
              .item.sc-ion-label-ios-h,
              .item .sc-ion-label-ios-h {
                --color: initial;
                display: block;
                color: var(--color);
                font-family: var(--ion-font-family, inherit);
                font-size: inherit;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                -webkit-box-sizing: border-box;
                box-sizing: border-box;
              }
              .ion-color.sc-ion-label-ios-h {
                color: var(--ion-color-base);
              }
              .ion-text-wrap.sc-ion-label-ios-h,
              [text-wrap].sc-ion-label-ios-h {
                white-space: normal;
              }
              .item-interactive-disabled.sc-ion-label-ios-h:not(.item-multiple-inputs),
              .item-interactive-disabled:not(.item-multiple-inputs)
                .sc-ion-label-ios-h {
                cursor: default;
                opacity: 0.3;
                pointer-events: none;
              }
              .item-input.sc-ion-label-ios-h,
              .item-input .sc-ion-label-ios-h {
                -ms-flex: initial;
                flex: initial;
                max-width: 200px;
                pointer-events: none;
              }
              .item-textarea.sc-ion-label-ios-h,
              .item-textarea .sc-ion-label-ios-h {
                -ms-flex-item-align: baseline;
                align-self: baseline;
              }
              .label-fixed.sc-ion-label-ios-h {
                -ms-flex: 0 0 100px;
                flex: 0 0 100px;
                width: 100px;
                min-width: 100px;
                max-width: 200px;
              }
              .label-stacked.sc-ion-label-ios-h,
              .label-floating.sc-ion-label-ios-h {
                margin-bottom: 0;
                -ms-flex-item-align: stretch;
                align-self: stretch;
                width: auto;
                max-width: 100%;
              }
              .label-no-animate.label-floating.sc-ion-label-ios-h {
                -webkit-transition: none;
                transition: none;
              }
              .sc-ion-label-ios-s h1,
              .sc-ion-label-ios-s h2,
              .sc-ion-label-ios-s h3,
              .sc-ion-label-ios-s h4,
              .sc-ion-label-ios-s h5,
              .sc-ion-label-ios-s h6 {
                text-overflow: inherit;
                overflow: inherit;
              }
              .ion-text-wrap.sc-ion-label-ios-h,
              [text-wrap].sc-ion-label-ios-h {
                font-size: 14px;
                line-height: 1.5;
              }
              .label-stacked.sc-ion-label-ios-h {
                margin-bottom: 4px;
                font-size: 14px;
              }
              .label-floating.sc-ion-label-ios-h {
                margin-bottom: 0;
                -webkit-transform: translate3d(0, 27px, 0);
                transform: translate3d(0, 27px, 0);
                -webkit-transform-origin: left top;
                transform-origin: left top;
                -webkit-transition: -webkit-transform 150ms ease-in-out;
                transition: -webkit-transform 150ms ease-in-out;
                transition: transform 150ms ease-in-out;
                transition: transform 150ms ease-in-out,
                  -webkit-transform 150ms ease-in-out;
              }
              [dir='rtl'].sc-ion-label-ios-h
                -no-combinator.label-floating.sc-ion-label-ios-h,
              [dir='rtl']
                .sc-ion-label-ios-h
                -no-combinator.label-floating.sc-ion-label-ios-h,
              [dir='rtl'].label-floating.sc-ion-label-ios-h,
              [dir='rtl'] .label-floating.sc-ion-label-ios-h {
                -webkit-transform-origin: right top;
                transform-origin: right top;
              }
              .item-has-focus.label-floating.sc-ion-label-ios-h,
              .item-has-focus .label-floating.sc-ion-label-ios-h,
              .item-has-placeholder.label-floating.sc-ion-label-ios-h,
              .item-has-placeholder .label-floating.sc-ion-label-ios-h,
              .item-has-value.label-floating.sc-ion-label-ios-h,
              .item-has-value .label-floating.sc-ion-label-ios-h {
                -webkit-transform: translate3d(0, 0, 0) scale(0.82);
                transform: translate3d(0, 0, 0) scale(0.82);
              }
              .sc-ion-label-ios-s h1 {
                margin-left: 0;
                margin-right: 0;
                margin-top: 3px;
                margin-bottom: 2px;
                font-size: 22px;
                font-weight: normal;
              }
              .sc-ion-label-ios-s h2 {
                margin-left: 0;
                margin-right: 0;
                margin-top: 0;
                margin-bottom: 2px;
                font-size: 17px;
                font-weight: normal;
              }
              .sc-ion-label-ios-s h3,
              .sc-ion-label-ios-s h4,
              .sc-ion-label-ios-s h5,
              .sc-ion-label-ios-s h6 {
                margin-left: 0;
                margin-right: 0;
                margin-top: 0;
                margin-bottom: 3px;
                font-size: 14px;
                font-weight: normal;
                line-height: normal;
              }
              .sc-ion-label-ios-s p {
                margin-left: 0;
                margin-right: 0;
                margin-top: 0;
                margin-bottom: 2px;
                font-size: 14px;
                line-height: normal;
                text-overflow: inherit;
                overflow: inherit;
              }
              .sc-ion-label-ios-s > p {
                color: rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.4);
              }
              .sc-ion-label-ios-h.ion-color.sc-ion-label-ios-s > p,
              .ion-color .sc-ion-label-ios-h.sc-ion-label-ios-s > p {
                color: inherit;
              }
              .sc-ion-label-ios-s h2:last-child,
              .sc-ion-label-ios-s h3:last-child,
              .sc-ion-label-ios-s h4:last-child,
              .sc-ion-label-ios-s h5:last-child,
              .sc-ion-label-ios-s h6:last-child,
              .sc-ion-label-ios-s p:last-child {
                margin-bottom: 0;
              }
            </style>
            <link rel="modulepreload" href="/build/p-d5bb78ca.js" />
            <link rel="modulepreload" href="/build/p-177ede88.js" />
            <link rel="modulepreload" href="/build/p-56dbf9e6.js" />
            <link rel="modulepreload" href="/build/p-6dfd7e2c.js" />
            <link rel="modulepreload" href="/build/p-718ae824.js" />
            <link rel="modulepreload" href="/build/p-b38cff97.entry.js" />
            <link rel="modulepreload" href="/build/p-f145a4a0.js" />
            <link rel="modulepreload" href="/build/p-f23021f7.js" />
            <link rel="modulepreload" href="/build/p-f5a590ed.js" />
            <script
              type="module"
              src="/build/p-d5bb78ca.js"
              data-resources-url="/build/"
              data-stencil-namespace="app"
            ></script>
            <script nomodule="" src="/build/app.js"></script>
            <link href="/build/p-937e1fc2.css" rel="stylesheet" />
            <link
              rel="apple-touch-icon"
              sizes="180x180"
              href="/assets/icon/apple-touch-icon.png"
            />
            <link
              rel="icon"
              type="image/x-icon"
              href="/assets/icon/favicon.ico"
            />
            <link rel="manifest" href="/manifest.json" />
            <style>
              .plt-desktop {
                --ion-safe-area-top: 20px;
                --ion-safe-area-bottom: 22px;
              }
            </style>
          </head>
          <body>
            <app-root class="hydrated"
              ><ion-app class="ios ion-page hydrated"
                ><ion-router class="hydrated"
                  ><ion-route class="hydrated"></ion-route
                  ><ion-route class="hydrated"></ion-route
                  ><ion-route class="hydrated"></ion-route
                  ><ion-route class="hydrated"></ion-route
                  ><ion-route class="hydrated"></ion-route
                  ><ion-route class="hydrated"></ion-route
                  ><ion-route class="hydrated"></ion-route
                  ><ion-route class="hydrated"></ion-route
                  ><ion-route class="hydrated"></ion-route
                  ><ion-route class="hydrated"></ion-route
                  ><ion-route class="hydrated"></ion-route
                  ><ion-route class="hydrated"></ion-route
                  ><ion-route class="hydrated"></ion-route
                  ><ion-route class="hydrated"></ion-route
                  ><ion-route class="hydrated"></ion-route
                  ><ion-route class="hydrated"></ion-route
                  ><ion-route class="hydrated"></ion-route
                  ><ion-route class="hydrated"></ion-route
                  ><ion-route class="hydrated"></ion-route
                  ><ion-route class="hydrated"></ion-route
                  ><ion-route class="hydrated"></ion-route
                  ><ion-route class="hydrated"></ion-route
                  ><ion-route class="hydrated"></ion-route
                  ><ion-route class="hydrated"></ion-route
                  ><ion-route class="hydrated"></ion-route
                  ><ion-route class="hydrated"></ion-route
                  ><ion-route class="hydrated"></ion-route
                  ><ion-route class="hydrated"></ion-route
                  ><ion-route class="hydrated"></ion-route
                  ><ion-route class="hydrated"></ion-route
                  ><ion-route class="hydrated"></ion-route
                  ><ion-route class="hydrated"></ion-route
                  ><ion-route class="hydrated"></ion-route
                  ><ion-route class="hydrated"></ion-route
                  ><ion-route class="hydrated"></ion-route
                  ><ion-route class="hydrated"></ion-route
                  ><ion-route class="hydrated"></ion-route
                  ><ion-route class="hydrated"></ion-route
                  ><ion-route class="hydrated"></ion-route
                  ><ion-route class="hydrated"></ion-route
                  ><ion-route class="hydrated"></ion-route
                  ><ion-route class="hydrated"></ion-route
                  ><ion-route class="hydrated"></ion-route
                  ><ion-route class="hydrated"></ion-route
                  ><ion-route class="hydrated"
                    ><ion-route class="hydrated"></ion-route
                    ><ion-route class="hydrated"></ion-route
                    ><ion-route
                      class="hydrated"
                    ></ion-route></ion-route></ion-router
                ><ion-nav class="hydrated"
                  ><app-home class="ion-page hydrated" style="z-index: 99;"
                    ><ion-header
                      role="banner"
                      class="ios header-ios header-translucent header-collapse-none header-translucent-ios hydrated header-collapse-condense-inactive header-collapse-main"
                      ><!---->
                      <div class="header-background"></div>
                      <ion-toolbar
                        class="in-toolbar ios toolbar-title-default hydrated"
                        ><ion-title class="ios title-default hydrated"
                          >Ionic Framework</ion-title
                        ></ion-toolbar
                      ></ion-header
                    ><ion-content
                      class="ios hydrated"
                      style="--offset-top: 64px; --offset-bottom: 0px;"
                      ><ion-header
                        role="banner"
                        class="ios header-ios header-collapse-condense hydrated"
                        ><!----><ion-toolbar
                          class="in-toolbar ios toolbar-title-large hydrated"
                          ><ion-title class="ios title-large hydrated"
                            >Ionic Framework</ion-title
                          ></ion-toolbar
                        ></ion-header
                      ><ion-list
                        class="theme-list ios list-ios list-lines-full list-ios-lines-full hydrated"
                        ><ion-item
                          class="item ios in-list ion-focusable item-label hydrated"
                          ><ion-icon
                            slot="start"
                            class="component-icon component-icon-dark ios hydrated"
                            role="img"
                            aria-label="moon"
                          ></ion-icon
                          ><ion-label
                            class="sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated"
                            id="ion-tg-0-lbl"
                            >Dark Mode</ion-label
                          ><ion-toggle
                            slot="end"
                            role="checkbox"
                            aria-checked="false"
                            aria-labelledby="ion-tg-0-lbl"
                            class="ios in-item interactive hydrated"
                            ><input
                              type="hidden"
                              class="aux-input"
                              name="ion-tg-0"
                              value="" /></ion-toggle></ion-item></ion-list
                      ><ion-list class="home-list ios list-ios hydrated"
                        ><ion-item
                          class="item ios in-list ion-activatable ion-focusable item-label hydrated"
                          ><ion-icon
                            slot="start"
                            class="component-icon component-icon-primary ios hydrated"
                            role="img"
                          ></ion-icon
                          ><ion-label
                            class="sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated"
                            >Action Sheet</ion-label
                          ></ion-item
                        ><ion-item
                          class="item ios in-list ion-activatable ion-focusable item-label hydrated"
                          ><ion-icon
                            slot="start"
                            class="component-icon component-icon-primary ios hydrated"
                            role="img"
                          ></ion-icon
                          ><ion-label
                            class="sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated"
                            >Alert</ion-label
                          ></ion-item
                        ><ion-item
                          class="item ios in-list ion-activatable ion-focusable item-label hydrated"
                          ><ion-icon
                            slot="start"
                            class="component-icon component-icon-primary ios hydrated"
                            role="img"
                          ></ion-icon
                          ><ion-label
                            class="sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated"
                            >Avatar</ion-label
                          ></ion-item
                        ><ion-item
                          class="item ios in-list ion-activatable ion-focusable item-label hydrated"
                          ><ion-icon
                            slot="start"
                            class="component-icon component-icon-primary ios hydrated"
                            role="img"
                          ></ion-icon
                          ><ion-label
                            class="sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated"
                            >Badge</ion-label
                          ></ion-item
                        ><ion-item
                          class="item ios in-list ion-activatable ion-focusable item-label hydrated"
                          ><ion-icon
                            slot="start"
                            class="component-icon component-icon-primary ios hydrated"
                            role="img"
                          ></ion-icon
                          ><ion-label
                            class="sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated"
                            >Button</ion-label
                          ></ion-item
                        ><ion-item
                          class="item ios in-list ion-activatable ion-focusable item-label hydrated"
                          ><ion-icon
                            slot="start"
                            class="component-icon component-icon-primary ios hydrated"
                            role="img"
                          ></ion-icon
                          ><ion-label
                            class="sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated"
                            >Card</ion-label
                          ></ion-item
                        ><ion-item
                          class="item ios in-list ion-activatable ion-focusable item-label hydrated"
                          ><ion-icon
                            slot="start"
                            class="component-icon component-icon-primary ios hydrated"
                            role="img"
                          ></ion-icon
                          ><ion-label
                            class="sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated"
                            >Checkbox</ion-label
                          ></ion-item
                        ><ion-item
                          class="item ios in-list ion-activatable ion-focusable item-label hydrated"
                          ><ion-icon
                            slot="start"
                            class="component-icon component-icon-primary ios hydrated"
                            role="img"
                          ></ion-icon
                          ><ion-label
                            class="sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated"
                            >Chip</ion-label
                          ></ion-item
                        ><ion-item
                          class="item ios in-list ion-activatable ion-focusable item-label hydrated"
                          ><ion-icon
                            slot="start"
                            class="component-icon component-icon-primary ios hydrated"
                            role="img"
                          ></ion-icon
                          ><ion-label
                            class="sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated"
                            >Content</ion-label
                          ></ion-item
                        ><ion-item
                          class="item ios in-list ion-activatable ion-focusable item-label hydrated"
                          ><ion-icon
                            slot="start"
                            class="component-icon component-icon-primary ios hydrated"
                            role="img"
                          ></ion-icon
                          ><ion-label
                            class="sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated"
                            >Date &amp; Time Picker</ion-label
                          ></ion-item
                        ><ion-item
                          class="item ios in-list ion-activatable ion-focusable item-label hydrated"
                          ><ion-icon
                            slot="start"
                            class="component-icon component-icon-primary ios hydrated"
                            role="img"
                          ></ion-icon
                          ><ion-label
                            class="sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated"
                            >Floating Action Button</ion-label
                          ></ion-item
                        ><ion-item
                          class="item ios in-list ion-activatable ion-focusable item-label hydrated"
                          ><ion-icon
                            slot="start"
                            class="component-icon component-icon-primary ios hydrated"
                            role="img"
                          ></ion-icon
                          ><ion-label
                            class="sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated"
                            >Grid</ion-label
                          ></ion-item
                        ><ion-item
                          class="item ios in-list ion-activatable ion-focusable item-label hydrated"
                          ><ion-icon
                            slot="start"
                            class="component-icon component-icon-primary ios hydrated"
                            role="img"
                          ></ion-icon
                          ><ion-label
                            class="sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated"
                            >Icons</ion-label
                          ></ion-item
                        ><ion-item
                          class="item ios in-list ion-activatable ion-focusable item-label hydrated"
                          ><ion-icon
                            slot="start"
                            class="component-icon component-icon-primary ios hydrated"
                            role="img"
                          ></ion-icon
                          ><ion-label
                            class="sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated"
                            >Infinite Scroll</ion-label
                          ></ion-item
                        ><ion-item
                          class="item ios in-list ion-activatable ion-focusable item-label hydrated"
                          ><ion-icon
                            slot="start"
                            class="component-icon component-icon-primary ios hydrated"
                            role="img"
                          ></ion-icon
                          ><ion-label
                            class="sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated"
                            >Input</ion-label
                          ></ion-item
                        ><ion-item
                          class="item ios in-list ion-activatable ion-focusable item-label hydrated"
                          ><ion-icon
                            slot="start"
                            class="component-icon component-icon-primary ios hydrated"
                            role="img"
                          ></ion-icon
                          ><ion-label
                            class="sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated"
                            >Item</ion-label
                          ></ion-item
                        ><ion-item
                          class="item ios in-list ion-activatable ion-focusable item-label hydrated"
                          ><ion-icon
                            slot="start"
                            class="component-icon component-icon-primary ios hydrated"
                            role="img"
                          ></ion-icon
                          ><ion-label
                            class="sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated"
                            >Item Group</ion-label
                          ></ion-item
                        ><ion-item
                          class="item ios in-list ion-activatable ion-focusable item-label hydrated"
                          ><ion-icon
                            slot="start"
                            class="component-icon component-icon-primary ios hydrated"
                            role="img"
                          ></ion-icon
                          ><ion-label
                            class="sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated"
                            >List</ion-label
                          ></ion-item
                        ><ion-item
                          class="item ios in-list ion-activatable ion-focusable item-label hydrated"
                          ><ion-icon
                            slot="start"
                            class="component-icon component-icon-primary ios hydrated"
                            role="img"
                          ></ion-icon
                          ><ion-label
                            class="sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated"
                            >Loading</ion-label
                          ></ion-item
                        ><ion-item
                          class="item ios in-list ion-activatable ion-focusable item-label hydrated"
                          ><ion-icon
                            slot="start"
                            class="component-icon component-icon-primary ios hydrated"
                            role="img"
                          ></ion-icon
                          ><ion-label
                            class="sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated"
                            >Menu</ion-label
                          ></ion-item
                        ><ion-item
                          class="item ios in-list ion-activatable ion-focusable item-label hydrated"
                          ><ion-icon
                            slot="start"
                            class="component-icon component-icon-primary ios hydrated"
                            role="img"
                          ></ion-icon
                          ><ion-label
                            class="sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated"
                            >Modal</ion-label
                          ></ion-item
                        ><ion-item
                          class="item ios in-list ion-activatable ion-focusable item-label hydrated"
                          ><ion-icon
                            slot="start"
                            class="component-icon component-icon-primary ios hydrated"
                            role="img"
                          ></ion-icon
                          ><ion-label
                            class="sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated"
                            >Navigation</ion-label
                          ></ion-item
                        ><ion-item
                          class="item ios in-list ion-activatable ion-focusable item-label hydrated"
                          ><ion-icon
                            slot="start"
                            class="component-icon component-icon-primary ios hydrated"
                            role="img"
                          ></ion-icon
                          ><ion-label
                            class="sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated"
                            >Note</ion-label
                          ></ion-item
                        ><ion-item
                          class="item ios in-list ion-activatable ion-focusable item-label hydrated"
                          ><ion-icon
                            slot="start"
                            class="component-icon component-icon-primary ios hydrated"
                            role="img"
                          ></ion-icon
                          ><ion-label
                            class="sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated"
                            >Picker</ion-label
                          ></ion-item
                        ><ion-item
                          class="item ios in-list ion-activatable ion-focusable item-label hydrated"
                          ><ion-icon
                            slot="start"
                            class="component-icon component-icon-primary ios hydrated"
                            role="img"
                          ></ion-icon
                          ><ion-label
                            class="sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated"
                            >Popover</ion-label
                          ></ion-item
                        ><ion-item
                          class="item ios in-list ion-activatable ion-focusable item-label hydrated"
                          ><ion-icon
                            slot="start"
                            class="component-icon component-icon-primary ios hydrated"
                            role="img"
                          ></ion-icon
                          ><ion-label
                            class="sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated"
                            >Progress Bar</ion-label
                          ></ion-item
                        ><ion-item
                          class="item ios in-list ion-activatable ion-focusable item-label hydrated"
                          ><ion-icon
                            slot="start"
                            class="component-icon component-icon-primary ios hydrated"
                            role="img"
                          ></ion-icon
                          ><ion-label
                            class="sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated"
                            >Radio</ion-label
                          ></ion-item
                        ><ion-item
                          class="item ios in-list ion-activatable ion-focusable item-label hydrated"
                          ><ion-icon
                            slot="start"
                            class="component-icon component-icon-primary ios hydrated"
                            role="img"
                          ></ion-icon
                          ><ion-label
                            class="sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated"
                            >Range</ion-label
                          ></ion-item
                        ><ion-item
                          class="item ios in-list ion-activatable ion-focusable item-label hydrated"
                          ><ion-icon
                            slot="start"
                            class="component-icon component-icon-primary ios hydrated"
                            role="img"
                          ></ion-icon
                          ><ion-label
                            class="sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated"
                            >Refresher</ion-label
                          ></ion-item
                        ><ion-item
                          class="item ios in-list ion-activatable ion-focusable item-label hydrated"
                          ><ion-icon
                            slot="start"
                            class="component-icon component-icon-primary ios hydrated"
                            role="img"
                          ></ion-icon
                          ><ion-label
                            class="sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated"
                            >Reorder</ion-label
                          ></ion-item
                        ><ion-item
                          class="item ios in-list ion-activatable ion-focusable item-label hydrated"
                          ><ion-icon
                            slot="start"
                            class="component-icon component-icon-primary ios hydrated"
                            role="img"
                          ></ion-icon
                          ><ion-label
                            class="sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated"
                            >Searchbar</ion-label
                          ></ion-item
                        ><ion-item
                          class="item ios in-list ion-activatable ion-focusable item-label hydrated"
                          ><ion-icon
                            slot="start"
                            class="component-icon component-icon-primary ios hydrated"
                            role="img"
                          ></ion-icon
                          ><ion-label
                            class="sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated"
                            >Segment</ion-label
                          ></ion-item
                        ><ion-item
                          class="item ios in-list ion-activatable ion-focusable item-label hydrated"
                          ><ion-icon
                            slot="start"
                            class="component-icon component-icon-primary ios hydrated"
                            role="img"
                          ></ion-icon
                          ><ion-label
                            class="sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated"
                            >Select</ion-label
                          ></ion-item
                        ><ion-item
                          class="item ios in-list ion-activatable ion-focusable item-label hydrated"
                          ><ion-icon
                            slot="start"
                            class="component-icon component-icon-primary ios hydrated"
                            role="img"
                          ></ion-icon
                          ><ion-label
                            class="sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated"
                            >Skeleton Text</ion-label
                          ></ion-item
                        ><ion-item
                          class="item ios in-list ion-activatable ion-focusable item-label hydrated"
                          ><ion-icon
                            slot="start"
                            class="component-icon component-icon-primary ios hydrated"
                            role="img"
                          ></ion-icon
                          ><ion-label
                            class="sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated"
                            >Spinner</ion-label
                          ></ion-item
                        ><ion-item
                          class="item ios in-list ion-activatable ion-focusable item-label hydrated"
                          ><ion-icon
                            slot="start"
                            class="component-icon component-icon-primary ios hydrated"
                            role="img"
                          ></ion-icon
                          ><ion-label
                            class="sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated"
                            >Slides</ion-label
                          ></ion-item
                        ><ion-item
                          class="item ios in-list ion-activatable ion-focusable item-label hydrated"
                          ><ion-icon
                            slot="start"
                            class="component-icon component-icon-primary ios hydrated"
                            role="img"
                          ></ion-icon
                          ><ion-label
                            class="sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated"
                            >Tabs</ion-label
                          ></ion-item
                        ><ion-item
                          class="item ios in-list ion-activatable ion-focusable item-label hydrated"
                          ><ion-icon
                            slot="start"
                            class="component-icon component-icon-primary ios hydrated"
                            role="img"
                          ></ion-icon
                          ><ion-label
                            class="sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated"
                            >Text</ion-label
                          ></ion-item
                        ><ion-item
                          class="item ios in-list ion-activatable ion-focusable item-label hydrated"
                          ><ion-icon
                            slot="start"
                            class="component-icon component-icon-primary ios hydrated"
                            role="img"
                          ></ion-icon
                          ><ion-label
                            class="sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated"
                            >Thumbnail</ion-label
                          ></ion-item
                        ><ion-item
                          class="item ios in-list ion-activatable ion-focusable item-label hydrated"
                          ><ion-icon
                            slot="start"
                            class="component-icon component-icon-primary ios hydrated"
                            role="img"
                          ></ion-icon
                          ><ion-label
                            class="sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated"
                            >Toast</ion-label
                          ></ion-item
                        ><ion-item
                          class="item ios in-list ion-activatable ion-focusable item-label hydrated"
                          ><ion-icon
                            slot="start"
                            class="component-icon component-icon-primary ios hydrated"
                            role="img"
                          ></ion-icon
                          ><ion-label
                            class="sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated"
                            >Toggle</ion-label
                          ></ion-item
                        ><ion-item
                          class="item ios in-list ion-activatable ion-focusable item-label hydrated"
                          ><ion-icon
                            slot="start"
                            class="component-icon component-icon-primary ios hydrated"
                            role="img"
                          ></ion-icon
                          ><ion-label
                            class="sc-ion-label-ios-h sc-ion-label-ios-s ios hydrated"
                            >Toolbar</ion-label
                          ></ion-item
                        ></ion-list
                      ></ion-content
                    ></app-home
                  ></ion-nav
                ></ion-app
              ></app-root
            >
            <ion-title
              class="ion-cloned-element ios title-large hydrated"
              style="display: none;"
            ></ion-title
            ><ion-back-button
              class="ion-cloned-element ios button ion-activatable ion-focusable hydrated"
              style="display: none;"
            ></ion-back-button>
          </body>
        </html>
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
