# Image

## image

- 语法：

  ```js
  Random.image()
  Random.image(size)
  Random.image(size, background)
  Random.image(size, background, text)
  Random.image(size, background, foreground, text)
  Random.image(size, background, foreground, format, text)
  ```

- 详情：

  生成一个随机的图片地址。

  :::warning 注意
  `Random.image()` 用于生成高度自定义的图片地址。一般情况下，应该使用更简单的 [`Random.dataImage()`](#dataimage)。
  :::

- 参数：

  - size

    可选。

    指示图片的宽高，格式化为 `宽 x 高`。默认从下面的数组中随机读取一个：

    ```js
    [
      '300x250', '250x250', '240x400', '336x280',
      '180x150', '720x300', '468x60', '234x60',
      '88x31', '120x90', '120x60', '120x240',
      '125x125', '728x90', '160x600', '120x600',
      '300x600'
    ]
    ```

  - text

    可选。

    指示图片上的文字。默认值为参数 `size`。

  - background

    可选。

    指示图片的背景色。默认值为 `#000000`。

  - foreground

    可选。

    指示图片的格式。包括 `png`、`git`、`jpg`，默认值为 `png`。

- 示例：

  ```js
  // Random.image(size, background, foreground, format, text)
  Random.image('200x100', '#FF6600', '#FFF', 'jpg', 'Mock.js')
  Mock.mock("@IMAGE('200x100', '#FF6600', '#FFF', 'jpg', 'Mock.js')")
  ```

  <img src="http://dummyimage.com/200x100/FF6600/FFF.jpg&text=Mock.js"/>

## dataImage

- 语法：

  ```js
  Random.dataImage()
  Random.dataImage(size)
  Random.dataImage(size, text)
  ```

- 详情：

  生成一段随机的 Base64 图片编码。

  :::warning 注意
  如果需要生成高度自定义的图片，请使用 [`Random.image()`](#image)。
  :::

- 参数：

  `size` 和 `text` 参数的用法与 [`Random.image()`](#image) 相同。

  :::warning 注意
  图片的背景色是随机的，取值范围参考 <https://brandcolors.net/>。
  :::

- 示例：

  ```js
  // Random.dataImage(size, text)
  Random.dataImage('200x100', 'Hello Mock.js!')
  Mock.mock("@DATAIMAGE('200x100', 'Hello Mock.js!')")
  ```

  <img src="data:image/png;base64,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" alt="dataImage">
