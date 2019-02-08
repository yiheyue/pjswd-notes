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

## 递归

递归函数，简单来说，就是自己调用自己。

```js
// 经典的递归阶乘函数
function factorial(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}
```

同样地，可以使用 `arguments.callee` 来实现上述的功能。

```js
// 该方式在严格模式下失效
function factorial(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * arguments.callee(num - 1);
  }
}
```

但是上述的 `arguemnts.callee` 方式在严格模式下无效。不过，可以使用命名函数表达式来达成相同的结果。

```js
// 该方式在严格和非严格模式下均有效
var factorial = (function f() {
  if (num <= 1) {
    return 1;
  } else {
    return num * f(num - 1);
  }
});
```

## 闭包

**闭包**（Closure）是指 有权访问另一函数作用域中的变量 的函数。

```js
function outside() {
  var foo;

  function inside() {
    return foo;
  }
}
```

## 模仿块级作用域

JavaScript 中没有块级作用域的概念。不过开发人员可以用匿名函数来模仿块级作用域。

用作块级作用域的匿名函数的语法：

```js
(function() {
  // 这里是块级作用域
})();
```

以上代码定义并立即调用了一个匿名函数。将函数声明包含在一对圆括号中，表示它实际上是一个函数表达式。而紧随其后的另一对圆括号会立即调用这个函数。

这种技术经常用于全局作用域的函数外部，从而限制向全局作用域中添加过多的变量和函数。过多的全局变量和函数很容易导致命名冲突。

```js
(function() {

  var now = new Date();
  if (now.getMonth() === 0 && now.getDate() === 1) {
    console.log('Happy new year!');
  }
  
})();
```