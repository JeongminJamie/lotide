const eqArrays = function(first, second) {
  first = first[0];
  second = second[0];
  if (first === second) {
    return true;
  } else {
    return false;
  }
};
const assertArraysEqual = function(array1, array2) {
  let result = eqArrays(array1,array2);
  if (result === true) {
    console.log(`Yes! ${array1} and ${array2} are equal!`);
    return result;
  } else {
    console.log(`Unfortunately, ${array1} and ${array2} are not equal!`);
    return result;
  }
};

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 
assertArraysEqual(eqArrays([2, 3, 7], [4, 7, 8]), true); 
assertArraysEqual(eqArrays([7, 17, 27], [7, 17, 27]), true);