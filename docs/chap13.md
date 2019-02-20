# 事件

JavaScript 与 HTML 之间的交互是通过事件实现的。事件，就是文档或浏览器窗口中发生的一些特定的交互瞬间。开发人员可以使用监听器（处理程序）来预订事件，如此一来，在事件发生时浏览器将执行相应的代码。

## 事件流

事件流描述的是从页面中接收事件的顺序。但是有意思的是，IE 和 Netscape 开发团队居然提出了差不多是完全相反的概念。IE 的事件流是事件冒泡流，而 Netscape Communicator 的事件流是事件捕获流。

### 事件冒泡流

IE 的事件流叫做事件冒泡流（event bubbling），即事件开始时由最具体的元素（文档中嵌套层次最深的哪个节点）接收，然后逐级向上传播到较为不具体的节点（文档）。例如：

```html
<!DOCTYPE html>
<html>
  <head>
    <title>IE Event Bubbling</title>
  </head>
  <body>
    <div id="my-div">Click Me!</div>
  </body>
</html>
```

如果用户单击了页面中的 `<div>` 元素，那么这个 click 事件会按照如下的顺序传播：

```
1. div
2. body
3. html
4. document
```