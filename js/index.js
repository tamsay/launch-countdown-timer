let daysValue = document.querySelector('#days-value');
let hoursValue = document.querySelector('#hours-value');
let minutesValue = document.querySelector('#minutes-value');
let secondsValue = document.querySelector('#seconds-value');


let getCurrentDate=()=>{
    let currentDate = new Date();
    let millisecValue = currentDate.getTime();

    let days = millisecValue/(24*3600*1000)
    let hours = millisecValue/(3600*1000)
    let minutes = millisecValue/(60*1000)
    let seconds = millisecValue/(1000)

    let result = {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
    }
    return result  
}

let getFutureDate=(year, month = 0, day =1)=>{

    let futureDate = new Date(year, month, day)
    let futureMillisecValue = futureDate.getTime()
    let futureDays = futureMillisecValue/(24*3600*1000)
    let futureHours = futureMillisecValue/(3600*1000)
    let futureMinutes = futureMillisecValue/(60*1000)
    let futureSeconds = futureMillisecValue/(1000) 

    let result = {
        days: futureDays,
        hours: futureHours,
        minutes: futureMinutes,
        seconds: futureSeconds,
    }
    return result
}

let getDateDetails=(current, future)=>{
    let day = future.days - current.days;
    let days = Math.floor(day)

    let hour = ((day - days)*24);
    let hours = Math.floor(hour)

    let minute = ((hour - hours)*60)
    let minutes = Math.floor(minute);

    let second = ((minute - minutes)*60);
    let seconds = Math.floor(second);

    let result = {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
    }

    return result
}

let displayResult = (data) =>{
    daysValue.innerText = data.days;
    hoursValue.innerText = data.hours;
    minutesValue.innerText = data.minutes;
    secondsValue.innerText = data.seconds;
}
setInterval(() => {
    displayResult(getDateDetails(getCurrentDate(), getFutureDate(2021, 0, 4)));

}, 1000);
