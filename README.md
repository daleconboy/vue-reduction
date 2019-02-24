# Vue reduction for max callstack error with v-if

## Original issue

Originally filed by [@chinesedfan](https://github.com/chinesedfan) here:

- https://github.com/vuejs/vue/issues/8545

At that point the Vue version filed against was 2.5.16

A fix was reported and released as part of version 2.5.18-beta.0

- https://github.com/vuejs/vue/releases/tag/v2.5.18-beta.0

> ssr: adjust call stack size defer threshold e4b1b57, closes #8545


## Regression info

The recent batch of releases appears to have introduced a regression.

This repo illustrates the same reduction, but with the latest versions.

- Vue version: `2.6.7`
- Vue Server Renderer version: `2.6.7`

Reduction is located in `./index.js`

## Run the reduction

Install

```console
$ npm install
```
Run the script

```console
$ npm run vue
```

