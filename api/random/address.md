# Address

## region

- 语法：

  ```js
  Random.region()
  ```

- 详情：

  随机生成一个中国的大区。

- 示例：

  ```js
  Random.region() // 东北
  Mock.mock('@REGION') // 华北
  ```

## province

- 语法：

  ```js
  Random.province()
  ```

- 详情：

  随机生成一个中国的省份（或直辖市、自治区、特别行政区）。

- 示例：

  ```js
  Random.province() // "西藏自治区"
  Mock.mock('@PROVINCE') // "上海"
  ```

## city

- 语法：

  ```js
  Random.city()
  Random.city(prefix)
  ```

- 详情：

  随机生成一个中国的城市。

- 参数：

  - prefix

    可选。

    布尔值。指示是否生成城市所属的省。

- 示例：

  ```js
  // Random.city()
  Random.city() // "玉溪市"
  Mock.mock('@CITY') // "拉萨市"

  // Random.city(prefix)
  Random.city(true) // "浙江省 嘉兴市"
  Mock.mock('@CITY(true)') // "澳门特别行政区 澳门半岛"
  ```

## county

- 语法：

  ```js
  Random.county()
  Random.county(prefix)
  ```

- 详情：

  随机生成一个中国的县。

- 参数：

  - prefix

    可选。

    布尔值。指示是否生成县所属的省、市。

- 示例：

  ```js
  // Random.county()
  Random.county() // "涪陵区"
  Mock.mock('@COUNTY') // "革吉县"

  // Random.county(prefix)
  Random.county(true) // "宁夏回族自治区 固原市 西吉县"
  Mock.mock('@COUNTY(true)') // "湖北省 十堰市 竹山县"
  ```

## zip

- 语法：

  ```js
  Random.zip()
  ```

- 详情：

  随机生成一个六位数的邮政编码。

- 示例：

  ```js
  Random.zip() // "217317"
  Mock.mock('@ZIP') // "427485"
  ```
