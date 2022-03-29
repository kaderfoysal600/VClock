let edit = document.querySelector(".edit");
let countStart = document.querySelector('.start')
let reset = document.querySelector('.reset')
let editWindow = document.querySelector('.edit-timer')
let editClose = document.querySelector('#edit-close')
let hourInput = document.getElementById('hour-input')
let minuteInput = document.getElementById('minute-input')
let secondInput = document.getElementById('second-input')
let displayHour = document.getElementById('hour-value')
let displayMinute = document.getElementById('minute-value')
let displaySecond = document.getElementById('second-value')
let editStart = document.querySelector('.edit-start')
let editCancel = document.querySelector('.edit-cancel')


let hour = 00
let minute = 00
let second = 00

let startTime = null
const editFunc = () => {
  if(editWindow.style.display === 'none' ){
    editWindow.style.display = 'block'
  } else {
    editWindow.style.display = 'none'
  }

};
const startTimer = () => {
  editFunc()
  if(hour <= 0 && minute <= 0 && second <= 0){
    displayHour.innerHTML = 00;
    displayMinute.innerHTML = 00;
    displaySecond.innerHTML = 00;
  } else {
    displayHour.innerHTML = hour;
    displayMinute.innerHTML = minute;
    displaySecond.innerHTML = second;
  }
  
}

const timer = () => {
  if(hour <= 0 && minute <= 0 && second <= 0) {
    hour = 00 ,
    minute = 00,
    second = 00,
    displayHour.innerHTML = hour;
    displayMinute.innerHTML = minute;
    displaySecond.innerHTML = second;
  } else if (second != 0 ) {
    second--
    displaySecond.innerHTML = second
  } else if (minute!=0 && second == 0) {
    second = 59;
    displaySecond.innerHTML = second
    minute--
    displayMinute.innerHTML = minute
  } else if (hour!=0 && minute ==0){
    minute = 60;
    displayMinute.innerHTML = minute
    hour--
    displayHour.innerHTML = hour
  }
  return;
}

reset.addEventListener('click', function(){
  hour = 0;
  minute = 0;
  second = 0;
  stopInterval()
})
function stopInterval() {
  clearInterval(startTimer);
}

function startInterval(){
  countStart.disabled = true
  startTime = setInterval(function() {
      timer();
  }, 1000);
}
edit.addEventListener("click", editFunc);
editClose.addEventListener('click', editFunc)
editCancel.addEventListener('click', editFunc)
editStart.addEventListener('click', startTimer)
countStart.addEventListener('click', startInterval)


hourInput.addEventListener('change', (e)=> hour = e.target.value)
minuteInput.addEventListener('change', (e)=> minute = e.target.value)
secondInput.addEventListener('change', (e)=> second = e.target.value)