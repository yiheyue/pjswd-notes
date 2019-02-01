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

## RegExp 类型

## Function 类型

## 基本包装类型

## 单体内置对象