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

## HTML5

与以往的 HTML　不同，HTML５　定义了大量的　JavaScript API，其中一些 API 与 DOM 重叠，定义了浏览器应该支持的 DOM 扩展。

### 与类相关的扩充

1. `getElementByClassName()` 方法

    `getElementByClassName()` 方法接收一个参数，该参数是一个包含一个或多个类名的字符串。方法调用后，返回带有指定类的所有元素的 NodeList。

    ```js
    // 取得所有类中包含 current 和 username 的元素
    var allCurrentUsernames = document.getElementByClass('current username');
    ```

2. `classList` 属性

    `classList` 属性是新集合类型 DOMTokenList 的实例，其定义了以下的新方法：

    - `add(value)`：将给定的字符串加入到列表中

    - `contains(value)`：表示列表中是否存在给定的值，存在返回 true，否则返回 false

    - `remove(value)`：从列表中删除指定的字符串

    - `toggle(value)`：如果列表中已经存在给定的字符串，删除它；否则，添加它

    ```js
    // 删除 current 类
    div.classList.remove('current');

    // 添加 new 类
    div.classList.add('new');
    ```

### 焦点管理

`document.activeElement` 属性始终会引用 DOM 中当前获得了焦点的元素。元素获得焦点的方式有：页面加载、用户输入和再代码中调用 `focus()` 方法。

- `focus()`：让指定元素被聚焦

    ```js
    var button = document.getElementById('myButton');

    button.focus();
    console.log(document.activeElement === button); // true
    ```

- `hasFocus()`：判断指定元素是否被聚焦

    ```js
    var button = document.getElementById('myButton');

    button.focus();
    button.hasFocus(); // true
    ```

### HTMLDocument 的变化

HTML5 扩展了 HTMLDocument，增加了新的功能。

- `document.readyState` 属性

    这个属性有 2 个可能值：`loading` 和 `complete`。

    - `loading`：正在加载文档

    - `complete`：已经加载完文档

- 兼容模式

    在标准模式下，`document.compatMode` 的值等于 `CSS1Compat`；

    在混杂模式下，`document.compatMode` 的值等于 `BackCompat`。

- `document.head` 元素

    这个属性是作为对 `document.body` 属性的补充。HTML5 新增了这个属性用于引用文档中的 `head` 元素。