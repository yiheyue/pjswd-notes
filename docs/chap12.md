# DOM2 和 DOM3

DOM1 级主要定义的是 HTML 和 XML 文档的底层结构。DOM2 和 DOM3 级则在之前的基础上引入了更多的交互能力，为此，DOM2 和 DOM3 新增了很多模块。

## 样式

在 HTML 中定义样式的方式有 3 种：

1. 通过 `<link>` 元素链接外部样式表文件

2. 使用 `<style>` 元素定义嵌入式样式

3. 使用元素的 `style` 属性定义样式

DOM2 Style 模块针对以上 3 种方式提供了一些 API。

### 访问元素的样式

任何支持 `style` 属性的 HTMl 元素在 JavaScript 中都有一个对应的 `style` 对象，这个对象是 CSSStyleDeclaration 的实例。例子如下：

```js
var div = document.getElementById('my-div');

div.style.backgroundColor = 'red';
div.style.width = '20px';
div.style.height = '20px';
```

1. style 对象的属性和方法

    DOM2 Style 模块还为 style 对象定义了一些属性和方法。

    - `cssText`：用于访问 HTMl 元素的 style 属性的 CSS 代码

    - `length`：表示给定 HTML 元素的 CSS 属性的数量

    - `parentRule`：表示 CSS 信息的 CSSRule 对象

    - `getPropertyCSSValue(propertyName)`：返回 HTML 元素的指定属性值的 CSSValue 对象

    - `getPropertyPriority(propertyName)`：如果给定属性使用了 `!important` 设置，则返回 `important`；否则返回空字符串

    - `getPropertyValue(propertyName)`：返回给定属性的字符串值

    - `item(index)`：返回给定位置的 CSS 属性的名称

    - `removeProperty(propertyName)`：从样式中删除给定属性

    - `setProperty(propertyName, value, priority)`：设置给定属性的值