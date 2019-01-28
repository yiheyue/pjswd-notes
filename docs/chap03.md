# 基本概念

## 语法

ECMAScript 借鉴了许多 C 和其他类 C 语言的语法。

### 区分大小写

ECMAScript 中的一切都区分大小写。

例如：

- 变量 `test` 和 `Test` 表示两个不同的变量

- `typeof` 不能用作函数名，因为 `typeof` 是一个关键字

### 标识符

标识符，通俗地讲，就是一切由程序员起名的编程元素，包含变量名、函数名、属性名、参数名等。

标识符命名规则如下：

- 第一个字符必须是字母、下划线（_）或美元符号（$）

- 第二个及其他字符可以是字母、下划线、美元符号或数字

> 不能把关键字、保留字、`true`、`false` 和 `null` 用作标识符。

### 注释

ECMAScript 注释包括单行注释和块级注释两种。

```js
// 单行注释

/* 块级注释 - 类型 1 */

/*
 * 块级注释 - 类型 2
 */
```

### 严格模式

严格模式（Strict Mode）在 ES5 中引入，用以处理 ES3 中的一些不确定的行为。开启方式是在代码顶部添加一行 `'use strict';`。

例如：

```js
'use strict';

// 剩下的代码
```

### 语句

ECMAScript 中的语句以一个分号（;）结尾，如果省略分号，则由解析器决定语句的结尾并为其添加分号。

```js
var sum = a + b   // 有效的语句，解析器会自动在结尾加上分号
var diff = a - b; // 有效的语句

// 语句块
if (done) {
  done = false;
  alert(done);
}
```

## 关键字和保留字

关键字是语言保留的，用于执行特定操作的一组字符序列。关键字不可用作标识符。

关键字有以下这些（共 26 个）：

```
break           do              instanceof      typeof
case            else            new             var
catch           finally         return          void
continue        for             switch          while
debugger        function        this            with
default         if              throw
delete          in              try
```

> `debugger` 是 ES5 中新增的关键字。

保留字是一组将来可能用作关键字的一组字符序列。保留字不可用作标识符。

保留字有以下这些（共 31 个）：

```
abstract        enum            int             short
boolean         export          interface       static
byte            extends         long            super
char            final           native          synchronized
class           float           package         throws
const           goto            private         transient
debugger        implements      protected       volatile
double          import          public
```

## 变量

ECMAScript 的变量是松散类型的，即可以保存任何类型的数据。

- 定义一个变量

    ```js
    var number;  // number 的值为 undefined
    var message; // message 的值为 undefined
    ```

- 定义一个变量的同时对变量初始化

    ```js
    var number = 23;
    var message = 'Hello, JavaScript!';
    ```

- 给变量赋值

    ```js
    number = 49;
    number = 'forty-nine'; // 可行，但不推荐
    ```

- 一条语句定义多个变量，用逗号（,）将每个变量分隔开

    ```js
    var number = 12,
        message = 'hi',
        done = false;
    ```

> 在严格模式下，不能定义名为 `eval` 或 `arguments` 的变量。

## 数据类型

ECMAScript 有 5 种简单数据类型（基本数据类型）：Undefined、Null、Boolean、Number 和 String，以及一种复杂数据类型：Object。

### `typeof` 操作符

对一个值使用 `typeof` 操作符可能返回下列某个字符串：

- 'undefined' - 表明这个值未定义

- 'boolean' - 表明这个值是布尔值

- 'string' - 表明这个值是字符串

- 'number' - 表明这个值是数值

- 'object' - 表明这个值是对象或 `null`

- 'function' - 表明这个值是函数

### Undefined 类型

Undefined 类型只有一个值，即 `undefined`。

未被初始化的变量的值就是 `undefined`，例如：

```js
var message;
console.log(message == undefined); // true
```

未声明的变量的值也是 `undefined`，例如：

```js
var message;

console.log(typeof message); // undefined
console.log(typeof age);     // undefined
```

### Null 类型

Null 类型只有一个值，即 `null`。

从逻辑角度看，`null` 值表示一个空对象指针（所以用 `typeof` 检测 `null` 值时返回 'object' 字符串），例如：

```js
var car = null;
console.log(typeof car); // null
```

### Boolean 类型

Boolean 类型只有两个字面值 `true` 和 `false`。

ECMAScript 的所有类型的值都可以转换成布尔值。要将一个值转换成布尔值，可以使用 `Boolean()` 转型函数，例如：

```js
var message = 'hi';
var msgBoolean = Boolean(message);
```

转换规则

| 数据类型   | 转换成 `true` 的值 | 转换成 `false` 的值 |
| --------- | ---------------- | ----------------- |
| Boolean   | true             | false             |
| String    | 非空字符串         | ''（空字符串）      |
| Number    | 非零值            | 0 和 `NaN`        |
| Object    | 非空对象           | `null`           |
| Undefined | n/a              | `undefined`       |

> 流控制语句（如 `if` 语句）将自动执行相应的 Boolean 转换。

### Number 类型

ECMAScript 使用 IEEE754 格式来表示整数和浮点数值。