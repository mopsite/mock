# Text

## paragraph

- 语法：

  ```js
  Random.paragraph()
  Random.paragraph(len)
  Random.paragraph(min, max)
  ```

- 详情：

  随机生成一段文本。

- 参数：

  - len

    可选。

    指示文本中句子的个数。默认值为 3 到 7 之间的随机数，

  - min

    可选。

    指示文本中句子的最小个数。默认值为 3。

  - max

    可选。

    指示文本中句子的最大个数。默认值为 7。

- 示例：

  ```js
  // Random.paragraph()
  Random.paragraph()
  // "Elmzkm ikuqwlwtj bbiv grw qofcd fstmodfon ugbhem ftymyo htgyrr pskh dmrrcte jxww dmrgonq wcsh nmksp clxwav. Yawezh ogkigwidsh upjg ldspgwnew njurrmkp ccowcw lid yunqn klwfl yjcmgf winlb njt yxwjyozhr lhv. Doyyvfiqgs lsfdbpei dytpcahcz hzmhqay qhwio bbjius dkmqeao sxmnu evddjtqgm xyrotdwi fkxh psahoxt ogtktknjn ponacnt eqoco."
  Mock.mock('@PARAGRAPH')
  // "Fxxiz gdha tqwwj mkkvsc pus ypfoitcy gtvpwq rzbopvp hnasvspc ximdkh vqp jegin cbmjiekfos sipv rrr. Gxzsrsoufc yvdrjxp imj mapeegelo rdqt rypk vrgwtjv cjmbwnwrf tfxrbyl txwmpbp sdv qlbyckzo wwbb ujlyto lhgdovgn gpmgyf hgma. Ftimxr lzgsuk nnkdfy qrohj qlngf qmgbvvenp umfr xprmqom ehmzytl klrqqb nyiqglln iyie vesmkus ijagw. Swro ecdyclsbz fpvxhfrydu sifvw smiknspl ipcijgvhhk weilnuwxyk uwwqr ecw udkkuvovk frrfyftt fbdn reta qqrhrutpq vxyl nyflz mptkcpxzo."

  // Random.paragraph(len)
  Random.paragraph(2)
  // "Jnvsyxb wmlxxvsa xedtt bved bdlf otskxlkg nnimf sxqi ihiodhwc pyicsvypqi cny uddeuwsni hdhqcjev bigme lulj sgboj bwpkq. Lsbqjfbmi iptxvdemq crkrma ujtbhrk zpct hnqzcktmh wtnemzkd zuzcyxhzhy qfrpmhq cfel gbbz lmzn hwjt mbyds nqnspj."
  Mock.mock('@PARAGRAPH(2)')
  // "Dhgph cgjnxadiv fggwmmtoi xznqrif qbycl mkieeamm adzmzxi ijhhfeylo olas rrhs wrfnvcwrx fygdb nzujzmjvsu zsw rjw bhbjolfdv. Llwgysq obhvw ifvqheqyb jdjsmopm qjdqkdut exkuhfm obdojdl jwbpk shdzacghg cqwqk jsvsiodszh oblelynf sljfkymiy jzoywywj xnbltw."

  // Random.paragraph(min, max)
  Random.paragraph(1, 3)
  // "Qkmdcp uyxiuuwnn wrgaffje ocpdjdzb nugtedkcst qbkfcfla olsby jmtoxq tkuefc ein unfibphco qikc dthsscxzl wzhvaitg unbu canosskt gqrj. Mfjbhyt dex rgn goiryvp pqmdelwcc jijvpxmv lfqouotlue uyntq psjel vqfwkie evljk ufnbkb lqqxffj."
  Mock.mock('@PARAGRAPH(1, 3)')
  // "Qzygl slw bewnvfdsd kooruqusr pwsa plcjf rvdmo qxdy lestqeex ynbvo uigxxbe bbetyfdmh. Bpiuriff jeuib jiocv nypplc fkwjr rkjb ksrjs oeuezrbiy fvwwlhrk mmkjryps rzwrkrm hjc rrtcq sdylxld uheqewsq."
  ```

## cparagraph

- 语法：

  ```js
  Random.cparagraph()
  Random.cparagraph(len)
  Random.cparagraph(min, max)
  ```

- 详情：

  随机生成一段中文文本。

- 参数：

  参数的含义和默认值同 [paragraph](#paragraph)。

- 示例：

  ```js
  // Random.cparagraph()
  Random.cparagraph()
  // "义究先名基大京分林积满经。白写条年万些众劳光头系入克合市干起。很都种适许问王发色去维无共。将资需难系变二派查斯压为委。"
  Mock.mock('@CPARAGRAPH')
  // "直指广各较极快设包细拉接传加往。把精切王清象表八十相通织单科群王同。四战表分就满把当个劳权有书都组队。铁状术资毛看数光快油接且证观张如容。"

  // Random.cparagraph(len)
  Random.cparagraph(2)
  // "行林去道干少构有同小例农适。但需无且做向放计第复权社期及基。"
  Mock.mock('@CPARAGRAPH(2)')
  // "量根厂由养观七身通外飞气。候高多主设根进接他农院非照工北住。"

  // Random.cparagraph(min, max)
  Random.cparagraph(1, 3)
  // "着改属走都走热给大使信理式。"
  Mock.mock('@CPARAGRAPH(1, 3)')
  // "我结物适了世本入实气热于声点。林级农局且同同细也开件政热商决共拉论。平正以眼风龙备增过离眼资合。"
  ```

## sentence

- 语法：

  ```js
  Random.sentence()
  Random.sentence(len)
  Random.sentence(min, max)
  ```

- 详情：

  随机生成一个句子，第一个单词的首字母大写。

- 参数：

  - len

    可选。

    指示句子中单词的个数。默认值为 12 到 18 之间的随机数。

  - min

    可选。

    指示句子中单词的最小个数。默认值为 12。

  - max

    可选。

    指示句子中单词的最大个数。默认值为 18。

- 示例：

  ```js
  // Random.sentence()
  Random.sentence()
  // "Ypmkelb leismkyup ujxdsuy ggxdg ktcitcwwd mnsaliqc rkhjdlfj igke gtsqpy tfakpyggq xnkn bolwtbes imkyvlucqe mmhxq rpfrogry qorxdrj."
  Mock.mock('@SENTENCE')
  // "Aguxu sxwibwxwh qvhnavyt irxfyr obokiu hhqaeq jgy moxsfmsrbf cyni nzkou xteobp roqo ivphtpo gqgr."

  // Random.sentence(len)
  Random.sentence(5)
  // "Rvudalq dspr ahueosth oqjku elcykticsm."
  Mock.mock('@SENTENCE(5)')
  // "Gtwm hdgsnqrql uupgkp tsvpbty imqxguct."

  // Random.sentence(min, max)
  Random.sentence(3, 5)
  // "Aajtxhvf pkrxvt npccpfhbsr tdd."
  Mock.mock('@SENTENCE(3, 5)')
  // "Duoyvvcgz xmvzyw gsxlpk rzdbnrp."
  ```

## csentence

- 语法：

  ```js
  Random.csentence()
  Random.csentence(len)
  Random.csentence(min, max)
  ```

- 详情：

  随机生成一个中文句子。

- 参数：

  参数的含义和默认值同 [sentence](#sentence)。

- 示例：

  ```js
  // Random.csentence()
  Random.csentence()
  // "资从严给被我律表主区展往受东党。"
  Mock.mock('@CSENTENCE')
  // "花小华确打八加取存据组生究。"

  // Random.csentence(len)
  Random.csentence(5)
  // "号千革条即。"
  Mock.mock('@CSENTENCE(5)')
  // "别见口传行。"

  // Random.csentence(min, max)
  Random.csentence(3, 5)
  // "集效性价。"
  Mock.mock('@CSENTENCE(3, 5)')
  // "种金就当。"
  ```

## word

- 语法：

  ```js
  Random.word()
  Random.word(len)
  Random.word(min, max)
  ```

- 详情：

  随机生成一个单词。

- 参数：

  - len

    可选。

    指示单词中字符的个数。默认值为 3 到 10 之间的随机数。

  - min

    可选。

    指示单词中字符的最小个数。默认值为 3。

  - max

    可选。

    指示单词中字符的最大个数。默认值为 10。

- 示例：

  ```js
  // Random.word()
  Random.word() // "tugbsle"
  Mock.mock('@WORD') // "yxqipjvxtv"

  // Random.word(len)
  Random.word(5) // "kijdt"
  Mock.mock('@WORD(5)') // "bhhkg"

  // Random.word(min, max)
  Random.word(3, 5) // "qvub"
  Mock.mock('@WORD(3, 5)') // "epf"
  ```

## cword

- 语法：

  ```js
  Random.cword()
  Random.cword(pool)
  Random.cword(len)
  Random.cword(pool, len)
  Random.cword(min, max)
  Random.cword(pool, min, max)
  ```

- 详情：

  随机生成一个汉字。

- 参数：

  - pool

    可选。

    汉字字符串。表示汉字字符池，将从中选择一个汉字字符返回。

  - len

    可选。

    字符池返回的字符个数。默认值为 1。

  - min

    可选。

    随机汉字字符串的最小长度，默认值为 1。

  - max

    可选。

    随机汉字字符串的最大长度，默认值为 1。

- 示例：

  ```js
  // Random.cword()
  Random.cword() // "做"
  Mock.mock('@CWORD') // "支"

  // Random.cword(pool)
  Random.cword('零一二三四五六七八九十') // "一"
  Mock.mock("@CWORD('零一二三四五六七八九十')") // "三"

  // Random.cword(length)
  Random.cword(3) // "与线能"
  Mock.mock('@CWORD(3)') // "打说明"

  // Random.cword(pool, length)
  Random.cword('零一二三四五六七八九十', 3) // "七五一"
  Mock.mock("@CWORD('零一二三四五六七八九十', 3)") // "四六二"

  // Random.cword(min, max)
  Random.cword(3, 5) // "党济它备角"
  Mock.mock('@CWORD(3, 5)') // "成转增"

  // Random.cword(pool, min, max)
  Random.cword('零一二三四五六七八九十', 5, 7) // "九八八九七一"
  Mock.mock("@CWORD('零一二三四五六七八九十', 5, 7)") // "二三一三零四"
  ```

## title

- 语法：

  ```js
  Random.title()
  Random.title(len)
  Random.title(min, max)
  ```

- 详情：

  随机生成一句标题，其中每个单词的首字母大写。

- 参数：

  - len

    可选。

    指示标题中单词的个数。默认值为 3 到 7 之间的随机数。

  - min

    可选。

    指示标题中单词的最小个数。默认值为 3。

  - max

    可选。

    指示标题中单词的最大个数。默认值为 7。

- 示例：

  ```js
  // Random.title()
  Random.title()
  // "Wpih Rpnkvokmi Pply Muyivreo"
  Mock.mock('@TITLE')
  // "Ubdixav Epdnsnr Ryblhfw Llftjzno Gtfd"

  // Random.title(len)
  Random.title(5)
  // "Xnufwp Hqgsxh Hdnkwi Mgpnpmskb Dvxel"
  Mock.mock('@TITLE(5)')
  // "Wwdfpf Jryjyiq Dyqpcn Ghtyvfy Qrrfaov"

  // Random.title(min, max)
  Random.title(3, 5)
  // "Zwmanlclpb Qnbddrval Ggrhswts Mqdif"
  Mock.mock('@TITLE(3, 5)')
  // "Qcptqq Nyeisis Lmjhfxp Jihvdi"
  ```

## ctitle

- 语法：

  ```js
  Random.ctitle()
  Random.ctitle(len)
  Random.ctitle(min, max)
  ```

- 详情：

  随机生成一句汉字标题。

- 参数：

  参数的含义和默认值同 [title](#title)，只是将单词个数改为汉字个数。

- 示例：

  ```js
  // Random.ctitle()
  Random.ctitle() // "许保五比"
  Mock.mock('@CTITLE') // "火东七达积"

  // Random.ctitle(len)
  Random.ctitle(5) // "式阶特次己"
  Mock.mock('@CTITLE(5)') // "利或构过果"

  // Random.ctitle(min, max)
  Random.ctitle(3, 5) // "由育里"
  Mock.mock('@CTITLE(3, 5)') // "光回须自"
  ```
