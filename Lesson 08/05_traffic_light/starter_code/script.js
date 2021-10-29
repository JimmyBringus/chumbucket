// Try making the traffic light work - Think through the problem BEFORE you code!
// You'll use addEventListener and getElementById if you're doing it right...

let redLight = document.getElementById("stopButton");

let yellowLight = document.getElementById("slowButton");

let greenLight = document.getElementById("goButton");

redLight.addEventListener("click",

function(){
    document.getElementById("stopLight").classList.add("red")
});

yellowLight.addEventListener("click",

function(){
    document.getElementById("slowLight").classList.add("yellow")
});

greenLight.addEventListener("click",

function(){
    document.getElementById("stopLight").classList.add("red")
});
