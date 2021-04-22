//國家
const county = ['NEW YORK', 'LONDON', 'BANGKOK', 'TAIWAN', 'SYDNEY'];
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

for(let i=0; i<timeary.length; i++){
    let getitem = timeary[i].split(',')//分割
    let fulldate = getitem.slice(0,1) + ''; //只取日期  
    // console.log(getitem,fulldate)

    let monthname = month[nowMonth.getMonth()]//抓取當月份
    console.log(monthname)
}

