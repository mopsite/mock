# Miscellaneous

## guid

- 语法：

  ```js
  Random.guid()
  ```

- 详情：

  随机生成一个 GUID。

- 示例：

  ```js
  Random.guid() // "f1A5739E-3bE6-5927-c3d6-3e8Cd5Cb49CA"
  Mock.mock('@GUID') // "AdD3AE9E-E9dD-1F51-897A-aec92E5D14eB"
  ```

## id

- 语法：

  ```js
  Random.id()
  ```

- 详情：

  随机生成一个 18 位身份证号。

- 示例：

  ```js
  Random.id() // "52000019980729981X"
  Mock.mock('@ID') // "34000019790829541X"
  ```

## increment

- 语法：

  ```js
  Random.increment()
  Random.increment(step)
  ```

- 详情：

  生成一个全局的自增整数。

- 参数：

  - step

    可选。

    整数自增的起始数和步长，默认值为 1。

- 示例：

  ```js
  // Random.increment()
  Random.increment() // 1
  Mock.mock('@INCREMENT') // 2

  // Random.increment(step)
  Random.increment(100) // 100
  Mock.mock('@INCREMENT(100)') // 200
  ```
