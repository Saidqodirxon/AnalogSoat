let hourEl = document.querySelector(".hour");
let minuteEl = document.querySelector(".minute");
let secondEl = document.querySelector(".second");
let timeEl = document.querySelector(".time");
let dateEl = document.querySelector(".date");
let toggle = document.querySelector(".toggle");

function setTime() {
  let time = new Date();
  let hours = time.getHours();
  let hoursForClock = hours >= 13 ? hours % 12 : hours;
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hoursForClock,
    0,
    12,
    0,
    360
  )}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    60,
    0,
    360
  )}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    60,
    0,
    360
  )}deg)`;
}

let scale = (num, minda, max, min, maxMin) => {
  return ((num - minda) * (maxMin - min)) / (max - minda) + min;
};

setTime();
setInterval(setTime, 1000);



let hozirgiSoat = () => {
  let now = new Date();
  let text = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;

  document.querySelector("#soat").textContent = `${text}`;
};

hozirgiSoat();
setInterval(hozirgiSoat, 1000);
