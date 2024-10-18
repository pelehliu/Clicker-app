// PELEHS STUDENT COUNTER
var counter = 0
var autoClick = false
var intervalId;
function increment(){
  counter++
  document.getElementById("count-el").innerText = counter;
}

function save(){
    saves = document.getElementById("prev")
    saves.innerHTML += counter + " - "
}

function reset(){
    counter=0;
    document.getElementById("count-el").innerText = counter;
}

function auto(){
    autoClick = !autoClick
    if (autoClick){
        intervalId=setInterval(increment, 100)
    }
    else {
        clearInterval(intervalId)
    }
}
