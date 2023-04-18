const timeDisplay=document.querySelector("#timeDisplay");
const startBtn=document.querySelector("#startBtn");
const pauseBtn=document.querySelector("#pauseBtn");
const resetBtn=document.querySelector("#resetBtn");

let currentTime=0;
let paused=true;
let startTime=0;
let elpasedTime=0;
let hrs=0;
let mins=0;
let secs=0;
let intervalId;

startBtn.addEventListener("click",()=>{
// at the time of clicking start if pause was true now be false
    if(paused) {
        paused=false;
// Date.now() gives us the date and time in milliseconds
        startTime=Date.now()-elpasedTime;
// we have callback updateTime and it updates every 75 milliseconds
        intervalId=setInterval(updateTime,75);

    }
});
pauseBtn.addEventListener("click",()=>{
    if(!paused){
        paused=true;
        elpasedTime=Date.now()-startTime;
        clearInterval(intervalId);
    }

});
resetBtn.addEventListener("click",()=>{
    paused=true;
    clearInterval(intervalId);
    currentTime=0;
    startTime=0;
    elpasedTime=0;
    hrs=0;
    mins=0;
    secs=0;
    timeDisplay.textContent="00:00:00";
});

function updateTime(){
// Date.now()=elpasedTime+startTime;
    elpasedTime=Date.now()-startTime;
    secs=Math.floor((elpasedTime/1000 )%60);
    mins=Math.floor((elpasedTime/(1000 *60))%60);
    hrs=Math.floor((elpasedTime/(1000 *60*60))%60);

    hrs=pad(hrs);
    mins=pad(mins);
    secs=pad(secs);
    
    timeDisplay.textContent=`${hrs}:${mins}:${secs}`;
    function pad(unit){
        // here we use ternary operator
        return (("0")+unit).length >2 ?unit:"0"+unit;
    }
    

}