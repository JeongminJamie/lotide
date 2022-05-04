const eqArrays = function(first, second) {
  first = first[0];
  second = second[0];
  if (first === second) {
    return true;
  } else {
    return false;
  }
};

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

const assertEqual = function(actual, expected) {
  console.assert(actual === expected);
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([2, 3, 7], [4, 7, 8]), true); 
assertEqual(eqArrays([7, 17, 27], [7, 17, 27]), true);

