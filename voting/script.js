let currentRoundNumber = 1;
let votesAccrued = 10;
let votesUsed = 0;
let totalVotesUsed = 0;
let votesAvailable = votesAccrued - totalVotesUsed;
let roundsActive = 0;
let activeStreak = 0;
let roundsMissed = 0;
let currentRoundWeight = votesAvailable;

const advanceRound = () => {
  if (votedA == true) {
    roundsActive++;
    activeStreak++;
    votesUsed = currentVoteValueA;
    votesAvailable = votesAvailable - currentVoteValueA;
    totalVotesUsed = votesAccrued - votesAvailable;
    (activeStreak >= 10) ? votesAccrued = votesAccrued + 20 : votesAccrued = votesAccrued + 10;
    votesAvailable = votesAccrued - totalVotesUsed;
  } else if (votedB == true) {
    roundsActive++;
    activeStreak++;
    votesUsed = currentVoteValueB;
    votesAvailable = votesAvailable - currentVoteValueB;
    totalVotesUsed = votesAccrued - votesAvailable;
    (activeStreak >= 10) ? votesAccrued = votesAccrued + 20 : votesAccrued = votesAccrued + 10;
    votesAvailable = votesAccrued - totalVotesUsed;
  } else if (abstained == true) {
    roundsActive++;
    activeStreak++;
    votesAvailable;
    votesUsed = 0;
    totalVotesUsed;
    (activeStreak >= 10) ? votesAccrued = votesAccrued + 20 : votesAccrued = votesAccrued + 10;
    votesAvailable = votesAccrued - totalVotesUsed;
  } else {
    roundsMissed++;
    activeStreak = 0;
    roundsActive;
  }
  currentRoundNumber++;
  currentRoundWeight = votesAvailable;
  let history = document.querySelector('#history');
  let stats = [`Round ${currentRoundNumber - 1}`,`${votesUsed} votes were used.`];
  let nodes = stats.map(stat => {
    let p = document.createElement('p');
    p.textContent = stat;
    return p;
  });
  history.prepend(...nodes);
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
