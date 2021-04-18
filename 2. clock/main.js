// 資料處理 


//取得DOM
const hour_hand = document.querySelector('.hour');
const min_hand = document.querySelector('.min');
const sec_hand = document.querySelector('.sec');


//抓住data 時間
const now = new Date()
const hour = now.getHours();
const min = now.getMinutes();
const sec = now.getSeconds();

console.log(now,hour,min,sec)