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
