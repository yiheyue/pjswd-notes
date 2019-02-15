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