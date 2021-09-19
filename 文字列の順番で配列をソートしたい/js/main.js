'use strict';

// 比較関数なしのソート
const arr1 = ['grape', 'Orange', 'apple'];
arr1.sort();
console.log(arr1);

// 比較関数にlocaleCompareを利用
const arr2 = ['grape', 'Orange', 'apple'];
arr2.sort((a, b) => a.localeCompare(b));
console.log(arr2);