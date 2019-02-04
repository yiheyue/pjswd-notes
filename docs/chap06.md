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

    要修改属性默认的特性，必须使用 ES5 的 `Object.defineProperty()` 方法。这个方法接受 3 个参数：属性所在的对象、属性的名字和一个描述符对象。这个描述符对象的属性必须是：`configurable`、`enumerable`、`writable` 和 `value`。

    ```js
    Object.defineProperty(person, 'name', {
      writable: false,
      value: 'John'
    });

    console.log(person.name); // John
    person.name = 'Tom';
    console.log(person.name); // John
    ```

2. 访问器属性

    访问器属性不包含数据值，但包含一对 getter 和 setter 函数。访问器属性有如下 4 个特性：

    - `[[Configurable]]`：表示能否通过 `delete` 删除属性从而重新定义属性，能否修改属性的特性，或者能否把属性修改为数据属性
    
    - `[[Enumerable]]`：表示能否通过 `for-in` 循环返回属性

    - `[[Get]]`：在读取属性时调用的函数（默认值为 `undefined`）

    - `[[Set]]`：在设置属性时调用的函数（默认值为 `undefined`）

    访问器属性不能直接定义，必须使用 `Object.defineProperty()` 方法来定义。

    ```js
    var book = {
      _year: 2004,
      edition: 1
    };

    Object.defineProperty(book, 'year', {
      get: function() {
        return this._year;
      },

      set: function(newValue) {
        if (newValue > 2004) {
          this._year = newValue;
          this.edition += newValue - 2004;
        }
      }
    });

    book.year = 2005;
    console.log(book.edition); // 2
    ```

    > 本例中的 `_year` 属性前的下划线是一种常见的记号，用于表示只能通过对象方法访问的属性。

### 定义多个属性

ES5 还定义了一个 `Object.defineProperties()` 方法用于同时为对象定义多个属性。

```js
var book = {};

Object.defineProperties(book, {
  _year: {
    writable: true,
    value: 2004
  },

  edition: {
    writable: true,
    value: 1
  },

  year: {
    get: function() {
      return this._year;
    },

    set: function(newValue) {
      if (newValue > 2004) {
        this._year = newValue;
        this.edition += newValue - 2004;
      }
    }
  }
});
```

### 读取属性的特性

使用 ES5 定义的 `Object.getOwnPropertyDescriptor()` 方法可以取得给定属性的描述符。

```js
var book = {};

Object.defineProperties(book, {
  _year: {
    writable: true,
    value: 2004
  },

  edition: {
    writable: true,
    value: 1
  },

  year: {
    get: function() {
      return this._year;
    },

    set: function(newValue) {
      if (newValue > 2004) {
        this._year = newValue;
        this.edition += newValue - 2004;
      }
    }
  }
});

var descriptor = Object.getOwnPropertyDescriptor(book, '_year');
console.log(descriptor.writable); // true
```

## 创建对象

使用 Object 构造函数和对象字面量的方式创建对象会产生大量的代码冗余。采取下列方法可以避免冗余的产生。

### 工厂模式

工厂模式是软件工程领域一种广为人知的设计模式，这种模式抽象了创建具体对象的过程。因为 ECMAScript 中无法创建类，开发人员就发明了一种函数，用函数来封装以特定接口创建对象的细节。

```js
function createPerson(name, age, job) {
  var o = new Object();
  o.name = name;
  o.age = age;
  o.job = job;
  o.sayName = function() {
    console.log(this.name);
  }
  return o;
}

var person1 = createPerson('John', 18, 'Software Engineer');
var person2 = createPerson('Snow', 20, 'Doctor');
```

工厂模式解决了创建多个相似对象的问题，但是没有解决对象识别问题（即怎样知道一个对象的类型）。

### 构造函数模式

自定义一个构造函数：

```js
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function() {
    console.log(this.name);
  };
}

var person1 = new Person('John', 18, 'Software Engineer');
var person2 = new Person('Snow', 20, 'Doctor');
```

> `person1` 和 `person2` 都有一个 `constructor` 属性，该属性指向 `Person`。

使用 `new` 操作符创建 `Person` 的新实例，会经历以下 4 个步骤：

1. 创建一个新对象

2. 将构造函数的作用域赋给新对象（因此 `this` 指向了这个对象）

3. 执行构造函数中的代码（为新对象添加属性）

4. 返回新对象