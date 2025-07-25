# Helper

## capitalize

- 语法：

  ```js
  Random.capitalize(word)
  ```

- 详情：

  把字符串的第一个字母转换为大写。

- 示例：

  ```js
  Random.capitalize('hello') // "Hello"
  Mock.mock('@CAPITALIZE("hello")') // "Hello"
  ```

## upper

- 语法：

  ```js
  Random.upper(word)
  ```

- 详情：

  把字符串转换为大写。

- 示例：

  ```js
  Random.upper('hello') // "HELLO"
  Mock.mock('@UPPER("hello")') // "HELLO"
  ```

## lower

- 语法：

  ```js
  Random.lower(word)
  ```

- 详情：

  把字符串转换为小写。

- 示例：

  ```js
  Random.lower('HELLO') // "hello"
  Mock.mock('@LOWER("HELLO")') // "hello"
  ```

## pick

- 语法：

  ```js
  Random.pick(arr)
  ```

- 详情：

  从数组中随机选取一个元素，并返回。

- 示例：

  ```js
  Random.pick(['a', 'e', 'i', 'o', 'u']) // "o"
  Mock.mock("@PICK(['a', 'e', 'i', 'o', 'u'])") // "e"
  ```

## shuffle

- 语法：

  ```js
  Random.shuffle(arr)
  ```

- 详情：

  打乱数组中元素的顺序，并返回新数组。

- 示例：

  ```js
  Random.shuffle(['a', 'e', 'i', 'o', 'u']) // ["o", "u", "e", "i", "a"]
  Mock.mock("@SHUFFLE(['a', 'e', 'i', 'o', 'u'])") // ["o", "u", "e", "i", "a"]
  ```
