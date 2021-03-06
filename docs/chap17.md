# 错误处理与调试

ECMAScript 第 3 版引入了 `try-catch` 和 `throw` 语句以及一些错误类型，意在让开发人员能够适当地处理错误。

## 浏览器报告的错误

对于大多数现代浏览器来说，当发生错误时，一般不会在页面显示出来，而是在后台显示（毕竟只有开发人员关心错误发生的原因）。因此，我们可以通过打开浏览器的开发者工具来调试错误。对于大多数浏览器来说，打开开发者工具的快捷键是『F12』。

## 错误处理

良好的错误处理机制可以让用户及时得到提醒，知道到底发生了什么事，因而不会惊慌失措。

### `try-catch` 语句

`try-catch` 语句的基本使用方法如下：

```js
try {
  // 可能会导致错误的代码
} catch (error) {
  // 在错误发生时应该怎么处理
}
```

即将所有可能抛出错误的代码都放在 `try` 语句中，而把用于错误处理的代码放在 `catch` 语句中。如果 `try` 语句块中的任何代码发生了错误，就会立即退出代码执行过程，然后执行 `catch` 语句块。例如：

```js
try {
  window.someNonexistentFunction();
} catch (error) {
  console.log(error.message);
}
```

> 所有浏览器都支持 `error.message` 属性。
