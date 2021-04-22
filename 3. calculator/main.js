//取DOm
let decimalbtn = document.querySelector('.btn-decimal');//點數
let clearbtn = document.querySelector('.btn-clear')//全部清除
let backspacebtn = document.querySelector('.btn-backspace')//刪除
let displayResult = document.querySelector('.displayResult')//運算結果
let displayDetail = document.querySelector('.displayDetail')//運算過程


let calcnumbtn = document.querySelectorAll('.btn-num') //所有數字
let calcoperatorbtn = document.querySelectorAll('.btn-operator')//加減乘除 


let displayVal = '0'; //畫面初始值
let pendingVal; //追蹤被影藏的數字 ex. 5+3時顯示3而5被隱藏
let evalStrAry = [];



let updateDisplayResult = (e) =>{
 let btnText = e.target.innerText //抓到選取數字
    if(displayVal === '0')
        displayVal = '';

    displayVal+= btnText;
    displayResult.innerText = displayVal;
}

// for迴圈抓住所有btn-num監聽click事件
for(let i=0; i<calcnumbtn.length; i++){
    calcnumbtn[i].addEventListener('click',updateDisplayResult,false);
}


//全部清除
clearbtn.addEventListener('click',()=>{
    displayVal = '0';
    displayResult.innerText = displayVal;
    pendingVal =  undefined;
    evalStrAry = [];
})

//刪除
backspacebtn.addEventListener('click',()=>{
    displayVal = displayVal.slice(0,displayVal.length -1)
    if(displayVal === '')
       displayVal = '0';

    displayResult.innerText = displayVal;
})

//點數

decimalbtn.addEventListener('click',()=>{
    if(!displayVal.includes('.'))
        displayVal+='.'
    
    displayResult.innerText = displayVal;
})



let performOperator = (e) =>{
    let operator = e.target.innerText;
    console.log(operator)

    switch(operator){
        case '+':
            pendingVal = displayVal;
            displayVal = '0';
            displayResult.innerText = displayVal;
            evalStrAry.push(pendingVal);
            evalStrAry.push('+')
            break;

        case '−':
            pendingVal = displayVal;
            displayVal = '0';
            displayResult.innerText = displayVal;
            evalStrAry.push(pendingVal);
            evalStrAry.push('−')
            break;

        case '×':
            pendingVal = displayVal;
            displayVal = '0';
            displayResult.innerText = displayVal;
            evalStrAry.push(pendingVal);
            evalStrAry.push('*')
            break;

        case '÷':
            pendingVal = displayVal;
            displayVal = '0';
            displayResult.innerText = displayVal;
            evalStrAry.push(pendingVal);
            evalStrAry.push('/')
            break;

        case '=':
            evalStrAry.push(displayVal);//str
            let evaluation = eval(evalStrAry.join(' '));//計算
            displayVal = evaluation + ''; //num改回str
            displayResult.innerText = displayVal;
            evalStrAry = [];

            console.log(displayVal,evaluation)
        
            
            break; 

        default:
            break;
    }
}



// for迴圈抓住所有btn-operator監聽click事件
for(let i=0; i<calcoperatorbtn.length; i++){
    calcoperatorbtn[i].addEventListener('click',performOperator,false)
}