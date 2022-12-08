let currentRoundNumber = 1;
let votesAccrued = 10;
let votesUsed = 0;
let votesAvailable = votesAccrued - votesUsed;
let roundsActive = 0;
let roundsMissed = 0;
let currentRoundWeight = votesAvailable;

const advanceRound = () => {
  if (currentVoteValueA > 0) {
    votesAvailable = votesAvailable - currentVoteValueA + 10;
  } else if (currentVoteValueB > 0) {
    votesAvailable = votesAvailable - currentVoteValueB + 10;
  } else {
    votesAvailable;
  }
  if (voteButtonA.hasAttribute('disabled') || voteButtonB.hasAttribute('disabled') || abstainButton.hasAttribute('disabled')) {
    votesAccrued = votesAccrued + 10;
    votesUsed = votesAccrued - votesAvailable;
    roundsActive++;
  } else {
    roundsActive;
  }
  if (!voteButtonA.hasAttribute('disabled') && !voteButtonB.hasAttribute('disabled') && !abstainButton.hasAttribute('disabled')) {
    roundsMissed++;
    //votesAvailable >= 11 ? votesAvailable-- : votesAvailable;
    votesUsed = votesAccrued - votesAvailable;
  } else {
    roundsMissed;
  }
  currentRoundNumber++;
  currentRoundWeight = votesAvailable;
}

/*
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
*/
