# Mock.vaild()

## 语法

```js
Mock.valid(template, data)
```

## 详情

校验真实数据 `data` 是否与数据模板 `template` 匹配。

## 参数

- template

  必选。

  表示数据模板，可以是对象或字符串。

  例如 `{ 'list|1-10':[{}] }`、`'@EMAIL'`。

- data

  必选。

  表示真实数据。

## 示例

:::code-group

```js [用法]
var template = {
  name: 'value1'
}
var data = {
  name: 'value2'
}
Mock.valid(template, data)
```

```json [返回结果]
[
  {
    "path": ["data", "name"],
    "type": "value",
    "actual": "value2",
    "expected": "value1",
    "action": "equal to",
    "message": "[VALUE] Expect ROOT.name'value is equal to value1, but is value2"
  }
]
```

:::
