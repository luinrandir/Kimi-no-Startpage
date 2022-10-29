// Clock

const jDays = ["日", "月", "火", "水", "木", "金", "土"];
setInterval(showTime, 1000);

function showTime() {
  let time = new Date();
  let hour = time.getHours() > 12 ? time.getHours() - 12 
    : time.getHours() === 0 ?  "12"
    : "0" + time.getHours();

  let min = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
  let am_pm = time.getHours() > 12 ? "PM" : "AM";
  let current_time = hour + ":" + min + am_pm;
  document.getElementById("clock").innerHTML =
  current_time + " " + jDays[time.getDay()];
}

showTime();
