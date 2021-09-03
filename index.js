const startButton = document.querySelector("#start");

const time = document.querySelector("#time");

let countDownTime = 20;

const setTimer = (e) => {
  e.preventDefault();
  startButton.setAttribute('disabled', 'true')
  const countDown = setInterval(() => {
    countDownTime--;
    time.innerHTML = `${countDownTime}`;
    if (countDownTime < 1) {
      clearInterval(countDown);
      startButton.removeAttribute('disabled')
    }
  }, 1000);

};

startButton.addEventListener("click", setTimer);


// const mole1 = document.querySelector('#mole1')
// const mole2 = document.querySelector('#mole2')
// const mole3 = document.querySelector('#mole3')
// const mole4 = document.querySelector('#mole4')
// const mole5 = document.querySelector('#mole5')
// const mole6 = document.querySelector('#mole6')
// const mole7 = document.querySelector('#mole7')
// const mole8 = document.querySelector('#mole8')
// const mole9 = document.querySelector('#mole9')
// const mole10 = document.querySelector('#mole10')
// const mole11 = document.querySelector('#mole12')
// const mole12 = document.querySelector('#mole12')
// const mole13 = document.querySelector('#mole13')
// const mole14 = document.querySelector('#mole14')
// const mole15 = document.querySelector('#mole15')
// const mole16 = document.querySelector('#mole16')
// const mole17 = document.querySelector('#mole17')
// const mole18 = document.querySelector('#mole18')
// const mole19 = document.querySelector('#mole19')
// const mole20 = document.querySelector('#mole20')
// const mole21 = document.querySelector('#mole21')
// const mole22 = document.querySelector('#mole22')
// const mole23 = document.querySelector('#mole23')
// const mole24 = document.querySelector('#mole24')

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
  
    setInterval(()=>{
      mole1.innerHTML = 'x'
      mole2.innerHTML = 'x'
      mole3.innerHTML = 'x'
      mole4.innerHTML = 'x'
      mole5.innerHTML = 'x'
    }, 2000)
    
  
  },2000)







