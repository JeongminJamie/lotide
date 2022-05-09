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

const assertArraysEqual = function(array3, array4) {
  let result2 = eqArrays(array3,array4);
  if (result === true) {
    console.log(`❤️❤️❤️: ${array3} and ${array4} are equal ❤️❤️❤️`);
    return result2;
  } else {
    console.log(`😭😭😭 ${array3} and ${array4} are not equal 😭😭😭`);
    return result2;
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
