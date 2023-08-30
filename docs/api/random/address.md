# Address

## region

**详情**：

随机生成一个（中国）大区。

**使用**：

```js
Random.region() // 东北
Mock.mock('@region') // 华北
```

## province

**详情**：

随机生成一个（中国）省（或直辖市、自治区、特别行政区）。

**使用**：

```js
Random.province() // "西藏自治区"
Mock.mock('@province') // "上海"
```

## city

**详情**：

随机生成一个（中国）市。

**语法**：

```js
Random.city()
Random.city(prefix)
```

**参数**：

- **prefix**：可选。布尔值。指示是否城城所属的省。

**示例**：

```js
// Random.city()
Random.city() // "玉溪市"
Mock.mock('@city') // "拉萨市"

// Random.city(prefix)
Random.city(true) // "浙江省 嘉兴市"
Mock.mock('@city(true)') // "澳门特别行政区 澳门半岛"
```

## county

**详情**：

随机生成一个（中国）县。

**语法**：

```js
Random.county()
Random.county(prefix)
```

**参数**：

- **prefix**：可选。布尔值。指示是否城城所属的省、市。

**示例**：

```js
// Random.county()
Random.county() // "涪陵区"
Mock.mock('@county') // "革吉县"

// Random.county(prefix)
Random.county(true) // "宁夏回族自治区 固原市 西吉县"
Mock.mock('@county(true)') // "湖北省 十堰市 竹山县"
```

## zip

**详情**：

随机生成一个邮政编码（六位数字）。

**使用**：

```js
Random.zip() // "217317"
Mock.mock('@zip') // "427485"
```
