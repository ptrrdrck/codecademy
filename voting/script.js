let currentRoundNumber = 1;
let votesAccrued = 10;
let votesUsed = 0;
let votesAvailable = votesAccrued - votesUsed;
let roundsActive = 0;
let activeStreak = 0;
let roundsMissed = 0;
let currentRoundWeight = votesAvailable;

const advanceRound = () => {
  if (votedA == true) {
    roundsActive++;
    activeStreak++;
    votesAvailable = votesAvailable - currentVoteValueA;
    votesUsed = votesAccrued - votesAvailable;
    votesAccrued = votesAccrued + 10;
    votesAvailable = votesAccrued - votesUsed;
  } else if (votedB == true) {
    roundsActive++;
    activeStreak++;
    votesAvailable = votesAvailable - currentVoteValueB;
    votesUsed = votesAccrued - votesAvailable;
    votesAccrued = votesAccrued + 10;
    votesAvailable = votesAccrued - votesUsed;
  } else if (abstained == true) {
    roundsActive++;
    activeStreak++;
    votesAvailable;
    votesUsed;
    votesAccrued = votesAccrued + 10;
    votesAvailable = votesAccrued - votesUsed;
  } else {
    roundsMissed++;
    activeStreak = 0;
    roundsActive;
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
