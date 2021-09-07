

export const countDownFunc = (countDownTime, time, startButton, moleTimer, scoreDisplay) => {

    return function(){

        countDownTime--;

        time.innerHTML = `${countDownTime}`;
    
        sessionStorage.setItem("time", time.innerHTML);
        sessionStorage.setItem("score", scoreDisplay.innerHTML);

        if (countDownTime <= 0) {

          clearInterval(moleTimer);

          startButton.removeAttribute("disabled");
    
          sessionStorage.removeItem("time");
          sessionStorage.removeItem("score");
    
        }
    }
  }
