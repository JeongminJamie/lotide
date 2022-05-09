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

 const assertArraysEqual = function(array3, array4) {
  let result2 = eqArrays(array3,array4);
  if (result2 === true) {
    console.log(`❤️❤️❤️: ${array3} and ${array4} are equal ❤️❤️❤️`);
    return result2;
  } else {
    console.log(`😭😭😭 ${array3} and ${array4} are not equal 😭😭😭`);
    return result2;
  }
};


const takeUntil = function(array, callback) {
  let fianl = [];

  for (let item of array) {
    if (!callback(item)) {
      result.push(item) 
      } else {
      return final;
    }
  } 
  return final;
  };

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const test1 = takeUntil(data1, x => x < 0);
console.log(test1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const test2 = takeUntil(data2, x => x === ',');
console.log(test2);

// [ 1, 2, 5, 7, 2 ]
// --
// [ 'I\'ve', 'been', 'to', 'Hollywood']
