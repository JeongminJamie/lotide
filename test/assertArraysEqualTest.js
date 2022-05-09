const eqArrays = require('../eqArrays')
const assertArraysEqual = require('../assertArraysEqual')

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertArraysEqual(eqArrays([2, 3, 7], [4, 7, 8]), false);
assertArraysEqual(eqArrays([7, 17, 27], [7, 17, 27]), true);