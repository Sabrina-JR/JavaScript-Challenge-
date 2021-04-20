
let decimalbtn = document.getElementById('calc-decimal')//點數
let clearbtn = document.getElementById('calc-clear')//全部清除
let backspacebtn = document.getElementById('calc-backspace')//刪除
let displayValElement = document.getElementById('calc-display-val')//運算結果

let calcnumbtn = document.getElementsByClassName('calc-btn-num ')//所有數字
let calcoperatorbtn = document.getElementsByClassName('calc-btn-operator')//加減乘除

let displayVal = '0'; //初始值
let pendingVal; //追蹤被影藏的數字 ex. 5+3時顯示3而5被隱藏
let evalStringArray = [];

//////////////////////////////////


let updateDisplayVal = (e) =>{
    let btnText = e.target.innerText;//抓住按到的數字
    if(displayVal === '0'){ displayVal = '';}
    
    displayVal+= btnText;
    displayValElement.innerText = displayVal;
  }
  
  for(let i=0; i<calcnumbtn.length; i++) {
      calcnumbtn[i].addEventListener('click',updateDisplayVal,false);
  }
  
