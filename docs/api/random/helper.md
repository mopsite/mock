# Helper

## capitalize

**详情**：

把字符串的第一个字母转换为大写。

**使用**：

```js
// Random.capitalize(word)
Random.capitalize('hello') // "Hello"
Mock.mock('capitalize("hello")') // "Hello"
```

## upper

**详情**：

把字符串转换为大写。

**使用**：

```js
// Random.upper(str)
Random.upper('hello') // "HELLO"
Mock.mock('upper("hello")') // "HELLO"
```

## lower

**详情**：

把字符串转换为小写。

**使用**：

```js
// Random.upper(str)
Random.upper('HELLO') // "hello"
Mock.mock('upper("HELLO")') // "hello"
```

## pick

**详情**：

从数组中随机选取一个元素并返回。

**使用**：

```js
// Random.pick(arr)
Random.pick(['a', 'e', 'i', 'o', 'u']) // "o"
Mock.mock("@pick(['a', 'e', 'i', 'o', 'u'])") // "e"
```

## shuffle

**详情**：

打乱数组中元素的顺序并返回。

**使用**：

```js
// Random.shuffle(arr)
Random.shuffle(['a', 'e', 'i', 'o', 'u']) // ["o", "u", "e", "i", "a"]
Mock.mock("@shuffle(['a', 'e', 'i', 'o', 'u'])") // ["o", "u", "e", "i", "a"]
```
