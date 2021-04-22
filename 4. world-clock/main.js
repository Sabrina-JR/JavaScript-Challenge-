

let setclock = () =>{

    const list = document.querySelector('.allcountry')

    //國家
    const country = ['NEW YORK', 'LONDON', 'BANGKOK', 'TAIWAN', 'SYDNEY'];
    //月份
    const month = ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'];
    let nowMonth = new Date;


    let NEWYORK = new Date().toLocaleString('en-us', {timeZone: 'America/New_York', hour12: false});
    let LONDON = new Date().toLocaleString('en-us', {timeZone: 'Europe/London', hour12: false});
    let BANGKOK = new Date().toLocaleString('en-us', {timeZone: 'Asia/Bangkok', hour12: false});
    let TAIWAN= new Date().toLocaleString('en-us', {timeZone: 'Asia/Taipei', hour12: false});
    let SYDNEY = new Date().toLocaleString('en-us', {timeZone: 'Australia/Sydney', hour12: false});

    let timeary = [NEWYORK,LONDON,BANGKOK,TAIWAN,SYDNEY]


    let getYear = [];
    let getDay = [];
    let getTime = [];
    let getMonthName = [];
    let str = '';
    
    for(let i=0; i<timeary.length; i++){
        let getitem = timeary[i].split(',')//分割
        let fulldate = getitem.slice(0,1) + ''; //只取日月  
        let monthname = month[nowMonth.getMonth()]//抓取當月份
        let year_day = fulldate.split('/').slice(1) 
    
        getDay.push(year_day.slice(0,1))//只取日期
        getYear.push(year_day.splice(1))//只取當年
        getMonthName.push(monthname)
    
        let felltime = getitem.slice(1)+'';
        getTime.push(felltime.split(':').slice(0,2).join(':'))//捨去秒數
    
        str+=`
        <div class="list">
            <div class="box">
                <div class="date">
                  <div class="country">${country[i]}</div>
                  <p>
                   <span>${getDay[i]}</span>
                   <span>${getMonthName[i]}</span>
                   <span>${getYear[i]}</span>
                 </p>
                </div>
    
                <div class="time">${getTime[i]}</div>
           </div>
        </div>
        `   
    }
    list.innerHTML = str;
}


let UpdateTime = () =>{
    setclock();
    setTimeout(UpdateTime, 1000);
}

setTimeout(UpdateTime, 1000);