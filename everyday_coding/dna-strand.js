const DNAStrand = function (strg) {
  const strgArr = strg.split('');
  let complementDNA = [];
  for (const char of strgArr) {
    if (char === 'A') {
      complementDNA.push('T');
    }
    if (char === 'T') {
      complementDNA.push('A');
    }
    if (char === 'C') {
      complementDNA.push('G');
    }
    if (char === 'G') {
      complementDNA.push('C');
    }
  }

  return complementDNA.join('');
};

//ALternative solution
function bestPracticeDNAStrand(dna) {
  return dna.replace(/./g, function (c) {
    return bestPracticeDNAStrand.pairs[c];
  });
}

bestPracticeDNAStrand.pairs = {
  A: 'T',
  T: 'A',
  C: 'G',
  G: 'C'
};

console.log(DNAStrand('ATTGC'));
console.log(bestPracticeDNAStrand('ATTGC'));
