// global variables
const min = 1,
      max = 20,
      winningNum = 2,
      guessRemaining = 3;

// Get reference to DOM elements
const minimumNum = document.querySelector('.min-num');
const maximumNum = document.querySelector('.max-num');

// set text content of minimumNum and maximumNum
minimumNum.textContent = min;
maximumNum.textContent = max;