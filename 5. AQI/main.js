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

