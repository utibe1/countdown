// getdate = () => {
//   const myDate = document.getElementById('date-field').value;
//   console.log(myDate);
// };

const countdown = () => {
  const myDate = document.getElementById('date-field').value;
  const countDate = new Date(myDate).getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  // how time works
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);
  document.querySelector('.day').innerHTML = textDay;
  document.querySelector('.hour').innerHTML = textHour;
  document.querySelector('.minute').innerHTML = textMinute;
  document.querySelector('.second').innerHTML = textSecond;
  console.log(countdown);
};

setInterval(countdown, 1000);

const date = new Date();
