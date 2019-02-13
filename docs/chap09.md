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
