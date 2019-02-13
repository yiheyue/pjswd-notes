# 客户端检测

不同浏览器之间存在着一些的差异，导致开发人员编写的代码在不同的浏览器上的运行效果不一致。要解决这个问题，最为常见的策略就是利用各种客户端检测方法。

## 能力检测

最常用的客户端检测形式是能力检测。能力检测的目标不是识别特定的浏览器，而是识别浏览器的能力。能力检测的基本模式如下：

```js
if (object.propertyInQuestion) {
  // 使用 object.propertyInQuestion
}
```

例如早期的 IE 不支持 `document.getElementById()` 这个 DOM 方法。如下代码可以解决这个问题：

```js
function getElement(id) {
  if (document.getElementById) {
    return document.getElementById(id);
  } else if (document.all) {
    return document.all;
  } else {
    throw new Error('No way to retrieve element!');
  }
}
```

在实际开发中，能力检测应该作为确定下一步解决方案的依据，而不是作为检测用户浏览器的工具。

## 用户代理检测

用户代理检测是一种客户端检测技术。该技术通过检测用户代理字符串（用户代理字符串可以通过 `navigator.userAgent` 来访问）来确定用户实际使用的浏览器。

### 用户代理字符串的历史

HTTP 规范（包括 1.0 和 1.1 版）明确规定，浏览器应该发送简短的用户代理字符串，用以指明浏览器的名称和版本号。

1. 早期的浏览器

    1993 年，美国 NCSA 发布了世界上第一款 Web 浏览器 Mosaic。这款浏览器的用户代理字符串非常简单，如下所示：

    ```
    Mosaic/0.9
    ```

    Netscape Communications 公司介入浏览器开发领域后，将自己产品的代号定名为 Mozilla。该公司第一个公开发行版 Netscape Navigator 2 的用户代理字符串具有如下的格式：

    ```
    Mozilla/版本号 [语言] (平台; 加密类型)
    ```

    - 语言：即语言代码，表示应用程序针对哪种语言设计的

    - 平台：即操作系统平台，表示应用程序的运行环境

    - 加密类型：即安全加密的类型，可能的值有 U（128 位加密）、I（40 位加密） 和 N（未加密）

    典型的 Netscape Navigator 2 的用户代理字符串如下所示：

    ```
    Mozilla/2.02 [Fr] (WinNT; I)
    ```

    上述的用户代理字符串表示浏览器是 Netscape Navigator 2.02，为法语国家编译，运行在 Windows NT 平台上，加密类型为 40 位。

2. Netscape Navigator 3 和 Internet Explorer 3

    1996 年，Netscape Navigator 3 发布，随即超越 Mosaic 成为当时最为流行的 Web 浏览器。Netscape Navigator 3 同时小幅度的修改了用户代理字符串：删除了语言标记，允许添加操作系统或系统使用的 CPU 等可选信息。格式如下：

    ```
    Mozilla/版本号 (平台; 加密类型 [; 操作系统或 CPU 说明])
    ```

    典型的 Netscape Navigator 3 的用户代理字符串如下所示：

    ```
    Mozilla/3.0 (Win95; U)
    ```

    上述的用户代理字符串表示浏览器是 Netscape Navigator 3.0，运行在 Windows 95 下，加密类型为 128 位。

    Netscape Navigator 3 发布后不久，微软也发布其第一款 Web 浏览器，即 Internet Explorer 3。IE3 的用户代理字符串的格式如下：

    ```
    Mozilla/2.0 (compatible; MSIE 版本号; 操作系统)
    ```

    例如运行在 Windows 95 上的 IE3.02 的用户代理字符串如下所示：

    ```
    Mozilla/2.0 (compatible; MSIE 3.03; Windows 95)
    ```

3. Netscape Communicator 4 和 IE4~IE9

    1997 年 8 月，Netscape Communicator 4 发布（这一版将浏览器的名称从 Netscape Navigator 改成了 Netscape Communicator），且继续遵循之前的用户代理字符串格式：

    ```
    Mozilla/版本号 (平台; 加密类型 [; 操作系统或 CPU 说明])
    ```

    例如，运行在 Windows 98 上的 Netscape Communicator 4 的用户代理字符串如下：

    ```
    Mozilla/4.0 (Win98; I)
    ```

    而微软在发布 IE4 时，将其用户代理字符串修改成如下格式：

    ```
    Mozilla/4.0 (compatible; MSIE 版本号; 操作系统)
    ```

    例如，运行在 Windows 98 上的 IE4 的用户代理字符串如下：

    ```
    Mozilla/4.0 (compatible; MSIE 4.0; Windows 98)
    ```

    IE7 时的用户代理字符串格式如下：

    ```
    Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)
    ```

    IE8 时的用户代理字符串（添加了呈现引擎的版本号）格式如下：

    ```
    Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 5.1; Trident/4.0)
    ```

    IE9 时的用户代理字符串格式如下：

    ```
    Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; Trident/5.0)
    ```

4. Gecko

    Gecko 是 Firefox 的呈现引擎。Firefox 4 的用户代理字符串如下：

    ```
    Mozilla/5.0 (Windows NT 6.1; rv:2.0.1) Gecko/20100101 Firefox 4.0.1
    ```

5. WebKit

    2003 年，Apple 公司宣布要开发自己的 Web 浏览器，名字为 Safari。Safari 的呈现引擎为 WebKit。WebKit 是 Linux 平台中 Konqueror 浏览器中的呈现引擎 KHTML 的一个分支。几年之后，WebKit 成为一个独立的开源项目。

    Safari 1.0 的用户代理字符串如下：

    ```
    Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en) AppleWebKit/124 (KHTML, like Gecko) Safari/125.1
    ```

    Safari 3.0 的用户代理字符串如下：

    ```
    Mozilla/5.0 (Macintosh; U; PPC Mac OS X; en) AppleWebKit/522.15.5 (KHTML, like Gecko) Version 3.0.3 Safari/522.15.5
    ```