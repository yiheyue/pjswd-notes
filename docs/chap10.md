# DOM

DOM（文档对象模型）是针对 HTML 和 XML 文档的一个 API。用于描绘出一个具有层次结构的节点树，从而让开发人员可以很方便的对文档内容作出修改。DOM 1 级在 1998 年 10 月成为 W3C 的推荐标准，为基本的文档结构和查询提供了 API。

## 节点层次

DOM 可以将任何的 HTML 和 XML 文档描述成一个由多层节点构成的结构。节点分为 12 种不同的类型，这些类型都继承自一个基类型。每个节点都拥有各自的特点、数据和方法。以下面的 HTML 为例：

```html
<html>
  <head>
    <title>Page title</title>
  </head>
  <body>
    <p>Hello World!</p>
  </body>
</html>
```

上例的层次结构如下所示：

```
Document
│
└── Element html
    │
    ├── Element head
    │   │
    │   └── Element title
    │       │
    │       └── Text Page title
    │
    └── Element body
        │
        └── Element p
            │
            └── Text Hello World!
```

**文档节点**是每个 HTML 文档的根节点，文档节点只有一个子节点，即 `<html>` 元素，我们称其为**文档元素**。文档元素是文档的最外层元素，文档中的其他元素都包含在文档元素中。

### Node 类型

DOM1 级定义了一个 Node 接口，该接口由 DOM 中其他所有节点类型实现。Node 接口在 JavaScript 中是作为 Node 类型实现的。JavaScript 中的其他所有节点类型都继承自 Node 类型，因此所有节点都共享着相同的基本属性和方法。

每个节点都有一个 `nodeType` 属性，用于表明节点的类型。节点类型由在 Node 类型中定义的 12 个数值常量来表示：

- `Node.ELEMENT_NODE` - (1)

- `Node.ATTRIBUTE_NODE` - (2)

- `Node.TEXT_NODE` - (3)

- `Node.CDATA_SECTION_NODE` - (4)

- `Node.ENTITY_REFERENCE_NODE` - (5)

- `Node.ENTITY_NODE` - (6)

- `Node.PROCESSING_INSTRUCTION_NODE` - (7)

- `Node.COMMENT_NODE` - (8)

- `Node.DOCUMENT_NODE` - (9)

- `Node.DOCUMENT_TYPE_NODE` - (10)

- `Node.DOCUMENT_FRAGMENT_NODE` - (11)

- `Node.NOTATION_NODE` - (12)

由上到下，它们的数值为 1～12。

每个节点还有 `nodeName` 和 `nodeValue` 的属性。通过 `someNode.nodeName` 和 `someNode.nodeValue` 来访问它们。

1. 节点关系

    文档中的节点关系可以使用传统的家族关系来描述。例如上例中的 `<body>` 元素是 `<html>` 元素的子元素，相反，`<html>` 元素就是 `<body>` 元素的父元素。而 `<head>` 元素和 `<body>` 元素互为同胞元素。

    每个节点都有一个 `childNodes` 的属性，该属性保存着一个 NodeList 对象。该对象保存着一组有序的节点。以下是访问 NodeList 中的节点的方法：

    ```js
    var firstChild = someNode.childNodes[0];
    var secondChild = someNode.childNodes.item(1);
    var count = some.childNodes.length;
    ```

    同时，每个节点也都有一个 `parentNode` 属性，该属性指向其父节点。而包含在 `childNodes` 列表中的每个节点之间互为同胞关系，它们都拥有 `previousSibling` 和 `nextSibling` 属性，用于访问上一个或是下一个同胞节点。

    互为父子关系的节点中的父节点具有 `firstChild` 和 `lastChild` 元素，它们分别指向子元素中的第一个和最后一个。

    如果要判断一个节点是否拥有子节点，可以使用 `hasChildNodes()` 方法。

    所有节点都还有一个属性：`ownerDocument`，该属性指向表示整个文档的文档节点。

2. 操作节点

    - `appendChild()`：在 `childNodes` 列表的末尾添加一个节点，该方法接受 1 个参数，该参数是将被插入的参数。

    - `insertBefore()`：在 `childNodes` 列表中的任意位置插入一个节点，该方法接受 2 个参数，第一个参数是要插入的节点，第二个参数是参照节点。要插入的节点将成为参照节点的上一个同胞节点。

    - `replaceChild()`：替换 `childNodes` 列表中的一个节点，该方法接受 2 个参数，第一个参数是要插入的节点，第二个参数是要被替换的节点。

    - `removeChild()`：移除 `childNodes` 列表中的一个节点，该方法接受 1 个参数，该参数是将被移除的节点。

    - `cloneNode()`：复制调用该方法的节点，返回其副本，该方法接受 1 个布尔值参数，为 true 则进行深复制，为 false 则进行浅复制。

    - `normalize()`：用于处理文本节点，该方法接受 1 个参数，该参数是将被处理的节点。

### Document 类型

JavaScript 通过 Document 类型表示文档。在浏览器中，document 对象是 HTMLDocument（该类型继承自 Document 类型）的一个实例，表示整个 HTML 页面。而且 document 对象也是 window 对象的属性。

总结一下：

```
Document 类型
│
│ 继承
│
HTMLDocument 类型
    │
    │ 实例化
    │
    └──> document 对象（window.document）
```

Document 节点具有下列特性：

- `nodeType` 的值为 9

- `nodeName` 的值为 #document

- `nodeValue` 的值为 null

- `parentNode` 的值为 null

- `ownerDocument` 的值为 null

- 其子节点可能是一个 DocumentType、Element、ProcessingInstruction 或 Comment

Document 类型可以表示 HTML 页面或者其他基于 XML 的文档。其最常见的应用就是作为 HTMLDocument 实例的 document 对象。

1. 文档的子节点

    以如下的 HTML 作为例子：

    ```html
    <html>
      <body>
      </body>
    </html>
    ```

    如果要取得对 `<html>` 的引用，可以采取下列的方式：

    ```js
    var html1 = document.documentElement; // 取得 <html> 的引用
    var html2 = document.childNodes();    // 取得 <html> 的引用
    var html3 = document.firstChild;      // 取得 <html> 的引用
    ```

    如果要取得对 `<body>` 的引用，可以采取下列的方式：

    ```js
    var body = document.body; // 取得 <body> 的引用
    ```

    我们还可以通过 `document.doctype` 来取得对 `<!DOCTYPE>` 的引用。

2. 文档信息

    document 对象中还有一些属性和网页表现有关。比如 `title` 属性，我们可以通过设置这个属性的值从而修改网页的标题（标签页上的标题）：

    ```js
    document.title = 'New page title';
    ```

    document 对象中还有一些与网页请求有关的属性：`URL`、`domain` 和 `referrer`。

    `URL` 属性保存着当前页面的完整 URL，`domain` 属性保存着当前页面的域名，而 `referrer` 属性保存着链接到当前页面的 URL。

    ```js
    // 例如，当前页面为 https://nodejs.org/api/modules.html，由 https://nodejs.org/api/ 链接而来
    var url = document.url;           // https://nodejs.org/api/modules.html
    var domain = document.domain;     // nodejs.org
    var referrer = document.referrer; // https://nodejs.org/api/
    ```

3. 查找元素

    Document 类型提供了 2 个方法：`getElementById()` 和 `getElementsByTagName()`。HTMLDocument 类型提供了 1 个方法：`getElementsByName()`。

    - `getElementById()`

        该方法接收一个参数：要取得的元素的 ID，之后返回该元素。

        ```html
        <div id="mydiv">Hello World!</div>
        ```

        使用下列代码获取上述的 `<div>` 元素：

        ```js
        var div = document.getElementById('mydiv');
        ```

    - `getElementsByTagName()`

        该方法接收一个参数：即要取得元素的标签名，之后返回多个元素的 NodeList。在 HTML 文档中，该方法会返回一个 HTMLCollection 对象。这个对象类似于 NodeList。

        下列代码取得页面中的所有 `<img>` 元素，返回一个 HTMLCollection 对象。

        ```js
        var images = document.getElementsByTagName('img');
        ```

        访问 HTMLCollection 对象：

        ```js
        images.length;      // img 元素的数量
        images[0].src;      // 第一个 img 元素的 src 属性
        images.item(0).src; // 第一个 img 元素的 src 属性
        ```

        HTMLCollection 还有一个 `namedItem()` 方法，用于取得集合中特定的项。

        ```html
        <img src="myimage.jpg" name="myimage">
        ```

        ```js
        var myImage = images.namedItem('myimage'); // 获取指定了 name 属性的 img 元素
        ```

        获取整个页面的所有元素：

        ```js中
        var allElements = document.getElementsByTagName('*'); // 返回页面中所有的元素
        ```

    - `getElementsByName()`

        该方法接收一个参数：即要取得元素的 `name` 属性值，之后返回与该属性值相同的所有元素。

        ```js
        // 获取所有 name 属性值为 ok 的元素
        var buttons = document.getElementsByName('ok');
        ```

4. 特殊集合

    document 对象还有一些特殊的集合。这些集合都是 HTMLCollection 对象。

    - `document.anchors`：包含文档中所有带有 `name` 属性的 `<a>` 元素

    - `document.forms`：包含文档中所有的 `<form>` 元素

    - `document.images`：包含文档中所有的 `<img>` 元素

    - `document.links`：包含文档中所有带有 `href` 属性的 `<a>` 元素

5. 检测浏览器对 DOM 的完成度

    使用 `document.implementation` 属性可以检测浏览器对 DOM 的完成度。DOM1 级只为 `document.implementation` 提供了一个方法，即 `hasFeature()`。这个方法接收 2 个参数，第一个参数是需要检测的 DOM 功能的名称，第二个参数是相应的版本号。

    ```js
    console.log(document.implementation.hasFeature('XML', '1.0')); // true
    ```

    下表提供了更多的 DOM 功能及其版本号：

    | 功能            | 版本号         | 说明                                             |
    | -------------- | ------------- | ------------------------------------------------ |
    | Core           | 1.0, 2.0, 3.0 | 基本的 DOM，用于描述表现文档的节点树                  |
    | XML            | 1.0, 2.0, 3.0 | Core 的 XML 扩展，添加了对 CDATA、处理指令及实体的支持 |
    | HTML           | 1.0, 2.0      | XML 的 HTML 扩展，添加了对 HTML 特有元素及实体的支持   |
    | Views          | 2.0           | 基于某些样式完成文档的格式化                         |
    | StyleSheets    | 2.0           | 将样式表关联到文档                                  |
    | CSS            | 2.0           | 对层叠样式表 1 级的支持                             |
    | CSS2           | 2.0           | 对层叠样式表 2 级的支持                             |
    | Events         | 2.0, 3.0      | 常规的 DOM 事件                                   |
    | UIEvents       | 2.0, 3.0      | 用户界面事件                                       |
    | MouseEvents    | 2.0, 3.0      | 由鼠标引发的事件                                   |
    | MutationEvents | 2.0, 3.0      | DOM 树变化时引发的事件                              |
    | HTMLEvents     | 2.0           | HTML4.01事件                                     |
    | Range          | 2.0           | 用于操作 DOM 树中某个范围的对象和方法                 |
    | Traversal      | 2.0           | 遍历 DOM 树的方法                                  |
    | LS             | 3.0           | 文件与 DOM 树之间的同步加载和保存                     |
    | LS-Async       | 3.0           | 文件与 DOM 树之间的异步加载和保存                     |
    | Validation     | 3.0           | 在确保有效的前提下修改 DOM 树的方法                   |

6. 文档写入

    document 对象提供了 4 个函数用于将输入流写入到网页中：

    - `write()`：将参数中的文本作为输入流写入到网页中

    - `writeln()`：将参数中的文本作为输入流写入到网页中，并在末尾添加一个换行

    - `open()`：打开网页的输入流

    - `close()`：关闭网页的输入流

### Element 类型

Element 类型用于表现 XML 和 HTML 元素，提供了对元素标签名、子节点及属性的访问。ELement 节点具有以下特征：

- `nodeType` 的值为 1

- `nodeName` 的值为元素的标签名

- `nodeValue` 的值为 null

- `parentNode` 可能是 Document 或 Element

- 其子节点可能是 Element、Text、Comment、ProcessingInstruction、CDATASection 或 EntityReference

要访问元素的标签名可以使用 `nodeName` 属性，也可以使用 `tagName` 属性（这两个属性返回的值相同，但是返回的标签名都是大写的）。

```html
<div id="my-div">Some text</div>
```

```js
var div = document.getElementById('my-div');
console.log(div.nodeName); // DIV
console.log(div.tagName);  // DIV
```

由于这两个属性返回的标签名都是大写的，所以在比较时应该注意转换大小写。比如，可以使用 `div.tagName.toLowerCase()` 方法将结果转换成小写的形式。

1. HTML 元素

    所有的 HTML 元素都由 HTMLElement 类型表示，该类型继承自 Element 类型。HTMLELement 类型添加了一些属性，这些属性分别对应每个 HTML 元素中都存在的标准属性：

    - `id`：元素在文档中的唯一标识符

    - `title`：有关元素的附加说明

    - `lang`：元素内容的语言代码

    - `dir`：语言的方向

    - `className`：与元素的 `class` 属性对应（不直接用 class 的原因是，class 在 JavaScript 中是关键字）

    所有的 HTML 元素都是由 HTMLElement 或者其更具体的子类型来表示。下表列出了所有 HTML 元素以及与之关联的类型：

    | 元素 | 类型 |
    | ---------- | ----------------------- |
    | A          | HTMLAnchorElement       |
    | ABBR       | HTMLElement             |
    | ACRONYM    | HTMLElement             |
    | ADDRESS    | HTMLElement             |
    | AREA       | HTMLAreaElement         |
    | B          | HTMLElement             |
    | BASE       | HTMLBaseElement         |
    | BDO        | HTMLElement             |
    | BIG        | HTMLElement             |
    | BLOCKQUOTE | HTMLQuoteElement        |
    | BODY       | HTMLBodyElement         |
    | BR         | HTMLBRElement           |
    | BUTTON     | HTMLButtonElement       |
    | Caption    | HTMLTableCaptionElement |
    | CITE       | HTMLElement             |
    | CODE       | HTMLElement             |
    | COL        | HTMLTableColElement     |
    | COLGROUP   | HTMLTableColElement     |
    | DD         | HTMLElement             |
    | DEL        | HTMLModElement          |
    | DFN        | HTMLElement             |
    | DIV        | HTMLDivElement          |
    | DL         | HTMLDListElement        |
    | DT         | HTMLElement             |
    | EM         | HTMLElement             |
    | FIELDSET   | HTMLFieldSetElement     |
    | FORM       | HTMLFormElement         |
    | FRAME      | HTMLFrameElement        |
    | FRAMESET   | HTMLFrameSetElement     |
    | H1         | HTMLHeadingElement      |
    | H2         | HTMLHeadingElement      |
    | H3         | HTMLHeadingElement      |
    | H4         | HTMLHeadingElement      |
    | H5         | HTMLHeadingElement      |
    | H6         | HTMLHeadingElement      |
    | HEAD       | HTMLHeadElement         |
    | HR         | HTMLHRElement           |
    | HTML       | HTMLHtmlElement         |
    | I          | HTMLElement             |
    | IFRAME     | HTMLFrameElement        |
    | IMG        | HTMLImageElement        |
    | INPUT      | HTMLInputElement        |
    | INS        | HTMLModElement          |
    | KBD        | HTMLElement             |
    | LABEL      | HTMLLabelElement        |
    | LEGEND     | HTMLLegendElement       |
    | LI         | HTMLLIElement           |
    | LINK       | HTMLLinkElement         |
    | MAP        | HTMLMapElement          |
    | META       | HTMLMetaElement         |
    | NOFRAMES   | HTMLElement             |
    | NOSCRIPT   | HTMLElement             |
    | OBJECT     | HTMLObjectElement       |
    | OL         | HTMLOListElement        |
    | OPTGROUP   | HTMLOptGroupElement     |
    | OPTION     | HTMLOptionElement       |
    | P          | HTMLParagraphElement    |
    | PARAM      | HTMLParamElement        |
    | PRE        | HTMLPreElement          |
    | Q          | HTMLQuoteElement        |
    | SAMP       | HTMLElement             |
    | SCRIPT     | HTMLScriptElement       |
    | SELECT     | HTMLSelectElement       |
    | SMALL      | HTMLElement             |
    | SPAN       | HTMLElement             |
    | STRONG     | HTMLElement             |
    | STYLE      | HTMLStyleElement        |
    | SUB        | HTMLElement             |
    | SUP        | HTMLElement             |
    | TABLE      | HTMLTableElement        |
    | TBODY      | HTMLTableSectionElement |
    | TD         | HTMLTableCellElement    |
    | TEXTAREA   | HTMLTextAreaElement     |
    | TFOOT      | HTMLTableSectionElement |
    | TH         | HTMLTableCellElement    |
    | THEAD      | HTMLTableSectionElement |
    | TITLE      | HTMLTitleElement        |
    | TR         | HTMLTableRowElement     |
    | TT         | HTMLElement             |
    | UL         | HTMLUListElement        |
    | VAR        | HTMLElement             |

2. 操作 HTML 元素的属性

    每个 HTML 元素都有一个或多个属性，这些属性的用途是给出相应元素或其内容的附加信息。操作 HTML 元素的属性的方法主要有 3 个：`getAttribute()`、`setAttribute()` 和 `removeAttribute()`。

    - `getAttribute()`：获取 HTML 元素的属性

        ```html
        <div id="my-div" class="myDiv"></div>
        ```

        ```js
        var div = document.getElementById('my-div');
        var id = div.getAttribute('id');
        var className = div.getAttribute('class');
        console.log(id);        // my-div
        console.log(className); // myDiv
        ```

    - `setAttribute()`：设置 HTML 元素的属性

        ```js
        div.setAttribute('class', 'my-div'); // 设置 div 元素的 class 属性值为 my-div
        ```

    - `removeAttribute()`：移除 HTML 元素的属性

        ```js
        div.removeAttribute('class');
        console.log(div.getAttribute('class')); // null
        ```

3. 创建 HTML 元素

    使用 `document.createElement()` 方法可以创建新的 HTMl 元素。一般来说，创建新的 HTML 元素分为 2 个步骤：

    1. 新建一个 HTML 元素（此时，该元素不在文档树中）：`var div = document.createElement('div');`

    2. 将新建的元素添加进文档树中：使用 `appendChild()`、`insertBefore()` 或是 `replaceChild()` 方法

### Text 类型

文本节点由 Text 类型表示，包含的是可以照字面解释的纯文本内容。特征如下：

- `nodeType`：值为 3

- `nodeName`：为 #text

- `nodeValue`：即文本值

- `parentNode`：是一个 Element

- 没有子节点

可以使用下列的方法操作节点中的文本：

- `appendData(text)`：将 text 添加到节点的末尾

- `deleteData(offset, count)`：从 offset 位置开始删除 count 个字符

- `insertData(offset, text)`：从 offset 位置开始插入 count 个字符

- `replaceData(offset, count, text)`：用 text 替换从 offset 位置开始到 offset + count 结束的字符

- `splitText(offset)`：从 offset 位置开始将当前文本节点分成 2 个文本节点

- `substringData(offset, count)`：提取从 offset 位置开始到 offset + count 结束的字符串

可以通过 `nodeValue` 和 `data` 属性访问文本节点的字符串。同时，文本节点还有一个 `length` 属性，用于保存字符串的长度。也可以访问 `nodeValue.length` 和 `data.length`，值都相等。

1. 创建文本节点

    使用 `document.createTextNode()` 方法来创建文本节点，类似于创建 HTML 元素，创建文本节点一般也需要 2 个步骤：

    1. 新建一个文本节点（此时，该文本节点不在文档树中）：`var textNode = document.createTextNode('Hello World!');`

    2. 将新建文本节点添加进文档树中：使用 `appendChild()`、`insertBefore()` 或是 `replaceChild()` 方法

2. 规范化文本节点

    如果 DOM 中如果存在同胞文本节点很容易导致混乱。我们可以使用 Node 类型提供的 `normalize()` 方法，将某个元素下的多个文本节点合并成一个。

    ```js
    // 假设 element 元素下有多个文本节点
    var element = document.getElementById('my-div');
    element.normalize();
    ```

3. 分割文本节点

    Text 类型提供了一个与 `normalize()` 方法功能相反的方法：`splitText()` 方法，用于分割文本节点。

    ```js
    var element = document.createElement('div');
    element.className = 'message';

    var textNode = document.createTextNode('Hello World!');
    element.appendChild(textNode);

    document.body.appendChild(element);

    var newTextNode = element.firstChild.splitText(5);
    console.log(element.firstChild.nodeValue); // 'Hello'
    console.log(newNodeText.nodeValue);        // ' World!'
    console.log(element.childNodes.length);    // 2
    ```

### Comment 类型

注释在 DOM 中是通过 Comment 类型来表示的，其具有以下特征：

- `nodeType`：值为 8

- `nodeName`：值为 #comment

- `parentNode`：可能是 Document 或 Element

- 没有子节点

由于 Comment 类型和 Text 类型继承自相同的基类，因此它拥有除 `splitText()` 之外的所有字符串操作方法。

如果要创建一个 Comment 类型的注释节点，可以使用 `document.createComment()` 方法。

## 操作表格

`<table>` 元素由于结构复杂，如果使用核心 DOM 方法去创建 `<table>` 元素，往往需要编写大量的代码。例如，创建下列的表格：

```html
<table>
  <tbody>
    <tr>
      <td>Cell 1, 1</td>
      <td>Cell 1, 2</td>
    </tr>
    <tr>
      <td>Cell 2, 1</td>
      <td>Cell 2, 2</td>
    </tr>
  </tbody>
</table>
```

使用 DOM 核心方法创建表格：

[源代码及注释](../code/table_c.js)

上述的代码不仅长，而且还很难看懂。为了方便构造表格，HTML DOM 还为 `<table>`、`<tbody>` 和 `<tr>` 元素添加了属性和方法。

为 `<table>` 元素添加的属性和方法如下：

- `caption`：保存着对 `<caption>` 元素的指针

- `tBodies`：是一个 `<tbody>` 元素的 HTMLCollection

- `tFoot`：保存着对 `<tfoot>` 元素的指针

- `tHead`：保存着对 `<thead>` 元素的指针

- `rows`：是表格中所有行的 HTMLCollection

- `createTHead()`：创建 `<thead>` 元素，并将其放入表格中，返回引用

- `createTFoot()`：创建 `<tfoot>` 元素，并将其放入表格中，返回引用

- `createCaption()`：创建 `<caption>` 元素，并将其放入表格中，返回引用

- `deleteTHead()`：删除 `<thead>` 元素

- `deleteTFoot()`：删除 `<tfoot>` 元素

- `deleteCaption()`：删除 `<caption>` 元素

- `deleteRow(pos)`：删除指定位置的行

- `insertRow(pos)`：向 `rows` 集合中的指定位置插入一行

为 `<tbody>` 元素添加的属性和方法如下：

- `rows`：保存着 `<tbody>` 元素中行的 HTMLCollection

- `deleteRow(pos)`：删除指定位置的行

- `insertRow(pos)`：向 `rows` 集合中的指定位置插入一行，返回对新插入的行的引用

为 `<tr>` 元素添加的属性和方法如下：

- `cells`：保存着 `<tr>` 元素中单元格的 HTMLCollection

- `deleteCell(pos)`：删除指定位置的单元格

- `insertCell(pos)`：向 `cells` 集合中的指定位置插入一个单元格，返回对新插入的单元格的引用

使用专属属性和方法创建表格：

[源代码及注释](../code/table_s.js)