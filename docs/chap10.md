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

- `Node.ELEMENT_NODE`

- `Node.ATTRIBUTE_NODE`

- `Node.TEXT_NODE`

- `Node.CDATA_SECTION_NODE`

- `Node.ENTITY_REFERENCE_NODE`

- `Node.ENTITY_NODE`

- `Node.PROCESSING_INSTRUCTION_NODE`

- `Node.COMMENT_NODE`

- `Node.DOCUMENT_NODE`

- `Node.DOCUMENT_TYPE_NODE`

- `Node.DOCUMENT_FRAGMENT_NODE`

- `Node.NOTATION_NODE`

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