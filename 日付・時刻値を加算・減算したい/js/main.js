'use strict';

const date = new Date('2018/06/01');
date.setMonth(date.getMonth() - 1); // 一ヶ月前
console.log(date.toLocaleDateString());

date.setDate(date.getDate() + 60); // 60日後
console.log(date.toLocaleDateString());