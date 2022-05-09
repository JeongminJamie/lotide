const eqArrays = function(array1, array2) {
  let result;
  if (array1.length !== array2.length) {
    result = false;
    return result;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        result = false;
        return result;
      } else {
        result = true;
      }
    }
    return result;
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
