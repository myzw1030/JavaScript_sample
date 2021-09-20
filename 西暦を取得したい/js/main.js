'use strict';

const date = new Date();
const year = date.getFullYear();

document.querySelector('#log').innerHTML = `今年は西暦${year}です`;