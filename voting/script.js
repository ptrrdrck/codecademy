let currentRoundNumber = 1;
let roundStatus = '';
let votesAccrued = 0;
let totalVotesAccrued = 10;
let votesUsed = 0;
let totalVotesUsed = 0;
let votesAvailable = totalVotesAccrued - totalVotesUsed;
let roundsActive = 0;
let activeStreak = 0;
let roundsMissed = 0;
let currentRoundWeight = votesAvailable;

const advanceRound = () => {
  if (votedA == true) {
    roundsActive++;
    activeStreak++;
    roundStatus = 'Voted A';
    votesUsed = currentVoteValueA;
    votesAvailable = votesAvailable - currentVoteValueA;
    totalVotesUsed = totalVotesAccrued - votesAvailable;
    if (activeStreak >= 10) {
      totalVotesAccrued = totalVotesAccrued + 20;
      votesAccrued = 20;
    } 
    else {
      totalVotesAccrued = totalVotesAccrued + 10;
      votesAccrued = 10;
    }
    votesAvailable = totalVotesAccrued - totalVotesUsed;
  } else if (votedB == true) {
    roundsActive++;
    activeStreak++;
    roundStatus = 'Voted B';
    votesUsed = currentVoteValueB;
    votesAvailable = votesAvailable - currentVoteValueB;
    totalVotesUsed = totalVotesAccrued - votesAvailable;
    if (activeStreak >= 10) {
      totalVotesAccrued = totalVotesAccrued + 20;
      votesAccrued = 20;
    } 
    else {
      totalVotesAccrued = totalVotesAccrued + 10;
      votesAccrued = 10;
    }
    votesAvailable = totalVotesAccrued - totalVotesUsed;
  } else if (abstained == true) {
    roundsActive++;
    activeStreak++;
    roundStatus = 'Abstained';
    votesUsed = 0;
    votesAvailable;
    totalVotesUsed;
    if (activeStreak >= 10) {
      totalVotesAccrued = totalVotesAccrued + 20;
      votesAccrued = 20;
    } 
    else {
      totalVotesAccrued = totalVotesAccrued + 10;
      votesAccrued = 10;
    }
    votesAvailable = totalVotesAccrued - totalVotesUsed;
  } else {
    roundsMissed++;
    roundStatus = 'Missed';
    activeStreak = 0;
    roundsActive;
  }
  currentRoundNumber++;
  currentRoundWeight = votesAvailable;
  let history = document.querySelector('#history-area');
  let stats = [`Round ${currentRoundNumber - 1}`,`${roundStatus}`,`${votesAccrued} votes were accrued.`,`${votesUsed} votes were used.`];
  let nodes = stats.map(stat => {
    let p = document.createElement('p');
    p.textContent = stat;
    return p;
  });
  history.prepend(...nodes);
}

const ui = {
  confirm: async (message) => createConfirm(message)
};

const createConfirm = (message) => {
  return new Promise((complete, failed) => {
    $("#confirm-message").text(message);

    $("#confirm-yes").off("click");
    $("#confirm-no").off("click");

    $("#confirm-yes").on("click", () => {
      $(".confirm").hide();
      complete(true);
    });
    $("#confirm-no").on("click", () => {
      $(".confirm").hide();
      complete(false);
    });

    $(".confirm").show();
  });
};

const checkA = async () => {
  const confirm = await ui.confirm("Are you sure you want to vote for A?");
  if (confirm) {
    castVoteA();
  } else { 
  }
};

const checkB = async () => {
  const confirm = await ui.confirm("Are you sure you want to vote for B?");
  if (confirm) {
    castVoteB();
  } else {  
  }
};

const checkAbstain = async () => {
  const confirm = await ui.confirm("Are you sure you want to abstain?");
  if (confirm) {
    castVoteAbstain();
  } else { 
  }
};

const checkNextRound = async () => {
  const confirm = await ui.confirm("Are you sure you want to miss this round?");
  if (confirm) {
    goToNextRound();
  } else { 
  }
};

/*
const getAbsoluteDistance = (a, b) => {
  return Math.abs(a - b);
}
*/
