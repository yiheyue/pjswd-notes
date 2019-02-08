# 函数表达式

在 ECMAScript 中，定义函数的方式有两种：一种是函数声明，另一种就是函数表达式。

函数声明的语法：

```js
function funcName(param1, param2) {
  // statements
}
```

函数声明有一个特征：**函数声明提升**（function declaration hoisting），即执行代码前会先读取函数声明。

函数表达式的语法：

```js
var funcName = function(param1, param2) {
  // statements
};
```

上述方式创建的函数称为**匿名函数**（anonymous function），因为 `function` 关键字后面没有标识符。