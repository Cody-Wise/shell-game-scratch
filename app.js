// import functions and grab DOM elements

const buttonOneEl = document.getElementById('shell-one-button');
const buttonTwoEl = document.getElementById('shell-two-button');
const buttonThreeEl = document.getElementById('shell-three-button');
const buttonResetEl = document.getElementById('reset-button');
const imageOneEl = document.getElementById('shell1-image');
const imageTwoEl = document.getElementById('shell2-image');
const imageThreeEl = document.getElementById('shell3-image');
const winsEl = document.getElementById('wins');
const lossesEl = document.getElementById('losses');
const totalEl = document.getElementById('total');


// let state
const hidingPlaces = [

    'shell1',
    'shell2',
    'shell3',

];

let wins = 0;
let total = 0;

function resetShells() {
    imageOneEl.src = './assets/shell.png';
    imageTwoEl.src = './assets/shell.png';
    imageThreeEl.src = './assets/shell.png';
}

function getRandomItem(hidingPlaces) {

    const index = Math.floor(Math.random() * hidingPlaces.length);

    return hidingPlaces[index];  
}





// set event listeners 

buttonOneEl.addEventListener('click', () => {
    resetShells();

    const correctSpot = getRandomItem(hidingPlaces);
  
    handleGuess('shell1', correctSpot);

    animation();


  
});

buttonTwoEl.addEventListener('click', () => {
    resetShells();

    const correctSpot = getRandomItem(hidingPlaces);

    handleGuess('shell2', correctSpot);

    animation();


  
});

buttonThreeEl.addEventListener('click', () => {
    resetShells();
    const correctSpot = getRandomItem(hidingPlaces);

    handleGuess('shell3', correctSpot);

    animation();
  

    
  
});

buttonResetEl.addEventListener('click', () => {
    resetShells();

    wins = 0;
    total = 0;

    winsEl.textContent = wins;
    totalEl.textContent = total;
    lossesEl.textContent = total - wins;
  
});

function animation() {

    const elementAnimate = document.getElementById('shell1-image');
    elementAnimate.classList.remove('animation');
    void elementAnimate.offsetWidth; 
    elementAnimate.classList.add('animation');

    const elementAnimate2 = document.getElementById('shell2-image');
    elementAnimate2.classList.remove('animation');
    void elementAnimate2.offsetWidth; 
    elementAnimate2.classList.add('animation');

    const elementAnimate3 = document.getElementById('shell3-image');
    elementAnimate3.classList.remove('animation');
    void elementAnimate3.offsetWidth; 
    elementAnimate3.classList.add('animation');

  
}



function handleGuess(userGuess, correctSpot) {
      // first, right after clicking, we need to remove the emoiji face from the previous hiding place that way we don't end up with more than one emoji face
  
  
    total++;
  
    const correctHidingSpotEl = document.getElementById(`${correctSpot}-image`);

    correctHidingSpotEl.src = './assets/correct-shell.png';
  
    if (userGuess === correctSpot){
        wins++; 
          
    }


    winsEl.textContent = wins;
    totalEl.textContent = total;
    lossesEl.textContent = total - wins;
}

  // get user input
  // use user input to update state 
  // update DOM to reflect the new state