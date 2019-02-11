'use strict';

/* chapter 8 line 202 */

function getQueryStringArgs() {
  // 取得查询字符串并去掉开头的问号
  var qs = location.search.length > 0
    ? location.search.substring(1)
    : '';
  // 保存参数的对象
  var args = {};
  // 每一项的集合
  var items = qs.length ? qs.split('&') : [];
  var item = null;
  var name = null;
  var value = null;

  // 将每一项添加到 args 对象中
  var i = 0;
  var len = items.length;
  for (i = 0; i < len; i++) {
    item = items[i].split('=');
    name = decodeURIComponent(item[0]);
    value = decodeURIComponent(item[1]);

    if (name.length) {
      args[name] = value;
    }
  }

  return args;
}

// 测试代码 假设查询字符串是 ?q=javascript&num=10
var args = getQueryStringArgs();

console.log(args['q']);   // javascript
console.log(args['num']); // 10