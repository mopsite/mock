# Miscellaneous

## guid

**详情**：

随机生成一个 GUID。

**使用**：

```js
Random.guid() // "f1A5739E-3bE6-5927-c3d6-3e8Cd5Cb49CA"
Mock.mock('@guid') // "AdD3AE9E-E9dD-1F51-897A-aec92E5D14eB"
```

## id

**详情**：

随机生成一个 18 位身份证。

```js
Random.id() // "52000019980729981X"
Mock.mock('@id') // "34000019790829541X"
```

**使用**：

## increment

**详情**：

生成一个全局的自增整数。

**语法**：

```js
Random.increment()
Random.increment(step)
```

**参数**：

- **step**：可选。整数自增的起始数和步长，默认值为 1。

**示例**：

```js
// Random.increment()
Random.increment() // 1
Mock.mock('@increment') // 2

// Random.increment(step)
Random.increment(100) // 103
Mock.mock('@increment(100)') // 203
```
