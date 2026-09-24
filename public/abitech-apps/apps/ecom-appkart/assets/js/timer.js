/********************** 
  timer js start
***********************/
// /***** CALCULATE THE TIME REMAINING *****/
// function getTimeRemaining(endtime) {
//   var t = Date.parse(endtime) - Date.parse(new Date());

//   /***** CONVERT THE TIME TO A USEABLE FORMAT *****/
//   var seconds = Math.floor((t / 1000) % 60);
//   var minutes = Math.floor((t / 1000 / 60) % 60);
//   var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
//   // var days = Math.floor(t / (1000 * 60 * 60 * 24));

//   /***** OUTPUT THE CLOCK DATA AS A REUSABLE OBJECT *****/
//   return {
//     total: t,
//     //  'days': days,
//     hours: hours,
//     minutes: minutes,
//     seconds: seconds,
//   };
// }

// // /***** DISPLAY THE CLOCK AND STOP IT WHEN IT REACHES ZERO *****/
// function initializeClock(id, endtime) {
//   var clock = document.getElementById(id);
//   // var daysSpan = clock.querySelector('.days');
//   var hoursSpan = clock.querySelector(".hours");
//   var minutesSpan = clock.querySelector(".minutes");
//   var secondsSpan = clock.querySelector(".seconds");

//   function updateClock() {
//     var t = getTimeRemaining(endtime);

//     // daysSpan.innerHTML = t.days;
//     hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
//     minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
//     secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

//     if (t.total <= 0) {
//       clearInterval(timeinterval);
//     }
//   }

//   updateClock(); // run function once at first to avoid delay
//   var timeinterval = setInterval(updateClock, 1000);
// }

// // /***** SET A VALID END DATE *****/
// var deadline = new Date(Date.parse(new Date()) + 5 * 60 * 60 * 1000);
// initializeClock("clock", deadline);



/* =====================
Cab-Booking Time JS
========================*/
document.querySelectorAll('.pickup-time-list li').forEach((li, i) => {
  const [up, down] = li.querySelectorAll('.up-btn');
  const valEl = li.querySelector('h5');

  const pad = v => v.toString().padStart(2, '0');

  const update = dir => {
    let val = valEl.innerText;

    if (i === 0) {
      let h = parseInt(val) + (dir === 'up' ? 1 : -1);
      valEl.innerText = pad(h > 12 ? 1 : h < 1 ? 12 : h);
    } else if (i === 1) {
      let m = parseInt(val) + (dir === 'up' ? 1 : -1);
      valEl.innerText = pad(m > 59 ? 0 : m < 0 ? 59 : m);
    } else {
      valEl.innerText = val === 'AM' ? 'PM' : 'AM';
    }
  };

  up.addEventListener('click', () => update('up'));
  down.addEventListener('click', () => update('down'));
});