# Web

## url

**详情**：

随机生成一个 URL。

**语法**：

```js
Random.url()
Random.url(protocol, host)
```

**参数**：

- **protocol**：指定 URL 协议，例如 `http`。

- **host**：指定 URL 域名和端口号，例如 `nuysoft.com`。

**示例**：

```js
// Random.url()
Random.url() // http://theqesdv.aero/amfivhxgx
Mock.mock('@url') // http://stmd.mh/biietlmrb

// Random.url(protocol, host)
Random.url('http', 'soft.com') // http://soft.com/qglhef
Mock.mock("@url('http', 'soft.com')") // http://soft.com/fkazb
```

## protocol

**详情**：

随机生成一个 URL 协议，返回以下值之一：

`'http'`、`'ftp'`、`'gopher'`、`'mailto'`、`'mid'`、`'cid'`、`'news'`、`'nntp'`、`'prospero'`、`'telnet'`、`'rlogin'`、`'tn3270'`、`'wais'`。

**使用**：

```js
Random.protocol() // "mailto"
Mock.mock('@protocol') // "prospero"
```

## domain

**详情**：

随机生成一个域名。

**使用**：

```js
Random.domain() // "snllh.tv"
Mock.mock('@domain') // "gdqbpf.wf"
```

## tld

**详情**：

随机生成一个顶级域名。

**使用**：

```js
Random.tld() // "com"
Mock.mock('@tld') // "net"
```

## ip

**详情**：

随机生成一个 IP 地址。

**使用**：

```js
Random.ip() // "230.20.185.172"
Mock.mock('@ip') // "229.140.178.59"
```

## email

**详情**：

随机生成一个邮件地址。

**语法**：

```js
Random.email()
Random.email(domain)
```

**参数**：

- **domain**：指定邮件地址的域名，例如 `nuysoft.com`。

**示例**：

```js
// Random.email()
Random.email() // "v.biphhmffs@uoymfy.net"
Mock.mock('@email') // "d.nnyvb@oghqu.bz"

// Random.email(domain)
Random.email('nuysoft.com') // q.qichtip@nuysoft.com
Mock.mock("email('nuysoft.com')") // s.ijrroc@nuysoft.com
```
