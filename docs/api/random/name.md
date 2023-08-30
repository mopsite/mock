# Name

## first

**详情**：

随机生成一个常见的英文名。

**使用**：

```js
Random.first() // "Jennifer"
Mock.mock('@first') // "Nancy"
```

## last

**详情**：

随机生成一个常见的英文姓。

**使用**：

```js
Random.last() // "Thomas"
Mock.mock('@last') // "Jackson"
```

## name

**详情**：

随机生成一个常见的英文姓名。

**语法**：

```js
Random.name()
Random.name(middle)
```

**参数**：

- **middle**：可选。布尔值。指示是否生成中间名。

**示例**：

```js
// Random.name()
Random.name() // "Richard Moore"
Mock.mock('@name') // "Susan Perez"

// Random.name(middle)
Random.name(true) // "Amy Dorothy Brown"
Mock.mock('@name(true)') // "Kimberly Larry Clark"
```

## cfirst

**详情**：

随机生成一个常见的中文姓。

**使用**：

```js
Random.cfirst() // "曹"
Mock.mock('@cfirst') // "苏"
```

## clast

**详情**：

随机生成一个常见的中文名。

**使用**：

```js
Random.clast() // "杰"
Mock.mock('@clast') // "娟"
```

## cname

**详情**：

随机生成一个常见的中文姓名。

**使用**：

```js
Random.cname() // "袁军"
Mock.mock('@cname') // "谢平"
```
