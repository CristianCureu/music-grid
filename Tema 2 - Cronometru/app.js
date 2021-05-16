// Selectors
const textMilis = document.querySelector(".textMilis");
const textSeconds = document.querySelector(".textSeconds");
const textMinutes = document.querySelector(".textMinutes");
const startBtn = document.querySelector("#startBtn");
const stopBtn = document.querySelector("#stopBtn");
const resetBtn = document.querySelector("#resetBtn");

// Variables declaration
let minute = 0;
let second = 0;
let millisecond = 0;

let cronometru;
// Event Listeners
startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", pause);
resetBtn.addEventListener("click", reset);

// Functions

function timer() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  if (minute == 60) {
    pause();
  }
  textSeconds.innerText = returnData(second);
  textMilis.innerText = returnData(millisecond / 10);
  textMinutes.innerText = returnData(minute);
}

function returnData(input) {
  return input >= 10 ? input : `0${input}`;
}

function start() {
  pause();
  cronometru = setInterval(() => {
    timer();
  }, 10);
}

function pause() {
  clearInterval(cronometru);
}

function reset() {
  hour = 0;
  minute = 0;
  second = 0;
  millisecond = 0;
  textMinutes.innerText = "00";
  textSeconds.innerText = "00";
  textMilis.innerText = "00";
}
