# Mock.toJSONSchema()

## 语法

```js
Mock.toJSONSchema(template)
```

## 详情

把 Mock.js 风格的数据模板 `template` 转换成 [JSON Scheme](https://json-schema.org)。

## 参数

- template

  必选。

  表示数据模板，可以是对象或字符串。

  例如 `{ 'list|1-10':[{}] }`、`'@EMAIL'`。

## 示例

:::code-group

```js [用法]
var template = {
  'key|1-10': '★'
}
Mock.toJSONSchema(template)
```

```json [返回结果]
{
  "name": undefined,
  "path": ["ROOT"],
  "type": "object",
  "template": {
    "key|1-10": "★"
  },
  "rule": {},
  "properties": [
    {
      "name": "key",
      "path": ["ROOT", "key"],
      "type": "string",
      "template": "★",
      "rule": {
        "parameters": ["key|1-10", "key", null, "1-10", null],
        "range": ["1-10", "1", "10"],
        "min": 1,
        "max": 10,
        "count": 3,
        "decimal": undefined,
        "dmin": undefined,
        "dmax": undefined,
        "dcount": undefined
      }
    }
  ]
}
```

:::

:::code-group

```js [用法]
var template = {
  'list|1-10': [{}]
}
Mock.toJSONSchema(template)
```

```json [返回结果]
{
  "name": undefined,
  "path": ["ROOT"],
  "type": "object",
  "template": {
    "list|1-10": [{}]
  },
  "rule": {},
  "properties": [
    {
      "name": "list",
      "path": ["ROOT", "list"],
      "type": "array",
      "template": [{}],
      "rule": {
        "parameters": ["list|1-10", "list", null, "1-10", null],
        "range": ["1-10", "1", "10"],
        "min": 1,
        "max": 10,
        "count": 6,
        "decimal": undefined,
        "dmin": undefined,
        "dmax": undefined,
        "dcount": undefined
      },
      "items": [
        {
          "name": 0,
          "path": ["data", "list", 0],
          "type": "object",
          "template": {},
          "rule": {},
          "properties": []
        }
      ]
    }
  ]
}
```

:::
