const eqArrays = require('./eqArrays')

const assertArraysEqual = function (array3, array4) {
  if (eqArrays(array3, array4)) {
    console.log(`❤️❤️❤️: ${array3} and ${array4} are equal ❤️❤️❤️`);
  } else {
    console.log(`😭😭😭 ${array3} and ${array4} are not equal 😭😭😭`);
  }
};


module.exports = assertArraysEqual;
