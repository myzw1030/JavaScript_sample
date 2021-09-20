'use strict';

const object1 = {
    result: true,
    members: [
        {id: 1, name: '鈴木'},
        {id: 2, name: '田中'},
        {id: 3, name: '高橋'},
    ]
};

// オブジェクトのコピー
const copiedObject1 = Object.assign({}, object1);

console.log(copiedObject1);

// スプレッド構文を用いると短くかける
const object2 = {
    result: true,
    members: [
        {id: 1, name: '鈴木'},
        {id: 2, name: '田中'},
        {id: 3, name: '高橋'},
    ]
};

// オブジェクトのコピー
const copiedObject2 = { ...object2};

console.log(copiedObject2);