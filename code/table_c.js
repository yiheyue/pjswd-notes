'use strict';

/* chapter 10 line 576 */

// 创建 table 元素
var table = document.createElement('table');

// 创建 tbody 元素
var tbody = document.createElement('tbody');

table.appendChild(tbody);

// 创建第一行
var row1 = document.createElement('tr');

var cell_1_1 = document.createElement('td');
cell_1_1.appendChild(document.createTextNode('Cell 1, 1'));
row1.appendChild(cell_1_1);

var cell_1_2 = document.createElement('td');
cell_1_2.appendChild(document.createTextNode('Cell 1, 2'));
row1.appendChild(cell_1_2);

tbody.appendChild(row1);

// 创建第二行
var row2 = document.createElement('tr');

var cell_2_1 = document.createElement('td');
cell_2_1.appendChild(document.createTextNode('Cell 2, 1'));
row2.appendChild(cell_2_1);

var cell_2_2 = document.createElement('td');
cell_2_2.appendChild(document.createTextNode('Cell 2, 2'));
row2.appendChild(cell_2_2);

tbody.appendChild(row2);

document.body.appendChild(table);