let hour=document.getElementById('hour')
let minute=document.getElementById('minute')
let seconds=document.getElementById('seconds')



console.log(hour,minute,seconds)
setInterval(() => {
    let HourTime=new Date().getHours()
    let SecondTime=new Date().getSeconds()
    let MinuteTime=new Date().getMinutes()


    if(SecondTime<10){
    seconds.innerHTML="0"+SecondTime
    }
    else{

        seconds.innerHTML=SecondTime
    }
    
    if(MinuteTime<10){
        minute.innerHTML="0"+MinuteTime
        }else{
            minute.innerHTML=MinuteTime

        }

    if(HourTime<10){
            hour.innerHTML="0"+HourTime
            }else{

                hour.innerHTML=HourTime   
            }

    // console.log(time)
}, 1000);

