let aTally = 0;
let bTally = 0;
let abstainTally = 0;
let currentVoteValueA = 0;
let currentVoteValueB = 0;

const voteValueA = document.getElementById('vote-value-a');
const voteValueB = document.getElementById('vote-value-b');

const aTallyDisplay = document.getElementById('vote-tally-a');
const bTallyDisplay = document.getElementById('vote-tally-b');
const abstainTallyDisplay = document.getElementById('abstain-tally');

const roundNumberDisplay = document.getElementById('round-number');
const votesAccruedDisplay = document.getElementById('votes-accrued');
const votesUsedDisplay = document.getElementById('votes-used');
const votesAvailableDisplay = document.getElementById('votes-available');
const roundWeightDisplay = document.getElementById('round-weight');
const roundsMissedDisplay = document.getElementById('rounds-missed');
const roundsActiveDisplay = document.getElementById('rounds-active');

const voteButtonA = document.getElementById('vote-button-a');
const voteButtonB = document.getElementById('vote-button-b');
const abstainButton = document.getElementById('abstain');
const nextRoundButton = document.getElementById('next-round')

voteButtonA.addEventListener('click', () => {
  // Store the number of votes used
  currentVoteValueA = voteValueA.value;
  // Tally the vote
  aTally++;
  // Set the correct disabled state for the buttons
  voteButtonA.setAttribute('disabled', true)
  voteButtonB.setAttribute('disabled', true)
  abstainButton.setAttribute('disabled', true)
});

voteButtonB.addEventListener('click', () => {
  // Store the number of votes used
  currentVoteValueB = voteValueB.value;
  // Tally the vote
  bTally++;
  // Set the correct disabled state for the buttons
  voteButtonA.setAttribute('disabled', true)
  voteButtonB.setAttribute('disabled', true)
  abstainButton.setAttribute('disabled', true)
});

abstainButton.addEventListener('click', () => {
  // Tally the vote
  abstainTally++;
  // Set the correct disabled state for the buttons
  voteButtonA.setAttribute('disabled', true)
  voteButtonB.setAttribute('disabled', true)
  abstainButton.setAttribute('disabled', true)
});

nextRoundButton.addEventListener('click', () => {
  // Increase the round number
  advanceRound();
  // Display the updated round number and round weight
  roundNumberDisplay.innerText = currentRoundNumber;
  roundWeightDisplay.innerText = currentRoundWeight;
  // Display the updated stats
  votesAccruedDisplay.innerText = votesAccrued;
  votesUsedDisplay.innerText = votesUsed;
  votesAvailableDisplay.innerText = votesAvailable;
  roundsActiveDisplay.innerText = roundsActive;
  roundsMissedDisplay.innerText = roundsMissed;
  aTallyDisplay.innerText = aTally;
  bTallyDisplay.innerText = bTally;
  abstainTallyDisplay.innerText = abstainTally;
  // Set the correct disabled state for the buttons
  voteButtonA.setAttribute('disabled', true);
  voteButtonB.setAttribute('disabled', true);
  abstainButton.removeAttribute('disabled');
  // Reset the vote input boxes
  voteButtonA.innerText = 'Vote "A"';
  voteButtonB.innerText = 'Vote "B"';
  voteValueA.value = '0';
  voteValueB.value = '0';
  subtractButtonA.setAttribute('disabled', true);
  subtractButtonB.setAttribute('disabled', true);
  addButtonA.removeAttribute('disabled');
  addButtonB.removeAttribute('disabled');
});

const addButtonA = document.getElementById('add-a');
const addButtonB = document.getElementById('add-b');
const subtractButtonA = document.getElementById('subtract-a');
const subtractButtonB = document.getElementById('subtract-b');

addButtonA.addEventListener('click', () => {
  voteValueA.value = + voteValueA.value + 1;
  handleValueChangeA(voteValueA.value);
});

addButtonB.addEventListener('click', () => {
  voteValueB.value = + voteValueB.value + 1;
  handleValueChangeB(voteValueB.value);
});

subtractButtonA.addEventListener('click', () => {
  voteValueA.value = + voteValueA.value - 1;
  handleValueChangeA(voteValueA.value);
});

subtractButtonB.addEventListener('click', () => {
  voteValueB.value = + voteValueB.value - 1;
  handleValueChangeB(voteValueB.value);
});

const handleValueChangeA = value => {
  if (value >= 1 && value <= 8) {
    subtractButtonA.removeAttribute('disabled');
    addButtonA.removeAttribute('disabled');
    voteButtonA.removeAttribute('disabled');
  } else if (value > 8) {
    addButtonA.setAttribute('disabled', true);
  } else if (value < 1) {
    subtractButtonA.setAttribute('disabled', true);
    voteButtonA.setAttribute('disabled', true);
  } else {
    subtractButtonA.setAttribute('disabled', true);
  }
}

const handleValueChangeB = value => {
  if (value >= 1 && value < votesAvailable) {
    subtractButtonB.removeAttribute('disabled');
    addButtonB.removeAttribute('disabled');
    voteButtonB.removeAttribute('disabled');
  } else if (value = votesAvailable) {
    addButtonB.setAttribute('disabled', true);
  } else if (value < 1) {
    subtractButtonB.setAttribute('disabled', true);
    voteButtonB.setAttribute('disabled', true);
  } else {
    subtractButtonB.setAttribute('disabled', true);
  }
}

voteValueA.addEventListener('input', function(e) {
  handleValueChangeA(e.target.value);
});

voteValueB.addEventListener('input', function(e) {
  handleValueChangeB(e.target.value);
});
