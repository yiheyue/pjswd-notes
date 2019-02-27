# JSON

JSON 是由 Douglas Crockford 发明的一种数据格式。

## 语法

JSON 的语法可以表示以下 3 种类型的值：

1. 简单值 - 在 JSON 中可以表示字符串、数值、布尔值和 null

2. 对象 - 在 JSON 中，对象表示一组无序的键值对

3. 数组 - 在 JSON 中，数组表示一组有序的值的列表

### 简单值

> 注意：在 JSON 中，字符串必须使用双引号。

例 1：

```json
5
```

例 2：

```json
"Hello World!"
```

### 对象

> 注意：在 JSON 中，对象中不应该出现两个相同的属性

示例：

```json
{
  "name": "John",
  "age": 22,
  "hasJob": false,
  "school": {
    "name": "CU",
  }
}
```

### 数组

示例：

```json
[
  {
    "title": "ABC",
    "author": "abc",
    "edition": 3
  },
  {
    "title": "DEF",
    "author": "def",
    "edition": 2
  }
]
```

## JSON 相关方法

- `JSON.stringify()`：将一个 JavaScript 对象序列化成一个文本

    ```js
    var book = {
      name: 'ABC',
      edition: 3
    }

    var jsonText = JSON.stringify(book);
    ```

- `JSON.parse()`：将一段文本解析为一个 JavaScript 对象

    ```js
    var bookCopy = JSON.parse(jsonText);
    ```