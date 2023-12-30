"use strict";

const daysEl = document.querySelector("#days");
const hoursEl = document.querySelector("#hours");
const minutesEl = document.querySelector("#minutes");

const secondsEl = document.querySelector("#seconds");
const secondsNewEl = document.querySelector("#seconds-new");
const secondsFlipperFrontEl = document.querySelector("#seconds-flipper-front");
// const secondsFlipperBackEl = document.querySelector('#seconds-flipper-back');

let days = 13;
let hours = 23;
let min = 59;
let sec = 59;

const setTimer = function (d, h, m, s) {
  daysEl.textContent = d;
  hoursEl.textContent = h;
  minutesEl.textContent = m;

  secondsEl.innerText = s;
  secondsNewEl.textContent = s;
  secondsFlipperFrontEl.textContent = s;
  // secondsFlipperBackEl.textContent = s;
};

const flipDown = function () {
  secondsFlipperFrontEl.textContent = sec;
  // secondsFlipperBackEl.textContent = sec;
  secondsEl.textContent = sec;

  setTimeout(() => {
    if (sec - 1 >= 0) sec = sec - 1;
    else sec = 59;
    secondsNewEl.textContent = sec;
  }, 2900);
};

// setTimer(days, hours, min, sec);

// const interval = setInterval(flipDown, 3000);
