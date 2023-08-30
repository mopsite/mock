# Mock.toJSONSchema()

**详情：**

把 Mock.js 风格的数据模板 `template` 转换成 [JSON Schema](http://json-schema.org/)。

**语法：**

```js
Mock.toJSONSchema(template)
```

**参数：**

- **template**：必选。表示数据模板，可以是对象或字符串。例如 `{ 'list|1-10': [{}] }`、`@EMAIL`。

**示例：**

```js
var template = {
  'key|1-10': '★'
}
Mock.toJSONSchema(template)
// =>
{
  "name": undefined,
  "path": [
    "ROOT"
  ],
  "type": "object",
  "template": {
    "key|1-10": "★"
  },
  "rule": {},
  "properties": [{
    "name": "key",
    "path": [
      "ROOT",
      "key"
    ],
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
  }]
}
```
