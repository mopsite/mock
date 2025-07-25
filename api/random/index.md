# Mock.Random

`Mock.Random` 是一个工具类，用于生成各种随机数据。该类的方法在数据模板中称为[占位符](../../guide/syntax#数据占位符)，书写格式为 `@占位符(参数 [, 参数])`。

```js
var Random = Mock.Random

Random.email()
// => "n.clark@miller.io"

Mock.mock('@EMAIL')
// => "y.lee@lewis.org"

Mock.mock({ email: '@EMAIL' })
// => { email: "v.lewis@hall.gov" }
```

:::warning 注意
在上面的例子中，直接调用 `Random.email()` 时，方法名 `email()` 是小写的，而数据模板中的 `@EMAIL` 确实大写。

这并非对数据模板中的占位符做了特殊处理，也非强制的编写方法。事实上，在数据末班中使用小写的 `@email` 也可以达到同样的效果。不过，这是建议的编码风格，以便在阅读时从视觉上提高占位符的识别度，快速识别占位符和普通字符。

另外，在浏览器中，为了减少需要拼写的字符，Mock.js 把 `Mock.Random` 暴露给了 window 对象，使之成为全局变量，从而可以直接访问 Random。因此，上面例子中的 `var Random = Mock.Random` 可以省略。在 Node.js 中，仍需要 `Mock.Random` 访问。
:::

## 方法

`Mock.Random` 提供的完整方法（占位符）如下：

|               类型               | 方法                                                                   |
| :------------------------------: | ---------------------------------------------------------------------- |
|         [Basic](./basic)         | boolean, natural, integer, float, character, string, range             |
|          [Date](./date)          | date, time, datetime, now                                              |
|         [Image](./image)         | image, dataImage                                                       |
|         [Color](./color)         | color, hex, rgb, rgba, hsl                                             |
|          [Text](./text)          | paragraph, cparagraph, sentence, csentence, word, cword, title, ctitle |
|          [Name](./name)          | first, last, name, cfirst, clast, cname                                |
|           [Web](./web)           | url, protocol, domain, tld, ip, email                                  |
|       [Address](./address)       | region, province, city, county, zip                                    |
|        [Helper](./helper)        | capitalize, upper, lower, pick, shuffle                                |
| [Miscellaneous](./miscellaneous) | guid, id, increment                                                    |

## 扩展

`Mock.Random` 中的方法与数据模板的 `@占位符` 一一对应，在需要时还可以为 `Mock.Random` 扩展方法，然后在数据模板中通过 `@扩展方法` 引用。例如：

```js
Random.extend({
  constellation: function (date) {
    var constellations = [
      '白羊座',
      '金牛座',
      '双子座',
      '巨蟹座',
      '狮子座',
      '处女座',
      '天秤座',
      '天蝎座',
      '射手座',
      '摩羯座',
      '水瓶座',
      '双鱼座'
    ]
    return this.pick(constellations)
  }
})

Random.constellation()
// => "水瓶座"

Mock.mock('@CONSTELLATION')
// => "天蝎座"

Mock.mock({
  costellation: '@CONSTELLATION'
})
// => { costellation: "射手座" }
```
