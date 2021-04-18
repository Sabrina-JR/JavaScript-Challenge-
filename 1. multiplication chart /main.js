const number = document.querySelector('header')
console.log(number)

function countnum(){
    for(let i=2; i<10; i++){
        const box = document.createElement('div');
        box.setAttribute('class','box');
        number.appendChild(box)
        
        const chart = document.createElement('div');
        chart.setAttribute('class','chart')
        box.appendChild(chart)

        const title = document.createElement('div');
        title.setAttribute('class','title')
        title.textContent = i;
        chart.appendChild(title);
        

        for(let j= 1; j< 10; j++){
            const answer = i * j
            const list = document.createElement('div')
            list.setAttribute('class','num')
            list.textContent = `${i} x ${j} = ${answer}`;
            chart.appendChild(list);

        }


    }
}

countnum();
