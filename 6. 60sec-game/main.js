
//取DOM
const StartBtn = document.querySelector('.start-btn'); //開始按鈕
const BeforGame = document.querySelector('.befor-game') //遊戲初始畫面
const StartGame = document.querySelector('.start-game') //遊戲主畫面
const EndGame =  document.querySelector('.end-game')//遊戲結束畫面
const StartScore = document.querySelector('.start-score span') //顯示分數
console.log(StartBtn,BeforGame,StartGame,EndGame,StartScore)

let Start = () =>{
    BeforGame.style.display = 'none';
    StartGame.style.display = 'block';
    StartScore.innerHTML = `000`
}



//監聽start 進入畫面
StartBtn.addEventListener('click', Start)


