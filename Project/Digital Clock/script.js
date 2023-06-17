const clock = document.querySelector("#clock");
const time = document.querySelector("#time");
const datee = document.querySelector("#date");

setInterval(function () {
  let date = new Date();
  time.innerHTML = date.toLocaleTimeString();
  datee.innerHTML = date.toDateString();
  
}, 1000);
