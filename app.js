// global variables
const min = 1,
      max = 20,
      winningNum = 2,
      guessRemaining = 3;

// Get reference to DOM elements
const minimumNum = document.querySelector('.min-num');
const maximumNum = document.querySelector('.max-num');
let guess = document.querySelector('#guess-number');
const submitGuess = document.querySelector('#submit-guess');
const message = document.querySelector('#score-update');

// set text content of minimumNum and maximumNum
minimumNum.textContent = min;
maximumNum.textContent = max;

// listen for user submission
submitGuess.addEventListener('mousedown', () => {
  // validate user input
  let guessInput = parseInt(guess.value);
  if (isNaN(guessInput)) {
    message.textContent = `Your entry is not a Number`;
    message.style.color = 'red';
  } else if (guessInput < min) {
    message.textContent = `Your entry ${guessInput} is less than ${min}`;
    message.style.color = 'red';
  } else if (guessInput > max) {
    message.textContent = `Your entry ${guessInput} is greater than ${max}`;
    message.style.color = 'red';
  } else {
    // invoke play game function
    playGame();
  }
  return guessInput;
})




