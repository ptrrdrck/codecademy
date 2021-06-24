// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

function pAequorFactory(num, arr) {
  return {
    specimenNum: num,
    dna: arr,
    mutate() {
      const randIndex = Math.floor(Math.random() * this.dna.length);
      let newBase = returnRandBase();
      while (this.dna[randIndex] === newBase) {
        newBase = returnRandBase();
      }
      this.dna[randIndex] = newBase;
      return this.dna;
    },
    compareDNA(otherOrg) {
      const sameBaseCount = this.dna.reduce((acc, curr, idx, arr) => {
        if (arr[idx] === otherOrg.dna[idx]) {
          return acc + 1;
        } else {
          return acc;
        }
      }, 0)
      const percentSharedDNA = (sameBaseCount / this.dna.length) * 100;
      const percentSharedDNAHundreths = percentSharedDNA.toFixed(2);
      console.log(`${this.specimenNum} and ${otherOrg.specimenNum} have ${percentSharedDNAHundreths}% DNA in common.`);
    },
    willLikelySurvive() {
      const cGPercent = this.dna.filter(element => element === 'C' || element === 'G');
      return cGPercent.length / this.dna.length >= 0.6;
    },
  };
}

const survivingSpecimens = [];
let idCounter = 1;

while (survivingSpecimens.length < 30) {
  let newOrganism = pAequorFactory(idCounter, mockUpStrand());
  if (newOrganism.willLikelySurvive()) {
    survivingSpecimens.push(newOrganism);
  }
  idCounter++
}

console.log(survivingSpecimens);











