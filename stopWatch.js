const minute = document.querySelector("#minute");
const second = document.querySelector("#second");
const miliSecond = document.querySelector("#miliSecond");

const start = document.querySelector(".start");
const stopTimer = document.querySelector(".stop");
const reset = document.querySelector(".reset");

let m = 0;
let s = 0;
let ms = 0;

let timer = false;

const startFunc = () => {
  timer = true;
  stopWatch();
  start.disabled = true
};

const stopFunc = () => {
  timer = false;
  start.disabled = false
};

const resetFunc = () => {
  start.disabled = false
  timer = false;
  m = 0;
  s = 0;
  minute.innerHTML = "00";
  second.innerHTML = "00";
  miliSecond.innerHTML = "00";
};

reset.addEventListener("click", resetFunc);
start.addEventListener('click', startFunc)
stopTimer.addEventListener('click',stopFunc)
const stopWatch = () => {
  if (timer === true) {
    ms++;
    miliSecond.innerHTML = ms;

    if (ms == 100) {
      ms = 0;
      s++;
      miliSecond.innerHTML = ms;
      second.innerHTML = s;
    }
    if (s == 60) {
      s = 0;
      second.innerHTML = s;
      m++;
      minute.innerHTML = m;
    }
    setTimeout(() => {
      stopWatch();
    }, 10);
  }
};
