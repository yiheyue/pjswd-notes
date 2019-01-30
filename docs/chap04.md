# 变量、作用域和内存问题

## 基本类型和引用类型的值

ECMAScript 变量可能包含两种不同数据类型的值：

1. **基本类型值**指的是简单的数据段

2. **引用类型值**指的是那些可能由多个值构成的对象

### 动态的属性

对于引用类型的值，我们可以为其添加属性或方法，也可以修改或删除其属性和方法。

```js
var book = new Object();
book.price = 100;
console.log(book.price); // 100
```

但是，我们不能给基本类型的值添加属性或方法。

### 复制变量值

- 如果从一个变量向另一个变量复制基本类型的值，则相当于创建一个新的副本。且二者之间相互独立，互不干扰。

    ```js
    // num1 和 num2 分别拥有自己的存储空间，只不过他们的值都为 10
    var num1 = 10;
    var num2 = num1;
    ```

- 如果一个变量向另一个变量复制引用类型的值，则相当于创建一个副本的指针，该指针指向存储在内存堆中的一个对象。这两个变量指向同一个对象。

    ```js
    // obj1 和 obj2 都指向同一个对象。
    var obj1 = new Object();
    var obj2 = obj1;
    obj1.name = 'John';
    console.log(obj2.name); // John
    ```

### 传递参数

ECMAScript 只支持值传递这种传递参数方式。

- 如果传递的参数是基本类型的值，则函数中的形参和传递的实参是两个互不相干的变量，即修改形参的值不会影响到实参的值。

    ```js
    var price = 100;

    function calc(price) {
      price += 200;
      console.log(price);
    }

    calc(price);        // 300
    console.log(price); // 100
    ```

- 如果传递的参数是引用类型的值，则函数中的形参和传递的实参则是指向同一个对象的指针。修改形参引用的对象的属性，之后通过实参访问对象时，会发现对象属性的值被改变了。

    ```js
    var obj = new Object();
    obj.name = 'John';

    function changeName(obj) {
      obj.name = 'Snow';
      console.log(obj.name);
    }

    changeName(obj);       // Snow
    console.log(obj.name); // Snow
    ```

### 检测类型

- 检测基本类型变量的类型使用 `typeof` 操作符

    ```js
    var age = 18;
    console.log(typeof age); // number
    ```

- 检测引用类型变量的类型使用 `instanceof` 操作符

    ```js
    var obj = new Object();
    console.log(obj instanceof Ojbect); // true
    console.log(obj instanceof Array);  // false
    ```

## 执行环境及作用域

### 本节关键字

- 执行环境（execution context）

- 执行环境关联的变量对象（variable object）

- 执行环境关联的活动对象（activation object）

- 作用域（scope）

- 作用域链（scope chain）

执行环境（execution context）定义了变量或函数有权访问的其他数据，决定了它们各自的行为。

每个执行环境都有一个与之关联的变量对象（variable object）。执行环境中的所有变量和函数都保存在这个对象中。

全局执行环境是最外围的一个执行环境，根据宿主环境的不同，表示全局执行环境的对象也不同。在 Web 浏览器中，全局执行环境被认为是 window 对象，因此所有的全局变量和函数都是作为 window 对象的属性和方法被创建的。

某个执行环境中的所有代码执行完毕后，该执行环境被销毁，保存在其中的所有变量和函数定义也随之销毁。

每个函数都有自己的执行环境。当执行流进入一个函数时，函数的执行环境就会被推入一个执行环境栈中。当函数执行完之后，栈将其执行环境弹出，把控制权交还给之前的执行环境。

当代码在一个执行环境中执行时，会创建变量对象的一个作用域链（scope chain）。

```
global_execution_context
│
└── function_execution_context
    │
    └── inner_function_execution_context
```

使用 `var` 声明的变量会被自动地添加到最近的执行环境中。