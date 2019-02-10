# BOM

BOM（浏览器对象模型）提供了很多用于访问浏览器功能的对象。

## window 对象

BOM 的核心对象是 window，它代表浏览器的一个实例。在浏览器中，window 对象有双重角色，它既是通过 JavaScript 访问浏览器窗口的一个接口，又是 ECMAScript 规定的 Global 对象。

### 全局作用域

由于 window 对象同时扮演着 ECMAScript 中 Global 对象的角色，因此所有在全局作用域中声明的变量、函数都会变成 window 对象的属性和方法。

```js
var age = 18;
function sayAge() {
  console.log(this.age);
}

console.log(window.age);      // 18
sayAge();                     // 18
console.log(window.sayAge()); // 18
```

虽然说全局变量会变成 window 的属性，但是定义全局变量和在 window 对象上定义属性还有一点区别：全局变量不能通过 `delete` 操作符删除，但是 window 对象上定义的属性可以。

访问未声明的变量会抛出错误，但是通过查询 window 对象，可以知道某个可能未声明的变量是否存在。

### 窗口位置

取得浏览器窗口左边和上边的位置。

```js
var leftPos = (typeof window.screenLeft === 'number')
  ? window.screenLeft
  : window.screenX;

var topPos = (typeof window.screenTop === 'number')
  ? window.screenTop
  : window.screenY;

console.log('Left: ' + leftPos);
console.log('Top: ' + topPos);
```

移动浏览器的位置。

> 以下方法在默认情况下可能被浏览器禁用。

```js
// 将窗口移动到屏幕左上角
window.moveTo(0, 0);

// 将窗口向下移动 100 像素
window.moveBy(0, 100);

// 将窗口移动到 (200, 300)
window.moveTo(200, 300);

// 将窗口向左移动 50 像素
window.moveBy(-50, 0);
```

### 窗口大小

取得页面视口大小。

```js
var pageWidth = window.innerWidth;
var pageHeight = window.innerHeight;

if (typeof pageWidth != 'number') {
  if (document.compatMode == 'CSS1Compat') {
    pageWidth = document.documentElement.clientWidth;
    pageHeight = document.documentElement.clientHeight;
  } else {
    pageWidth = document.body.clientWidth;
    pageHeight = document.body.clientHeight;
  }
}
```

调整浏览器窗口的大小。

> 以下方法在默认情况下可能被浏览器禁用。

```js
// 调整到 100 * 100
window.resizeTo(100, 100);

// 调整到 200 * 150
window.resizeBy(100, 50);

// 调整到 300 * 300
window.resizeTo(300, 300);
```

## location 对象

## navigator 对象

## screen 对象

## history 对象