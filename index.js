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

  // 'moleTimer' sets the interval for moles to appear and disappear every 2 seconds.

  const moleTimer = setInterval(moleTimerFunc(score, scoreDisplay), 2000);


  // 'countDown' sets the interval for the whole game

  const countDown = setInterval(() => {

    countDownTime--;

    time.innerHTML = `${countDownTime}`;


    /* 
    stores time and score information to session storage every second
    so we can use it to persist the game after the browser has been refreshed.
    */

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


/* 
checks whether or not the browser has been refreshed 
based on the presence or absence of information in session storage
*/

if (sessionStorage.getItem("time")) {
  startGame();
}
