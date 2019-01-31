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