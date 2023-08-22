function myDigitalClock() {
  var date = new Date();
  var hours = date.getHours(); // 0 - 23
  var minutes = date.getMinutes(); // 0 - 59
  var seconds = date.getSeconds(); // 0 - 59
  var zone = "AM";

  // Convert hours to 12-hour format and determine AM/PM
  if (hours >= 12) {
    zone = "PM";
    if (hours > 12) {
      hours -= 12;
    }
  }

  // Add leading zero for single-digit minutes and seconds
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  // Display the time
  var timeString = hours + ":" + minutes + ":" + seconds + " " + zone;
  console.log(timeString);
}

myDigitalClock();

setInterval(myDigitalClock, 1000);
