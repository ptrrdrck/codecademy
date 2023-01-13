/**
    Dao  Drip © Peter Rodrick.
    Displays the same random chapter of the Daodejing
    from characteristically distinct translations.
**/

const displayArea = document.getElementById('display');
const dripButton = document.getElementById('drip-button');
const dripAgainButton = document.getElementById('drip-again-button');
const yinYang = document.getElementById('yin-yang');
/*const percentReadDisplay = document.getElementById('percent-read');*/

const chapterSelectInput = document.getElementById('chapter-select-input');
const chapterSelectButton = document.getElementById('chapter-select-button');
const addButton = document.getElementById('add-button');
const subtractButton = document.getElementById('subtract-button');

const randNumb = (num) => {
  return Math.floor(Math.random() * num);
};

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

let selectedChapter = 1;
/*let readChapters = [];
let percentRead;*/

/**
 * Random chapter selection
 */
function newRandomChapter () {
  let message = [];
  let rand = randNumb(dao['mitchell'].length);

  for (let translation in dao) {
    switch (translation) {
      case 'mitchell':
        message.push(
          `<span class="chapter-author">Chapter ${rand + 1} by Stephen Mitchell:</span> ${dao[translation][rand]}`
        );
        break;
      case 'fengEnglish':
        message.push(
          `<span class="chapter-author">Chapter ${rand + 1} by Gia-Fu Feng & Jane English:</span> ${dao[translation][rand]}`
        );
        break;
      case 'addissLombardo':
        message.push(
          `<span class="chapter-author">Chapter ${rand + 1} by Stephen Addiss & Stanley Lombardo:</span> ${dao[translation][rand]}`
        );
        break;
      case 'lin':
        message.push(
          `<span class="chapter-author">Chapter ${rand + 1} by Derek Lin:</span> ${dao[translation][rand]}`
        );
        break;
      default:
        message.push('Could not fetch the translations.');
    }
  };
  let shuffled = shuffle(message);
  let formatted = shuffled.join('<br /><span class="chapter-separator">&bull;</span>');
  displayArea.innerHTML = formatted;
  /*if (readChapters.indexOf(rand + 1) === -1) {
    readChapters.push(rand + 1);
  }
  percentRead = `${Math.floor((readChapters.length / 81) * 100)}%`;
  percentReadDisplay.innerHTML = percentRead;*/
};

newRandomChapter();

dripButton.addEventListener('click', () => {
  newRandomChapter();
});

dripAgainButton.addEventListener('click', () => {
  newRandomChapter();
  window.scrollTo({top: 0, behavior: 'smooth'});
});

yinYang.addEventListener('click', () => {
  newRandomChapter();
  window.scrollTo({top: 0, behavior: 'smooth'});
});

/**
 * Manual chapter selection
 */
const handleValueChange = value => {
  if (value <= 1) {
    subtractButton.setAttribute('disabled', true);
  } else if (value < 81) {
    subtractButton.removeAttribute('disabled');
    addButton.removeAttribute('disabled');
  } else if (value = 81) {
    addButton.setAttribute('disabled', true);
  } else {
    subtractButton.setAttribute('disabled', true);
  }
};

addButton.addEventListener('click', () => {
  chapterSelectInput.value = + chapterSelectInput.value + 1;
  selectedChapter = chapterSelectInput.value;
  handleValueChange(chapterSelectInput.value);
});

subtractButton.addEventListener('click', () => {
  chapterSelectInput.value = + chapterSelectInput.value - 1;
  selectedChapter = chapterSelectInput.value;
  handleValueChange(chapterSelectInput.value);
});

chapterSelectInput.addEventListener('click', function(e) {
  chapterSelectInput.value = '';
});

chapterSelectInput.addEventListener('input', function(e) { 
  if (this.value > 81) {
    this.value = 81;
  }
  if (this.value < 1) {
    this.value = 1;
  }
  selectedChapter = e.target.value;
  handleValueChange(e.target.value);
});

chapterSelectInput.addEventListener('change', function(e) {
  selectedChapter = e.target.value;
});

function viewChapter(chapter) {
  let message = [];
  chapter = selectedChapter - 1;

  for (let translation in dao) {
    switch (translation) {
      case 'mitchell':
        message.push(
          `<span class="chapter-author">Chapter ${chapter + 1} by Stephen Mitchell:</span> ${dao[translation][chapter]}`
        );
        break;
      case 'fengEnglish':
        message.push(
          `<span class="chapter-author">Chapter ${chapter + 1} by Gia-Fu Feng & Jane English:</span> ${dao[translation][chapter]}`
        );
        break;
      case 'addissLombardo':
        message.push(
          `<span class="chapter-author">Chapter ${chapter + 1} by Stephen Addiss & Stanley Lombardo:</span> ${dao[translation][chapter]}`
        );
        break;
      case 'lin':
        message.push(
          `<span class="chapter-author">Chapter ${chapter + 1} by Derek Lin:</span> ${dao[translation][chapter]}`
        );
        break;
      default:
        message.push('Could not fetch the translations.');
    }
  };
  let shuffled = shuffle(message);
  let formatted = shuffled.join('<br /><span class="chapter-separator">&bull;</span>');
  displayArea.innerHTML = formatted;
  window.scrollTo({top: 0, behavior: 'smooth'});
  /*if (readChapters.indexOf(selectedChapter) === -1) {
    readChapters.push(selectedChapter);
  }
  percentRead = `${Math.floor((readChapters.length / 81) * 100)}%`;
  percentReadDisplay.innerHTML = percentRead;*/
};

chapterSelectButton.addEventListener('click', () => {
  viewChapter();
});