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

### 导航和打开窗口

使用 `window.open()` 可以导航到一个特定的 URL，或者打开一个新的窗口。

使用上述的方法打开百度页面：

```js
window.open('https://www.baidu.com/', '_self');
```

> 第二个参数可以是 `_self`、`_parent`、`_top` 或 `_blank`。

### 间歇调用和超时调用

- 超时调用

    超时调用会在指定时间后执行代码。超时调用需要使用 `window` 对象的 `setTimeout()` 方法。

    ```js
    // 2 秒后输出 'I am late' 字符串
    setTimeout(function() {
      console.log('I am late.');
    }, 2000);
    ```

    `setTimeout()` 方法会返回一个超时调用 ID，可以使用它来取消超时调用。如果要取消超时调用，则需要使用 `clearTimeout()` 方法。

    ```js
    var timeoutId = setTimeout(function() {
      console.log('cancel');
    }, 2000);

    clearTimeout(timeoutId);
    ```

- 间歇调用

    间歇调用会按照指定的时间间隔重复执行代码，直到间歇调用被取消或者页面被卸载。间歇调用需要使用 `setInterval()` 方法。

    ```js
    // 每隔 2 秒输出 'interval...' 字符串
    setInterval(function() {
      console.log('interval...');
    }, 2000);
    ```

    `setInterval()` 方法会返回一个间歇调用 ID，可以使用它来取消间歇调用。如果要取消间歇调用，则需要使用 `clearInterval()` 方法。

    ```js
    var intervalId = setInterval(function() {
      console.log('hello');
    }, 2000);
    
    clearInterval(intervalId);
    ```

### 系统对话框

- `alert()`

    警告对话框，一般用于提示用户。

    ```js
    alert('Please close this page.');
    ```

- `confirm()`

    确认对话框，一般用于询问用户是否确认。

    ```js
    confirm('Are you sure?');
    ```

- `prompt()`

    提示对话框，一般用于获取一些简单的用户信息。

    ```js
    prompt('What is your name?', 'John');
    ```

- `window.print()` - “打印”对话框

- `window.find()` - “查找”对话框

## location 对象

location 对象提供了与当前窗口中加载的文档有关的信息，还提供了一些导航功能。而且，location 既是 window 对象的属性，又是 document 对象的属性。

下列是 location 对象的属性：

| 属性名    | 例子                  | 说明                |
| -------- | -------------------- | ------------------ |
| hash     | `#contents`          | 返回 URL 中的 hash   |
| host     | `www.abc.com:80`     | 返回服务器名称和端口号 |
| hostname | `www.abc.com`        | 返回服务器名称        |
| href     | `http://www.abc.com` | 返回完整的 URL       |
| pathname | `/def/x.txt/`        | 返回 URL 的路径      |
| port     | `80`                 | 返回 URL 指定的端口号 |
| protocol | `http:`              | 返回页面使用的协议     |
| search   | `?q=content`         | 返回 URL 的查询字符串 |

### 获取查询字符串的参数

[源代码和注释](../code/query_str.js)

```js
function getQueryStringArgs() {
  var qs = location.search.length > 0
    ? location.search.substring(1)
    : '';
  var args = {};
  var items = qs.length ? qs.split('&') : [];
  var item = null;
  var name = null;
  var value = null;
  var i = 0;
  var len = items.length;

  for (i = 0; i < len; i++) {
    item = item[i].split('=');
    name = decodeURIComponent(item[0]);
    value = decodeURIComponent(item[1]);

    if (name.length) {
      args[name] = value;
    }
  }
  return args;
}
```

### 操作 location 对象

- `assign()`：打开一个新的 URL

    ```js
    location.assign('https://www.github.com');
    ```

- `replace()`：打开一个新的 URL，但是后退按钮被禁用

    ```js
    setTimeout(function() {
      location.replace('https://www.github.com');
    }, 2000);
    ```

- `reload()`：重新加载页面

    ```js
    location.reload();     // 重新加载（有可能从缓存中加载）
    location.reload(true); // 重新加载（从服务器重新加载）
    ```

## navigator 对象

navigator 对象可用于识别客户端浏览器。

下表是 navigator 对象常用的属性：

| 属性 | 说明 |
| -------- | ---- |
| appCodeName   | 浏览器的名称，通常是 Mozilla |
| appName       | 完整的浏览器名称            |
| appVersion    | 浏览器的版本                |
| cookieEnabled | 表示 cookie 是否启动        |
| javaEnabled   | 表示当前浏览器是否启动了 java |
| language      | 浏览器的主语言              |
| platform      | 浏览器所在的系统平台         |
| plugins       | 浏览器中安装的插件信息的数组  |
| userAgent     | 浏览器的用户代理字符串       |

## screen 对象

screen 对象基本上只用于表明客户端的能力。

下表是常见浏览器都支持的 screen 对象的属性：

| 属性         | 说明                        |
| ----------- | -------------------------- |
| availHeight | 屏幕像素高度减去系统部件之后的值 |
| availLeft   | 未被系统占用的最左侧的像素值    |
| availTop    | 未被系统占用的最上方的像素值    |
| availWidth  | 屏幕像素宽度减去系统部件之后的值 |
| colorDepth  | 用于表现颜色的位数            |
| height      | 屏幕的像素高度                |
| pixelDepth  | 屏幕的位深                   |
| width       | 屏幕的像素宽度                |

## history 对象

history 对象保存着用户上网的浏览记录。

- 使用 `history.go()` 方法跳转页面

    ```js
    // 向前跳转 1 页
    history.go(1);

    // 向前跳转 2 页
    history.go(2);

    // 向后跳转 1 页
    history.go(-1);
    ```

- `history.back()` 和 `history.forward()`

    ```js
    // 向后跳转 1 页
    history.back();

    // 向前跳转 1 页
    history.forward();
    ```