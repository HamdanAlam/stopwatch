var min = 0;
var sec=0;
var msec=0;
var minHeading= document.getElementById("min");
var secHeading= document.getElementById("sec");
var msecHeading= document.getElementById("msec");
var interval;

function timer(){
    msec++
    msecHeading.innerHTML=msec;
    if(msec>= 100){
        sec++
        msec=0;
        secHeading.innerHTML = sec;
    }else if(sec >= 60){
        min++;
        sec = 0;
        minHeading.innerHTML = min;

    }
}
function start(){
    interval=setInterval(timer,10)
    var btn=document.getElementById("start");
    btn.disabled = true

}
function pause(){
    clearInterval(interval)
    var btn=document.getElementById("start");
    btn.disabled = false
}
function reset(){
    min= "00";
    sec= "00";
    msec= "00";
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML=msec;
    pause();
    var btn=document.getElementById("start");
    btn.disabled = false

}
