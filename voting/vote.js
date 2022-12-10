let currentVoteValueA = 0;
let currentVoteValueB = 0;
let votedA = false;
let votedB = false;
let abstained = false;
let aTally = 0;
let aTallyWeight = 0;
let bTally = 0;
let bTallyWeight = 0;
let abstainTally = 0;

const voteValueA = document.getElementById('vote-value-a');
const voteValueB = document.getElementById('vote-value-b');

const aTallyDisplay = document.getElementById('vote-tally-a');
const aTallyWeightDisplay = document.getElementById('total-a-votes');
const bTallyDisplay = document.getElementById('vote-tally-b');
const bTallyWeightDisplay = document.getElementById('total-b-votes');
const abstainTallyDisplay = document.getElementById('abstain-tally');

const roundNumberDisplay = document.getElementById('round-number');
const totalVotesAccruedDisplay = document.getElementById('votes-accrued');
const totalVotesUsedDisplay = document.getElementById('total-votes-used');
const votesAvailableDisplay = document.getElementById('votes-available');
const roundWeightDisplay = document.getElementById('round-weight');
const roundsMissedDisplay = document.getElementById('rounds-missed');
const roundsActiveDisplay = document.getElementById('rounds-active');
const activeStreakDisplay = document.getElementById('active-streak');

const voteButtonA = document.getElementById('vote-button-a');
const voteButtonB = document.getElementById('vote-button-b');
const abstainButton = document.getElementById('abstain');
const nextRoundButton = document.getElementById('next-round')

voteButtonA.addEventListener('click', () => {
  checkA();
});

const castVoteA = () => {
  // Store the number of votes used
  currentVoteValueA = voteValueA.value;
  // Set the flag
  votedA = true;
  // Tally the vote
  aTally++;
  // Calculate the new total votes used for A
  aTallyWeight = parseFloat(aTallyWeight) + parseFloat(currentVoteValueA);
  // Set the correct disabled state for the buttons
  voteButtonA.setAttribute('disabled', true)
  voteButtonB.setAttribute('disabled', true)
  abstainButton.setAttribute('disabled', true)
};

voteButtonB.addEventListener('click', () => {
  checkB();
});

const castVoteB = () => {
  // Store the number of votes used
  currentVoteValueB = voteValueB.value;
  // Set the flag
  votedB = true;
  // Tally the vote
  bTally++;
  // Calculate the new total votes used for B
  bTallyWeight = parseFloat(bTallyWeight) + parseFloat(currentVoteValueB);
  // Set the correct disabled state for the buttons
  voteButtonA.setAttribute('disabled', true)
  voteButtonB.setAttribute('disabled', true)
  abstainButton.setAttribute('disabled', true)
};

abstainButton.addEventListener('click', () => {
  checkAbstain();
});

const castVoteAbstain = () => {
  // Set the flag
  abstained = true;
  // Tally the vote
  abstainTally++;
  // Set the correct disabled state for the buttons
  voteButtonA.setAttribute('disabled', true)
  voteButtonB.setAttribute('disabled', true)
  abstainButton.setAttribute('disabled', true)
};

nextRoundButton.addEventListener('click', () => {
  if (votedA == true || votedB == true || abstained == true) {
    goToNextRound();
  } else {
    checkNextRound();
  }
});

const goToNextRound = () => {
  // Increase the round number
  advanceRound();
  // Display the updated round number and round weight
  roundNumberDisplay.innerText = currentRoundNumber;
  roundWeightDisplay.innerText = currentRoundWeight;
  // Display the updated stats
  totalVotesAccruedDisplay.innerText = totalVotesAccrued;
  totalVotesUsedDisplay.innerText = totalVotesUsed;
  votesAvailableDisplay.innerText = votesAvailable;
  roundsActiveDisplay.innerText = roundsActive;
  activeStreakDisplay.innerText = activeStreak;
  roundsMissedDisplay.innerText = roundsMissed;
  aTallyDisplay.innerText = aTally;
  aTallyWeightDisplay.innerText = aTallyWeight;
  bTallyDisplay.innerText = bTally;
  bTallyWeightDisplay.innerText = bTallyWeight;
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
  //Reset the flags
  votedA = false;
  votedB = false;
  abstained = false;
  //Reset the round-specific variables
  votesAccrued = 0;
  votesUsed = 0;
  roundStatus = '';
};

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
  if (value <= 0) {
    subtractButtonA.setAttribute('disabled', true);
    voteButtonA.setAttribute('disabled', true);
  } else if (value < votesAvailable) {
    subtractButtonA.removeAttribute('disabled');
    addButtonA.removeAttribute('disabled');
    voteButtonA.removeAttribute('disabled');
  } else if (value = votesAvailable) {
    addButtonA.setAttribute('disabled', true);
  } else {
    subtractButtonB.setAttribute('disabled', true);
  }
} 

const handleValueChangeB = value => {
  if (value <= 0) {
    subtractButtonB.setAttribute('disabled', true);
    voteButtonB.setAttribute('disabled', true);
  } else if (value < votesAvailable) {
    subtractButtonB.removeAttribute('disabled');
    addButtonB.removeAttribute('disabled');
    voteButtonB.removeAttribute('disabled');
  } else if (value = votesAvailable) {
    addButtonB.setAttribute('disabled', true);
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
