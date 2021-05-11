//取DOM
// const start = document.querySelector('.start');

// start.addEventListener('click', ()=>{
//    const container = document.querySelector('.container')
//    container.remove()
// })
class Game60 {
    //建構式 初始倒數時間與計算現在剩餘秒數、當前秒數
    constructor() {
      this.numA = 0;
      this.numB = 0;
      this.operator = "";
      this.points = 0;
      this.level = 1;
      this.totalTime = 60;
      this.timeMin = 0;
      this.timeMax = 0;
      this.answer = 0;
      this.operatorlist = ["+", "-", "*", "/"];
      
      const countTime = setInterval(() => {
        this.totalTime -= 1;
        if (this.totalTime === 0) {
          clearInterval(countTime);
          this.displayResult();
        }
        this.displayTime();
      }, 1000);
      this.displayTime();
    }
}

window.onload = ()=>{
    document.querySelector('.start').addEventListener('click',startgame)
}

let startgame = ()=>{
    document.querySelector('.start_container')
} 