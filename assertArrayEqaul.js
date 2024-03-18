const eq = require("./eqArrays");

const assertArraysEqual = (obj1, obj2) => {
  const eqArrays = eq.eqArrays;
  const result = eqArrays(obj1, obj2);
  result
    ? console.log(`Assertion Passed: ${obj1} === ${obj2}`)
    : console.log(`Assertion Passed: ${obj1} !== ${obj2}`);
};

assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, "3"]);

module.exports = assertArraysEqual;
