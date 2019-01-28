# 在 HTML 中使用 JavaScript

## <script> 元素

`<script>` 元素由 Netscape 创造并在 Netscape Navigator 2 中首次实现。`<script>` 元素的详细属性见[MDN <script>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)。

使用 `<script>` 元素的方式有两种：

1. 直接在页面中嵌入 JavaScript 代码

    ```html
    <script>
      function sayHi() {
        alert('Hi');
      }
    </script>
    ```

2. 包含外部 JavaScript 文件

    ```html
    <script src="example.js"></script>
    ```
    
    > 在当前的使用场景中，`<script>` 和 `</script>` 之间的代码将被忽略。
    
只要不存在 `defer` 和 `async` 属性，浏览器会按照 `<script>` 元素在页面出现的先后顺序对它们依次进行解析。

## <noscript> 元素

`<noscript>` 元素可以包含能够出现在 `<body>` 中的任何 HTML 元素（`<script>` 除外）。

在下列情况下，`<noscript>` 元素中的内容才会显示出来：

1. 浏览器不支持脚本

2. 浏览器支持脚本，但是脚本被禁用

例如：

```html
<html>
  <head>
    <title>Page title</title>
  </head>
  <body>
    <noscript>
      <p>JavaScript has been banned in this page.</p>
    </noscript>
  </body>
</html>
```