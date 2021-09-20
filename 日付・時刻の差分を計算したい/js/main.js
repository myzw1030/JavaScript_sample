'use strict';

// 日数として知りたい
// const dateA = new Date('2021/09/20');
// const dateB = new Date('2021/08/20');
// const diffMSec = dateA.getTime() - dateB.getTime();
// const diffDate = diffMSec / (24 * 60 * 60 * 1000);
// console.log(`${diffDate}日の差があります`);

// 時間として知りたい
// const dateA = new Date('2021/09/20 10:00:00');
// const dateB = new Date('2021/09/20 07:00:00');
// const diffMSec = dateA.getTime() - dateB.getTime();
// const diffHour = diffMSec / (60 * 60 * 1000);
// console.log(`${diffHour}時間の差があります`);

// 分として知りたい
const dateA = new Date('2021/09/20 01:00:00');
const dateB = new Date('2021/09/20 00:50:00');
const diffMSec = dateA.getTime() - dateB.getTime();
const diffMin = diffMSec / (60 * 1000);
console.log(`${diffMin}分の差があります`);