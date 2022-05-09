const assertEqual = require('../assertEqual')
const eqArrays = require('../eqArrays');

eqArrays([1, 2, 3], [1, 2, 3])
eqArrays([1, 2, 3], [3, 2, 1])

eqArrays(["1", "2", "3"], ["1", "2", "3"])
eqArrays(["1", "2", "3"], ["1", "2", 3])

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([2, 3, 7], [4, 7, 8]), true);
assertEqual(eqArrays([7, 17, 27], [7, 17, 27]), true);