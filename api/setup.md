# Mock.setup()

## 语法

```js
Mock.setup(settings)
```

## 详情

配置拦截 Ajax 请求时的行为。支持的配置项有：`timeout`。

## 参数

- settings

  必选。

  配置项集合。

  - timeout

    可选。

    指定被拦截的 Ajax 请求的响应时间，单位是毫秒。值可以是正整数，例如 `400`，表示 400 毫秒后才会返回响应内容；也可以是横杠 `-` 风格的字符串，例如 `'200-600'`，表示响应时间介于 200 到 600 毫秒之间。默认值是 `'10-100'`。

## 示例

```js
Mock.setup({
  timeout: 400
})

Mock.setup({
  timeout: '200-600'
})
```
