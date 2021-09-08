
export const moleTimerFunc = (score, scoreDisplay) => {

    return function(){
      
        /* 
        I first select 5 moles randomly out of 24 moles. 
        I do the +1, so 0 doesn't show up 
        */

        const moleSelector1 = Math.floor(Math.random() * 24 + 1);
        const moleSelector2 = Math.floor(Math.random() * 24 + 1);
        const moleSelector3 = Math.floor(Math.random() * 24 + 1);
        const moleSelector4 = Math.floor(Math.random() * 24 + 1);
        const moleSelector5 = Math.floor(Math.random() * 24 + 1);
    
        const mole1 = document.querySelector(`#mole${moleSelector1}`);
        const mole2 = document.querySelector(`#mole${moleSelector2}`);
        const mole3 = document.querySelector(`#mole${moleSelector3}`);
        const mole4 = document.querySelector(`#mole${moleSelector4}`);
        const mole5 = document.querySelector(`#mole${moleSelector5}`);

        /* 
        Out of the 5 moles, I choose how many moles to appear during the interval.
        Again, I do the +1 so 0 wont show up.
        */

        const numOfMoles = Math.floor(Math.random() * 5 + 1);  
    
        /* 
        I select the specific moles to appear based on the value of 'numOfMoles'
        */

        switch (numOfMoles){
          case 1:
            mole1.innerHTML = "o";;
            break;
          case 2:
            mole1.innerHTML = "o";
            mole2.innerHTML = "o";
            break;
          case 3:
            mole1.innerHTML = "o";
            mole2.innerHTML = "o";
            mole3.innerHTML = "o";
            break;
          case 4:
            mole1.innerHTML = "o";
            mole2.innerHTML = "o";
            mole3.innerHTML = "o";
            mole4.innerHTML = "o";
            break;
          case 5:
            mole1.innerHTML = "o";
            mole2.innerHTML = "o";
            mole3.innerHTML = "o";
            mole4.innerHTML = "o";
            mole5.innerHTML = "o";
            break; 
        }
    
        /*
        I then add eventlistners to the randomly chosen moles.
        If the user clicks on it, the 'o' dissappears and then increments the score.
        */

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
        
        /*
        Changes 'o' (mole) back to 'x' (mole house) and removes the event listeners.
        */
       
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
    }   
}