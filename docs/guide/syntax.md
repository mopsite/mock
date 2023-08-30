---
outline: 'deep'
---

# 语法规范

Mock.js 的语法规范包括两部分：

1. [数据模板](#数据模板)定义规范（Data Template Definition, DTD）
2. [数据占位符](#数据占位符)定义规范（Data Placeholder Definition, DPD）

## 数据模板

数据模板中的每个属性由三部分构成：属性名、生成规则和属性值：

```js
// 属性名 name
// 生成规则 rule
// 属性值 value

'name|rule': value
```

::: warning 注意

- **属性名**和**生成规则**之间用竖线 `|` 分隔。
- 生成规则是可选的。
- 生成规则有 7 种格式：
  1. `'name|min-max': value`
  2. `'name|count': value`
  3. `'name|min-max.dmin-dmax': value`
  4. `'name|min-max.dcount': value`
  5. `'name|count.dmin-dmax': value`
  6. `'name|count.dcount': value`
  7. `'name|+step': value`
- 生成规则的含义**需要依赖**属性值的类型才能确定。
- 属性值中可以含有 `@占位符`。
- 属性值还指定了最终值的初始值和类型。
  :::

## 生成规则和示例

### 属性值是字符串

1. `'name|min-max': string`

   通过重复 `string` 生成一个字符串，重复次数大于等于 `min`，小于等于 `max`。

   ::: code-group

   ```js [数据模板]
   Mock.mock({
     'string|1-10': '★'
   })
   ```

   ```js [结果]
   {
     "string": "★★★★"
   }
   ```

   :::

2. `'name|count': string`

   通过重复 `string` 生成一个字符串，重复次数等于 `count`。

   ::: code-group

   ```js [数据模板]
   Mock.mock({
     'string|3': '★★★'
   })
   ```

   ```js [结果]
   {
     "string": "★★★★★★★★★"
   }
   ```

   :::

### 属性值是数字

1. `'name|+1': number`

   属性值自动加 1，初始值为 `number`。

   ::: code-group

   ```js [数据模板]
   Mock.mock({
     'list|5': [
       {
         'number|+1': 201
       }
     ]
   })
   ```

   ```js [结果]
   {
     'list': [
       { 'number': 201 },
       { 'number': 202 },
       { 'number': 203 },
       { 'number': 204 },
       { 'number': 205 }
     ]
   }
   ```

   :::

2. `'name|min-max': number`

   生成一个大于等于 `min`，小于等于 `max` 的整数，属性值 `number` 只是用来确定类型。

   ::: code-group

   ```js [数据模板]
   Mock.mock({
     'number|1-100': 100
   })
   ```

   ```js [结果]
   {
     'number': 86 // 或其它 1-100 之间的正数
   }
   ```

   :::

3. `'name|min-max.dmin-dmax': number`

   生成一个浮点数，整数部分大于等于 `min`，小于等于 `max`；小数部分保留 `dmin` 到 `dmax` 位；属性值 `number` 用来确定类型。

   ::: code-group

   ```js [数据模板]
   Mock.mock({
     'number1|1-100.1-10': 1,
     'number2|123.1-10': 1,
     'number3|123.3': 1,
     'number4|123.10': 1
   })
   ```

   ```js [结果]
   {
     'number1': 12.92,
     'number2': 123.51,
     'number3': 123.777,
     'number4': 123.1231091814
   }
   ```

   :::

### 属性值是布尔型

1. `'name|1': boolean`

   随机生成一个布尔值，值为 true 的概率是 1/2，false 也一样。

   ::: code-group

   ```js [数据模板]
   Mock.mock({
     'boolean|1': true
   })
   ```

   ```js [结果]
   {
     'boolean': true
   }
   ```

   :::

2. `'name|min-max': boolean`

   随机生成一个布尔值，true 的概率是 `min / (min + max)`，false 的概率是 `max / (min + max)`。

   ::: code-group

   ```js [数据模板]
   Mock.mock({
     'boolean|1-2': true
   })
   ```

   ```js [结果]
   {
     'boolean': false
   }
   ```

   :::

### 属性值是对象

1. `'name|count': object`

   从属性值 `object` 中随机选取 `count` 个属性。

   ::: code-group

   ```js [数据模板]
   Mock.mock({
     'object|2': {
      '310000': '上海市',
      '320000': '江苏省',
      '330000': '浙江省',
      '340000': '安徽省'
     }
   })
   ```

   ```js [结果]
   {
     'object': {
      '320000': '江苏省',
      '340000': '安徽省'
     }
   }
   ```

   :::

2. `'name|min-max': object`

   从属性值 `object` 中随机选取 `min` 到 `max` 个属性。

   ::: code-group

   ```js [数据模板]
   Mock.mock({
     'object|2': {
      '110000': '北京市',
      '120000': '天津市',
      '130000': '河北省',
      '140000': '山西省'
     }
   })
   ```

   ```js [结果]
   {
     'object': {
      '120000': '天津市',
      '140000': '山西省'
     }
   }
   ```

   :::

### 属性值是数组

1. `'name|1': array`

   从属性值 `array` 中随机选取 1 个元素，作为最终值。

   ::: code-group

   ```js [数据模板]
   Mock.mock({
     'array|1': [
      'AMD',
      'CMD',
      'UMD'
     ]
   })
   ```

   ```js [结果]
   {
     'array': 'CMD'
   }
   ```

   :::

2. `'name|+1': array`

   从属性值 `array` 中顺序选取 1 个元素，作为最终值。

   ::: code-group

   ```js [数据模板]
   Mock.mock({
     'array|+1': [
      'AMD',
      'CMD',
      'UMD'
     ]
   })
   ```

   ```js [结果]
   {
     'array': 'AMD'
   }
   ```

   :::

3. `'name|min-max': array`

   通过重复属性值 `array` 生成一个新数组，重复次数大于等于 `min`，小于等于 `max`。

   ::: code-group

   ```js [数据模板]
   Mock.mock({
     'array|1-5': [
      'Mock.js'
     ]
   })
   ```

   ```js [结果]
   {
     'array': [
      'Mock.js',
      'Mock.js',
      'Mock.js',
      'Mock.js'
     ]
   }
   ```

   :::

4. `'name|count': array`

   通过重复属性值 `array` 生成一个新数组，重复次数为 `count`。

   ::: code-group

   ```js [数据模板]
   Mock.mock({
     'array|3': [
      'Mock.js'
     ]
   })
   ```

   ```js [结果]
   {
     'array': [
      'Mock.js',
      'Mock.js',
      'Mock.js'
     ]
   }
   ```

   :::

### 属性值是函数

`'name': function`

执行函数 `function`，取其返回值作为最终属性值，函数的上下文为 `name` 所在对象。

::: code-group

```js [数据模板]
Mock.mock({
  'foo': 'Syntax Demo',
  'name': function() {
    return this.foo
  }
})
```

```js [结果]
{
  'foo': 'Syntax Demo',
  'name': 'Syntax Demo'
}
```

:::

### 属性值是正则表达式

`'name': regexp`

根据正则表达式 `regexp` 反向生成可以匹配它的字符串。用于生成自定义格式的字符串。

::: code-group

```js [数据模板]
Mock.mock({
  'regexp1': /[a-z][A-Z][0-9]/,
  'regexp2': /\w\W\s\S\d\D/,
  'regexp3': /\d{5,10}/,
  'regexp4|3': /\d{5,10}\-/
})
```

```js [结果]
{
  regexp1: 'vJ4',
  regexp2: 'V@\r38X',
  regexp3: '2442258638',
  regexp4: '48875384-812554648-55417864-'
}
```

:::

## 数据占位符

占位符只是在属性值字符串中占个位置，并不出现在最终的属性值中。

```
@占位符
@占位符(参数 [, 参数])
```

::: warning 注意
1. 用 `@` 来标识其后的字符串是占位符。
2. 占位符引用的是 [Mock.Rondom](../api/random/) 中的方法。
3. 通过 [Mock.Random.extend()](../api/random/#扩展) 来扩展自定义占位符。
4. 占位符也可以引用数据模板中的属性。
5. 占位符会优先引用数据模板中的属性。
6. 占位符支持相对路径和绝对路径。
:::

::: code-group

```js [数据模板]
Mock.mock({
  name: {
    first: '@FIRST',
    middle: '@FIRST',
    last: '@LAST',
    full: '@first @middle @last'
  }
})
```

```js [结果]
{
  name: {
    first: 'Sandra',
    middle: 'Deborah',
    last: 'Hall',
    full: 'Sandra Deborah Hall'
  }
}
```

:::
