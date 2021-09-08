import { moleTimerFunc } from "./modules/moleTimerFunc.js";

const startButton = document.querySelector("#start");
const time = document.querySelector("#time");
const scoreDisplay = document.querySelector("#score");

const startGame = () => {
  
  let isRefreshed = false;

  if (sessionStorage.getItem("time")) {
    isRefreshed = true;
  }

  let countDownTime = isRefreshed ? sessionStorage.getItem("time") : 60;
  let score = isRefreshed ? sessionStorage.getItem("score") : 0;

  time.innerHTML = countDownTime;
  scoreDisplay.innerHTML = score;

  startButton.setAttribute("disabled", "true");

  const moleTimer = setInterval(moleTimerFunc(score, scoreDisplay), 2000);

  const countDown = setInterval(() => {

    countDownTime--;

    time.innerHTML = `${countDownTime}`;

    sessionStorage.setItem("time", time.innerHTML);
    sessionStorage.setItem("score", scoreDisplay.innerHTML);

    if (countDownTime <= 0) {

      clearInterval(countDown);
      clearInterval(moleTimer);

      startButton.removeAttribute("disabled");

      sessionStorage.removeItem("time");
      sessionStorage.removeItem("score");
    }
  }, 1000);

};

startButton.addEventListener("click", startGame);

if (sessionStorage.getItem("time")) {
  startGame();
}
