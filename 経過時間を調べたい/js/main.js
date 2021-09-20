'use strict';

// スクリプト開始時の時間を記録
const oldTime = Date.now();

setInterval(() => {
    const currentTime = Date.now();
    // 経過したミリ秒を取得
    const diff = currentTime - oldTime;

    // 秒数を得る
    const sec = Math.floor(diff / 1000);

    document.querySelector('#log').innerHTML = `${sec}秒が経過`;
});