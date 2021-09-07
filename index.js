import { moleTimerFunc } from "./modules/moleTimerFunc.js";
import { countDownFunc} from "./modules/countDownFunc.js";

const startButton = document.querySelector("#start");
const time = document.querySelector("#time");
const scoreDisplay = document.querySelector("#score");

if (sessionStorage.getItem("time")) {
  time.innerHTML = sessionStorage.getItem("time");
  scoreDisplay.innerHTML = sessionStorage.getItem("score");

  let countDownTime = time.innerHTML;
  let score = scoreDisplay.innerHTML;

  startButton.setAttribute("disabled", "true");

  const moleTimer = setInterval(moleTimerFunc(score, scoreDisplay), 2000);

  
  const countDown = setInterval(
    countDownFunc(
      countDownTime,
      time,
      startButton,
      moleTimer,
      scoreDisplay
    ),
    1000
  );

  setTimeout(() => {
    clearInterval(countDown)
  }, countDownTime*1000);


  
}

const setTimer = () => {
  let countDownTime = 60;
  let score = 0;

  time.innerHTML = countDownTime;
  scoreDisplay.innerHTML = score;

  startButton.setAttribute("disabled", "true");

  const moleTimer = setInterval(moleTimerFunc(score, scoreDisplay), 2000);

  const countDown = setInterval(
    countDownFunc(
      countDownTime,
      time,
      startButton,
      moleTimer,
      scoreDisplay
    ),
    1000
  );

    setTimeout(() => {
      clearInterval(countDown)
    }, countDownTime*1000);



};

startButton.addEventListener("click", setTimer);
