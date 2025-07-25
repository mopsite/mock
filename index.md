---
# https://vitepress.dev/zh/reference/default-theme-home-page
layout: home
titleTemplate: 生成随机数据，拦截 Ajax 请求

hero:
  name: 'Mock.js'
  tagline: '生成随机数据，拦截 Ajax 请求'
  image:
    light: /logo.svg
    dark: /logo-dark.svg
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/start
    - theme: alt
      text: 在 Github 上查看
      link: https://github.com/nuysoft/Mock

features:
  - icon: ⚓️
    title: 前后端分离
    details: 让前端工程师独立于后端进行开发。
  - icon: 📺
    title: 增加真实性
    details: 通过随机数据，模拟各种真实场景。
  - icon: ⌨️
    title: 开发无侵入
    details: 无需修改代码，即可拦截 Ajax 请求。
  - icon: 🚗
    title: 简单的用法
    details: 符合直接的 Api，让开发更简单方便。
  - icon: 📚
    title: 丰富的数据
    details: 支持文本、数字、日期、图片等各类型数据。
  - icon: 🔧
    title: 方便的扩展
    details: 支持扩展数据类型，并能自定义函数和正则。
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(-45deg, #e47d80 5%, #d63d3e);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #e47d80 15%, #d63d3e 55%);
  --vp-home-hero-image-filter: blur(40px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(72px);
  }
}
</style>
