'use strict';

/* chapter 10 line 626 */

// 创建 table 元素
var table = document.createElement('table');

// 创建 tbody 元素
var tbody = document.createElement('tbody');

table.appendChild(tbody);

// 创建第一行
tbody.insertRow(0);
tbody.rows[0].insertCell(0);
tbody.rows[0].cells[0].appendChild(document.createTextNode('Cell 1, 1'));
tbody.rows[0].insertCell(1);
tbody.rows[0].cells[1].appendChild(document.createTextNode('Cell 1, 2'));

// 创建第二行
tbody.insertRow(0);
tbody.rows[1].insertCell(0);
tbody.rows[1].cells[0].appendChild(document.createTextNode('Cell 2, 1'));
tbody.rows[1].insertCell(1);
tbody.rows[1].cells[1].appendChild(document.createTextNode('Cell 2, 2'));

document.body.appendChild(table);