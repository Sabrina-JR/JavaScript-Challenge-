
//取DOM
const StartBtn = document.querySelector('.start-btn'); //開始按鈕
const BeforGame = document.querySelector('.befor-game') //遊戲初始畫面
const StartGame = document.querySelector('.start-game') //遊戲主畫面
const EndGame =  document.querySelector('.end-game')//遊戲結束畫面
const StartScore = document.querySelector('.start-score span') //顯示分數
const FinalScore = document.querySelector('.game-score') //最後分數
const Time =document.querySelector('.time-countdown') //剩餘時間

let TimeStart = 60;
let ScoreNum = 0;

console.log(StartBtn,BeforGame,StartGame,EndGame,StartScore,Time)

let StartTheGame = () =>{
    BeforGame.style.display = 'none';
    StartGame.style.display = 'block';
    StartScore.innerHTML = `000`;


    //遊戲開始時間
    setInterval( CountTime,1000)
}


let CountTime = () =>{
    if(TimeStart<=0){
        StartGame.style.display = 'none'; 
        EndGame.style.display = 'flex';
        FinalScore.innerHTML = ScoreNum;
        TimeStart = 60;
        return
    }if(StartGame.style.display != 'block'){
        return  //如果不是遊戲主畫面就停止倒數
    } 
    TimeStart -= 1;
    let RemainMin = Math.floor(TimeStart / 60); //計算剩餘時間分鐘數
    let RemainSec = TimeStart % 60; //計算剩餘時間秒數
    RemainMin = (RemainMin >= 10)? RemainMin: `0${RemainMin}`
    RemainSec = (RemainSec >= 10)? RemainSec: `0${RemainSec}`
    Time.innerHTML = `                  
    <div>${RemainMin}</div>
    <div>:</div>
    <div>${RemainSec}</div>`
    

}

//監聽start 進入畫面
StartBtn.addEventListener('click', StartTheGame)


