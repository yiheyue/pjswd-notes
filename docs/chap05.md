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