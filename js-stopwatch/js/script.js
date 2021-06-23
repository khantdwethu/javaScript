const htmltag = document.getElementById("stopwatch");
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const continueBtn = document.getElementById("continue");
const miliDiv =document.getElementsByClassName("mili")[0];
const reset = document.getElementsByClassName("btn")[3];
let myTime;
var mili = 0;
var seconds = 0;   
var minute = 0;
var hour = 0;
var watch = ()=> {
    mili += 100;
    if(mili === 1000){
        mili = 0;

        seconds +=1;
    if(seconds === 60){
        seconds = 0;
        
        minute += 1;
        if(minute === 60){
            minute = 0;
  
            hour += 1;
            if(hour === 60){
                hour = 0;
  
            }
          }
      }
    }
    
    const hourText = hour >= 10 ? hour : "0"+hour;
    const minuteText = minute >= 10 ? minute : "0"+minute;
    const secondText = seconds >= 10 ? seconds : "0"+seconds;
    const miliText = mili >= 100 ? mili : mili >= 10 ? "0" + mili : "00"+mili;
    htmltag.innerHTML=hourText + ":" + minuteText + ":" + secondText;
    miliDiv.innerHTML = miliText;

} 


start.addEventListener("click",()=>{
    clearInterval(myTime);
    myTime = setInterval(watch,100);
})

pause.addEventListener("click",()=>{
    clearInterval(myTime);
})

continueBtn.addEventListener("click",()=>{
    clearInterval(myTime);
    myTime = setInterval(watch,100);
 })

 reset.addEventListener("click",()=>{  
    seconds = 0;   
    minute = 0;
    hour = 0;
    mili = 0;
    clearInterval(myTime);
    console.log(myTime,seconds,minute,hour);
    myTime = setInterval(watch,100);
 })