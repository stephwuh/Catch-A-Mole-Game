const startButton = document.querySelector("#start");

const time = document.querySelector("#time");

let countDownTime = 20;

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


  







