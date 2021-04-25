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
    let SiteNameValue;
   
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
               if(AQI !== ''){
                   str+=`<div class="showareabox">
                   <div class="showbox1">${Data[i].SiteName}</div>
                   <div class="showbox2">${Data[i].AQI}</div>
               </div>`
               }
            }
        }
        showarea.innerHTML = str;
        let AQIcolor = document.querySelectorAll('.showbox2')
        for(let j=0; j<AQIcolor.length; j++){
            let AQIText = AQIcolor[j].innerText;
            if (AQIText <= 50) {
                AQIcolor[j].setAttribute('style', 'background: #95F084;');
            } else if (AQIText >= 51 && AQIText <= 100) {
                AQIcolor[j].setAttribute('style', 'background: #FFE695;');
            } else if (AQIText >= 101 && AQIText <= 150) {
                AQIcolor[j].setAttribute('style', 'background: #FFAF6A;');
            } else if (AQIText >= 151 && AQIText <= 200) {
                AQIcolor[j].setAttribute('style', 'background: #FF5757;');
            } else if (AQIText >= 201 && AQIText <= 300) {
                AQIcolor[j].setAttribute('style', 'background: #9777FF;');
            } else if (AQIText >= 301 && AQIText <= 400) {
                AQIcolor[j].setAttribute('style', 'background: #AD1774;');
            }
        }

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


    let AreaList = document.querySelector('.showbox1')
    let SiteName = document.querySelector('.aoit1')
    let AQIselect =  document.querySelector('.aoit2')
    let O3 = document.querySelector('.O3')
    let PM10 = document.querySelector('.PM10')
    let PM25 = document.querySelector('.PM25')
    let CO = document.querySelector('.CO')
    let SO = document.querySelector('.SO')
    let NO = document.querySelector('.NO')

    let dataSiteName = () =>{
        if(!SiteNameValue){
            SiteNameValue = '基隆';
        }

        for(let i=0; i<Data.length; i++){
            if(SiteNameValue === Data[i].SiteName){
                SiteName.innerText = Data[i].SiteName;
                if(Data[i].AQI ===''){
                    AQIselect.innerHTML ='';
                    O3.innerHTML = '';
                    PM10.innerHTML = '';
                    PM25.innerHTML = '';
                    CO.innerHTML = '';
                    SO.innerHTML = '';
                    NO.innerHTML = '';
                    AOIselect.setAttribute('style','background: none;')
                }else{
                    AQIselect.innerHTML = Data[i].AQI;
                    O3.innerHTML = Data[i].O3;
                    PM10.innerHTML = Data[i].PM10;
                    PM25.innerHTML = Data[i]['PM2.5'];
                    CO.innerHTML = Data[i].CO;
                    SO.innerHTML = Data[i].SO2;
                    NO.innerHTML = Data[i].NO2;
                    
                    let AQIText = AQIselect.innerText;
                    console.log(AQIText)
                    if (AQIText <= 50) {
                        AQIselect.setAttribute('style', 'background: #95F084;');
                    } else if (AQIText >= 51 && AQIText <= 100) {
                        AQIselect.setAttribute('style', 'background: #FFE695;');
                    } else if (AQIText >= 101 && AQIText <= 150) {
                        AQIselect.setAttribute('style', 'background: #FFAF6A;');
                    } else if (AQIText >= 151 && AQIText <= 200) {
                        AQIselect.setAttribute('style', 'background: #FF5757;');
                    } else if (AQIText >= 201 && AQIText <= 300) {
                        AQIselect.setAttribute('style', 'background: #9777FF;');
                    } else if (AQIText >= 301 && AQIText <= 400) {
                        AQIselect.setAttribute('style', 'background: #AD1774;');
                    }
                }
            }
        }
    }  

    dataSiteName();



    let Select_SiteName = (e) =>{
    SiteNameValue = e.target.innerText;
    console.log(SiteNameValue)
    dataSiteName();
    }

    AreaList.addEventListener('click',Select_SiteName);

});

promise.catch((error)=>{
    console.log(error)
});

