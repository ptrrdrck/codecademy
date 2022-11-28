let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

const getAbsoluteDistance = (a, b) => {
  return Math.abs(a - b);
}

const compareGuesses = (humanGuess, computerGuess, target) => {
  if (humanGuess >= 0 && humanGuess <= 9) {
    return getAbsoluteDistance(target, humanGuess) <= getAbsoluteDistance(target, computerGuess) ? true : false;
  } else {
    return alert('Guess out of range. Select 0-9.');
  }
}

const updateScore = winner =>
  winner === 'human' ? humanScore++ : computerScore++;

const advanceRound = () => currentRoundNumber++;
