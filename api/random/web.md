# Web

## url

- 语法：

  ```js
  Random.url()
  Random.url(protocol, host)
  ```

- 详情：

  随机生成一个 URL。

- 参数：

  - protocol

    可选。

    指定 URL 协议，例如 `http`。

  - host

    可选。

    指定 URL 域名和端口号，例如 `nuysoft.com`。

- 示例：

  ```js
  // Random.url()
  Random.url() // http://theqesdv.aero/amfivhxgx
  Mock.mock('@URL') // http://stmd.mh/biietlmrb

  // Random.url(protocol, host)
  Random.url('http', 'soft.com') // http://soft.com/qglhef
  Mock.mock("@URL('http', 'soft.com')") // http://soft.com/fkazb
  ```

## protocol

- 语法：

  ```js
  Random.protocol()
  ```

- 详情：

  随机生成一个 URL 协议。返回以下值之一：`'http'`、`'ftp'`、`'gopher'`、`'mailto'`、`'mid'`、`'cid'`、`'news'`、`'nntp'`、`'prospero'`、`'telnet'`、`'rlogin'`、`'tn3270'`、`'wais'`。

- 示例：

  ```js
  Random.protocol() // "mailto"
  Mock.mock('@PROTOCOL') // "prospero"
  ```

## domain

- 语法：

  ```js
  Random.domain()
  ```

- 详情：

  随机生成一个域名。

- 示例：

  ```js
  Random.domain() // "snllh.tv"
  Mock.mock('@DOMAIN') // "gdqbpf.wf"
  ```

## tld

- 语法：

  ```js
  Random.tld()
  ```

- 详情：

  随机生成一个顶级域名。

- 示例：

  ```js
  Random.tld() // "com"
  Mock.mock('@TLD') // "net"
  ```

## ip

- 语法：

  ```js
  Random.ip()
  ```

- 详情：

  随机生成一个 IP 地址。

- 示例：

  ```js
  Random.ip() // "230.20.185.172"
  Mock.mock('@IP') // "229.140.178.59"
  ```

## email

- 语法：

  ```js
  Random.email()
  Random.email(domain)
  ```

- 详情：

  随机生成一个邮件地址。

- 参数：

  - domain

    可选。

    指定邮件地址的域名，例如 `nuysoft.com`。

- 示例：

  ```js
  // Random.email()
  Random.email() // "v.biphhmffs@uoymfy.net"
  Mock.mock('@EMAIL') // "d.nnyvb@oghqu.bz"

  // Random.email(domain)
  Random.email('nuysoft.com') // q.qichtip@nuysoft.com
  Mock.mock("@EMAIL('nuysoft.com')") // s.ijrroc@nuysoft.com
  ```
