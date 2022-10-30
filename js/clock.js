// clock.js
// Simple clock that displays current time in HH:MM AM|PM DAY format.
// Japanese days and AM | PM are used instead by default with an option
// to switch to English days and AM | PM by double clicking the clock.

// Global const variables
const ENGLISH_DAYS = ["Su", "M", "T", "W", "Th", "F", "S"];
const JAPANESE_DAYS = ["日", "月", "火", "水", "木", "金", "土"];
const JAPANESE_AMPM = ["午前", "午後"];
const ENGLISH_AMPM = ["am", "pm"];

// Language display flag
let setToEnglish = false;

// Main function
function displayTime() {
  let date = new Date();
  let hour = setHour(date.getHours());
  let minute =
    date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  let midday = setMidday(date.getHours());
  let day = setToEnglish
    ? ENGLISH_DAYS[date.getDay()]
    : JAPANESE_DAYS[date.getDay()];

  document.getElementById("clock").innerText = `${hour}:${minute}`;
  document.getElementById("clock-info").innerText = `${midday} ${day}`;
}

function setHour(hour) {
  if (hour === 0) {
    return 12;
  }
  if (hour > 12) {
    hour -= 12;
  }
  return hour < 10 ? "0" + hour : hour;
}

function setMidday(hour) {
  if (hour >= 12) return setToEnglish ? ENGLISH_AMPM[1] : JAPANESE_AMPM[1];
  return setToEnglish ? ENGLISH_AMPM[0] : JAPANESE_AMPM[0];
}

setInterval(displayTime, 1000);
displayTime();

function setLanguage() {
  setToEnglish = !setToEnglish;
}
