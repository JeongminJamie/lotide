const letterPositions = function(sentence) {
  let results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (!results[sentence[i]]) {
        results[sentence[i]] = [];
      }
      results[sentence[i]].push(i);
    }
  }
  return results;
};

const assertArraysEqual = function(one, two) {
  if (one === two) {
    console.log(true);
  } else {
    console.log(false);
  }
};

console.log(letterPositions("lighthouse in the house"));
console.log(letterPositions("hello"));
assertArraysEqual(letterPositions("hello").e, [1]);

