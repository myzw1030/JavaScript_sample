'use strict';

const date = new Date();

const locale = date.toLocaleString(); //日付と時刻
const localeDate = date.toLocaleDateString();  // 日付
const localeTime = date.toLocaleTimeString(); //　時刻

document.querySelector('#log').innerHTML = `${locale}<br>${localeDate}<br>${localeTime}`;