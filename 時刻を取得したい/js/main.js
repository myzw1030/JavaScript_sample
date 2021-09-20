'use strict';

// const date = new Date();
// const hour = date.getHours();
// const minutes = date.getMinutes();
// const seconds = date.getSeconds();

// const label = `${hour}時${minutes}分${seconds}秒`;


// document.querySelector('#log').innerHTML = `現時刻は${label}です`;


const date = new Date();
const hour = date.getHours();
let meridiem;
let hour2;
if (hour < 12) {
    meridiem = '午前';
    hour2 = hour;
}   else {
    meridiem = '午後';
    hour2 = hour - 12;
}

const label = `${meridiem}${hour2}時`;

document.querySelector('#log').innerHTML = `現時刻は${label}です`;