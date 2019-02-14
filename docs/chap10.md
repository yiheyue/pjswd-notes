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
