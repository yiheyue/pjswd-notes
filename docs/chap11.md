# DOM 扩展

对 DOM 的两个主要扩展是 Selectors API（选择符 API）和 HTML5。这两个扩展都来自于社区。此外还有一些专有扩展。

## 选择符 API

Selectors API Level 1 的核心是两个方法：`querySelector()` 和 `querySelectorAll()`。

### `querySelector()` 方法

`querySelector()` 方法接收一个 CSS 选择符，返回与该模式匹配的第一个元素，如果没有找到，则返回 null。

```js
// 取得 body 元素
var body = document.querySelector('body');

// 取得 ID 为 mydiv 的元素
var myDiv = document.querySelector('#mydiv');

// 取得类为 selected 的第一个元素
var selected = document.querySelector('.selected');

// 取得类为 button 的第一个 img 元素
var img = document.querySelector('img.button');
```

### `querySelectorAll()` 方法

`querySelectorAll()` 方法与 `querySelector()` 类似，只不过它返回的是所有匹配的元素（是一个 NodeList 实例）。

```js
// 取得所有类为 button 的 img 元素
var imgs = document.querySelector('img.button');
```

### `matchesSelector()` 方法

Selectors API Level 2 规范新增了一个方法：`matchesSelector()`。该方法接收一个参数（CSS 选择符），如果调用元素与该选择符匹配，返回 true，否则返回 false。

```js
// 假设 img 元素的 CSS 选择符为 button
img.matchesSelector('img.button'); // true
```

## 遍历元素

使用 Element Traversal API 遍历元素时可以弥补不同浏览器之间的差异。

Element Traversal API 为 DOM 元素添加了以下 5 个属性：

- `childElementCount`：返回子元素的个数

- `firstElementChild`：指向第一个子元素

- `lastElementChild`：指向最后一个子元素

- `previousElementSibling`：指向上一个同胞元素

- `nextElementSibling`：指向下一个同胞元素

