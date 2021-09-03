const startButton = document.querySelector("#start");

const time = document.querySelector("#time");

let countDownTime = 5;

export const setTimer = (e) => {
  e.preventDefault();
  startButton.setAttribute('disabled', 'true')
  setInterval(() => {
    countDownTime--;
    time.innerHTML = `${countDownTime}`;
    if (countDownTime <= 0) {
      clearInterval(countDown);
      startButton.removeAttribute('disabled')
    }
  }, 1000);

};

startButton.addEventListener("click", setTimer);
