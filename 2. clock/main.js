// 資料處理 


//取得DOM
const hour_hand = document.querySelector('.hour');
const min_hand = document.querySelector('.min');
const sec_hand = document.querySelector('.sec');

function setData(){
    //抓住date 時間
    const now = new Date()
    const hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();

    //計算旋轉角度
    //每一時,分,秒鐘，指針需要旋轉幾度
    const hourDegress  = ((hour / 12) * 360)
    const minDegress  = ((min / 60) * 360)
    const secDegress = ((sec / 60) * 360)
    //寫入style
    hour_hand.style.transform = `rotate(${hourDegress}deg)` 
    min_hand.style.transform = `rotate(${minDegress}deg)`   
    sec_hand.style.transform = `rotate(${secDegress}deg)`  
}


// 每1秒（1000 毫)
setInterval(setData, 1000);
