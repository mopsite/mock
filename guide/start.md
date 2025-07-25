# 快速开始

## 安装

::: code-group

```sh [npm]
npm install mockjs
```

```sh [pnpm]
pnpm add mockjs
```

```sh [bun]
bun add mockjs
```

:::

## 使用

::: code-group

```js [ES Module]
import Mock from 'mockjs'

const data = Mock.mock({
  // 结果将返回一个对象
  // 对象中含有 list 属性，该属性的值是一个数组，包含 1 到 10 个元素
  'list|1-10': [
    {
      // 数组的每个元素都是一个对象
      // 对象中含有 id 属性，起始值为 1，往后每个对象的 id 值增 1
      'id|+1': 1
    }
  ]
})
```

```js [Common JS]
const Mock = require('mockjs')

const data = Mock.mock({
  // 结果将返回一个对象
  // 对象中含有 list 属性，该属性的值是一个数组，包含 1 到 10 个元素
  'list|1-10': [
    {
      // 数组的每个元素都是一个对象
      // 对象中含有 id 属性，起始值为 1，往后每个对象的 id 值增 1
      'id|+1': 1
    }
  ]
})
```

:::
