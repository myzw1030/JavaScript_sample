'use strict';

const allDivElementList = document.querySelectorAll('div');
// <div class="on"></div>という要素を探すためにfilter()を使おうとするが、
// NodeListではfilter()が使えないのでエラーになる。
// allDivElementList.filter((element) => element.classList.contains('on'));

const elementArray = [...allDivElementList];
// 配列用メソッドfilter()が使える
elementArray.filter((element) => element.classList.contains('on'));

const myString = 'こんにちは';
console.log(myString);
console.log([...myString]);