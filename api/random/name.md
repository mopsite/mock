# Name

## first

- 语法：

  ```js
  Random.first()
  ```

- 详情：

  随机生成一个常见的英文名。

- 示例：

  ```js
  Random.first() // "Jennifer"
  Mock.mock('@FIRST') // "Nancy"
  ```

## last

- 语法：

  ```js
  Random.last()
  ```

- 详情：

  随机生成一个常见的英文姓。

- 示例：

  ```js
  Random.last() // "Thomas"
  Mock.mock('@LAST') // "Jackson"
  ```

## name

- 语法：

  ```js
  Random.name()
  Random.name(middle)
  ```

- 详情：

  随机生成一个常见的英文全名。

- 参数：

  - middle

    可选。

    布尔值。指示是否生成中间名。

- 示例：

  ```js
  // Random.name()
  Random.name() // "Richard Moore"
  Mock.mock('@NAME') // "Susan Perez"

  // Random.name(middle)
  Random.name(true) // "Amy Dorothy Brown"
  Mock.mock('@NAME(true)') // "Kimberly Larry Clark"
  ```

## cfirst

- 语法：

  ```js
  Random.cfirst()
  ```

- 详情：

  随机生成一个常见的中文姓。

- 示例：

  ```js
  Random.cfirst() // "曹"
  Mock.mock('@CFIRST') // "苏"
  ```

## clast

- 语法：

  ```js
  Random.clast()
  ```

- 详情：

  随机生成一个常见的中文名。

- 示例：

  ```js
  Random.clast() // "杰"
  Mock.mock('@CLAST') // "娟"
  ```

## cname

- 语法：

  ```js
  Random.cname()
  ```

- 详情：

  随机生成一个常见的中文全名。

- 示例：

  ```js
  Random.cname() // "袁军"
  Mock.mock('@CNAME') // "谢平"
  ```
