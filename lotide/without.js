const eqArrays = function(first, second) {
  first = first[0];
  second = second[0];
  if (first === second) {
    return true;
  } else {
    return false;
  }
};
const assertArraysEqual = function(one, two) {
  if (one === two) {
    console.log(true);
  } else {
    console.log(false);
  }
};

const without = function (before, after) { 
  for (let i = 0; i < before.length; i++) {
    for (let j = 0; j < after.length; j++) {
      if (before[i] === after[j]) {
        before.splice(i, 1);
      }
      }
    }
    console.log(before);
    return before;
};

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);