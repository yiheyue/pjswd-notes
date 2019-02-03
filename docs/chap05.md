# 引用类型

引用类型的值（即一个对象）是引用类型的一个**实例**。

在 ECMAScript 中，引用类型是一种数据结构，用于将数据和功能组织到一起。

引用类型有时被称为**类**，但是这种称乎并不妥当。因为 ECMAScript 并不具备传统面向对象语言所支持的类和接口等基本结构。

引用类型有时候也被称为**对象定义**，因为它们描述的是一类对象所具有的属性和方法。

对象是某个引用类型的实例，可以使用 `new` 操作符后加一个**构造函数**来创建一个新对象。

构造函数本身就是一个函数，只不过该函数是出于创建新对象的目的而定义的。

```js
// 创建一个 Object 引用类型的实例 person
var person = new Object();
```

## Object 类型

- 创建 Object 类型的实例

    ```js
    // 1. 使用 new 操作符加 Object 构造函数
    var person = new Object();
    person.name = 'John';
    person.age = 18;

    // 2. 使用对象字面量
    var student = {
      name: 'Snow',
      age: 18
    };
    ```

- 访问对象的属性

    ```js
    var person = {
      name: 'John',
      age: 18
    };

    // 1. 使用点表示法
    console.log(person.name); // John

    // 2. 使用方括号表示法
    console.log(person['age']); // 18
    ```

## Array 类型

- 创建 Array 类型的实例

    ```js
    // 1. 使用 new 操作符加 Array 构造函数
    var colors = new Array();

    // 2. 使用数组字面量
    var scores = [98, 97, 99];
    ```

- 读取和访问数组的值

    ```js
    var colors = ['red', 'green', 'blue'];

    console.log(colors[0]); // red

    colors[1] = 'black';
    console.log(colors[1]); // black

    colors[2] = 'pink';
    console.log(colors[2]); // pink
    ```

- 数组的 `length` 属性

    ```js
    // 数组的 length 属性不是只读
    var colors = ['red', 'green', 'blue'];

    console.log(colors.length); // 3

    colors.length = 4;

    console.log(colors.length); // 4
    console.log(colors[3]);     // undefined
    ```

- 检测数组

    ```js
    var colors = ['red', 'green', 'blue'];

    // 1. 使用 instanceof
    if (colors instanceof Array) {
      console.log('colors is array');
    }

    // 2. 使用 ES5 新增的 Array.isArray() 方法
    if (Array.isArray(colors)) {
      console.log('colors is array');
    }
    ```

- 将数组转换成字符串

    ```js
    var colors = ['red', 'green', 'blue'];

    // 使用 toString() 方法
    console.log(colors.toString());  // red,green,blue

    // 使用 join() 方法自定义拼接字符串
    console.log(colors.join('-->')); // red-->green-->blue
    ```

- 数组的**栈方法**

    栈是一种 **LIFO**（Last In First Out）的数据结构。ECMAScript 提供了两个方法来模拟栈的行为。

    ```js
    var colors = ['red', 'green', 'blue'];

    // 1. push()：接收任意数量的参数，把它们逐个加入数组末尾，之后返回修改后的数组长度
    var length = colors.push('black', 'pink');
    console.log(length); // 5

    // 2. pop()：移除数组末尾的一项，减少数组的 length 值，之后返回被移除的项
    var lastItem = colors.pop();
    console.log(lastItem);   // pink
    ```

- 数组的**队列方法**

    队列是一种 **FIFO**（First In First Out）的数据结构。ECMAScript 提供了两个方法来模拟队列行为。

    ```js
    var colors = ['red', 'green', 'blue'];

    // 1. shift()：移除数组的第一项，之后返回被移除的项
    var firstItem = colors.shift();
    console.log(firstItem); // red

    // 2. unshift()：在数组最前端添加任意项，之后返回修改后的数组长度
    var length = colors.unshift('black', 'pink');
    console.log(length);    // 4
    ```

- 数组的排序方法

    - `sort()`：排序数组

    - `reverse()`：反转数组的顺序

- 数组的操作方法

    - `concat()`：拼接数组

        ```js
        var colors1 = ['red', 'green'];

        // 1. 不传入参数，相当于复制一次，返回一个副本
        var colors2 = colors1.concat();
        console.log(colors2); // [ 'red', 'green' ]

        // 2. 传入参数，则将参数拼接在数组后面
        var colors3 = colors1.concat('blue', 'black', ['pink', 'white']);
        console.log(colors3); // [ 'red', 'green', 'blue', 'black', 'pink', 'white' ]
        ```

    - `slice()`：剪切数组

        ```js
        // Index:       0      1        2       3        4
        var colors1 = ['red', 'green', 'blue', 'black', 'white'];

        // 1. 传入一个参数，这个参数将作为剪切的起始位置
        var colors2 = colors1.slice(2);
        console.log(colors2); // [ 'blue', 'black', 'white' ]

        // 2. 传入两个参数，这两个参数将分别作为剪切的起始位置和终点位置（不包括终点位置的项）
        var colors3 = colors1.slice(1, 3);
        console.log(colors3); // [ 'green', 'blue' ]
        ```

    - `splice()`：多功能

        ```js
        var colors = ['red', 'green', 'blue'];

        // 1. 删除
        var removed = colors.splice(0, 2); // 第一个参数为起始位置，第二个参数为删除的项数
        console.log(colors);  // [ 'blue' ]
        console.log(removed); // [ 'red', 'green' ]

        // 2. 插入
        removed = colors.splice(1, 0, 'black'); // 第三个参数为插入的项
        console.log(colors);  // [ 'blue', 'black' ]
        console.log(removed); // []

        // 3. 替换
        removed = colors.splice(1, 1, 'white');
        console.log(colors);  // [ 'blue', 'white' ]
        console.log(removed); // [ 'black' ]
        ```

- 数组的位置方法

    - `indexOf()`：从前往后查找，找到返回位置，未找到返回 -1

        ```js
        // Index:   0   1    2     3   4   5  6
        var nums = [12, 134, -120, 29, 87, 0, -2];

        var index = nums.indexOf(-2); // 6
        console.log(index);
        
        index = nums.indexOf(-12);    // -1
        console.log(index);
        ```

    - `lastIndexOf()`：从后往前查找，找到返回位置，未找到返回 -1

        ```js
        // Index:   0   1    2     3   4   5  6
        var nums = [12, 134, -120, 29, 87, 0, -2];

        var index = nums.lastIndexOf(-2); // 6
        console.log(index);

        index = nums.lastIndexOf(100);    // -1
        console.log(index);
        ```

- 数组的迭代方法

    - `every()`：若数组的每一项都返回 true，则返回 true

        ```js
        var nums = [10, 20, 30, 40];

        var everyResult = nums.every(function(item, index, array) {
          var result = item > 10;
          return result;
        });

        console.log(everyResult); // false
        ```

    - `some()`：若数组的任意一项返回 true，则返回 true

        ```js
        var nums = [10, 20, 30, 40];

        var someResult = nums.some(function(item, index, array) {
          var result = item > 30;
          return result;
        });

        console.log(someResult); // true
        ```

    - `filter()`：返回结果为 true 的项的数组集合

        ```js
        var nums = [10, 20, 30, 40];

        var filterResult = nums.filter(function(item, index, array) {
          var result = item > 20;
          return result;
        });

        console.log(filterResult); // [ 30, 40 ]
        ```

    - `map()`：返回函数调用后的每一项

        ```js
        var nums = [10, 20, 30, 40];

        var mapResult = nums.map(function(item, index, array) {
          var result = item * 2;
          return result;
        });

        console.log(mapResult); // [ 20, 40, 60, 80 ]
        ```

    - `forEach()`：没有返回值，相当于使用 for 循环迭代每一项

        ```js
        var nums = [10, 20, 30, 40];

        nums.forEach(function(item, index, array) {
          // statement
        });
        ```

- 数组的归并方法

    - `reduce()`：从数组的第一项开始，一直迭代到数组的最后一项，最后返回一个值

        ```js
        var nums = [10, 20, 30];

        var result = nums.reduce(function(prev, cur, index, array) {
          return prev + cur;
        });

        console.log(result); // 60
        ```

    - `reduceRight()`：从数组的最后一项开始，一直迭代到数组的第一项，最后返回一个值

        ```js
        var nums = [10, 20, 30];

        var result = nums.reduceRight(function(prev, cur, index, array) {
          return prev + cur;
        });

        console.log(result); // 60
        ```

## Date 类型

Date 类型使用 UTC 1970 年 1 月 1 日 0 时 开始经过的毫秒数来保存日期。

获取当前日期和时间：

```js
var now = new Date();
console.log(now); // Fri Feb 01 2019 11:44:47 GMT+0800 (China Standard Time)
```

`Date()` 可以接收一个参数（从 UTC 1970 年 1 月 1 日 0 时 开始起，经过的毫秒数），并返回对应的日期。

```js
var date = new Date(1000000);
console.log(date); // Thu Jan 01 1970 08:16:40 GMT+0800 (China Standard Time)
```

Date 类型提供了两个函数用于简化上述的方式：

- `Date.parse()`：接收一个字符串作为参数，返回一个日期对象

- `Date.UTC()`：接收一系列时间参数，返回一个日期对象

ECMAScript 5 添加了 `Date.now()` 方法，这个方法返回调用这个方法时的日期和时间的毫秒数。

```js
var start = Date.now();

// dosomething ...

console.log('Execution Time' + (end - start) + 'ms');
```

- Date 类型的日期格式化方法

    | 方法名                  | 作用                      |
    | ---------------------- | ------------------------ |
    | `toDateString()`       | 显示 星期几、月、日和年      |
    | `toTimeString()`       | 显示 时 分 秒和时区         |
    | `toLocaleDateString()` | 显示地区的 星期几、月、日和年 |
    | `toLocaleTimeString()` | 显示 时 分 秒              |
    | `toUTCString()`        | 显示格式完整的 UTC 日期     |

## RegExp 类型

ECMAScript 通过 RegExp 类型来支持正则表达式。语法格式如下：

```
var expression = / pattern / flags
```

- pattern：模式，该部分可以是任何简单或是复杂的正则表达式，可以包含字符类、限定符、分组、向前查找以及反向引用

- flags：标志部分用于标明正则表达式的行为，可以有一个或多个。

正则表达式的匹配模式支持以下 3 个标志：

- `g`：即 `global`，表明匹配所有的字符串

- `i`：即 `case-insensitive`，表明忽略大小写

- `m`：即 `multiline`，表明匹配多行

与其他语言中的正则表达式类似，模式中使用的所有**元字符**都必须转义，正则表达式的元字符有：

```
(   [   {   \   $   *   +
)   ]   }   ^   |   ?   .
```

- 创建一个正则表达式

    ```js
    // 1. 使用字面量的方式
    var pattern1 = /[bc]at/i;

    // 2. 使用构造函数的方式
    var pattern2 = new RegExp('[bc]at', 'i');
    ```

- RegExp 实例的属性

    - `global`：布尔值，表示是否设置了 `g` 标志

    - `ignoreCase`：布尔值，表示是否设置了 `i` 标志

    - `lastIndex`：整数，表示匹配项的字符位置

    - `multiline`：布尔值，表示是否设置了 `m` 标志

    - `source`：正则表达式的字符串表示

- RegExp 实例的方法

    - `exec()`：接收一个字符串，然后返回包含第一个匹配项信息的数组

        ```js
        var message = 'Hello, my name is John!';
        var pattern = /hello/i;

        var matches = pattern.exec(message);
        console.log(matches); // [ 'Hello', index: 0, input: 'Hello, my name is John!' ]
        ```

    - `test()`：接收一个字符串，如果模式匹配则返回 true，否则返回 false

        ```js
        var text = '0000-00-0000';
        var pattern = /\d{3}-\d{2}-\d{4}/;

        if (pattern.test(text)) {
          console.log('The pattern was matched');
        }
        ```

- RegExp 构造函数属性

RegExp 构造函数包含一些属性（在 Java 中称为静态属性）。这些属性适用于作用域中的所有表达式，并且基于所执行的最近一次正则表达式操作而变化。

有两种方式可以访问 RegExp 构造函数的属性：通过长属性名或短属性名

| 长属性名        | 短属性名   | 说明                               |
| -------------- | -------- | --------------------------------- |
| `input`        | `$_`     | 最近一次要匹配的字符串                |
| `lastMatch`    | `$&`     | 最近一次的匹配项                     |
| `lastParen`    | `$+`     | 最近一次的捕获组                     |
| `leftContext`  | `` $` `` | input 字符串中 lastMatch 之前的文本  |
| `multiline`    | `$*`     | 布尔值，表示是否所有表达式都使用多行模式 |
| `rightContext` | `$'`     | input 字符串中 lastMatch 之前的文本  |

- ECMAScript 正则表达式还不支持的特性

    - 匹配字符串开始和结尾的 `\A` 和 `\Z`锚

    - 向后查找（lookbehind）

    - 并集和交集类

    - 原子组（atomic grouping）

    - Unicode 支持

    - 命名的捕获组

    - `s`（single，单行） 和 `x`（free-spacing，无间隔）匹配模式

    - 条件匹配

    - 正则表达式注释

## Function 类型

在 ECMAScript 中，函数实际上是对象。每个函数都是 Function 类型的实例，而且一样具有属性和方法。函数名实际上是一个指向函数对象的指针，不会与某个函数绑定。故 ECMAScript 中没有函数重载的概念。

定义函数的 3 种方式：

```js
// 1. 函数声明
function sum(num1, num2) {
  return num1 + num2;
}

// 2. 函数表达式
var sum = function(num1, num2) {
  return num1 + num2;
};

// 3. Function 构造函数
var sum = new Funtion('num1', 'num2', 'return num1 + num2');
```

- 函数声明和函数表达式

    函数声明和函数表达式并不是一致的，解析器会先读取函数声明，使其能在任何代码之前都能使用。对于函数表达式，必须等到解析器执行到其所在位置，才会被解释执行。

- 作为值的函数

    因为 ECMAScript 中的函数名本身就是变量，所以函数也可以作为值来使用。即可以将函数作为参数传递给另一个函数，也可以将函数作为另一个函数的结果返回。

- 函数内部的特殊对象

    - `arguments`：它是一个类数组对象，包含传入函数中的所有参数。这个对象还有一个 `callee` 的属性，该属性是一个指针，指向拥有这个 `arguments` 对象的函数

        ```js
        // 利用 callee 解除函数耦合
        function factorial(num) {
          if (num <= 1) {
            return 1;
          } else {
            return num * arguments.callee(num - 1);
          }
        }
        ```

        > ES5 还规范了另一个函数对象的属性：`caller`。这个属性保存着调用当前函数的函数的引用。

    - `this`：`this` 引用的是函数执行的环境对象。由于在调用函数前，`this` 的值并不确定，因此 `this` 可能会在代码执行过程中引用不同的对象

- 函数的属性和方法

    - `length` 和 `prototype` 属性

        - `length`：表示函数希望接收的命名参数的个数

        - `prototype`：保存引用类型的所有实例方法

    - `apply()`、`call()` 和 `bind()`

        - `apply()`：设置函数体内 `this` 对象的值

        - `call()`：设置函数体内 `this` 对象的值

        - `bind()`：ES5 新增，创建一个函数的实例，其 `this` 值会被绑定到传给 `bind()` 函数的值

        > `apply()` 和 `call()` 的区别在于传递参数不同

## 基本包装类型

ECMAScript 提供了 3 个特殊的引用类型用以便利地操作基本类型值：Boolean、Number、String。一般不推荐使用这 3 个引用类型创建相应的实例。

使用 `new` 调用基本包装类型的构造函数，与直接调用同名的转型函数是不一样的。

```js
var value = '25';
var number = Number(value);
console.log(typeof number); // number

var obj = new Number(value);
console.log(typeof obj);    // object
```

- Boolean 类型

    - 创建一个 Boolean 对象

        ```js
        var booleanObject = new Boolean(true);
        ```

- Number 类型

    - 创建一个 Number 对象

        ```js
        var numberObject = new Number(10);
        ```

    - 将数字格式化为字符串

        ```js
        // toFixed()
        var num1 = 10.005;
        console.log(num1.toFixed(2));       // '10.01'

        // toExponential()
        var num2 = 10;
        console.log(num2.toExponential(1)); // '1.0e+1'

        // toPrecision()
        var num3 = 99;
        console.log(num3.toPrecision(1));   // '1e+2'
        console.log(num3.toPrecision(2));   // '99'
        console.log(num3.toPrecision(3));   // '99.0'
        ```

- String 类型

## 单体内置对象