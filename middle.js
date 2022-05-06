const eqArrays = function(first, second) {
  let min;
  if (first.length !== second.length) {
    result = false;
    return result; 
  } else {
    for (let i = 0; i < first.length; i++) {
      if (first[i] !== second[i]) {
        result = false;
        return result;
      } else {
        return true;
      }
    }
    return result;
  }
  };

const assertArraysEqual = function(one, two) {
  let result = eqArrays(one, two);
  if (result === true) {
    console.log(true);
    return result;
  } else {
    console.log(false);
    return result;
  }
};

const middle = function(array) {
  if (array.length <= 2) {
    return [];
  } 
  if (array.length % 2 === 0) {
    return [array[array.length / 2 - 1], array[array.length / 2]];
  }
  if (array.length % 2 === 1) {
    return [array[Math.floor(array.length / 2)]];
  }
};

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]

assertArraysEqual(middle([1, 2, 3]), true);