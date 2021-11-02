import { moleTimerFunc } from "./modules/moleTimerFunc.js";

const startButton = document.querySelector("#start");
const time = document.querySelector("#time");
const scoreDisplay = document.querySelector("#score");

export const startGame = () => {

  let isRefreshed = false;

  //Checks whether or not the browser has been refreshed.

  if (sessionStorage.getItem("time")) {
    isRefreshed = true;
  }

  /*
  If the browser was refreshed, time and score information is retrieved from session storage.
  Otherwise, time and score start at 60 seconds and 0 points respectively.
  */

  let countDownTime = isRefreshed ? sessionStorage.getItem("time") : 60;
  let score = isRefreshed ? sessionStorage.getItem("score") : 0;

  time.innerHTML = countDownTime;
  scoreDisplay.innerHTML = score;

  //Start button is disabled once the game starts.

  startButton.setAttribute("disabled", "true");

  /* 
  'moleTimer' sets the interval for moles to appear and disappear every 2 seconds.
  I modularize the setInterval function, to make it easier to test in the future.
  */
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

    /*
    once countdown time hits 0, setIntervals in progress are cleared, 
    start button is reactivated, and time and score information is cleared from session storage
    so the program does not think the browser has been refreshed. 
    */

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
