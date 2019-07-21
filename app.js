// global variables
const min = 1,
      max = 10,
      winningNum = getRandomNum();
      
let guessRemaining = 3;

// Get reference to DOM elements
const replayGame = document.querySelector('.content');
const minimumNum = document.querySelector('.min-num');
const maximumNum = document.querySelector('.max-num');
let guess = document.querySelector('#guess-number');
const submitGuess = document.querySelector('#submit-guess');
const message = document.querySelector('#score-update');

// convert user input to a Number

// set text content of minimumNum and maximumNum
minimumNum.textContent = min;
maximumNum.textContent = max;

// Reset Game 
replayGame.addEventListener('mousedown', e => {
  e.target.className === 'play-again' ? window.location.reload() : false;
})

// listen for user submission
submitGuess.addEventListener('click', () => {
  // validate user input
  let guessInput = parseInt(guess.value);
  if(isNaN(guessInput)){
    message.textContent = `Your entry not a number`;
    message.style.color = 'red'; 
  } else if (guessInput < min) {
    message.textContent = `${guessInput} is less than ${min}`;
    message.style.color = 'red';
  } else if (guessInput > max) {
    message.textContent = `${guessInput} is greater than ${max}`;
    message.style.color = 'red';
  } else {
    // invoke play game function
    playGame();
  }
})

// generate random number 
function getRandomNum(){
  return Math.floor(Math.random() * (max-min) +1);
}

// Play game 
const playGame = () => {
  let input = parseInt(guess.value);
  if(input === winningNum){
    message.textContent = `${input} is correct, YOU WON!👍`
    message.style.color = 'green';
    submitGuess.className += 'play-again';
    submitGuess.value = 'Play Again';
    guess.disabled = true;
  } else {
    if(input !== winningNum){
      guessRemaining -= 1;
      message.textContent = `${input} is incorrect, you have ${guessRemaining} attempts remaining ⚠️`;
    } if(guessRemaining === 0){
        message.textContent = `${input} is incorrect, and game over ⛔️`;
        submitGuess.className += 'play-again';
        submitGuess.value = 'Play Again';
        guess.disabled = true;
    }
  } 
}






