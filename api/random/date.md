# Date

## date

- 语法：

  ```js
  Random.date()
  Random.date(format)
  ```

- 详情：

  返回一个随机的日期字符串。

- 参数：

  - format

    可选。

    指示生成的日期字符串的格式。默认值为 `yyyy-MM-dd`。

    可选的格式如下所示：

    | 格式 | 描述                                          |     示例     |
    | :--: | :-------------------------------------------- | :----------: |
    | yyyy | 完整的 4 位数年份                             | 1999 or 2003 |
    |  yy  | 2 位数年份                                    |   99 or 03   |
    |  y   | 2 位数年份                                    |   99 or 03   |
    |  MM  | 带前导 0 的月份                               |   01 to 12   |
    |  M   | 不带前导 0 的月份                             |   1 to 12    |
    |  dd  | 带前导 0 的日期                               |   01 to 31   |
    |  d   | 不带前导 0 的日期                             |   1 to 31    |
    |  HH  | 带前导 0 的 24 小时制小时数                   |   00 to 23   |
    |  H   | 不带前导 0 的 24 小时制小时数                 |   0 to 23    |
    |  hh  | 带前导 0 的 12 小时制小时数                   |   01 to 12   |
    |  h   | 不带前导 0 的 12 小时制小时数                 |   1 to 12    |
    |  mm  | 带前导 0 的 分钟数                            |   00 to 59   |
    |  m   | 不带前导 0 的 分钟数                          |   0 to 59    |
    |  ss  | 带前导 0 的 秒数                              |   00 to 59   |
    |  s   | 不带前导 0 的 秒数                            |   0 to 59    |
    |  SS  | 带前导 0 的 毫秒数                            |  000 to 999  |
    |  S   | 不带前导 0 的 毫秒数                          |   0 to 999   |
    |  A   | 大写的上午或下午                              |   AM or PM   |
    |  a   | 小写的上午或下午                              |   am or pm   |
    |  T   | 从 1970-1-1 00:00:00 UTC 返回的时间戳（毫秒） | 759883437303 |

- 示例：

  ```js
  // Random.date()
  Random.date() // "1972-08-06"
  Mock.mock('@DATE') // "2010-04-24"

  // Random.date(farmat)
  Random.date('yy-MM-dd') // "71-10-10"
  Mock.mock('@DATE("y-M-d")') // "07-2-6"
  ```

## time

- 语法：

  ```js
  Random.time()
  Random.time(format)
  ```

- 详情：

  返回一个随机的时间字符串。

- 参数：

  - format

    可选。

    指示生成的时间字符串的格式。用法与 [date](#date) 的 `format` 格式相同。默认值为 `HH:mm:ss`。

- 示例：

  ```js
  // Random.time()
  Random.time() // "06:43:30"
  Mock.mock('@TIME') // "17:52:52"

  // Random.time(format)
  Random.time('A HH:mm:ss') // "PM 13:09:43"
  Mock.mock('@TIME("a H:m:s")') // "am 4:14:56"
  ```

## datetime

- 语法：

  ```js
  Random.datetime()
  Random.datetime(format)
  ```

- 详情：

  返回一个随机的日期和时间字符串。

- 参数：

  - format

    可选。

    指示生成的日期和时间字符串的格式。用法与 [date](#date) 的 `format` 格式相同。默认值为 `yyyy-MM-dd HH:mm:ss`。

- 示例：

  ```js
  // Random.datetime()
  Random.datetime() // "2000-09-02 05:19:01"
  Mock.mock('@DATETIME') // "1988-06-05 06:42:00"

  // Random.datetime(format)
  Random.datetime('y-M-d H:m:s') // "73-3-6 12:37:47"
  Mock.mock('@DATETIME("y-M-d H:m:s")') // "98-10-1 0:11:13"
  ```

## now

- 语法：

  ```js
  Random.now()
  Random.now(unit)
  Random.now(format)
  Random.now(unit, format)
  ```

- 详情：

  返回当前的日期和时间字符串。

- 参数：

  - unit

    可选。表示时间单位，用于对当前日期和时间进行格式化。可选值有：`year`、`month`、`week`、`day`、`hour`、`minute`、`second`，默认不会格式化。

  - format

    可选。

    指示生成的日期和时间字符串的格式。用法与 [date](#date) 的 `format` 格式相同。默认值为 `yyyy-MM-dd HH:mm:ss`。

- 示例：

  ```js
  // Random.now()
  Random.now() // "2022-04-05 15:12:53"
  Mock.mock('@NOW') // "2022-04-05 15:12:53"

  // Random.now(unit)
  Random.now('year') // "2022-01-01 00:00:00"
  Mock.mock('@NOW("month")') // "2022-04-01 00:00:00"

  // Random.now(format)
  Random.now('yyyy-MM-dd HH:mm:ss SS') // "2022-04-05 15:14:02 503"
  Mock.mock('@NOW("yyyy-MM-dd HH:mm:ss SS")') // "2022-04-05 15:14:02 503"

  // Random.now(unit, format)
  Random.now('day', 'yyyy-MM-dd HH:mm:ss SS') // "2022-04-05 00:00:00 000"
  Mock.mock('@NOW("day", "yyyy-MM-dd HH:mm:ss SS")') // "2022-04-05 00:00:00 000"
  ```
