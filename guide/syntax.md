# 语法规范

Mock.js 的语法规范包括两部分：

1. 数据模板定义规范（DTD: Data Template Definition）
2. 数据占位符定义规范（DPD: Data Placeholder Definition）

## 数据模板

**数据模板中的每个属性由 3 个部分构成：属性名、生成规则和属性值。**

```js
// 属性名   name
// 生成规则 rule
// 属性值   value

'name|rule': value
```

需要注意的是：

- _属性名_ 和 _生成规则_ 之间用竖线 `|` 分隔
- _生成规则_ 是可选的，它包含 7 种格式：
  1. `'name|min-max': value`
  2. `'name|count': value`
  3. `'name|min-max.dmin-dmax': value`
  4. `'name|min-max.dcount': value`
  5. `'name|count.dmin-dmax': value`
  6. `'name|count.dcount': value`
  7. `'name|+step': value`
- **_生成规则_ 的含义需要依赖 _属性值_ 的类型才能确定**
- _属性值_ 中可以含有 `@占位符`
- _属性值_ 还指定了最终值的初始值和类型

## 生成规则和示例

### 属性值是字符串

1. `'name|min-max': string`

   通过重复 `string` 生成一个字符串，重复次数大于等于 `min`，小于等于 `max`。

   :::code-group

   ```js [Data Template]
   Mock.mock({
     'string|1-10': '★'
   })
   ```

   ```js [Result]
   {
     "string": "★★★★★★★"
   }
   ```

   :::

2. `'name|count': string`

   通过重复 `string` 生成一个字符串，重复次数等于 `count`。

   :::code-group

   ```js [Data Template]
   Mock.mock({
     'string|3': '★★★'
   })
   ```

   ```js [Result]
   {
     "string": "★★★★★★★★★"
   }
   ```

   :::

### 属性值是数字

1. `'name|+1': number`

   属性值自动加 1，初始值为 `number`。

   :::code-group

   ```js [Data Template]
   Mock.mock({
     'number|+1': 202
   })
   ```

   ```js [Result]
   {
     "number": 202
   }
   ```

   :::

2. `'name|min-max': number`

   生成一个大于等于 `min`、小于等于 `max` 的整数，属性值 `number` 只是用来确定类型。

   :::code-group

   ```js [Data Template]
   Mock.mock({
     'number|1-100': 100
   })
   ```

   ```js [Result]
   {
     "number": 53
   }
   ```

   :::

3. `'name|min-max.dmin-dmax': number`

   生成一个浮点数，整数部分大于等于 `min`、小于等于 `max`，小数部分保留 `dmin` 到 `dmax` 位。

   :::code-group

   ```js [Data Template]
   Mock.mock({
     'number1|1-100.1-10': 1,
     'number2|123.1-10': 1,
     'number3|123.3': 1,
     'number4|123.10': 1.123
   })
   ```

   ```js [Result]
   {
     "number1": 12.92,
     "number2": 123.51,
     "number3": 123.777,
     "number4": 123.1231091814
   }
   ```

   :::

### 属性值是布尔型

1. `'name|1': boolean`

   随机生成一个布尔值，值为 true 或 false 的概率均为 1/2。

   :::code-group

   ```js [Data Template]
   Mock.mock({
     'boolean|1': true
   })
   ```

   ```js [Result]
   {
     "boolean": false
   }
   ```

   :::

2. `'name|min-max': value`

   随机生成一个布尔值，值为 `value` 的概率是 `min/(min+max)`，值为 `!value` 的概率是 `max/(min+max)`。

   :::code-group

   ```js [Data Template]
   Mock.mock({
     'boolean|1-2': true
   })
   ```

   ```js [Result]
   {
     "boolean": true
   }
   ```

   :::

### 属性值是对象

1. `'name|count': object`

   从属性值 `object` 中随机选取 `count` 个属性。

   :::code-group

   ```js [Data Template]
   Mock.mock({
     'object|2': {
       310000: '上海市',
       320000: '江苏省',
       330000: '浙江省',
       340000: '安徽省'
     }
   })
   ```

   ```js [Result]
   {
     "object": {
       "320000": "江苏省",
       "340000": "安徽省"
     }
   }
   ```

   :::

2. `'name|min-max': object`

   从属性值 `object` 中随机选取 `min` 到 `max` 个属性。

   :::code-group

   ```js [Data Template]
   Mock.mock({
     'object|2-4': {
       110000: '北京市',
       120000: '天津市',
       130000: '河北省',
       140000: '山西省'
     }
   })
   ```

   ```js [Result]
   {
     "object": {
       "110000": "北京市",
       "120000": "天津市",
       "130000": "河北省",
       "140000": "山西省"
     }
   }
   ```

   :::

### 属性值是数组

1. `'name|1': array`

   从属性值 `arrat` 中随机选取 1 个元素，作为最终值。

   :::code-group

   ```js [Data Template]
   Mock.mock({
     'array|1': ['AMD', 'CMD', 'UMD']
   })
   ```

   ```js [Result]
   {
     "array": "CMD"
   }
   ```

   :::

2. `'name|+1': array`

   从属性值 `arrat` 中按顺序选取 1 个元素，作为最终值。

   :::code-group

   ```js [Data Template]
   Mock.mock({
     'array|+1': ['AMD', 'CMD', 'UMD']
   })
   ```

   ```js [Result]
   {
     "array": "AMD"
   }
   ```

   :::

3. `'name|min-max': array`

   通过重复属性值 `array` 生成一个新数组，重复次数大于等于 `min`，小于等于 `max`。

   :::code-group

   ```js [Data Template]
   Mock.mock({
     'array|1-10': ['Mock.js']
   })
   ```

   ```js [Result]
   {
     "array": [
       "Mock.js",
       "Mock.js",
       "Mock.js",
       "Mock.js",
       "Mock.js",
       "Mock.js",
       "Mock.js"
     ]
   }
   ```

   :::

4. `'name|count': array`

   通过重复属性值 `array` 生成一个新数组，重复次数为 `count`。

   :::code-group

   ```js [Data Template]
   Mock.mock({
     'array|3': ['Hello', 'Mock.js']
   })
   ```

   ```js [Result]
   {
     "array": [
       "Hello",
       "Mock.js",
       "Hello",
       "Mock.js",
       "Hello",
       "Mock.js"
     ]
   }
   ```

   :::

### 属性值是函数

`'name': function`

执行函数 `function`，取其返回值最为最终的属性值，函数的上下文为属性 `name` 所在的对象。

:::code-group

```js [Data Template]
Mock.mock({
  foo: 'Syntax Demo',
  name: function () {
    return this.foo
  }
})
```

```js [Result]
{
  "foo": "Syntax Demo",
  "name": "Syntax Demo"
}
```

:::

### 属性值是正则表达式

`'name': regexp`

根据正则表达式 `regexp` 反向生成可以匹配它的字符串。通常用于生成自定义格式的字符串。

:::code-group

```js [Data Template]
Mock.mock({
  regexp1: /[a-z][A-Z][0-9]/,
  regexp2: /\w\W\s\S\d\D/,
  regexp3: /\d{5,10}/
})
```

```js [Result]
{
  "regexp1": "pJ7",
  "regexp2": "F)\fp1G",
  "regexp3": "561659409"
}
```

:::

## 数据占位符

_占位符_ 只是在 _属性值_ 字符串中占个位置，并不出现在最终的 _属性值_ 中。

_占位符_ 的格式为：

```
@占位符
@占位符(参数 [, 参数])
```

注意：

- 用 `@` 来标识其后的字符是 _占位符_
- _占位符_ 引用的是 `Mock.Random` 中的[方法]((../api/random/index#方法))
- 通过 `Mock.Random.extend()` 来[扩展]((../api//random/index#扩展))自定义 _占位符_
- _占位符_ 可以引用，并且会优先引用 [数据模板](#数据模板) 中的属性
- _占位符_ 支持相对路径和绝对路径

### 基本使用

:::code-group

```js [Data Template]
Mock.mock({
  name: {
    first: '@FIRST',
    middle: '@FIRST',
    last: '@LAST',
    full: '@first @middle @last'
  }
})
```

```js [Result]
{
  "name": {
    "first": "Charles",
    "middle": "Brenda",
    "last": "Lopez",
    "full": "Charles Brenda Lopez"
  }
}
```

:::

### 绝对路径

:::code-group

```js [Data Template]
Mock.mock({
  foo: 'Hello',
  nested: {
    a: {
      b: {
        c: 'Mock.js'
      }
    }
  },
  absolutePath: '@/foo @/nested/a/b/c'
})
```

```js [Result]
{
  "foo": "Hello",
  "nested": {
    "a": {
      "b": {
        "c": "Mock.js"
      }
    }
  },
  "absolutePath": "Hello Mock.js"
}
```

:::

### 相对路径

:::code-group

```js [Data Template]
Mock.mock({
  foo: 'Hello',
  nested: {
    a: {
      b: {
        c: 'Mock.js'
      }
    }
  },
  relativePath: {
    a: {
      b: {
        c: '@../../../foo @../../../nested/a/b/c'
      }
    }
  }
})
```

```js [Result]
{
  "foo": "Hello",
  "nested": {
    "a": {
      "b": {
        "c": "Mock.js"
      }
    }
  },
  "relativePath": {
    "a": {
      "b": {
        "c": "Hello Mock.js"
      }
    }
  }
}
```

:::
