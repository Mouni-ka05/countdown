const startBtn = document.getElementById('start-btn');
const datetimeInput = document.getElementById('datetime-input');
const countdownDisplay = document.getElementById('countdown');
const message = document.getElementById('message');

let countdownInterval;

startBtn.addEventListener('click', () => {
  const inputValue = datetimeInput.value;

  if (!inputValue) {
    alert("Please select a valid date and time.");
    return;
  }

  const targetDate = new Date(inputValue);

  if (isNaN(targetDate.getTime())) {
    alert("Invalid date format.");
    return;
  }

  clearInterval(countdownInterval);
  countdownInterval = setInterval(() => updateCountdown(targetDate), 1000);
});

function updateCountdown(targetDate) {
  const now = new Date();
  const difference = targetDate - now;

  if (difference <= 0) {
    clearInterval(countdownInterval);
    countdownDisplay.innerHTML = `
      <p>00 Days</p>
      <p>00 Hours</p>
      <p>00 Minutes</p>
      <p>00 Seconds</p>`;
    message.textContent = "🎉 Countdown Complete!";
    return;
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  document.getElementById('days').textContent = formatTime(days);
  document.getElementById('hours').textContent = formatTime(hours);
  document.getElementById('minutes').textContent = formatTime(minutes);
  document.getElementById('seconds').textContent = formatTime(seconds);

  message.textContent = "";
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
