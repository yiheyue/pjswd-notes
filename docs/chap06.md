# 面向对象的程序设计

ECMA-262 把对象定义为：“无序属性的集合，其属性可以包含基本值、对象或者函数。”

每个对象都是基于一个引用类型创建的，这个类型可以是第五章讨论的原生类型，也可以是开发人员自定义的类型。

## 对象

创建自定义对象的最简单的方法是创建一个 Object 的实例，然后为其添加属性和方法。

```js
// 声明一个名为 person 的对象
var person = new Object();

// 为 person 对象添加属性
person.name = 'John';
person.age = 18;
person.job = 'Software Engineer';

// 为 person 对象添加方法
person.sayHi() = function() {
  console.log('Hi!');
};
```

同样，上述的例子可以用对象字面量语法来描述：

```js
var person = {
  name: 'John',
  age: 29,
  job: 'Software Engineer',

  sayHi: function() {
    console.log('Hi!');
  }
};
```

用上述的两种方法创建的对象是一样的。像 `name`、`age`、`job` 和 `sayHi` 这些属性在被创建时会带一些特征值（characteristic）。JavaScript 通过这些特征值来定义它们的行为。

### 属性类型

ECMAScript 中有两种属性：数据属性和访问器属性。

1. 数据属性

    数据属性包含一个数据值的位置，在这个位置可以读取和写入值。数据属性有 4 个描述其行为的特性。

    - `[[Configurable]]`：表示能否通过 `delete` 删除属性从而重新定义属性，能否修改属性的特性，或者能否把属性修改为访问器属性

    - `[[Enumerable]]`：表示能否通过 `for-in` 循环返回属性

    - `[[Writable]]`：表示能否修改属性的值

    - `[[Value]]`：包含这个属性的数据值

2. 访问器属性