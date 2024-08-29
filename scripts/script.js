let $ = document;
let hourPointer = $.querySelector(".pointer--hour");
let minutePointer = $.querySelector(".pointer--minute");
let secondPointer = $.querySelector(".pointer--second");

setInterval(() => {
  let hourDegree = +new Date().getHours() * 30 - 90;
  hourDegree += (new Date().getMinutes() / 60) * 15;
  let minuteDegree = +new Date().getMinutes() * 6 - 90;
  let secondDegree = +new Date().getSeconds() * 6 - 90;
  hourPointer.style.transform = `rotate(${hourDegree}deg)`;
  minutePointer.style.transform = `rotate(${minuteDegree}deg)`;
  secondPointer.style.transform = `rotate(${secondDegree}deg)`;
}, 1000);
