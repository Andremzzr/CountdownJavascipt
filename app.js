var display = document.getElementById('display');

var minutes = document.getElementById('minutos');
var seconds = document.getElementById('segundos');

var start = document.getElementById('start');

var countdownSeconds;

var secondsNow;
var minutesNow;


var Interval;


for (let i = 0; i <= 60; i++) {
    minutes.innerHTML+='<option value="'+i+'">'+i+'</option>';
    
}

for (let i = 1; i <= 60; i++) {
    seconds.innerHTML+='<option value="'+i+'">'+i+'</option>';
    
}

start.addEventListener('click',function(){
    minutesNow = minutes.value;
    secondsNow = seconds.value;

     //  VERIFYING THE SECONDS DISPLAY
     if (secondsNow < 10) {
        secondsToDisplay = '0'+secondsNow;
    }
    else{
        secondsToDisplay = secondsNow;
    }
    // VERIFYING THE MINUTES DISPLAY
    if(minutesNow < 10){
        minutesToDisplay = '0'+minutesNow;
        
    }
    else{
        minutesToDisplay = minutesNow;
    }

    display.childNodes[1].innerHTML = minutesToDisplay + ":" + secondsToDisplay;

    interval = setInterval(function(){
        
        secondsNow--;   
        if (secondsNow <= 0 ) {
            if (minutesNow > 0 ) {
                minutesNow--;
                secondsNow = 59;
            }
            else{
                alert("Acabou");
                document.getElementById('sound').play();
                clearInterval(interval);
            }
        }
            //  VERIFYING THE SECONDS DISPLAY
            if (secondsNow < 10) {
                secondsToDisplay = '0'+secondsNow;
            }
            else{
                secondsToDisplay = secondsNow;
            }
            // VERIFYING THE MINUTES DISPLAY
            if(minutesNow < 10){
                minutesToDisplay = '0'+minutesNow;
                
            }
            else{
                minutesToDisplay = minutesNow;
            }

        display.childNodes[1].innerHTML = minutesToDisplay + ":" + secondsToDisplay;
    },1000);

})