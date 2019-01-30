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

ECMAScript 保存浮点数需要的内存空间是整数的两倍，其中浮点数的最高精度是 17 位小数。

- 整数和浮点数

    ```js
    var age = 18;           // 整数
    
    var price = 45.89;      // 浮点数

    var lightSpeed = 2.9e8; // 290,000,000
    ```

- 数值范围

    ```js
    console.log(Number.MIN_VALUE);         // 5e-324

    console.log(Number.MAX_VALUE);         // 1.7976931348623157e+308

    console.log(Number.MIN_VALUE / 2);     // 0

    console.log(Number.MAX_VALUE * 2);     // Infinity

    console.log(-Number.MAX_VALUE * 2);    // -Infinity

    console.log(Number.NEGATIVE_INFINITY); // -Infinity

    console.log(Number.POSITIVE_INFINITY); // Infinity

    /* 判断一个数是否为无穷，使用 isFinite() 函数 */

    console.log(isFinite(239));                  // true

    console.log(isFinite(Number.MAX_VALUE * 2)); // false
    ```

- `NaN` (Not a Number)

    ```js
    /* 任何涉及 NaN 的运算，返回值都是 NaN */

    console.log(NaN + 1);    // NaN

    console.log('blue' % 2); // NaN

    /* NaN 与任何值都不相等 */

    console.log(NaN == 3); // false

    console.log(NaN == NaN); // false

    /* 判断是否为 NaN，使用 isNaN() 函数 */

    console.log(isNaN(NaN)); // true

    console.log(isNaN(23));  // false
    ```

- 数值转换

    ```js
    /* 有三个函数可以将非数值转换成数值：Number()、parseInt()、parseFloat()。转型函数 Number() 可以用于任何数据类型，parseInt() 和 parseFloat() 专门用于把字符串转换成数值 */

    /*
     * Number() 转换规则：
     * 1. 如果是 Boolean 值，true 和 false 分别被转换成 1 和 0
     * 2. 如果是 Number 值，只是简单的传入和返回
     * 3. 如果是 Null 值，返回 0
     * 4. 如果是 Undefined 值，返回 NaN
     * 5. 如果是 String 值，使用以下规则：
     *    a. 如果字符串只包含数字，则将其转换成十进制数值
     *    b. 如果字符串中包含有效的浮点格式，则将其转换成浮点数
     *    c. 如果字符串中包含有效的十六进制数，则将其转换成相同大小的十进制数值
     *    d. 如果字符串为空，则将其转换成 0
     *    e. 如果以上情况均不满足，则将其转换成 NaN
     * 6. 如果是 Object 值，则调用 valueOf() 方法，然后使用上述的方法转换。如果为 NaN，则继续调用对象的 toString() 方法，之后再使用上述的方法。
     */
    console.log(Number('hello'));   // NaN
    console.log(Number(''));        // 0
    console.log(Number('123'));     // 123
    console.log(Number(true));      // 1
    console.log(Number(false));     // 0
    console.log(Number(null));      // 0
    console.log(Number(undefined)); // NaN

    /*
     * parseInt() 转换规则：看是否符合数值模式
     */
    console.log(parseInt(null));      // NaN
    console.log(parseInt(undefined)); // NaN
    console.log(parseInt('hi123'));   // NaN
    console.log(parseInt('123hi'));   // 123
    console.log(parseInt('123.123')); // 123
    console.log(parseInt(''));        // NaN
    // parseInt() 可以传入第二个参数，用于指定转换进制
    console.log(parseInt('10', 2));  // 2
    console.log(parseInt('10', 8));  // 8
    console.log(parseInt('10', 10)); // 10
    console.log(parseInt('10', 16)); // 16

    /*
     * parseFloat() 转换规则：
     * 1. parseFloat() 只解析十进制
     * 2. parseFloat() 只解析第一个小数点
     */
    console.log(parseFloat('12e3'));     // 12,000
    console.log(parseFloat('0x12'));     // 0
    console.log(parseFloat('16.26'));    // 16.26
    console.log(parseFloat('16.26abc')); // 16.26
    console.log(parseFloat('16.26.13')); // 16.26
    console.log(parseFloat('hi'));       // NaN
    ```

### String 类型

字符串由一个或多个16位的 Unicode 字符组成的字符序列。

- 字符串字面值

    ```js
    // 单引号和双引号都可以使用
    var firstname = 'John';
    var lastname = 'Snow';

    var brand = "BMW";
    ```

- 转义序列

    | 字面值    | 含义             |
    | -------- | --------------- |
    | `\n`     | 换行             |
    | `\t`     | 制表             |
    | `\r`     | 回车             |
    | `\\`     | 斜杠             |
    | `\'`     | 单引号           |
    | `\"`     | 双引号           |
    | `\xnn`   | 一个 ASCII 字符   |
    | `\unnnn` | 一个 Unicode 字符 |

- 字符串长度

    ```js
    // 转义序列只算一个字符
    var text = 'hello\n';
    console.log(text.length); // 6
    ```

- 字符串转换

    ```js
    /* 有两种方式可以将值转换成字符串：String() 和 toString() */

    /*
     * toString()
     * 1. 几乎所有对象都有 toString() 方法，null 和 undefined 除外
     * 2. 一般情况下，不需要给 toString() 传递参数，如果需要指定转换进制，可以给它传递一个参数
     */
    var done = true;
    var age = 10;
    console.log(done.toString());  // true
    console.log(age.toString());   // 10
    console.log(age.toString(2));  // 1010
    console.log(age.toString(8));  // 12
    console.log(age.toString(10)); // 10
    console.log(age.toString(16)); // a

    /*
     * String() 可以适用于所有值，包括 null 和 undefined
     */
    console.log(String(null));      // null
    console.log(String(undefined)); // undefined
    console.log(String(12));        // 12
    console.log(String(true));      // true
    ```

### Object 类型

ECMAScript 中的对象是一组数据和功能的集合。

```js
// 实例化一个 Object 类型的对象，使用 new 关键字
var obj = new Object();
```

Object 是所有对象的基础，因此所有的对象都拥有下列基本属性和方法：

- `constructor()`：保存着用于创建当前对象的函数

- `hasOwnProperty(propertyName)`：用于检查给定的属性在当前对象实例中是否存在

- `isPrototypeOf(object)`：用于检查传入的对象是否是当前对象的原型

- `propertyIsEnumerable(propertyName)`：用于检查给定的属性是否能够使用 `for-in` 语句来枚举

- `toLocaleString()`：返回对象的字符串表示，该字符串与执行环境的地区对应

- `toString()`：返回对象的字符串表示

- `valueOf()`：返回的对象的字符串、数值或布尔值表示

## 操作符

### 一元操作符

- 递增递减操作符

    ```js
    // 前置和后置的区别
    var num1 = 10;
    console.log(num1-- + 10); // 20

    var num2 = 10;
    console.log(--num2 + 10); // 19
    ```

- 一元加减操作符

    ```js
    // 一元加减和数学上的定义一致，主要用于将正数变成负数
    var num = 100;
    console.log(-num); // -100
    ```

### 位操作符

ECMAScript 中的值都是以 IEEE754 的 64 位格式存储的，但是位操作符不直接操作 64 位的值，而是先将 64 位的值转换成 32 位，然后执行操作，操作完成之后在将结果转换成 64 位。

- 按位非（NOT）

    ```js
    var result = 25;
    result = ~result;
    console.log(result); // -26
    ```

- 按位与（AND）

    ```js
    var result = 25 & 3;
    console.log(result); // 1
    ```

- 按位或（OR）

    ```js
    var result = 25 | 3;
    console.log(result); // 27
    ```

- 按位异或（XOR）

    ```js
    var result = 25 ^ 3;
    console.log(result); // 26
    ```

- 左移

    ```js
    var value = 2;
    console.log(value << 5); // 64
    ```

- 有符号右移

    ```js
    var value = 64;
    console.log(value >> 5); // 2
    ```

- 无符号右移

    ```js
    var value = 64;
    console.log(value >>> 5); // 2
    ```

### 布尔操作符

- 逻辑非

    ```js
    console.log(!123);  // false
    console.log(!true); // false
    ```

- 逻辑与

    ```js
    var result = true && false;
    console.log(result); // false
    ```

- 逻辑或

    ```js
    var result = false || true;
    console.log(result); // true

    // 逻辑或还可以用来给变量赋值
    var obj = preferredObj || backupObj;
    ```

### 乘性操作符

- 乘法

    ```js
    var value = 10 * 10; // 100
    ```

- 除法

    ```js
    var value = 20 / 2; // 10
    ```

- 取模

    ```js
    var value = 20 % 3; // 2
    ```

### 加性操作符

- 加法

    ```js
    var value = 12 + 1;          // 13

    var message = 'hello' + 123; // hello123
    ```

- 减法

    ```js
    var value = 12 - 1; // 11
    ```

### 关系操作符

- 大于（`>`）、小于（`<`）、不大于（`<=`）和不小于（`>=`）

### 相等操作符

- 相等（`==`）和不相等（`!=`）

- 全等（`===`）和不全等（`!==`）

### 条件操作符

```js
var value = boolean_expr ? true_value : false_value;
```

### 赋值操作符

- 简单赋值（`=`）和复合赋值（`+=`、`-=`...）

### 逗号操作符

```js
// 逗号操作符常用于声明多个变量
var num1, num2, num3;

// 用于赋值时，表达式的值等于最后一项
var num = (4, 12, -4, 2, 1); // num 等于 1
```