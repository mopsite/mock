# Basic

## boolean

- 语法：

  ```js
  Random.boolean()
  Random.boolean(min, max, current)
  ```

- 详情：

  返回一个随机的布尔值。

- 参数：

  - min

    可选。

    指示参数 `current` 出现的概率。概率计算公式为 `min/(min+max)`。该参数的默认值为 1，即有 50% 的概率返回参数 `current`。

  - max

    可选。

    指示参数 `current` 的相反值 `!current` 出现的概率。概率计算公式为 `max/(min+max)`。该参数的默认值为 1，即有 50% 的概率返回参数 `!current`。

  - current

    可选。

    可选值为布尔值 `true` 或 `false`。

  如果未传入任何参数，则返回 `true` 和 `false` 的概率各为 50%。

  在该方法的内部，依据原生方法 `Math.random()` 返回的（浮点）数来计算和返回布尔值。例如在最简单的情况下，返回值是表达式 `Math.random() >= 0.5` 的执行结果。

- 示例：

  ```js
  // Random.boolean()
  Random.boolean() // true
  Mock.mock('@BOOLEAN') // false

  // Random.boolean(min, max, current)
  Random.boolean(1, 9, true) // false
  Mock.mock('@BOOLEAN(1, 9, true)') // false
  ```

## natural

- 语法：

  ```js
  Random.natural()
  Random.natural(min)
  Random.natural(min, max)
  ```

- 详情：

  返回一个随机的自然数（大于等于 0 的整数）。

- 参数：

  - min

    可选。

    指示随机自然数的最小值。默认值为 0。

  - max

    可选。

    指示随机自然数的最大值。默认值为 9007199254740992。

- 示例：

  ```js
  // Random.natural()
  Random.natural() // 2985855975701802
  Mock.mock('@NATURAL') // 4989086124776848

  // Random.natural(min)
  Random.natural(10000) // 7936782332841552
  Mock.mock('@NATURAL(10000)') // 5357593857638740

  // Random.natural(min, max)
  Random.natural(60, 100) // 73
  Mock.mock('@NATURAL(60, 100)') // 70
  ```

## integer

- 语法：

  ```js
  Random.integer()
  Random.integer(min)
  Random.integer(min, max)
  ```

- 详情：

  返回一个随机的整数。

- 参数：

  - min

    可选。

    指示随机整数的最小值。默认值为 -9007199254740992。

  - max

    可选。

    指示随机整数的最大值。默认值为 9007199254740992。

- 示例：

  ```js
  // Random.integer()
  Random.integer() // 3815311811805184
  Mock.mock('@INTEGER') // 3892737100954592

  // Random.integer(min)
  Random.integer(10000) // 4303764511003750
  Mock.mock('@INTEGER(10000)') // 3585732020528713

  // Random.integer(min, max)
  Random.integer(60, 100) //  96
  Mock.mock('@INTEGER(60, 100)') // 76
  ```

## float

- 语法：

  ```js
  Random.float()
  Random.float(min)
  Random.float(min, max)
  Random.float(min, max, dmin)
  Random.float(min, max, dmin dmax)
  ```

- 详情：

  返回一个随机的浮点数。

- 参数：

  - min

    可选。

    整数部分的最小值。默认值为 -9007199254740992。

  - max

    可选。

    整数部分的最大值。默认值为 9007199254740992。

  - dmin

    可选。

    小数部分位数的最小值。默认值为 0。

  - dmax

    可选。

    小数部分位数的最大值。默认值为 17。

- 示例：

  ```js
  // Random.float()
  Random.float() // -2516858866391658.5
  Mock.mock('@FLOAT') // 1131697183867426.2

  // Random.float(min)
  Random.float(0) // 3633600989303297.5
  Mock.mock('@FLOAT(0)') // 1953104777923230.2

  // Random.float(min, max)
  Random.float(60, 100) // 71.7115933
  Mock.mock('@FLOAT(60,100)') // 76.4247511529

  // Random.float(min, max, dmin)
  Random.float(60, 100, 3) // 91.9013905
  Mock.mock('@FLOAT(60,100,3)') // 86.17424586122256

  // Random.float(min, max, dmin dmax)
  Random.float(60, 100, 3, 5) // 61.35567
  Mock.mock('@FLOAT(60,100,3,5)') // 99.7873
  ```

## character

- 语法：

  ```js
  Random.character()
  Random.character('lower/upper/number/symbol')
  Random.character(pool)
  ```

- 详情：

  返回一个随机字符。

- 参数：

  - pool

    可选。

    字符串。表示字符池，将从中选择一个字符返回。

    如果传入了 `lower`、`upper`、`number` 或 `symbol`，表示从内置的字符池中选取。如果未传入该参数，则从内置字符池中随机选取一个字符返回。

    内置字符串包含：

    ```js
    {
      lower: "abcdefghijklmnopqrstuvwxyz",
      upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      number: "0123456789",
      symbol: "!@#$%^&*()[]"
    }
    ```

- 示例：

  ```js
  // Random.character()
  Random.character() // "A"
  Mock.mock('@CHARACTER') // "g"

  // Random.character('lower/upper/number/symbol')
  Random.character('lower') // "s"
  Mock.mock('@CHARACTER("number")') // "6"

  // Random.character(pool)
  Random.character('aeiou') // "a"
  Mock.mock('@CHARACTER("aeiou")') // "u"
  ```

## string

- 语法：

  ```js
  Random.string()
  Random.string(length)
  Random.string(pool, length)
  Random.string(min, max)
  Random.string(pool, min, max)
  ```

- 详情：

  返回一个随机字符串。

- 参数：

  - pool

    可选。

    用法与 [character](#character) 的 `pool` 参数相同。

  - length

    可选。

    随机字符串的长度。

  - min

    可选。

    随机字符串的最小长度，默认值为 3。

  - max

    可选。

    随机字符串的最大长度，默认值为 7。

- 示例：

  ```js
  // Random.string()
  Random.string() // "e(zF1"
  Mock.mock('@STRING') // "RL*0"

  // Random.string(length)
  Random.string(5) // "@U!bD"
  Mock.mock('@STRING(5)') // "kv&0&"

  // Random.string(pool, length)
  Random.string('lower', 5) // "squau"
  Mock.mock('@STRING("symbol", 5)') // ")#%#*"

  // Random.string(min, max)
  Random.string(7, 10) // "*hR[]MO5Y"
  Mock.mock('@STRING(7, 10)') // "[XXUg%[$k)"

  // Random.string(pool, min, max)
  Random.string('number', 1, 3) // "1"
  Mock.mock('@STRING("aeiou"), 1, 3') // "eu"
  ```

## range

- 语法：

  ```js
  Random.range(stop)
  Random.range(star, stop)
  Random.range(star, stop, step)
  ```

- 详情：

  返回一个整型数组。

- 参数：

  - start

    可选。

    数组中整数的起始值，默认值为 0。

  - stop

    必选。

    数组中整数的结束值（不包含在返回值中）。

  - step

    必选。

    数组中整数之间的步长，默认值为 1。

- 示例：

  ```js
  // Random.range(stop)
  Random.range(10) // [0,1,2,3,4,5,6,7,8,9]
  Mock.mock('@RANGE(10)') // [0,1,2,3,4,5,6,7,8,9]

  // Random.range(star, stop)
  Random.range(3, 7) // [3,4,5,6]
  Mock.mock('@RANGE(3, 7)') // [3,4,5,6]

  // Random.range(star, stop, step)
  Random.range(1, 10, 2) // [1,3,5,7,9]
  Mock.mock('@RANGE(1, 10, 2)') // [1,3,5,7,9]
  ```


