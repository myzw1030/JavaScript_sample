'use strict';

const array1 = [ 1, 2, 3, 4, 5];

array1.sort((a, b) => {
    // aがbより小さいならば、a,bの順に並べる
    if (a < b) {
        return 1;
    }

    // aとbが等しければ、順番はそのまま
    if (a === b) {
        return 0;
    }

    // aがbより大きければ、b,aの順に並べる
    if (a > b) {
        return -1;
    }
});

console.log(array1);



