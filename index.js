const startButton = document.querySelector("#start");

const time = document.querySelector("#time");

const scoreDisplay = document.querySelector('#score');

let countDownTime = 20;

let score = 0;

const setTimer = (e) => {

  e.preventDefault();
  
  startButton.setAttribute('disabled', 'true')

  const moleTimer = setInterval(()=>{
    const moleSelector1 = Math.floor(Math.random()*23+1)
    const moleSelector2 = Math.floor(Math.random()*23+1)
    const moleSelector3 = Math.floor(Math.random()*23+1)
    const moleSelector4 = Math.floor(Math.random()*23+1)
    const moleSelector5 = Math.floor(Math.random()*23+1)
  
    const mole1 = document.querySelector(`#mole${moleSelector1}`)
    const mole2 = document.querySelector(`#mole${moleSelector2}`)
    const mole3 = document.querySelector(`#mole${moleSelector3}`)
    const mole4 = document.querySelector(`#mole${moleSelector4}`)
    const mole5 = document.querySelector(`#mole${moleSelector5}`)
  
    mole1.innerHTML = 'o' 
    mole2.innerHTML = 'o'
    mole3.innerHTML = 'o'
    mole4.innerHTML = 'o'
    mole5.innerHTML = 'o'

    
    // mole1.onclick = function(){
    //   mole1.innerHTML = 'x'
    //   score++
    //   console.log(score)
    // }
    // mole2.onclick = function(){
    //   mole2.innerHTML = 'x'
    //   score++
    //   console.log(score)
    // }
    // mole3.onclick = function(){
    //   mole3.innerHTML = 'x'
    //   score++
    //   console.log(score)
    // }
    // mole4.onclick = function(){
    //   mole4.innerHTML = 'x'
    //   score++
    //   console.log(score)
    // }
    // mole5.onclick = function(){
    //   mole5.innerHTML = 'x'
    //   score++
    //   console.log(score)
    // }

    const mole1AddScore = () => {
      mole1.innerHTML = 'x'
      score++
      mole1.removeEventListener('click', mole1AddScore)
      console.log(score)
      scoreDisplay.innerHTML = `${score}`;
    }
    
    mole1.addEventListener('click', mole1AddScore)
    
    const mole2AddScore = () => {
      mole2.innerHTML = 'x'
      score++
      mole2.removeEventListener('click', mole2AddScore)
      console.log(score)
      scoreDisplay.innerHTML = `${score}`;
    }
    
    mole2.addEventListener('click', mole2AddScore)

    const mole3AddScore = () => {
      mole3.innerHTML = 'x'
      score++
      mole3.removeEventListener('click', mole3AddScore)
      console.log(score)
      scoreDisplay.innerHTML = `${score}`;
    }
    
    mole3.addEventListener('click', mole3AddScore)

    const mole4AddScore = () => {
      mole4.innerHTML = 'x'
      score++
      mole4.removeEventListener('click', mole4AddScore)
      console.log(score)
      scoreDisplay.innerHTML = `${score}`;
    }
    
    mole4.addEventListener('click', mole4AddScore)

    const mole5AddScore = () => {
      mole5.innerHTML = 'x'
      score++
      mole5.removeEventListener('click', mole5AddScore)
      console.log(score)
      scoreDisplay.innerHTML = `${score}`;
    }
    
    mole5.addEventListener('click', mole5AddScore)
    

    setTimeout(()=>{
      mole1.innerHTML = 'x'
      mole2.innerHTML = 'x'
      mole3.innerHTML = 'x'
      mole4.innerHTML = 'x'
      mole5.innerHTML = 'x'
    }, 2000)
  },2000)

  const countDown = setInterval(() => {
    countDownTime--;
    time.innerHTML = `${countDownTime}`;
    if (countDownTime <= 0) {
      clearInterval(countDown);
      clearInterval(moleTimer);
      startButton.removeAttribute('disabled')

    }
  }, 1000);

};

startButton.addEventListener("click", setTimer);

// scoreDisplay.innerHTML = `${score}`;

  




