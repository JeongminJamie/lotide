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

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
assertArraysEqual(eqArrays([2, 3, 7], [4, 7, 8]), true); 
assertArraysEqual(eqArrays([7, 17, 27], [7, 17, 27]), true);