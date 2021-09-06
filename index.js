const startButton = document.querySelector("#start");
const time = document.querySelector("#time");
const scoreDisplay = document.querySelector("#score");



if (sessionStorage.getItem("time")) {


  startButton.setAttribute("disabled", "true");

  time.innerHTML = sessionStorage.getItem("time");
  scoreDisplay.innerHTML = sessionStorage.getItem("score");

  let countDownTime = time.innerHTML;
  let score = scoreDisplay.innerHTML;

  

  const moleTimer = setInterval(() => {
    const moleSelector1 = Math.floor(Math.random() * 23 + 1);
    const moleSelector2 = Math.floor(Math.random() * 23 + 1);
    const moleSelector3 = Math.floor(Math.random() * 23 + 1);
    const moleSelector4 = Math.floor(Math.random() * 23 + 1);
    const moleSelector5 = Math.floor(Math.random() * 23 + 1);

    const mole1 = document.querySelector(`#mole${moleSelector1}`);
    const mole2 = document.querySelector(`#mole${moleSelector2}`);
    const mole3 = document.querySelector(`#mole${moleSelector3}`);
    const mole4 = document.querySelector(`#mole${moleSelector4}`);
    const mole5 = document.querySelector(`#mole${moleSelector5}`);

    mole1.innerHTML = "o";
    mole2.innerHTML = "o";
    mole3.innerHTML = "o";
    mole4.innerHTML = "o";
    mole5.innerHTML = "o";

    const mole1AddScore = () => {
      if(mole1.innerHTML === 'o'){
        mole1.innerHTML = "";
        score++;
        scoreDisplay.innerHTML = `${score}`;
      }
    };

    mole1.addEventListener("click", mole1AddScore);
    

    const mole2AddScore = () => {
      if(mole2.innerHTML === 'o'){
        mole2.innerHTML = "";
        score++;      
        scoreDisplay.innerHTML = `${score}`;
      }
    };

    mole2.addEventListener("click", mole2AddScore);
    

    const mole3AddScore = () => {
      if(mole3.innerHTML === 'o'){
        mole3.innerHTML = "";
        score++;
        scoreDisplay.innerHTML = `${score}`;
      }
    };

    mole3.addEventListener("click", mole3AddScore);
    

    const mole4AddScore = () => {
      if(mole4.innerHTML === 'o'){
        mole4.innerHTML = "";
        score++;
        scoreDisplay.innerHTML = `${score}`;
        
      }
     
    };

    mole4.addEventListener("click", mole4AddScore);
    

    const mole5AddScore = () => {
      if(mole5.innerHTML === 'o'){
        mole5.innerHTML = "";
        score++;
        scoreDisplay.innerHTML = `${score}`;
      }
    };

    mole5.addEventListener("click", mole5AddScore);
    

    setTimeout(() => {
      mole1.innerHTML = "x";
      mole2.innerHTML = "x";
      mole3.innerHTML = "x";
      mole4.innerHTML = "x";
      mole5.innerHTML = "x";

      mole1.removeEventListener("click", mole1AddScore)
      mole2.removeEventListener("click", mole2AddScore)
      mole3.removeEventListener("click", mole3AddScore)
      mole4.removeEventListener("click", mole4AddScore)
      mole5.removeEventListener("click", mole5AddScore)

    }, 2000);
  }, 2000);

  const countDown = setInterval(() => {
    countDownTime--;

    time.innerHTML = `${countDownTime}`;

    sessionStorage.setItem("time", time.innerHTML);
    sessionStorage.setItem("score", scoreDisplay.innerHTML);

    console.log(sessionStorage);

    if (countDownTime <= 0) {
      clearInterval(countDown);
      clearInterval(moleTimer);
      startButton.removeAttribute("disabled");

      sessionStorage.removeItem("time");
      sessionStorage.removeItem("score");

      console.log(sessionStorage);
    }
  }, 1000);
}


const setTimer = (e) => {

  let countDownTime = 60;
  let score = 0;

  time.innerHTML = 60
  scoreDisplay.innerHTML = 0

  startButton.setAttribute("disabled", "true");

  const moleTimer = setInterval(() => {
    const moleSelector1 = Math.floor(Math.random() * 23 + 1);
    const moleSelector2 = Math.floor(Math.random() * 23 + 1);
    const moleSelector3 = Math.floor(Math.random() * 23 + 1);
    const moleSelector4 = Math.floor(Math.random() * 23 + 1);
    const moleSelector5 = Math.floor(Math.random() * 23 + 1);

    const mole1 = document.querySelector(`#mole${moleSelector1}`);
    const mole2 = document.querySelector(`#mole${moleSelector2}`);
    const mole3 = document.querySelector(`#mole${moleSelector3}`);
    const mole4 = document.querySelector(`#mole${moleSelector4}`);
    const mole5 = document.querySelector(`#mole${moleSelector5}`);

    mole1.innerHTML = "o";
    mole2.innerHTML = "o";
    mole3.innerHTML = "o";
    mole4.innerHTML = "o";
    mole5.innerHTML = "o";

    const mole1AddScore = () => {
      if(mole1.innerHTML === 'o'){
        mole1.innerHTML = "";
        score++;
        scoreDisplay.innerHTML = `${score}`;
      }
    };

    mole1.addEventListener("click", mole1AddScore);
    

    const mole2AddScore = () => {
      if(mole2.innerHTML === 'o'){
        mole2.innerHTML = "";
        score++;      
        scoreDisplay.innerHTML = `${score}`;
      }
    };

    mole2.addEventListener("click", mole2AddScore);
    

    const mole3AddScore = () => {
      if(mole3.innerHTML === 'o'){
        mole3.innerHTML = "";
        score++;
        scoreDisplay.innerHTML = `${score}`;
      }
    };

    mole3.addEventListener("click", mole3AddScore);
    

    const mole4AddScore = () => {
      if(mole4.innerHTML === 'o'){
        mole4.innerHTML = "";
        score++;
        scoreDisplay.innerHTML = `${score}`;
        
      }
     
    };

    mole4.addEventListener("click", mole4AddScore);
    

    const mole5AddScore = () => {
      if(mole5.innerHTML === 'o'){
        mole5.innerHTML = "";
        score++;
        scoreDisplay.innerHTML = `${score}`;
      }
    };

    mole5.addEventListener("click", mole5AddScore);
    

    setTimeout(() => {
      mole1.innerHTML = "x";
      mole2.innerHTML = "x";
      mole3.innerHTML = "x";
      mole4.innerHTML = "x";
      mole5.innerHTML = "x";

      mole1.removeEventListener("click", mole1AddScore)
      mole2.removeEventListener("click", mole2AddScore)
      mole3.removeEventListener("click", mole3AddScore)
      mole4.removeEventListener("click", mole4AddScore)
      mole5.removeEventListener("click", mole5AddScore)

    }, 2000);

  }, 2000);

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

      console.log(sessionStorage);
    }
  }, 1000);
};

startButton.addEventListener("click", setTimer);


