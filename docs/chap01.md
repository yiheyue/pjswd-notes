# JavaScript 简介

## JavaScript 简史

- 1995 年 2 月发布的 Netscape Navigator 2 中加入了 JavaScript 1.0（由就职于 Netscape 公司的 Brendan Eich 开发）。

- 之后发布的 Netscape Navigator 3 中加入了 JavaScript 1.1。

- Netscape Navigator 3 发布后不久，微软在自家产品 Internet Explorer 3 中加入了名为 JScript 的 JavaScript 实现。

- 1997 年，以 JavaScript 1.1 为蓝本的建议被提交给了 ECMA （European Computer Manufacturers Association）。由 ECMA 指定的 TC39 （Technical Committee #39）负责制定一种名为 ECMAScript 的新脚本语言的标准。

- 数个月之后，TC39 发布了 ECMAScript 的第一版标准（ECMA-262）。

## JavaScript 实现

JavaScript 的实现由三个部分组成：

1. 核心（ECMAScript）

2. 文档对象模型（DOM）

3. 浏览器对象模型（BOM）

### ECMAScript

ECMA-262 标准规定了这门语言的下列组成部分：

- 语法

- 类型

- 语句

- 关键字

- 保留字

- 操作符

- 对象

ECMAScript 就是对实现该标准规定的各个方面内容的语言的描述。JavaScript 实现了 ECMAScript，Adobe ActionScript 同样也实现了 ECMAScript。

#### ECMAScript 版本

- 第一版：ECMA-262 的第一版本质上与 Netscape 的 JavaScript 1.1 相同。只不过删除了所有针对浏览器的代码并作了一些较小的改动（ECMA-262 要求支持 Unicode 标准，且对象是平台无关的）。

- 第二版：ECMA-262 的第二版主要是编辑加工的结果。

- 第三版：ECMA-262 的第三版是对该标准的第一次修改。

  > 第三版修改了**字符串处理**、**错误定义**和**数值输出**。新增了**正则表达式**、**新控制语句**、**`try-catch` 异常处理**的支持。

- 第四版：ECMA-262 的第四版对这门语言进行了一次全面的检核修订。由于支持率没有 ECMAScript 3.1 高，因而第四版在正式发布前被废除。

  > ECMAScript 3.1 是 TC39 下属的一个小组提出的一个代替性方案。该方案建议只对这门语言作较少的改进（第四版的改动太大）。

- 第五版：由于第四版被废除，因而 ECMAScript 3.1 成为 ECMA-262 的第五版。该版本于 2009 年 12 月 3 日正式发布。第五版力求澄清第三版中已知的歧义并添加了新的功能。

  > 第五版新功能包括**原生 JSON 对象**、**继承的方法**和**高级属性定义**。还新增了严格模式。

### 文档对象模型（DOM）