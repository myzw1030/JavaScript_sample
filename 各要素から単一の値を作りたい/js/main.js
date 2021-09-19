'use strict';

// 配列の中の要素の合計値を計算する
// 3つの値段を格納した配列
/*const priceList = [100, 500, 900];

// 合計値を計算
const sum = priceList.reduce((previous, current) => {
    return previous + current;
});
console.log(sum);
*/

// 2次元配列を1次元配列にする
/*const array = [
    ['バナナ', 'りんご', 'いちご'],
    ['みかん', 'ぶどう']
];

const flattenedArray = array.reduce((previousValue, currentValue) => {
    return previousValue.concat(currentValue);
});

console.log(flattenedArray);
*/

// reduceRight()メソッド
const array = ['鈴木', '田中', '後藤'];

const members1 = array.reduce((previous, current) => {
    return `${previous}と${current}`;
});
console.log(members1);

const member2 = array.reduceRight((previous, current) => {
    return `${previous}と${current}`;
});
console.log(member2);