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

#### 构造函数和普通函数

构造函数和普通函数的唯一区别，在于调用它们的方式不同。任何函数，只要通过 `new` 操作符来调用，那它就可以作为构造函数；任何函数，如果不通过 `new` 操作符来调用，那它就和普通函数没有两样。

### 原型模式

每个函数都有一个 `prototype` 属性，这个属性是一个指针，指向一个对象。而这个对象，简单来说，就是创建 Person 实例时，新创建的对象。

```js
function Person() {}

Person.prototype.name = 'John';
Person.prototype.age = 18;
Person.prototype.job = 'Doctor';
Person.prototype.sayName = function() {
  console.log(this.name);
};

var person1 = new Person();
var person2 = new Person();

person1.sayName(); // John
person2.sayName(); // John
```

新对象的属性和方法是由所有实例共享的，即 `person1` 和 `person2` 访问的都是同一组属性和同一个 `sayName()` 方法。

原型对象和实例对象之间的关系可以通过使用原型对象的 `isPrototypeOf()` 方法来确定。例如：

```js
console.log(Person.prototype.isPrototypeOf(person1)); // true
console.log(Person.prototype.isPrototypeOf(person2)); // true
```

ES5 提供的 `Object.getPrototypeOf()` 方法返回 `[[Prototype]]` 的值。

```js
console.log(Object.getPrototypeOf(person1) == Person.prototype); // true
```

当代码访问某个对象的某个属性时，先从对象实例本身开始搜索，如果找到了则返回这个属性，如果没找到则搜索指针指向的原型对象，在原型对象上找。

虽然可以通过对象实例访问保存在原型中的值，但不能通过对象实例重写原型中的值，即如果在实例对象中添加了一个和原型对象重名的属性，则被添加的属性将覆盖原型对象中的属性。

```js
function Person() {
}

Person.prototype.name = 'John';
Person.prototype.age = 18;

var person1 = new Person();
var person2 = new Person();

person1.name = 'Snow';
console.log(person1.name); // Snow
console.log(person2.name); // John
```

如果要删除实例对象中的属性，恢复对原型对象属性的连接，可以使用 `delete` 关键字。

```js
function Person() {
}

Person.prototype.name = 'John';
Person.prototype.age = 18;

var person1 = new Person();
var person2 = new Person();

person1.name = 'Snow';
console.log(person1.name); // Snow
console.log(person2.name); // John

delete person1.name;
console.log(person1.name); // John
```

- 判断属性是否存在于对象实例中

    使用 `hasOwnProperty()` 方法可以判断给定属性是否存在于对象实例中，只有当给定的属性是对象实例中的属性时，该函数返回 `true`。

    ```js
    function Person() {}

    Person.prototype.name = 'John';

    var person1 = new Person();
    var person2 = new Person();

    person1.name = 'Snow';
    console.log(person1.hasOwnProperty('name')); // true
    console.log(person2.hasOwnProperty('name')); // false
    ```

- 使用简单的方法构造原型

    使用一个包含所有属性和方法的对象字面量来重写整个原型对象。例如：

    ```js
    function Person() {}

    Person.prototype = {
      name: 'John',
      age: 18,
      job: 'Doctor',
      sayName: function() {
        console.log(this.name);
      }
    };
    ```

    使用这个方法会产生一个副作用，就是 `constructor` 属性不再指向 `Person` 了（指向 `Object` 构造函数）。

    ```js
    var person = new Person();

    console.log(person instanceof Object); // true
    console.log(person instanceof Person); // false
    ```

    如果需要 `constructor` 属性，可以特意设置它。

    ```js
    function Person() {}

    Person.prototype = {
      constructor: Person,
      name: 'John',
      age: 18,
      job: 'Doctor',
      sayName: function() {
        console.log(this.name);
      }
    };
    ```

- 原型对象的问题

    - 这种方法忽略了为构造函数传递初始化参数这一环节，导致所有实例对象在默认情况下都取得相同的值。

    - 原型对象的共享特性。当原型的属性为引用类型时，修改一个实例对象的对应属性，会使得所有的其他实例对象的相同属性产生变化。

    所以一般很少单独使用原型对象模式。

### 组合使用构造函数模式和原型模式

创建自定义类型的最常见方式，就是组合使用构造函数和原型模式。构造函数模式用于定义实例参数，而原型模式用于定义方法和共享的属性。

- 这种方式的优点

  - 每个实例都会有自己的一份实例属性的副本

  - 每个实例共享着对方法的引用

  - 节省了内存

重写之前的例子：

```js
function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
}

Person.prototype = {
  constructor: Person,
  sayName: function() {
    console.log(this.name);
  }
};
```

## 继承

大多数面向对象语言都支持两种继承方式：接口继承和实现继承。接口继承只继承方法签名，实现继承则继承实际的方法。

由于 ECMAScript 中的函数没有签名，所以无法实现接口继承。所以 ECMAScript 只支持实现继承。实现继承主要靠原型链。

### 原型链

ECMAScript 的原型链的基本思想是利用原型让一个引用类型继承另一个引用类型的属性和方法。

```js
function SuperType() {
  this.property = true;
}

SuperType.prototype.getSuperValue = function() {
  return this.property;
};

function SubType() {
  this.subproperty = false;
}

/* 此处 SubType 继承了 SuperType */
SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function() {
  return this.subproperty;
};

var instance = new SubType();
console.log(instance.getSuperValue()); // true
```

- 默认的原型

    所有原型链的起点都是 Object 的原型对象。所以上述的例子原型链如下：

    ```
    Object.prototype ---> SuperType.prototype ---> SubType.prototype
    ```

- 确定原型和实例的关系

    有 2 种方式可以确定原型和实例之间的关系：

    1. 使用 `instanceof` 关键字

        ```js
        console.log(instance instanceof Object);    // true
        console.log(instance instanceof SuperType); // true
        console.log(instance instanceof SubType);   // true
        ```

    2. 使用 `isPrototypeOf()` 方法

        ```js
        console.log(Object.prototype.isPrototypeOf(instance));    // true
        console.log(SuperType.prototype.isPrototypeOf(instance)); // true
        console.log(SubType.prototype.isPrototypeOf(instance));   // true
        ```

### 借用构造函数

这种方法的基本思想是：在子类型的构造函数的内部调用超类型的构造函数。

```js
function SuperType() {
  this.colors = ['red', 'blue', 'green'];
}

function SubType() {
  /* 此处 SubType 继承了 SuperType */
  SuperType().call(this);
}

var instance1 = new SubType();
instance1.colors.push('black');
console.log(instance1.colors); // red, blue, green, black

var instance2 = new SubType();
console.log(instance2.colors); // red, blue, green
```

- 传递参数

    使用借用构造函数的方式，可以在子类型构造函数中向超类型构造函数传递参数。

    ```js
    function SuperType(name) {
      this.name = name;
    }

    function SubType() {
      SuperType.call(this, 'John');
      this.age = 18;
    }

    var instance = new SubType();
    console.log(instance.name); // 'John'
    console.log(instance.age);  // 18
    ```

### 组合继承

组合继承（或伪经典继承）指的是将原型链和借用构造函数的技术组合到一块。

```js
function SuperType(name) {
  this.name = name;
  this.colors = ['red', 'blue', 'green'];
}

SuperType.prototype.sayName = function() {
  console.log(this.name);
};

function SubType(name, age) {
  SuperType.call(this, name);
  this.age = age;
}

SubType.prototype = new SuperType();
SubType.prototype.constructor = SubType;
SubType.prototype.sayAge = function() {
  console.log(this.age);
};
```