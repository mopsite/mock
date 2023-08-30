# Basic

## boolean

**详情**：

返回一个随机的布尔值。

**语法**：

```js
Random.boolean()
Random.boolean(min, max, current)
```

**参数**：

- **min**：可选。指示参数 `current` 出现的概率。概率计算公式为 `min / (min + max)`。该参数的默认值为 1，即有 50% 的概率返回参数 `current`。

- **max**：可选。指示参数 `current` 的相反值 `!current` 出现的概率。概率计算公式为 `max / (min + max)`。该参数的默认值为 1，即有 50% 的概率返回参数 `!current`。

- **current**：可选。可选值为布尔值 `true` 或 `false`。该参数没有默认值，如果未传入任何参数，则返回的概率各为 50%。在该方法的内部，依据原生方法 `Math.random()` 返回的（浮点）数来计算和返回布尔值，例如在最简单的情况下，返回值是表达式 `Math.random() >= 0.5` 的执行结果。

**示例**：

```js
// Random.boolean()
Random.boolean() // true
Mock.mock('@boolean') // false

// Random.boolean(min, max, current)
Random.boolean(1, 9, true) // false
Mock.mock('@boolean(1, 9, true)') // false
```

## natural

**详情**：

返回一个随机的自然数（大于等于 0 的整数）。

**语法**：

```js
Random.natural()
Random.natural(min)
Random.natural(min, max)
```

**参数**：

- **min**：可选。指示随机自然数的最小值。默认值为 0。

- **max**：可选。指示随机自然数的最大值。默认值为 9007199254740992。

**示例**：

```js
// Random.natural()
Random.natural() // 2985855975701802
Mock.mock('@natural') // 4989086124776848

// Random.natural(min)
Random.natural(10000) // 7936782332841552
Mock.mock('@natural(10000)') // 5357593857638740

// Random.natural(min, max)
Random.natural(60, 100) // 73
Mock.mock('@natural(60, 100)') // 70
```

## integer

**详情**：

返回一个随机的整数。

**语法**：

```js
Random.integer()
Random.integer(min)
Random.integer(min, max)
```

**参数**：

- **min**：可选。指示随机整数的最小值。默认值为 -9007199254740992。

- **max**：可选。指示随机整数的最大值。默认值为 9007199254740992。

**示例**：

## float

**详情**：

返回一个随机的浮点数。

**语法**：

```js
Random.float()
Random.float(min)
Random.float(min, max)
Random.float(min, max, dmin)
Random.float(min, max, dmin dmax)
```

**参数**：

- **min**：可选。整数部分的最小值。默认值为 -9007199254740992。

- **max**：可选。整数部分的最大值。默认值为 9007199254740992。

- **dmin**：可选。小数部分位数的最小值。默认值为 0。

- **dmax**：可选。小数部分位数的最大值。默认值为 17。

**示例**：

## character

**详情**：

返回一个随机字符。

**语法**：

```js
Random.character()
Random.character('lower/upper/number/symbol')
Random.character(pool)
```

**参数**：

- **pool**：可选。字符串。表示字符池，将从中选择一个字符返回。如果传入了 `lower`、`upper`、`number` 或 `symbol`，表示从内置的字符池中选取：

  ```js
  {
    lower: "abcdefghijklmnopqrstuvwxyz",
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    number: "0123456789",
    symbol: "!@#$%^&*()[]"
  }
  ```

  如未传入该参数，则从 `lower + upper + number + symbol` 中随机返回一个字符。

**示例**：

```js
// Random.character()
Random.character() // "A"
Mock.mock('@character') // "g"

// Random.character('lower/upper/number/symbol')
Random.character('lower') // "s"
Mock.mock('@character("number")') // "6"

// Random.character(pool)
Random.character('aeiou') // "a"
Mock.mock('@character') // "u"
```

## string

**详情**：

返回一个随机字符串。

**语法**：

```js
Random.string()
Random.string(length)
Random.string(pool, length)
Random.string(min, max)
Random.string(pool, min, max)
```

**参数**：

- **pool**：可选。与 [character](#character) 的 `pool` 参数使用方法相同。

- **length**：可选。随机字符串的长度。

- **min**：可选。随机字符串的最小长度，默认值为 3。

- **max**：可选。随机字符串的最大长度，默认值为 7。

**示例**：

```js
// Random.string()
Random.string() // "e(zF1"
Mock.mock('@string') // "RL*0"

// Random.string(length)
Random.string(5) // "@U!bD"
Mock.mock('@string(5)') // "kv&0&"

// Random.string(pool, length)
Random.string('lower', 5) // "squau"
Mock.mock('@string("symbol, 5")') // ")#%#*"

// Random.string(min, max)
Random.string(7, 10) // "*hR[]MO5Y"
Mock.mock('@string(7, 10)') // "[XXUg%[$k)"

// Random.string(pool, min, max)
Random.string('number', 1, 3) // "1"
Mock.mock('@string("aeiou"), 1, 3') // "eu"
```

## range

**详情**：

返回一个整型数组。

**语法**：

```js
Random.range(stop)
Random.range(star, stop)
Random.range(star, stop, step)
```

**参数**：

- **start**：可选。数组中整数的起始值，默认值为 0。

- **stop**：必选。数组中整数的结束值（**不包含在返回值中**）。

- **step**：可选。数组中整数之间的步长，默认值为 1。

**示例**：

```js
// Random.range(stop)
Random.range(10) // [0,1,2,3,4,5,6,7,8,9]
Mock.mock('@range(10)') // [0,1,2,3,4,5,6,7,8,9]

// Random.range(star, stop)
Random.range(3, 7) // [3,4,5,6]
Mock.mock('@range(3, 7)') // [3,4,5,6]

// Random.range(star, stop, step)
Random.range(1, 10, 2) // [1,3,5,7,9]
Mock.mock('@range(1, 10, 2)') // [1,3,5,7,9]
```
