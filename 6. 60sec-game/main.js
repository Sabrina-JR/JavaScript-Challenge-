
//取DOM
const StartBtn = document.querySelector('.start-btn'); //開始按鈕
const BeforGame = document.querySelector('.befor-game') //遊戲初始畫面
const StartGame = document.querySelector('.start-game') //遊戲主畫面
const EndGame =  document.querySelector('.end-game')//遊戲結束畫面
const StartScore = document.querySelector('.start-score span') //顯示分數
const FinalScore = document.querySelector('.game-score') //最後分數
const Time =document.querySelector('.time-countdown') //剩餘時間
const Opration = document.querySelector('.opration'); //題目加減乘除符號 
const Num = document.querySelectorAll('.num'); //題目數字
const OperationArray = ['+', "-", "×", "÷"];

let TimeStart = 60;
let ScoreNum = 0;

console.log(StartBtn,BeforGame,StartGame,EndGame,StartScore,Time,Opration,Num)

let StartTheGame = () =>{
    BeforGame.style.display = 'none';
    StartGame.style.display = 'block';
    StartScore.innerHTML = `000`;

    NewQuestion();

    //遊戲開始 時間倒數
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


// 產生新的題目
let NewQuestion = () =>{
    let FactorAry =[];
    Opration.innerHTML = OperationArray[Math.floor(Math.random()*4)] //顯示加減乘除隨機符號
    if((TimeStart<=60) && (TimeStart > 40)){
        Num[0].innerHTML = Math.floor(Math.random()*9+1);
        if(Opration == '-'){ //如果是減號，減數要小於等於被減數
            Num[1].innerHTML = Math.floor(Math.random()*Num[0].innerHTML +1)
        }else if(Opration == '÷'){//如果是除號，除數要是被除數的因數
            for( i=1; i<Num[0].innerHTML+1; i++){
                if(Num[0].innerHTML % 1 == 0){
                    FactorAry.push(i)
                }
            }
            Num[1].innerHTML = FactorAry[Math.floor(Math.random()*(FactorAry.length))]
        }else{ //其餘符號1-9之間隨機
            Num[1].innerHTML = Math.floor(Math.random()*9+1)
        }

    }else if ((TimeStart<=40) && (TimeStart>20)){
            Num[0].innerHTML = Math.floor(Math.random()*89+10)
            if(Opration == '-'){ //如果是減號，減數要小於等於被減數
                Num[1].innerHTML = Math.floor(Math.random()*(Num[0].innerHTML-10) +10)
            }else if(Operation.innerHTML == "÷"){ //如果是除號，除數要是被除數的因數
                FactorAry = [];
                for( i=1; i<Num[0].innerHTML+1; i++){
                    if((Num[0].innerHTML % 1 == 0) && (i>10)){
                        FactorAry.push(i)
                    }
                }
                Num[i].innerHTML = FactorAry[Math.floor(Math.random()*(FactorAry.length))]
            }else{ //其餘符號10-99之間隨機
                num[1].innerHTML = Math.floor(Math.random()*89+10)
            }

    }else if(TimeStart <= 20){
        Num[0].innerHTML = Math.floor(Math.random()*999 +100)
        if(Opration == '-'){ //如果是減號，減數要小於等於被減數
            Num[1].innerHTML = Math.floor(Math.random()*(Num[0].innerHTML-100)+ 100)
        }else if(Operation.innerHTML == "÷"){ //如果是除號，除數要是被除數的因數
            FactorAry = [];
            for( i=1; i<Num[0].innerHTML+1; i++){
                if((Num[0].innerHTML % 1 == 0) && (i>100)){
                    FactorAry.push(i)
                }
            }
            Num[i].innerHTML = FactorAry[Math.floor(Math.random()*(FactorAry.length))]    
        }else{ //其餘符號100-999之間隨機
            num[1].innerHTML = Math.floor(Math.random()*900+100)
        }
    }
          
}


//監聽start 進入畫面
StartBtn.addEventListener('click', StartTheGame)

