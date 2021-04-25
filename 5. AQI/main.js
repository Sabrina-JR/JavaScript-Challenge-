//接收資料

// let xhr = new XMLHttpRequest();
// xhr.open('get','https://gist.githubusercontent.com/abc873693/2804e64324eaaf26515281710e1792df/raw/a1e1fc17d04b47c564bbd9dba0d59a6a325ec7c1/taiwan_districts.json',true);
// xhr.send(null)
// xhr.onload = () =>{內容}


let promise = new Promise((resolve,reject)=>{
    let xhr =  new XMLHttpRequest();
    xhr.open('get','https://script.google.com/macros/s/AKfycbzl6KKgb4v2-F3SCVxVaXjnMwM_XQvnk2A08nw7NjmGfuRVmak0/exec?url=http://opendata2.epa.gov.tw/AQI.json',true);
    xhr.send(null);
    xhr.onload = ()=>{
        if(xhr.status >= 200 && xhr.status < 400){
            resolve(xhr.response)
        }else{
            reject('取得資料失敗'+ xhr.status);
        }
    }

});

promise.then((res)=>{
    let CallBackData = JSON.parse(res);//轉成陣列

    //取DOM
    let selectArea = document.getElementById('area');
    let areaName = document.querySelector('.areaName');
    let publishTime = document.querySelector('.publishtime');
    let showarea = document.querySelector('.showarea');
   

    let Countyary =[];
    let Data = [];
    let Timeary;
    let optionValue;
   
    for(let i=0; i<CallBackData.length; i++){
        Countyary.push(CallBackData[i].County); //顯示縣市資料
        Timeary = CallBackData[i].PublishTime; //更新時間
        Data.push(CallBackData[i]); //所有資料
    }

    let select = Countyary.filter((item,key,ary)=>{
        return ary.indexOf(item) === key //留下第一個符合的縣市共22個
    })  
    
    for(let i=0; i<select.length; i++){
        option = document.createElement('option')
        option.value = select[i];
        option.innerHTML = select[i];
        selectArea.appendChild(option); 
    }
    
    let dataList = () =>{
        if(!optionValue){
            optionValue = '基隆市';
            areaName.innerHTML = optionValue;
            publishTime.innerHTML = Timeary + '更新'
        }
        let str ='';
        for(let i=0; i<Data.length;i++){
            if(optionValue === Data[i].County){
                let AQI = Data[i].AQI;
                console.log(AQI)
               if(AQI !== ''){
                   str+=`<div class="showareabox">
                   <div class="showbox1">${Data[i].SiteName}</div>
                   <div class="showbox2">${Data[i].AQI}</div>
               </div>`
               }

            }
           
        }
        showarea.innerHTML = str;
        console.log(optionValue,showarea,str)
       
      
    }
    dataList();


    let UpadateareaName = (e) =>{
        optionValue = e.target.value;
        console.log(optionValue)
        areaName.innerHTML = optionValue;
        publishTime.innerHTML = Timeary + '更新'
        dataList();
    }

    selectArea.addEventListener('change', UpadateareaName)

    
    

});

promise.catch((error)=>{
    console.log(error)
});

